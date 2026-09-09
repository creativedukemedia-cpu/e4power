import bcrypt from 'bcryptjs';
import { parse as parseCookieHeader } from 'cookie';
import type { Express, Request, Response } from 'express';
import multer from 'multer';
import {
  createCmsContentItem,
  createCmsUser,
  countCmsUsers,
  createContactInquiry,
  deleteCmsContentItem,
  getCmsContentItemById,
  getCmsUserByEmail,
  getCmsUserById,
  getPublishedCmsContentItemBySlug,
  listCmsContentItems,
  listCmsUsers,
  listPublishedCmsContentItems,
  touchCmsUserSignIn,
  updateCmsContentItem,
  updateCmsUser,
} from './db';
import type { InsertCmsContentItem } from '../drizzle/schema';
import { getSessionCookieOptions } from './_core/cookies';
import { CMS_SESSION_COOKIE, getCmsSessionMaxAge, issueCmsSession, verifyCmsSession } from './cmsAuth';
import { storagePut } from './storage';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

export const inquiryRouting = {
  'Grants, Funding Opportunities & Proposal Support': {
    lane: 'Grants and Research Development',
    reason: 'Funding opportunities, proposal support, and grant strategy',
  },
  'Research Development / Research Administration': {
    lane: 'Grants and Research Development',
    reason: 'Research development and research administration',
  },
  'Strategic Planning & Organizational Capacity Building': {
    lane: 'Strategy and Capacity Building',
    reason: 'Strategic planning and organizational capacity building',
  },
  'Workforce Development & Training': {
    lane: 'Workforce and Training',
    reason: 'Workforce development and training',
  },
  'Business Development / Partnerships': {
    lane: 'Business Development and Partnerships',
    reason: 'Business development and partnership opportunities',
  },
  'AI, Technology & Innovation': {
    lane: 'Innovation and Technology',
    reason: 'AI, technology, and innovation support',
  },
  'Events, Workshops or Speaking Engagements': {
    lane: 'Engagements and Communications',
    reason: 'Events, workshops, and speaking engagements',
  },
  'Coaching / Leadership Development': {
    lane: 'Leadership Development',
    reason: 'Coaching and leadership development',
  },
  'Communications / Marketing': {
    lane: 'Engagements and Communications',
    reason: 'Communications and marketing support',
  },
  'Government / Defense / HBCU Engagement': {
    lane: 'Public Sector and HBCU Engagement',
    reason: 'Government, defense, and HBCU engagement',
  },
  'General Inquiry / Not Sure': {
    lane: 'General Intake',
    reason: 'General inquiry awaiting team review',
  },
} as const;

const organizationTypes = new Set([
  'College / University / HBCU',
  'Federal, State or Local Government',
  'Business / Corporation',
  'Nonprofit / Community Organization',
  'K-12 School / School District',
  'Faith-Based Organization',
  'Workforce / Economic Development Organization',
  'Individual / Consultant',
  'Other',
]);

function normalizeInquiryText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export function normalizeContactInquiry(body: Record<string, unknown> | null | undefined) {
  const name = normalizeInquiryText(body?.name, 160);
  const email = normalizeInquiryText(body?.email, 320).toLowerCase();
  const inquiryTopic = normalizeInquiryText(body?.inquiryTopic, 160) as keyof typeof inquiryRouting;
  const organizationType = normalizeInquiryText(body?.organizationType, 160);
  const message = normalizeInquiryText(body?.message, 5000);

  if (!name || !email || !inquiryTopic || !organizationType || !message) {
    return { error: 'Please complete each inquiry field.' } as const;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { error: 'Please enter a valid email address.' } as const;
  }
  if (!(inquiryTopic in inquiryRouting) || !organizationTypes.has(organizationType)) {
    return { error: 'Please select a listed inquiry topic and organization type.' } as const;
  }

  return {
    value: {
      name,
      email,
      inquiryTopic,
      organizationType,
      message,
      routingLane: inquiryRouting[inquiryTopic].lane,
      routingReason: inquiryRouting[inquiryTopic].reason,
      status: 'new' as const,
    },
  } as const;
}

