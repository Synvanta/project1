import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./admin-dashboard.css";

const systems = [
  ["Inventory", "📦"],
  ["HR", "👥"],
  ["Delivery", "🚚"],
  ["E-Commerce", "🛒"],
  ["Assistant", "🤖"],
  ["PMS", "🏢"],
  ["Garbage", "🚛"],
  ["Finance", "💰"],
];

function BrandIcon() {
  return <img src="/admin-assets/brand/brand-mark.png" alt="" />;
}

function Icon({ name }) {
  const paths = {
    grid: <><rect x="3" y="3" width="5" height="5" rx="1" /><rect x="12" y="3" width="5" height="5" rx="1" /><rect x="3" y="12" width="5" height="5" rx="1" /><rect x="12" y="12" width="5" height="5" rx="1" /></>,
    inbox: <><rect x="2.5" y="3.5" width="15" height="13" rx="2" /><path d="M3 11.5h4l1.5 2h2.8l1.5-2h3.2" /></>,
    box: <><path d="m10 2.5 7 3.8v7.4l-7 3.8-7-3.8V6.3l7-3.8Z" /><path d="m3.3 6.5 6.7 3.7 6.7-3.7M10 10.2v7" /></>,
    users: <><path d="M13.5 17v-1.5a3 3 0 0 0-3-3h-5a3 3 0 0 0-3 3V17" /><circle cx="8" cy="6.5" r="3" /><path d="M14 3.7a3 3 0 0 1 0 5.7M15.5 12.5a3 3 0 0 1 2 2.8V17" /></>,
    settings: <><circle cx="10" cy="10" r="3" /><path d="m8.3 2.8.4-1h2.6l.4 1 1.2.7 1-.3 1.3 2.3-.7.8v1.4l.7.8-1.3 2.3-1-.3-1.2.7-.4 1H8.7l-.4-1-1.2-.7-1 .3-1.3-2.3.7-.8V6.3l-.7-.8 1.3-2.3 1 .3 1.2-.7Z" /></>,
    search: <><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 4 4" /></>,
    bell: <><path d="M15 7a5 5 0 0 0-10 0c0 6-2 6-2 8h14c0-2-2-2-2-8ZM8 18h4" /></>,
    arrow: <><path d="M4 10h12M11 5l5 5-5 5" /></>,
    close: <><path d="m5 5 10 10M15 5 5 15" /></>,
    pin: <><path d="M16 8c0 5-6 10-6 10S4 13 4 8a6 6 0 1 1 12 0Z" /><circle cx="10" cy="8" r="2" /></>,
    calendar: <><rect x="3" y="4" width="14" height="13" rx="2" /><path d="M6 2v4M14 2v4M3 8h14" /></>,
    check: <><path d="m5 10.5 3.2 3.2L15 6.5" /></>,
  };

  return <svg className="admin-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.grid}</svg>;
}

