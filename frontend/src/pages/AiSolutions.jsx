import { PageHero, PageCta, Section, usePageMeta } from "../components/Page.jsx";

const benefits = [
  "Automate repetitive operations",
  "Improve decision-making",
  "Extract insights from data",
  "Enhance customer experiences",
  "Increase productivity",
  "Build smarter digital platforms",
];

const automationItems = [
  "Intelligent workflow automation",
  "Document processing automation",
  "Automated reporting",
  "Smart notifications",
  "Process optimization",
  "Task automation",
];

const analyticsItems = [
  "Intelligent dashboards",
  "Business performance analysis",
  "Data visualization",
  "Trend identification",
  "Predictive insights",
  "Decision-support systems",
];

const assistantItems = [
  "Customer support assistants",
  "Website chatbots",
  "Internal knowledge assistants",
  "Appointment assistants",
  "Automated inquiry systems",
];

const enhancedSystems = [
  ["AI-Enhanced ERP Systems", "Helping organizations gain deeper operational insights through:", ["Intelligent reporting", "Performance analysis", "Automated recommendations", "Business forecasting"]],
  ["AI Inventory Solutions", "Helping businesses optimize inventory through:", ["Demand forecasting", "Stock analysis", "Inventory recommendations", "Sales pattern insights"]],
  ["AI Healthcare Solutions", "Supporting healthcare organizations through:", ["Automated reporting", "Data analysis support", "Workflow optimization", "Operational insights"]],
  ["AI Education Solutions", "Helping institutions improve through:", ["Intelligent administration", "Learning analytics", "Automated communication", "Data-driven insights"]],
  ["AI Property Management Solutions", "Helping property organizations improve:", ["Tenant insights", "Maintenance prediction", "Revenue analysis", "Operational planning"]],
];

const industries = [
  ["Healthcare", ["Administrative efficiency", "Data analysis", "Patient communication", "Operational decision-making"]],
  ["Education", ["Automated administration", "Student insights", "Personalized experiences", "Institutional reporting"]],
  ["Finance & SACCOs", ["Data analysis", "Member insights", "Operational efficiency", "Reporting"]],
  ["Retail & E-Commerce", ["Customer recommendations", "Sales forecasting", "Inventory optimization", "Customer engagement"]],
  ["Real Estate", ["Property analytics", "Maintenance planning", "Tenant insights", "Revenue optimization"]],
];

const approach = [
  ["Discover", "Identify business challenges and AI opportunities."],
  ["Analyze", "Evaluate processes, data, and technology readiness."],
  ["Design", "Create an AI strategy aligned with business objectives."],
  ["Implement", "Integrate intelligent solutions into operations."],
  ["Optimize", "Improve performance and expand capabilities over time."],
];

const whyChoose = [
  ["AI With Business Purpose", "We focus on practical applications that solve real organizational challenges."],
  ["Human-Centered AI", "We create solutions that empower people and improve workflows."],
  ["Integrated Technology Approach", "We combine AI with custom software development, enterprise systems, data solutions, and digital platforms."],
  ["Future-Ready Innovation", "We help organizations prepare for a rapidly changing digital landscape."],
];

