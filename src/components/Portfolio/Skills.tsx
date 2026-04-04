"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Faint background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #00d4ff 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-neon-green mb-2 tracking-widest">
            {"// INFRASTRUCTURE DASHBOARD"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono">
            Technical Skills
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3
                  className="text-sm font-mono font-bold tracking-wider uppercase"
                  style={{ color: category.color }}
                >
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-dark-border" />
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + skillIdx * 0.03 }}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: `0 0 20px ${category.color}33, 0 0 40px ${category.color}11`,
                    }}
                    className="px-4 py-2 rounded-lg bg-dark-card border border-dark-border font-mono text-sm text-zinc-300 cursor-default transition-colors hover:text-white"
                    style={{
                      borderColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        category.color + "66";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "transparent";
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
