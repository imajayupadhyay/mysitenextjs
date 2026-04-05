"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const links = [
  { key: "Email", val: "ajayupadhyaydevops@gmail.com", href: "mailto:ajayupadhyaydevops@gmail.com", external: false },
  { key: "Phone", val: "+91 97179 69678", href: "tel:+919717969678", external: false },
  { key: "GitHub", val: "github.com/imajayupadhyay", href: "https://github.com/imajayupadhyay", external: true },
  { key: "LinkedIn", val: "ajay-upadhyay-devops", href: "https://www.linkedin.com/in/ajay-upadhyay-devops/", external: true },
  { key: "Location", val: "New Delhi, India · IST", href: "https://maps.google.com/?q=New%20Delhi%2C%20India", external: true },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error ?? "Failed to send message.");
      setStatus("success");
      setFormState({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-[60px]">
      <div className="flex justify-between items-end gap-6 mb-9 pb-[18px] border-b border-border">
        <div>
          <div className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-amber mb-2.5">
            § Contact
          </div>
          <h2 className="font-display font-semibold text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[-0.025em] max-w-[20ch]">
            Open <span className="italic text-text-2 font-normal">channel.</span>
          </h2>
        </div>
        <div className="font-mono text-[11px] text-text-3 uppercase tracking-[0.1em] whitespace-nowrap">
          Response &lt; 24h
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        {/* Left - Info card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 0.9, 0.3, 1] }}
          className="bg-surface border border-border rounded-3xl px-8 py-9 flex flex-col"
        >
          <h3 className="font-display font-semibold text-[clamp(34px,4vw,52px)] leading-[0.95] tracking-[-0.025em] mb-4">
            Let&rsquo;s build
            <br />
            <span className="italic font-medium bg-gradient-to-r from-amber to-coral bg-clip-text text-transparent">
              something reliable.
            </span>
          </h3>
          <p className="text-text-2 text-[15px] leading-[1.55] mb-6 max-w-[42ch]">
            Open to DevOps, Cloud Engineering, and Infrastructure roles. Drop a line — I respond within 24 hours.
          </p>

          <div className="grid gap-px bg-border rounded-xl overflow-hidden mt-auto">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="group grid grid-cols-[88px_1fr_auto] gap-3.5 items-center px-4 py-3.5 bg-surface text-text transition-colors hover:bg-surface-hi"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-3">{l.key}</span>
                <span className="font-mono text-[13px] text-text truncate">{l.val}</span>
                <span className="font-mono text-[14px] text-text-3 transition-all group-hover:text-amber group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 0.9, 0.3, 1], delay: 0.05 }}
          className="bg-surface border border-border rounded-3xl p-8"
        >
          <div className="flex items-center gap-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-text-3 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
            <span>Send a message</span>
          </div>

          <form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <div className="grid grid-cols-2 gap-3 mb-3.5">
              <Field label="Name">
                <input
                  type="text"
                  required
                  maxLength={120}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your name"
                  className={inputCls}
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  required
                  maxLength={160}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@domain.com"
                  className={inputCls}
                />
              </Field>
            </div>

            <div className="mb-3.5">
              <Field
                label={
                  <>
                    Phone <span className="text-text-3 normal-case tracking-normal">(optional)</span>
                  </>
                }
              >
                <input
                  type="tel"
                  maxLength={40}
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="+1 555 123 4567"
                  className={inputCls}
                />
              </Field>
            </div>

            <div className="mb-3.5">
              <Field label="Message">
                <textarea
                  required
                  maxLength={5000}
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className={`${inputCls} resize-y min-h-[100px] leading-[1.5]`}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2.5 px-[22px] py-[13px] bg-amber text-[#1a0f08] rounded-full font-mono text-xs font-semibold uppercase tracking-[0.1em] transition-all hover:bg-amber-soft hover:translate-x-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === "sending" ? "Sending..." : status === "success" ? "Message sent ✓" : "Send message"}
              <span>→</span>
            </button>

            <div className="font-mono text-[11px] mt-3.5 min-h-4">
              {status === "error" && errorMessage && <span className="text-coral">{errorMessage}</span>}
              {status === "success" && (
                <span className="text-lime">Thanks! I&rsquo;ll get back to you soon.</span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-bg-2 border border-border rounded-[10px] px-3.5 py-3 font-sans text-[14px] text-text placeholder:text-text-3 outline-none transition-colors focus:border-amber focus:bg-bg";

function Field({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  return (
    <div>
      <label className="block font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-text-3 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
