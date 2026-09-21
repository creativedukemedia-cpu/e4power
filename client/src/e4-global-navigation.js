(function () {
  if (window.__e4GlobalNavigationLoaded) return;
  window.__e4GlobalNavigationLoaded = true;

  var pages = [
    { title: 'Home', url: '/', keywords: 'home e4 power consulting bridge services' },
    { title: 'About Us', url: '/about-us/', keywords: 'about e4 power consulting mission team partnership leadership engage' },
    { title: 'Our Team', url: '/about-us/#engage', keywords: 'team experts leadership consultants e4 power' },
    { title: 'In the News', url: '/about-us/#linkedin-feed', keywords: 'news linkedin press announcements updates' },
    { title: 'Our Services', url: '/services/', keywords: 'services consulting grant project management financial readiness technology workshops speaking' },
    { title: 'The B.R.I.D.G.E. Model', url: '/#empower', keywords: 'bridge model project delivery financial subject matter expert reporting coordination compliance proposal writing' },
    { title: 'Workshops', url: '/services/workshops-training/', keywords: 'workshops training professional development learning sessions' },
    { title: 'Client Success', url: '/client-success/', keywords: 'client success elevate partnership testimonials grant awards growth' },
    { title: 'Insights', url: '/content/', keywords: 'insights articles resources news perspectives' },
    { title: 'Contact E4 Power', url: '/contact-us/', keywords: 'contact inquiry partner consultation connect' },
    { title: 'Educate', url: '/educate/', keywords: 'educate services workshops training institutional learning professional development' },
    { title: 'Elevate', url: '/elevate/', keywords: 'elevate services grant management post award project financial it solutions' },
    { title: 'Empower', url: '/empower/', keywords: 'empower strategy capacity research institutional growth' },
    { title: 'Engage', url: '/engage/', keywords: 'engage discovery onboarding advisory partnership' },
    { title: 'Grant Management', url: '/services/grant-management/', keywords: 'grant management post award reporting compliance closeout' },
    { title: 'Grant Writing', url: '/services/grant-writing/', keywords: 'grant writing proposal development funding application narrative' },
    { title: 'Project Management', url: '/services/project-management/', keywords: 'project management work plan risk milestones kpi reporting' },
    { title: 'Financial Management', url: '/services/financial-management/', keywords: 'financial management budget audit fiscal reporting' },
    { title: 'IT App Development', url: '/services/it-app-development/', keywords: 'technology it app development workflow automation dashboards' },
    { title: 'Readiness Assessments', url: '/services/readiness-assessments/', keywords: 'readiness assessments capacity review institutional planning' },
    { title: 'Speaking Engagements', url: '/services/speaking-engagements/', keywords: 'speaking engagements presentations keynote facilitation' },
    { title: 'Advisory Alignment', url: '/services/advisory-alignment/', keywords: 'advisory alignment strategy partnership consulting' },
    { title: 'Institutional Discovery', url: '/services/institutional-discovery/', keywords: 'institutional discovery goals priorities opportunities' },
    { title: 'Technology and AI Literacy', url: '/services/technology-ai-literacy/', keywords: 'technology ai literacy artificial intelligence digital skills' },
    { title: 'Garry Brown', url: '/team-members/garry-brown/', keywords: 'garry brown leadership team' },
    { title: 'Kandy Rose', url: '/team-members/kandy-rose/', keywords: 'kandy rose team' },
    { title: 'Larico J Treadwell', url: '/team-members/larico-j-treadwell/', keywords: 'larico treadwell team' }
  ];

  var groups = [
    {
      label: 'About Us',
      url: '/about-us/',
      children: [
        { label: 'Our Team', url: '/about-us/#engage' },
        { label: 'In the News', url: '/about-us/#linkedin-feed' }
      ]
    },
    {
      label: 'Our Services',
      url: '/services/',
      children: [
        { label: 'Core Services', url: '/services/#core-services' },
        { label: 'The B.R.I.D.G.E. Model', url: '/#empower' },
        { label: 'Workshops', url: '/services/workshops-training/' }
      ]
    },
    {
      label: 'Resources',
      url: '/client-success/',
      children: [
        { label: 'Client Success', url: '/client-success/' },
        { label: 'Insights', url: '/content/' }
      ]
    }
  ];

  function addStyle() {
    if (document.getElementById('e4-global-navigation-style')) return;
    var style = document.createElement('style');
    style.id = 'e4-global-navigation-style';
    style.textContent = '\
      :root{--e4-section-brown:#110b00;}\
      body,body *,body *::before,body *::after{letter-spacing:0!important;}\
      .e4-visually-hidden{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important;}\
      .theme-toggle-button{display:inline-flex!important;align-items:center!important;gap:.55rem!important;padding:.55rem .8rem!important;border:1px solid rgba(255,255,255,.1)!important;border-radius:999px!important;background:rgba(10,10,10,.72)!important;color:#f4efe7!important;font-family:Montserrat,Arial,sans-serif!important;font-size:.7rem!important;font-weight:700!important;line-height:1!important;text-transform:uppercase!important;cursor:pointer!important;}.theme-toggle-track{position:relative!important;display:inline-flex!important;align-items:center!important;width:2.45rem!important;height:1.4rem!important;padding:.15rem!important;border-radius:999px!important;background:rgba(255,255,255,.16)!important;}.theme-toggle-thumb{display:block!important;width:1.05rem!important;height:1.05rem!important;border-radius:999px!important;background:#e2b24c!important;transition:transform .22s ease,background-color .22s ease!important;}body.theme-light .theme-toggle-thumb{transform:translateX(1.2rem)!important;}body.theme-dark .theme-toggle-thumb{transform:none!important;}\
      .reference-topbar{position:sticky!important;top:0!important;z-index:10000!important;background:rgba(9,9,8,.94)!important;backdrop-filter:blur(18px);border-bottom:1px solid rgba(237,190,89,.18)!important;}\
      .navbar-logo-left{position:sticky!important;top:0!important;z-index:1000!important;background:#050505!important;border-bottom:1px solid rgba(255,255,255,.08)!important;}\
      body.theme-light .navbar-logo-left{background:#fffaf2!important;border-bottom-color:rgba(30,26,22,.12)!important;}\
      .e4-nav-search{display:inline-flex;align-items:center;gap:.45rem;min-width:8rem;max-width:10rem;height:2.25rem;padding:0 .72rem;border:1px solid rgba(237,190,89,.45);border-radius:999px;background:rgba(0,0,0,.24);color:#fffaf2;}\
      .e4-nav-search:focus-within{outline:2px solid #edbe59;outline-offset:2px;}\
      .e4-nav-search svg{width:.85rem;height:.85rem;flex:0 0 auto;fill:none;stroke:currentColor;stroke-width:2;}\
      .e4-nav-search input{width:100%;min-width:0;border:0!important;outline:0!important;background:transparent!important;color:inherit!important;font:inherit!important;font-size:.68rem!important;font-weight:700!important;letter-spacing:.08em!important;text-transform:uppercase;}\
      .e4-nav-search input::placeholder{color:currentColor;opacity:.72;}\
      body.theme-light .e4-nav-search{border-color:rgba(30,26,22,.32);background:rgba(255,255,255,.7);color:#1e1a16;}\
      .e4-dropdown-navigation{display:inline-flex;align-items:center;gap:clamp(.36rem,.8vw,.85rem);min-width:0;}\
      .e4-nav-group{position:relative;display:inline-flex;align-items:center;min-width:0;}\
      .e4-nav-primary,.e4-nav-contact{display:inline-flex;align-items:center;min-height:2.25rem;color:inherit!important;font-family:Montserrat,Arial,sans-serif!important;font-size:.64rem!important;font-weight:800!important;letter-spacing:.065em!important;line-height:1!important;text-decoration:none!important;text-transform:uppercase;white-space:nowrap;}\
      .reference-topbar .e4-nav-primary,.reference-topbar .e4-nav-contact,.reference-topbar .e4-nav-toggle,.navbar-logo-left .e4-nav-primary,.navbar-logo-left .e4-nav-contact,.navbar-logo-left .e4-nav-toggle{color:#f7f3ea!important;text-shadow:0 1px 0 rgba(0,0,0,.42);}\
      body.theme-light .reference-topbar .e4-nav-primary,body.theme-light .reference-topbar .e4-nav-contact,body.theme-light .reference-topbar .e4-nav-toggle,body.theme-light .navbar-logo-left .e4-nav-primary,body.theme-light .navbar-logo-left .e4-nav-contact,body.theme-light .navbar-logo-left .e4-nav-toggle{color:#1e1a16!important;text-shadow:none;}\
      .e4-nav-primary:hover,.e4-nav-primary:focus-visible,.e4-nav-contact:hover,.e4-nav-contact:focus-visible{color:#edbe59!important;}\
      .e4-nav-toggle{display:grid;place-items:center;width:1.35rem;height:2.25rem;margin:0 0 0 .06rem;padding:0;border:0;background:transparent;color:inherit;cursor:pointer;}\
      .e4-nav-toggle svg{width:.74rem;height:.74rem;fill:none;stroke:currentColor;stroke-width:2.25;transition:transform .18s cubic-bezier(.23,1,.32,1);}\
      .e4-nav-group.is-open .e4-nav-toggle svg{transform:rotate(180deg);}\
      .e4-nav-toggle:focus-visible,.e4-nav-primary:focus-visible,.e4-nav-contact:focus-visible{outline:2px solid #edbe59;outline-offset:3px;}\
      .e4-nav-menu{position:absolute;top:100%;left:-.85rem;z-index:10010;display:grid;gap:.14rem;min-width:12.5rem;padding:.82rem .55rem .55rem;border:1px solid rgba(237,190,89,.34);background:rgba(15,14,12,.98);box-shadow:0 1rem 2.4rem rgba(0,0,0,.28);opacity:0;pointer-events:none;transform:translateY(-.18rem);transition:opacity .16s ease,transform .16s cubic-bezier(.23,1,.32,1);}\
      .e4-nav-group.is-open .e4-nav-menu{opacity:1;pointer-events:auto;transform:translateY(0);}\
      .e4-nav-menu a{display:block;padding:.68rem .75rem;color:#fffaf2!important;font-family:Montserrat,Arial,sans-serif!important;font-size:.64rem!important;font-weight:800!important;letter-spacing:.07em!important;line-height:1.25!important;text-decoration:none!important;text-transform:uppercase;}\
      .e4-nav-menu a:hover,.e4-nav-menu a:focus-visible{background:rgba(237,190,89,.14);color:#edbe59!important;outline:0;}\
      body.theme-light .e4-nav-menu{border-color:rgba(30,26,22,.18);background:#fffaf2;box-shadow:0 1rem 2.4rem rgba(30,26,22,.15);}\
      body.theme-light .e4-nav-menu a{color:#1e1a16!important;}\
      @media screen and (min-width:992px){.e4-nav-group:not(.is-open) .e4-nav-menu{display:none!important;visibility:hidden!important;}.e4-nav-group.is-open .e4-nav-menu{display:grid!important;visibility:visible!important;}}\
      .reference-topbar-nav .e4-nav-search{margin-right:.34rem;}\
      .navbar-right-div .e4-nav-search{margin-left:.28rem;}\
      .client-success-nav-links .e4-nav-search{margin-right:.5rem;}\
      .nav-menu-wrapper .e4-nav-search{display:none;width:100%;max-width:none;margin:0 0 1rem;color:#f4efe7;}\
      body.theme-light .nav-menu-wrapper .e4-nav-search{color:#1e1a16;}\
      .e4-mobile-search-link{display:none;color:inherit!important;font-size:.64rem!important;font-weight:800!important;letter-spacing:.11em!important;text-decoration:none!important;text-transform:uppercase;}\
      .e4-mobile-search-link:hover,.e4-mobile-search-link:focus-visible{color:#edbe59!important;}\
      .reference-topbar-nav,.navbar-right-div,.client-success-nav-links{gap:clamp(.45rem,.85vw,.9rem)!important;flex-wrap:nowrap!important;}\
      @media screen and (min-width:992px) and (max-width:1320px){.reference-topbar-inner{grid-template-columns:minmax(22rem,29vw) 1fr!important;}.reference-topbar-brand{gap:1rem!important;padding:0 1.45rem!important;}.reference-socials{gap:.6rem!important;}.reference-socials a{width:2.3rem!important;height:2.3rem!important;}.reference-topbar-nav{gap:.45rem!important;padding:0 .85rem!important;}.e4-dropdown-navigation{gap:.3rem!important;}.e4-nav-primary,.e4-nav-contact{font-size:.59rem!important;letter-spacing:.04em!important;}.e4-nav-toggle{width:1.05rem!important;}.reference-topbar-nav .e4-nav-search{min-width:6.9rem!important;max-width:7.8rem!important;}}\
      @media screen and (max-width:1180px){.navbar-right-div .e4-nav-search{min-width:7.25rem;max-width:8.5rem;}.reference-topbar-nav .e4-nav-search{min-width:7.25rem;max-width:8.5rem;}}\
      @media screen and (max-width:991px){.navbar-right-div>.e4-nav-search,.navbar-right-div>.e4-dropdown-navigation,.navbar-right-div>.e4-nav-contact,.client-success-nav-links>.e4-dropdown-navigation,.client-success-nav-links>.e4-nav-contact,.client-success-nav-links>.e4-nav-search{display:none!important;}.e4-mobile-search-link{display:inline-flex!important;align-items:center;}.nav-menu-wrapper .e4-nav-search{display:inline-flex!important;}.reference-topbar-inner{flex-wrap:wrap!important;}.reference-topbar-brand{width:100%!important;min-height:4.5rem;}.reference-topbar-nav{width:100%!important;min-height:3.75rem;justify-content:center;}.reference-topbar-nav .e4-nav-search{margin-right:.3rem;}.reference-topbar-nav .e4-dropdown-navigation{display:none!important;}.nav-menu-two .e4-mobile-nav-group{display:grid;grid-template-columns:1fr auto;align-items:center;gap:0;margin:0;border-bottom:1px solid rgba(237,190,89,.18);}.nav-menu-two .e4-mobile-nav-group>a{grid-column:1;padding:.95rem 0;color:inherit!important;font-size:.82rem!important;font-weight:800!important;letter-spacing:.08em!important;text-decoration:none!important;text-transform:uppercase;}.nav-menu-two .e4-mobile-nav-group .e4-nav-toggle{grid-column:2;width:2.8rem;height:3rem;}.nav-menu-two .e4-nav-menu{position:static;grid-column:1 / -1;display:none;min-width:0;padding:.12rem 0 .6rem;border:0;background:transparent;box-shadow:none;opacity:1;pointer-events:auto;transform:none;transition:none;}.nav-menu-two .e4-mobile-nav-group.is-open .e4-nav-menu{display:grid;}.nav-menu-two .e4-nav-menu a{padding:.65rem 0 .65rem .7rem;font-size:.7rem!important;}.nav-menu-two .e4-mobile-contact{display:block;padding:.95rem 0;color:inherit!important;font-size:.82rem!important;font-weight:800!important;letter-spacing:.08em!important;text-decoration:none!important;text-transform:uppercase;}}\
      .navbar-logo-left.e4-home-origin-header,.navbar-logo-left.e4-home-origin-header .navbar-logo-left-container,.navbar-logo-left.e4-home-origin-header .navbar-container{height:5.625rem!important;min-height:5.625rem!important;padding:0!important;background:#050505!important;box-shadow:none!important;}\
      .navbar-logo-left.e4-home-origin-header .navbar-container{width:100%!important;max-width:none!important;}\
      .navbar-logo-left.e4-home-origin-header .navbar-wrapper{display:flex!important;align-items:stretch!important;width:100%!important;max-width:none!important;min-height:5.625rem!important;margin:0!important;padding:0!important;}\
      .navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster{box-sizing:border-box!important;display:grid!important;grid-template-columns:3rem minmax(0,1fr) auto!important;align-items:center!important;column-gap:1.05rem!important;flex:0 0 clamp(28.75rem,34vw,30rem)!important;width:clamp(28.75rem,34vw,30rem)!important;min-height:5.625rem!important;padding:0 1.45rem!important;background:#e7ba56!important;}\
      .navbar-logo-left.e4-home-origin-header .navbar-brand{display:flex!important;align-items:center!important;justify-content:center!important;width:3rem!important;min-width:3rem!important;margin:0!important;padding:0!important;}\
      .navbar-logo-left.e4-home-origin-header .navbar-brand img{display:block!important;max-width:none!important;width:3rem!important;height:auto!important;filter:brightness(0) saturate(1) invert(.1) sepia(.09) saturate(8.58) hue-rotate(357deg) brightness(.94) contrast(.93)!important;}\
      .navbar-logo-left.e4-home-origin-header .socials-div{display:flex!important;align-items:center;gap:.6rem!important;min-width:max-content!important;width:max-content!important;}\
      .navbar-logo-left.e4-home-origin-header .social-link-block{display:flex!important;align-items:center!important;justify-content:center!important;flex:0 0 2.3rem!important;width:2.3rem!important;min-width:2.3rem!important;max-width:2.3rem!important;height:2.3rem!important;border:0!important;border-radius:999px!important;background:#171511!important;}\
      .navbar-logo-left.e4-home-origin-header .social-link-block img{display:block!important;width:1rem!important;height:1rem!important;filter:none!important;}\
      .navbar-logo-left.e4-home-origin-header .social-link-block:hover,.navbar-logo-left.e4-home-origin-header .social-link-block:focus-visible{background:#3a2f1a!important;outline:2px solid #171511!important;outline-offset:2px!important;}\
      .navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster #theme-toggle-button{margin:0!important;white-space:nowrap;}\
      .navbar-logo-left.e4-home-origin-header .navbar-right-div{display:flex!important;align-items:center;justify-content:flex-start;flex:1 1 auto!important;gap:clamp(.45rem,.85vw,.9rem)!important;min-width:0;padding:0 1.45rem!important;}\
      hr,.ref-divider,.hero-services-separator,[class*="section-divider"],[class*="section-separator"],[class*="separator-line"],[class*="divider-line"]{display:none!important;}\
      .funding-section{border-top:0!important;}\
      body :where(main,header,section,article,aside){border-color:transparent!important;}\
      main :where(ol,ul,li){border-color:transparent!important;}\
      .client-success-nav,.search-nav{border-bottom:0!important;}\
      .bridge-model-card::after{display:none!important;}\
      .section-label::after{display:none!important;}\
      .eyebrow,.hero-service-kicker,.linkedin-feed-eyebrow,.ref-detail-kicker,.ref-heading-accent,.ref-overline,.search-kicker,.section-label,.service-preview-kicker,.services-flyer-kicker,.services-flyer-section-kicker,.e4-inquiry-kicker,.bridge-library-kicker,.bridge-model-index,.team-line-subheading-div .subheading-div{display:none!important;}\
      #empower.bridge-program-section .bridge-model-grid{gap:0!important;}\
      #empower.bridge-program-section .bridge-model-card{border:0!important;border-top:0!important;border-radius:0!important;box-shadow:none!important;}\
      #empower.bridge-program-section .bridge-model-card:nth-child(even){position:relative;isolation:isolate;}\
      #empower.bridge-program-section .bridge-model-card:nth-child(even)::before{content:"";position:absolute;z-index:-1;inset:0 calc(50% - 50vw);background:var(--e4-section-brown);pointer-events:none;}\
      body.theme-light #empower.bridge-program-section .bridge-model-card:nth-child(even)::before{background:var(--e4-section-brown);}\
      body.theme-light .navbar-logo-left.e4-home-origin-header,body.theme-light .navbar-logo-left.e4-home-origin-header .navbar-logo-left-container,body.theme-light .navbar-logo-left.e4-home-origin-header .navbar-container,body.theme-light .navbar-logo-left.e4-home-origin-header .navbar-wrapper,body.theme-light .navbar-logo-left.e4-home-origin-header .navbar-right-div{background:#050505!important;}\
      body.theme-light .navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster{background:#e7ba56!important;}\
      body.theme-light .navbar-logo-left.e4-home-origin-header .e4-nav-primary,body.theme-light .navbar-logo-left.e4-home-origin-header .e4-nav-contact,body.theme-light .navbar-logo-left.e4-home-origin-header .e4-nav-toggle{color:#f7f3ea!important;text-shadow:0 1px 0 rgba(0,0,0,.42);}\
      @media screen and (min-width:992px){.navbar-logo-left.e4-home-origin-header .w-nav-button,.navbar-logo-left.e4-home-origin-header .menu-button{display:none!important;}}\
      @media screen and (max-width:991px){.navbar-logo-left.e4-home-origin-header,.navbar-logo-left.e4-home-origin-header .navbar-logo-left-container,.navbar-logo-left.e4-home-origin-header .navbar-container,.navbar-logo-left.e4-home-origin-header .navbar-wrapper{width:100vw!important;max-width:100vw!important;box-sizing:border-box!important;height:auto!important;min-height:0!important;}.navbar-logo-left.e4-home-origin-header .navbar-wrapper{display:flex!important;flex-wrap:wrap;}.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster{display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:1.05rem!important;flex:0 0 100vw!important;width:100vw!important;max-width:100vw!important;min-height:4.5rem!important;padding:0 1.15rem!important;}.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster #theme-toggle-button{display:none!important;}.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster .w-nav-button,.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster .menu-button{position:fixed!important;top:.75rem!important;right:.75rem!important;z-index:1002!important;display:flex!important;align-items:center!important;justify-content:center!important;order:5;flex:0 0 3rem!important;margin:0!important;width:3rem!important;min-width:3rem!important;height:3rem!important;min-height:3rem!important;border:0!important;border-radius:.45rem!important;background:#171511!important;color:#f7f3ea!important;transform:none!important;}.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster .hamburger-icon{filter:brightness(0) invert(1)!important;}.navbar-logo-left.e4-home-origin-header .navbar-right-div{display:none!important;}.navbar-logo-left.e4-home-origin-header .socials-div{display:flex!important;}.navbar-logo-left.e4-home-origin-header .nav-menu-wrapper{top:4.5rem!important;}}\
      .client-success-nav.e4-home-origin-header{position:sticky!important;top:0!important;z-index:1000!important;display:flex!important;align-items:stretch!important;min-height:5.625rem!important;padding:0!important;background:#050505!important;border:0!important;box-shadow:none!important;}.e4-client-success-brand-cluster{display:grid!important;grid-template-columns:3rem minmax(0,1fr) auto!important;align-items:center!important;column-gap:1.05rem!important;flex:0 0 clamp(22rem,29vw,23.2rem)!important;width:clamp(22rem,29vw,23.2rem)!important;min-height:5.625rem!important;padding:0 1.45rem!important;background:#e7ba56!important;}.e4-client-success-brand{display:flex!important;align-items:center!important;justify-content:center!important;width:3rem!important;min-width:3rem!important;margin:0!important;padding:0!important;}.e4-client-success-brand img{display:block!important;width:3rem!important;height:auto!important;filter:brightness(0) saturate(1)!important;}.e4-client-success-socials{display:flex!important;align-items:center!important;gap:.6rem!important;min-width:max-content!important;}.e4-client-success-socials a{display:flex!important;align-items:center!important;justify-content:center!important;width:2.3rem!important;height:2.3rem!important;border-radius:999px!important;background:#171511!important;}.e4-client-success-socials img{display:block!important;width:1rem!important;height:1rem!important;filter:none!important;}.e4-client-success-socials a:hover,.e4-client-success-socials a:focus-visible{background:#3a2f1a!important;outline:2px solid #171511!important;outline-offset:2px!important;}.e4-client-success-brand-cluster #theme-toggle-button{margin:0!important;white-space:nowrap;}.e4-client-success-right{display:flex!important;align-items:center!important;flex:1 1 auto!important;min-width:0!important;gap:clamp(.45rem,.85vw,.9rem)!important;padding:0 1.45rem!important;}.e4-client-success-header-toggle,.e4-client-success-drawer{display:none!important;}\
      @media screen and (max-width:991px){.client-success-nav.e4-home-origin-header{display:flex!important;flex-wrap:wrap!important;min-height:0!important;}.e4-client-success-brand-cluster{display:flex!important;align-items:center!important;gap:1.05rem!important;flex:1 1 100%!important;width:100%!important;min-height:4.5rem!important;padding:0 1.15rem!important;}.e4-client-success-brand-cluster #theme-toggle-button{display:none!important;}.e4-client-success-right{display:none!important;}.e4-client-success-header-toggle{display:flex!important;align-items:center!important;justify-content:center!important;order:5!important;margin-left:auto!important;width:3rem!important;height:3rem!important;border:0!important;border-radius:.45rem!important;background:#171511!important;color:#f7f3ea!important;cursor:pointer!important;}.e4-client-success-header-toggle svg{width:1.35rem!important;height:1.35rem!important;fill:none!important;stroke:currentColor!important;stroke-width:2!important;}.e4-client-success-drawer{position:absolute!important;top:4.5rem!important;left:0!important;right:0!important;z-index:1001!important;gap:1rem!important;padding:1.15rem!important;background:#050505!important;box-shadow:0 1rem 2rem rgba(0,0,0,.32)!important;}.e4-client-success-drawer.is-open{display:grid!important;}.e4-client-success-drawer .e4-nav-search{display:inline-flex!important;width:100%!important;max-width:none!important;margin:0!important;}.e4-client-success-mobile-list{display:grid!important;gap:0!important;margin:0!important;padding:0!important;list-style:none!important;}.e4-client-success-mobile-list .e4-mobile-nav-group{display:grid!important;grid-template-columns:1fr auto!important;align-items:center!important;border-bottom:1px solid rgba(237,190,89,.18)!important;}.e4-client-success-mobile-list .e4-nav-primary{grid-column:1!important;min-height:3rem!important;font-size:.82rem!important;}.e4-client-success-mobile-list .e4-nav-toggle{grid-column:2!important;width:2.8rem!important;height:3rem!important;}.e4-client-success-mobile-list .e4-nav-menu{position:static!important;grid-column:1 / -1!important;display:none!important;min-width:0!important;padding:.12rem 0 .6rem!important;border:0!important;background:transparent!important;box-shadow:none!important;opacity:1!important;pointer-events:auto!important;transform:none!important;}.e4-client-success-mobile-list .e4-mobile-nav-group.is-open .e4-nav-menu{display:grid!important;}.e4-client-success-mobile-list .e4-nav-menu a{padding:.65rem 0 .65rem .7rem!important;font-size:.7rem!important;}.e4-client-success-mobile-list .e4-mobile-contact{display:block!important;padding:.95rem 0!important;color:#f7f3ea!important;font-size:.82rem!important;font-weight:800!important;text-decoration:none!important;text-transform:uppercase!important;}}\
      @media screen and (min-width:992px) and (max-width:1180px){.navbar-logo-left.e4-home-origin-header,.navbar-logo-left.e4-home-origin-header .navbar-logo-left-container,.navbar-logo-left.e4-home-origin-header .navbar-container,.navbar-logo-left.e4-home-origin-header .navbar-wrapper{width:100%!important;max-width:none!important;}.navbar-logo-left.e4-home-origin-header .navbar-logo-left-container{flex:1 1 100%!important;}.navbar-logo-left.e4-home-origin-header .navbar-right-div{min-width:0!important;padding-right:.85rem!important;padding-left:.85rem!important;}.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster{flex-basis:25rem!important;width:25rem!important;padding-right:1.1rem!important;padding-left:1.1rem!important;}.navbar-logo-left.e4-home-origin-header .socials-div{gap:.4rem!important;}.navbar-logo-left.e4-home-origin-header .social-link-block{flex-basis:2rem!important;width:2rem!important;min-width:2rem!important;height:2rem!important;}.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster #theme-toggle-button{display:inline-flex!important;padding:.5rem .55rem!important;}.navbar-logo-left.e4-home-origin-header .e4-nav-search{min-width:6.5rem!important;max-width:7.3rem!important;}.navbar-logo-left.e4-home-origin-header .e4-dropdown-navigation{gap:.3rem!important;}.navbar-logo-left.e4-home-origin-header .e4-nav-primary,.navbar-logo-left.e4-home-origin-header .e4-nav-contact{font-size:.58rem!important;}.navbar-logo-left.e4-home-origin-header .e4-nav-toggle{width:1.05rem!important;}}\
      @media screen and (max-width:767px){.reference-topbar{min-height:4.6rem!important;}.reference-topbar-nav .e4-nav-search{min-width:0;max-width:none;flex:1;margin-right:0;}.reference-topbar-nav .e4-nav-search input{font-size:.61rem!important;}.reference-topbar-nav #theme-toggle-button{margin-left:.65rem;}}\
    ';
    document.head.appendChild(style);
  }

  function searchForm(id) {
    var form = document.createElement('form');
    form.className = 'e4-nav-search';
    form.action = '/search/';
    form.method = 'get';
    form.setAttribute('role', 'search');
    form.setAttribute('aria-label', 'Search E4 Power');
    form.innerHTML = '<label class="e4-visually-hidden" for="' + id + '">Search E4 Power</label><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m16 16 5 5"></path></svg><input id="' + id + '" name="q" type="search" autocomplete="off" placeholder="Search" />';
    return form;
  }

  function makeChevron() {
    return '<svg aria-hidden="true" viewBox="0 0 12 12"><path d="m2 4 4 4 4-4"></path></svg>';
  }

  function closeDropdowns(except) {
    document.querySelectorAll('.e4-nav-group.is-open,.e4-mobile-nav-group.is-open').forEach(function (group) {
      if (group === except) return;
      group.classList.remove('is-open');
      var toggle = group.querySelector('.e4-nav-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  }

  function installThemeDropdownGuard() {
    var closeForThemeChange = function () {
      closeDropdowns();
      document.querySelectorAll('.e4-nav-toggle').forEach(function (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      });
    };
    document.querySelectorAll('.theme-toggle-button').forEach(function (button) {
      button.addEventListener('click', function () {
        window.requestAnimationFrame(closeForThemeChange);
      });
    });
    new MutationObserver(function (mutations) {
      if (mutations.some(function (mutation) { return mutation.attributeName === 'class'; })) closeForThemeChange();
    }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }

  function makeDropdown(group, mobile, index) {
    var wrapper = document.createElement(mobile ? 'li' : 'div');
    wrapper.className = mobile ? 'e4-mobile-nav-group' : 'e4-nav-group';
    var primary = document.createElement('a');
    primary.className = 'e4-nav-primary';
    primary.href = group.url;
    primary.textContent = group.label;
    var toggle = document.createElement('button');
    var menuId = (mobile ? 'e4-mobile-menu-' : 'e4-nav-menu-') + index;
    toggle.className = 'e4-nav-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', menuId);
    toggle.setAttribute('aria-label', 'Open ' + group.label + ' menu');
    toggle.innerHTML = makeChevron();
    var menu = document.createElement('div');
    menu.className = 'e4-nav-menu';
    menu.id = menuId;
    group.children.forEach(function (child) {
      var link = document.createElement('a');
      link.href = child.url;
      link.textContent = child.label;
      menu.appendChild(link);
    });
    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      var opening = !wrapper.classList.contains('is-open');
      closeDropdowns(wrapper);
      wrapper.classList.toggle('is-open', opening);
      toggle.setAttribute('aria-expanded', opening ? 'true' : 'false');
    });
    toggle.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeDropdowns();
        toggle.focus();
      }
    });
    wrapper.appendChild(primary);
    wrapper.appendChild(toggle);
    wrapper.appendChild(menu);
    return wrapper;
  }

  function makeDesktopNavigation() {
    var nav = document.createElement('div');
    nav.className = 'e4-dropdown-navigation';
    nav.appendChild(makeHomeLink(false));
    groups.forEach(function (group, index) {
      nav.appendChild(makeDropdown(group, false, index));
    });
    return nav;
  }

  function makeHomeLink(mobile) {
    var link = document.createElement('a');
    link.className = 'e4-nav-primary e4-nav-home';
    link.href = '/';
    link.textContent = 'Home';
    if (!mobile) return link;
    var item = document.createElement('li');
    item.className = 'e4-mobile-home';
    item.appendChild(link);
    return item;
  }

  function makeContactLink(mobile) {
    var contact = document.createElement(mobile ? 'li' : 'a');
    if (mobile) {
      var link = document.createElement('a');
      link.className = 'e4-mobile-contact';
      link.href = '/contact-us/';
      link.textContent = 'Contact Us';
      contact.appendChild(link);
      return contact;
    }
    contact.className = 'e4-nav-contact';
    contact.href = '/contact-us/';
    contact.textContent = 'Contact Us';
    return contact;
  }

  function removeLegacyLinks(container) {
    if (!container) return;
    container.querySelectorAll(':scope > a:not(.e4-mobile-search-link),:scope > .e4-dropdown-navigation,:scope > .e4-nav-contact').forEach(function (item) {
      item.remove();
    });
  }

  function installDesktopNavigation(container, searchId, options) {
    if (!container) return;
    options = options || {};
    removeLegacyLinks(container);
    var previous = container.querySelector('.e4-dropdown-navigation');
    if (previous) previous.remove();
    var previousContact = container.querySelector('.e4-nav-contact');
    if (previousContact) previousContact.remove();
    var search = container.querySelector('.e4-nav-search');
    if (!search) {
      search = searchForm(searchId);
      var theme = container.querySelector('#theme-toggle-button');
      container.insertBefore(search, theme || container.firstChild);
    }
    var nav = makeDesktopNavigation();
    var contact = makeContactLink(false);
    var themeButton = container.querySelector('#theme-toggle-button');
    container.insertBefore(nav, themeButton || null);
    container.insertBefore(contact, themeButton || null);
    if (options.mobileSearch) {
      var menuButton = container.querySelector('.menu-button');
      if (!container.querySelector('.e4-mobile-search-link')) {
        var mobileSearch = document.createElement('a');
        mobileSearch.className = 'e4-mobile-search-link';
        mobileSearch.href = '/search/';
        mobileSearch.textContent = 'Search';
        container.insertBefore(mobileSearch, menuButton || null);
      }
    }
  }

  function installMobileNavigation(menu) {
    if (!menu) return;
    if (!menu.querySelector('.e4-nav-search')) menu.insertBefore(searchForm('e4-mobile-search'), menu.firstChild);
    var list = menu.querySelector('.nav-menu-two');
    if (!list) return;
    list.innerHTML = '';
    list.appendChild(makeHomeLink(true));
    groups.forEach(function (group, index) {
      list.appendChild(makeDropdown(group, true, index));
    });
    list.appendChild(makeContactLink(true));
  }

  function installHomepageMobileNavigation(homeNav) {
    if (!homeNav) return;
    var styleId = 'e4-home-mobile-navigation-style';
    if (!document.getElementById(styleId)) {
      var style = document.createElement('style');
      style.id = styleId;
      style.textContent = '\
        .e4-home-mobile-drawer{display:none!important;}\
        @media screen and (max-width:991px){\
          body.home-service-menu .reference-topbar-nav .e4-home-mobile-drawer{display:block!important;order:4!important;flex:1 1 100%!important;width:100%!important;margin:0!important;padding:0!important;}\
          body.home-service-menu .reference-topbar-nav .e4-home-mobile-list{display:grid!important;gap:0!important;width:100%!important;margin:0!important;padding:0!important;list-style:none!important;}\
          body.home-service-menu .reference-topbar-nav .e4-home-mobile-list .e4-mobile-nav-group{display:grid!important;grid-template-columns:minmax(0,1fr) 3rem!important;align-items:center!important;width:100%!important;margin:0!important;border-bottom:1px solid rgba(237,190,89,.18)!important;}\
          body.home-service-menu .reference-topbar-nav .e4-home-mobile-list .e4-nav-primary{grid-column:1!important;min-height:3.25rem!important;padding:.95rem 0!important;color:#f7f3ea!important;font-size:.82rem!important;font-weight:800!important;line-height:1!important;text-decoration:none!important;text-transform:uppercase!important;}\
          body.home-service-menu .reference-topbar-nav .e4-home-mobile-list .e4-nav-toggle{grid-column:2!important;width:3rem!important;height:3.25rem!important;color:#edbe59!important;}\
          body.home-service-menu .reference-topbar-nav .e4-home-mobile-list .e4-nav-menu{position:static!important;grid-column:1 / -1!important;display:none!important;min-width:0!important;margin:0!important;padding:.12rem 0 .55rem!important;border:0!important;background:transparent!important;box-shadow:none!important;opacity:1!important;pointer-events:auto!important;transform:none!important;}\
          body.home-service-menu .reference-topbar-nav .e4-home-mobile-list .e4-mobile-nav-group.is-open .e4-nav-menu{display:grid!important;}\
          body.home-service-menu .reference-topbar-nav .e4-home-mobile-list .e4-nav-menu a{padding:.65rem 0 .65rem .75rem!important;color:#f7f3ea!important;font-size:.7rem!important;font-weight:800!important;line-height:1.25!important;text-decoration:none!important;text-transform:uppercase!important;}\
          body.home-service-menu .reference-topbar-nav .e4-nav-contact{order:5!important;display:block!important;width:100%!important;min-height:3.25rem!important;padding:.95rem 0!important;color:#f7f3ea!important;font-size:.82rem!important;font-weight:800!important;line-height:1!important;text-decoration:none!important;text-transform:uppercase!important;}\
          body.home-service-menu.theme-light .reference-topbar-nav .e4-home-mobile-list .e4-nav-primary,body.home-service-menu.theme-light .reference-topbar-nav .e4-home-mobile-list .e4-nav-menu a,body.home-service-menu.theme-light .reference-topbar-nav .e4-nav-contact{color:#1e1a16!important;}\
          body.home-service-menu .partner-marquee-section{width:100vw!important;max-width:100vw!important;margin-left:calc(50% - 50vw)!important;margin-right:calc(50% - 50vw)!important;padding-right:0!important;padding-left:0!important;}\
          body.home-service-menu .partner-marquee-section>.container,body.home-service-menu .partner-marquee-section .marquee{width:100vw!important;max-width:100vw!important;margin-right:0!important;margin-left:0!important;padding-right:0!important;padding-left:0!important;}\
        }\
      ';
      document.head.appendChild(style);
    }
    var drawer = homeNav.querySelector('.e4-home-mobile-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.className = 'e4-home-mobile-drawer';
      var contact = homeNav.querySelector('.e4-nav-contact');
      homeNav.insertBefore(drawer, contact || null);
    }
    drawer.innerHTML = '';
    var list = document.createElement('ul');
    list.className = 'e4-home-mobile-list';
    list.appendChild(makeHomeLink(true));
    groups.forEach(function (group, index) {
      list.appendChild(makeDropdown(group, true, 'home-' + index));
    });
    drawer.appendChild(list);
  }

  function makeHeaderThemeToggle() {
    var button = document.createElement('button');
    button.type = 'button';
    button.id = 'theme-toggle-button';
    button.className = 'theme-toggle-button';
    button.setAttribute('aria-label', 'Toggle light and dark mode');
    button.innerHTML = '<span class="theme-toggle-label">Theme</span><span class="theme-toggle-track"><span class="theme-toggle-thumb"></span></span>';
    button.setAttribute('aria-pressed', document.body.classList.contains('theme-light') ? 'true' : 'false');
    button.addEventListener('click', function () {
      var useLight = !document.body.classList.contains('theme-light');
      document.body.classList.toggle('theme-light', useLight);
      document.body.classList.toggle('theme-dark', !useLight);
      button.setAttribute('aria-pressed', useLight ? 'true' : 'false');
      try { localStorage.setItem('e4-theme', useLight ? 'light' : 'dark'); } catch (error) {}
    });
    return button;
  }

  function applyHomepageDesignToInteriorHeaders() {
    document.querySelectorAll('.navbar-logo-left').forEach(function (header) {
      if (header.classList.contains('e4-home-origin-header')) return;
      var wrapper = header.querySelector('.navbar-wrapper');
      var brand = header.querySelector('.navbar-brand');
      var right = header.querySelector('.navbar-right-div');
      var socials = right && right.querySelector('.socials-div');
      var theme = right && right.querySelector('#theme-toggle-button');
      var menuButton = right && right.querySelector('.w-nav-button,.menu-button');
      if (!wrapper || !brand || !right || !socials) return;
      if (!theme) {
        theme = makeHeaderThemeToggle();
        right.appendChild(theme);
      }
      var cluster = document.createElement('div');
      cluster.className = 'e4-site-brand-cluster';
      wrapper.insertBefore(cluster, brand);
      cluster.appendChild(brand);
      cluster.appendChild(socials);
      cluster.appendChild(theme);
      if (menuButton) cluster.appendChild(menuButton);
      header.classList.add('e4-home-origin-header');
    });
  }

  function normalizeClientSuccessHeader() {
    var header = document.querySelector('.client-success-nav');
    if (!header || header.classList.contains('e4-home-origin-header')) return;
    var socialLinks = [
      ['Instagram', 'https://www.instagram.com/e4power_?igsh=bXR4bThxMHh2dHNy&utm_source=qr', 'https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68d9d0c4ee8e329fe01d525b_instagram.svg'],
      ['LinkedIn', 'https://www.linkedin.com/company/e4-power-consulting/', 'https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68d9d0c46c9537fa67bb89bd_linkedin.svg'],
      ['TikTok', 'https://www.tiktok.com/@e4powerconsulting?_t=ZT-90YVLBMkwaT&_r=1', 'https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68f66f4d7a2ffc0d86a72550_tiktok.svg'],
      ['Facebook', 'https://www.facebook.com/profile.php?id=61573544665670', 'https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68d9d0c48dbb4dd69e849624_facebook.svg']
    ];
    var brandCluster = document.createElement('div');
    brandCluster.className = 'e4-client-success-brand-cluster';
    var brand = document.createElement('a');
    brand.className = 'e4-client-success-brand';
    brand.href = '/';
    brand.setAttribute('aria-label', 'E4 Power home');
    brand.innerHTML = '<img alt="E4 Power" src="https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68bcc54da8714105bb252c7f_e4_logo_white.svg" />';
    var socials = document.createElement('div');
    socials.className = 'e4-client-success-socials';
    socialLinks.forEach(function (item) {
      var link = document.createElement('a');
      link.href = item[1];
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.setAttribute('aria-label', item[0]);
      link.innerHTML = '<img alt="" src="' + item[2] + '" />';
      socials.appendChild(link);
    });
    var theme = makeHeaderThemeToggle();
    brandCluster.appendChild(brand);
    brandCluster.appendChild(socials);
    brandCluster.appendChild(theme);
    var right = document.createElement('div');
    right.className = 'e4-client-success-right';
    right.appendChild(searchForm('e4-client-success-search'));
    right.appendChild(makeDesktopNavigation());
    right.appendChild(makeContactLink(false));
    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'e4-client-success-header-toggle';
    toggle.setAttribute('aria-label', 'Open navigation menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>';
    var drawer = document.createElement('nav');
    drawer.className = 'e4-client-success-drawer';
    drawer.setAttribute('aria-label', 'Mobile navigation');
    drawer.appendChild(searchForm('e4-client-success-mobile-search'));
    var list = document.createElement('ul');
    list.className = 'e4-client-success-mobile-list';
    groups.forEach(function (group, index) { list.appendChild(makeDropdown(group, true, index)); });
    list.appendChild(makeContactLink(true));
    drawer.appendChild(list);
    toggle.addEventListener('click', function () {
      var open = !drawer.classList.contains('is-open');
      drawer.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });
    header.innerHTML = '';
    header.classList.add('e4-home-origin-header');
    header.appendChild(brandCluster);
    header.appendChild(right);
    header.appendChild(toggle);
    header.appendChild(drawer);
  }

  function installQuickContact() {
    if (!document.getElementById('e4-quick-contact-style')) {
      var style = document.createElement('style');
      style.id = 'e4-quick-contact-style';
      style.textContent = '.e4-quick-contact{position:fixed;right:1.35rem;bottom:1.35rem;z-index:29000;display:inline-flex;align-items:center;gap:.58rem;padding:.82rem 1rem;border:1px solid #edbe59;background:#edbe59;color:#171511!important;box-shadow:0 .85rem 2.1rem rgba(0,0,0,.28);font-family:Montserrat,Arial,sans-serif;font-size:.68rem;font-weight:900;letter-spacing:.09em;line-height:1;text-decoration:none!important;text-transform:uppercase;transition:transform .2s cubic-bezier(.23,1,.32,1),background .2s ease,color .2s ease}.e4-quick-contact svg{width:1.05rem;height:1.05rem;fill:currentColor}.e4-quick-contact:hover,.e4-quick-contact:focus-visible{transform:translateY(-3px);background:#fff4da;color:#171511!important;outline:2px solid #edbe59;outline-offset:3px}@media screen and (max-width:767px){.e4-quick-contact{right:.85rem;bottom:calc(.85rem + env(safe-area-inset-bottom));padding:.78rem .86rem;font-size:.62rem}}';
      document.head.appendChild(style);
    }
    if (document.querySelector('.e4-quick-contact')) return;
    var link = document.createElement('a');
    link.className = 'e4-quick-contact';
    link.href = '/contact-us/';
    link.setAttribute('aria-label', 'Start an inquiry with E4 Power');
    link.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5.1 3.7 8.6 3l2.1 4.7-2.3 1.8c1.4 2.8 3.3 4.7 6.1 6.1l1.8-2.3 4.7 2.1-.7 3.5c-.2 1-1.1 1.8-2.2 1.8C10.1 20.7 3.3 13.9 3.3 5.9c0-1.1.8-2 1.8-2.2z"/></svg><span>Contact E4</span>';
    document.body.appendChild(link);
  }

  function removeSectionSeparators() {
    document.querySelectorAll('hr,.ref-divider,.hero-services-separator,[class*="section-divider"],[class*="section-separator"],[class*="separator-line"],[class*="divider-line"]').forEach(function (separator) {
      separator.setAttribute('aria-hidden', 'true');
      separator.style.setProperty('display', 'none', 'important');
    });
    document.querySelectorAll('body main,body header,body section,body article,body aside').forEach(function (section) {
      var style = window.getComputedStyle(section);
      var hasThinBorder = ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'].some(function (property) {
        var value = parseFloat(style[property]);
        return value > 0 && value <= 1;
      });
      if (hasThinBorder) section.style.setProperty('border-color', 'transparent', 'important');
    });
    document.querySelectorAll('main ol,main ul,main li').forEach(function (listElement) {
      listElement.style.setProperty('border-color', 'transparent', 'important');
    });
  }

  function removeGenericHeadingPretext() {
    var selectors = [
      '.eyebrow', '.hero-service-kicker', '.linkedin-feed-eyebrow', '.ref-detail-kicker', '.ref-heading-accent', '.ref-overline', '.search-kicker', '.section-label', '.service-preview-kicker', '.services-flyer-kicker', '.services-flyer-section-kicker', '.e4-inquiry-kicker', '.bridge-library-kicker', '.bridge-model-index', '.team-line-subheading-div .subheading-div'
    ];
    document.querySelectorAll(selectors.join(',')).forEach(function (pretext) {
      pretext.setAttribute('aria-hidden', 'true');
      pretext.remove();
    });
    document.querySelectorAll('.subheading-div').forEach(function (pretext) {
      if (pretext.textContent.trim().toLowerCase() !== 'meet the experts behind your success') return;
      pretext.setAttribute('aria-hidden', 'true');
      pretext.remove();
    });
  }

  function installAnnotatedHomepageRefinements() {
    if (!document.getElementById('e4-annotated-homepage-refinements')) {
      var style = document.createElement('style');
      style.id = 'e4-annotated-homepage-refinements';
      style.textContent = '\
        body.theme-light .team-members-div,body.theme-light .team-member{background:#fffaf2!important;color:#1e1a16!important;}\
        body.theme-light .team-member .member-title,body.theme-light .team-member .member-bio,body.theme-light .team-member .member-bio p,body.theme-light .team-member .link-block,body.theme-light .team-member .link-block div{color:#1e1a16!important;opacity:1!important;text-shadow:none!important;}\
        body.theme-light .team-member .role-text{color:#a67324!important;opacity:1!important;text-shadow:none!important;}\
        body.theme-light .team-member .link-block{background:#fffaf2!important;border-color:rgba(30,26,22,.24)!important;}\
        html body.theme-light .team-members-div .team-member a.link-block,html body.theme-light .team-members-div .team-member a.link-block>div{color:#1e1a16!important;opacity:1!important;text-shadow:none!important;}\
        html body.theme-light .team-members-div .team-member a.link-block img{filter:brightness(0) saturate(100%)!important;opacity:1!important;}\
        .team-member .team-picture-div img[src*="tamara-henry-portrait"]{display:block!important;width:100%!important;height:auto!important;min-height:16rem!important;object-fit:cover!important;object-position:50% 18%!important;}\
        #empower.bridge-program-section .bridge-model-pillar p{color:#fffaf2!important;font-size:clamp(.78rem,1.3vw,.95rem)!important;font-weight:650!important;line-height:1.48!important;text-shadow:0 1px 10px rgba(0,0,0,.4)!important;}\
        #empower.bridge-program-section .bridge-model-pillar svg,#empower.bridge-program-section .bridge-model-pillar [class*="icon"]{color:#edbe59!important;fill:currentColor!important;opacity:1!important;}\
        @media screen and (max-width:560px){\
          body.home-service-menu .reference-hero{min-height:35rem!important;padding:0!important;}\
          body.home-service-menu .reference-hero-copy{top:clamp(13.5rem,59vw,15.5rem)!important;right:1.25rem!important;bottom:auto!important;left:1.25rem!important;width:auto!important;max-width:none!important;transform:none!important;text-align:center!important;}\
          body.home-service-menu .reference-hero-title{font-size:clamp(2.45rem,13vw,3.15rem)!important;line-height:.95!important;}\
          body.home-service-menu .reference-hero-support{margin-top:.8rem!important;font-size:.93rem!important;line-height:1.48!important;}\
          body.home-service-menu .hero-services-panel{right:1rem!important;bottom:1rem!important;left:1rem!important;width:auto!important;max-width:none!important;margin:0!important;padding:.72rem!important;}\
          #empower.bridge-program-section .bridge-model-pillars{gap:1.15rem!important;}\
          #empower.bridge-program-section .bridge-model-pillar p{font-size:.86rem!important;line-height:1.52!important;}\
        }\
      ';
      document.head.appendChild(style);
    }
    document.querySelectorAll('body.home-service-menu .bookmarks-div').forEach(function (bookmarks) {
      bookmarks.remove();
    });
    document.querySelectorAll('body.home-service-menu #educate').forEach(function (educateSection) {
      educateSection.remove();
    });
    document.querySelectorAll('.team-member .team-picture-div img[src*="tamara-henry-v2"]').forEach(function (portrait) {
      portrait.src = '/manus-storage/tamara-henry-portrait_25995acc.png';
      portrait.srcset = '/manus-storage/tamara-henry-portrait_25995acc.png 1920w';
      portrait.alt = 'Tamara Henry, PMP';
    });
  }

  function installHeroFourEsBanner() {
    var heroCopy = document.querySelector('body.home-service-menu .reference-hero-copy');
    if (!heroCopy) return;
    var support = heroCopy.querySelector('.reference-hero-support');
    if (support) support.remove();
    if (!document.getElementById('e4-hero-four-es-banner-style')) {
      var style = document.createElement('style');
      style.id = 'e4-hero-four-es-banner-style';
      style.textContent = '\
        .e4-hero-four-es-banner{position:absolute!important;top:calc(100% + 1.1rem)!important;left:50%!important;z-index:24!important;width:100vw!important;margin:0!important;padding:0!important;transform:translateX(-50%)!important;background:#e7ba56!important;color:#171511!important;box-shadow:0 .8rem 2rem rgba(0,0,0,.16)!important;}\
        .e4-hero-four-es-list{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;align-items:stretch!important;width:min(100%,90rem)!important;margin:0 auto!important;padding:0!important;list-style:none!important;}\
        .e4-hero-four-es-item{display:grid!important;grid-template-columns:3.35rem minmax(0,1fr)!important;align-items:center!important;gap:.8rem!important;min-height:5.9rem!important;margin:0!important;padding:1rem clamp(.9rem,2vw,2rem)!important;color:#171511!important;}\
        .e4-hero-four-es-item:not(:last-child){box-shadow:inset -1px 0 0 rgba(23,21,17,.22)!important;}\
        .e4-hero-four-es-icon{display:grid!important;place-items:center!important;width:3.35rem!important;height:3.35rem!important;border-radius:999px!important;background:#171511!important;color:#e7ba56!important;}\
        .e4-hero-four-es-icon svg{width:1.75rem!important;height:1.75rem!important;fill:none!important;stroke:currentColor!important;stroke-width:1.9!important;stroke-linecap:round!important;stroke-linejoin:round!important;}\
        .e4-hero-four-es-icon svg .e4-four-es-fill{fill:currentColor!important;stroke:none!important;}\
        .e4-hero-four-es-label{display:block!important;margin:0!important;color:#171511!important;font-family:Montserrat,Arial,sans-serif!important;font-size:clamp(.88rem,1.25vw,1.05rem)!important;font-weight:900!important;line-height:1.05!important;text-transform:uppercase!important;}\
        .e4-hero-four-es-description{display:block!important;margin-top:.2rem!important;color:#171511!important;font-family:Montserrat,Arial,sans-serif!important;font-size:clamp(.72rem,1vw,.86rem)!important;font-weight:650!important;line-height:1.25!important;}\
        @media screen and (max-width:767px){.e4-hero-four-es-banner{top:calc(100% + .9rem)!important;}.e4-hero-four-es-list{grid-template-columns:repeat(2,minmax(0,1fr))!important;}.e4-hero-four-es-item{grid-template-columns:2.55rem minmax(0,1fr)!important;gap:.55rem!important;min-height:4.55rem!important;padding:.7rem .75rem!important;}.e4-hero-four-es-item:nth-child(odd){box-shadow:inset -1px 0 0 rgba(23,21,17,.22),inset 0 -1px 0 rgba(23,21,17,.22)!important;}.e4-hero-four-es-item:nth-child(even){box-shadow:inset 0 -1px 0 rgba(23,21,17,.22)!important;}.e4-hero-four-es-item:nth-last-child(-n+2){box-shadow:inset -1px 0 0 rgba(23,21,17,.22)!important;}.e4-hero-four-es-item:last-child{box-shadow:none!important;}.e4-hero-four-es-icon{width:2.55rem!important;height:2.55rem!important;}.e4-hero-four-es-icon svg{width:1.35rem!important;height:1.35rem!important;}.e4-hero-four-es-label{font-size:.78rem!important;}.e4-hero-four-es-description{font-size:.64rem!important;line-height:1.2!important;}}\
      ';
      document.head.appendChild(style);
    }
    var banner = heroCopy.querySelector('.e4-hero-four-es-banner');
    if (banner) return;
    banner = document.createElement('aside');
    banner.className = 'e4-hero-four-es-banner';
    banner.setAttribute('aria-label', 'E4 Power approach');
    banner.innerHTML = '<ul class="e4-hero-four-es-list"><li class="e4-hero-four-es-item"><span class="e4-hero-four-es-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v17H6.5A2.5 2.5 0 0 0 4 22zM20 5.5A2.5 2.5 0 0 0 17.5 3H12v17h5.5A2.5 2.5 0 0 1 20 22z"/><path d="M7.5 7.5h2M14.5 7.5h2"/></svg></span><span><strong class="e4-hero-four-es-label">Educate</strong><span class="e4-hero-four-es-description">Build Knowledge</span></span></li><li class="e4-hero-four-es-item"><span class="e4-hero-four-es-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 19h16M6 17V11M11 17V7M16 17V4"/><path d="m5 8 5-4 4 2 5-4"/></svg></span><span><strong class="e4-hero-four-es-label">Elevate</strong><span class="e4-hero-four-es-description">Strengthen Systems</span></span></li><li class="e4-hero-four-es-item"><span class="e4-hero-four-es-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="3.4"/><path d="m12 12 6.3-6.3"/><path d="m17.1 5.7 2.4.7-.7 2.4"/></svg></span><span><strong class="e4-hero-four-es-label">Empower</strong><span class="e4-hero-four-es-description">Execute with Excellence</span></span></li><li class="e4-hero-four-es-item"><span class="e4-hero-four-es-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="7.2" r="2.5"/><circle cx="6.3" cy="10" r="2.1"/><circle cx="17.7" cy="10" r="2.1"/><path d="M7.2 20v-3a4.8 4.8 0 0 1 9.6 0v3M2.7 19v-2.1a3.5 3.5 0 0 1 3-3.5M21.3 19v-2.1a3.5 3.5 0 0 0-3-3.5"/></svg></span><span><strong class="e4-hero-four-es-label">Engage</strong><span class="e4-hero-four-es-description">Connect and Collaborate</span></span></li></ul>';
    heroCopy.appendChild(banner);
  }

  function installRequestedRefinementStyles() {
    if (document.getElementById('e4-requested-refinement-style')) return;
    var style = document.createElement('style');
    style.id = 'e4-requested-refinement-style';
    style.textContent = '\
      .e4-scroll-rail{position:fixed!important;top:0!important;bottom:0!important;left:0!important;z-index:32000!important;width:.34rem!important;background:rgba(231,186,86,.2)!important;pointer-events:none!important;}.e4-scroll-progress{display:block!important;width:100%!important;height:100%!important;background:#e7ba56!important;box-shadow:0 0 .9rem rgba(231,186,86,.72)!important;transform:scaleY(0);transform-origin:top!important;transition:transform .08s linear!important;}\
      .e4-bridge-offering-intro{position:relative!important;isolation:isolate!important;overflow:hidden!important;padding:clamp(4.8rem,9vw,8.4rem) 0!important;background:#110b00!important;color:#fff8ef!important;}.e4-bridge-offering-intro::before{content:"";position:absolute;z-index:-1;inset:0;background:radial-gradient(circle at 7% 12%,rgba(231,186,86,.22),transparent 26%),linear-gradient(118deg,rgba(255,255,255,.035),transparent 42%);pointer-events:none;}.e4-bridge-offering-grid{display:grid!important;grid-template-columns:minmax(0,.95fr) minmax(22rem,1.05fr)!important;gap:clamp(2.2rem,6vw,7rem)!important;align-items:center!important;width:min(100% - clamp(2.5rem,8vw,10rem),88rem)!important;margin:0 auto!important;}.e4-bridge-offering-copy h2{max-width:11ch!important;margin:0!important;color:#fff8ef!important;font-family:Montserrat,Arial,sans-serif!important;font-size:clamp(2.8rem,5.8vw,6.1rem)!important;font-weight:900!important;line-height:.88!important;text-transform:uppercase!important;}.e4-bridge-offering-copy h2 span{color:#e7ba56!important;}.e4-bridge-offering-lede{max-width:37rem!important;margin:1.5rem 0 0!important;color:#fff8ef!important;font-family:Montserrat,Arial,sans-serif!important;font-size:clamp(1rem,1.45vw,1.22rem)!important;font-weight:650!important;line-height:1.58!important;}.e4-bridge-offering-copy p:not(.e4-bridge-offering-lede){max-width:35rem!important;margin:1.1rem 0 0!important;color:rgba(255,248,239,.78)!important;font-family:Montserrat,Arial,sans-serif!important;font-size:clamp(.92rem,1.2vw,1.05rem)!important;line-height:1.68!important;}.e4-bridge-offering-photos{position:relative!important;align-self:stretch!important;min-height:clamp(22rem,34vw,31rem)!important;overflow:hidden!important;background:#1a140b!important;}.e4-bridge-offering-photos::after{content:"";position:absolute!important;top:0!important;right:0!important;bottom:0!important;width:.35rem!important;background:#e7ba56!important;pointer-events:none!important;}.e4-bridge-offering-photo{display:block!important;width:100%!important;height:100%!important;margin:0!important;background:#1a140b!important;box-shadow:none!important;}.e4-bridge-offering-photo img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;object-position:50% 50%!important;filter:grayscale(1) contrast(1.08)!important;transition:filter .22s ease,transform .36s cubic-bezier(.23,1,.32,1)!important;}.e4-bridge-offering-photo:hover img{filter:grayscale(0) contrast(1)!important;transform:scale(1.025)!important;}.e4-bridge-offering-photo--writing{display:block!important;}.e4-bridge-offering-intro,.e4-bridge-offering-intro *{letter-spacing:0!important;}\
      body.home-service-menu .hero-services-panel .hero-services-list{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:.55rem 1.2rem!important;margin:0!important;padding:.8rem 0 .2rem!important;color:#f6efe3!important;line-height:1.25!important;text-shadow:none!important;}body.home-service-menu .hero-services-panel .hero-services-line{display:contents!important;}body.home-service-menu .hero-services-panel .hero-services-separator{display:none!important;}body.home-service-menu .hero-services-panel a.hero-services-item{display:flex!important;align-items:center!important;gap:.45rem!important;min-height:0!important;padding:.28rem 0!important;border:0!important;background:transparent!important;box-shadow:none!important;color:#fff8ef!important;font-family:Montserrat,Arial,sans-serif!important;font-size:.7rem!important;font-weight:800!important;line-height:1.3!important;text-align:left!important;text-decoration:none!important;text-transform:uppercase!important;white-space:normal!important;transition:color .16s ease!important;}body.home-service-menu .hero-services-panel a.hero-services-item::before{content:"";display:block!important;flex:0 0 .34rem!important;width:.34rem!important;height:.34rem!important;background:#e7ba56!important;}body.home-service-menu .hero-services-panel a.hero-services-item:hover,body.home-service-menu .hero-services-panel a.hero-services-item:focus-visible{background:transparent!important;color:#e7ba56!important;outline:0!important;text-decoration:underline!important;text-decoration-thickness:1px!important;text-underline-offset:.28rem!important;transform:none!important;}body.home-service-menu.theme-light .hero-services-panel a.hero-services-item{background:transparent!important;color:#1e1a16!important;}body.home-service-menu.theme-light .hero-services-panel a.hero-services-item:hover,body.home-service-menu.theme-light .hero-services-panel a.hero-services-item:focus-visible{background:transparent!important;color:#8d601a!important;}.services-flyer-core,.services-flyer-service-list li[id]{scroll-margin-top:7.25rem!important;}\
      @media screen and (min-width:992px){.navbar-logo-left.e4-home-origin-header .navbar-right-div,.client-success-nav.e4-home-origin-header .e4-client-success-right{flex-wrap:nowrap!important;min-width:0!important;}.navbar-logo-left.e4-home-origin-header .e4-dropdown-navigation,.client-success-nav.e4-home-origin-header .e4-dropdown-navigation{flex:0 0 auto!important;white-space:nowrap!important;}.navbar-logo-left.e4-home-origin-header .e4-nav-search{flex:0 1 8rem!important;}.navbar-logo-left.e4-home-origin-header .e4-nav-contact{flex:0 0 auto!important;}}\
      @media screen and (min-width:992px) and (max-width:1180px){.navbar-logo-left.e4-home-origin-header .navbar-right-div{gap:.28rem!important;}.navbar-logo-left.e4-home-origin-header .e4-nav-search{min-width:5.6rem!important;max-width:6.25rem!important;}.navbar-logo-left.e4-home-origin-header .e4-dropdown-navigation{gap:.3rem!important;}.navbar-logo-left.e4-home-origin-header .e4-nav-group{margin-left:.08rem!important;}.navbar-logo-left.e4-home-origin-header .e4-nav-home{margin-right:.12rem!important;}.navbar-logo-left.e4-home-origin-header .e4-nav-primary,.navbar-logo-left.e4-home-origin-header .e4-nav-contact{font-size:.54rem!important;}.navbar-logo-left.e4-home-origin-header .e4-nav-toggle{width:.9rem!important;}}\
      @media screen and (max-width:767px){.e4-scroll-rail{width:.23rem!important;}.e4-bridge-offering-intro{padding:4.25rem 0!important;}.e4-bridge-offering-grid{grid-template-columns:1fr!important;gap:2.25rem!important;width:min(100% - 2.5rem,40rem)!important;}.e4-bridge-offering-copy h2{font-size:clamp(2.7rem,14vw,4.25rem)!important;}.e4-bridge-offering-lede{margin-top:1.15rem!important;font-size:1rem!important;}.e4-bridge-offering-photos{min-height:19rem!important;}.e4-bridge-offering-intro .e4-bridge-offering-copy p:not(.e4-bridge-offering-lede){font-size:.93rem!important;}.hero-container.reference-hero .hero-services-panel .hero-services-list{grid-template-columns:1fr!important;gap:.42rem!important;padding-top:.55rem!important;}.hero-container.reference-hero .hero-services-panel a.hero-services-item{min-height:2.65rem!important;justify-content:center!important;padding:.52rem 0!important;font-size:.66rem!important;text-align:center!important;}}\
      @media (prefers-reduced-motion:reduce){.e4-scroll-progress,.e4-bridge-offering-photo img,.e4-bridge-offering-link,body.home-service-menu .hero-services-panel a.hero-services-item{transition:none!important;}}\
    ';
    document.head.appendChild(style);
  }

  function installBridgeLightModeSystem() {
    if (document.getElementById('e4-bridge-light-mode-system')) return;
    var style = document.createElement('style');
    style.id = 'e4-bridge-light-mode-system';
    style.textContent = '\
      body.theme-light #empower.bridge-program-section{background:#f5f0e6!important;color:#1e1a16!important;}\
      body.theme-light #empower.bridge-program-section::before{background:radial-gradient(circle at 18% 9%,rgba(199,150,48,.2),transparent 28%),linear-gradient(110deg,rgba(17,11,0,.055),transparent 44%)!important;}\
      body.theme-light #empower.bridge-program-section .bridge-model-library{position:relative!important;}\
      body.theme-light #empower.bridge-program-section .bridge-library-header{border-color:rgba(30,26,22,.24)!important;}\
      body.theme-light #empower.bridge-program-section .bridge-library-heading,body.theme-light #empower.bridge-program-section .bridge-model-title{color:#1e1a16!important;text-shadow:none!important;}\
      body.theme-light #empower.bridge-program-section .bridge-library-heading span,body.theme-light #empower.bridge-program-section .bridge-model-title span,body.theme-light #empower.bridge-program-section .bridge-model-subtitle{color:#8d601a!important;}\
      body.theme-light #empower.bridge-program-section .bridge-library-intro,body.theme-light #empower.bridge-program-section .bridge-model-context{color:#4a3e30!important;text-shadow:none!important;}\
      body.theme-light #empower.bridge-program-section .bridge-model-grid{gap:0!important;}\
      body.theme-light #empower.bridge-program-section .bridge-model-card,body.theme-light #empower.bridge-program-section .bridge-model-card:nth-child(even)::before{background:#f5f0e6!important;}\
      body.theme-light #empower.bridge-program-section .bridge-model-card:nth-child(even)::before{background:#e9d9b7!important;}\
      body.theme-light #empower.bridge-program-section .bridge-model-card{border-color:transparent!important;color:#1e1a16!important;}\
      body.theme-light #empower.bridge-program-section .bridge-model-card::after{background:#8d601a!important;opacity:.7!important;}\
      body.theme-light #empower.bridge-program-section .bridge-model-pillar p{color:#2c261f!important;text-shadow:none!important;}\
      body.theme-light #empower.bridge-program-section .bridge-model-pillar-icon,body.theme-light #empower.bridge-program-section .bridge-model-pillar-icon svg{color:#8d601a!important;fill:currentColor!important;}\
      body.theme-light #empower.bridge-program-section .bridge-network::before{border-color:rgba(141,96,26,.55)!important;box-shadow:inset 0 0 2.5rem rgba(141,96,26,.08),0 0 0 1px rgba(30,26,22,.08)!important;}\
      body.theme-light #empower.bridge-program-section .bridge-network::after{border-color:rgba(30,26,22,.24)!important;}\
      body.theme-light #empower.bridge-program-section .bridge-network-links line{stroke:rgba(45,37,25,.42)!important;}\
      body.theme-light #empower.bridge-program-section .bridge-network-core{border-color:#8d601a!important;background:radial-gradient(circle,#fffaf2,#e7d4a9 72%)!important;box-shadow:0 0 0 .45rem rgba(141,96,26,.12),0 0 2.5rem rgba(141,96,26,.14)!important;}\
      body.theme-light #empower.bridge-program-section .bridge-network-core strong{color:#1e1a16!important;text-shadow:none!important;}\
      body.theme-light #empower.bridge-program-section .bridge-network-node::after{border-color:rgba(30,26,22,.52)!important;background:#fffaf2!important;box-shadow:0 0 0 .2rem rgba(30,26,22,.06)!important;}\
      body.theme-light #empower.bridge-program-section .bridge-network-role-label{color:#1e1a16!important;text-shadow:0 1px 0 #fffaf2!important;}\
      body.theme-light #empower.bridge-program-section .bridge-network-node:hover .bridge-network-role-label,body.theme-light #empower.bridge-program-section .bridge-network-node.is-active .bridge-network-role-label{color:#6d4810!important;}\
      body.theme-light #empower.bridge-program-section .bridge-network-node:focus-visible{outline-color:#1e1a16!important;}\
      body.theme-light #empower.bridge-program-section .bridge-model-focus,body.theme-light #empower.bridge-program-section .bridge-model-guide{color:#5c4a31!important;text-shadow:none!important;}\
      body.theme-light #empower.bridge-program-section .bridge-model-expand{border-color:rgba(30,26,22,.42)!important;background:transparent!important;color:#1e1a16!important;}\
      body.theme-light #empower.bridge-program-section .bridge-model-expand svg{stroke:#8d601a!important;}\
    ';
    document.head.appendChild(style);
  }

  function installHeroServiceLinks() {
    var panel = document.querySelector('body.home-service-menu .hero-services-panel');
    if (!panel || panel.dataset.e4ServiceLinks === 'true') return;
    var destinations = {
      'Grant Writing': '/services/#grant-writing',
      'Grant Management': '/services/#grant-management',
      'Project Management': '/services/#project-management',
      'Readiness Assessments': '/services/#readiness-assessments',
      'Financial Management': '/services/#financial-management',
      'Speaking Engagements': '/services/#speaking-engagements',
      'IT Solutions': '/services/#it-solutions'
    };
    panel.querySelectorAll('.hero-services-item').forEach(function (item) {
      var label = item.textContent.trim();
      var destination = destinations[label];
      if (!destination || item.tagName === 'A') return;
      var link = document.createElement('a');
      link.className = 'hero-services-item';
      link.href = destination;
      link.textContent = label;
      link.setAttribute('aria-label', 'View ' + label + ' in E4 Power core services');
      item.replaceWith(link);
    });
    panel.dataset.e4ServiceLinks = 'true';
  }

  function installBridgeOfferingIntro() {
    var bridgeSection = document.getElementById('empower');
    if (!bridgeSection || document.getElementById('e4-bridge-offering-intro')) return;
    var library = bridgeSection.querySelector('.bridge-model-library');
    if (library) library.id = 'bridge-model-library';
    var intro = document.createElement('section');
    intro.id = 'e4-bridge-offering-intro';
    intro.className = 'e4-bridge-offering-intro';
    intro.setAttribute('aria-labelledby', 'e4-bridge-offering-heading');
    intro.innerHTML = '<div class="e4-bridge-offering-grid"><div class="e4-bridge-offering-copy"><h2 id="e4-bridge-offering-heading">The <span>B.R.I.D.G.E.</span> Delivery Model</h2><p class="e4-bridge-offering-lede">B.R.I.D.G.E. is E4 Power’s offering for connecting the right specialists to the work already in motion.</p><p>We bring strategy, coordination, technical insight, financial stewardship, and implementation support into one accountable team around your goals.</p></div><div class="e4-bridge-offering-photos" aria-label="E4 Power collaboration in action"><figure class="e4-bridge-offering-photo e4-bridge-offering-photo--writing"><img src="/manus-storage/bridge-writing_88d14ca9.jpg" alt="A professional documenting work with a pen" /></figure></div></div>';
    bridgeSection.parentNode.insertBefore(intro, bridgeSection);
  }

  function installScrollProgress() {
    if (document.getElementById('e4-scroll-rail')) return;
    var rail = document.createElement('div');
    rail.id = 'e4-scroll-rail';
    rail.className = 'e4-scroll-rail';
    rail.setAttribute('aria-hidden', 'true');
    rail.innerHTML = '<span class="e4-scroll-progress"></span>';
    document.body.appendChild(rail);
    var progress = rail.querySelector('.e4-scroll-progress');
    var update = function () {
      var root = document.documentElement;
      var total = Math.max(1, root.scrollHeight - window.innerHeight);
      var value = Math.max(0, Math.min(1, window.scrollY / total));
      progress.style.transform = 'scaleY(' + value + ')';
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  function enforceAnnotatedTeamActionContrast() {
    var useLightActions = document.body.classList.contains('theme-light');
    document.querySelectorAll('.team-members-div .team-member a.link-block').forEach(function (link) {
      if (useLightActions) {
        link.style.setProperty('color', '#1e1a16', 'important');
        link.querySelectorAll('*').forEach(function (child) {
          if (child.tagName === 'IMG') child.style.setProperty('filter', 'brightness(0) saturate(100%)', 'important');
          else child.style.setProperty('color', '#1e1a16', 'important');
        });
      } else {
        link.style.removeProperty('color');
        link.querySelectorAll('*').forEach(function (child) {
          child.style.removeProperty('color');
          child.style.removeProperty('filter');
        });
      }
    });
  }

  function enforceZeroKerning() {
    document.querySelectorAll('body,body *').forEach(function (element) {
      element.style.setProperty('letter-spacing', '0', 'important');
    });
  }

  function installNavigation() {
    installRequestedRefinementStyles();
    installBridgeLightModeSystem();
    normalizeClientSuccessHeader();
    var homeNav = document.querySelector('.reference-topbar-nav');
    var utilityNav = document.querySelector('.navbar-right-div');
    var clientNav = document.querySelector('.client-success-nav-links');
    var menu = document.querySelector('.nav-menu-wrapper');

    if (homeNav) {
      installDesktopNavigation(homeNav, 'e4-home-search');
      installHomepageMobileNavigation(homeNav);
    }
    if (utilityNav) installDesktopNavigation(utilityNav, 'e4-site-search', { mobileSearch: true });
    if (clientNav) installDesktopNavigation(clientNav, 'e4-client-success-search');
    installMobileNavigation(menu);
    installThemeDropdownGuard();
    applyHomepageDesignToInteriorHeaders();
    installQuickContact();
    removeSectionSeparators();
    removeGenericHeadingPretext();
    installAnnotatedHomepageRefinements();
    installHeroFourEsBanner();
    installHeroServiceLinks();
    installBridgeOfferingIntro();
    installScrollProgress();
    enforceAnnotatedTeamActionContrast();
    new MutationObserver(function () {
      enforceAnnotatedTeamActionContrast();
    }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
    enforceZeroKerning();

    document.addEventListener('click', function (event) {
      if (!event.target.closest('.e4-nav-group,.e4-mobile-nav-group')) closeDropdowns();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeDropdowns();
    });
  }

  function escapeHtml(value) {
    return value.replace(/[&<>'"]/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character];
    });
  }

  function renderResults() {
    var results = document.querySelector('[data-e4-search-results]');
    var input = document.querySelector('[data-e4-search-input]');
    if (!results || !input) return;
    var query = new URLSearchParams(window.location.search).get('q') || '';
    input.value = query;
    var terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      results.innerHTML = '<p class="e4-search-empty">Enter a keyword to search the E4 Power website.</p>';
      return;
    }
    var matches = pages.filter(function (page) {
      var haystack = (page.title + ' ' + page.keywords).toLowerCase();
      return terms.every(function (term) { return haystack.indexOf(term) !== -1; });
    });
    if (!matches.length) {
      results.innerHTML = '<p class="e4-search-empty">No results found for <strong>' + escapeHtml(query) + '</strong>. Try a broader keyword.</p>';
      return;
    }
    results.innerHTML = '<p class="e4-search-summary">' + matches.length + (matches.length === 1 ? ' result' : ' results') + ' for <strong>' + escapeHtml(query) + '</strong></p><ul class="e4-search-list">' + matches.map(function (page) {
      return '<li><a href="' + page.url + '">' + escapeHtml(page.title) + '<span>View page</span></a></li>';
    }).join('') + '</ul>';
  }

  addStyle();
  installNavigation();
  renderResults();
})();
