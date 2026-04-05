"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";

const roleMeta = [
  { period: "Dec 2025 — Present", loc: "Noida, IN", current: true },
  { period: "Jul 2024 — Dec 2025", loc: "Noida, IN" },
  { period: "Dec 2022 — Jul 2024", loc: "Delhi, IN" },
];

export default function Experience() {
  return (
    <section id="work" className="py-[60px]">
      <div className="flex justify-between items-end gap-6 mb-9 pb-[18px] border-b border-border">
        <div>
          <div className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-amber mb-2.5">
            § Experience
          </div>
          <h2 className="font-display font-semibold text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[-0.025em] max-w-[20ch]">
            Field <span className="italic text-text-2 font-normal">log.</span>
          </h2>
        </div>
        <div className="font-mono text-[11px] text-text-3 uppercase tracking-[0.1em] whitespace-nowrap">
          3 Posts · 3+ Years
        </div>
      </div>

      <div className="grid gap-3.5">
        {experience.map((role, i) => {
          const meta = roleMeta[i];
          return (
            <motion.article
              key={role.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 0.9, 0.3, 1] }}
              className="group relative overflow-hidden grid md:grid-cols-[200px_1fr] gap-5 md:gap-8 bg-surface border border-border rounded-[20px] px-[30px] py-7 transition-colors hover:border-border-hi hover:bg-surface-hi"
            >
              {/* Accent bar (revealed on hover) */}
              <span className="absolute left-[30px] top-7 bottom-7 w-[2px] bg-gradient-to-b from-amber to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-50" />

              <div className="font-mono text-[11px] text-text-2">
                <span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber mr-1.5 align-[1px]" />
                  {meta.period}
                </span>
                {meta.current && (
                  <span className="block mt-2 w-fit px-2 py-0.5 rounded bg-[rgba(200,255,77,0.1)] text-lime text-[10px] font-semibold uppercase tracking-[0.1em]">
                    Current
                  </span>
                )}
                <span className="block mt-2.5 text-text-3">{meta.loc}</span>
              </div>

              <div>
                <h3 className="font-display font-semibold text-[26px] tracking-[-0.01em] leading-[1.15]">
                  {role.company}
                </h3>
                <div className="font-mono text-[12px] text-amber mt-0.5 mb-4">{role.role}</div>
                <ul className="list-none grid gap-2.5">
                  {role.highlights.map((h) => (
                    <li
                      key={h}
                      className="relative pl-[18px] text-[14px] leading-[1.55] text-text-2 before:absolute before:left-0 before:content-['→'] before:text-amber before:font-mono before:font-semibold"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
