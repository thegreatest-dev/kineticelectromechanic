"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    // Simulate an async send; swap for a real endpoint when ready
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  }

  return (
    <main className="contact-page">
      <div className="contact-inner">
        <h1 className="contact-title">Get in touch</h1>
        <p className="contact-lead">
          Tell us about your project and a member of the team will get back to you
          within one business day.
        </p>

        <form
          className={`contact-form${state === "success" ? " contact-form--sent" : ""}`}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="cf-name">Full name</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                disabled={state === "submitting" || state === "success"}
                placeholder="Jane Smith"
              />
            </div>
            <div className="contact-field">
              <label htmlFor="cf-email">Email address</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={state === "submitting" || state === "success"}
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="cf-company">Company (optional)</label>
            <input
              id="cf-company"
              name="company"
              type="text"
              autoComplete="organization"
              disabled={state === "submitting" || state === "success"}
              placeholder="Acme Corp"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="cf-subject">Subject</label>
            <input
              id="cf-subject"
              name="subject"
              type="text"
              required
              disabled={state === "submitting" || state === "success"}
              placeholder="Project enquiry"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              rows={6}
              required
              disabled={state === "submitting" || state === "success"}
              placeholder="Describe your requirements…"
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={state === "submitting" || state === "success"}
          >
            {state === "submitting" ? "Sending…" : "Send message"}
          </button>
        </form>

        {/* Success message — fades in once state === "success" */}
        <div
          className={`contact-success${state === "success" ? " contact-success--visible" : ""}`}
          role="status"
          aria-live="polite"
        >
          <span className="contact-success-icon" aria-hidden="true">✓</span>
          <p>Message sent — we&apos;ll be in touch soon.</p>
        </div>
      </div>
    </main>
  );
}
