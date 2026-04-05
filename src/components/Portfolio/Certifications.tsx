"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { certifications } from "@/data/resume";

export default function Certifications() {
  return (
    <section id="certs" className="py-[60px]">
      <div className="flex justify-between items-end gap-6 mb-9 pb-[18px] border-b border-border">
        <div>
          <div className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-amber mb-2.5">
            § Credentials
          </div>
          <h2 className="font-display font-semibold text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[-0.025em] max-w-[20ch]">
            Paper <span className="italic text-text-2 font-normal">trail.</span>
          </h2>
        </div>
        <div className="font-mono text-[11px] text-text-3 uppercase tracking-[0.1em] whitespace-nowrap">
          4 Active · AWS + Azure
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.code}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 0.9, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="group bg-surface border border-border rounded-[20px] px-5 pt-[22px] pb-5 text-center transition-all hover:border-amber hover:bg-surface-hi"
          >
            <div className="w-24 h-24 mx-auto mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] relative">
              <Image
                src={cert.badge}
                alt={cert.name}
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
            <h5 className="font-display font-semibold text-[15px] leading-[1.25] tracking-[-0.005em] mb-2.5">
              {cert.name}
            </h5>
            <div className="font-mono text-[10px] text-text-3 uppercase tracking-[0.1em] pb-3.5 mb-3.5 border-b border-dashed border-border">
              {cert.level && <span className="text-amber font-semibold">{cert.level}</span>}
              {cert.level && <span> · </span>}
              <span>{cert.code}</span>
            </div>
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-text-2 px-3 py-1.5 border border-border rounded-full transition-all hover:text-amber hover:border-amber"
            >
              Verify <span>↗</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
