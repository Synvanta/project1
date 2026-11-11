import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/ai-solutions", label: "AI Solutions" },
  { to: "/digital-studio", label: "Digital Studio" },
  { to: "/industries", label: "Industries" },
  { to: "/technology", label: "Technology" },
  { to: "/portfolio", label: "Portfolio" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 12 12 4M5.5 4H12v6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <header className={`site-header${solid ? " site-header--solid" : ""}`}>
      <div className="site-header__inner">
        <Link className="site-header__brand" to="/" aria-label="Synvanta Systems home">
          <span className="site-header__wordmark">
            <strong aria-hidden="true">Synvanta Systems</strong>
            <small aria-hidden="true">Intelligent systems. Connected businesses.</small>
          </span>
          <span className="site-header__sr-only">Synvanta Systems</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  className={({ isActive }) => `site-nav__link${isActive ? " is-active" : ""}`}
                  to={link.to}
                  end={link.end}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Link className="site-header__contact" to="/contact">Contact</Link>
          <Link className="site-header__cta" to="/request-solution">
            Start your transformation
            <ArrowIcon />
          </Link>
          <button
            className={`site-header__burger${mobileOpen ? " is-open" : ""}`}
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav${mobileOpen ? " is-open" : ""}`} id="mobile-nav">
        <nav className="mobile-nav__inner" aria-label="Mobile">
          {navLinks.map((link) => (
            <div className="mobile-nav__item" key={link.to}>
              <NavLink
                className={({ isActive }) => `mobile-nav__link${isActive ? " is-active" : ""}`}
                to={link.to}
                end={link.end}
              >
                {link.label}
                <ArrowIcon />
              </NavLink>
            </div>
          ))}
          <div className="mobile-nav__item">
            <NavLink className="mobile-nav__link" to="/contact">
              Contact
              <ArrowIcon />
            </NavLink>
          </div>
          <div className="mobile-nav__footer">
            <Link className="btn-primary" to="/request-solution">
              Start your transformation <ArrowIcon />
            </Link>
            <p>hello@synvantasystems.com</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
