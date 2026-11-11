import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Solutions from "./pages/Solutions.jsx";
import AiSolutions from "./pages/AiSolutions.jsx";
import DigitalStudio from "./pages/DigitalStudio.jsx";
import Industries from "./pages/Industries.jsx";
import Technology from "./pages/Technology.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import RequestSolution from "./pages/RequestSolution.jsx";
import Contact from "./pages/Contact.jsx";

/** Scrolls to the top whenever the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero__inner">
          <p className="page-hero__eyebrow">404</p>
          <h1>Page not found.</h1>
          <p className="page-hero__intro">The page you are looking for does not exist or has moved.</p>
          <div className="page-hero__actions">
            <Link className="btn-primary" to="/">Back to home <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/ai-solutions" element={<AiSolutions />} />
        <Route path="/digital-studio" element={<DigitalStudio />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/request-solution" element={<RequestSolution />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
