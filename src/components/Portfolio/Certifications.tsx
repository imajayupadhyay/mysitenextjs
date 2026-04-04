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

        {/* Two-row grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.code}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative glass rounded-xl p-5 flex items-center gap-5 hover:border-zinc-700 transition-all cursor-pointer"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 40px ${cert.color}15, inset 0 0 40px ${cert.color}08`,
                }}
              />

              {/* Badge image */}
              <div className="relative shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.badge}
                  alt={cert.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <div className="relative flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-bold text-white mb-1 leading-snug">
                  {cert.name}
                </h3>

                {cert.level && (
                  <p className="text-xs text-zinc-500 mb-2">
                    {cert.level}
                  </p>
                )}

                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md border"
                    style={{
                      borderColor: cert.color + "44",
                      color: cert.color,
                      backgroundColor: cert.color + "0a",
                    }}
                  >
                    {cert.code}
                  </span>

                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 group-hover:text-neon-blue transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Verify
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="relative text-zinc-700 group-hover:text-neon-blue transition-colors shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
