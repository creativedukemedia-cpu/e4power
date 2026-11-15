import '../index.css';
import './insights.css';
import '../e4-menu-layout.css';
import { mountLoaderVisual } from '../e4-loader-visual.js';
import { StrictMode, useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { createRoot } from 'react-dom/client';

type CmsItem = {
  id: number;
  title: string;
  slug: string;
  contentType: 'white-paper' | 'newsletter' | 'funding-opportunity' | 'thought-leadership';
  excerpt?: string | null;
  body?: string | null;
  coverImageUrl?: string | null;
  publishedAt?: string | null;
};

const groups = [
  ['About Us', '/about-us/', [['Our Team', '/about-us/#engage'], ['In the News', '/about-us/#linkedin-feed']]],
  ['Our Services', '/services/', [['Core Services', '/services/#core-services'], ['The B.R.I.D.G.E. Model', '/#empower'], ['Workshops', '/services/workshops-training/']]],
  ['Resources', '/client-success/', [['Client Success', '/client-success/'], ['Insights', '/content/']]],
] as const;

const socials = [
  ['Instagram', 'https://www.instagram.com/e4power_?igsh=bXR4bThxMHh2dHNy&utm_source=qr', 'https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68d9d0c4ee8e329fe01d525b_instagram.svg'],
  ['LinkedIn', 'https://www.linkedin.com/company/e4-power-consulting/', 'https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68d9d0c46c9537fa67bb89bd_linkedin.svg'],
  ['TikTok', 'https://www.tiktok.com/@e4powerconsulting?_t=ZT-90YVLBMkwaT&_r=1', 'https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68f66f4d7a2ffc0d86a72550_tiktok.svg'],
  ['Facebook', 'https://www.facebook.com/profile.php?id=61573544665670', 'https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68d9d0c48dbb4dd69e849624_facebook.svg'],
] as const;

const types = [
  ['all', 'All published content'],
  ['white-paper', 'White papers'],
  ['newsletter', 'Newsletters'],
  ['funding-opportunity', 'Funding opportunities'],
  ['thought-leadership', 'Thought leadership'],
] as const;

function formatType(type: CmsItem['contentType']) {
  return type.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

function formatDate(value?: string | null) {
  if (!value || Number.isNaN(new Date(value).getTime())) return 'Recently updated';
  return new Date(value).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

function href(params: Record<string, string | undefined>) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => value && search.set(key, value));
  return `/content/${search.size ? `?${search}` : ''}`;
}

function SearchIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>;
}

function Chevron() {
  return <svg aria-hidden="true" viewBox="0 0 12 12"><path d="m2 4 4 4 4-4" /></svg>;
}

function PageLoader() {
  const [active, setActive] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loaderRef.current) mountLoaderVisual(loaderRef.current);
    let navigationTimer: number | undefined;
    const settle = () => {
      setActive(false);
      loaderRef.current?.classList.remove('is-active');
      loaderRef.current?.setAttribute('aria-hidden', 'true');
    };
    const dismiss = window.setTimeout(settle, 220);
    const showForNavigation = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
      const link = event.target.closest('a[href]') as HTMLAnchorElement | null;
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || (destination.pathname === window.location.pathname && destination.search === window.location.search)) return;
      loaderRef.current?.classList.add('is-active');
      loaderRef.current?.setAttribute('aria-hidden', 'false');
      setActive(true);
      window.clearTimeout(dismiss);
      window.clearTimeout(navigationTimer);
      navigationTimer = window.setTimeout(settle, 1800);
    };
    document.addEventListener('click', showForNavigation, true);
    window.addEventListener('pageshow', settle);
    return () => {
      window.clearTimeout(dismiss);
      window.clearTimeout(navigationTimer);
      document.removeEventListener('click', showForNavigation, true);
      window.removeEventListener('pageshow', settle);
    };
  }, []);

  return <div ref={loaderRef} className={`e4-insights-loader ${active ? 'is-active' : ''}`} role="status" aria-live="polite" aria-label="Loading E4 Power" aria-hidden={!active} />;
}