async function getCmsUserFromRequest(req: Request) {
  const cookies = parseCookieHeader(req.headers.cookie || '');
  const token = cookies[CMS_SESSION_COOKIE];
  if (!token) return null;
  try {
    const payload = await verifyCmsSession(token);
    const userId = Number(payload.sub);
    if (!Number.isFinite(userId)) return null;
    const user = await getCmsUserById(userId);
    if (!user || !user.isActive) return null;
    return user;
  } catch {
    return null;
  }
}

function sanitizeUser(user: NonNullable<Awaited<ReturnType<typeof getCmsUserFromRequest>>> | Awaited<ReturnType<typeof getCmsUserByEmail>>) {
  if (!user) return null;
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    isActive: Boolean(user.isActive),
    lastSignedIn: user.lastSignedIn,
  };
}

function normalizeContentPayload(body: Record<string, unknown> | null | undefined, userId: number, existingPublishedAt?: Date | null) {
  const { title, slug, contentType, excerpt, body: contentBody, status } = body ?? {};
  if (!title || !slug || !contentType) {
    return { error: 'title, slug, and contentType are required' } as const;
  }

  const normalizedStatus = status === 'published' ? 'published' : 'draft';
  const normalizedContentType = String(contentType).trim() as InsertCmsContentItem['contentType'];
  return {
    value: {
      title: String(title).trim(),
      slug: String(slug).trim().toLowerCase(),
      contentType: normalizedContentType,
      excerpt: excerpt ? String(excerpt) : null,
      body: contentBody ? String(contentBody) : null,
      status: normalizedStatus,
      updatedByUserId: userId,
      publishedAt: normalizedStatus === 'published' ? existingPublishedAt ?? new Date() : null,
      createdByUserId: userId,
    },
  } as const;
}

