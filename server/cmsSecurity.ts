import { timingSafeEqual } from 'node:crypto';
import type { Request, RequestHandler } from 'express';

export function isSameOriginMutation(req: Pick<Request, 'headers' | 'get' | 'protocol'>) {
  if (req.headers['sec-fetch-site'] === 'cross-site') return false;
  const host = req.get('host');
  const source = req.get('origin') || req.get('referer');
  if (!host || !source || source === 'null') return false;
  try {
    const parsed = new URL(source);
    const forwardedProtocol = String(req.headers['x-forwarded-proto'] || '').split(',')[0].trim();
    const protocol = forwardedProtocol === 'https' ? 'https:' : `${req.protocol}:`;
    return parsed.host.toLowerCase() === host.toLowerCase() && parsed.protocol === protocol;
  } catch {
    return false;
  }
}

export const protectCmsMutations: RequestHandler = (req, res, next) => {
  res.set('X-Robots-Tag', 'noindex, nofollow');
  if (!req.path.startsWith('/public/')) res.set('Cache-Control', 'no-store');
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return next();
  if (!isSameOriginMutation(req)) {
    res.status(403).json({ error: 'Please submit this request from the E4 Power website.' });
    return;
  }
  next();
};

export function validBootstrapToken(value: unknown) {
  const expected = process.env.CMS_BOOTSTRAP_TOKEN;
  if (!expected || typeof value !== 'string' || !value) return false;
  const actualBytes = Buffer.from(value);
  const expectedBytes = Buffer.from(expected);
  return actualBytes.length === expectedBytes.length && timingSafeEqual(actualBytes, expectedBytes);
}

export function rateLimitRequests(maximum: number, windowMs: number): RequestHandler {
  const attempts = new Map<string, { count: number; resets: number }>();
  return (req, res, next) => {
    const now = Date.now();
    const key = req.ip || req.socket.remoteAddress || 'unknown';
    attempts.forEach((entry, address) => {
      if (entry.resets <= now) attempts.delete(address);
    });
    if (!attempts.has(key) && attempts.size >= 4096) {
      res.status(429).json({ error: 'Please wait before trying again.' });
      return;
    }
    const entry = attempts.get(key) || { count: 0, resets: now + windowMs };
    entry.count += 1;
    attempts.set(key, entry);
    if (entry.count > maximum) {
      res.set('Retry-After', String(Math.max(1, Math.ceil((entry.resets - now) / 1000))));
      res.status(429).json({ error: 'Please wait before trying again.' });
      return;
    }
    next();
  };
}

export function validStaffFields(body: Record<string, unknown>) {
  const { name, email, password } = body;
  return typeof name === 'string' && name.trim().length > 0 && name.trim().length <= 160
    && typeof email === 'string' && email.trim().length <= 320 && /^\S+@\S+\.\S+$/.test(email.trim())
    && typeof password === 'string' && password.length >= 10 && Buffer.byteLength(password, 'utf8') <= 72;
}

export function validCoverImage(file: { mimetype: string; buffer: Buffer }) {
  const buffer = file.buffer;
  if (file.mimetype === 'image/png') return buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  if (file.mimetype === 'image/jpeg') return buffer.subarray(0, 3).equals(Buffer.from([255, 216, 255]));
  if (file.mimetype === 'image/webp') return buffer.subarray(0, 4).toString('ascii') === 'RIFF' && buffer.subarray(8, 12).toString('ascii') === 'WEBP';
  if (file.mimetype === 'image/gif') return ['GIF87a', 'GIF89a'].includes(buffer.subarray(0, 6).toString('ascii'));
  return false;
}