function Header({ light, onTheme }: { light: boolean; onTheme: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const headerRef = useRef<HTMLElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (openMenu) {
        event.preventDefault();
        headerRef.current?.querySelector<HTMLButtonElement>(`button[aria-controls="${openMenu}"]`)?.focus();
        setOpenMenu(null);
      } else if (mobileOpen) {
        event.preventDefault();
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileOpen, openMenu]);

  useEffect(() => { setOpenMenu(null); }, [light]);
  useEffect(() => { if (!mobileOpen) setOpenMenu(null); }, [mobileOpen]);
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 992px)');
    const resetMenus = () => {
      setMobileOpen(false);
      setOpenMenu(null);
    };
    desktop.addEventListener('change', resetMenus);
    return () => desktop.removeEventListener('change', resetMenus);
  }, []);

  const closeNavigation = (mobile: boolean) => {
    setOpenMenu(null);
    if (mobile) setMobileOpen(false);
  };
  const changeTheme = () => {
    setOpenMenu(null);
    onTheme();
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.assign(`/search/${search.trim() ? `?q=${encodeURIComponent(search.trim())}` : ''}`);
  };
  const navigation = (mobile = false) => (
    <div className={mobile ? 'e4-insights-mobile-list' : 'e4-insights-nav-list'}>
      <a className="e4-insights-home" href="/" onClick={() => closeNavigation(mobile)}>Home</a>
      {groups.map(([label, destination, links]) => {
        const menuId = `e4-insights-${mobile ? 'mobile' : 'desktop'}-${label.toLowerCase().replace(/\s+/g, '-')}-dropdown`;
        const isOpen = openMenu === menuId;
        return <div className={`e4-insights-nav-group ${isOpen ? 'is-open' : ''}`} key={label}>
          <a className="e4-insights-nav-primary" href={destination} onClick={() => closeNavigation(mobile)}>{label}</a>
          <button className="e4-insights-nav-toggle" type="button" aria-label={`${isOpen ? 'Close' : 'Open'} ${label} menu`} aria-expanded={isOpen} aria-controls={menuId} onClick={() => setOpenMenu((current) => current === menuId ? null : menuId)}><Chevron /></button>
          <div className="e4-insights-dropdown" id={menuId} hidden={!isOpen} inert={!isOpen}>
            {links.map(([name, url]) => <a key={name} href={url} onClick={() => closeNavigation(mobile)}>{name}</a>)}
          </div>
        </div>;
      })}
      <a className="e4-insights-contact" href="/contact-us/" onClick={() => closeNavigation(mobile)}>Contact Us</a>
    </div>
  );
  return <header className="e4-insights-header e4-menu-standard" ref={headerRef}>
    <div className="e4-insights-brand-cluster">
      <a className="e4-insights-brand" href="/" aria-label="E4 Power home"><img alt="E4 Power" src="https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68bcc54da8714105bb252c7f_e4_logo_white.svg" /></a>
      <div className="e4-insights-socials" aria-label="E4 Power social channels">
        {socials.map(([name, url, icon]) => <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}><img alt="" src={icon} /></a>)}
      </div>
      <button className="e4-insights-theme" type="button" onClick={changeTheme} aria-label="Toggle light and dark mode" aria-pressed={light}><span>Theme</span><span className="e4-insights-theme-track"><span /></span></button>
      <button className="e4-insights-menu" type="button" ref={mobileToggleRef} aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} aria-controls="e4-insights-mobile-drawer" onClick={() => { setOpenMenu(null); setMobileOpen((open) => !open); }}><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg></button>
    </div>
    <div className="e4-insights-desktop-nav">
      <form className="e4-insights-nav-search" role="search" onSubmit={submit}><label className="e4-insights-sr" htmlFor="e4-insights-search">Search E4 Power</label><SearchIcon /><input id="e4-insights-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" /></form>
      <nav aria-label="Primary navigation">{navigation()}</nav>
    </div>
    <nav className={`e4-insights-mobile-nav ${mobileOpen ? 'is-open' : ''}`} id="e4-insights-mobile-drawer" aria-label="Mobile navigation" hidden={!mobileOpen} inert={!mobileOpen}>
      <form className="e4-insights-nav-search" role="search" onSubmit={submit}><label className="e4-insights-sr" htmlFor="e4-insights-mobile-search">Search E4 Power</label><SearchIcon /><input id="e4-insights-mobile-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" /></form>
      {navigation(true)}
      <button className="e4-insights-theme e4-mobile-theme-control" type="button" onClick={changeTheme} aria-label="Toggle light and dark mode" aria-pressed={light}><span>Theme</span><span className="e4-insights-theme-track"><span /></span></button>
    </nav>
  </header>;
}

