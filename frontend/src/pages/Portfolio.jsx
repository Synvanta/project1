import { PageHero, PageCta, Section, usePageMeta } from "../components/Page.jsx";

const approach = [
  ["The Challenge", "Understanding operational difficulties, business goals, and user requirements."],
  ["The Solution", "Designing and developing technology aligned with organizational needs."],
  ["The Technology", "Applying modern software engineering, AI capabilities, and digital innovation."],
  ["The Impact", "Delivering improvements in efficiency, visibility, automation, and user experience."],
];

const projects = [
  {
    name: "Healthcare Management System",
    tagline: "Connecting healthcare operations through intelligent technology",
    industry: "Healthcare",
    challenge: "Healthcare organizations often face challenges managing patient information, administrative processes, medical records, billing operations, and reporting requirements. Disconnected processes can reduce efficiency and limit access to important information.",
    solution: "Synvanta Systems developed an integrated healthcare management platform designed to connect essential healthcare operations.",
    items: ["Patient registration", "Electronic medical records", "Appointment management", "Billing and payments", "Pharmacy management", "Reporting dashboards"],
    impact: ["Improve operational efficiency", "Reduce administrative workload", "Access information faster", "Create better patient experiences", "Support informed decision-making"],
  },
  {
    name: "School Management System",
    tagline: "Digitizing education administration",
    industry: "Education",
    challenge: "Educational institutions often rely on manual processes for student records, fee management, academic reporting, and communication. These processes can become inefficient as institutions grow.",
    solution: "Synvanta developed a digital school management platform that connects academic and administrative operations.",
    items: ["Student information management", "Fee tracking", "Attendance management", "Examination management", "Reporting", "Communication tools"],
    impact: ["Improve administration", "Reduce paperwork", "Access information easily", "Improve communication", "Support better decision-making"],
  },
  {
    name: "SACCO Management System",
    tagline: "Empowering financial cooperatives through digital platforms",
    industry: "Finance & Cooperative Services",
    challenge: "SACCOs require reliable systems to manage members, savings, loans, transactions, and reporting. Manual processes can create inefficiencies and limited visibility.",
    solution: "Synvanta developed a SACCO management platform designed to streamline cooperative operations.",
    items: ["Member management", "Savings management", "Loan processing", "Transaction tracking", "Financial reporting", "Member services"],
    impact: ["Improve operational control", "Enhance member experience", "Increase reporting accuracy", "Digitize financial processes"],
  },
  {
    name: "ERP & Business Management Platform",
    tagline: "Connecting business operations through one intelligent system",
    industry: "Enterprise & SMEs",
    challenge: "Growing organizations often experience challenges caused by disconnected departments, manual processes, limited reporting, and poor operational visibility.",
    solution: "Synvanta develops ERP and business management solutions that connect:",
    items: ["Finance", "Inventory", "Sales", "Operations", "Reporting", "Customer management"],
    impact: ["Better visibility", "Improved efficiency", "Centralized information", "Smarter decisions"],
  },
  {
    name: "Inventory Management System",
    tagline: "Helping businesses gain control over their operations",
    industry: "Retail & Distribution",
    challenge: "Businesses often struggle with stock inaccuracies, poor inventory tracking, supplier management, and manual reporting.",
    solution: "Synvanta created inventory management solutions that provide:",
    items: ["Stock monitoring", "Supplier management", "Sales tracking", "Reporting dashboards", "Inventory insights"],
    future: "Future AI capabilities include demand forecasting, stock optimization, and intelligent recommendations.",
    impact: ["Better inventory control", "Reduced losses", "Improved planning", "Increased efficiency"],
  },
  {
    name: "Property Management System",
    tagline: "Simplifying real estate operations through technology",
    industry: "Real Estate",
    challenge: "Property businesses require efficient tools to manage tenants, payments, maintenance, and property records.",
    solution: "Synvanta developed property management solutions supporting:",
    items: ["Tenant management", "Rent tracking", "Property records", "Maintenance workflows", "Reporting"],
    impact: ["Improve visibility", "Reduce administration", "Manage properties effectively"],
  },
  {
    name: "AI-Powered Business Solutions",
    tagline: "Creating smarter ways of working",
    industry: "Multiple Sectors",
    challenge: "Organizations need better ways to automate processes, understand data, and improve customer interactions.",
    solution: "Synvanta integrates AI capabilities into business solutions through:",
    items: ["Intelligent automation", "AI assistants", "Data analytics", "Workflow optimization"],
    impact: ["Work more efficiently", "Make informed decisions", "Improve customer experiences"],
  },
];

