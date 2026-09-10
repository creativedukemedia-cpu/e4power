import '../index.css';
import './insights.css';
import { StrictMode, useEffect, useMemo, useState, type FormEvent } from 'react';
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
  ['Our Services', '/services/', [['The B.R.I.D.G.E. Model', '/#empower'], ['Workshops', '/services/workshops-training/']]],
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

function Header({ light, onTheme }: { light: boolean; onTheme: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState('');
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.assign(`/search/${search.trim() ? `?q=${encodeURIComponent(search.trim())}` : ''}`);
  };
  const navigation = (mobile = false) => (
    <div className={mobile ? 'e4-insights-mobile-list' : 'e4-insights-nav-list'}>
      {groups.map(([label, destination, links]) => (
        <details key={label}>
          <summary>{label}<Chevron /></summary>
          <div className="e4-insights-dropdown">
            {links.map(([name, url]) => <a key={name} href={url} onClick={() => mobile && setMobileOpen(false)}>{name}</a>)}
          </div>
        </details>
      ))}
      <a className="e4-insights-contact" href="/contact-us/" onClick={() => mobile && setMobileOpen(false)}>Contact</a>
    </div>
  );
  return <header className="e4-insights-header">
    <div className="e4-insights-brand-cluster">
      <a className="e4-insights-brand" href="/" aria-label="E4 Power home"><img alt="E4 Power" src="https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68bcc54da8714105bb252c7f_e4_logo_white.svg" /></a>
      <div className="e4-insights-socials" aria-label="E4 Power social channels">
        {socials.map(([name, url, icon]) => <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}><img alt="" src={icon} /></a>)}
      </div>
      <button className="e4-insights-theme" type="button" onClick={onTheme} aria-label="Toggle light and dark mode" aria-pressed={light}><span>Theme</span><span className="e4-insights-theme-track"><span /></span></button>
      <button className="e4-insights-menu" type="button" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg></button>
    </div>
    <div className="e4-insights-desktop-nav">
      <form className="e4-insights-nav-search" role="search" onSubmit={submit}><label className="e4-insights-sr" htmlFor="e4-insights-search">Search E4 Power</label><SearchIcon /><input id="e4-insights-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" /></form>
      <nav aria-label="Primary navigation">{navigation()}</nav>
    </div>
    <nav className={`e4-insights-mobile-nav ${mobileOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
      <form className="e4-insights-nav-search" role="search" onSubmit={submit}><label className="e4-insights-sr" htmlFor="e4-insights-mobile-search">Search E4 Power</label><SearchIcon /><input id="e4-insights-mobile-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" /></form>
      {navigation(true)}
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
  const [light, setLight] = useState(() => localStorage.getItem('e4-theme') === 'light');

  useEffect(() => {
    document.body.classList.toggle('theme-light', light);
    document.body.classList.toggle('theme-dark', !light);
    localStorage.setItem('e4-theme', light ? 'light' : 'dark');
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
    <footer className="e4-insights-footer"><img alt="E4 Power" src="https://cdn.prod.website-files.com/68ba0532388ab756f96c84d5/68bcc54da8714105bb252c7f_e4_logo_white.svg" /><p>© 2025 E4 Power</p><a href="/contact-us/">Contact E4</a></footer>
    <a className="e4-insights-quick" href="/contact-us/" aria-label="Start an inquiry with E4 Power">⌕ Contact E4</a>
  </div>;
}

createRoot(document.getElementById('root')!).render(<StrictMode><ContentHubApp /></StrictMode>);