function formatDate(value) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function AdminDashboard({ name, total, dataUrl, contactUrl, logoutUrl, csrfToken, canManageAdmins, homeUrl }) {
  const [requests, setRequests] = useState([]);
  const [meta, setMeta] = useState({ current_page: 1, last_page: 1, total: Number(total) });
  const [searchInput, setSearchInput] = useState("");
  const [filters, setFilters] = useState({ search: "", system: "" });
  const [page, setPage] = useState(1);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [composing, setComposing] = useState(false);
  const [composeSubject, setComposeSubject] = useState("");
  const [composeBody, setComposeBody] = useState("");
  const [sending, setSending] = useState(false);
  const [composeError, setComposeError] = useState("");
  const [composeSuccess, setComposeSuccess] = useState("");
  const [copied, setCopied] = useState(false);

  const loadRequests = useCallback(async (signal) => {
    setLoading(true);
    setError("");

    const url = new URL(dataUrl, window.location.origin);
    url.searchParams.set("page", String(page));
    if (filters.search) url.searchParams.set("search", filters.search);
    if (filters.system) url.searchParams.set("system", filters.system);

    try {
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
        credentials: "same-origin",
        signal,
      });
      if (response.status === 401) {
        window.location.assign("/admin/login");
        return;
      }
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "We couldn't load demo requests.");
      }

      setRequests(result.data);
      setMeta(result.meta);
    } catch (loadError) {
      if (loadError instanceof Error && loadError.name === "AbortError") return;
      setError(loadError instanceof Error ? loadError.message : "We couldn't load demo requests.");
    } finally {
      if (!signal.aborted) setLoading(false);
    }
  }, [dataUrl, filters, page]);

  useEffect(() => {
    const abortController = new AbortController();
    loadRequests(abortController.signal);
    return () => abortController.abort();
  }, [loadRequests]);

  const systemCounts = useMemo(() => {
    const counts = new Map(systems.map(([system]) => [system, 0]));
    requests.forEach((request) => request.systems.forEach((system) => {
      counts.set(system, (counts.get(system) ?? 0) + 1);
    }));
    return counts;
  }, [requests]);

  function submitSearch(event) {
    event.preventDefault();
    setPage(1);
    setFilters((current) => ({ ...current, search: searchInput.trim() }));
  }

  function openCompose(request) {
    setComposeError("");
    setComposeSuccess("");
    setComposeSubject("Your Synvanta demo request");
    setComposeBody(
      `Hi ${request.name.split(/\s+/)[0]},\n\n`
      + `Thanks for your interest in Synvanta Systems. I'd love to walk you through ${request.systems.join(", ")} and show how it fits your team.\n\n`
      + "Could you share a time that works for a short call this week?\n\n"
      + `Warm regards,\n${name}\nSynvanta Systems`,
    );
    setComposing(true);
  }

  async function sendReply(event) {
    event.preventDefault();
    if (!selectedRequest) return;

    setSending(true);
    setComposeError("");

    try {
      const response = await fetch(contactUrl.replace("__REQUEST_ID__", String(selectedRequest.id)), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken,
        },
        credentials: "same-origin",
        body: JSON.stringify({ subject: composeSubject, body: composeBody }),
      });
      const result = await response.json();

      if (!response.ok) {
        const validationErrors = result.errors ? Object.values(result.errors).flat().join(" ") : "";
        throw new Error(validationErrors || result.message || "We couldn't send this email.");
      }

      setRequests((current) => current.map((item) => item.id === result.data.id ? result.data : item));
      setSelectedRequest(result.data);
      setComposeSuccess(`Email sent to ${result.data.email}.`);
      window.setTimeout(() => setComposing(false), 900);
    } catch (sendError) {
      setComposeError(sendError instanceof Error ? sendError.message : "We couldn't send this email.");
    } finally {
      setSending(false);
    }
  }

  async function copyEmail() {
    if (!selectedRequest) return;

    try {
      await navigator.clipboard.writeText(selectedRequest.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <a className="admin-sidebar__brand" href={homeUrl} aria-label="Synvanta Systems website">
          <span className="admin-sidebar__brand-icon"><BrandIcon /></span>
          <span>synvanta<span className="admin-sidebar__brand-dot">.</span><small>ADMIN CONSOLE</small></span>
        </a>

        <p className="admin-sidebar__label">WORKSPACE</p>
        <nav className="admin-sidebar__nav" aria-label="Admin navigation">
          <a href="/admin" className="admin-nav-link"><Icon name="grid" />Overview</a>
          <a href="/admin/demo-requests" className="admin-nav-link admin-nav-link--active" aria-current="page"><Icon name="inbox" />Demo requests<span className="admin-nav-link__count">{total}</span></a>
          {canManageAdmins && <a href="/admin/admins" className="admin-nav-link"><Icon name="users" />Admins</a>}
          <span className="admin-nav-link admin-nav-link--muted" aria-disabled="true"><Icon name="box" />Demo systems<span className="admin-nav-link__soon">SOON</span></span>
        </nav>

        <div className="admin-sidebar__bottom">
          <div className="admin-sidebar__help">
            <span className="admin-sidebar__help-icon">✳</span>
            <strong>Need a hand?</strong>
            <p>Get help with your admin workspace.</p>
            <a href="mailto:support@synvata.com">Contact support <Icon name="arrow" /></a>
          </div>
          <div className="admin-sidebar__profile">
            <span className="admin-avatar admin-avatar--profile">{initials(name)}</span>
            <span className="admin-sidebar__profile-copy"><strong>{name}</strong><small>Administrator</small></span>
            <Icon name="settings" />
          </div>
        </div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <div className="admin-breadcrumb"><span>Workspace</span><b>/</b><strong>Demo requests</strong></div>
          <div className="admin-topbar__actions">
            <span className="admin-topbar__secure"><i /> Secure workspace</span>
            <button className="admin-notifications" type="button" aria-label="Notifications"><Icon name="bell" /></button>
            <span className="admin-avatar">{initials(name)}</span>
            <form method="post" action={logoutUrl}>
              <input type="hidden" name="_token" value={csrfToken} />
              <button className="admin-signout" type="submit">Sign out</button>
            </form>
          </div>
        </header>

        <div className="admin-content">
          <section className="admin-page-heading">
            <div>
              <p className="admin-eyebrow">YOUR BUSINESS, IN MOTION</p>
              <h1>Demo requests<span>.</span></h1>
              <p>Review people interested in seeing what Synvanta can do for them.</p>
            </div>
            <div className="admin-heading-meta"><i /> ALL SYSTEMS OPERATIONAL</div>
          </section>

          <section className="admin-metrics" aria-label="Request overview">
            <article className="admin-metric admin-metric--featured">
              <span className="admin-metric__icon"><Icon name="inbox" /></span>
              <span className="admin-metric__label">TOTAL REQUESTS</span>
              <strong>{Number(total).toLocaleString()}</strong>
              <span className="admin-metric__note">All demo inquiries received</span>
              <span className="admin-metric__spark" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>
            </article>
            <article className="admin-metric">
              <span className="admin-metric__icon admin-metric__icon--violet"><Icon name="grid" /></span>
              <span className="admin-metric__label">SYSTEMS REQUESTED</span>
              <strong>{requests.reduce((count, request) => count + request.systems.length, 0)}</strong>
              <span className="admin-metric__note">Across the current page</span>
            </article>
            <article className="admin-metric">
              <span className="admin-metric__icon admin-metric__icon--green"><i /></span>
              <span className="admin-metric__label">AVAILABLE SYSTEMS</span>
              <strong>08</strong>
              <span className="admin-metric__note">Ready for a guided demo</span>
            </article>
          </section>

          <section className="admin-systems-strip" aria-label="Demo systems">
            <div className="admin-systems-strip__heading"><span>DEMO SYSTEMS</span><small>Requests shown below</small></div>
            <div className="admin-systems-strip__list">
              {systems.map(([system, icon]) => (
                <button className={`admin-system-chip${filters.system === system ? " admin-system-chip--active" : ""}`} key={system} type="button" onClick={() => {
                  setFilters((current) => ({ ...current, system: current.system === system ? "" : system }));
                  setPage(1);
                }}>
                  <span>{icon}</span>{system}<b>{systemCounts.get(system) ?? 0}</b>
                </button>
              ))}
            </div>
          </section>

          <section className="admin-requests-card">
            <div className="admin-requests-card__header">
              <div>
                <h2>Incoming requests <span>{meta.total ?? 0}</span></h2>
                <p>Keep track of the teams looking to meet with us.</p>
              </div>
              <div className="admin-request-actions">
                <form className="admin-search" role="search" onSubmit={submitSearch}>
                  <Icon name="search" />
                  <input aria-label="Search requests" placeholder="Search requests..." value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
                  {searchInput && <button type="button" aria-label="Clear search" onClick={() => {
                    setSearchInput("");
                    setFilters((current) => ({ ...current, search: "" }));
                    setPage(1);
                  }}><Icon name="close" /></button>}
                </form>
                {(filters.search || filters.system) && <button className="admin-clear-filters" type="button" onClick={() => {
                  setSearchInput("");
                  setFilters({ search: "", system: "" });
                  setPage(1);
                }}>Clear filters</button>}
              </div>
            </div>

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th scope="col">CONTACT</th>
                    <th scope="col">SYSTEMS OF INTEREST</th>
                    <th scope="col">LOCATION</th>
                    <th scope="col">DATE RECEIVED</th>
                    <th scope="col"><span className="admin-sr-only">Details</span></th>
                  </tr>
                </thead>
                <tbody>
                  {!loading && !error && requests.map((request) => (
                    <tr key={request.id}>
                      <td>
                        <div className="admin-contact">
                          <span className={`admin-avatar admin-avatar--${request.id % 5}`}>{initials(request.name)}</span>
                          <span>
                            <strong>{request.name}</strong>
                            <a href={`mailto:${request.email}`}>{request.email}</a>
                            {request.contacted_at && <em className="admin-row-contacted"><Icon name="check" />Contacted</em>}
                          </span>
                        </div>
                      </td>
                      <td><div className="admin-row-systems">{request.systems.map((system) => <span className="admin-row-system" key={system}>{systems.find(([item]) => item === system)?.[1]} {system}</span>)}</div></td>
                      <td><span className="admin-location"><Icon name="pin" />{request.location}</span></td>
                      <td><span className="admin-date"><Icon name="calendar" />{formatDate(request.created_at)}</span></td>
                      <td><button className="admin-row-open" type="button" aria-label={`View ${request.name}'s request`} onClick={() => setSelectedRequest(request)}><Icon name="arrow" /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {loading && <div className="admin-state"><span className="admin-spinner" />Loading demo requests…</div>}
              {!loading && error && <div className="admin-state admin-state--error"><strong>Couldn't load demo requests.</strong><span>{error}</span><button type="button" onClick={() => loadRequests(new AbortController().signal)}>Try again</button></div>}
              {!loading && !error && requests.length === 0 && <div className="admin-state"><span className="admin-state__icon">⌕</span><strong>{filters.search || filters.system ? "No requests match those filters." : "No demo requests yet."}</strong><span>New requests will appear here.</span></div>}
            </div>

            <footer className="admin-table-footer">
              <span>Showing <strong>{requests.length ? (meta.current_page - 1) * meta.per_page + 1 : 0}–{(meta.current_page - 1) * meta.per_page + requests.length}</strong> of <strong>{meta.total ?? 0}</strong> requests</span>
              <div className="admin-pagination">
                <button type="button" disabled={loading || meta.current_page <= 1} onClick={() => setPage((current) => Math.max(1, current - 1))}>← <span>Previous</span></button>
                <span>Page {meta.current_page ?? 1} of {meta.last_page ?? 1}</span>
                <button type="button" disabled={loading || meta.current_page >= meta.last_page} onClick={() => setPage((current) => Math.min(meta.last_page, current + 1))}><span>Next</span> →</button>
              </div>
            </footer>
          </section>

          <footer className="admin-content-footer">
            <span>© {new Date().getFullYear()} Synvanta Systems</span>
            <span>INTELLIGENT SYSTEMS. CONNECTED BUSINESSES.</span>
          </footer>
        </div>
      </section>

      {selectedRequest && !composing && (
        <div className="admin-detail-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedRequest(null);
        }}>
          <section className="admin-detail-panel" role="dialog" aria-modal="true" aria-labelledby="request-detail-title">
            <header><span>REQUEST DETAILS</span><button type="button" aria-label="Close request details" onClick={() => setSelectedRequest(null)}><Icon name="close" /></button></header>
            <div className="admin-detail-profile"><span className="admin-avatar admin-avatar--profile">{initials(selectedRequest.name)}</span><h2 id="request-detail-title">{selectedRequest.name}</h2><p>Demo request</p></div>
            <div className="admin-detail-fields">
              <div><span>EMAIL ADDRESS</span><a href={`mailto:${selectedRequest.email}`}>{selectedRequest.email}</a></div>
              <div><span>PHONE NUMBER</span><a href={`tel:${selectedRequest.phone}`}>{selectedRequest.phone}</a></div>
              <div><span>LOCATION</span><strong>{selectedRequest.location}</strong></div>
              <div><span>DATE RECEIVED</span><strong>{formatDate(selectedRequest.created_at)}</strong></div>
              <div><span>SYSTEMS OF INTEREST</span><div className="admin-detail-systems">{selectedRequest.systems.map((system) => <span key={system}>{systems.find(([item]) => item === system)?.[1]} {system}</span>)}</div></div>
            </div>
            {selectedRequest.contacted_at && (
              <p className="admin-detail-contacted"><Icon name="check" /> Contacted {formatDate(selectedRequest.contacted_at)}</p>
            )}
            <div className="admin-detail-contact">
              <button className="admin-detail-email" type="button" onClick={() => openCompose(selectedRequest)}>Contact requester <Icon name="arrow" /></button>
              <div className="admin-detail-contact-alt">
                <button type="button" onClick={copyEmail}>{copied ? "Copied" : "Copy email"}</button>
                <a href={`tel:${selectedRequest.phone}`}>Call</a>
                <a href={`mailto:${selectedRequest.email}?subject=${encodeURIComponent("Your Synvanta demo request")}`}>Open mail app</a>
              </div>
            </div>
          </section>
        </div>
      )}

      {composing && selectedRequest && (
        <div className="admin-detail-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget && !sending) setComposing(false);
        }}>
          <section className="admin-detail-panel admin-compose-panel" role="dialog" aria-modal="true" aria-labelledby="compose-title">
            <header><span>COMPOSE REPLY</span><button type="button" aria-label="Close compose" disabled={sending} onClick={() => setComposing(false)}><Icon name="close" /></button></header>
            <div className="admin-compose-heading"><h2 id="compose-title">Email {selectedRequest.name}</h2><p>{selectedRequest.email}</p></div>
            <form className="admin-compose-form" onSubmit={sendReply}>
              <label>To<input type="text" value={selectedRequest.email} readOnly /></label>
              <label>Subject<input type="text" value={composeSubject} maxLength="150" onChange={(event) => setComposeSubject(event.target.value)} required /></label>
              <label>Message<textarea value={composeBody} rows="11" maxLength="5000" onChange={(event) => setComposeBody(event.target.value)} required /></label>
              {composeError && <p className="admin-compose-message admin-compose-message--error" role="alert">{composeError}</p>}
              {composeSuccess && <p className="admin-compose-message admin-compose-message--success" role="status">{composeSuccess}</p>}
              <div className="admin-compose-actions"><button type="button" disabled={sending} onClick={() => setComposing(false)}>Cancel</button><button type="submit" disabled={sending}>{sending ? "Sending…" : "Send email"} <Icon name="arrow" /></button></div>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

const root = document.getElementById("admin-dashboard-root");

if (root) {
  createRoot(root).render(
    <AdminDashboard
      name={root.dataset.name || "Administrator"}
      total={root.dataset.total || "0"}
      canManageAdmins={root.dataset.canManageAdmins === "true"}
      homeUrl={root.dataset.homeUrl || "/"}
      dataUrl={root.dataset.dataUrl}
      contactUrl={root.dataset.contactUrl}
      logoutUrl={root.dataset.logoutUrl}
      csrfToken={document.querySelector('meta[name="csrf-token"]')?.content ?? ""}
    />,
  );
}
