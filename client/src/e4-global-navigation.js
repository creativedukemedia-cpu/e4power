(function () {
  if (window.__e4GlobalNavigationLoaded) return;
  window.__e4GlobalNavigationLoaded = true;

  var pages = [
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
      .e4-nav-group:hover .e4-nav-menu,.e4-nav-group:focus-within .e4-nav-menu,.e4-nav-group.is-open .e4-nav-menu{opacity:1;pointer-events:auto;transform:translateY(0);}\
      .e4-nav-menu a{display:block;padding:.68rem .75rem;color:#fffaf2!important;font-family:Montserrat,Arial,sans-serif!important;font-size:.64rem!important;font-weight:800!important;letter-spacing:.07em!important;line-height:1.25!important;text-decoration:none!important;text-transform:uppercase;}\
      .e4-nav-menu a:hover,.e4-nav-menu a:focus-visible{background:rgba(237,190,89,.14);color:#edbe59!important;outline:0;}\
      body.theme-light .e4-nav-menu{border-color:rgba(30,26,22,.18);background:#fffaf2;box-shadow:0 1rem 2.4rem rgba(30,26,22,.15);}\
      body.theme-light .e4-nav-menu a{color:#1e1a16!important;}\
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
      .navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster{box-sizing:border-box!important;display:grid!important;grid-template-columns:3rem minmax(0,1fr) auto!important;align-items:center!important;column-gap:1.05rem!important;flex:0 0 clamp(22rem,29vw,23.2rem)!important;width:clamp(22rem,29vw,23.2rem)!important;min-height:5.625rem!important;padding:0 1.45rem!important;background:#e7ba56!important;}\
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
      @media screen and (max-width:991px){.navbar-logo-left.e4-home-origin-header,.navbar-logo-left.e4-home-origin-header .navbar-logo-left-container,.navbar-logo-left.e4-home-origin-header .navbar-container{height:auto!important;min-height:0!important;}.navbar-logo-left.e4-home-origin-header .navbar-wrapper{display:flex!important;flex-wrap:wrap;min-height:0!important;}.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster{display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:1.05rem!important;width:100%!important;min-height:4.5rem!important;padding:0 1.15rem!important;}.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster #theme-toggle-button{display:none!important;}.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster .w-nav-button,.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster .menu-button{position:static!important;display:flex!important;align-items:center!important;justify-content:center!important;order:5;flex:0 0 3rem!important;margin-left:auto!important;width:3rem!important;min-width:3rem!important;height:3rem!important;min-height:3rem!important;border:0!important;border-radius:.45rem!important;background:#171511!important;color:#f7f3ea!important;transform:none!important;}.navbar-logo-left.e4-home-origin-header .e4-site-brand-cluster .hamburger-icon{filter:brightness(0) invert(1)!important;}.navbar-logo-left.e4-home-origin-header .navbar-right-div{display:none!important;}.navbar-logo-left.e4-home-origin-header .socials-div{display:flex!important;}.navbar-logo-left.e4-home-origin-header .nav-menu-wrapper{top:4.5rem!important;}}\
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
    groups.forEach(function (group, index) {
      nav.appendChild(makeDropdown(group, false, index));
    });
    return nav;
  }

  function makeContactLink(mobile) {
    var contact = document.createElement(mobile ? 'li' : 'a');
    if (mobile) {
      var link = document.createElement('a');
      link.className = 'e4-mobile-contact';
      link.href = '/contact-us/';
      link.textContent = 'Contact';
      contact.appendChild(link);
      return contact;
    }
    contact.className = 'e4-nav-contact';
    contact.href = '/contact-us/';
    contact.textContent = 'Contact';
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
    groups.forEach(function (group, index) {
      list.appendChild(makeDropdown(group, true, index));
    });
    list.appendChild(makeContactLink(true));
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

  function enforceZeroKerning() {
    document.querySelectorAll('body,body *').forEach(function (element) {
      element.style.setProperty('letter-spacing', '0', 'important');
    });
  }

  function installNavigation() {
    var homeNav = document.querySelector('.reference-topbar-nav');
    var utilityNav = document.querySelector('.navbar-right-div');
    var clientNav = document.querySelector('.client-success-nav-links');
    var menu = document.querySelector('.nav-menu-wrapper');

    if (homeNav) installDesktopNavigation(homeNav, 'e4-home-search');
    if (utilityNav) installDesktopNavigation(utilityNav, 'e4-site-search', { mobileSearch: true });
    if (clientNav) installDesktopNavigation(clientNav, 'e4-client-success-search');
    installMobileNavigation(menu);
    applyHomepageDesignToInteriorHeaders();
    installQuickContact();
    removeSectionSeparators();
    removeGenericHeadingPretext();
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
