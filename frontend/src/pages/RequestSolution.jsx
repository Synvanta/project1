import { PageHero, PageCta, Section, usePageMeta } from "../components/Page.jsx";
import LeadForm from "../components/LeadForm.jsx";

const needs = [
  ["Automate Manual Processes", "Replace repetitive tasks with intelligent workflows", "Many organizations lose valuable time managing manual processes. We help automate:", ["Administrative workflows", "Data processing", "Reporting", "Approval processes", "Customer interactions"], ["Faster operations", "Reduced errors", "Improved productivity"]],
  ["Connect Business Operations", "Create systems that work together", "Disconnected processes create inefficiency and poor visibility. We develop solutions that connect:", ["Departments", "Teams", "Data", "Applications", "Customers"], []],
  ["Improve Decision-Making", "Transform data into business intelligence", "Organizations need accurate information to make better decisions. We build solutions that provide:", ["Real-time reporting", "Analytics dashboards", "Performance insights", "Intelligent recommendations"], []],
  ["Build Digital Platforms", "Create better ways to serve customers", "We help organizations develop:", ["Websites", "E-commerce platforms", "Customer portals", "Mobile applications", "Digital service platforms"], []],
  ["Adopt Artificial Intelligence", "Discover where AI can create real business value", "AI can help organizations:", ["Automate workflows", "Improve efficiency", "Analyze information", "Enhance customer experiences", "Create smarter operations"], []],
];

const process = [
  ["Understand", "We learn about your organization", "We begin by understanding your goals, current processes, operational challenges, existing systems, and desired outcomes. The first step is understanding the problem before recommending technology."],
  ["Analyze", "Identifying the right opportunities", "Our team evaluates process improvement opportunities, automation possibilities, system requirements, AI opportunities, and integration needs."],
  ["Design", "Creating your technology roadmap", "We develop a solution approach that includes recommended technology, system features, implementation strategy, and a project roadmap."],
  ["Build", "Developing your intelligent solution", "Our team transforms the approved strategy into a secure, scalable, and practical digital solution."],
  ["Support", "Growing with your organization", "Technology evolves. We continue supporting organizations through system improvements, updates, optimization, and technical support."],
];

const buildable = [
  ["Custom Software Development", "For organizations requiring technology designed around their unique operations."],
  ["Enterprise Systems", "ERP systems, inventory management systems, and business management platforms."],
  ["Industry Solutions", "Hospital management systems, school management systems, SACCO management systems, property management systems, and logistics systems."],
  ["AI Solutions", "AI automation, intelligent analytics, AI assistants, and AI integration."],
  ["Digital Experiences", "Website development, e-commerce platforms, UI/UX design, and branding solutions."],
];

const audiences = [
  ["Startups", "Helping new businesses establish strong digital foundations.", ["Websites", "Business platforms", "Automation tools", "Digital systems"]],
  ["Small & Medium Businesses", "Helping growing businesses improve efficiency and prepare for growth.", ["Management systems", "Inventory solutions", "Customer platforms", "Business automation"]],
  ["Enterprises", "Helping established organizations modernize operations.", ["Enterprise software", "ERP systems", "AI transformation", "System integration"]],
  ["Institutions", "Supporting schools, hospitals, cooperatives, and non-profit organizations with specialized technology solutions.", []],
];

const reasons = [
  ["We Start With Your Goals", "We do not recommend technology before understanding your needs."],
  ["We Build Custom Solutions", "Your organization deserves technology designed around your processes."],
  ["We Combine AI and Innovation", "We help organizations adopt intelligent technologies that create real value."],
  ["We Focus on Long-Term Impact", "We build partnerships, not just projects."],
];

export default function RequestSolution() {
  usePageMeta(
    "Custom Software Consultation & AI Solutions | Synvanta Systems",
    "Discuss your technology needs with Synvanta Systems. We build custom software, ERP systems, AI solutions, business automation platforms, and digital transformation solutions.",
  );

  return (
    <div className="page">
      <PageHero
        eyebrow="Request a Custom Solution"
        title={<>Tell us your challenge. We will build the right solution.</>}
        intro={[
          "Every organization has unique goals, processes, and challenges. At Synvanta Systems, we help businesses and institutions identify opportunities where technology can improve efficiency, automate operations, and create long-term value.",
          "Whether you need a custom software application, enterprise management system, AI-powered solution, or digital transformation strategy, our team will work with you to design the right approach.",
        ]}
      />

      <Section
        index="01 / TRANSFORM YOUR CHALLENGES"
        eyebrow="Organizations work with Synvanta Systems when they need to"
        title="Transform your business challenges into intelligent solutions."
      >
        <div className="page-cards">
          {needs.map(([title, subtitle, copy, items, checks]) => (
            <article className="page-card" key={title}>
              <h3>{title}</h3>
              <p><strong style={{ color: "var(--ink)" }}>{subtitle}</strong></p>
              <p style={{ marginTop: 10 }}>{copy}</p>
              <ul className="page-list">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {checks.length > 0 && (
                <ul className="page-list page-list--check">
                  {checks.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="tint"
        index="02 / CONSULTATION PROCESS"
        eyebrow="A clear path from challenge to solution"
        title="Our consultation process."
      >
        <div className="page-steps">
          {process.map(([title, subtitle, copy], index) => (
            <article className="page-step" key={title}>
              <span className="page-step__index">{index + 1}. {title.toUpperCase()}</span>
              <div className="page-step__line" />
              <h3>{subtitle}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        index="03 / WHAT WE CAN BUILD"
        eyebrow="Solutions we can build"
        title="From strategy to deployed technology."
      >
        <div className="page-cards">
          {buildable.map(([title, copy]) => (
            <article className="page-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="dark"
        index="04 / WHO WE HELP"
        eyebrow="Supporting organizations at every stage"
        title="Who we help."
      >
        <div className="page-cards">
          {audiences.map(([title, copy, items]) => (
            <article className="page-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
              {items.length > 0 && (
                <ul className="page-list">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section
        index="05 / WHY START WITH US"
        eyebrow="A partner that understands both technology and business"
        title="Why start with Synvanta Systems?"
      >
        <div className="page-blocks page-blocks--2">
          {reasons.map(([title, copy]) => (
            <article className="page-block" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="tint"
        index="06 / CONSULTATION FORM"
        eyebrow="Tell us about your project"
        title="Request a consultation."
        intro="Complete the form below and our team will get back to you."
      >
        <LeadForm id="request-solution" buttonLabel="Request Consultation" />
      </Section>

      <PageCta
        index="07"
        eyebrow="Final call to action"
        title={<>Ready to build your<br /><em>intelligent solution?</em></>}
        copy="Your challenge is unique. Your technology should be too. Synvanta Systems helps organizations transform ideas into intelligent digital solutions that connect people, processes, and possibilities."
        buttonLabel="Start Your Digital Transformation Journey"
        buttonTo="/contact"
        secondaryLabel="Explore our solutions"
        secondaryTo="/solutions"
      />
    </div>
  );
}
