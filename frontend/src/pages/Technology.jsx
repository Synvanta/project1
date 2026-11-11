import { PageHero, PageCta, Section, usePageMeta } from "../components/Page.jsx";

const qualities = ["Secure", "Scalable", "Reliable", "Intelligent", "User-centered", "Future-ready"];

const philosophy = [
  "Business understanding",
  "Engineering excellence",
  "Artificial intelligence",
  "User-centered design",
  "Continuous innovation",
];

const aiCapabilities = [
  ["Intelligent Automation", "Automating repetitive processes through smart workflows.", ["Document processing", "Task automation", "Workflow optimization", "Automated reporting"]],
  ["AI Analytics & Insights", "Transforming organizational data into valuable intelligence.", ["Intelligent dashboards", "Data analysis", "Trend identification", "Predictive insights", "Decision support"]],
  ["Generative AI Solutions", "Helping organizations leverage modern AI technologies.", ["AI assistants", "Intelligent search", "Knowledge management", "Automated content generation"]],
];

const devCapabilities = [
  "Enterprise applications",
  "Web applications",
  "Mobile applications",
  "Business management systems",
  "SaaS platforms",
  "Workflow automation solutions",
  "System integrations",
];

const cloudCapabilities = [
  "Cloud-based applications",
  "Application deployment",
  "Data storage solutions",
  "System scalability planning",
  "Cloud integration",
];

const cloudBenefits = [
  "Improved accessibility",
  "Greater flexibility",
  "Reduced infrastructure limitations",
  "Enhanced scalability",
];

const dataCapabilities = [
  "Business intelligence dashboards",
  "Reporting systems",
  "Data visualization",
  "Performance analytics",
  "Decision-support solutions",
];

const integrationCapabilities = [
  "API development",
  "Third-party integrations",
  "Payment integrations",
  "Enterprise system connections",
  "Data synchronization",
];

const mobileSolutions = [
  "Customer applications",
  "Business applications",
  "Employee platforms",
  "Service delivery systems",
];

const securityApproach = [
  "Secure system architecture",
  "Data protection",
  "User access management",
  "Secure integrations",
  "Responsible technology practices",
];

const augmentedApproach = [
  ["Innovate Faster", "Using intelligent tools to accelerate research, design, and development."],
  ["Build Smarter Systems", "Integrating AI capabilities into business solutions."],
  ["Improve Quality", "Supporting testing, analysis, and optimization."],
  ["Deliver Greater Value", "Helping organizations achieve better outcomes through technology."],
];

const toolbelt = [
  ["Software Development", ["Modern web technologies", "Application frameworks", "API development", "Database technologies"]],
  ["Artificial Intelligence", ["Machine learning solutions", "Generative AI technologies", "Intelligent automation"]],
  ["Cloud & Infrastructure", ["Cloud platforms", "Scalable hosting", "Digital deployment solutions"]],
  ["Data Solutions", ["Data management", "Analytics platforms", "Reporting systems"]],
];

const foundations = [
  ["Scalable Architecture", "Technology that grows with your organization."],
  ["Secure Design", "Protection for your systems and information."],
  ["Intelligent Capabilities", "AI-powered improvements that create additional value."],
  ["Human-Centered Experiences", "Solutions people can understand and use effectively."],
];

