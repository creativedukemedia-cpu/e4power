import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { describe, expect, it } from "vitest";

const clientRoot = path.dirname(fileURLToPath(import.meta.url));
const homepagePath = path.join(clientRoot, "index.html");
const homepage = fs.readFileSync(homepagePath, "utf8");
const educatePath = path.join(clientRoot, "educate", "index.html");
const educatePage = fs.readFileSync(educatePath, "utf8");
const teamMemberPath = path.join(clientRoot, "team-members", "kandy-rose", "index.html");
const teamMemberPage = fs.readFileSync(teamMemberPath, "utf8");

describe("theme toggle markup", () => {
  it("keeps a desktop theme toggle and adds a mobile menu toggle on the homepage", () => {
    expect(homepage).toContain('id="theme-toggle-button"');
    expect(homepage).toContain('id="mobile-theme-toggle-button"');
    expect(homepage).toContain('class="theme-toggle-button mobile-theme-toggle"');
  });

  it("includes the final homepage light-theme patch for lower section readability", () => {
    expect(homepage).toContain('id="theme-light-final-patch"');
    expect(homepage).toContain('body.home-service-menu.theme-light .main-content-block:not(.transparent)');
    expect(homepage).toContain('body.home-service-menu.theme-light .section.dark-gray');
  });

  it("syncs both homepage theme toggle buttons through the shared theme script", () => {
    expect(homepage).toContain("document.getElementById('theme-toggle-button')");
    expect(homepage).toContain("document.getElementById('mobile-theme-toggle-button')");
    expect(homepage).toContain("buttons.forEach(function(button){button.addEventListener('click'");
  });

  it("keeps the mobile Our Services disclosure readable in dark mode", () => {
    expect(homepage).toContain('body.home-service-menu:not(.theme-light) .hero-services-panel');
    expect(homepage).toContain('background:rgba(8,7,6,.94)');
    expect(homepage).toContain('body.home-service-menu:not(.theme-light) .hero-services-list{color:#fff8ef');
    expect(homepage).toContain('body.home-service-menu:not(.theme-light) .hero-services-panel summary:focus-visible');
  });

  it("adds the shared cross-page theme system to representative interior pages", () => {
    expect(educatePage).toContain('id="cross-page-theme-system"');
    expect(educatePage).toContain('id="cross-page-theme-script"');
    expect(educatePage).toContain('id="theme-toggle-button"');
    expect(educatePage).toContain('id="mobile-theme-toggle-button"');
  });

  it("uses body-level ref-page-shell selectors so pillar pages can inherit light mode", () => {
    expect(educatePage).toContain('body.theme-light.ref-page-shell h1');
    expect(educatePage).toContain('body.theme-light.ref-page-shell p');
  });

  it("converts team-member biography panels to light surfaces in light mode", () => {
    expect(teamMemberPage).toContain('body.theme-light .smaller-container.gray');
    expect(teamMemberPage).toContain('body.theme-light .main-content-block.gray');
  });
});
