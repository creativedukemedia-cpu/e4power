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

  it("keeps homepage Team cards and the Competitive Edge banner readable in light mode", () => {
    expect(homepage).toContain('body.home-service-menu.theme-light .team-members-div .member-title');
    expect(homepage).toContain('body.home-service-menu.theme-light .team-members-div .member-bio p');
    expect(homepage).toContain('body.home-service-menu.theme-light #educate .smaller-container.centered .h3');
    expect(homepage).toContain('color:#fff8ef!important');
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

  it("restores the hero emblem and keeps the desktop Services summary readable in dark mode", () => {
    expect(homepage).toContain("content:url('/manus-storage/E4POWER_LOGOB12copy_0332af80.webp')");
    expect(homepage).toContain('body.home-service-menu:not(.theme-light) .hero-services-panel > summary');
    expect(homepage).toContain('background:rgba(20,17,13,.94)');
    expect(homepage).toContain('color:#fff8ef!important');
  });

  it("adds an accessible interactive B.R.I.D.G.E. delivery model with six specialist roles", () => {
    expect(homepage).toContain('id="interactive-bridge-model"');
    expect(homepage).toContain('id="interactive-bridge-model-script"');
    expect(homepage).toContain('The B.R.I.D.G.E. Delivery Model');
    expect(homepage).toContain('Financial<br>Management');
    expect(homepage).toContain('Subject Matter<br>Expert');
    expect(homepage).toContain('Project<br>Reporting');
    expect(homepage).toContain('Advertisement &amp;<br>Coordination');
    expect(homepage).toContain('Compliance<br>Monitoring');
    expect(homepage).toContain('Proposal Development<br>&amp; Writing');
    expect(homepage).toContain("button.addEventListener('pointerenter'");
    expect(homepage).toContain("button.addEventListener('focus'");
    expect(homepage).toContain("button.addEventListener('click'");
    expect(homepage).toContain('aria-live="polite"');
  });

  it("renders the Bridge model full width with an open detail row beneath it", () => {
    expect(homepage).toContain('id="bridge-full-width-refinement"');
    expect(homepage).toContain('width:100vw!important');
    expect(homepage).toContain('aspect-ratio:1.72/1!important');
    expect(homepage).toContain('grid-template-columns:minmax(7rem,.7fr) minmax(11rem,1.1fr) minmax(15rem,1.85fr) minmax(10rem,.9fr)');
    expect(homepage).toContain('border:0!important;background:transparent!important;box-shadow:none!important;');
  });

  it("keeps the rotating Bridge orbit inset from the detail row while crossing the role field", () => {
    expect(homepage).toContain('margin-bottom:clamp(1.5rem,3.5vw,4rem)!important');
    expect(homepage).toContain('width:52%!important;height:66%!important');
    expect(homepage).toContain('width:58%!important;height:70%!important');
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

  it("uses the coherent light navigation treatment on interior pages", () => {
    expect(educatePage).toContain('Final interior navigation treatment');
    expect(educatePage).toContain('body.theme-light .navbar-wrapper{min-height:5rem!important;}');
    expect(educatePage).toContain('body.theme-light .social-link-block{background:#1e1a16!important;');
    expect(educatePage).toContain('body.theme-light .nav-menu-two .nav-link:hover');
    expect(educatePage).toContain('body.theme-light .w-nav-button .w-icon-nav-menu::before{color:#fffaf2!important;}');
  });

  it("converts team-member biography panels to light surfaces in light mode", () => {
    expect(teamMemberPage).toContain('body.theme-light .smaller-container.gray');
    expect(teamMemberPage).toContain('body.theme-light .main-content-block.gray');
  });
});