export default function AiSolutions() {
  usePageMeta(
    "AI Solutions & Business Automation Services | Synvanta Systems",
    "Synvanta Systems delivers AI solutions, intelligent automation, AI integration, analytics, and AI-powered business systems that help organizations transform operations and grow.",
  );

  return (
    <div className="page">
      <PageHero
        eyebrow="AI Solutions"
        title={<>Intelligent technology for the future of business.</>}
        intro={[
          "Transforming organizations through AI-augmented innovation. Artificial intelligence is changing how organizations operate, make decisions, and create value.",
          "At Synvanta Systems, we help businesses and institutions adopt practical AI solutions that improve efficiency, automate processes, and unlock new possibilities. By combining artificial intelligence, software engineering, and business expertise, we develop intelligent systems that help organizations work smarter and achieve more.",
        ]}
      />

      <Section
        index="01 / AI-AUGMENTED TRANSFORMATION"
        eyebrow="Where human expertise meets artificial intelligence"
        title="AI is not replacing business expertise — it is enhancing what organizations can achieve."
        intro="We believe artificial intelligence is most powerful when combined with human creativity, business understanding, and strategic thinking. Our AI-augmented approach helps organizations:"
        tone="dark"
      >
        <ul className="page-list page-list--check page-list--cols">
          {benefits.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Section>

      <Section
        index="02 / AI BUSINESS AUTOMATION"
        eyebrow="Streamlining operations through intelligent workflows"
        title="AI business automation."
        intro="Many organizations spend valuable time managing repetitive manual processes. Synvanta Systems helps businesses automate workflows using intelligent technologies that improve speed, accuracy, and efficiency."
      >
        <div className="page-blocks page-blocks--2">
          <article className="page-block">
            <h3>Our AI automation solutions include</h3>
            <ul className="page-list">
              {automationItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="page-block">
            <h3>Business benefits</h3>
            <ul className="page-list page-list--check">
              <li>Reduced operational workload</li>
              <li>Faster execution</li>
              <li>Improved accuracy</li>
              <li>Increased productivity</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section
        tone="tint"
        index="03 / AI BUSINESS INTELLIGENCE"
        eyebrow="Turning data into actionable insights"
        title="AI-powered business intelligence."
        intro="Organizations generate valuable data every day. The challenge is transforming that data into meaningful decisions. Synvanta Systems develops intelligent analytics solutions that help organizations understand performance and identify opportunities."
      >
        <div className="page-blocks page-blocks--2">
          <article className="page-block">
            <h3>Our AI analytics capabilities include</h3>
            <ul className="page-list">
              {analyticsItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="page-block">
            <h3>Helping organizations</h3>
            <ul className="page-list page-list--check">
              <li>Understand their operations</li>
              <li>Identify patterns and opportunities</li>
              <li>Improve strategic planning</li>
              <li>Make data-driven decisions</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section
        index="04 / AI ASSISTANTS"
        eyebrow="Creating smarter digital interactions"
        title="AI assistants & intelligent chatbots."
        intro="Customers and employees increasingly expect faster access to information. We develop AI-powered assistants that improve communication and service delivery."
      >
        <div className="page-blocks page-blocks--2">
          <article className="page-block">
            <h3>Applications include</h3>
            <ul className="page-list">
              {assistantItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="page-block">
            <h3>Benefits</h3>
            <ul className="page-list page-list--check">
              <li>24/7 availability</li>
              <li>Faster responses</li>
              <li>Improved user experiences</li>
              <li>Reduced support workload</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section
        tone="dark"
        index="05 / AI-ENHANCED ENTERPRISE SYSTEMS"
        eyebrow="Making business platforms smarter"
        title="Traditional software manages information. Intelligent software helps organizations understand information and take action."
        intro="Synvanta Systems enhances business platforms with AI capabilities."
      >
        <div className="page-cards">
          {enhancedSystems.map(([title, copy, items]) => (
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
        index="06 / GENERATIVE AI & INTEGRATION"
        eyebrow="Applying modern AI technologies to real business needs"
        title="Generative AI solutions."
        intro="Generative AI is creating new opportunities for organizations to improve productivity and innovation. Synvanta Systems helps businesses explore practical applications including:"
      >
        <ul className="page-list page-list--cols">
          <li>AI knowledge assistants</li>
          <li>Intelligent document creation</li>
          <li>Automated content generation</li>
          <li>Internal AI tools</li>
          <li>AI-powered search solutions</li>
        </ul>

        <div className="page-block" style={{ marginTop: 60 }}>
          <h3>AI integration services — bringing intelligence into existing systems</h3>
          <p>
            Many organizations already have digital platforms but want to introduce AI capabilities. Synvanta Systems
            helps integrate AI into existing technology environments through:
          </p>
          <ul className="page-list page-list--cols">
            <li>AI system integration</li>
            <li>Intelligent APIs</li>
            <li>Workflow enhancement</li>
            <li>Data intelligence solutions</li>
            <li>Automation improvements</li>
          </ul>
        </div>
      </Section>

      <Section
        tone="tint"
        index="07 / AI ACROSS INDUSTRIES"
        eyebrow="AI solutions across industries"
        title="Built for the way your industry works."
      >
        <div className="page-cards">
          {industries.map(([title, items]) => (
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
        index="08 / OUR AI APPROACH"
        eyebrow="Practical AI. Measurable impact."
        title="Our AI implementation approach."
        intro="Successful AI adoption requires more than technology. It requires understanding where AI can create real value."
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
        index="09 / WHY SYNVANTA AI"
        eyebrow="AI with business purpose"
        title="Why choose Synvanta AI solutions?"
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
        index="10"
        eyebrow="Final call to action"
        title={<>Ready to unlock<br /><em>the power of AI?</em></>}
        copy="Artificial intelligence is no longer only a future possibility. It is a competitive advantage for organizations ready to innovate. Build your intelligent future with Synvanta Systems."
        buttonLabel="Explore AI Solutions"
        buttonTo="/request-solution"
        secondaryLabel="View our portfolio"
        secondaryTo="/portfolio"
      />
    </div>
  );
}
