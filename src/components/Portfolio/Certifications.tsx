"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/resume";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-neon-green mb-2 tracking-widest">
            {"// VERIFIED CREDENTIALS"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono">
            Certifications
          </h2>
        </motion.div>

        {/* Cert cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-xl overflow-hidden"
            >
              {/* Glow border */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${cert.color}22, transparent, ${cert.color}22)`,
                  boxShadow: `0 0 30px ${cert.color}22, inset 0 0 30px ${cert.color}11`,
                }}
              />

              {/* Card content */}
              <div className="relative glass rounded-xl p-6 h-full flex flex-col items-center text-center gap-4 group-hover:border-transparent transition-colors">
                {/* Provider badge */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold font-mono border-2"
                  style={{
                    borderColor: cert.color,
                    color: cert.color,
                    boxShadow: `0 0 15px ${cert.color}33`,
                  }}
                >
                  {cert.provider}
                </div>

                {/* Cert name */}
                <div>
                  <h3 className="text-base font-bold font-mono text-foreground">
                    {cert.name}
                  </h3>
                  {cert.level && (
                    <p className="text-xs text-zinc-500 font-mono mt-1">
                      {cert.level}
                    </p>
                  )}
                </div>

                {/* Exam code */}
                <span
                  className="text-[11px] font-mono px-3 py-1 rounded-full border"
                  style={{
                    borderColor: cert.color + "44",
                    color: cert.color,
                  }}
                >
                  {cert.code}
                </span>

                {/* Status */}
                <div className="flex items-center gap-1.5 mt-auto">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse-green"
                    style={{ backgroundColor: cert.color }}
                  />
                  <span className="text-[10px] font-mono text-zinc-500">
                    VERIFIED
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
