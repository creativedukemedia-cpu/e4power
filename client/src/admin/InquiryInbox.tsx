import { useEffect, useMemo, useState } from 'react';

type Inquiry = {
  id: number;
  name: string;
  email: string;
  inquiryTopic: string;
  organizationType: string;
  message: string;
  routingLane: string;
  routingReason: string;
  status: 'new' | 'reviewed';
  createdAt: string;
};

export default function InquiryInbox() {
  const [items, setItems] = useState<Inquiry[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [filter, setFilter] = useState<'all' | 'new' | 'reviewed'>('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<number | null>(null);
  const [error, setError] = useState('');

  async function load(nextOffset = offset) {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/cms/inquiries?offset=${nextOffset}`, { credentials: 'include' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to load inquiries');
      setItems(data.items || []);
      setHasMore(Boolean(data.hasMore));
      setOffset(nextOffset);
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : 'Unable to load inquiries');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void load(0); }, []);

  const visible = useMemo(() => {
    const query = search.trim().toLowerCase();
    return items.filter((item) => (filter === 'all' || item.status === filter) && (!query || `${item.name} ${item.email} ${item.inquiryTopic} ${item.organizationType} ${item.routingLane} ${item.message}`.toLowerCase().includes(query)));
  }, [items, search, filter]);

  async function changeStatus(item: Inquiry) {
    setBusy(item.id);
    setError('');
    try {
      const response = await fetch(`/api/cms/inquiries/${item.id}`, {
        method: 'PATCH', credentials: 'include', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: item.status === 'new' ? 'reviewed' : 'new' }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to update inquiry');
      setItems((previous) => previous.map((entry) => entry.id === item.id ? data.item : entry));
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : 'Unable to update inquiry');
    } finally { setBusy(null); }
  }

  const field = 'min-h-11 w-full rounded-xl border border-white/15 bg-[#17120f] px-3 text-sm text-stone-100';
  return <section className="col-span-full mt-4" aria-labelledby="inquiry-inbox-title">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div><h2 id="inquiry-inbox-title" className="text-3xl font-bold text-stone-50">Website inquiries</h2><p className="mt-2 text-sm leading-6 text-stone-300">Review contact form submissions and their assigned routing lanes. Submissions remain saved in the inbox. Email notifications are not enabled.</p></div>
      <button type="button" onClick={() => void load()} disabled={loading} className="min-h-11 rounded-full bg-amber-400 px-5 text-sm font-bold text-stone-950 disabled:opacity-60">{loading ? 'Loading' : 'Refresh inquiries'}</button>
    </div>
    <div className="my-6 grid gap-4 md:grid-cols-[1fr_12rem]">
      <label className="grid gap-2 text-sm"><span>Search this page of inquiries</span><input className={field} value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Name, topic or routing lane" /></label>
      <label className="grid gap-2 text-sm"><span>Review status</span><select className={field} value={filter} onChange={(event) => setFilter(event.target.value as typeof filter)}><option value="all">All inquiries</option><option value="new">New</option><option value="reviewed">Reviewed</option></select></label>
    </div>
    {error && <p role="alert" className="mb-4 text-red-200">{error}</p>}
    {loading ? <p role="status" className="text-stone-300">Loading inquiries</p> : <div className="grid gap-7">
      {visible.length === 0 ? <p className="text-stone-300">No inquiries match this page and its filters.</p> : visible.map((item) => <article key={item.id} className="grid gap-5 py-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div className="min-w-0"><p className="text-sm font-bold uppercase text-amber-300">{item.routingLane}</p><h3 className="mt-2 text-xl font-bold">{item.name}</h3><a className="mt-2 block break-all text-amber-200 underline underline-offset-4" href={`mailto:${item.email}`}>{item.email}</a><p className="mt-3 text-sm text-stone-300">{item.organizationType}</p><p className="mt-2 text-sm text-stone-400">{new Date(item.createdAt).toLocaleString()}</p></div>
        <div className="min-w-0"><h4 className="font-semibold text-stone-50">{item.inquiryTopic}</h4><p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7 text-stone-200">{item.message}</p><div className="mt-4 flex flex-wrap items-center gap-4"><span className="text-sm font-semibold capitalize text-amber-200">{item.status}</span><button type="button" disabled={busy === item.id} onClick={() => void changeStatus(item)} className="min-h-11 rounded-full bg-amber-400 px-5 text-sm font-bold text-stone-950 disabled:opacity-60">{busy === item.id ? 'Saving' : item.status === 'new' ? 'Mark reviewed' : 'Reopen inquiry'}</button></div></div>
      </article>)}
    </div>}
    <div className="mt-6 flex flex-wrap items-center gap-4"><button type="button" className="min-h-11 px-3 text-amber-200 disabled:opacity-40" disabled={loading || offset === 0} onClick={() => void load(Math.max(0, offset - 50))}>Previous page</button><span className="text-sm text-stone-300">Page {Math.floor(offset / 50) + 1}</span><button type="button" className="min-h-11 px-3 text-amber-200 disabled:opacity-40" disabled={loading || !hasMore} onClick={() => void load(offset + 50)}>Next page</button></div>
  </section>;
}
