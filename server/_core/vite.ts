import type { Express } from "express";
import express from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import { applyPageMetadata, notFoundPage, registerCrawlerRoutes, siteOrigin } from "../siteReadiness";

const CLIENT_ROOT = path.resolve(import.meta.dirname, "../..", "client");
const DIST_ROOT = path.resolve(import.meta.dirname, "../..", "dist", "public");

export function resolveHtmlEntry(rootDir: string, rawUrl: string): string | null {
  let pathname: string;
  try { pathname = decodeURIComponent(rawUrl.split("?")[0] || "/"); } catch { return null; }
  const normalized = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  const candidates = [normalized, normalized ? path.join(normalized, "index.html") : "index.html"].filter(Boolean);
  for (const candidate of candidates) {
    const fullPath = path.resolve(rootDir, candidate);
    const relative = path.relative(path.resolve(rootDir), fullPath);
    if (relative.startsWith("..") || path.isAbsolute(relative) || !fullPath.endsWith(".html")) continue;
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) return fullPath;
  }
  return null;
}

export function bustKnownEntryScripts(template: string) {
  return template
    .replace(`src="/src/main.tsx"`, `src="/src/main.tsx?v=${nanoid()}"`)
    .replace(`src="/src/admin/main.tsx"`, `src="/src/admin/main.tsx?v=${nanoid()}"`)
    .replace(`src="/src/content/main.tsx"`, `src="/src/content/main.tsx?v=${nanoid()}"`);
}

function sendNotFound(req: express.Request, res: express.Response) {
  res.set('X-Robots-Tag', 'noindex, nofollow');
  if (req.path.startsWith('/api/')) {
    res.status(404).json({ error: 'Endpoint not found' });
    return;
  }
  res.status(404).type('html').send(notFoundPage());
}

export async function setupVite(app: Express, server: Server) {
  // Source scanning remains development-only. Production containers contain dist/public.
  const { default: viteConfig } = await import("../../vite.config");
  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: { middlewareMode: true, hmr: { server }, allowedHosts: true as const },
    appType: "custom",
  });
  registerCrawlerRoutes(app, CLIENT_ROOT);
  app.use("*", async (req, res, next) => {
    if (!['GET', 'HEAD'].includes(req.method)) return next();
    const entry = resolveHtmlEntry(CLIENT_ROOT, req.originalUrl);
    if (!entry) return next();
    try {
      let template = await fs.promises.readFile(entry, "utf-8");
      template = applyPageMetadata(bustKnownEntryScripts(template), req.originalUrl, siteOrigin(req));
      const page = await vite.transformIndexHtml(req.originalUrl, template);
      res.status(200).set('Cache-Control', 'no-cache').type('html').send(page);
    } catch (error) {
      vite.ssrFixStacktrace(error as Error);
      next(error);
    }
  });
  app.use(vite.middlewares);
  app.use("*", sendNotFound);
}

export function serveStatic(app: Express) {
  const distPath = process.env.NODE_ENV === "development" ? DIST_ROOT : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) console.error(`Could not find the build directory: ${distPath}, make sure to build the client first`);
  registerCrawlerRoutes(app, distPath);
  // Resolve HTML first so express.static cannot bypass canonical and crawler metadata.
  app.use("*", (req, res, next) => {
    if (!['GET', 'HEAD'].includes(req.method)) return next();
    const entry = resolveHtmlEntry(distPath, req.originalUrl);
    if (!entry) return next();
    const template = fs.readFileSync(entry, 'utf8');
    res.status(200).set('Cache-Control', 'no-cache').type('html').send(applyPageMetadata(template, req.originalUrl, siteOrigin(req)));
  });
  app.use(express.static(distPath, { index: false, redirect: false }));
  app.use("*", sendNotFound);
}
