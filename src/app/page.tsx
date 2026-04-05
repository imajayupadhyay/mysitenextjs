"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { personalInfo } from "@/data/resume";
import BackgroundLayer from "@/components/Portfolio/BackgroundLayer";

const quickStats = [
  { value: "3+", label: "Years" },
  { value: "110+", label: "Projects" },
  { value: "99.9%", label: "Uptime" },
  { value: "4", label: "Certs" },
];

export default function Home() {
  return (
    <>
      <BackgroundLayer />
      <section className="relative z-[1] min-h-screen flex items-center">
        <div className="max-w-[1240px] mx-auto px-7 py-24 w-full">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border bg-surface font-mono text-[11px] text-text-2 mb-9"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-lime shadow-[0_0_10px_#c8ff4d]" />
            <span>Available for new roles</span>
            <span className="text-text-3">·</span>
            <span>New Delhi · IST</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 0.9, 0.3, 1] }}
            className="font-display font-bold tracking-[-0.035em] leading-[0.88] text-[clamp(56px,10vw,156px)] max-w-[14ch] mb-7"
          >
            Ship infra
            <br />
            that stays{" "}
            <span className="italic font-medium bg-gradient-to-r from-amber to-coral bg-clip-text text-transparent">
              up.
            </span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="text-text-2 text-[17px] leading-[1.55] max-w-[56ch] mb-10 font-sans"
          >
            I&rsquo;m <span className="text-text font-medium">{personalInfo.name}</span> — a DevOps &amp;
            Cloud Engineer architecting multi-cloud infrastructure, CI/CD pipelines, and observability
            across AWS &amp; Azure. Three years in, four certifications deep.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-16"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber text-[#1a0f08] font-mono text-[12px] font-semibold uppercase tracking-[0.1em] transition-all hover:bg-amber-soft hover:translate-x-0.5"
            >
              View portfolio <span>→</span>
            </Link>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-surface font-mono text-[12px] text-text-2 transition-colors hover:text-text hover:border-border-hi hover:bg-surface-hi"
            >
              Get in touch ↗
            </a>
          </motion.div>

          {/* Quick stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl border-t border-border pt-7"
          >
            {quickStats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-[44px] leading-none tracking-[-0.02em] text-text">
                  {s.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-3 mt-2.5">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
