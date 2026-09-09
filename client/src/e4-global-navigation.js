(function () {
  if (window.__e4GlobalNavigationLoaded) return;
  window.__e4GlobalNavigationLoaded = true;

  var pages = [
    { title: 'About Us', url: '/about-us/', keywords: 'about e4 power consulting mission team partnership leadership engage' },
    { title: 'Our Services', url: '/services/', keywords: 'services consulting grant project management financial readiness technology workshops speaking' },
    { title: 'Client Success', url: '/client-success/', keywords: 'client success elevate partnership testimonials grant awards growth' },
    { title: 'The B.R.I.D.G.E. Model', url: '/#empower', keywords: 'bridge model project delivery financial subject matter expert reporting coordination compliance proposal writing' },
    { title: 'Our Team', url: '/team/', keywords: 'team experts leadership consultants e4 power' },
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
    { title: 'Workshops and Training', url: '/services/workshops-training/', keywords: 'workshops training professional development learning sessions' },
    { title: 'Speaking Engagements', url: '/services/speaking-engagements/', keywords: 'speaking engagements presentations keynote facilitation' },
    { title: 'Advisory Alignment', url: '/services/advisory-alignment/', keywords: 'advisory alignment strategy partnership consulting' },
    { title: 'Institutional Discovery', url: '/services/institutional-discovery/', keywords: 'institutional discovery goals priorities opportunities' },
    { title: 'Technology and AI Literacy', url: '/services/technology-ai-literacy/', keywords: 'technology ai literacy artificial intelligence digital skills' },
    { title: 'Garry Brown', url: '/team-members/garry-brown/', keywords: 'garry brown leadership team' },
    { title: 'Kandy Rose', url: '/team-members/kandy-rose/', keywords: 'kandy rose team' },
    { title: 'Larico J Treadwell', url: '/team-members/larico-j-treadwell/', keywords: 'larico treadwell team' }
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
      .e4-nav-search{display:inline-flex;align-items:center;gap:.45rem;min-width:8.75rem;max-width:10.75rem;height:2.25rem;padding:0 .72rem;border:1px solid rgba(237,190,89,.45);border-radius:999px;background:rgba(0,0,0,.24);color:#fffaf2;}\
      .e4-nav-search:focus-within{outline:2px solid #edbe59;outline-offset:2px;}\
      .e4-nav-search svg{width:.85rem;height:.85rem;flex:0 0 auto;fill:none;stroke:currentColor;stroke-width:2;}\
      .e4-nav-search input{width:100%;min-width:0;border:0!important;outline:0!important;background:transparent!important;color:inherit!important;font:inherit!important;font-size:.68rem!important;font-weight:700!important;letter-spacing:.08em!important;text-transform:uppercase;}\
      .e4-nav-search input::placeholder{color:currentColor;opacity:.72;}\
      body.theme-light .e4-nav-search{border-color:rgba(30,26,22,.32);background:rgba(255,255,255,.7);color:#1e1a16;}\
      .reference-topbar-nav .e4-nav-search{margin-right:.6rem;}\
      .navbar-right-div .e4-nav-search{margin-left:.3rem;}\
      .nav-menu-wrapper .e4-nav-search{display:none;width:100%;max-width:none;margin:0 0 1rem;color:#f4efe7;}\
      body.theme-light .nav-menu-wrapper .e4-nav-search{color:#1e1a16;}\
      .e4-search-link{color:inherit!important;font-size:.7rem!important;font-weight:800!important;letter-spacing:.12em!important;text-decoration:none!important;text-transform:uppercase;}\
      .e4-client-success-link{white-space:nowrap;}\
      .e4-about-us-link{white-space:nowrap;}\
      .e4-search-link:hover,.e4-search-link:focus-visible{color:#edbe59!important;}\
      .e4-mobile-search-link{display:none;color:inherit!important;font-size:.64rem!important;font-weight:800!important;letter-spacing:.11em!important;text-decoration:none!important;text-transform:uppercase;}\
      .e4-mobile-search-link:hover,.e4-mobile-search-link:focus-visible{color:#edbe59!important;}\
      .reference-topbar-nav{gap:clamp(.65rem,1.1vw,1.1rem)!important;flex-wrap:nowrap!important;}\
      @media screen and (min-width:992px) and (max-width:1320px){.reference-topbar-inner{grid-template-columns:minmax(22rem,29vw) 1fr!important;}.reference-topbar-brand{gap:1rem!important;padding:0 1.45rem!important;}.reference-socials{gap:.6rem!important;}.reference-socials a{width:2.3rem!important;height:2.3rem!important;}.reference-topbar-nav{gap:.75rem!important;padding:0 1rem!important;}.reference-topbar-nav a{font-size:.65rem!important;letter-spacing:.045em!important;}.reference-topbar-nav .e4-nav-search{min-width:7.1rem!important;max-width:8rem!important;}}\
      @media screen and (max-width:1180px){.navbar-right-div .e4-nav-search{min-width:7.25rem;max-width:8.5rem;}.reference-topbar-nav .e4-nav-search{min-width:7.25rem;max-width:8.5rem;}}\
      @media screen and (max-width:991px){.navbar-right-div>.e4-nav-search,.navbar-right-div>.e4-client-success-link{display:none!important;}.e4-mobile-search-link{display:inline-flex!important;align-items:center;}.nav-menu-wrapper .e4-nav-search{display:inline-flex!important;}.reference-topbar-inner{flex-wrap:wrap!important;}.reference-topbar-brand{width:100%!important;min-height:4.5rem;}.reference-topbar-nav{width:100%!important;min-height:3.75rem;justify-content:center;}.reference-topbar-nav .e4-nav-search{margin-right:.3rem;}}\
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

  function clientSuccessLink(className) {
    var link = document.createElement('a');
    link.className = className || '';
    link.href = '/client-success/';
    link.textContent = 'Client Success';
    link.setAttribute('data-e4-client-success-link', 'true');
    return link;
  }

  function aboutUsLink(className) {
    var link = document.createElement('a');
    link.className = className || '';
    link.href = '/about-us/';
    link.textContent = 'About Us';
    link.setAttribute('data-e4-about-us-link', 'true');
    return link;
  }

  function addAboutUsNavigation(homeNav, utilityNav, menu) {
    if (homeNav) {
      var legacyAbout = Array.prototype.find.call(homeNav.querySelectorAll('a'), function (link) {
        return /about\s*e4/i.test(link.textContent || '') || link.getAttribute('href') === '/#about';
      });
      if (legacyAbout) {
        legacyAbout.href = '/about-us/';
        legacyAbout.textContent = 'ABOUT US';
        legacyAbout.classList.add('e4-about-us-link');
        legacyAbout.setAttribute('data-e4-about-us-link', 'true');
      } else if (!homeNav.querySelector('[data-e4-about-us-link]')) {
        homeNav.insertBefore(aboutUsLink('e4-about-us-link'), homeNav.firstChild);
      }
    }

    if (utilityNav && !utilityNav.querySelector('[data-e4-about-us-link]')) {
      var utilityLink = aboutUsLink('text-link e4-about-us-link');
      var clientLink = utilityNav.querySelector('[data-e4-client-success-link]');
      utilityNav.insertBefore(utilityLink, clientLink || utilityNav.firstChild);
    }

    var menuList = menu && menu.querySelector('.nav-menu-two');
    if (menuList && !menuList.querySelector('[data-e4-about-us-link]')) {
      var item = document.createElement('li');
      item.className = 'e4-about-us-menu-item';
      item.appendChild(aboutUsLink('nav-link'));
      menuList.insertBefore(item, menuList.firstChild);
    }

    [homeNav, utilityNav, menu].filter(Boolean).forEach(function (container) {
      Array.prototype.forEach.call(container.querySelectorAll('a'), function (link) {
        if (/our\s+team/i.test(link.textContent || '') || link.getAttribute('href') === '#engage') {
          link.href = '/about-us/#engage';
        }
      });
    });
  }

  function addClientSuccessNavigation(homeNav, utilityNav, menu) {
    if (homeNav && !homeNav.querySelector('[data-e4-client-success-link]')) {
      var homeLink = clientSuccessLink('e4-client-success-link');
      var servicesLink = Array.prototype.find.call(homeNav.querySelectorAll('a'), function (link) {
        return link.getAttribute('href') === '/services/';
      });
      homeNav.insertBefore(homeLink, servicesLink ? servicesLink.nextSibling : null);
    }

    if (utilityNav && !utilityNav.querySelector('[data-e4-client-success-link]')) {
      var utilityLink = clientSuccessLink('text-link e4-client-success-link');
      var contactLink = Array.prototype.find.call(utilityNav.querySelectorAll('a'), function (link) {
        return /contact/i.test(link.textContent || '');
      });
      utilityNav.insertBefore(utilityLink, contactLink || null);
    }

    var menuList = menu && menu.querySelector('.nav-menu-two');
    if (menuList && !menuList.querySelector('[data-e4-client-success-link]')) {
      var item = document.createElement('li');
      item.className = 'e4-client-success-menu-item';
      item.appendChild(clientSuccessLink('nav-link'));
      var servicesMenuLink = Array.prototype.find.call(menuList.querySelectorAll('a'), function (link) {
        return link.getAttribute('href') === '/services/';
      });
      var servicesItem = servicesMenuLink && servicesMenuLink.closest('li');
      menuList.insertBefore(item, servicesItem ? servicesItem.nextSibling : menuList.firstChild);
    }
  }

  function installNavigation() {
    var homeNav = document.querySelector('.reference-topbar-nav');
    if (homeNav && !homeNav.querySelector('.e4-nav-search')) {
      var homeForm = searchForm('e4-home-search');
      var homeTheme = homeNav.querySelector('#theme-toggle-button');
      homeNav.insertBefore(homeForm, homeTheme || homeNav.firstChild);
    }

    var utilityNav = document.querySelector('.navbar-right-div');
    if (utilityNav && !utilityNav.querySelector('.e4-nav-search')) {
      var utilityForm = searchForm('e4-site-search');
      var utilityTheme = utilityNav.querySelector('#theme-toggle-button');
      utilityNav.insertBefore(utilityForm, utilityTheme || utilityNav.firstChild);
    }

    if (utilityNav && !utilityNav.querySelector('.e4-mobile-search-link')) {
      var mobileSearchLink = document.createElement('a');
      mobileSearchLink.className = 'e4-mobile-search-link';
      mobileSearchLink.href = '/search/';
      mobileSearchLink.textContent = 'Search';
      var menuButton = utilityNav.querySelector('.menu-button');
      utilityNav.insertBefore(mobileSearchLink, menuButton || null);
    }

    var menu = document.querySelector('.nav-menu-wrapper');
    if (menu && !menu.querySelector('.e4-nav-search')) {
      menu.insertBefore(searchForm('e4-mobile-search'), menu.firstChild);
    }

    addClientSuccessNavigation(homeNav, utilityNav, menu);
    addAboutUsNavigation(homeNav, utilityNav, menu);

    var clientNav = document.querySelector('.client-success-nav-links');
    if (clientNav && !clientNav.querySelector('.e4-search-link')) {
      var clientSearch = document.createElement('a');
      clientSearch.className = 'e4-search-link';
      clientSearch.href = '/search/';
      clientSearch.textContent = 'Search';
      clientNav.insertBefore(clientSearch, clientNav.firstChild);
    }
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
