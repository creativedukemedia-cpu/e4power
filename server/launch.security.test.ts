import express from 'express';
import type { Server } from 'node:http';
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { CMS_SESSION_COOKIE, issueCmsSession } from './cmsAuth';
import { registerCmsRoutes, normalizeContactInquiry, normalizeContentPayload } from './cmsRoutes';
import { validBootstrapToken, validCoverImage, validStaffFields } from './cmsSecurity';
import { createContactInquiry, getCmsUserById, getContactInquiryById, listContactInquiries, updateContactInquiryStatus } from './db';

vi.mock('./db', () => ({
  createContactInquiry: vi.fn(), getCmsUserById: vi.fn(), getContactInquiryById: vi.fn(), listContactInquiries: vi.fn(), updateContactInquiryStatus: vi.fn(),
  countCmsUsers: vi.fn().mockResolvedValue(1), listPublishedCmsContentItems: vi.fn().mockResolvedValue([]),
  getPublishedCmsContentItemBySlug: vi.fn(), createCmsContentItem: vi.fn(), createCmsUser: vi.fn(), deleteCmsContentItem: vi.fn(),
  getCmsContentItemById: vi.fn(), getCmsUserByEmail: vi.fn(), listCmsContentItems: vi.fn(), listCmsUsers: vi.fn(),
  touchCmsUserSignIn: vi.fn(), updateCmsContentItem: vi.fn(), updateCmsUser: vi.fn(),
}));

const validInquiry = { name: 'Avery Smith', email: 'avery@example.org', inquiryTopic: 'General Inquiry / Not Sure', organizationType: 'Other', message: 'An inquiry for the unit test only.' };
let server: Server;
let origin = '';
const originalSecret = process.env.JWT_SECRET;
const originalSetupToken = process.env.CMS_BOOTSTRAP_TOKEN;

beforeAll(async () => {
  process.env.JWT_SECRET = 'isolated-launch-security-test-secret';
  delete process.env.CMS_BOOTSTRAP_TOKEN;
  const app = express();
  app.use(express.json());
  registerCmsRoutes(app);
  server = await new Promise<Server>((resolve) => { const active = app.listen(0, '127.0.0.1', () => resolve(active)); });
  const address = server.address();
  origin = `http://127.0.0.1:${typeof address === 'object' && address ? address.port : 0}`;
});

afterAll(async () => {
  await new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  if (originalSecret === undefined) delete process.env.JWT_SECRET; else process.env.JWT_SECRET = originalSecret;
  if (originalSetupToken === undefined) delete process.env.CMS_BOOTSTRAP_TOKEN; else process.env.CMS_BOOTSTRAP_TOKEN = originalSetupToken;
});

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(createContactInquiry).mockResolvedValue({ id: 1 } as never);
  vi.mocked(getCmsUserById).mockImplementation(async (id) => ({ id, role: id === 2 ? 'editor' : 'admin', isActive: 1, email: 'staff@example.org', name: 'Staff' } as never));
  vi.mocked(listContactInquiries).mockResolvedValue([{ ...validInquiry, id: 1, status: 'new' }] as never);
  vi.mocked(getContactInquiryById).mockResolvedValue({ id: 1 } as never);
  vi.mocked(updateContactInquiryStatus).mockResolvedValue({ id: 1, status: 'reviewed' } as never);
});

async function request(path: string, method = 'GET', body?: unknown, role?: 'admin' | 'editor', source = origin) {
  const headers: Record<string, string> = { Origin: source, 'Content-Type': 'application/json' };
  if (role) {
    const token = await issueCmsSession({ sub: role === 'admin' ? '1' : '2', email: 'staff@example.org', name: 'Staff', role });
    headers.Cookie = `${CMS_SESSION_COOKIE}=${token}`;
  }
  return fetch(origin + path, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) });
}

