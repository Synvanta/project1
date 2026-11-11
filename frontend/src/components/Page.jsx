import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Sets the document title and meta description for the current page (SEO).
 * Deliberately does not restore the previous value on unmount: route changes
 * can run the outgoing page's cleanup after the incoming page's effect, which
 * would clobber the new title. Every page sets its own meta on mount instead.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute("content", description);
  }, [title, description]);
}

/** Dark navy hero used at the top of every inner page. */
export function PageHero({ eyebrow, title, intro = [], actions }) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        <p className="page-hero__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {intro.map((paragraph) => (
          <p className="page-hero__intro" key={paragraph}>{paragraph}</p>
        ))}
        {actions && <div className="page-hero__actions">{actions}</div>}
      </div>
    </section>
  );
}

/** Standard light (or tinted/dark) content section with an optional index label. */
export function Section({ id, index, eyebrow, title, intro, tone, children }) {
  return (
    <section className={`page-section${tone ? ` page-section--${tone}` : ""}`} id={id}>
      <div className="page-section__inner">
        <div className="section-head">
          {index && <div className="section-index">{index}</div>}
          <div className="section-heading">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {intro && <p className="section-intro">{intro}</p>}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

/** Closing call-to-action band plus the shared site footer. */
export function PageCta({
  index = "LET'S BUILD",
  eyebrow = "Ready when you are",
  title,
  copy,
  buttonLabel,
  buttonTo = "/contact",
  secondaryLabel,
  secondaryTo = "/solutions",
}) {
  return (
    <section className="final-cta">
      <div className="final-cta__orb" aria-hidden="true" />
      <div className="section-index">{index} <span> / NEXT STEP</span></div>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="final-cta__copy">{copy}</p>
      <div className="final-cta__actions">
        <Link className="final-cta__button" to={buttonTo}>{buttonLabel} <span aria-hidden="true">↗</span></Link>
        {secondaryLabel && (
          <Link className="final-cta__button final-cta__button--ghost" to={secondaryTo}>
            {secondaryLabel} <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
      <SiteFooter />
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>Synvanta Systems</span>
      <span>Intelligent systems. Connected businesses.</span>
      <Link to="/">Back to top ↑</Link>
    </footer>
  );
}
