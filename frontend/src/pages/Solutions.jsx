import { PageHero, PageCta, Section, usePageMeta } from "../components/Page.jsx";

const customCapabilities = [
  "Enterprise applications",
  "Business management platforms",
  "Web applications",
  "Mobile applications",
  "Workflow automation systems",
  "Customer portals",
  "Integrated digital platforms",
];

const erpModules = [
  "Finance management",
  "Inventory management",
  "Procurement",
  "Human resources",
  "Sales management",
  "Customer management",
  "Reporting and analytics",
];

const erpBenefits = [
  "Improved operational visibility",
  "Better decision-making",
  "Reduced manual processes",
  "Increased efficiency",
  "Connected business operations",
];

const aiGroups = [
  {
    title: "Intelligent Automation",
    copy: "Reduce repetitive tasks and improve operational efficiency through AI-powered workflows.",
    items: ["Process automation", "Document processing", "Automated reporting", "Smart notifications"],
  },
  {
    title: "AI Analytics & Insights",
    copy: "Transform business data into actionable intelligence.",
    items: ["Intelligent dashboards", "Performance analysis", "Predictive insights", "Data-driven recommendations"],
  },
  {
    title: "AI Assistants",
    copy: "Create smarter interactions through intelligent digital assistants.",
    items: ["Customer support assistants", "Internal knowledge assistants", "Automated inquiry systems"],
  },
];

const industrySystems = [
  {
    title: "Hospital Management Systems",
    copy: "Connecting healthcare operations through digital solutions. Healthcare organizations need secure and efficient systems to manage patients, records, and daily operations.",
    items: ["Patient registration", "Electronic medical records", "Appointment management", "Billing and payments", "Pharmacy management", "Reporting and analytics"],
    footer: "Helping healthcare providers improve efficiency and deliver better patient experiences.",
  },
  {
    title: "School Management Systems",
    copy: "Digital solutions for modern educational institutions. Educational institutions need reliable platforms to manage academic and administrative activities.",
    items: ["Student information management", "Fee management", "Attendance tracking", "Examination management", "Academic reporting", "Parent communication"],
    footer: "Helping schools improve administration and create connected learning environments.",
  },
  {
    title: "SACCO Management Systems",
    copy: "Empowering financial cooperatives through technology. SACCOs require secure systems to manage members, savings, loans, and financial operations.",
    items: ["Member management", "Savings management", "Loan processing", "Transaction tracking", "Financial reporting", "Digital member services"],
    footer: "Helping SACCOs improve efficiency, transparency, and member experience.",
  },
  {
    title: "Property Management Systems",
    copy: "Simplifying real estate operations through intelligent platforms. Managing properties requires accurate information, efficient processes, and better visibility.",
    items: ["Property portfolios", "Tenant records", "Rent collection", "Lease management", "Maintenance requests", "Financial reporting"],
    footer: "Helping property managers operate more efficiently.",
  },
  {
    title: "Inventory Management Systems",
    copy: "Complete visibility into your business operations. Inventory challenges can affect profitability and customer satisfaction.",
    items: ["Track stock levels", "Manage suppliers", "Monitor sales", "Reduce losses", "Improve inventory accuracy", "Generate real-time reports"],
    footer: "Helping businesses make smarter operational decisions.",
  },
  {
    title: "Logistics & Delivery Management Systems",
    copy: "Connecting orders, operations, and customers. Efficient logistics requires visibility and coordination.",
    items: ["Order management", "Delivery tracking", "Driver management", "Customer notifications", "Operational reporting"],
    footer: "Helping businesses improve delivery efficiency and customer satisfaction.",
  },
];

const whyChoose = [
  ["Business-Centered Approach", "We focus on understanding your challenges before designing technology."],
  ["AI-Augmented Innovation", "We combine artificial intelligence with human expertise to create smarter solutions."],
  ["Custom Development", "We build systems that fit your organization instead of forcing your processes into generic platforms."],
  ["Scalable Architecture", "Our solutions are designed to grow as your organization evolves."],
  ["End-to-End Support", "From strategy and development to implementation and improvement, we support your digital transformation journey."],
];

const approach = [
  ["Discover", "Understand your business objectives and challenges."],
  ["Design", "Create the right solution strategy and experience."],
  ["Develop", "Build secure, scalable intelligent systems."],
  ["Deploy", "Implement technology and support adoption."],
  ["Improve", "Continuously optimize solutions as your needs evolve."],
];

