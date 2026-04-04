"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";

const pipelineStages = ["BUILD", "TEST", "STAGE", "DEPLOY"];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-neon-green mb-2 tracking-widest">
            {"// DEPLOYMENT PIPELINE"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono">
            Professional Experience
          </h2>
        </motion.div>

        {/* Pipeline stages indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-1 mb-16"
        >
          {pipelineStages.map((stage, i) => (
            <div key={stage} className="flex items-center">
              <div className="px-3 py-1.5 rounded bg-dark-card border border-dark-border text-[10px] font-mono text-neon-green tracking-wider">
                {stage}
              </div>
              {i < pipelineStages.length - 1 && (
                <div className="w-6 h-px bg-neon-green/30 mx-1" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-dark-border" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-14"
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-1">
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center bg-[#0a0a0a]"
                    style={{ borderColor: exp.color }}
                  >
                    <div
                      className="w-3 h-3 rounded-full animate-pulse-green"
                      style={{ backgroundColor: exp.color }}
                    />
                  </div>
                </div>

                {/* Content card */}
                <div className="glass rounded-xl p-6 hover:border-zinc-700 transition-colors">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-lg font-bold font-mono"
                        style={{ color: exp.color }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-sm text-zinc-400">
                        {exp.company} &middot; {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 bg-dark-card px-3 py-1 rounded-full border border-dark-border whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-zinc-300"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: exp.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
