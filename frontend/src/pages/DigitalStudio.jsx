import { PageHero, PageCta, Section, usePageMeta } from "../components/Page.jsx";

const studioPillars = [
  "Creative design",
  "User experience principles",
  "Modern web technologies",
  "Branding expertise",
  "Business understanding",
];

const websiteServices = [
  ["Corporate Websites", "Professional websites designed for companies, institutions, organizations, and professional brands.", ["Responsive design", "Search engine optimization", "Content management", "Analytics integration", "Modern user experiences"]],
  ["Business Websites", "Digital platforms designed to help growing businesses showcase services, generate leads, build credibility, and connect with customers.", []],
  ["Custom Web Applications", "Web-based platforms designed around specific business needs.", ["Customer portals", "Booking systems", "Internal platforms", "Management dashboards", "Online service platforms"]],
];

const designCapabilities = [
  "User research",
  "Wireframing",
  "Interface design",
  "Prototyping",
  "Design systems",
  "Experience optimization",
];

const brandingServices = [
  ["Logo Design", "Creating memorable visual identities that represent your organization."],
  ["Brand Identity Development", "Creating consistent brand systems including colors, typography, visual guidelines, and brand elements."],
  ["Corporate Branding Materials", "Including company profiles, business cards, letterheads, brochures, marketing materials, and presentations."],
];

const graphicItems = [
  "Marketing designs",
  "Social media graphics",
  "Posters",
  "Flyers",
  "Advertisements",
  "Reports",
  "Digital content",
];

const printItems = [
  "Business cards",
  "Brochures",
  "Posters",
  "Banners",
  "Corporate stationery",
  "Promotional materials",
];

const approach = [
  ["Discover", "We understand your brand, audience, objectives, and challenges."],
  ["Design", "We create concepts and experiences aligned with your goals."],
  ["Develop", "We transform designs into functional, responsive digital solutions."],
  ["Optimize", "We improve digital experiences through feedback, analytics, and continuous refinement."],
];

const whyChoose = [
  ["Technology-Driven Creativity", "Our designs are supported by strong software engineering expertise."],
  ["Business-Focused Design", "We create digital experiences designed to achieve real business objectives."],
  ["Complete Digital Partnership", "From branding and websites to AI solutions and enterprise systems, we support the complete digital journey."],
  ["Consistent Digital Identity", "We help organizations maintain a unified experience across websites, applications, marketing materials, and business platforms."],
];

