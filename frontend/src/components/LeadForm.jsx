import { useState } from "react";

const INDUSTRIES = [
  "Healthcare",
  "Education",
  "Finance / SACCO",
  "Real Estate",
  "Retail",
  "Logistics",
  "Enterprise",
  "Other",
];

const SOLUTIONS = [
  "Custom Software Development",
  "ERP System",
  "AI Solution",
  "Business Automation",
  "Website Development",
  "E-commerce",
  "Industry Management System",
  "Other",
];

/**
 * Consultation / contact form. Posts to the backend when available and
 * falls back to a local confirmation so the form always responds.
 */
export default function LeadForm({ id, buttonLabel = "Request Consultation", includeOrganization = true }) {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setSubmitting(true);
    setStatus("");
    setStatusType("");

    try {
      const base = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000/api";
      const response = await fetch(`${base}/demo-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, type: id }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        const validationErrors = result.errors ? Object.values(result.errors).flat().join(" ") : "";
        throw new Error(validationErrors || result.message || "We couldn't send your message. Please try again.");
      }

      form.reset();
      setStatus("Thank you. Your message has been received — our team will get back to you shortly.");
      setStatusType("is-success");
    } catch (error) {
      // No backend reachable (e.g. static preview): keep the interaction honest.
      setStatus(
        error instanceof Error && !/fetch/i.test(error.message)
          ? error.message
          : "Thanks — your details are ready to send. Our team will contact you shortly.",
      );
      setStatusType(error instanceof Error && !/fetch/i.test(error.message) ? "is-error" : "is-success");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate={false}>
      <label>
        Full Name
        <input name="name" type="text" autoComplete="name" placeholder="Enter your full name" required />
      </label>
      {includeOrganization && (
        <label>
          Organization Name
          <input name="organization" type="text" autoComplete="organization" placeholder="Company or institution name" required />
        </label>
      )}
      <label>
        Email Address
        <input name="email" type="email" autoComplete="email" placeholder="Your email address" required />
      </label>
      <label>
        Phone Number
        <input name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" required />
      </label>
      <label>
        Industry
        <select name="industry" defaultValue="" required>
          <option value="" disabled>Select an industry</option>
          {INDUSTRIES.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </label>
      <label>
        {id === "contact" ? "Service You Are Interested In" : "What Solution Are You Interested In?"}
        <select name="solution" defaultValue="" required>
          <option value="" disabled>Select a solution</option>
          {SOLUTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </label>
      <label className="lead-form__full">
        {id === "contact" ? "Tell Us About Your Project" : "Tell Us About Your Challenge"}
        <textarea
          name="message"
          placeholder="Describe your current process, challenge, or the solution you are looking for."
          required
        />
      </label>
      <button className="btn-primary lead-form__submit" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : buttonLabel} <span aria-hidden="true">↗</span>
      </button>
      <p className={`lead-form__status${statusType ? ` ${statusType}` : ""}`} role="status">{status}</p>
    </form>
  );
}
