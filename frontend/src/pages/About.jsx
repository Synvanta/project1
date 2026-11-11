import { PageHero, PageCta, Section, usePageMeta } from "../components/Page.jsx";

const beliefs = [
  ["Innovation Should Be Practical", "We focus on technologies that create measurable improvements for organizations."],
  ["Intelligence Should Be Accessible", "Artificial intelligence should help organizations of all sizes work smarter."],
  ["Solutions Should Be Human-Centered", "Technology succeeds when people can easily understand, adopt, and benefit from it."],
  ["Partnerships Create Better Outcomes", "The best solutions are built through collaboration and shared understanding."],
];

const values = [
  ["Innovation", "We continuously explore emerging technologies and creative approaches to deliver better solutions."],
  ["Excellence", "We are committed to quality, reliability, and delivering solutions that create lasting value."],
  ["Integrity", "We build relationships through transparency, responsibility, and trust."],
  ["Collaboration", "We work closely with clients to create solutions aligned with their goals."],
  ["Continuous Improvement", "We continuously learn, adapt, and improve as technology evolves."],
];

const expertise = [
  {
    title: "Software Engineering",
    copy: "Building secure, scalable, and reliable digital platforms.",
    label: "Capabilities",
    items: ["Custom software development", "Enterprise applications", "Web platforms", "Mobile applications", "System integrations"],
  },
  {
    title: "Artificial Intelligence",
    copy: "Creating smarter solutions through intelligent technologies.",
    label: "Capabilities",
    items: ["AI automation", "Intelligent analytics", "AI assistants", "Workflow optimization", "Generative AI solutions"],
  },
  {
    title: "Business Systems",
    copy: "Developing platforms that help organizations manage critical operations.",
    label: "Solutions include",
    items: ["ERP systems", "Inventory management systems", "Hospital management systems", "School management systems", "SACCO management systems", "Property management systems"],
  },
  {
    title: "Digital Experiences",
    copy: "Creating digital platforms that connect organizations with their audiences.",
    label: "Capabilities",
    items: ["Website development", "E-commerce solutions", "UI/UX design", "Branding", "Digital creative services"],
  },
];

const reasons = [
  ["We Understand Business Challenges", "We start by understanding your operations before recommending technology solutions."],
  ["We Build Custom Solutions", "We create systems designed around your unique processes and objectives."],
  ["We Embrace Intelligent Technology", "We integrate AI and automation to help organizations operate smarter."],
  ["We Build for the Future", "Our solutions are designed to scale as your organization grows."],
  ["We Support Long-Term Success", "Our partnership continues beyond implementation through improvement and support."],
];

