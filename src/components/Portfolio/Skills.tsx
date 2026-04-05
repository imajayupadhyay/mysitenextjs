"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/resume";

const stackColors = [
  "text-amber",
  "text-sky",
  "text-lime",
  "text-coral",
  "text-amber-soft",
  "text-violet",
];

export default function Skills() {
  return (
    <section id="stack" className="py-[60px]">
      <div className="flex justify-between items-end gap-6 mb-9 pb-[18px] border-b border-border">
        <div>
          <div className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-amber mb-2.5">
            § Toolbox
          </div>
          <h2 className="font-display font-semibold text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[-0.025em] max-w-[20ch]">
            The <span className="italic text-text-2 font-normal">stack.</span>
          </h2>
        </div>
        <div className="font-mono text-[11px] text-text-3 uppercase tracking-[0.1em] whitespace-nowrap">
          6 Stacks · 50+ Tools
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 0.9, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="bg-surface border border-border rounded-[20px] px-6 pt-6 pb-[22px] transition-colors hover:border-border-hi"
          >
            <div className="flex items-center justify-between mb-[18px] pb-3 border-b border-border">
              <h4
                className={`font-display font-semibold text-[22px] tracking-[-0.01em] ${stackColors[i % stackColors.length]}`}
              >
                {cat.name}
              </h4>
              <span className="font-mono text-[11px] text-text-3">
                {String(cat.skills.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-bg-2 border border-border rounded-md font-mono text-[11px] text-text-2 transition-all hover:bg-surface-hi hover:text-text hover:border-border-hi"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
