import { PageHero, PageCta, Section, usePageMeta } from "../components/Page.jsx";

const industryBlocks = [
  {
    id: "healthcare",
    name: "Healthcare",
    title: "Transforming healthcare operations through intelligent digital solutions",
    copy: "Healthcare organizations require secure, reliable, and efficient systems to manage patient care, administration, and operational processes. Synvanta Systems develops healthcare software solutions and hospital management systems that help healthcare providers improve efficiency, accessibility, and service delivery.",
    label: "Healthcare solutions include",
    items: ["Hospital management systems", "Patient management platforms", "Electronic medical records solutions", "Appointment scheduling systems", "Billing and payment management", "Pharmacy management systems", "Healthcare reporting and analytics"],
    benefits: ["Improve operational efficiency", "Reduce manual processes", "Access information faster", "Improve patient experiences", "Support better decision-making"],
    benefitLabel: "Helping healthcare organizations",
  },
  {
    id: "education",
    name: "Education",
    title: "Empowering institutions through digital transformation",
    copy: "Educational institutions need technology that simplifies administration while improving communication between students, parents, teachers, and administrators. Synvanta Systems develops school management software and education technology solutions that help institutions operate more effectively.",
    label: "Education solutions include",
    items: ["School management systems", "Student information systems", "Fee management platforms", "Attendance management", "Examination management", "Academic reporting", "Parent communication platforms"],
    benefits: ["Improve administrative efficiency", "Reduce paperwork", "Strengthen communication", "Improve access to information", "Create connected learning environments"],
    benefitLabel: "Helping institutions",
  },
  {
    id: "finance",
    name: "Finance & SACCOs",
    title: "Building secure digital platforms for financial organizations",
    copy: "Financial institutions require reliable technology to manage members, transactions, and operational processes securely. Synvanta Systems develops SACCO management systems and financial technology solutions that improve efficiency, transparency, and service delivery.",
    label: "Financial solutions include",
    items: ["SACCO management software", "Member management systems", "Savings management", "Loan management", "Transaction tracking", "Financial reporting", "Digital member services"],
    benefits: ["Improve operational control", "Enhance member experience", "Automate financial processes", "Strengthen reporting capabilities"],
    benefitLabel: "Helping financial organizations",
  },
  {
    id: "real-estate",
    name: "Real Estate & Property Management",
    title: "Simplifying property operations through connected systems",
    copy: "Real estate organizations require accurate information and efficient processes to manage properties, tenants, payments, and maintenance. Synvanta Systems develops property management software and real estate technology solutions that simplify daily operations.",
    label: "Property solutions include",
    items: ["Property management systems", "Tenant management", "Rent collection platforms", "Lease management", "Maintenance tracking", "Property reporting"],
    benefits: ["Improve property visibility", "Simplify administration", "Enhance tenant management", "Improve financial tracking"],
    benefitLabel: "Helping property businesses",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    title: "Helping businesses thrive in the digital marketplace",
    copy: "Retail businesses require connected systems that support sales, inventory, customer engagement, and online growth. Synvanta Systems develops retail software solutions and e-commerce platforms that help businesses operate efficiently and compete digitally.",
    label: "Retail solutions include",
    items: ["E-commerce platforms", "Inventory management systems", "Point-of-sale integrations", "Customer management solutions", "Sales reporting", "Online business platforms"],
    benefits: ["Expand digital presence", "Improve customer experiences", "Manage operations efficiently", "Increase business visibility"],
    benefitLabel: "Helping businesses",
  },
  {
    id: "logistics",
    name: "Logistics & Delivery",
    title: "Connecting operations through intelligent logistics solutions",
    copy: "Efficient logistics requires visibility, coordination, and reliable information flow. Synvanta Systems develops logistics management systems and delivery platforms that connect businesses, teams, and customers.",
    label: "Logistics solutions include",
    items: ["Delivery management systems", "Order tracking platforms", "Driver management", "Fleet management solutions", "Customer notifications", "Operational reporting"],
    benefits: ["Improve delivery efficiency", "Reduce operational delays", "Increase visibility", "Enhance customer satisfaction"],
    benefitLabel: "Helping logistics organizations",
  },
];

