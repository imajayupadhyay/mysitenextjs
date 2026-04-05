"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 + i * 0.06, duration: 0.6, ease: [0.22, 0.9, 0.3, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-28">
      {/* ===== Hero band ===== */}
      <div className="grid gap-14 items-center md:grid-cols-[1.35fr_1fr] pt-8 pb-10">
        {/* Left */}
        <div className="min-w-0">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border bg-surface font-mono text-[11px] text-text-2 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-lime shadow-[0_0_10px_#c8ff4d]" />
            <span>Available for new roles</span>
            <span className="text-text-3">·</span>
            <span>Based in New Delhi · IST</span>
          </motion.div>

          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display font-bold tracking-[-0.035em] leading-[0.9] text-[clamp(52px,9vw,124px)] max-w-[15ch] mb-5"
          >
            DevOps built
            <br />
            for{" "}
            <span className="italic font-medium bg-gradient-to-r from-amber to-coral bg-clip-text text-transparent">
              uptime.
            </span>
          </motion.h1>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={2}
            className="flex flex-wrap items-center gap-3.5 font-mono text-[13px] text-text-2 mb-8"
          >
            <span>I ship infrastructure that stays up.</span>
            <span className="px-2.5 py-1 rounded-md border border-[rgba(255,149,68,0.3)] bg-[rgba(255,149,68,0.06)] text-amber">
              AWS Certified
            </span>
            <span className="px-2.5 py-1 rounded-md border border-[rgba(124,196,255,0.3)] bg-[rgba(124,196,255,0.06)] text-sky">
              Azure Certified
            </span>
          </motion.div>
        </div>

        {/* Right — portrait */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={1.5}
          className="relative aspect-square flex items-center justify-center"
        >
          <div className="relative w-full max-w-[360px] aspect-square group">
            {/* Orbital rings */}
            <div className="absolute -inset-11 rounded-full border border-dashed border-[rgba(124,196,255,0.22)] animate-orbit-spin [animation-duration:60s]">
              <span className="absolute -top-[3px] left-1/2 -ml-[3px] w-1.5 h-1.5 rounded-full bg-lime shadow-[0_0_14px_#c8ff4d]" />
            </div>
            <div className="absolute -inset-[22px] rounded-full border border-[rgba(255,93,115,0.18)] border-t-transparent border-r-transparent animate-orbit-spin [animation-duration:24s] [animation-direction:reverse]">
              <span className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-sky shadow-[0_0_14px_#7cc4ff]" />
            </div>
            <div className="absolute inset-0 rounded-full border border-dashed border-[rgba(255,149,68,0.35)] animate-orbit-spin [animation-duration:40s]">
              <span className="absolute -top-[5px] left-1/2 -ml-[5px] w-2.5 h-2.5 rounded-full bg-amber shadow-[0_0_14px_#ff9544]" />
              <span className="absolute -bottom-[5px] left-1/2 -ml-[5px] w-2.5 h-2.5 rounded-full bg-coral shadow-[0_0_14px_#ff5d73] opacity-80" />
            </div>

            {/* Portrait frame */}
            <div className="absolute inset-[10px] rounded-full overflow-hidden bg-surface border border-border-hi shadow-[0_0_0_1px_rgba(255,149,68,0.1),0_30px_80px_-30px_rgba(255,149,68,0.4),0_20px_60px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="/profile.webp"
                alt="Ajay Upadhyay"
                width={360}
                height={360}
                priority
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.9,0.3,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full pointer-events-none z-[1] bg-[linear-gradient(145deg,rgba(255,149,68,0.15),transparent_40%,rgba(255,93,115,0.1))]" />
            </div>

            {/* Badge */}
            <div className="absolute bottom-[4%] -right-[4%] z-[2] flex items-center gap-2 bg-bg border border-border-hi rounded-full px-3.5 py-2 pl-2.5 font-mono text-[11px] text-text shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
              <span className="w-2 h-2 rounded-full bg-lime shadow-[0_0_10px_#c8ff4d] animate-pulse-amber" />
              <span>Ajay · DevOps</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== Bento grid ===== */}
      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        custom={0}
        className="grid grid-cols-6 md:grid-cols-12 auto-rows-[minmax(140px,auto)] gap-3.5 mb-[72px]"
      >
        {/* Intro */}
        <div className="col-span-6 md:col-span-7 md:row-span-2 bg-surface border border-border rounded-[20px] px-[30px] py-7 relative overflow-hidden transition-colors hover:border-border-hi">
          <CardLabel>Intro</CardLabel>
          <p className="font-display text-[clamp(20px,2vw,26px)] leading-[1.35] tracking-[-0.01em] text-text max-w-[40ch]">
            I&rsquo;m <span className="text-amber">Ajay</span> — a DevOps &amp; Cloud Engineer shipping
            multi-cloud infrastructure, CI/CD pipelines, and observability for{" "}
            <span className="text-text-2">production systems that can&rsquo;t blink.</span> Three years
            in, four certifications deep, and still genuinely enjoying it.
          </p>
          <div className="absolute bottom-[22px] left-[30px] right-[30px] flex items-center justify-between font-mono text-[11px] text-text-3 border-t border-dashed border-border pt-4">
            <span className="text-text-2">
              at &nbsp;·&nbsp; <b className="text-text">CloudBoson Technologies</b>
            </span>
            <span className="text-amber">● live</span>
          </div>
        </div>

        {/* Uptime stat */}
        <div className="col-span-6 md:col-span-5 bg-surface border border-border rounded-[20px] px-6 py-[22px] grid content-between transition-colors hover:border-border-hi">
          <CardLabel>Uptime SLA</CardLabel>
          <div className="font-display font-bold text-[clamp(54px,6vw,80px)] leading-none tracking-[-0.03em] text-text">
            99.9<span className="text-amber">%</span>
          </div>
          <div className="flex justify-between items-end font-mono text-[11px] text-text-2">
            <span>maintained across 3 clouds</span>
            <span className="text-lime">↑ steady</span>
          </div>
        </div>

        {/* Now */}
        <div className="col-span-6 md:col-span-5 bg-surface border border-border rounded-[20px] px-6 py-[22px] transition-colors hover:border-border-hi">
          <CardLabel>Now</CardLabel>
          <h3 className="font-display font-semibold text-[24px] leading-[1.2] tracking-[-0.01em] mb-2.5">
            Azure CI/CD pipelines, zero-downtime multi-env deployments.
          </h3>
          <p className="text-[13px] text-text-2 leading-[1.5]">
            Architecting Elastic Beanstalk + Lambda + RDS stacks, wiring CloudWatch into Azure Monitor.
          </p>
          <div className="mt-4 flex gap-1.5">
            <span className="flex-1 h-1 rounded-sm bg-amber" />
            <span className="flex-1 h-1 rounded-sm bg-amber" />
            <span className="flex-1 h-1 rounded-sm bg-amber" />
            <span className="flex-1 h-1 rounded-sm bg-amber" />
            <span className="flex-1 h-1 rounded-sm bg-border" />
          </div>
        </div>

        {/* Mini stats */}
        <MiniStat value="50+" label="AWS Projects" color="amber" className="col-span-3 md:col-span-3" />
        <MiniStat value="60+" label="Azure Loads" color="sky" className="col-span-3 md:col-span-3" />
        <MiniStat value="30%" label="Cost Saved" color="lime" className="col-span-3 md:col-span-3" />
        <MiniStat value="3+" label="Years" color="coral" className="col-span-3 md:col-span-3" />

        {/* CTA */}
        <Link
          href="#contact"
          className="col-span-6 md:col-span-6 group relative overflow-hidden bg-gradient-to-br from-amber to-coral rounded-[20px] px-6 py-[22px] text-[#1a0f08] transition-transform hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[rgba(26,15,8,0.6)] mb-3.5">
            <span className="w-1 h-1 rounded-full bg-[#1a0f08]" />
            <span>Start a project</span>
          </div>
          <h3 className="font-display font-semibold text-[clamp(22px,2.4vw,30px)] leading-[1.15] tracking-[-0.015em] mb-[18px] text-[#1a0f08]">
            Got infra that needs attention? Let&rsquo;s talk.
          </h3>
          <span className="inline-flex items-center gap-2 px-[18px] py-2.5 bg-[#1a0f08] text-amber rounded-full font-mono text-xs font-semibold transition-transform group-hover:translate-x-0.5">
            Send a message <span>→</span>
          </span>
          {/* shimmer */}
          <span className="pointer-events-none absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-cta-shimmer" />
        </Link>

        {/* Certifications summary */}
        <div className="col-span-6 md:col-span-6 bg-surface border border-border rounded-[20px] px-6 py-[22px] transition-colors hover:border-border-hi">
          <CardLabel>Certifications</CardLabel>
          <div className="flex gap-2.5 flex-wrap items-center">
            <span className="font-mono text-[32px] font-bold text-amber">4×</span>
            <div className="flex flex-col gap-1 font-mono text-[12px] text-text-2">
              <span>SAA-C03 &nbsp;·&nbsp; DVA-C02</span>
              <span>AZ-104 &nbsp;·&nbsp; AZ-900</span>
            </div>
            <Link
              href="#certs"
              className="ml-auto font-mono text-[11px] text-text-3 px-3 py-1.5 border border-border rounded-full transition-colors hover:text-amber hover:border-amber"
            >
              View all →
            </Link>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-text-3 mb-3.5">
      <span className="w-1 h-1 rounded-full bg-amber" />
      <span>{children}</span>
    </div>
  );
}

function MiniStat({
  value,
  label,
  color,
  className = "",
}: {
  value: string;
  label: string;
  color: "amber" | "sky" | "lime" | "coral";
  className?: string;
}) {
  const colorMap = {
    amber: "text-amber",
    sky: "text-sky",
    lime: "text-lime",
    coral: "text-coral",
  };
  return (
    <div
      className={`bg-surface border border-border rounded-[20px] px-5 py-[18px] transition-colors hover:border-border-hi ${className}`}
    >
      <div className={`font-display font-bold text-[40px] leading-none tracking-[-0.02em] ${colorMap[color]}`}>
        {value}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-3 mt-2.5">{label}</div>
    </div>
  );
}
