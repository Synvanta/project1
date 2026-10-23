import React, { useCallback, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./admin-dashboard.css";
import "./admin-users.css";

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function AdminUsers({ name, count, usersUrl, createUrl, permissionUrl, impersonateUrl, logoutUrl, csrfToken, canManageAdmins, canAddAdmins }) {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);
  const [savingPermissionId, setSavingPermissionId] = useState(null);
  const [draft, setDraft] = useState({ can_manage_admins: false, can_add_admins: false });

  const currentUserId = Number(root?.dataset.currentUserId);

  const loadAdmins = useCallback(async (signal) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(usersUrl, {
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
        throw new Error(result.message || "We couldn't load admin accounts.");
      }

      setAdmins(result.data);
    } catch (loadError) {
      if (loadError instanceof Error && loadError.name === "AbortError") return;
      setError(loadError instanceof Error ? loadError.message : "We couldn't load admin accounts.");
    } finally {
      if (!signal.aborted) setLoading(false);
    }
  }, [usersUrl]);

  useEffect(() => {
    const abortController = new AbortController();
    loadAdmins(abortController.signal);
    return () => abortController.abort();
  }, [loadAdmins]);

  function openPermissions(admin) {
    if (openMenuId === admin.id) {
      setOpenMenuId(null);
      return;
    }

    setError("");
    setOpenMenuId(admin.id);
    setDraft({
      can_manage_admins: admin.can_manage_admins,
      can_add_admins: admin.can_add_admins,
    });
  }

  function toggleDraft(field) {
    setDraft((current) => ({ ...current, [field]: !current[field] }));
  }

  async function savePermissions(admin) {
    const changes = {};
    if (draft.can_manage_admins !== admin.can_manage_admins) changes.can_manage_admins = draft.can_manage_admins;
    if (draft.can_add_admins !== admin.can_add_admins) changes.can_add_admins = draft.can_add_admins;

    if (Object.keys(changes).length === 0) {
      setOpenMenuId(null);
      return;
    }

    setSavingPermissionId(admin.id);
    setError("");

    try {
      const response = await fetch(permissionUrl.replace("__ADMIN_ID__", String(admin.id)), {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken,
        },
        credentials: "same-origin",
        body: JSON.stringify(changes),
      });
      const result = await response.json();

      if (!response.ok) {
        const validationErrors = result.errors ? Object.values(result.errors).flat().join(" ") : "";
        throw new Error(validationErrors || result.message || "We couldn't update this admin's permissions.");
      }

      setAdmins((current) => current.map((item) => item.id === admin.id ? result.data : item));
      setOpenMenuId(null);
    } catch (permissionError) {
      setError(permissionError instanceof Error ? permissionError.message : "We couldn't update this admin's permissions.");
    } finally {
      setSavingPermissionId(null);
    }
  }

  async function impersonateAdmin(admin) {
    setOpenMenuId(null);
    setError("");

    try {
      const response = await fetch(impersonateUrl.replace("__ADMIN_ID__", String(admin.id)), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "X-CSRF-TOKEN": csrfToken,
        },
        credentials: "same-origin",
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "We couldn't start impersonating this admin.");
      }

      window.location.assign(result.redirect || "/admin");
    } catch (impersonationError) {
      setError(impersonationError instanceof Error ? impersonationError.message : "We couldn't start impersonating this admin.");
    }
  }

  async function createAdmin(event) {
    event.preventDefault();
    setSubmitting(true);
    setFormError("");
    setFormSuccess("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(createUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken,
        },
        credentials: "same-origin",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
          password_confirmation: formData.get("password_confirmation"),
          can_manage_admins: formData.get("can_manage_admins") === "on",
          can_add_admins: formData.get("can_add_admins") === "on",
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        const validationErrors = result.errors ? Object.values(result.errors).flat().join(" ") : "";
        throw new Error(validationErrors || result.message || "We couldn't create this admin account.");
      }

      form.reset();
      setFormSuccess(`${result.data.name} was added as an admin.`);
      await loadAdmins(new AbortController().signal);
      window.setTimeout(() => setCreating(false), 900);
    } catch (createError) {
      setFormError(createError instanceof Error ? createError.message : "We couldn't create this admin account.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <a className="admin-sidebar__brand" href="/admin" aria-label="Synvanta Admin home">
          <span className="admin-sidebar__brand-icon"><BrandIcon /></span>
          <span>synvanta<span className="admin-sidebar__brand-dot">.</span><small>ADMIN CONSOLE</small></span>
        </a>
        <div className="admin-sidebar__workspace">
          <span className="admin-sidebar__workspace-icon">S</span>
          <span><strong>Synvanta Systems</strong><small>Workspace</small></span>
          <span className="admin-sidebar__chevron">⌄</span>
        </div>
        <p className="admin-sidebar__label">WORKSPACE</p>
        <nav className="admin-sidebar__nav" aria-label="Admin navigation">
          <a href="/admin" className="admin-nav-link"><Icon name="grid" />Overview</a>
          <a href="/admin/demo-requests" className="admin-nav-link"><Icon name="inbox" />Demo requests</a>
          {canManageAdmins && <a href="/admin/admins" className="admin-nav-link admin-nav-link--active" aria-current="page"><Icon name="users" />Admins<span className="admin-nav-link__count">{count}</span></a>}
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
          <div className="admin-breadcrumb"><span>Workspace</span><b>/</b><strong>Admins</strong></div>
          <div className="admin-topbar__actions">
            <span className="admin-topbar__secure"><i /> Secure workspace</span>
            <span className="admin-avatar">{initials(name)}</span>
            <form method="post" action={logoutUrl}>
              <input type="hidden" name="_token" value={csrfToken} />
              <button className="admin-signout" type="submit">Sign out</button>
            </form>
          </div>
        </header>

        <div className="admin-content">
          <section className="admin-page-heading admin-users-heading">
            <div>
              <p className="admin-eyebrow">WORKSPACE ACCESS</p>
              <h1>Admin users<span>.</span></h1>
              <p>Manage who can access the Synvanta admin workspace.</p>
            </div>
            {canAddAdmins && (
              <button className="admin-users-add" type="button" onClick={() => {
                setFormError("");
                setFormSuccess("");
                setCreating(true);
              }}><span aria-hidden="true">+</span> Add admin</button>
            )}
          </section>

          <section className="admin-users-summary">
            <span className="admin-users-summary__icon"><Icon name="users" /></span>
            <span><strong>{Number(count).toLocaleString()}</strong><small>Admin accounts</small></span>
            <span className="admin-users-summary__note"><i /> Only admins with permission can manage this list.</span>
          </section>

          <section className="admin-requests-card admin-users-card">
            <header className="admin-requests-card__header">
              <div><h2>Workspace administrators <span>{admins.length}</span></h2><p>People with access to demo requests and workspace administration.</p></div>
            </header>
            <div className="admin-table-wrap">
              <table className="admin-table admin-users-table">
                <thead><tr><th scope="col">ADMIN</th><th scope="col">ROLE</th><th scope="col">DATE ADDED</th><th scope="col">ACTIONS</th></tr></thead>
                <tbody>
                  {!loading && !error && admins.map((admin, index) => (
                    <tr key={admin.id}>
                      <td>
                        <div className="admin-contact">
                          <span className={`admin-avatar admin-avatar--${index % 5}`}>{initials(admin.name)}</span>
                          <span><strong>{admin.name}</strong><a href={`mailto:${admin.email}`}>{admin.email}</a></span>
                        </div>
                      </td>
                      <td>
                        <span className="admin-users-role"><i /> Administrator</span>
                        <span className={`admin-users-access ${admin.can_manage_admins ? "admin-users-access--enabled" : ""}`}>
                          {admin.can_manage_admins ? "Admin-page access" : "No admin-page access"}
                        </span>
                        <span className={`admin-users-access ${admin.can_add_admins ? "admin-users-access--enabled" : ""}`}>
                          {admin.can_add_admins ? "Can add admins" : "Cannot add admins"}
                        </span>
                      </td>
                      <td><span className="admin-date"><Icon name="calendar" />{new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", year: "numeric" }).format(new Date(admin.created_at))}</span></td>
                      <td className="admin-users-actions-cell">
                        <div className="admin-users-actions">
                          {admin.id !== currentUserId && (
                            <button
                              className="admin-users-impersonate"
                              type="button"
                              aria-label={`Sign in as ${admin.name}`}
                              title={`Sign in as ${admin.name}`}
                              disabled={savingPermissionId === admin.id}
                              onClick={() => impersonateAdmin(admin)}
                            ><Icon name="enter" /></button>
                          )}
                          <button
                            className="admin-users-menu-trigger"
                            type="button"
                            aria-label={`Permissions for ${admin.name}`}
                            aria-haspopup="true"
                            aria-expanded={openMenuId === admin.id}
                            disabled={savingPermissionId === admin.id}
                            onClick={() => openPermissions(admin)}
                          ><Icon name="more" /></button>
                        </div>
                        {openMenuId === admin.id && (
                          <div className="admin-users-menu admin-users-menu--permissions" aria-label={`Permissions for ${admin.name}`}>
                            <p className="admin-users-menu-title">PERMISSIONS</p>
                            <label className="admin-users-menu-permission">
                              <input
                                type="checkbox"
                                checked={draft.can_manage_admins}
                                disabled={savingPermissionId === admin.id || admin.id === currentUserId}
                                onChange={() => toggleDraft("can_manage_admins")}
                              />
                              <span><strong>Admins page access</strong><small>View and manage this admin list.</small></span>
                            </label>
                            <label className="admin-users-menu-permission">
                              <input
                                type="checkbox"
                                checked={draft.can_add_admins}
                                disabled={savingPermissionId === admin.id}
                                onChange={() => toggleDraft("can_add_admins")}
                              />
                              <span><strong>Add admin</strong><small>Create new admin accounts.</small></span>
                            </label>
                            {admin.id === currentUserId && admin.can_manage_admins && (
                              <p className="admin-users-menu-note">You can’t remove your own admin-page access.</p>
                            )}
                            <div className="admin-users-menu-actions">
                              <button type="button" disabled={savingPermissionId === admin.id} onClick={() => setOpenMenuId(null)}>Cancel</button>
                              <button type="button" disabled={savingPermissionId === admin.id} onClick={() => savePermissions(admin)}>{savingPermissionId === admin.id ? "Saving…" : "Save"}</button>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {loading && <div className="admin-state"><span className="admin-spinner" />Loading admin accounts…</div>}
              {!loading && error && <div className="admin-state admin-state--error"><strong>Couldn't load admin accounts.</strong><span>{error}</span><button type="button" onClick={() => loadAdmins(new AbortController().signal)}>Try again</button></div>}
              {!loading && !error && admins.length === 0 && <div className="admin-state"><span className="admin-state__icon">⌕</span><strong>No admin accounts found.</strong></div>}
            </div>
          </section>
          <footer className="admin-content-footer"><span>© {new Date().getFullYear()} Synvanta Systems</span><span>INTELLIGENT SYSTEMS. CONNECTED BUSINESSES.</span></footer>
        </div>
      </section>

      {creating && (
        <div className="admin-detail-backdrop admin-users-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget && !submitting) setCreating(false);
        }}>
          <section className="admin-users-form-panel" role="dialog" aria-modal="true" aria-labelledby="admin-create-title">
            <header><span>WORKSPACE ACCESS</span><button type="button" aria-label="Close add admin form" disabled={submitting} onClick={() => setCreating(false)}><Icon name="close" /></button></header>
            <div className="admin-users-form-title"><span className="admin-users-summary__icon"><Icon name="users" /></span><h2 id="admin-create-title">Add an admin</h2><p>Create a new account with access to the admin workspace.</p></div>
            <form className="admin-users-form" onSubmit={createAdmin}>
              <label>Full name<input name="name" type="text" autoComplete="name" maxLength="120" placeholder="e.g. Jordan Smith" required /></label>
              <label>Email address<input name="email" type="email" autoComplete="email" maxLength="254" placeholder="name@company.com" required /></label>
              <label>Password<input name="password" type="password" autoComplete="new-password" minLength="12" placeholder="At least 12 characters" required /></label>
              <label>Confirm password<input name="password_confirmation" type="password" autoComplete="new-password" minLength="12" placeholder="Enter the password again" required /></label>
              <label className="admin-users-form-check">
                <input name="can_manage_admins" type="checkbox" />
                <span><strong>Admins page access</strong><small>Allow this admin to open the admins page.</small></span>
              </label>
              <label className="admin-users-form-check">
                <input name="can_add_admins" type="checkbox" />
                <span><strong>Can add admins</strong><small>Allow this admin to create new admins.</small></span>
              </label>
              {formError && <p className="admin-users-form-message admin-users-form-message--error" role="alert">{formError}</p>}
              {formSuccess && <p className="admin-users-form-message admin-users-form-message--success" role="status">{formSuccess}</p>}
              <p className="admin-users-form-hint"><Icon name="settings" /> Passwords are securely hashed and never displayed after creation.</p>
              <div className="admin-users-form-actions"><button type="button" disabled={submitting} onClick={() => setCreating(false)}>Cancel</button><button type="submit" disabled={submitting}>{submitting ? "Creating…" : "Create admin"} <Icon name="arrow" /></button></div>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

function Icon({ name }) {
  const paths = {
    grid: <><rect x="3" y="3" width="5" height="5" rx="1" /><rect x="12" y="3" width="5" height="5" rx="1" /><rect x="3" y="12" width="5" height="5" rx="1" /><rect x="12" y="12" width="5" height="5" rx="1" /></>,
    inbox: <><rect x="2.5" y="3.5" width="15" height="13" rx="2" /><path d="M3 11.5h4l1.5 2h2.8l1.5-2h3.2" /></>,
    box: <><path d="m10 2.5 7 3.8v7.4l-7 3.8-7-3.8V6.3l7-3.8Z" /><path d="m3.3 6.5 6.7 3.7 6.7-3.7M10 10.2v7" /></>,
    settings: <><circle cx="10" cy="10" r="3" /><path d="m8.3 2.8.4-1h2.6l.4 1 1.2.7 1-.3 1.3 2.3-.7.8v1.4l.7.8-1.3 2.3-1-.3-1.2.7-.4 1H8.7l-.4-1-1.2-.7-1 .3-1.3-2.3.7-.8V6.3l-.7-.8 1.3-2.3 1 .3 1.2-.7Z" /></>,
    users: <><path d="M13.5 17v-1.5a3 3 0 0 0-3-3h-5a3 3 0 0 0-3 3V17" /><circle cx="8" cy="6.5" r="3" /><path d="M14 3.7a3 3 0 0 1 0 5.7M15.5 12.5a3 3 0 0 1 2 2.8V17" /></>,
    more: <><circle cx="4" cy="10" r="1" /><circle cx="10" cy="10" r="1" /><circle cx="16" cy="10" r="1" /></>,
    shield: <><path d="M10 2.5 16 5v4.5c0 3.7-2.5 6.2-6 8-3.5-1.8-6-4.3-6-8V5l6-2.5Z" /><path d="m7.5 10 1.7 1.7 3.5-3.5" /></>,
    shieldOff: <><path d="M4 5 10 2.5 16 5v4.5c0 3.7-2.5 6.2-6 8a13 13 0 0 1-3.5-2.4" /><path d="m3 3 14 14" /></>,
    arrow: <><path d="M4 10h12M11 5l5 5-5 5" /></>,
    enter: <><path d="M11 4h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3" /><path d="M4 10h9M9 6l4 4-4 4" /></>,
    close: <><path d="m5 5 10 10M15 5 5 15" /></>,
    calendar: <><rect x="3" y="4" width="14" height="13" rx="2" /><path d="M6 2v4M14 2v4M3 8h14" /></>,
  };
  return <svg className="admin-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.grid}</svg>;
}

function BrandIcon() {
  return <img src="/admin-assets/brand/brand-mark.png" alt="" />;
}

const root = document.getElementById("admin-users-root");

if (root) {
  createRoot(root).render(
    <AdminUsers
      name={root.dataset.name || "Administrator"}
      count={root.dataset.count || "0"}
      usersUrl={root.dataset.usersUrl}
      createUrl={root.dataset.createUrl}
      logoutUrl={root.dataset.logoutUrl}
      permissionUrl={root.dataset.permissionUrl}
      impersonateUrl={root.dataset.impersonateUrl}
      canManageAdmins={root.dataset.canManageAdmins === "true"}
      canAddAdmins={root.dataset.canAddAdmins === "true"}
      csrfToken={document.querySelector('meta[name="csrf-token"]')?.content ?? ""}
    />,
  );
}
