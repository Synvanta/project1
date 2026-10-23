import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./admin-login.css";

function BrandMark() {
  return <img className="login-brand__mark" src="/admin-assets/brand/brand-mark.png" alt="" />;
}

function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3.5" y="8.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 8.5V6a3.5 3.5 0 0 1 7 0v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function EyeIcon({ hidden }) {
  return hidden ? (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2.5 10s2.7-5 7.5-5a7.8 7.8 0 0 1 5.2 2M17.5 10s-2.7 5-7.5 5a7.8 7.8 0 0 1-5.2-2M3 3l14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LoginShowcase() {
  return (
    <section className="login-showcase" aria-label="Synvanta admin workspace">
      <div className="login-showcase__topline">
        <span className="login-showcase__live"><i /> ADMIN WORKSPACE</span>
        <span>01 / 02</span>
      </div>
      <div className="login-showcase__copy">
        <span className="login-showcase__spark" aria-hidden="true">✳</span>
        <p>YOUR SYSTEMS. IN SYNC.</p>
        <h1>Make every<br />request <em>count.</em></h1>
        <span className="login-showcase__description">
          One clear view of the businesses ready to move forward with Synvanta.
        </span>
      </div>
      <div className="login-preview" aria-hidden="true">
        <div className="login-preview__header">
          <span><i /> DEMO REQUESTS</span>
          <span className="login-preview__live">LIVE</span>
        </div>
        <div className="login-preview__number">08<span> systems available</span></div>
        <div className="login-preview__systems">
          <span>📦 &nbsp;Inventory</span>
          <span>👥 &nbsp;HR</span>
          <span>🚚 &nbsp;Delivery</span>
          <span>🤖 &nbsp;AI assistant</span>
        </div>
        <div className="login-preview__footer">
          <span><i /> Secure admin access</span>
          <span>synvanta / admin</span>
        </div>
        <span className="login-preview__orbit login-preview__orbit--one" />
        <span className="login-preview__orbit login-preview__orbit--two" />
      </div>
      <footer className="login-showcase__footer">
        <span>Intelligent systems.</span>
        <span>Connected businesses.</span>
      </footer>
    </section>
  );
}

function AdminLogin({ action, csrfToken, email, error, homeUrl }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <main className="login-page">
      <LoginShowcase />
      <section className="login-panel" aria-labelledby="login-heading">
        <a className="login-brand" href={homeUrl} aria-label="Synvanta Systems website">
          <BrandMark />
          <span>synvanta<span className="login-brand__dot">.</span><small>ADMIN CONSOLE</small></span>
        </a>
        <div className="login-card">
          <div className="login-card__eyebrow"><span>WELCOME BACK</span><span className="login-card__secure"><LockIcon /> SECURE SIGN IN</span></div>
          <h2 id="login-heading">Sign in to your<br /><span>workspace.</span></h2>
          <p className="login-card__intro">Enter your admin credentials to manage incoming demo requests.</p>

          <form className="login-form" method="post" action={action}>
            <input type="hidden" name="_token" value={csrfToken} />
            <label htmlFor="admin-email">Email address</label>
            <div className="login-input-wrap">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="2.5" y="4" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="m3.5 5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input id="admin-email" name="email" type="email" defaultValue={email} placeholder="name@company.com" autoComplete="username" autoFocus required />
            </div>

            <div className="login-form__password-heading">
              <label htmlFor="admin-password">Password</label>
              <a href="mailto:support@synvata.com?subject=Admin%20access%20help">Need help?</a>
            </div>
            <div className="login-input-wrap">
              <LockIcon />
              <input id="admin-password" name="password" type={passwordVisible ? "text" : "password"} placeholder="Enter your password" autoComplete="current-password" required />
              <button className="login-password-toggle" type="button" aria-label={passwordVisible ? "Hide password" : "Show password"} onClick={() => setPasswordVisible((visible) => !visible)}>
                <EyeIcon hidden={passwordVisible} />
              </button>
            </div>

            <label className="login-remember"><input type="checkbox" name="remember" value="1" /> <span>Remember me</span></label>
            {error && <p className="login-error" role="alert">{error}</p>}
            <button className="login-submit" type="submit">
              <span>Sign in to dashboard</span>
              <span className="login-submit__arrow" aria-hidden="true">↗</span>
            </button>
          </form>
          <div className="login-card__security"><LockIcon /><span>Your connection is encrypted and secure.</span></div>
        </div>
        <footer className="login-panel__footer">
          <span>© {new Date().getFullYear()} Synvanta Systems</span>
          <span>BUILT FOR WHAT'S NEXT <i /></span>
        </footer>
      </section>
    </main>
  );
}

const root = document.getElementById("admin-login-root");

if (root) {
  createRoot(root).render(
    <AdminLogin
      action={root.dataset.action}
      homeUrl={root.dataset.homeUrl || "/"}
      csrfToken={document.querySelector('meta[name="csrf-token"]')?.content ?? ""}
      email={root.dataset.email ?? ""}
      error={root.dataset.error ?? ""}
    />,
  );
}
