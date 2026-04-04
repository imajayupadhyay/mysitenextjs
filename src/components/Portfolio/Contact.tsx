"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";

const contactItems = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: "~",
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    icon: "#",
  },
  {
    label: "Location",
    value: personalInfo.location,
    href: null,
    icon: "@",
  },
  {
    label: "GitHub",
    value: "github.com/ajayupadhyay",
    href: personalInfo.github,
    icon: "$",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ajayupadhyay",
    href: personalInfo.linkedin,
    icon: "&",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-neon-green mb-2 tracking-widest">
            {"// OPEN FOR CONNECTIONS"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono">
            Get In Touch
          </h2>
        </motion.div>

        {/* Contact cards */}
        <div className="space-y-3">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.label === "Email" || item.label === "Phone" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/[0.04] transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center font-mono text-neon-blue text-lg group-hover:border-neon-blue/30 transition-colors">
                    {item.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-mono text-zinc-300 group-hover:text-neon-blue transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                  <span className="text-zinc-600 group-hover:text-neon-blue transition-colors font-mono">
                    &rarr;
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-4 p-4 rounded-xl glass">
                  <span className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center font-mono text-neon-blue text-lg">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-mono text-zinc-300">
                      {item.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