describe('staging launch protections', () => {
  it('accepts a real same-origin inquiry and persists it through the mocked store', async () => {
    const response = await request('/api/contact-inquiries', 'POST', validInquiry);
    expect(response.status).toBe(201);
    expect(await response.json()).toMatchObject({ success: true });
    expect(createContactInquiry).toHaveBeenCalledWith(expect.objectContaining({ status: 'new', routingLane: 'General Intake' }));
  });
  it('rejects cross-origin submissions before accessing storage', async () => {
    expect((await request('/api/contact-inquiries', 'POST', validInquiry, undefined, 'https://untrusted.example')).status).toBe(403);
    expect(createContactInquiry).not.toHaveBeenCalled();
  });
  it('rejects inherited object keys and oversized fields rather than silently truncating', () => {
    expect(normalizeContactInquiry({ ...validInquiry, inquiryTopic: 'constructor' })).toHaveProperty('error');
    expect(normalizeContactInquiry({ ...validInquiry, inquiryTopic: '__proto__' })).toHaveProperty('error');
    expect(normalizeContactInquiry({ ...validInquiry, message: 'x'.repeat(5001) })).toHaveProperty('error');
    expect(normalizeContactInquiry({ ...validInquiry, name: {} })).toHaveProperty('error');
  });
  it('protects inquiry privacy from visitors and editors', async () => {
    expect((await request('/api/cms/inquiries')).status).toBe(401);
    expect((await request('/api/cms/inquiries', 'GET', undefined, 'editor')).status).toBe(403);
    expect(listContactInquiries).not.toHaveBeenCalled();
  });
  it('allows administrators to retrieve and reversibly review inquiries', async () => {
    const response = await request('/api/cms/inquiries?offset=0', 'GET', undefined, 'admin');
    expect(response.status).toBe(200);
    expect(response.headers.get('cache-control')).toBe('no-store');
    expect(listContactInquiries).toHaveBeenCalledWith(51, 0);
    expect((await request('/api/cms/inquiries/1', 'PATCH', { status: 'reviewed' }, 'admin')).status).toBe(200);
    expect(updateContactInquiryStatus).toHaveBeenCalledWith(1, 'reviewed');
  });
  it('rejects a cross-origin review update even with a valid staff cookie', async () => {
    expect((await request('/api/cms/inquiries/1', 'PATCH', { status: 'reviewed' }, 'admin', 'https://untrusted.example')).status).toBe(403);
    expect(updateContactInquiryStatus).not.toHaveBeenCalled();
  });
  it('rejects unsupported review states and invalid offsets', async () => {
    expect((await request('/api/cms/inquiries?offset=-1', 'GET', undefined, 'admin')).status).toBe(400);
    expect((await request('/api/cms/inquiries/1', 'PATCH', { status: 'deleted' }, 'admin')).status).toBe(400);
    expect(updateContactInquiryStatus).not.toHaveBeenCalled();
  });
  it('keeps initial setup closed without an owner token', async () => {
    expect(validBootstrapToken('anything')).toBe(false);
    expect((await request('/api/cms/bootstrap', 'POST', { name: 'Admin', email: 'admin@example.org', password: 'unit-test-password' })).status).toBe(403);
  });
  it('validates publishing enums, slug syntax and content limits', () => {
    const item = { title: 'Research insights', slug: 'research-insights', contentType: 'thought-leadership', status: 'draft' };
    expect(normalizeContentPayload(item, 1)).toHaveProperty('value');
    expect(normalizeContentPayload({ ...item, contentType: 'unsupported' }, 1)).toHaveProperty('error');
    expect(normalizeContentPayload({ ...item, slug: '../../admin' }, 1)).toHaveProperty('error');
    expect(normalizeContentPayload({ ...item, title: 'x'.repeat(221) }, 1)).toHaveProperty('error');
  });
  it('rejects scripted and MIME-spoofed covers and unsafe staff field lengths', () => {
    expect(validCoverImage({ mimetype: 'image/svg+xml', buffer: Buffer.from('<svg onload="alert(1)"/>') })).toBe(false);
    expect(validCoverImage({ mimetype: 'image/png', buffer: Buffer.from('not a png') })).toBe(false);
    expect(validStaffFields({ name: 'Staff', email: 'invalid', password: 'unit-test-password' })).toBe(false);
    expect(validStaffFields({ name: 'Staff', email: 'staff@example.org', password: 'x'.repeat(73) })).toBe(false);
  });
});