export default function Technology() {
  usePageMeta(
    "Technology & Innovation | AI, Software Engineering & Digital Solutions",
    "Synvanta Systems combines AI, software engineering, cloud technologies, data solutions, and modern digital practices to build secure, scalable, intelligent technology solutions.",
  );

  return (
    <div className="page">
      <PageHero
        eyebrow="Technology & Innovation"
        title={<>Engineering the future of intelligent digital solutions.</>}
        intro={[
          "Modern technology. Artificial intelligence. Scalable innovation. The digital world is evolving rapidly. Organizations need technology solutions that are not only functional today but also adaptable for tomorrow.",
          "At Synvanta Systems, we combine software engineering, artificial intelligence, cloud technologies, data solutions, and modern digital practices to build intelligent systems that help organizations operate smarter.",
        ]}
      />

      <Section
        index="01 / OUR PHILOSOPHY"
        eyebrow="Building technology with purpose"
        title="Technology should solve meaningful problems."
        intro="At Synvanta Systems, we do not adopt technology simply because it is new. We evaluate how technology can create real value for organizations. Our approach combines:"
        tone="dark"
      >
        <ul className="page-list page-list--cols">
          {philosophy.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="page-lede" style={{ marginTop: 30 }}>To create solutions that deliver measurable impact.</p>
        <ul className="page-list page-list--check page-list--cols" style={{ marginTop: 34 }}>
          {qualities.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Section>

      <Section
        index="02 / AI & MACHINE LEARNING"
        eyebrow="Creating smarter digital systems"
        title="Artificial intelligence & machine learning."
        intro="Artificial intelligence is transforming how organizations analyze information, automate processes, and make decisions. Synvanta Systems integrates AI capabilities into practical business solutions that help organizations achieve more."
      >
        <div className="page-cards">
          {aiCapabilities.map(([title, copy, items]) => (
            <article className="page-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ul className="page-list">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="tint"
        index="03 / CUSTOM SOFTWARE ENGINEERING"
        eyebrow="Building digital solutions that solve real challenges"
        title="Custom software engineering."
        intro="Every organization has unique requirements. Our software engineering capabilities enable us to design and develop customized solutions aligned with business objectives."
      >
        <div className="page-blocks page-blocks--2">
          <article className="page-block">
            <h3>Software development capabilities</h3>
            <ul className="page-list">
              {devCapabilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="page-block">
            <h3>Enterprise system architecture</h3>
            <p>
              Modern organizations require systems that communicate effectively. Synvanta Systems designs connected
              technology environments that bring together business processes, data systems, applications, users, and
              digital platforms — creating a unified technology ecosystem.
            </p>
          </article>
        </div>
      </Section>

      <Section
        index="04 / CLOUD TECHNOLOGY"
        eyebrow="Flexible infrastructure for modern organizations"
        title="Cloud technology solutions."
        intro="Cloud technologies provide organizations with greater flexibility, accessibility, and scalability."
      >
        <div className="page-blocks page-blocks--2">
          <article className="page-block">
            <h3>Our cloud capabilities include</h3>
            <ul className="page-list">
              {cloudCapabilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="page-block">
            <h3>Benefits</h3>
            <ul className="page-list page-list--check">
              {cloudBenefits.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </Section>

      <Section
        tone="dark"
        index="05 / DATA & BUSINESS INTELLIGENCE"
        eyebrow="Turning information into strategic advantage"
        title="Data is one of the most valuable resources organizations have."
        intro="Synvanta Systems develops solutions that help organizations collect, organize, analyze, and use information effectively."
      >
        <div className="page-blocks page-blocks--2">
          <article className="page-block">
            <h3>Data capabilities</h3>
            <ul className="page-list">
              {dataCapabilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="page-block">
            <h3>System integration</h3>
            <p>Disconnected systems create inefficiencies. We help organizations integrate different platforms and applications to create smoother workflows.</p>
            <ul className="page-list">
              {integrationCapabilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </Section>

      <Section
        index="06 / MOBILE & SECURITY"
        eyebrow="Connecting businesses through mobile experiences"
        title="Mobile technology solutions."
        intro="Mobile technology creates new opportunities for customer engagement and operational efficiency. Synvanta Systems develops mobile solutions that support:"
      >
        <ul className="page-list page-list--cols">
          {mobileSolutions.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <div className="page-block" style={{ marginTop: 60 }}>
          <h3>Cybersecurity & data protection — building technology you can trust</h3>
          <p>Security is a fundamental part of every solution we create. Our approach considers:</p>
          <ul className="page-list page-list--cols">
            {securityApproach.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p style={{ marginTop: 20 }}>We help organizations build digital systems designed with trust and reliability in mind.</p>
        </div>
      </Section>

      <Section
        tone="tint"
        index="07 / AI-AUGMENTED DEVELOPMENT"
        eyebrow="Combining human creativity with artificial intelligence"
        title="AI-augmented development approach."
        intro="Artificial intelligence is transforming how software is designed, developed, and improved. At Synvanta Systems, AI enhances our ability to:"
      >
        <div className="page-cards">
          {augmentedApproach.map(([title, copy], index) => (
            <article className="page-card" key={title}>
              <span className="page-card__index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        index="08 / OUR CAPABILITIES"
        eyebrow="Modern tools. Proven engineering practices."
        title="Our technology capabilities."
      >
        <div className="page-cards">
          {toolbelt.map(([title, items]) => (
            <article className="page-card" key={title}>
              <h3>{title}</h3>
              <ul className="page-list">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="dark"
        index="09 / INNOVATION"
        eyebrow="Preparing organizations for tomorrow"
        title="Innovation is not only about adopting new technologies. It is about using technology strategically."
        intro="We help organizations navigate digital transformation with confidence — improving operations, creating better experiences, reducing inefficiencies, and discovering new opportunities."
      >
        <div className="page-cards">
          {foundations.map(([title, copy], index) => (
            <article className="page-card" key={title}>
              <span className="page-card__index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <PageCta
        index="10"
        eyebrow="Final call to action"
        title={<>Build the technology<br /><em>behind your future.</em></>}
        copy="Whether you need custom software, AI integration, enterprise systems, or digital transformation support, Synvanta Systems provides the technology expertise needed to turn ideas into intelligent solutions."
        buttonLabel="Talk to Our Technology Team"
        buttonTo="/contact"
        secondaryLabel="Request a solution"
        secondaryTo="/request-solution"
      />
    </div>
  );
}