export default function Solutions() {
  usePageMeta(
    "Custom Software, ERP & AI Solutions | Synvanta Systems",
    "Synvanta Systems delivers AI-powered software solutions, ERP systems, business automation platforms, and industry-specific management systems designed to help organizations operate smarter.",
  );

  return (
    <div className="page">
      <PageHero
        eyebrow="Solutions"
        title={<>Intelligent technology solutions designed around your business.</>}
        intro={[
          "Building connected systems that help organizations operate smarter. Every organization has unique processes, challenges, and goals.",
          "At Synvanta Systems, we design and develop AI-augmented software solutions, enterprise platforms, and digital systems that help organizations automate operations, improve efficiency, and make better decisions.",
          "From business management systems and industry-specific platforms to AI automation and digital experiences, we create technology solutions designed around the way you work.",
        ]}
      />

      <Section
        index="01 / CUSTOM SOFTWARE DEVELOPMENT"
        eyebrow="Our solution areas"
        title="Software solutions built around your business needs."
        intro="Off-the-shelf software does not always address the unique requirements of every organization. Synvanta Systems specializes in custom software development, creating secure, scalable, and flexible solutions designed specifically around your workflows, objectives, and operational requirements."
      >
        <p className="page-block__label">Our custom software solutions help organizations</p>
        <ul className="page-list page-list--cols">
          <li>Automate business processes</li>
          <li>Improve productivity</li>
          <li>Reduce manual operations</li>
          <li>Connect departments</li>
          <li>Access real-time information</li>
          <li>Create better customer experiences</li>
        </ul>
        <p className="page-block__label" style={{ marginTop: 34 }}>Our custom software capabilities include</p>
        <ul className="page-list page-list--cols">
          {customCapabilities.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Section>

      <Section
        tone="tint"
        index="02 / ERP SOLUTIONS"
        eyebrow="Connecting business operations through intelligent systems"
        title="Enterprise Resource Planning (ERP) solutions."
        intro="Modern organizations require centralized systems that provide visibility, control, and efficiency across departments. Synvanta Systems develops custom ERP solutions that connect critical business functions into one intelligent platform."
      >
        <div className="page-blocks page-blocks--2">
          <article className="page-block">
            <h3>Our ERP solutions can integrate</h3>
            <ul className="page-list">
              {erpModules.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="page-block">
            <h3>Benefits of our ERP solutions</h3>
            <ul className="page-list page-list--check">
              {erpBenefits.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </Section>

      <Section
        index="03 / AI-POWERED BUSINESS SOLUTIONS"
        eyebrow="Making organizations smarter through artificial intelligence"
        title="AI-powered business solutions."
        intro="Artificial intelligence is transforming the way organizations operate. Synvanta Systems integrates AI capabilities into business solutions to help organizations automate workflows, analyze information, and discover valuable insights."
      >
        <div className="page-cards">
          {aiGroups.map((group) => (
            <article className="page-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.copy}</p>
              <ul className="page-list">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="tint"
        index="04 / INDUSTRY MANAGEMENT SYSTEMS"
        eyebrow="Specialized software solutions for specific business needs"
        title="Industry management systems."
        intro="Different industries require different solutions. Synvanta Systems develops specialized management platforms designed around industry workflows and operational requirements."
      >
        <div className="page-cards">
          {industrySystems.map((system) => (
            <article className="page-card" key={system.title}>
              <h3>{system.title}</h3>
              <p>{system.copy}</p>
              <ul className="page-list">
                {system.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p style={{ marginTop: 18 }}>{system.footer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        index="05 / E-COMMERCE & AUTOMATION"
        eyebrow="Digital platforms that help businesses sell and grow"
        title="E-commerce solutions."
        intro="The modern marketplace requires seamless digital experiences. Synvanta Systems develops e-commerce platforms that help businesses establish online presence, manage operations, and connect with customers."
      >
        <ul className="page-list page-list--cols">
          <li>Online stores</li>
          <li>Product management</li>
          <li>Shopping platforms</li>
          <li>Payment integration</li>
          <li>Order management</li>
          <li>Customer accounts</li>
          <li>Inventory integration</li>
        </ul>

        <div className="page-blocks page-blocks--2" style={{ marginTop: 60 }}>
          <article className="page-block">
            <h3>Business automation solutions</h3>
            <p>Eliminating inefficiencies through intelligent workflows. Many organizations lose valuable time through repetitive manual processes. We help businesses automate:</p>
            <ul className="page-list">
              <li>Approval workflows</li>
              <li>Data processing</li>
              <li>Reporting</li>
              <li>Administrative tasks</li>
              <li>Customer interactions</li>
            </ul>
          </article>
          <article className="page-block">
            <h3>The result</h3>
            <ul className="page-list page-list--check">
              <li>Faster operations</li>
              <li>Reduced errors</li>
              <li>Improved productivity</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section
        tone="dark"
        index="06 / WHY SYNVANTA"
        eyebrow="Technology built around your success"
        title="Why choose Synvanta solutions?"
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

      <Section
        index="07 / OUR APPROACH"
        eyebrow="Discover → Design → Develop → Deploy → Improve"
        title="Our solution development approach."
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

      <PageCta
        index="08"
        eyebrow="Final call to action"
        title={<>Have a business challenge?<br /><em>Let's build the solution.</em></>}
        copy="Whether you need an enterprise system, AI automation platform, industry management solution, or custom software application, Synvanta Systems helps you transform ideas into intelligent technology."
        buttonLabel="Request a Consultation"
        buttonTo="/request-solution"
        secondaryLabel="Explore AI solutions"
        secondaryTo="/ai-solutions"
      />
    </div>
  );
}
