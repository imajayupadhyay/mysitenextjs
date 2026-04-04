"use client";

import { motion } from "framer-motion";
import Terminal from "./Terminal";
import { personalInfo, stats } from "@/data/resume";

const floatingSkills = [
  "AWS", "Azure", "Kubernetes", "Docker", "Terraform",
  "Jenkins", "GitHub Actions", "Python", "Prometheus", "Grafana",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-green/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse-green" />
            Available for opportunities
          </div>
        </motion.div>

        {/* Name and title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-center mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-mono text-zinc-500">
            {personalInfo.title}
            <span className="text-neon-blue"> &middot; </span>
            <span className="text-zinc-400">{personalInfo.subtitle}</span>
          </p>
        </motion.div>

        {/* Floating skill tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto"
        >
          {floatingSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.06 }}
              whileHover={{ scale: 1.1, borderColor: "#00d4ff" }}
              className="px-3 py-1.5 rounded-full border border-dark-border bg-dark-card/60 text-xs font-mono text-zinc-400 cursor-default hover:text-neon-blue transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-16 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.08 }}
              className="text-center p-3 rounded-lg glass"
            >
              <div className="text-lg md:text-xl font-bold font-mono text-neon-green">
                {stat.value}
              </div>
              <div className="text-[9px] font-mono text-zinc-600 tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <Terminal />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#experience"
            className="flex flex-col items-center gap-2 text-zinc-600 hover:text-neon-blue transition-colors"
          >
            <span className="text-[10px] font-mono tracking-widest">
              SCROLL
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-4 h-7 rounded-full border-2 border-zinc-700 flex justify-center pt-1.5"
            >
              <div className="w-1 h-1.5 rounded-full bg-zinc-600" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
