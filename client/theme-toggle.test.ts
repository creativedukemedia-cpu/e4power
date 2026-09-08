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

  it("uses an inset rotating Bridge orbit with explicit wide-model geometry", () => {
    expect(homepage).toContain('id="hero-and-bridge-geometry-rebuild"');
    expect(homepage).toContain('aspect-ratio:2.03/1!important');
    expect(homepage).toContain('width:44%!important;height:72%!important;left:28%!important;top:14%!important');
    expect(homepage).toContain('width:52%!important;height:80%!important;left:24%!important;top:10%!important');
    expect(homepage).toContain('id="bridge-reference-connector-calibration"');
    expect(homepage).toContain('.bridge-role[data-role="financial"]{left:24%!important;top:14.4%!important;}');
    expect(homepage).toContain('.bridge-role[data-role="coordination"]{left:76%!important;top:47.4%!important;}');
    expect(homepage).toContain('.bridge-role[data-role="proposal"]{left:63%!important;top:76.4%!important;}');
    expect(homepage).toContain("line.setAttribute('x1','44')");
  });

  it("switches the Bridge model to responsive role cards before medium and small screens become cramped", () => {
    expect(homepage).toContain('Responsive Bridge contract: preserve the calibrated diagram where it fits');
    expect(homepage).toContain('@media screen and (min-width:768px) and (max-width:991px)');
    expect(homepage).toContain('@media screen and (min-width:561px) and (max-width:767px)');
    expect(homepage).toContain('grid-template-columns:repeat(2,minmax(0,1fr))!important');
    expect(homepage).toContain('@media screen and (max-width:480px)');
    expect(homepage).toContain('grid-template-columns:1fr!important');
    expect(homepage).toContain('@media screen and (min-width:1600px)');
  });

  it("keeps the E4/PMP hub compact and preserves the orbiting figures on touch screens", () => {
    expect(homepage).toContain('Lock the E4/PMP mark into one measured composition');
    expect(homepage).toContain('margin:.12rem 0 0!important');
    expect(homepage).toContain('retain the delivery map on touch devices');
    expect(homepage).toContain('#empower.bridge-program-section .bridge-orbit{display:block!important;position:relative!important');
    expect(homepage).toContain('#empower.bridge-program-section .bridge-role[data-role="financial"]{left:25%!important;top:18%!important;}');
    expect(homepage).toContain('#empower.bridge-program-section .bridge-role[data-role="proposal"]{left:74%!important;top:76%!important;}');
  });

  it("shows each full specialist role name beneath its figure in the mobile circular Bridge model", () => {
    expect(homepage).toContain('Keep every specialist identifiable inside the circular touch layout');
    expect(homepage).toContain('top:calc(100% - .5rem)!important;left:50%!important');
    expect(homepage).toContain('width:4.75rem!important');
    expect(homepage).toContain('letter-spacing:0!important;line-height:1.08!important;text-align:center!important');
  });

  it("reflows the homepage at tablet-width mobile browsers instead of squeezing desktop columns", () => {
    expect(homepage).toContain('Treat compact desktop-browser viewports as mobile layouts');
    expect(homepage).toContain('@media screen and (max-width:1024px)');
    expect(homepage).toContain('html,body{max-width:100%!important;overflow-x:hidden!important;}');
    expect(homepage).toContain('#empower.bridge-program-section .bridge-orbit{aspect-ratio:1.42/1!important;}');
  });

  it("embeds the requested LinkedIn feed in an open E4Power-styled homepage section", () => {
    expect(homepage).toContain('id="linkedin-feed-section-script"');
    expect(homepage).toContain('elfsight-app-47c25495-5abf-415f-99ee-fb9ad001b53a');
    expect(homepage).toContain('https://elfsightcdn.com/platform.js');
    expect(homepage).toContain('id="linkedin-feed-heading"');
    expect(homepage).toContain('E4Power <span>on LinkedIn</span>');
    expect(homepage).toContain('LinkedIn is presented as an open editorial section');
    expect(homepage).not.toContain('E4Power —');
  });

  it("moves the LinkedIn feed below the Team section after dynamic homepage sections are constructed", () => {
    expect(homepage).toContain('id="linkedin-feed-placement-script"');
    expect(homepage).toContain("var feed=document.getElementById('linkedin-feed');var team=document.getElementById('engage')");
    expect(homepage).toContain('team.parentNode.insertBefore(feed,team.nextSibling)');
  });

  it("guards the known third-party ResizeObserver notification loop without masking other errors", () => {
    expect(homepage).toContain('id="resize-observer-error-guard"');
    expect(homepage).toContain("event.message==='ResizeObserver loop completed with undelivered notifications.'");
    expect(homepage).toContain('event.preventDefault();event.stopImmediatePropagation();');
  });

  it("uses zero Specialist Roles kerning, the supplied Bridge hub mark, and safe hero-logo clearance", () => {
    expect(homepage).toContain('id="bridge-brand-and-hero-refinement"');
    expect(homepage).toContain('.bridge-insight-count{letter-spacing:0!important;}');
    expect(homepage).toContain('/manus-storage/E4-Bridge-Hub-Icon_77f4a9c8.webp');
    expect(homepage).toContain('bridge-core-logo');
    expect(homepage).toContain('hero-brand-clearance');
    expect(homepage).toContain('translate:0 clamp(3.25rem,6vw,6rem)!important');
    expect(homepage).toContain('translate:0 clamp(2.15rem,9vw,3.5rem)!important');
  });

  it("keeps the supplied Bridge hub mark tightly paired with PMP", () => {
    expect(homepage).toContain('margin:0 auto -.48rem');
    expect(homepage).toContain('.bridge-core strong{margin-top:0!important;line-height:.92!important;}');
    expect(homepage).toContain('.bridge-core small{margin-top:.25rem!important;}');
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
    expect(globalNavigation).toContain("mobileSearchLink.href = '/search/'");
    expect(globalNavigation).toContain("mobileSearchLink.textContent = 'Search'");
  });

  it("adds Client Success as a visible shared desktop and mobile navigation destination", () => {
    expect(globalNavigation).toContain("link.href = '/client-success/'");
    expect(globalNavigation).toContain("link.textContent = 'Client Success'");
    expect(globalNavigation).toContain("addClientSuccessNavigation(homeNav, utilityNav, menu)");
    expect(globalNavigation).toContain("item.className = 'e4-client-success-menu-item'");
    expect(globalNavigation).not.toContain('.reference-topbar-nav>a{display:none!important;}');
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
    expect(globalNavigation).toContain("link.href = '/client-success/'");
    expect(clientSuccessPage).toContain('Celebrating Our Clients\' Success');
    expect(clientSuccessPage).toContain('Proposals Funded');
  });
});
