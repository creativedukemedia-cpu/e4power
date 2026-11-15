import fs from 'node:fs';
import path from 'node:path';
import type { Express, Request } from 'express';

const escape = (value: string) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]!));

export function siteOrigin(req: Pick<Request, 'get' | 'protocol' | 'headers'>) {
  const configured = process.env.PUBLIC_SITE_URL;
  if (configured) {
    try {
      const url = new URL(configured);
      if (['http:', 'https:'].includes(url.protocol)) return url.origin;
    } catch { /* Invalid configuration falls back to the request origin. */ }
  }
  const forwarded = String(req.headers['x-forwarded-proto'] || '').split(',')[0].trim();
  const protocol = forwarded === 'https' ? 'https' : req.protocol;
  const host = req.get('host') || 'localhost';
  try { return new URL(`${protocol}://${host}`).origin; } catch { return 'http://localhost'; }
}

export function canonicalPath(rawUrl: string) {
  const url = new URL(rawUrl, 'https://e4.invalid');
  let pathname = url.pathname.replace(/\/index\.html$/, '/');
  if (!pathname.endsWith('/') && !path.posix.extname(pathname)) pathname += '/';
  // Published Insights articles use a slug query, not separate HTML files.
  const slug = url.searchParams.get('slug');
  if (pathname === '/content/' && slug && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return `${pathname}?slug=${encodeURIComponent(slug)}`;
  return pathname;
}

export function applyPageMetadata(template: string, rawUrl: string, origin: string) {
  const pathname = canonicalPath(rawUrl);
  const canonical = escape(origin + pathname);
  let html = template.replace(/<link\b(?=[^>]*rel=["']canonical["'])[^>]*>/gi, '')
    .replace(/<meta\b(?=[^>]*property=["']og:url["'])[^>]*>/gi, '');
  if (!/^\/(admin|search)\//.test(pathname)) {
    html = html.replace(/<meta\b(?=[^>]*name=["']robots["'])[^>]*>/gi, '');
  }
  const robots = /^\/(admin|search)\//.test(pathname) ? '<meta name="robots" content="noindex, nofollow">' : '';
  return html.replace(/<\/head>/i, `<link rel="canonical" href="${canonical}"><meta property="og:url" content="${canonical}">${robots}</head>`);
}

export function discoverPublicPages(root: string, prefix = ''): string[] {
  if (!fs.existsSync(root)) return [];
  const urls: string[] = [];
  if (fs.existsSync(path.join(root, 'index.html')) && !/^\/(admin|search)\//.test(prefix || '/')) urls.push(prefix || '/');
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (entry.isDirectory() && !['src', 'public', 'assets', 'node_modules'].includes(entry.name)) {
      urls.push(...discoverPublicPages(path.join(root, entry.name), `${prefix || '/'}${entry.name}/`));
    }
  }
  return urls.sort();
}

export function registerCrawlerRoutes(app: Express, root: string) {
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain').send(`User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nDisallow: /search/\nSitemap: ${siteOrigin(req)}/sitemap.xml\n`);
  });
  app.get('/sitemap.xml', (req, res) => {
    const origin = siteOrigin(req);
    const urls = discoverPublicPages(root).map((url) => `<url><loc>${escape(origin + url)}</loc></url>`).join('');
    res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
  });
}

export function notFoundPage() {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>Page not found | E4 Power</title><style>html{color-scheme:dark}body{margin:0;background:#110b00;color:#fff8ef;font-family:Arial,sans-serif;letter-spacing:0}main{min-height:100dvh;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:clamp(2rem,8vw,8rem);gap:1.5rem}img{width:5rem;height:auto}h1{margin:0;font-size:clamp(2.3rem,7vw,5rem);line-height:1;font-weight:900;text-transform:uppercase}p{max-width:34rem;margin:0;line-height:1.65}a{color:#171511;background:#e7ba56;padding:1rem 1.5rem;text-decoration:none;font-weight:700}a:focus-visible{outline:3px solid #fff8ef;outline-offset:4px}</style></head><body><main><img src="/manus-storage/E4POWER_LOGOB12copy_0332af80.webp" alt="E4 Power"><h1>Page not found</h1><p>This page is unavailable. Return to the E4 Power homepage or contact our team for help.</p><a href="/">Return to E4 Power</a><a href="/contact-us/">Contact Us</a></main></body></html>`;
}