export default function Industries() {
  usePageMeta(
    "Industry Software Solutions | Healthcare, Education, SACCO & Business Systems",
    "Synvanta Systems provides industry-specific software solutions including hospital management systems, school management software, SACCO platforms, property management systems, and business automation solutions.",
  );

  return (
    <div className="page">
      <PageHero
        eyebrow="Industries We Serve"
        title={<>Intelligent technology solutions built around your industry.</>}
        intro={[
          "Every industry operates differently. Each organization has unique processes, challenges, and goals.",
          "At Synvanta Systems, we design and develop AI-augmented software solutions and digital platforms tailored to the specific needs of different industries. By combining technology expertise, business understanding, and industry-focused solutions, we help organizations automate operations, improve efficiency, and create connected digital ecosystems.",
        ]}
      />

      {industryBlocks.map((block, index) => (
        <Section
          key={block.id}
          id={block.id}
          tone={index % 2 === 1 ? "tint" : undefined}
          index={`0${index + 1} / ${block.name.toUpperCase()}`}
          eyebrow={block.name}
          title={block.title}
          intro={block.copy}
        >
          <div className="page-blocks page-blocks--2">
            <article className="page-block">
              <p className="page-block__label" style={{ marginTop: 0 }}>{block.label}</p>
              <ul className="page-list">
                {block.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="page-block">
              <p className="page-block__label" style={{ marginTop: 0 }}>{block.benefitLabel}</p>
              <ul className="page-list page-list--check">
                {block.benefits.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </Section>
      ))}

      <Section
        tone="dark"
        index="07 / ENTERPRISE & SMEs"
        eyebrow="Digital solutions for growing and established businesses"
        title="Organizations of all sizes need technology that improves productivity and supports growth."
      >
        <div className="page-blocks page-blocks--2">
          <article className="page-block">
            <h3>Enterprise organizations</h3>
            <p>Synvanta Systems helps enterprises transform operations through:</p>
            <ul className="page-list">
              <li>ERP solutions</li>
              <li>Business automation</li>
              <li>Data systems</li>
              <li>Custom software platforms</li>
              <li>Digital transformation strategies</li>
            </ul>
          </article>
          <article className="page-block">
            <h3>Small & medium businesses (SMEs)</h3>
            <p>Small and medium businesses often face challenges including manual processes, limited operational visibility, poor information management, and inefficient workflows. Synvanta Systems provides scalable solutions that help SMEs:</p>
            <ul className="page-list page-list--check">
              <li>Automate operations</li>
              <li>Improve productivity</li>
              <li>Manage resources effectively</li>
              <li>Prepare for growth</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section
        index="08 / WHY INDUSTRY FOCUS"
        eyebrow="Technology designed around real business needs"
        title="Why industry-focused solutions matter."
        intro="Successful digital transformation requires more than technology. It requires understanding how organizations operate, what challenges they face, and what outcomes they need."
      >
        <div className="page-cards">
          <article className="page-card">
            <h3>Industry Understanding</h3>
            <p>Solutions designed around sector-specific requirements.</p>
          </article>
          <article className="page-card">
            <h3>Technology Expertise</h3>
            <p>Modern software engineering and AI capabilities.</p>
          </article>
          <article className="page-card">
            <h3>Business Thinking</h3>
            <p>Technology aligned with measurable organizational goals.</p>
          </article>
        </div>
      </Section>

      <Section
        tone="tint"
        index="09 / OUR APPROACH"
        eyebrow="Understand. Design. Build. Transform."
        title="Our approach."
      >
        <div className="page-steps">
          {[
            ["Understand", "We learn your industry, processes, and challenges."],
            ["Design", "We create solutions aligned with your operational goals."],
            ["Build", "We develop intelligent systems using modern technologies."],
            ["Transform", "We help organizations achieve lasting digital improvement."],
          ].map(([title, copy], index) => (
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
        index="10"
        eyebrow="Final call to action"
        title={<>Your industry has unique challenges.<br /><em>Your technology should too.</em></>}
        copy="Whether you are a healthcare provider, educational institution, financial organization, property company, retailer, or enterprise, Synvanta Systems helps you build intelligent technology solutions designed for your reality."
        buttonLabel="Discuss Your Industry Solution"
        buttonTo="/request-solution"
        secondaryLabel="View our solutions"
        secondaryTo="/solutions"
      />
    </div>
  );
}