function ContentHubApp() {
  const query = useMemo(() => new URLSearchParams(window.location.search), []);
  const slug = query.get('slug')?.trim() || '';
  const filter = query.get('type')?.trim() || 'all';
  const search = query.get('q')?.trim().toLowerCase() || '';
  const [items, setItems] = useState<CmsItem[]>([]);
  const [item, setItem] = useState<CmsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [light, setLight] = useState(() => {
    try { return localStorage.getItem('e4-theme') === 'light'; }
    catch { return false; }
  });

  useEffect(() => {
    document.body.classList.toggle('theme-light', light);
    document.body.classList.toggle('theme-dark', !light);
    try { localStorage.setItem('e4-theme', light ? 'light' : 'dark'); }
    catch { /* Theme still works when storage is unavailable. */ }
  }, [light]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    const endpoint = slug ? `/api/cms/public/content/${encodeURIComponent(slug)}` : `/api/cms/public/content${filter === 'all' ? '' : `?contentType=${encodeURIComponent(filter)}`}`;
    fetch(endpoint).then(async (response) => {
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to load published content');
      if (!active) return;
      setItem(slug ? data.item || null : null);
      setItems(slug ? [] : data.items || []);
    }).catch((requestError) => {
      if (!active) return;
      setError(requestError instanceof Error ? requestError.message : 'Unable to load published content');
      setItem(null);
      setItems([]);
    }).finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [filter, slug]);

  useEffect(() => { document.title = item && slug ? `${item.title} | E4 Power Insights` : 'E4 Power Insights'; }, [item, slug]);

  const visible = useMemo(() => !search ? items : items.filter((entry) => `${entry.title} ${entry.slug} ${entry.excerpt || ''}`.toLowerCase().includes(search)), [items, search]);
  const sendFilter = (next: string) => window.location.assign(href({ type: next === 'all' ? undefined : next, q: query.get('q') || undefined }));
  const submitFilter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const term = new FormData(event.currentTarget).get('q')?.toString().trim() || '';
    window.location.assign(href({ type: filter === 'all' ? undefined : filter, q: term || undefined }));
  };
  const status = (message: string, problem = false) => <p className={`e4-insights-status ${problem ? 'is-error' : ''}`}>{message}</p>;

  return <div className={`e4-insights ${light ? 'is-light' : ''}`}>
    <PageLoader />
    <Header light={light} onTheme={() => setLight((value) => !value)} />
    <main>
      <section className="e4-insights-hero"><div className="e4-insights-width"><p className="e4-insights-hero-label">E4 Power</p><h1>Insights</h1><p>Published knowledge, opportunities, and perspective from E4 Power.</p></div></section>
      {slug ? <article className="e4-insights-article e4-insights-width">
        <a className="e4-insights-back" href={href({ type: filter === 'all' ? undefined : filter })}>All insights</a>
        {loading ? status('Loading published content') : error ? status(error, true) : item ? <>
          <p className="e4-insights-type">{formatType(item.contentType)}</p><h2>{item.title}</h2><p className="e4-insights-date">Published {formatDate(item.publishedAt)}</p>
          {item.coverImageUrl && <img className="e4-insights-article-image" src={item.coverImageUrl} alt={item.title} />}
          {item.excerpt && <p className="e4-insights-article-excerpt">{item.excerpt}</p>}
          {item.body && <div className="e4-insights-article-body">{item.body}</div>}
        </> : status('This published item could not be found.')}
      </article> : <section className="e4-insights-library e4-insights-width" aria-label="Published E4 Power content">
        <div className="e4-insights-library-intro"><div><p className="e4-insights-type">Published content</p><h2>White papers, newsletters, opportunities, and thought leadership</h2><p className="e4-insights-library-copy">Browse published white papers, newsletters, funding opportunities, and thought leadership from E4 Power.</p></div>
          <div className="e4-insights-controls"><form onSubmit={submitFilter}><label htmlFor="e4-content-search">Search insights</label><div className="e4-insights-input-wrap"><SearchIcon /><input id="e4-content-search" name="q" defaultValue={query.get('q') || ''} placeholder="Search by title or topic" /></div></form><label><span>Filter by content type</span><select value={filter} onChange={(event) => sendFilter(event.target.value)}>{types.map(([value, name]) => <option key={value} value={value}>{name}</option>)}</select></label></div>
        </div>
        <div className="e4-insights-result-row"><p>{visible.length} result{visible.length === 1 ? '' : 's'} shown</p>{search && <a href={href({ type: filter === 'all' ? undefined : filter })}>Clear search</a>}</div>
        <div className="e4-insights-grid">{loading ? status('Loading published content') : error ? status(error, true) : visible.length === 0 ? <div className="e4-insights-empty"><p>No published entries match the current search and filter settings yet.</p></div> : visible.map((entry, index) => <a className={`e4-insights-card ${index % 2 ? 'is-brown' : ''}`} href={href({ slug: entry.slug })} key={entry.id}>{entry.coverImageUrl ? <img src={entry.coverImageUrl} alt={entry.title} /> : <div className="e4-insights-card-mark" aria-hidden="true">E4</div>}<div><p className="e4-insights-type">{formatType(entry.contentType)}</p><h3>{entry.title}</h3><p className="e4-insights-date">Published {formatDate(entry.publishedAt)}</p>{entry.excerpt && <p className="e4-insights-card-excerpt">{entry.excerpt}</p>}<span className="e4-insights-read">Read insight ↗</span></div></a>)}</div>
      </section>}
    </main>
    <footer className="e4-insights-footer"><img alt="E4 Power" src="https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68bcc54da8714105bb252c7f_e4_logo_white.svg" /><p>© {new Date().getFullYear()} E4 Power</p><a href="/contact-us/">Contact E4</a></footer>
    <a className="e4-insights-quick" href="/contact-us/" aria-label="Start an inquiry with E4 Power">⌕ Contact E4</a>
  </div>;
}

createRoot(document.getElementById('root')!).render(<StrictMode><ContentHubApp /></StrictMode>);
