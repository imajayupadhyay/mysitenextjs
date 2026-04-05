"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const portfolioLinks = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Certs", href: "#certs" },
  { label: "Contact", href: "#contact" },
];

const homeLinks = [{ label: "Portfolio", href: "/portfolio" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isPortfolio = pathname === "/portfolio";
  const links = isPortfolio ? portfolioLinks : homeLinks;

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 0.9, 0.3, 1] }}
      className="sticky top-4 z-50 mt-4 mx-auto max-w-[1180px] px-3"
    >
      <div className="flex items-center justify-between gap-5 pl-[18px] pr-3.5 py-2.5 border border-border rounded-full bg-[rgba(17,17,24,0.72)] backdrop-blur-[16px] backdrop-saturate-[140%]">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-[15px] tracking-[-0.01em] text-text">
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse-amber" />
          <span>Ajay Upadhyay</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 font-mono text-[12px]">
          {links.map((l) =>
            l.href.startsWith("#") ? (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-full text-text-2 transition-colors hover:text-text hover:bg-surface"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-full text-text-2 transition-colors hover:text-text hover:bg-surface"
              >
                {l.label}
              </Link>
            ),
          )}
        </div>

        {/* CTA */}
        <Link
          href={isPortfolio ? "#contact" : "/portfolio"}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-amber text-[#1a0f08] font-mono text-[12px] font-semibold transition-all hover:bg-amber-soft hover:translate-x-0.5"
        >
          {isPortfolio ? "Get in touch" : "View work"} <span>↗</span>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          aria-label="Toggle menu"
        >
          <span className={`w-4 h-px bg-text-2 transition-transform ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`w-4 h-px bg-text-2 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-4 h-px bg-text-2 transition-transform ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 rounded-2xl border border-border bg-[rgba(17,17,24,0.94)] backdrop-blur-[16px] p-3"
        >
          {links.map((l) =>
            l.href.startsWith("#") ? (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 font-mono text-[13px] text-text-2 rounded-lg transition-colors hover:text-text hover:bg-surface"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 font-mono text-[13px] text-text-2 rounded-lg transition-colors hover:text-text hover:bg-surface"
              >
                {l.label}
              </Link>
            ),
          )}
        </motion.div>
      )}
    </motion.nav>
  );
}
