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
const clientSuccessPath = path.join(clientRoot, "client-success", "index.html");
const clientSuccessPage = fs.readFileSync(clientSuccessPath, "utf8");
const searchPagePath = path.join(clientRoot, "search", "index.html");
const searchPage = fs.readFileSync(searchPagePath, "utf8");
const aboutUsPath = path.join(clientRoot, "about-us", "index.html");
const aboutUsPage = fs.readFileSync(aboutUsPath, "utf8");
const globalNavigationPath = path.join(clientRoot, "src", "e4-global-navigation.js");
const globalNavigation = fs.readFileSync(globalNavigationPath, "utf8");

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

  it("adds an accessible branded B.R.I.D.G.E. model library with all four supplied organizational variations", () => {
    expect(homepage).toContain('id="bridge-model-library-styles"');
    expect(homepage).toContain('id="interactive-bridge-model-script"');
    expect(homepage).toContain('B.R.I.D.G.E. <span>Model Library</span>');
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
    expect(homepage).toContain('bridge-role-list');
    expect(homepage).toContain('id="bridge-role-label-and-notes-refinement"');
    expect(homepage).toContain('bridge-network-role-label');
    expect(homepage).toContain('The PMP coordinates the workstream so priorities, deliverables, and milestones remain visible to the full team.');
    expect(homepage).toContain('The Chief Technology Officer provides a strategic technology center for research initiatives and innovation.');
  });

  it("keeps the role labels reachable on touch devices and supports keyboard-visible interactions", () => {
    expect(homepage).toContain('.bridge-network-node:focus-visible{outline:2px solid #fff8ef');
    expect(homepage).toContain('.bridge-role-list button:focus-visible{outline:2px solid #fff8ef');
    expect(homepage).toContain('.bridge-role-list{grid-template-columns:1fr;margin-top:1rem}');
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
});