export default function DigitalStudio() {
  usePageMeta(
    "Web Design, E-Commerce & Branding Services | Synvanta Systems",
    "Synvanta Systems creates professional websites, e-commerce platforms, UI/UX designs, branding solutions, and digital experiences that help businesses connect with customers and grow online.",
  );

  return (
    <div className="page">
      <PageHero
        eyebrow="Digital Studio"
        title={<>Creating digital experiences that connect brands and audiences.</>}
        intro={[
          "Where creativity meets intelligent technology. A successful digital presence requires more than attractive design — it requires strategy, user understanding, technology, and a clear connection between organizations and their audiences.",
          "Through Synvanta Digital Studio, we create modern digital experiences that help businesses establish their identity, engage customers, and grow in a connected world.",
        ]}
      />

      <Section
        index="01 / WHAT WE COMBINE"
        eyebrow="Our approach"
        title="Strategy. Design. Technology. Impact."
      >
        <ul className="page-list page-list--cols">
          {studioPillars.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="page-lede" style={{ marginTop: 30 }}>
          To create digital solutions that are visually compelling, functional, and results-driven.
        </p>
      </Section>

      <Section
        tone="tint"
        index="02 / WEBSITE DESIGN & DEVELOPMENT"
        eyebrow="Modern websites built for business growth"
        title="Website design & development."
        intro="Your website is often the first interaction customers have with your organization. Synvanta Systems designs and develops professional, responsive, and SEO-optimized websites that help organizations build credibility, attract customers, and achieve their digital goals."
      >
        <div className="page-cards">
          {websiteServices.map(([title, copy, items]) => (
            <article className="page-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
              {items.length > 0 && (
                <ul className="page-list page-list--check">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section
        index="03 / E-COMMERCE DEVELOPMENT"
        eyebrow="Digital commerce solutions that help businesses sell and scale"
        title="E-commerce development."
        intro="Customers increasingly expect convenient digital buying experiences. Synvanta Systems develops custom e-commerce solutions that help businesses establish online stores, manage operations, and connect with customers."
      >
        <ul className="page-list page-list--cols">
          <li>Online stores</li>
          <li>Product management systems</li>
          <li>Shopping platforms</li>
          <li>Payment integration</li>
          <li>Order management</li>
          <li>Customer accounts</li>
          <li>Inventory integration</li>
        </ul>
        <p className="page-block__label" style={{ marginTop: 34 }}>Helping businesses achieve</p>
        <ul className="page-list page-list--check page-list--cols">
          <li>Wider market reach</li>
          <li>Better customer experiences</li>
          <li>Streamlined sales operations</li>
          <li>Improved business visibility</li>
        </ul>
      </Section>

      <Section
        tone="dark"
        index="04 / UI/UX DESIGN"
        eyebrow="Designing digital experiences people love to use"
        title="Great technology should feel simple and intuitive."
        intro="Our UI/UX design process focuses on creating digital products that are easy to navigate, visually engaging, user-centered, and business-focused."
      >
        <p className="page-block__label">Our design capabilities include</p>
        <ul className="page-list page-list--cols">
          {designCapabilities.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Section>

      <Section
        index="05 / BRANDING & BRAND IDENTITY"
        eyebrow="Building brands that communicate trust and value"
        title="Branding & brand identity."
        intro="A strong brand helps organizations create recognition, credibility, and connection. Synvanta Digital Studio helps businesses develop professional brand identities that reflect their vision and values."
      >
        <div className="page-cards">
          {brandingServices.map(([title, copy]) => (
            <article className="page-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="tint"
        index="06 / GRAPHIC DESIGN & PRINTING"
        eyebrow="Creative solutions that strengthen communication"
        title="Graphic design services."
        intro="Visual communication plays an important role in building strong brands."
      >
        <div className="page-blocks page-blocks--2">
          <article className="page-block">
            <h3>Our graphic design services include</h3>
            <ul className="page-list">
              {graphicItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="page-block">
            <h3>Printing & corporate solutions</h3>
            <p>Beyond digital experiences, we help organizations maintain professional brand presence through quality printed materials.</p>
            <ul className="page-list">
              {printItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>

        <div className="page-block" style={{ marginTop: 60 }}>
          <h3>Digital marketing support — helping organizations build online visibility</h3>
          <p>A strong digital presence requires consistent strategy. We support businesses through:</p>
          <ul className="page-list page-list--cols">
            <li>SEO-focused website development</li>
            <li>Digital content creation</li>
            <li>Online brand optimization</li>
            <li>Marketing assets</li>
          </ul>
        </div>
      </Section>

      <Section
        index="07 / OUR STUDIO APPROACH"
        eyebrow="Strategy. Design. Technology. Impact."
        title="Our digital studio approach."
      >
        <div className="page-steps">
          {approach.map(([title, copy], index) => (
            <article className="page-step" key={title}>
              <span className="page-step__index">0{index + 1}</span>
              <div className="page-step__line" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="dark"
        index="08 / WHY STUDIO"
        eyebrow="More than a creative agency"
        title="Why choose Synvanta Digital Studio?"
        intro="Unlike traditional design agencies, Synvanta combines creativity with advanced technology capabilities."
      >
        <div className="page-cards">
          {whyChoose.map(([title, copy], index) => (
            <article className="page-card" key={title}>
              <span className="page-card__index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <PageCta
        index="09"
        eyebrow="Final call to action"
        title={<>Build a digital presence<br /><em>that connects.</em></>}
        copy="Your brand deserves more than a website. It deserves a digital experience that communicates your value, engages your audience, and supports your growth."
        buttonLabel="Start Your Digital Project"
        buttonTo="/request-solution"
        secondaryLabel="Discuss your project"
        secondaryTo="/contact"
      />
    </div>
  );
}
