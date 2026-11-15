import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { applyPageMetadata, canonicalPath, discoverPublicPages, notFoundPage } from './siteReadiness';

const root = path.resolve(import.meta.dirname, '../client');
const read = (file: string) => fs.readFileSync(path.join(root, file), 'utf8');

describe('launch metadata and source readiness', () => {
  it('canonicalizes existing directory aliases and preserves published article identity', () => {
    expect(canonicalPath('/about-us/index.html?audit=1')).toBe('/about-us/');
    expect(canonicalPath('/services/financial-management')).toBe('/services/financial-management/');
    expect(canonicalPath('/content/index.html?slug=research-growth&q=ignored')).toBe('/content/?slug=research-growth');
    const html = applyPageMetadata('<head><meta name="robots" content="noindex"></head>', '/about-us/', 'https://main.example');
    expect(html).toContain('https://main.example/about-us/');
    expect(html).not.toContain('noindex');
  });
  it('keeps admin and search excluded from indexing and the sitemap', () => {
    expect(applyPageMetadata('<head></head>', '/admin/', 'https://main.example')).toContain('noindex, nofollow');
    const pages = discoverPublicPages(root);
    expect(pages).toContain('/about-us/');
    expect(pages).toContain('/team-members/larico-j-treadwell/');
    expect(pages).not.toContain('/admin/');
    expect(pages).not.toContain('/search/');
    expect(notFoundPage()).toContain('Page not found');
  });
  it('removes obsolete homepage requests and unwanted newsletter signup', () => {
    const homepage = read('index.html');
    expect(homepage).not.toContain('src="/manus-storage/E4POWER_LOGOB12_2e6f3343.webp"');
    expect(homepage).not.toContain('src="/manus-storage/E4-New-Landing_Bridge-Overlay_e317a4fd.webp"');
    expect(homepage).not.toContain('name="Email-Newsletter"');
    expect(read('src/e4-global-navigation.js')).toContain('safetyTimer = window.setTimeout(dismiss, 1600)');
  });
  it('removes mockup media without inventing replacement service copy', () => {
    for (const pillar of ['educate', 'elevate', 'empower', 'engage']) {
      expect(read(`${pillar}/index.html`)).not.toContain('data:image/svg+xml');
      expect(read(`${pillar}/index.html`)).toContain('ref-point-list');
    }
    for (const service of ['workshops-training', 'technology-ai-literacy', 'it-app-development', 'institutional-discovery', 'advisory-alignment']) {
      expect(read(`services/${service}/index.html`)).not.toMatch(/<p class="ref-page-summary">This (page|service page)/);
    }
  });
  it('links the existing three biographies and removes dead biography destinations', () => {
    for (const listing of ['about-us', 'team']) {
      const html = read(`${listing}/index.html`);
      expect(html).toContain('href="/team-members/larico-j-treadwell/"');
      expect(html).toContain('href="/team-members/garry-brown/"');
      expect(html).toContain('href="/team-members/kandy-rose/"');
      expect(html).not.toMatch(/href="\/team-members\/(kelvin-kirby|avi-bregman|harold-lee|steve-robinson|diana-simmons|tamara-henry)/);
    }
  });
});