export default function About() {
  usePageMeta(
    "About Synvanta Systems | AI Digital Transformation & Software Solutions",
    "Learn about Synvanta Systems, an AI-augmented digital transformation company delivering custom software development, intelligent business systems, automation, and digital solutions.",
  );

  return (
    <div className="page">
      <PageHero
        eyebrow="About Synvanta Systems"
        title={<>Building intelligent technology that connects businesses, people, and possibilities.</>}
        intro={[
          "At Synvanta Systems, we believe technology should do more than automate processes. It should create opportunities, improve decision-making, and empower organizations to achieve more.",
          "We are an AI-augmented digital transformation company specializing in custom software development, enterprise systems, intelligent automation, and digital experiences. By combining artificial intelligence, software engineering, business strategy, and creative innovation, we help organizations transform challenges into scalable technology solutions.",
        ]}
      />

      <Section
        index="01 / WHO WE ARE"
        eyebrow="Your partner in intelligent digital transformation"
        title="More than software development."
        intro="Modern organizations operate in an increasingly connected and competitive environment. Businesses need more than traditional software — they need intelligent systems that understand their operations, connect their processes, and support better decisions."
      >
        <p className="page-lede">Synvanta Systems helps organizations embrace digital transformation through:</p>
        <ul className="page-list page-list--cols">
          <li>Custom software solutions</li>
          <li>Enterprise management platforms</li>
          <li>AI-powered business automation</li>
          <li>Industry-specific systems</li>
          <li>Digital experiences</li>
        </ul>
        <p className="page-lede" style={{ marginTop: 30 }}>
          We design technology around the way organizations work, enabling them to operate smarter, respond faster, and grow sustainably.
        </p>
      </Section>

      <Section
        tone="tint"
        index="02 / OUR STORY"
        eyebrow="From technology solutions to intelligent business transformation"
        title="Practical technology, aligned with real business needs."
        intro="Synvanta Systems was founded on the belief that technology should be practical, accessible, and aligned with real business needs. Many organizations face challenges caused by disconnected processes, manual workflows, limited visibility, and outdated systems. We saw an opportunity to bridge the gap between business challenges and intelligent technology solutions."
      >
        <p className="page-lede">Our approach is simple: understand the challenge, design the solution, build the technology, create impact.</p>
        <p className="page-block__label" style={{ marginTop: 34 }}>Today, Synvanta Systems connects</p>
        <ul className="page-list page-list--cols">
          <li>People with information</li>
          <li>Teams with workflows</li>
          <li>Businesses with customers</li>
          <li>Data with decisions</li>
        </ul>
      </Section>

      <Section
        index="03 / MISSION & VISION"
        eyebrow="Our mission"
        title="Empowering organizations through intelligent technology."
        intro="Our mission is to help organizations improve efficiency, automate operations, and unlock new opportunities through innovative software solutions and AI-driven technologies."
      >
        <div className="page-blocks page-blocks--2">
          <article className="page-card">
            <span className="page-card__index">MISSION</span>
            <h3>We create digital solutions that enable organizations to</h3>
            <ul className="page-list">
              <li>Work more efficiently</li>
              <li>Make informed decisions</li>
              <li>Improve customer experiences</li>
              <li>Adapt to changing business environments</li>
            </ul>
          </article>
          <article className="page-card">
            <span className="page-card__index">VISION</span>
            <h3>A future powered by connected and intelligent systems.</h3>
            <p>
              We aim to become a trusted digital transformation partner for organizations seeking to harness the power of
              artificial intelligence, automation, and modern software solutions — a future where every organization can
              access intelligent technology that simplifies operations, drives innovation, and creates meaningful growth.
            </p>
          </article>
        </div>
      </Section>

      <Section
        tone="dark"
        index="04 / WHAT WE BELIEVE"
        eyebrow="Technology should create real value"
        title="Technology is not valuable because it is advanced. It is valuable because it solves problems and creates opportunities."
        intro="At Synvanta Systems, we believe:"
      >
        <div className="page-cards">
          {beliefs.map(([title, copy], index) => (
            <article className="page-card" key={title}>
              <span className="page-card__index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        index="05 / CORE VALUES"
        eyebrow="Our core values"
        title="The principles behind everything we build."
      >
        <div className="page-cards">
          {values.map(([title, copy], index) => (
            <article className="page-card" key={title}>
              <span className="page-card__index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="tint"
        index="06 / OUR EXPERTISE"
        eyebrow="Combining technology, intelligence, and business understanding"
        title="Our multidisciplinary capabilities."
      >
        <div className="page-cards">
          {expertise.map((group) => (
            <article className="page-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.copy}</p>
              <p className="page-card__label">{group.label}:</p>
              <ul className="page-list">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        index="07 / WHY CHOOSE US"
        eyebrow="More than a software provider — a technology partner"
        title="Why choose Synvanta Systems?"
        intro="Organizations choose Synvanta Systems because we combine technical expertise with business understanding."
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

      <PageCta
        index="08"
        eyebrow="Final call to action"
        title={<>Ready to build your<br /><em>intelligent future?</em></>}
        copy="Every organization has unique challenges. The right technology can transform those challenges into opportunities. Let's create technology that moves your organization forward."
        buttonLabel="Start Your Digital Transformation"
        buttonTo="/request-solution"
        secondaryLabel="Contact our team"
        secondaryTo="/contact"
      />
    </div>
  );
}