const impact = [
  ["Operational Efficiency", "Reducing manual processes through automation."],
  ["Connected Systems", "Bringing people, processes, and information together."],
  ["Better Decisions", "Providing access to meaningful insights."],
  ["Digital Growth", "Creating platforms that support future expansion."],
];

export default function Portfolio() {
  usePageMeta(
    "Software Projects & Digital Solutions Portfolio | Synvanta Systems",
    "Explore Synvanta Systems portfolio of AI solutions, ERP systems, healthcare software, school management platforms, SACCO systems, and custom digital transformation projects.",
  );

  return (
    <div className="page">
      <PageHero
        eyebrow="Portfolio"
        title={<>Transforming ideas into intelligent digital solutions.</>}
        intro={[
          "Real challenges. Smart solutions. Meaningful impact. At Synvanta Systems, every solution begins with understanding a challenge and ends with creating measurable value.",
          "Our portfolio demonstrates how we combine artificial intelligence, software engineering, business analysis, user-centered design, and industry expertise to create digital solutions that help organizations operate smarter.",
        ]}
      />

      <Section
        index="01 / OUR APPROACH"
        eyebrow="Understanding problems. Designing solutions. Creating impact."
        title="Our approach to every project."
        intro="Technology is only valuable when it solves a real need. For every project, we focus on:"
        tone="dark"
      >
        <div className="page-cards">
          {approach.map(([title, copy], index) => (
            <article className="page-card" key={title}>
              <span className="page-card__index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      {projects.map((project, index) => (
        <Section
          key={project.name}
          tone={index % 2 === 0 ? "tint" : undefined}
          index={`0${index + 2} / FEATURED SOLUTION`}
          eyebrow={project.industry}
          title={project.name}
          intro={project.tagline}
        >
          <div className="page-blocks page-blocks--2">
            <article className="page-block">
              <p className="page-block__label" style={{ marginTop: 0 }}>The challenge</p>
              <p>{project.challenge}</p>
            </article>
            <article className="page-block">
              <p className="page-block__label" style={{ marginTop: 0 }}>The solution</p>
              <p>{project.solution}</p>
              <ul className="page-list">
                {project.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {project.future && <p style={{ marginTop: 16 }}>{project.future}</p>}
            </article>
          </div>
          <article className="page-block" style={{ marginTop: 44 }}>
            <p className="page-block__label" style={{ marginTop: 0 }}>The impact</p>
            <ul className="page-list page-list--check page-list--cols">
              {project.impact.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </Section>
      ))}

      <Section
        index="09 / TECHNOLOGY IMPACT"
        eyebrow="Building solutions that create value"
        title="Our technology impact."
        intro="Our projects focus on helping organizations achieve:"
        tone="dark"
      >
        <div className="page-cards">
          {impact.map(([title, copy], index) => (
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
        eyebrow="Start your project"
        title={<>Have a challenge<br /><em>we can help solve?</em></>}
        copy="Every organization has unique needs. Our team works with you to understand your goals and build the right technology solution. Let's transform your idea into an intelligent solution."
        buttonLabel="Discuss Your Project"
        buttonTo="/request-solution"
        secondaryLabel="See our solutions"
        secondaryTo="/solutions"
      />
    </div>
  );
}
