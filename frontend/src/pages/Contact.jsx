import { PageHero, PageCta, Section, usePageMeta } from "../components/Page.jsx";
import LeadForm from "../components/LeadForm.jsx";

const capabilities = [
  "Custom software development",
  "AI-powered business solutions",
  "ERP and management systems",
  "Business automation",
  "Website and e-commerce development",
  "Digital transformation strategy",
];

const nextSteps = [
  ["We Listen", "We learn about your organization, goals, and challenges."],
  ["We Analyze", "We identify opportunities where technology can create value."],
  ["We Recommend", "We propose the right solution approach."],
  ["We Build", "We transform ideas into intelligent digital solutions."],
];

const reasons = [
  ["We Solve Real Problems", "We focus on business outcomes, not just technology features."],
  ["We Build Custom Solutions", "Every organization has unique requirements."],
  ["We Use Intelligent Technology", "We combine AI and software engineering to create smarter systems."],
  ["We Support Long-Term Growth", "Our partnership continues beyond implementation."],
];

const quickBuild = ["Smarter operations", "Connected systems", "Better digital experiences"];

export default function Contact() {
  usePageMeta(
    "Contact Synvanta Systems | AI Software & Digital Transformation Experts",
    "Contact Synvanta Systems for custom software development, AI solutions, ERP systems, business automation, and digital transformation services designed around your organization.",
  );

  return (
    <div className="page">
      <PageHero
        eyebrow="Contact Synvanta Systems"
        title={<>Let's build your intelligent digital future.</>}
        intro={[
          "Every great technology solution begins with a conversation. Whether you are looking to automate operations, develop a custom software solution, implement an enterprise system, integrate AI, or build a digital platform, our team is ready to help.",
          "Tell us about your goals, challenges, and ideas — and together we will explore the right solution.",
        ]}
      />

      <Section
        index="01 / START A CONVERSATION"
        eyebrow="Tell us what you want to achieve"
        title="We focus on understanding your business before recommending technology."
        intro="We can help you with:"
        tone="dark"
      >
        <ul className="page-list page-list--check page-list--cols">
          {capabilities.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Section>

      <Section
        index="02 / GET IN TOUCH"
        eyebrow="Contact information"
        title="Get in touch."
      >
        <div className="contact-grid">
          <article className="contact-card">
            <span>Email</span>
            <strong>hello@synvantasystems.com</strong>
            <p>Replace with your official email</p>
          </article>
          <article className="contact-card">
            <span>Phone</span>
            <strong>+XXX XXX XXX</strong>
            <p>Replace with official contacts</p>
          </article>
          <article className="contact-card">
            <span>Location</span>
            <strong>Your Business Location</strong>
            <p>Replace with your address</p>
          </article>
          <article className="contact-card">
            <span>Working Hours</span>
            <strong>Monday – Friday</strong>
            <p>8:00 AM – 5:00 PM</p>
          </article>
        </div>
      </Section>

      <Section
        tone="tint"
        index="03 / REQUEST A CONSULTATION"
        eyebrow="Discuss your project with our team"
        title="Request a consultation."
        intro="Complete the form below and our team will get back to you."
      >
        <LeadForm id="contact" buttonLabel="Send Message" />
      </Section>

      <Section
        index="04 / WHAT HAPPENS NEXT"
        eyebrow="Our simple engagement process"
        title="What happens next?"
        tone="dark"
      >
        <div className="page-flow">
          {nextSteps.map(([title, copy]) => (
            <article className="page-flow__item" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        index="05 / WHY ORGANIZATIONS CONTACT US"
        title="Why organizations contact Synvanta Systems."
        intro="Technology expertise with business understanding."
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
        index="06 / QUICK CONTACT"
        eyebrow="For visitors who are ready"
        title="Have a project in mind?"
        intro="Let's discuss how Synvanta Systems can help you build:"
      >
        <ul className="page-list page-list--cols">
          {quickBuild.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="page-hero__actions" style={{ marginTop: 36 }}>
          <a className="btn-primary" href="mailto:hello@synvantasystems.com">Book a Consultation <span aria-hidden="true">↗</span></a>
          <a className="btn-outline" href="mailto:hello@synvantasystems.com">Email Our Team <span aria-hidden="true">↗</span></a>
        </div>
      </Section>

      <PageCta
        index="07"
        eyebrow="Final contact banner"
        title={<>Your next digital transformation<br /><em>starts here.</em></>}
        copy="At Synvanta Systems, we help organizations move from ideas and challenges to intelligent technology solutions. Let's build systems that connect your business."
        buttonLabel="Start Your Digital Transformation"
        buttonTo="/request-solution"
        secondaryLabel="View our solutions"
        secondaryTo="/solutions"
      />
    </div>
  );
}