export function registerCmsRoutes(app: Express) {
  app.post('/api/contact-inquiries', async (req: Request, res: Response) => {
    if (normalizeInquiryText(req.body?.companyWebsite, 200)) {
      res.status(201).json({ success: true });
      return;
    }

    const normalized = normalizeContactInquiry(req.body);
    if ('error' in normalized) {
      res.status(400).json(normalized);
      return;
    }

    try {
      await createContactInquiry(normalized.value);
      res.status(201).json({
        success: true,
        routing: {
          lane: normalized.value.routingLane,
          reason: normalized.value.routingReason,
        },
      });
    } catch (error) {
      console.error('[Contact inquiry] Failed to save inquiry', error);
      res.status(503).json({ error: 'We could not send your inquiry. Please try again.' });
    }
  });

  app.get('/api/cms/public/content', async (req: Request, res: Response) => {
    const contentType = typeof req.query.contentType === 'string' ? req.query.contentType : undefined;
    const normalizedContentType = contentType && ['white-paper', 'newsletter', 'funding-opportunity', 'thought-leadership'].includes(contentType)
      ? (contentType as InsertCmsContentItem['contentType'])
      : undefined;
    const items = await listPublishedCmsContentItems(normalizedContentType);
    res.json({ items });
  });

  app.get('/api/cms/public/content/:slug', async (req: Request, res: Response) => {
    const slug = String(req.params.slug || '').trim().toLowerCase();
    if (!slug) {
      res.status(400).json({ error: 'slug is required' });
      return;
    }
    const item = await getPublishedCmsContentItemBySlug(slug);
    if (!item) {
      res.status(404).json({ error: 'Published content item not found' });
      return;
    }
    res.json({ item });
  });

  app.get('/api/cms/bootstrap-status', async (_req: Request, res: Response) => {
    const count = await countCmsUsers();
    res.json({ requiresBootstrap: count === 0 });
  });

  app.post('/api/cms/bootstrap', async (req: Request, res: Response) => {
    const count = await countCmsUsers();
    if (count > 0) {
      res.status(409).json({ error: 'CMS admin account already exists' });
      return;
    }

    const { email, password, name } = req.body ?? {};
    if (!email || !password || !name) {
      res.status(400).json({ error: 'name, email, and password are required' });
      return;
    }
    if (String(password).length < 10) {
      res.status(400).json({ error: 'Password must be at least 10 characters long' });
      return;
    }

    const passwordHash = await bcrypt.hash(String(password), 12);
    const user = await createCmsUser({
      email: String(email).trim().toLowerCase(),
      name: String(name).trim(),
      passwordHash,
      role: 'admin',
      isActive: 1,
    });

    if (!user) {
      res.status(500).json({ error: 'Failed to create CMS admin user' });
      return;
    }

    const token = await issueCmsSession({
      sub: String(user.id),
      email: user.email,
      role: user.role,
      name: user.name,
    });
    const cookieOptions = getSessionCookieOptions(req);
    res.cookie(CMS_SESSION_COOKIE, token, { ...cookieOptions, maxAge: getCmsSessionMaxAge() });
    res.json({ user: sanitizeUser(user) });
  });

  app.post('/api/cms/login', async (req: Request, res: Response) => {
    const { email, password } = req.body ?? {};
    if (!email || !password) {
      res.status(400).json({ error: 'email and password are required' });
      return;
    }

    const user = await getCmsUserByEmail(String(email).trim().toLowerCase());
    if (!user || !user.isActive) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const valid = await bcrypt.compare(String(password), user.passwordHash);
    if (!valid) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    await touchCmsUserSignIn(user.id);
    const token = await issueCmsSession({
      sub: String(user.id),
      email: user.email,
      role: user.role,
      name: user.name,
    });
    const cookieOptions = getSessionCookieOptions(req);
    res.cookie(CMS_SESSION_COOKIE, token, { ...cookieOptions, maxAge: getCmsSessionMaxAge() });
    res.json({ user: sanitizeUser(user) });
  });

  app.post('/api/cms/logout', async (req: Request, res: Response) => {
    const cookieOptions = getSessionCookieOptions(req);
    res.clearCookie(CMS_SESSION_COOKIE, { ...cookieOptions, maxAge: -1 });
    res.json({ success: true });
  });

  app.get('/api/cms/me', async (req: Request, res: Response) => {
    const user = await getCmsUserFromRequest(req);
    if (!user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }
    res.json({ user: sanitizeUser(user) });
  });

  app.get('/api/cms/content', async (req: Request, res: Response) => {
    const user = await getCmsUserFromRequest(req);
    if (!user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }
    const items = await listCmsContentItems();
    res.json({ items });
  });

  app.get('/api/cms/users', async (req: Request, res: Response) => {
    const user = await getCmsUserFromRequest(req);
    if (!user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }
    if (user.role !== 'admin') {
      res.status(403).json({ error: 'Admin access required' });
      return;
    }
    const users = await listCmsUsers();
    res.json({ users: users.map(sanitizeUser) });
  });

  app.post('/api/cms/users', async (req: Request, res: Response) => {
    const user = await getCmsUserFromRequest(req);
    if (!user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }
    if (user.role !== 'admin') {
      res.status(403).json({ error: 'Admin access required' });
      return;
    }

    const { email, password, name, role } = req.body ?? {};
    if (!email || !password || !name) {
      res.status(400).json({ error: 'name, email, and password are required' });
      return;
    }
    if (String(password).length < 10) {
      res.status(400).json({ error: 'Password must be at least 10 characters long' });
      return;
    }
    const normalizedEmail = String(email).trim().toLowerCase();
    const existingUser = await getCmsUserByEmail(normalizedEmail);
    if (existingUser) {
      res.status(409).json({ error: 'A CMS staff user with that email already exists' });
      return;
    }
    const normalizedRole = role === 'editor' ? 'editor' : 'admin';
    const passwordHash = await bcrypt.hash(String(password), 12);
    const createdUser = await createCmsUser({
      email: normalizedEmail,
      name: String(name).trim(),
      passwordHash,
      role: normalizedRole,
      isActive: 1,
    });
    res.json({ user: sanitizeUser(createdUser) });
  });

  app.put('/api/cms/users/:id', async (req: Request, res: Response) => {
    const user = await getCmsUserFromRequest(req);
    if (!user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }
    if (user.role !== 'admin') {
      res.status(403).json({ error: 'Admin access required' });
      return;
    }

    const userId = Number(req.params.id);
    if (!Number.isFinite(userId)) {
      res.status(400).json({ error: 'Invalid CMS user id' });
      return;
    }
    const existingUser = await getCmsUserById(userId);
    if (!existingUser) {
      res.status(404).json({ error: 'CMS user not found' });
      return;
    }

    const nextRole = req.body?.role === 'editor' ? 'editor' : 'admin';
    const nextActive = req.body?.isActive === 0 || req.body?.isActive === '0' || req.body?.isActive === false ? 0 : 1;
    const updatedUser = await updateCmsUser(userId, { role: nextRole, isActive: nextActive });
    res.json({ user: sanitizeUser(updatedUser) });
  });

  app.post('/api/cms/content', async (req: Request, res: Response) => {
    const user = await getCmsUserFromRequest(req);
    if (!user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const normalized = normalizeContentPayload(req.body, user.id);
    if ('error' in normalized) {
      res.status(400).json({ error: normalized.error });
      return;
    }

    const item = await createCmsContentItem(normalized.value);
    res.json({ item });
  });

  app.put('/api/cms/content/:id', async (req: Request, res: Response) => {
    const user = await getCmsUserFromRequest(req);
    if (!user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const itemId = Number(req.params.id);
    if (!Number.isFinite(itemId)) {
      res.status(400).json({ error: 'Invalid content item id' });
      return;
    }

    const existing = await getCmsContentItemById(itemId);
    if (!existing) {
      res.status(404).json({ error: 'Content item not found' });
      return;
    }

    const normalized = normalizeContentPayload(req.body, user.id, existing.publishedAt ?? null);
    if ('error' in normalized) {
      res.status(400).json({ error: normalized.error });
      return;
    }

    const item = await updateCmsContentItem(itemId, normalized.value);
    res.json({ item });
  });

  app.post('/api/cms/content/:id/cover-image', upload.single('coverImage'), async (req: Request, res: Response) => {
    const user = await getCmsUserFromRequest(req);
    if (!user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const itemId = Number(req.params.id);
    if (!Number.isFinite(itemId)) {
      res.status(400).json({ error: 'Invalid content item id' });
      return;
    }

    const existing = await getCmsContentItemById(itemId);
    if (!existing) {
      res.status(404).json({ error: 'Content item not found' });
      return;
    }

    const file = req.file;
    if (!file) {
      res.status(400).json({ error: 'coverImage file is required' });
      return;
    }
    if (!file.mimetype.startsWith('image/')) {
      res.status(400).json({ error: 'coverImage must be an image file' });
      return;
    }

    const safeName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '-').toLowerCase();
    const stored = await storagePut(`cms/content-${itemId}/${safeName || 'cover-image'}`, file.buffer, file.mimetype);
    const item = await updateCmsContentItem(itemId, {
      coverImageUrl: stored.url,
      updatedByUserId: user.id,
    });

    res.json({ item });
  });

  app.delete('/api/cms/content/:id/cover-image', async (req: Request, res: Response) => {
    const user = await getCmsUserFromRequest(req);
    if (!user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const itemId = Number(req.params.id);
    if (!Number.isFinite(itemId)) {
      res.status(400).json({ error: 'Invalid content item id' });
      return;
    }

    const existing = await getCmsContentItemById(itemId);
    if (!existing) {
      res.status(404).json({ error: 'Content item not found' });
      return;
    }

    const item = await updateCmsContentItem(itemId, {
      coverImageUrl: null,
      updatedByUserId: user.id,
    });

    res.json({ item });
  });

  app.delete('/api/cms/content/:id', async (req: Request, res: Response) => {
    const user = await getCmsUserFromRequest(req);
    if (!user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    const itemId = Number(req.params.id);
    if (!Number.isFinite(itemId)) {
      res.status(400).json({ error: 'Invalid content item id' });
      return;
    }

    const existing = await getCmsContentItemById(itemId);
    if (!existing) {
      res.status(404).json({ error: 'Content item not found' });
      return;
    }

    await deleteCmsContentItem(itemId);
    res.json({ success: true });
  });
}
