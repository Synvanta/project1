import React, { useEffect, useRef, useState } from "react";
import { usePageMeta } from "../components/Page.jsx";

const FRAME_COUNT = 300;
const framePath = (index) =>
  `/jpg%20sequence/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

const industries = [
  ["Healthcare", "Intelligent healthcare systems that improve patient management, administration, reporting, and operational efficiency."],
  ["Education", "Digital platforms that help schools manage students, academic processes, communication, and administration."],
  ["Finance & SACCOs", "Secure solutions for member management, financial operations, reporting, and digital services."],
  ["Real estate", "Connected property systems that simplify tenant management, payments, maintenance, and reporting."],
  ["Retail & e-commerce", "Digital platforms for managing customers, sales, inventory, and online growth."],
  ["Logistics", "Technology that improves delivery management, tracking, coordination, and operational visibility."],
];

const reasons = [
  ["01", "Business-focused", "We understand your challenges, processes, and goals before designing the right technology."],
  ["02", "AI-augmented", "We use artificial intelligence to create smarter systems and improve business outcomes."],
  ["03", "Built for you", "Your technology is designed around your organization's needs, not forced into a generic template."],
  ["04", "Ready to grow", "We build solutions that adapt as your organization and its requirements change."],
  ["05", "Here for the long term", "Our partnership continues through improvement, optimization, and technical support."],
];

const processes = [
  ["01", "Discover", "We understand your objectives, challenges, workflows, and technology requirements."],
  ["02", "Design", "We create a solution strategy aligned with your business goals."],
  ["03", "Develop", "We build secure, scalable, and intelligent digital solutions."],
  ["04", "Deploy", "We implement, support, and continuously improve your technology."],
];

const solutions = [
  {
    number: "01",
    title: "Intelligent business systems",
    description: "Custom management systems that improve efficiency, increase visibility, and help teams make better decisions.",
    items: ["ERP systems", "Inventory management", "Hospital and school systems", "SACCO and property platforms", "Logistics management"],
  },
  {
    number: "02",
    title: "AI & intelligent automation",
    description: "Practical AI capabilities that help organizations automate repetitive work, understand information, and serve customers better.",
    items: ["AI-powered automation", "Intelligent analytics", "AI assistants", "Workflow optimization", "Generative AI solutions"],
  },
  {
    number: "03",
    title: "Digital experiences",
    description: "Useful, connected digital platforms that create a better experience for your customers and your team.",
    items: ["Corporate websites", "E-commerce platforms", "Web applications", "Customer portals", "UI/UX and digital identity"],
  },
];

const demoSystems = [
  ["Inventory", "≡ƒôª"],
  ["HR", "≡ƒæÑ"],
  ["Delivery", "≡ƒÜÜ"],
  ["E-Commerce", "≡ƒ¢Æ"],
  ["Assistant", "≡ƒñû"],
  ["PMS", "≡ƒÅó"],
  ["Garbage", "≡ƒÜ¢"],
  ["Finance", "≡ƒÆ░"],
];

const storyAnnotations = [
  ["01", "CONNECTED BUSINESS SYSTEMS", "Bring your operations together.", "Custom enterprise systems connect your people, processes, and information, so your organization can work with greater clarity."],
  ["02", "INTELLIGENT AUTOMATION", "Make room for better work.", "AI-powered automation handles repetitive workflows, helps teams understand data, and supports faster decisions."],
  ["03", "DIGITAL EXPERIENCES", "Create better ways to connect.", "From web applications to customer portals and e-commerce, we build useful digital experiences around the people who use them."],
  ["04", "BUILT FOR YOUR INDUSTRY", "Technology shaped around real work.", "We design solutions for healthcare, education, finance and SACCOs, real estate, retail, and logistics."],
  ["05", "FROM CHALLENGE TO SOLUTION", "A clear path from idea to impact.", "Discover the need. Design the right approach. Develop a secure solution. Deploy it with continued support."],
  ["06", "A PARTNER FOR WHAT'S NEXT", "Built around your goals. Ready to grow.", "We combine business understanding, custom engineering, and ongoing improvement to help your organization move forward."],
];

const annotationEntrances = [
  [-82, 0, -24, 0.92],
  [82, 0, -24, 0.92],
  [0, -72, -24, 0.92],
  [0, 72, -24, 0.92],
  [0, 0, -120, 0.84],
  [-66, 52, -28, 0.92],
];

const smoothStep = (value) => {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
};

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}

export default function Home() {
  usePageMeta(
    "Synvanta Systems | AI Software Solutions & Digital Transformation Company",
    "Synvanta Systems builds AI-augmented software solutions, ERP systems, business automation platforms, and digital experiences that help organizations operate smarter, connect processes, and grow.",
  );
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const copyRef = useRef(null);
  const brandRef = useRef(null);
  const noteRef = useRef(null);
  const annotationRefs = useRef([]);
  const progressRefs = useRef([]);
  const demoDialogRef = useRef(null);
  const [loadStatus, setLoadStatus] = useState("Loading sequenceΓÇª");
  const [selectedDemos, setSelectedDemos] = useState([]);
  const [demoStatus, setDemoStatus] = useState("");
  const [demoSubmitting, setDemoSubmitting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { alpha: false, desynchronized: true });
    const frames = new Array(FRAME_COUNT);
    let loaded = 0;
    let currentFrame = 0;
    let frameReady = false;
    let scheduled = false;
    let disposed = false;

    function drawFrame(index) {
      const frame = frames[index];
      if (!frame || !frameReady) return;
      currentFrame = index;
      const scale = Math.max(canvas.width / frame.naturalWidth, canvas.height / frame.naturalHeight);
      const width = frame.naturalWidth * scale;
      const height = frame.naturalHeight * scale;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(frame, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
    }

    function sizeCanvas() {
      const rect = stage.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width * ratio));
      const height = Math.max(1, Math.round(rect.height * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        drawFrame(currentFrame);
      }
    }

    function update() {
      scheduled = false;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - stage.offsetHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / travel));
      drawFrame(Math.min(FRAME_COUNT - 1, Math.round(progress * (FRAME_COUNT - 1))));

      const fade = Math.max(0, Math.min(1, progress / 0.12));
      const eased = fade * fade * (3 - 2 * fade);
      const verticalOffset = window.matchMedia("(max-width: 700px)").matches ? 0 : -50 - eased * 6;
      const copy = copyRef.current;
      copy.style.opacity = String(1 - eased);
      copy.style.transform = `translate3d(0, ${verticalOffset}%, ${eased * 180}px) scale(${1 - eased * 0.08})`;
      copy.style.pointerEvents = eased > 0.98 ? "none" : "auto";
      const brand = brandRef.current;
      brand.style.opacity = String(1 - eased);
      brand.style.transform = `translate3d(0, ${-eased * 8}px, ${eased * 90}px) scale(${1 - eased * 0.08})`;
      brand.style.pointerEvents = eased > 0.98 ? "none" : "auto";
      noteRef.current.style.opacity = String(1 - Math.min(1, progress / 0.035));

      storyAnnotations.forEach((_, index) => {
        const start = 0.14 + index * 0.14;
        const end = Math.min(0.99, start + 0.17);
        const fadeIn = smoothStep((progress - start) / 0.08);
        const fadeOut = 1 - smoothStep((progress - (end - 0.08)) / 0.08);
        const opacity = Math.min(fadeIn, fadeOut);
        const [x, y, z, scale] = annotationEntrances[index];
        const xOffset = (1 - opacity) * x;
        const yOffset = (1 - opacity) * y;
        const anchoredX = index === 4 ? `calc(-50% + ${xOffset}px)` : `${xOffset}px`;
        const anchoredY = index === 4 ? `calc(-50% + ${yOffset}px)` : `${yOffset}px`;
        const panel = annotationRefs.current[index];
        if (panel) {
          panel.style.opacity = String(opacity);
          panel.style.transform = `translate3d(${anchoredX}, ${anchoredY}, ${(1 - opacity) * z}px) scale(${1 - (1 - opacity) * (1 - scale)})`;
          panel.setAttribute("aria-hidden", opacity < 0.5 ? "true" : "false");
        }
        const marker = progressRefs.current[index];
        if (marker) {
          marker.style.opacity = String(0.38 + opacity * 0.62);
          marker.style.width = opacity > 0.1 ? "24px" : "13px";
        }
      });
    }

    function requestUpdate() {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    }

    function loadFrame(index) {
      const image = new Image();
      image.decoding = "async";
      image.onload = async () => {
        try { await image.decode(); } catch { /* onload confirms the image is drawable */ }
        if (disposed) return;
        frames[index] = image;
        loaded += 1;
        if (index === 0) {
          frameReady = true;
          sizeCanvas();
          requestUpdate();
        }
        if (loaded === FRAME_COUNT) setLoadStatus("");
        else if (loaded % 30 === 0) setLoadStatus(`Loading sequenceΓÇª ${Math.round((loaded / FRAME_COUNT) * 100)}%`);
      };
      image.onerror = () => {
        if (disposed) return;
        loaded += 1;
        setLoadStatus(`Some frames could not load (${loaded}/${FRAME_COUNT})`);
      };
      image.src = framePath(index);
    }

    loadFrame(0);
    for (let index = 1; index < FRAME_COUNT; index += 1) loadFrame(index);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", sizeCanvas, { passive: true });
    const observer = "ResizeObserver" in window ? new ResizeObserver(sizeCanvas) : null;
    observer?.observe(stage);
    sizeCanvas();
    requestUpdate();

    return () => {
      disposed = true;
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", sizeCanvas);
      observer?.disconnect();
    };
  }, []);

  return (
    <main id="top">
      <section className="sequence" aria-label="Scroll-controlled hero sequence" ref={sectionRef}>
        <div className="sequence__stage" ref={stageRef}>
          <canvas className="sequence__canvas" ref={canvasRef} aria-label="A cinematic image sequence that responds to scrolling" />
          <div className="sequence__shade" aria-hidden="true" />
          <a className="hero-brand" ref={brandRef} href="#top" aria-label="Synvanta Systems home">
            <img src="/brand/brand-mark.png" alt="" />
          </a>
          <div className="hero-copy" ref={copyRef}>
            <p className="hero-copy__eyebrow">Synvanta Systems ┬╖ Intelligent systems. Connected businesses.</p>
            <h1>Technology<br />that moves you forward.</h1>
            <p className="hero-copy__description">AI-augmented digital solutions for organizations ready to transform. We connect people, processes, and information through intelligent technology.</p>
            <div className="hero-copy__actions">
              <button className="hero-copy__button" type="button" onClick={() => {
                setDemoStatus("");
                demoDialogRef.current?.showModal();
              }}>Request a demo <span aria-hidden="true">Γåù</span></button>
              <a className="hero-copy__text-link" href="#solutions">Explore our solutions <span aria-hidden="true">Γåô</span></a>
            </div>
          </div>
          <div className="story-layer" aria-label="Synvanta Systems highlights">
            {storyAnnotations.map(([number, label, title, description], index) => (
              <article className="story-panel" key={number} ref={(node) => { annotationRefs.current[index] = node; }} aria-hidden="true">
                <p className="story-panel__eyebrow"><span>{number}</span>{label}</p>
                <h2>{title}</h2>
                <p className="story-panel__description">{description}</p>
              </article>
            ))}
            <div className="story-progress" aria-hidden="true">{storyAnnotations.map(([number], index) => <span key={number} ref={(node) => { progressRefs.current[index] = node; }} />)}</div>
          </div>
          <div className="scroll-note" ref={noteRef} aria-hidden="true"><span /> Scroll to explore</div>
          <p className="sequence__status" aria-live="polite">{loadStatus}</p>
        </div>
      </section>

      <dialog className="demo-dialog" ref={demoDialogRef} aria-labelledby="demo-dialog-title">
        <div className="demo-dialog__header">
          <div>
            <p className="demo-dialog__eyebrow">Explore our systems</p>
            <h2 id="demo-dialog-title">Request a demo</h2>
            <p>Select one or more systems and leave your contact details.</p>
          </div>
          <button className="demo-dialog__close" type="button" aria-label="Close demo request form" onClick={() => demoDialogRef.current?.close()}>├ù</button>
        </div>
        <form className="demo-form" onSubmit={async (event) => {
          event.preventDefault();
          if (selectedDemos.length === 0) {
            setDemoStatus("Select at least one system to request a demo.");
            return;
          }

          const form = event.currentTarget;
          const formData = new FormData(form);
          setDemoSubmitting(true);
          setDemoStatus("");
          try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000/api"}/demo-requests`, {
              method: "POST",
              headers: { "Content-Type": "application/json", Accept: "application/json" },
              body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                location: formData.get("location"),
                systems: selectedDemos,
              }),
            });
            const result = await response.json();
            if (!response.ok) {
              const validationErrors = result.errors ? Object.values(result.errors).flat().join(" ") : "";
              throw new Error(validationErrors || result.message || "We couldn't submit your demo request. Please try again.");
            }

            form.reset();
            setSelectedDemos([]);
            setDemoStatus("Thank you. Your demo request has been received.");
          } catch (error) {
            setDemoStatus(error instanceof Error ? error.message : "We couldn't submit your demo request. Please try again.");
          } finally {
            setDemoSubmitting(false);
          }
        }}>
          <fieldset className="demo-form__systems">
            <legend>Which systems would you like to see?</legend>
            <div className="demo-form__system-grid">
              {demoSystems.map(([name, icon]) => (
                <label className="demo-form__system" key={name}>
                  <input
                    type="checkbox"
                    name="systems"
                    value={name}
                    checked={selectedDemos.includes(name)}
                    onChange={(event) => setSelectedDemos((current) => event.target.checked
                      ? [...current, name]
                      : current.filter((demo) => demo !== name))}
                  />
                  <span aria-hidden="true">{icon}</span>
                  <span>{name}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="demo-form__details">
            <label>Name<input name="name" type="text" autoComplete="name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
            <label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label>
            <label>Location<input name="location" type="text" autoComplete="address-level2" required /></label>
          </div>
          <button className="demo-form__submit" type="submit" disabled={demoSubmitting}>{demoSubmitting ? "SubmittingΓÇª" : "Request selected demos"} <span aria-hidden="true">Γåù</span></button>
          <p className="demo-form__status" role="status">{demoStatus}</p>
        </form>
      </dialog>

      <div className="site-content">
        <section className="trust-strip" aria-label="Industries we serve">
          <div className="trust-strip__lead"><span className="live-dot" /> Technology built for real work</div>
          <p>Healthcare <i /> Education <i /> Finance &amp; SACCOs <i /> Real estate <i /> Retail <i /> Logistics</p>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-index">01 <span> / WHO WE ARE</span></div>
          <div className="about-section__main">
            <SectionHeading eyebrow="More than software development" title="We build intelligent digital ecosystems." description="Technology should do more than replace manual processes. It should help organizations operate smarter, respond faster, and create better experiences." />
            <p className="body-copy">Synvanta Systems is an AI-augmented digital transformation company. We connect your people, processes, and data through intelligent systems designed around the way you work.</p>
            <div className="capability-row">{["Custom software", "Enterprise systems", "AI solutions", "Business automation", "Digital experiences"].map((item) => <span key={item}>{item}<b aria-hidden="true">Γåù</b></span>)}</div>
          </div>
          <div className="about-mark" aria-hidden="true"><span>S</span><span className="about-mark__orbit" /></div>
        </section>

        <section className="content-section solutions-section" id="solutions">
          <div className="section-index">02 <span> / WHAT WE DO</span></div>
          <SectionHeading eyebrow="Our solutions" title="Technology designed around your business." description="Every organization has unique challenges. We create solutions that align technology with your operational goals." />
          <div className="solution-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.number}>
                <span className="card-number">{solution.number}</span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul>{solution.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <a href="#contact" aria-label={`Discuss ${solution.title}`}>Discuss a solution <span aria-hidden="true">Γåù</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="why-section" id="why-synvanta">
          <div className="why-section__intro">
            <div className="section-index">03 <span> / WHY SYNVANTA</span></div>
            <SectionHeading eyebrow="Your transformation partner" title="Business understanding. Technology expertise." description="We pair deep technical capability with a clear understanding of how your organization works." light />
          </div>
          <div className="reason-list">
            {reasons.map(([number, title, description]) => <article className="reason-row" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><b aria-hidden="true">Γåù</b></article>)}
          </div>
        </section>

        <section className="content-section industries-section" id="industries">
          <div className="section-index">04 <span> / INDUSTRIES</span></div>
          <SectionHeading eyebrow="Made for your world" title="Built around the work you do." description="Every industry has different challenges. Our solutions respond to real operational needs." />
          <div className="industry-grid">
            {industries.map(([name, description], index) => <article className="industry-card" key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{description}</p><a href="#contact" aria-label={`Explore solutions for ${name}`}>Explore <span aria-hidden="true">Γåù</span></a></article>)}
          </div>
        </section>

        <section className="intelligence-section">
          <div className="intelligence-glow" aria-hidden="true" />
          <div className="section-index">05 <span> / THE AI ADVANTAGE</span></div>
          <div className="intelligence-content">
            <SectionHeading eyebrow="Intelligence built in" title="Human expertise, amplified by AI." description="The future belongs to organizations that combine human expertise with intelligent technology. We put AI to work on practical business challenges." light />
            <div className="intelligence-points">{["Work more efficiently", "Understand your data", "Automate processes", "Improve customer experiences", "Make better decisions"].map((item) => <p key={item}><span>Γ£ô</span>{item}</p>)}</div>
            <div className="equation"><span>Human expertise</span><b>+</b><span>Artificial intelligence</span><b>=</b><strong>Intelligent business</strong></div>
          </div>
          <span className="intelligence-orb" aria-hidden="true">AI</span>
        </section>

        <section className="content-section process-section" id="process">
          <div className="section-index">06 <span> / HOW WE WORK</span></div>
          <SectionHeading eyebrow="Our process" title="From challenge to intelligent solution." description="A clear, collaborative path makes sure your solution delivers meaningful business value." />
          <div className="process-grid">{processes.map(([number, title, description]) => <article className="process-card" key={number}><span>{number}</span><div className="process-line" /><h3>{title}</h3><p>{description}</p></article>)}</div>
        </section>

        <section className="portfolio-section" id="work">
          <div className="portfolio-heading"><div className="section-index">07 <span> / FEATURED SOLUTIONS</span></div><SectionHeading eyebrow="Ideas into impact" title="Connected systems. Better outcomes." description="We help organizations move from disconnected processes to intelligent digital ecosystems." /></div>
          <div className="portfolio-grid">
            {[["01", "Healthcare management system", "Connect healthcare operations through centralized digital solutions."], ["02", "School management platform", "Simplify administration and improve information management."], ["03", "SACCO management system", "Support financial cooperatives with secure, efficient digital platforms."], ["04", "Business automation", "Reduce manual work and help teams focus on higher-value work."]].map(([number, title, description]) => <article className="portfolio-card" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><b aria-hidden="true">Γåù</b></article>)}
          </div>
          <a className="outline-link" href="#contact">Discuss a project <span aria-hidden="true">Γåù</span></a>
        </section>

        <section className="content-section insights-section" id="insights">
          <div className="section-index">08 <span> / IDEAS &amp; INSIGHTS</span></div>
          <SectionHeading eyebrow="Keep looking forward" title="Exploring digital transformation." description="Ideas and perspectives on the technology shaping how organizations work." />
          <div className="insight-grid">{[["01 / ARTIFICIAL INTELLIGENCE", "How AI is transforming modern businesses"], ["02 / ENTERPRISE SYSTEMS", "Why organizations need intelligent management systems"], ["03 / DIGITAL EXPERIENCES", "Building connected digital experiences"]].map(([category, title]) => <article className="insight-card" key={category}><span>{category}</span><h3>{title}</h3><a href="#contact" aria-label={`Discuss ${title}`}>Explore the topic <b aria-hidden="true">Γåù</b></a></article>)}</div>
        </section>

        <section className="final-cta" id="contact">
          <div className="final-cta__orb" aria-hidden="true" />
          <div className="section-index">09 <span> / LET'S BUILD WHAT'S NEXT</span></div>
          <p className="section-eyebrow">Ready when you are</p>
          <h2>Build your<br /><em>intelligent future.</em></h2>
          <p className="final-cta__copy">Your organization has unique challenges. Your technology should be built around them. Let's transform your ideas into technology that creates impact.</p>
          <a className="final-cta__button" href="#solutions">Explore our solutions <span aria-hidden="true">Γåù</span></a>
          <footer className="site-footer"><span>Synvanta Systems</span><span>Intelligent systems. Connected businesses.</span><a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back to top Γåæ</a></footer>
        </section>
      </div>
    </main>
  );
}
