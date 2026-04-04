"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { personalInfo } from "@/data/resume";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-neon-green/[0.02] rounded-full blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative text-center px-6 max-w-3xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse-green" />
            Available for opportunities
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm font-mono text-neon-green tracking-widest mb-6"
        >
          {"// HELLO, I'M"}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl md:text-8xl font-bold font-mono tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl font-mono text-zinc-500 mb-4"
        >
          {personalInfo.title}
        </motion.p>

        {/* One-liner */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base text-zinc-600 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          I architect and manage cloud infrastructure across AWS &amp; Azure,
          build CI/CD pipelines, and keep production systems running at
          <span className="text-neon-green font-mono"> 99.9% uptime</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/portfolio"
            className="group relative px-8 py-3 rounded-lg font-mono text-sm font-medium bg-neon-blue/10 border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/20 transition-all"
          >
            View Portfolio
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-8 py-3 rounded-lg font-mono text-sm font-medium border border-dark-border text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-8 mt-16 text-center"
        >
          {[
            { value: "3+", label: "Years" },
            { value: "110+", label: "Projects" },
            { value: "4", label: "Certifications" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold font-mono text-neon-green">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
