import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { describe, expect, it } from "vitest";

const clientRoot = path.dirname(fileURLToPath(import.meta.url));
const homepagePath = path.join(clientRoot, "index.html");
const homepage = fs.readFileSync(homepagePath, "utf8");
const teamPath = path.join(clientRoot, "team", "index.html");
const teamPage = fs.readFileSync(teamPath, "utf8");
const educatePath = path.join(clientRoot, "educate", "index.html");
const educatePage = fs.readFileSync(educatePath, "utf8");
const teamMemberPath = path.join(clientRoot, "team-members", "kandy-rose", "index.html");
const teamMemberPage = fs.readFileSync(teamMemberPath, "utf8");
const clientSuccessPath = path.join(clientRoot, "client-success", "index.html");
const clientSuccessPage = fs.readFileSync(clientSuccessPath, "utf8");
const searchPagePath = path.join(clientRoot, "search", "index.html");
const searchPage = fs.readFileSync(searchPagePath, "utf8");
const aboutUsPath = path.join(clientRoot, "about-us", "index.html");
const aboutUsPage = fs.readFileSync(aboutUsPath, "utf8");
const servicesPath = path.join(clientRoot, "services", "index.html");
const servicesPage = fs.readFileSync(servicesPath, "utf8");
const globalNavigationPath = path.join(clientRoot, "src", "e4-global-navigation.js");
const globalNavigation = fs.readFileSync(globalNavigationPath, "utf8");
const contentHubPath = path.join(clientRoot, "src", "content", "main.tsx");
const contentHub = fs.readFileSync(contentHubPath, "utf8");
const insightsStylesPath = path.join(clientRoot, "src", "content", "insights.css");
const insightsStyles = fs.readFileSync(insightsStylesPath, "utf8");

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

  it("keeps an accessible B.R.I.D.G.E. model library with all four supplied organizational variations", () => {
    expect(homepage).toContain('id="bridge-model-library-styles"');
    expect(homepage).toContain('id="interactive-bridge-model-script"');
    expect(homepage).toContain('section.innerHTML=\'<div class="bridge-model-library"><div class="bridge-model-grid">\'');
    expect(homepage).toContain('Traditional Structure to Enhance Growth');
    expect(homepage).toContain('Transformative Growth to Enhancement');
    expect(homepage).toContain("center:'PMP'");
    expect(homepage).toContain("center:'Chief Technology Officer'");
    expect(homepage).toContain('Assistant VP of Research');
    expect(homepage).toContain('Grant/Content Developer');
    expect(homepage).toContain('Proposal Development & Writing');
    expect(homepage).toContain('Certified Patent Agent');
    expect(homepage).toContain("control.addEventListener('pointerenter'");
    expect(homepage).toContain("control.addEventListener('focus'");
    expect(homepage).toContain("control.addEventListener('click'");
    expect(homepage).toContain('aria-live="polite"');
  });

  it("displays every model on the homepage in a responsive library rather than hiding variations behind a selector", () => {
    expect(homepage).toContain('.bridge-model-grid{display:grid;grid-template-columns:1fr;gap:clamp(1.25rem,2vw,2rem);}');
    expect(homepage).toContain("'<article class=\"bridge-model-card\" id=\"bridge-model-'+model.id+'\">");
    expect(homepage).toContain('models.map(cardMarkup).join');
    expect(homepage).not.toContain('<span class="bridge-model-index">Model ');
    expect(homepage).toContain('@media screen and (max-width:760px)');
    expect(homepage).toContain('.bridge-model-grid{grid-template-columns:1fr;gap:1.15rem}');
  });

  it("uses one consistent branded relationship-map treatment for every supplied model", () => {
    expect(homepage).toContain('.bridge-network-core{position:absolute');
    expect(homepage).toContain('/manus-storage/E4-Bridge-Hub-Icon_77f4a9c8.webp');
    expect(homepage).toContain('bridge-network-links');
    expect(homepage).toContain('bridge-network-node');
    expect(homepage).toContain('bridge-network-person');
    expect(homepage).toContain('id="bridge-human-figure-refinement"');
    expect(homepage).toContain('clip-path:polygon(36% 22%,18% 35%,4% 52%');
    expect(homepage).toContain('radial-gradient(circle at 64% 30%');
    expect(homepage).toContain('id="bridge-presentation-refinement-v1"');
    expect(homepage).toContain('#empower .bridge-role-list {\n    display: none !important;');
    expect(homepage).toContain('id="bridge-role-label-and-notes-refinement"');
    expect(homepage).toContain('bridge-network-role-label');
    expect(homepage).toContain('bridge-model-pillars');
    expect(homepage).toContain('bridge-model-pillar-icon');
    expect(homepage).toContain('id="bridge-editorial-pillars-refinement-v1"');
    expect(homepage).toContain('grid-template-columns: repeat(4, minmax(0, 1fr)) !important;');
    expect(homepage).toContain('pillarIconSets={traditional:');
    expect(homepage).toContain('pillarIcons=pillarIconSets[model.id]||pillarIconSets.traditional');
    expect(homepage).not.toContain('bridge-library-kicker">The B.R.I.D.G.E. Delivery Model');
    expect(homepage).toContain('The PMP coordinates the workstream so priorities, deliverables, and milestones remain visible to the full team.');
    expect(homepage).toContain('The Chief Technology Officer provides a strategic technology center for research initiatives and innovation.');
  });

  it("uses contextual support icons and offers an accessible full-screen view for every B.R.I.D.G.E. model", () => {
    expect(homepage).toContain('bridge-model-fullscreen-refinement-v1');
    expect(homepage).toContain('function installExpandedModelView()');
    expect(homepage).toContain('bridge-model-overlay');
    expect(homepage).toContain('bridge-model-overlay-close');
    expect(homepage).toContain('Expand model');
    expect(homepage).toContain("event.key==='Escape'&&!overlay.hidden");
  });

  it("focuses the expanded B.R.I.D.G.E. view on the figure network and role labels", () => {
    expect(homepage).toContain('id="bridge-expanded-network-focus-refinement"');
    expect(homepage).toContain('.bridge-model-card--expanded .bridge-model-copy,');
    expect(homepage).toContain('.bridge-model-card--expanded .bridge-model-focus,');
    expect(homepage).toContain('display: none !important;');
    expect(homepage).toContain('width: min(72vmin, 680px) !important;');
    expect(homepage).toContain('height: min(72vmin, 680px) !important;');
  });

  it("keeps the role labels reachable on touch devices and supports keyboard-visible interactions", () => {
    expect(homepage).toContain('.bridge-network-node:focus-visible{outline:2px solid #fff8ef');
    expect(homepage).toContain('bridge-network-role-label');
    expect(homepage).toContain('bridge-model-pillar-icon svg');
    expect(homepage).toContain('grid-template-columns: 2.2rem minmax(0, 1fr) !important;');
    expect(homepage).toContain("' selected in the '+model.center+' model'");
  });

  it("embeds the requested LinkedIn feed in the relocated About Us content", () => {
    expect(aboutUsPage).toContain('elfsight-app-47c25495-5abf-415f-99ee-fb9ad001b53a');
    expect(aboutUsPage).toContain('https://elfsightcdn.com/platform.js');
    expect(aboutUsPage).toContain('id="linkedin-feed-heading"');
    expect(aboutUsPage).toContain('E4Power <span>on LinkedIn</span>');
    expect(aboutUsPage).not.toContain('E4Power —');
    expect(homepage).not.toContain('id="linkedin-feed-section-script"');
  });

  it("keeps the LinkedIn feed directly after the relocated Team section", () => {
    expect(aboutUsPage.indexOf('id="engage"')).toBeLessThan(aboutUsPage.indexOf('id="linkedin-feed"'));
    expect(homepage).not.toContain('id="linkedin-feed-placement-script"');
    expect(homepage).not.toContain('id="engage"');
  });

  it("guards the known third-party ResizeObserver notification loop without masking other errors", () => {
    expect(homepage).toContain('id="resize-observer-error-guard"');
    expect(homepage).toContain("event.message==='ResizeObserver loop completed with undelivered notifications.'");
    expect(homepage).toContain('event.preventDefault();event.stopImmediatePropagation();');
  });

  it("uses the supplied Bridge hub mark and retains safe hero-logo clearance", () => {
    expect(homepage).toContain('id="bridge-brand-and-hero-refinement"');
    expect(homepage).toContain('/manus-storage/E4-Bridge-Hub-Icon_77f4a9c8.webp');
    expect(homepage).toContain('hero-brand-clearance');
    expect(homepage).toContain('translate:0 clamp(3.25rem,6vw,6rem)!important');
    expect(homepage).toContain('translate:0 clamp(2.15rem,9vw,3.5rem)!important');
  });

  it("separates the hero seal and headline into explicit non-overlapping safe zones", () => {
    expect(homepage).toContain('.reference-static-emblem.hero-brand-clearance{top:20%!important');
    expect(homepage).toContain('.reference-hero-copy{top:48%!important;bottom:auto!important;transform:translateX(-50%)!important');
    expect(homepage).toContain('top:17%!important');
    expect(homepage).toContain('top:43%!important;bottom:auto!important;transform:translateX(-50%)!important');
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

  it("centers the homepage Our Services control without changing its disclosure markup", () => {
    expect(homepage).toContain('.hero-container.reference-hero .hero-services-panel{left:50%!important;right:auto!important;transform:translateX(-50%)!important;');
    expect(homepage).toContain('width:min(calc(100% - 2.5rem),49rem)!important;');
    expect(homepage).toContain('width:calc(100% - 2rem)!important;');
  });

  it("removes only the requested homepage Partners heading", () => {
    expect(homepage).toContain('id="homepage-partners-heading-removal"');
    expect(homepage).toContain('^partners\\s*\\(cur+ent\\/previous\\)$');
    expect(homepage).toContain('node.remove();');
  });

  it("loads shared sticky navigation and accessible keyword search on homepage and interior pages", () => {
    expect(homepage).toContain('id="e4-global-navigation-script" type="module" src="/src/e4-global-navigation.js"');
    expect(educatePage).toContain('id="e4-global-navigation-script" type="module" src="/src/e4-global-navigation.js"');
    expect(globalNavigation).toContain('.reference-topbar{position:sticky!important;top:0!important;z-index:10000!important;');
    expect(globalNavigation).toContain('.navbar-logo-left{position:sticky!important;top:0!important;z-index:1000!important;');
    expect(globalNavigation).toContain("form.setAttribute('role', 'search')");
    expect(globalNavigation).toContain("form.setAttribute('aria-label', 'Search E4 Power')");
    expect(globalNavigation).toContain("form.action = '/search/'");
    expect(globalNavigation).toContain("mobileSearch.href = '/search/'");
    expect(globalNavigation).toContain("mobileSearch.textContent = 'Search'");
  });

  it("uses consistent accessible shared dropdown navigation on the homepage and interior pages", () => {
    expect(globalNavigation).toContain("label: 'About Us'");
    expect(globalNavigation).toContain("label: 'Our Team', url: '/about-us/#engage'");
    expect(globalNavigation).toContain("label: 'In the News', url: '/about-us/#linkedin-feed'");
    expect(globalNavigation).toContain("label: 'Our Services'");
    expect(globalNavigation).toContain("label: 'The B.R.I.D.G.E. Model', url: '/#empower'");
    expect(globalNavigation).toContain("label: 'Workshops', url: '/services/workshops-training/'");
    expect(globalNavigation).toContain("label: 'Resources'");
    expect(globalNavigation).toContain("label: 'Client Success', url: '/client-success/'");
    expect(globalNavigation).toContain("label: 'Insights', url: '/content/'");
    expect(globalNavigation).toContain("function makeDropdown(group, mobile, index)");
    expect(globalNavigation).toContain("toggle.setAttribute('aria-expanded'");
    expect(globalNavigation).toContain("installDesktopNavigation(homeNav, 'e4-home-search')");
    expect(globalNavigation).toContain("installDesktopNavigation(utilityNav, 'e4-site-search', { mobileSearch: true })");
    expect(globalNavigation).toContain('@media screen and (min-width:992px) and (max-width:1320px)');
    expect(globalNavigation).toContain('.reference-topbar .e4-nav-primary,.reference-topbar .e4-nav-contact,.reference-topbar .e4-nav-toggle');
    expect(globalNavigation).toContain('.e4-nav-menu{position:absolute;top:100%');
    expect(globalNavigation).not.toContain('top:calc(100% + .45rem)');
  });

  it("uses the original homepage header presentation as the shared interior navigation default", () => {
    expect(globalNavigation).toContain('.navbar-logo-left.e4-home-origin-header,.navbar-logo-left.e4-home-origin-header .navbar-logo-left-container,.navbar-logo-left.e4-home-origin-header .navbar-container{height:5.625rem!important;min-height:5.625rem!important;padding:0!important;background:#050505!important;box-shadow:none!important;}');
    expect(globalNavigation).toContain('.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster{box-sizing:border-box!important;display:grid!important;grid-template-columns:3rem minmax(0,1fr) auto!important;');
    expect(globalNavigation).toContain('function applyHomepageDesignToInteriorHeaders()');
    expect(globalNavigation).toContain("cluster.className = 'e4-site-brand-cluster'");
    expect(globalNavigation).toContain('cluster.appendChild(brand);');
    expect(globalNavigation).toContain('cluster.appendChild(socials);');
    expect(globalNavigation).toContain('cluster.appendChild(theme);');
    expect(globalNavigation).toContain('cluster.appendChild(menuButton);');
    expect(globalNavigation).toContain("header.classList.add('e4-home-origin-header')");
    expect(globalNavigation).toContain('applyHomepageDesignToInteriorHeaders();');
    expect(globalNavigation).not.toContain('e4-home-unified-header');
    expect(globalNavigation).not.toContain('normalizeHomepageHeader');
  });

  it("removes the Services-only menu takeover and gives Client Success the homepage-origin navigation treatment", () => {
    expect(servicesPage).not.toContain('id="manus-home-menu-override"');
    expect(servicesPage).not.toContain('id="services-nav-hardening"');
    expect(globalNavigation).toContain('@media screen and (min-width:992px) and (max-width:1180px)');
    expect(globalNavigation).toContain('.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster{box-sizing:border-box!important;display:grid!important;grid-template-columns:3rem minmax(0,1fr) auto!important;align-items:center!important;column-gap:1.05rem!important;flex:0 0 clamp(28.75rem,34vw,30rem)!important;');
    expect(globalNavigation).toContain('.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster #theme-toggle-button{display:inline-flex!important;padding:.5rem .55rem!important;}');
    expect(globalNavigation).toContain('.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster{flex-basis:25rem!important;width:25rem!important;');
    expect(globalNavigation).toContain('.navbar-logo-left.e4-home-origin-header .navbar-logo-left-container{flex:1 1 100%!important;}');
    expect(globalNavigation).toContain('.navbar-logo-left.e4-home-origin-header,.navbar-logo-left.e4-home-origin-header .navbar-logo-left-container,.navbar-logo-left.e4-home-origin-header .navbar-container,.navbar-logo-left.e4-home-origin-header .navbar-wrapper{width:100vw!important;max-width:100vw!important;box-sizing:border-box!important;height:auto!important;');
    expect(globalNavigation).toContain('.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster{display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:1.05rem!important;flex:0 0 100vw!important;width:100vw!important;max-width:100vw!important;');
    expect(globalNavigation).toContain('.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster .w-nav-button,.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster .menu-button{position:fixed!important;top:.75rem!important;right:.75rem!important;z-index:1002!important;');
    expect(globalNavigation).toContain('function normalizeClientSuccessHeader()');
    expect(globalNavigation).toContain("right.className = 'e4-client-success-right'");
    expect(globalNavigation).toContain("drawer.className = 'e4-client-success-drawer'");
    expect(globalNavigation).toContain('normalizeClientSuccessHeader();');
  });

  it("restores the complete shared navigation hierarchy in the homepage mobile drawer and makes the partner logo strip full bleed on phones", () => {
    expect(globalNavigation).toContain('function installHomepageMobileNavigation(homeNav)');
    expect(globalNavigation).toContain("drawer.className = 'e4-home-mobile-drawer'");
    expect(globalNavigation).toContain("list.className = 'e4-home-mobile-list'");
    expect(globalNavigation).toContain("makeDropdown(group, true, 'home-' + index)");
    expect(globalNavigation).toContain('body.home-service-menu .reference-topbar-nav .e4-home-mobile-list .e4-mobile-nav-group{display:grid!important;');
    expect(globalNavigation).toContain('body.home-service-menu .partner-marquee-section{width:100vw!important;max-width:100vw!important;');
    expect(globalNavigation).toContain('body.home-service-menu .partner-marquee-section>.container,body.home-service-menu .partner-marquee-section .marquee{width:100vw!important;max-width:100vw!important;');
  });

  it("applies the annotated mobile contrast and homepage cleanup refinements without rewriting published content", () => {
    expect(globalNavigation).toContain('function installAnnotatedHomepageRefinements()');
    expect(globalNavigation).toContain('body.theme-light .team-members-div,body.theme-light .team-member{background:#fffaf2!important;color:#1e1a16!important;}');
    expect(globalNavigation).toContain('#empower.bridge-program-section .bridge-model-pillar p{color:#fffaf2!important;');
    expect(globalNavigation).toContain('body.home-service-menu .reference-hero{min-height:35rem!important;padding:0!important;}');
    expect(globalNavigation).toContain('body.home-service-menu .reference-hero-copy{top:clamp(13.5rem,59vw,15.5rem)!important;right:1.25rem!important;bottom:auto!important;left:1.25rem!important;');
    expect(globalNavigation).toContain('transform:none!important;text-align:center!important;');
    expect(globalNavigation).toContain("document.querySelectorAll('body.home-service-menu .bookmarks-div')");
    expect(globalNavigation).toContain("document.querySelectorAll('body.home-service-menu #educate')");
    expect(globalNavigation).toContain("document.querySelectorAll('.team-member .team-picture-div img[src*=\"tamara-henry-v2\"]')");
    expect(globalNavigation).toContain("portrait.src = '/manus-storage/tamara-henry-portrait_25995acc.png'");
    expect(globalNavigation).toContain('.team-member .team-picture-div img[src*="tamara-henry-portrait"]{display:block!important;width:100%!important;');
    expect(globalNavigation).toContain('function enforceAnnotatedTeamActionContrast()');
    expect(globalNavigation).toContain("link.style.setProperty('color', '#1e1a16', 'important')");
    expect(globalNavigation).toContain("attributeFilter: ['class']");
    expect(globalNavigation).toContain('installAnnotatedHomepageRefinements();');
  });

  it("uses managed storage assets for every Team card portrait", () => {
    expect(teamPage).not.toContain('68bf5fd6d57e00320e8d437f');
    expect(teamPage).toContain('/manus-storage/larico-j--treadwell--ph-d_0b6cee7e.webp');
    expect(teamPage).toContain('/manus-storage/garry-brown--jr--ph-d---j-d_7a46bfb9.webp');
    expect(teamPage).toContain('/manus-storage/kandy-rose--m-b-a_7061343e.webp');
    expect(teamPage).toContain('/manus-storage/kelvin-kirby--ph-d_e8b8e901.png');
    expect(teamPage).toContain('/manus-storage/avi-bregman--ph-d_54fa1b67.png');
    expect(teamPage).toContain('/manus-storage/harold-lee--ph-d_619e1652.png');
    expect(teamPage).toContain('/manus-storage/tamara-henry-portrait_25995acc.png');
    expect(teamPage).toContain('/manus-storage/steve-robinson_bf78db15.png');
    expect(teamPage).toContain('/manus-storage/diana-simmons--acc_2b3e7e9a.png');
  });

  it("replaces the homepage hero body copy with a responsive full-width Four Es banner", () => {
    expect(globalNavigation).toContain('function installHeroFourEsBanner()');
    expect(globalNavigation).toContain("var support = heroCopy.querySelector('.reference-hero-support')");
    expect(globalNavigation).toContain('if (support) support.remove();');
    expect(globalNavigation).toContain("banner.className = 'e4-hero-four-es-banner'");
    expect(globalNavigation).toContain('aria-label', 'E4 Power approach');
    expect(globalNavigation).toContain('e4-hero-four-es-list');
    expect(globalNavigation).toContain('Educate');
    expect(globalNavigation).toContain('Build Knowledge');
    expect(globalNavigation).toContain('Elevate');
    expect(globalNavigation).toContain('Strengthen Systems');
    expect(globalNavigation).toContain('Empower');
    expect(globalNavigation).toContain('Execute with Excellence');
    expect(globalNavigation).toContain('Engage');
    expect(globalNavigation).toContain('Connect and Collaborate');
    expect(globalNavigation).toContain('.e4-hero-four-es-banner{position:absolute!important;top:calc(100% + 1.1rem)!important;left:50%!important;');
    expect(globalNavigation).toContain('width:100vw!important;');
    expect(globalNavigation).toContain('@media screen and (max-width:767px){.e4-hero-four-es-banner{top:calc(100% + .9rem)!important;}.e4-hero-four-es-list{grid-template-columns:repeat(2,minmax(0,1fr))!important;}');
    expect(globalNavigation).toContain('installHeroFourEsBanner();');
  });

  it("adds the requested B.R.I.D.G.E. offering introduction and replaces the legacy model library with editorial applications", () => {
    expect(globalNavigation).toContain('function installBridgeOfferingIntro()');
    expect(globalNavigation).toContain("intro.id = 'e4-bridge-offering-intro'");
    expect(globalNavigation).toContain('The <span>B.R.I.D.G.E.</span> Delivery Model');
    expect(globalNavigation).toContain('B.R.I.D.G.E. is E4 Power’s offering for connecting the right specialists');
    expect(globalNavigation).toContain('class="e4-bridge-acronym"');
    expect(globalNavigation).toContain('Build Capacity');
    expect(globalNavigation).toContain('Research &amp; Resources');
    expect(globalNavigation).toContain('Execute for Excellence');
    expect(globalNavigation).toContain('/manus-storage/bridge-writing_88d14ca9.jpg');
    expect(globalNavigation).not.toContain('/manus-storage/bridge-collaboration_e5c858cb.webp');
    expect(globalNavigation).toContain('function installBridgeEditorialModels()');
    expect(globalNavigation).toContain("bridgeSection.classList.remove('bridge-program-section')");
    expect(globalNavigation).toContain("bridgeSection.classList.add('e4-bridge-editorial-section')");
    expect(globalNavigation).toContain('University Leadership Alignment');
    expect(globalNavigation).toContain('Expert-on-Demand Support');
    expect(globalNavigation).toContain('Research Initiative Execution');
    expect(globalNavigation).toContain('Innovation, IP & Sustainability');
    expect(globalNavigation).toContain('Before the B.R.I.D.G.E.');
    expect(globalNavigation).toContain('The B.R.I.D.G.E. Bridge');
    expect(globalNavigation).toContain('After the B.R.I.D.G.E.');
    expect(globalNavigation).toContain('/manus-storage/bridge-model-01_1d4d08e2.jpg');
    expect(globalNavigation).toContain('/manus-storage/bridge-model-02_44c88f12.jpg');
    expect(globalNavigation).toContain('/manus-storage/bridge-model-03_91b2fcbb.jpg');
    expect(globalNavigation).toContain('/manus-storage/bridge-model-04_8c0820cd.jpg');
    expect(globalNavigation).not.toContain('.e4-bridge-application:nth-child(even) .e4-bridge-application-photo');
    expect(globalNavigation).toContain('installBridgeEditorialModels();');
    expect(globalNavigation).toContain('function installScrollProgress()');
    expect(globalNavigation).toContain("rail.id = 'e4-scroll-rail'");
    expect(globalNavigation).toContain('width:.72rem!important;background:rgba(231,186,86,.42)!important;');
    expect(globalNavigation).toContain('.e4-scroll-handle{position:absolute!important;z-index:1!important;top:0!important;');
    expect(globalNavigation).toContain('@media screen and (max-width:767px){.e4-scroll-rail{left:.4rem!important;width:.5rem!important;}');
    expect(globalNavigation).toContain("progress.style.transform = 'scaleY(' + value + ')'");
  });

  it("makes the left scroll rail a draggable and keyboard-accessible page scrubber", () => {
    expect(globalNavigation).toContain("rail.setAttribute('role', 'slider')");
    expect(globalNavigation).toContain("rail.setAttribute('aria-label', 'Page position')");
    expect(globalNavigation).toContain("rail.setAttribute('tabindex', '0')");
    expect(globalNavigation).toContain('Drag to scroll the page');
    expect(globalNavigation).toContain('var scrollToPointer = function (clientY)');
    expect(globalNavigation).toContain("rail.addEventListener('pointerdown'");
    expect(globalNavigation).toContain("rail.addEventListener('pointermove'");
    expect(globalNavigation).toContain("rail.addEventListener('pointerup', finishDrag)");
    expect(globalNavigation).toContain("rail.addEventListener('keydown'");
    expect(globalNavigation).toContain("event.key === 'Home'");
    expect(globalNavigation).toContain("event.key === 'End'");
    expect(globalNavigation).toContain('cursor:grab!important;pointer-events:auto!important;touch-action:none!important;');
    expect(globalNavigation).toContain('handle.style.top = (value * 100) + \'%\';');
  });

  it("adds clear top and bottom arrow controls to the interactive scroll rail", () => {
    expect(globalNavigation).toContain("upArrow.className = 'e4-scroll-arrow e4-scroll-arrow--up'");
    expect(globalNavigation).toContain("downArrow.className = 'e4-scroll-arrow e4-scroll-arrow--down'");
    expect(globalNavigation).toContain("upArrow.setAttribute('aria-label', 'Scroll page up')");
    expect(globalNavigation).toContain("downArrow.setAttribute('aria-label', 'Scroll page down')");
    expect(globalNavigation).toContain('var nudgePage = function (direction)');
    expect(globalNavigation).toContain("upArrow.addEventListener('click', function () { nudgePage(-1); })");
    expect(globalNavigation).toContain("downArrow.addEventListener('click', function () { nudgePage(1); })");
    expect(globalNavigation).toContain('left:.5rem!important;z-index:32000!important;width:.72rem!important;');
    expect(globalNavigation).toContain('left:calc(.5rem + .36rem - .775rem)!important;display:grid!important;');
    expect(globalNavigation).toContain('.e4-scroll-arrow--up{top:0!important;}');
    expect(globalNavigation).toContain('.e4-scroll-arrow--down{bottom:0!important;}');
    expect(globalNavigation).toContain('@media screen and (max-width:767px){.e4-scroll-rail{left:.4rem!important;width:.5rem!important;}.e4-scroll-handle{width:.78rem!important;height:.78rem!important;border-width:1.5px!important;}.e4-scroll-arrow{left:0!important;width:1.3rem!important;height:1.3rem!important;}.e4-scroll-arrow--up{top:0!important;}.e4-scroll-arrow--down{bottom:0!important;}');
  });

  it("makes the desktop grant-statistics strip span the full viewport", () => {
    expect(globalNavigation).toContain('@media screen and (min-width:992px){.container-hero{width:100vw!important;max-width:none!important;margin-left:calc(50% - 50vw)!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;}');
    expect(globalNavigation).toContain('.container-hero>.hero-block{width:auto!important;min-width:0!important;}');
  });

  it("uses one enclosure-free editorial B.R.I.D.G.E. photo without an extra model call to action", () => {
    expect(globalNavigation).toContain('position:relative!important;align-self:stretch!important;min-height:clamp(22rem,34vw,31rem)!important;overflow:hidden!important;background:#1a140b!important;');
    expect(globalNavigation).toContain('.e4-bridge-offering-photos::after{content:"";position:absolute!important;top:0!important;right:0!important;bottom:0!important;width:.35rem!important;background:#e7ba56!important;');
    expect(globalNavigation).toContain('object-position:50% 50%!important');
    expect(globalNavigation).not.toContain('e4-bridge-offering-photo--collaboration');
    expect(globalNavigation).toContain('box-shadow:none!important');
    expect(globalNavigation).not.toContain('Explore the B.R.I.D.G.E. models');
    expect(globalNavigation).not.toContain('class="e4-bridge-offering-link"');
  });

  it("removes the redundant library heading so the concept introduction leads directly into the models", () => {
    expect(homepage).toContain("section.innerHTML='<div class=\"bridge-model-library\"><div class=\"bridge-model-grid\">'");
    expect(homepage).not.toContain('<header class="bridge-library-header"><div><h2 class="bridge-library-heading">B.R.I.D.G.E. <span>Model Library</span></h2>');
    expect(homepage).not.toContain('Four organizational applications that place the right specialists around the work already in motion.');
  });

  it("gives the B.R.I.D.G.E. model library an intentionally readable light-mode treatment", () => {
    expect(globalNavigation).toContain('function installBridgeLightModeSystem()');
    expect(globalNavigation).toContain("style.id = 'e4-bridge-light-mode-system'");
    expect(globalNavigation).toContain('body.theme-light #empower.bridge-program-section{background:#f5f0e6!important;color:#1e1a16!important;}');
    expect(globalNavigation).toContain('body.theme-light #empower.bridge-program-section .bridge-model-card:nth-child(even)::before{background:#e9d9b7!important;}');
    expect(globalNavigation).toContain('body.theme-light #empower.bridge-program-section .bridge-model-pillar p{color:#2c261f!important;text-shadow:none!important;}');
    expect(globalNavigation).toContain('body.theme-light #empower.bridge-program-section .bridge-network-core{border-color:#8d601a!important;background:radial-gradient(circle,#fffaf2,#e7d4a9 72%)!important;');
    expect(globalNavigation).toContain('body.theme-light #empower.bridge-program-section .bridge-network-role-label{color:#1e1a16!important;text-shadow:0 1px 0 #fffaf2!important;}');
    expect(globalNavigation).toContain('installBridgeLightModeSystem();');
  });

  it("uses the supplied B.R.I.D.G.E. framework as an editorial four-application experience", () => {
    expect(globalNavigation).toContain('#empower.e4-bridge-editorial-section{position:relative!important;overflow:hidden!important;background:#160c05!important;');
    expect(globalNavigation).toContain('.e4-bridge-application-header{display:grid!important;grid-template-columns:clamp(3.3rem,7vw,5.7rem) minmax(0,1fr) minmax(16rem,25rem)!important;');
    expect(globalNavigation).toContain('.e4-bridge-application-photo{position:relative!important;align-self:start!important;width:100%!important;aspect-ratio:3 / 2!important;min-height:0!important;');
    expect(globalNavigation).toContain('.e4-bridge-transformation{display:grid!important;grid-template-columns:minmax(12rem,.82fr) minmax(0,1.65fr) minmax(12rem,.82fr)!important;');
    expect(globalNavigation).toContain('.e4-bridge-workflow-list{position:relative!important;display:grid!important;grid-template-columns:repeat(6,minmax(0,1fr))!important;');
    expect(globalNavigation).toContain('.e4-bridge-stage-letter{display:grid!important;place-items:center!important;');
    expect(globalNavigation).toContain('border-radius:999px!important;');
    expect(globalNavigation).toContain('.e4-bridge-workflow-list li:nth-child(6) .e4-bridge-stage-letter{background:#d9785f!important;}');
    expect(globalNavigation).toContain("['B', 'Build Capacity']");
    expect(globalNavigation).toContain("['R', 'Research & Resources']");
    expect(globalNavigation).toContain("['I', 'Innovation & Impact']");
    expect(globalNavigation).toContain("['D', 'Develop Partnerships']");
    expect(globalNavigation).toContain("['G', 'Grow Funding & Programs']");
    expect(globalNavigation).toContain("['E', 'Execute for Excellence']");
    expect(globalNavigation).toContain("'Grant/Content Developer'");
    expect(globalNavigation).toContain("'Advertisement/Coordination'");
    expect(globalNavigation).toContain("'Content Expert (Advertisement/Coordination)'");
    expect(globalNavigation).toContain("body.theme-light #empower.e4-bridge-editorial-section{background:#f7f0e5!important;color:#1e1a16!important;}");
    expect(globalNavigation).toContain('@media screen and (max-width:680px){#empower.e4-bridge-editorial-section .e4-bridge-editorial-shell{width:min(100% - 2.4rem,42rem)!important;padding:4.2rem 0!important;}');
  });

  it("refreshes every Team portrait from its verified managed source", () => {
    expect(globalNavigation).toContain('function installTeamPortraitResilience()');
    expect(globalNavigation).toContain("source + '?v=e4-team-20261020'");
    expect(globalNavigation).toContain("portrait.dataset.e4PortraitReady = 'true'");
    expect(globalNavigation).toContain("portrait.loading = 'eager'");
    expect(globalNavigation).toContain("portrait.srcset = versionedSource + ' 1920w'");
    expect(globalNavigation).toContain('installTeamPortraitResilience();');
  });

  it("adds Home, Contact Us, and Core Services across shared navigation destinations", () => {
    expect(globalNavigation).toContain("{ title: 'Home', url: '/', keywords:");
    expect(globalNavigation).toContain("{ label: 'Core Services', url: '/services/#core-services' }");
    expect(globalNavigation).toContain("link.textContent = 'Home'");
    expect(globalNavigation).toContain("link.textContent = 'Contact Us'");
    expect(globalNavigation).toContain('list.appendChild(makeHomeLink(true));');
    expect(contentHub).toContain("['Core Services', '/services/#core-services']");
    expect(contentHub).toContain('>Home</a>');
    expect(contentHub).toContain('>Contact Us</a>');
  });

  it("makes the hero service disclosure independently linkable and anchors the existing Services content", () => {
    expect(globalNavigation).toContain('function installHeroServiceLinks()');
    expect(globalNavigation).toContain("'Grant Writing': '/services/#grant-writing'");
    expect(globalNavigation).toContain("'IT Solutions': '/services/#it-solutions'");
    expect(globalNavigation).toContain("link.setAttribute('aria-label', 'View ' + label + ' in E4 Power core services')");
    expect(globalNavigation).toContain('grid-template-columns:repeat(4,minmax(0,1fr))!important');
    expect(servicesPage).toContain('class="services-flyer-core" id="core-services"');
    expect(servicesPage).toContain('id="grant-writing"');
    expect(servicesPage).toContain('id="grant-management"');
    expect(servicesPage).toContain('id="project-management"');
    expect(servicesPage).toContain('id="readiness-assessments"');
    expect(servicesPage).toContain('id="financial-management"');
    expect(servicesPage).toContain('id="speaking-engagements"');
    expect(servicesPage).toContain('id="it-solutions"');
  });

  it("keeps the linked hero service categories typographic rather than enclosed", () => {
    expect(globalNavigation).toContain('a.hero-services-item{display:flex!important;align-items:center!important;gap:.45rem!important;min-height:0!important;padding:.28rem 0!important;border:0!important;background:transparent!important;box-shadow:none!important;');
    expect(globalNavigation).toContain('a.hero-services-item::before{content:"";display:block!important;flex:0 0 .34rem!important;');
    expect(globalNavigation).toContain('text-decoration:underline!important;text-decoration-thickness:1px!important');
  });

  it("reserves desktop Services header space across theme transitions", () => {
    expect(globalNavigation).toContain('function installRequestedRefinementStyles()');
    expect(globalNavigation).toContain('.navbar-logo-left.e4-home-origin-header .navbar-right-div,.client-success-nav.e4-home-origin-header .e4-client-success-right{flex-wrap:nowrap!important;');
    expect(globalNavigation).toContain('@media screen and (min-width:992px) and (max-width:1180px){.navbar-logo-left.e4-home-origin-header .navbar-right-div{gap:.28rem!important;');
    expect(globalNavigation).toContain('.navbar-logo-left.e4-home-origin-header .e4-nav-search{min-width:5.6rem!important;max-width:6.25rem!important;}');
  });

  it("limits desktop navigation dropdowns to explicit toggle state after a theme change", () => {
    expect(globalNavigation).toContain('function installThemeDropdownGuard()');
    expect(globalNavigation).toContain('window.requestAnimationFrame(closeForThemeChange);');
    expect(globalNavigation).toContain("toggle.setAttribute('aria-expanded', 'false')");
    expect(globalNavigation).toContain('@media screen and (min-width:992px){.e4-nav-group:not(.is-open) .e4-nav-menu{display:none!important;visibility:hidden!important;}');
    expect(globalNavigation).toContain('.e4-nav-group.is-open .e4-nav-menu{opacity:1;pointer-events:auto;transform:translateY(0);}');
    expect(globalNavigation).not.toContain('.e4-nav-group:hover .e4-nav-menu');
    expect(globalNavigation).toContain('installThemeDropdownGuard();');
  });

  it("renders the public CMS destination as a branded E4 Power Insights hub", () => {
    expect(contentHub).toContain("import './insights.css'");
    expect(contentHub).toContain('function Header(');
    expect(contentHub).toContain('E4 Power social channels');
    expect(contentHub).toContain('The B.R.I.D.G.E. Model');
    expect(contentHub).toContain('Published knowledge, opportunities, and perspective from E4 Power.');
    expect(contentHub).toContain('/api/cms/public/content');
    expect(insightsStyles).toContain('--brown:#110b00');
    expect(insightsStyles).toContain('.e4-insights-header{position:sticky;top:0;');
    expect(insightsStyles).toContain('.e4-insights-brand-cluster');
    expect(insightsStyles).toContain('.e4-insights-card.is-brown{background:#110b00}');
    expect(insightsStyles).toContain('letter-spacing:0!important');
    expect(insightsStyles).toContain('@media(max-width:991px)');
  });

  it("enforces zero letter spacing across rendered content and removes generic heading pretext site-wide", () => {
    expect(globalNavigation).toContain('body,body *,body *::before,body *::after{letter-spacing:0!important;}');
    expect(globalNavigation).toContain('function removeGenericHeadingPretext()');
    expect(globalNavigation).toContain("'.eyebrow', '.hero-service-kicker', '.linkedin-feed-eyebrow'");
    expect(globalNavigation).toContain("'.section-label', '.service-preview-kicker', '.services-flyer-kicker'");
    expect(globalNavigation).toContain("'.team-line-subheading-div .subheading-div'");
    expect(globalNavigation).toContain("pretext.setAttribute('aria-hidden', 'true')");
    expect(globalNavigation).toContain('pretext.remove();');
    expect(globalNavigation).toContain("pretext.textContent.trim().toLowerCase() !== 'meet the experts behind your success'");
    expect(globalNavigation).toContain('function enforceZeroKerning()');
    expect(globalNavigation).toContain("element.style.setProperty('letter-spacing', '0', 'important')");
    expect(globalNavigation).toContain('enforceZeroKerning();');
  });

  it("normalizes the Contact header with the homepage-origin brand cluster even when the legacy header has no desktop theme control", () => {
    expect(globalNavigation).toContain('function makeHeaderThemeToggle()');
    expect(globalNavigation).toContain("button.id = 'theme-toggle-button'");
    expect(globalNavigation).toContain('if (!wrapper || !brand || !right || !socials) return;');
    expect(globalNavigation).toContain('if (!theme) {\n        theme = makeHeaderThemeToggle();\n        right.appendChild(theme);\n      }');
    expect(globalNavigation).toContain('body.theme-light .navbar-logo-left.e4-home-origin-header');
  });

  it("uses the established About Us brown as a full-width alternating B.R.I.D.G.E. section break without restoring model enclosures", () => {
    expect(globalNavigation).toContain(':root{--e4-section-brown:#110b00;}');
    expect(globalNavigation).toContain('#empower.bridge-program-section .bridge-model-grid{gap:0!important;}');
    expect(globalNavigation).toContain('#empower.bridge-program-section .bridge-model-card:nth-child(even)::before');
    expect(globalNavigation).toContain('inset:0 calc(50% - 50vw);background:var(--e4-section-brown);');
    expect(globalNavigation).toContain('#empower.bridge-program-section .bridge-model-card{border:0!important;border-top:0!important;border-radius:0!important;box-shadow:none!important;}');
  });

  it("removes named structural section separators without flattening component borders", () => {
    expect(globalNavigation).toContain('function removeSectionSeparators()');
    expect(globalNavigation).toContain('hr,.ref-divider,.hero-services-separator');
    expect(globalNavigation).toContain("removeSectionSeparators();");
    expect(globalNavigation).toContain('.funding-section{border-top:0!important;}');
    expect(globalNavigation).toContain('body :where(main,header,section,article,aside){border-color:transparent!important;}');
    expect(globalNavigation).toContain('main :where(ol,ul,li){border-color:transparent!important;}');
    expect(globalNavigation).toContain('.client-success-nav,.search-nav{border-bottom:0!important;}');
    expect(globalNavigation).toContain('.bridge-model-card::after{display:none!important;}');
    expect(globalNavigation).toContain('.section-label::after{display:none!important;}');
    expect(globalNavigation).toContain("section.style.setProperty('border-color', 'transparent', 'important')");
  });

  it("adds a consistent accessible quick-contact control across pages", () => {
    expect(globalNavigation).toContain('function installQuickContact()');
    expect(globalNavigation).toContain("link.className = 'e4-quick-contact'");
    expect(globalNavigation).toContain("link.href = '/contact-us/'");
    expect(globalNavigation).toContain('Start an inquiry with E4 Power');
  });

  it("uses an enclosure-free B.R.I.D.G.E. layout and a full-width rotating partner banner", () => {
    expect(homepage).toContain('#empower .bridge-model-card {\n    padding: clamp(2.75rem, 6vw, 5.5rem) 0 !important;');
    expect(homepage).toContain('background: transparent !important;');
    expect(homepage).toContain('.partner-marquee-section {\n    width: 100vw !important;');
    expect(homepage).toContain('margin-right: calc(50% - 50vw) !important;');
  });

  it("provides a dedicated keyword search page with accessible empty and no-results states", () => {
    expect(searchPage).toContain('data-e4-search-input');
    expect(searchPage).toContain('data-e4-search-results');
    expect(searchPage).toContain('role="search"');
    expect(globalNavigation).toContain('Enter a keyword to search the E4 Power website.');
    expect(globalNavigation).toContain('No results found for');
  });

  it("creates a stable Client Success page from the intended homepage Elevate content", () => {
    expect(clientSuccessPage).toContain('<title>Client Success | E4 Power</title>');
    expect(clientSuccessPage).toContain('Client <span>Success</span>');
    expect(clientSuccessPage).toContain('Celebrating Our Clients\' Success');
    expect(clientSuccessPage).toContain('Celebrating <span>Client Success</span>');
    expect(clientSuccessPage).toContain('68d8811dee8e329fe0f879dc_elevate%20picture.webp');
    expect(clientSuccessPage).toContain('Dr. Catherine Armwood, Ph.D., A.M.ASCE | Tennessee State University');
    expect(clientSuccessPage).toContain('Proposals Funded');
    expect(clientSuccessPage).toContain('.agency-marks img{display:block;width:100%;max-height:7.5rem;object-fit:contain;filter:none;opacity:1;}');
    expect(clientSuccessPage).toContain('class="testimonial-track" data-testimonial-track');
    expect(clientSuccessPage).toContain('class="testimonial-text-div"');
    expect(clientSuccessPage).toContain('background:rgba(255,255,255,.97);color:#333;');
    expect(clientSuccessPage).toContain('data-testimonial-next');
    expect(clientSuccessPage).toContain('id="client-success-testimonial-carousel"');
    expect(clientSuccessPage).toContain('@media (max-width:1024px){.intro-grid,.funding-section{grid-template-columns:1fr;}.intro-media{order:-1;}.testimonial-viewport{overflow:visible;}.testimonial-track{flex-direction:column;transform:none!important;}');
    expect(clientSuccessPage).not.toContain('.testimonials-list{display:grid');
    expect(clientSuccessPage).not.toContain('Broader Services in Elevate');
    expect(clientSuccessPage).not.toContain('Execution Services that Protect Awarded Work');
    expect(clientSuccessPage).not.toContain("fetch('/index.html'");
    expect(clientSuccessPage).toContain('type="module" src="/src/e4-global-navigation.js"');
    expect(clientSuccessPage).toContain('position:sticky;top:0;');
    expect(clientSuccessPage).toContain('.client-success-nav-links a:nth-child(3){display:none;}');
    expect(clientSuccessPage).toContain('.client-success-nav .e4-search-link{color:#f8f4ec!important;}');
  });

  it("keeps Client Success content exclusive to the independent page rather than duplicating it on the homepage", () => {
    expect(homepage).not.toMatch(/<section[^>]*id="elevate"/);
    expect(homepage).not.toContain('Celebrating Our Clients\' Success');
    expect(homepage).not.toContain('Proposals Funded');
    expect(globalNavigation).toContain("label: 'Client Success', url: '/client-success/'");
    expect(clientSuccessPage).toContain('Celebrating Our Clients\' Success');
    expect(clientSuccessPage).toContain('Proposals Funded');
  });

  it("builds the branded three-question inquiry form with a persisted routing submission", () => {
    const contactPage = fs.readFileSync(path.join(clientRoot, 'contact-us', 'index.html'), 'utf8');
    expect(contactPage).toContain('Start a <span>Conversation</span>');
    expect(contactPage).toContain('What are you reaching out to E4 Power about');
    expect(contactPage).toContain('What type of organization do you represent');
    expect(contactPage).toContain('What would you like E4 Power to help you accomplish');
    expect(contactPage).toContain('Grants, Funding Opportunities &amp; Proposal Support');
    expect(contactPage).toContain('Government / Defense / HBCU Engagement');
    expect(contactPage).toContain("fetch('/api/contact-inquiries'");
    expect(contactPage).toContain('.e4-routing-signal[hidden],.e4-inquiry-success[hidden]{display:none!important}');
  });

  it("removes inquiry form outlines and the preheader copy while retaining visible focus feedback", () => {
    const contactPage = fs.readFileSync(path.join(clientRoot, 'contact-us', 'index.html'), 'utf8');
    expect(contactPage).toContain('id="e4-inquiry-minimal-surface-refinement"');
    expect(contactPage).toContain('.e4-inquiry-form,.e4-inquiry-success{border:0!important;box-shadow:none!important}');
    expect(contactPage).toContain('.e4-inquiry-form input,.e4-inquiry-form select,.e4-inquiry-form textarea{border:0!important;box-shadow:none!important;');
    expect(contactPage).toContain('box-shadow:0 0 0 3px rgba(226,178,76,.5)!important');
    expect(contactPage).not.toContain('<div class="e4-inquiry-kicker">E4 Power inquiry</div>');
  });

  it("uses a transparent inquiry surface, gold step numbers, and explicit dropdown arrows", () => {
    const contactPage = fs.readFileSync(path.join(clientRoot, 'contact-us', 'index.html'), 'utf8');
    expect(contactPage).toContain('id="e4-inquiry-control-refinement"');
    expect(contactPage).toContain('.e4-inquiry-form,.e4-inquiry-success{background:transparent!important}');
    expect(contactPage).toContain('background:transparent!important;color:#e2b24c!important;font-size:1rem!important');
    expect(contactPage).toContain('class="e4-inquiry-select-wrap"');
    expect(contactPage).toContain(".e4-inquiry-select-wrap::after{content:'↓'");
    expect(contactPage).toContain('.e4-inquiry-select-wrap select{background-image:none!important;padding-right:3.25rem!important}');
  });

  it("provides an independent About Us page that preserves the homepage Engage team presentation", () => {
    const homepage = fs.readFileSync(path.join(clientRoot, 'index.html'), 'utf8');
    const aboutPage = fs.readFileSync(path.join(clientRoot, 'about-us', 'index.html'), 'utf8');
    const navigation = fs.readFileSync(path.join(clientRoot, 'src', 'e4-global-navigation.js'), 'utf8');
    expect(homepage).not.toContain('<section class="section dark-gray" id="engage"');
    expect(homepage).not.toContain('id="linkedin-feed-section-script"');
    expect(aboutPage).toContain('<section class="section dark-gray" id="engage"');
    expect(aboutPage).toContain('Meet the experts behind your success');
    expect(aboutPage).toContain('<section id="linkedin-feed" class="section linkedin-feed-section"');
    expect(aboutPage).toContain('class="elfsight-app-47c25495-5abf-415f-99ee-fb9ad001b53a"');
    expect(aboutPage).toContain('id="about-us-visible-content-guard"');
    expect(aboutPage).toContain('id="about-us-linkedin-feed-style"');
    expect(navigation).toContain("{ title: 'About Us', url: '/about-us/'");
    expect(navigation).toContain("label: 'Our Team', url: '/about-us/#engage'");
    expect(navigation).toContain("label: 'In the News', url: '/about-us/#linkedin-feed'");
  });

  it("updates the Our Services page with the approved flyer information while retaining the E4 Power visual system", () => {
    expect(servicesPage).toContain('services-flyer-refinement-v1');
    expect(servicesPage).toContain('Full-life cycle grant, research, and project consulting for Universities, Non-profits, and For-profits.');
    expect(servicesPage).toContain('Grant Writing <span>Pre-Award</span>');
    expect(servicesPage).toContain('Grant Management <span>Post-Award</span>');
    expect(servicesPage).toContain('Intellectual Property Services');
    expect(servicesPage).toContain('Department of War (DoW)');
    expect(servicesPage).toContain('National Science Foundation (NSF)');
    expect(servicesPage).toContain('Institutions We Serve');
    expect(servicesPage).toContain('Modular, plug-and-play services (no bundled requirement)');
    expect(servicesPage).toContain('We <span>Bridge</span> the Gap');
  });
});
