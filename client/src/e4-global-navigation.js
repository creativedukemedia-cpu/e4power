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
      .e4-nav-primary:hover,.e4-nav-primary:focus-visible,.e4-nav-contact:hover,.e4-nav-contact:focus-visible{color:#edbe59!important;}\
      .e4-nav-toggle{display:grid;place-items:center;width:1.35rem;height:2.25rem;margin:0 0 0 .06rem;padding:0;border:0;background:transparent;color:inherit;cursor:pointer;}\
      .e4-nav-toggle svg{width:.74rem;height:.74rem;fill:none;stroke:currentColor;stroke-width:2.25;transition:transform .18s cubic-bezier(.23,1,.32,1);}\
      .e4-nav-group.is-open .e4-nav-toggle svg{transform:rotate(180deg);}\
      .e4-nav-toggle:focus-visible,.e4-nav-primary:focus-visible,.e4-nav-contact:focus-visible{outline:2px solid #edbe59;outline-offset:3px;}\
      .e4-nav-menu{position:absolute;top:calc(100% + .45rem);left:-.85rem;z-index:10010;display:grid;gap:.14rem;min-width:12.5rem;padding:.55rem;border:1px solid rgba(237,190,89,.34);background:rgba(15,14,12,.98);box-shadow:0 1rem 2.4rem rgba(0,0,0,.28);opacity:0;pointer-events:none;transform:translateY(-.35rem);transition:opacity .16s ease,transform .16s cubic-bezier(.23,1,.32,1);}\
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

  function installNavigation() {
    var homeNav = document.querySelector('.reference-topbar-nav');
    var utilityNav = document.querySelector('.navbar-right-div');
    var clientNav = document.querySelector('.client-success-nav-links');
    var menu = document.querySelector('.nav-menu-wrapper');

    if (homeNav) installDesktopNavigation(homeNav, 'e4-home-search');
    if (utilityNav) installDesktopNavigation(utilityNav, 'e4-site-search', { mobileSearch: true });
    if (clientNav) installDesktopNavigation(clientNav, 'e4-client-success-search');
    installMobileNavigation(menu);

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
