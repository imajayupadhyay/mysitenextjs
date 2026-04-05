const driftIcons = [
  {
    cls: "top-[14%] left-[5%] w-11 text-amber [animation-delay:-3s]",
    svg: (
      <path d="M14 34a8 8 0 010-16 10 10 0 0119.5 2.5A7 7 0 0134 34H14z" />
    ),
  },
  {
    cls: "top-[26%] right-[7%] w-14 text-sky [animation-duration:28s] [animation-delay:-9s]",
    svg: (
      <>
        <rect x="8" y="10" width="32" height="10" rx="2" />
        <rect x="8" y="26" width="32" height="10" rx="2" />
        <circle cx="14" cy="15" r="1.5" fill="currentColor" />
        <circle cx="14" cy="31" r="1.5" fill="currentColor" />
        <line x1="20" y1="15" x2="34" y2="15" />
        <line x1="20" y1="31" x2="34" y2="31" />
      </>
    ),
  },
  {
    cls: "bottom-[38%] left-[10%] w-[50px] text-coral [animation-duration:32s] [animation-delay:-14s]",
    svg: (
      <>
        <rect x="8" y="10" width="32" height="28" rx="2" />
        <line x1="8" y1="20" x2="40" y2="20" />
        <line x1="8" y1="28" x2="40" y2="28" />
        <line x1="16" y1="10" x2="16" y2="38" />
        <line x1="24" y1="10" x2="24" y2="38" />
        <line x1="32" y1="10" x2="32" y2="38" />
      </>
    ),
  },
  {
    cls: "bottom-[16%] right-[12%] w-[42px] text-amber-soft [animation-delay:-18s]",
    svg: (
      <>
        <rect x="6" y="10" width="36" height="28" rx="3" />
        <path d="M12 20l6 4-6 4" />
        <line x1="22" y1="30" x2="32" y2="30" />
      </>
    ),
  },
  {
    cls: "top-[60%] right-[28%] w-[38px] text-lime [animation-duration:26s] [animation-delay:-6s]",
    svg: (
      <>
        <circle cx="24" cy="12" r="4" />
        <circle cx="12" cy="34" r="4" />
        <circle cx="36" cy="34" r="4" />
        <line x1="24" y1="16" x2="12" y2="30" />
        <line x1="24" y1="16" x2="36" y2="30" />
        <line x1="16" y1="34" x2="32" y2="34" />
      </>
    ),
  },
  {
    cls: "top-[48%] left-[32%] w-[46px] text-sky [animation-duration:34s] [animation-delay:-11s]",
    svg: (
      <>
        <circle cx="14" cy="12" r="3" />
        <circle cx="14" cy="36" r="3" />
        <circle cx="34" cy="24" r="3" />
        <line x1="14" y1="15" x2="14" y2="33" />
        <path d="M14 22c0 6 6 2 6 2h11" />
      </>
    ),
  },
];

const particles = [
  { left: "10%", delay: "-2s", color: "bg-amber shadow-amber" },
  { left: "22%", delay: "-6s", color: "bg-coral shadow-coral" },
  { left: "38%", delay: "-9s", color: "bg-amber shadow-amber" },
  { left: "55%", delay: "-12s", color: "bg-sky shadow-sky" },
  { left: "68%", delay: "-4s", color: "bg-amber shadow-amber" },
  { left: "82%", delay: "-7s", color: "bg-lime shadow-lime" },
  { left: "92%", delay: "-11s", color: "bg-amber shadow-amber" },
];

export default function BackgroundLayer() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Blobs */}
      <div className="absolute -top-[220px] -left-[140px] w-[680px] h-[680px] rounded-full bg-amber opacity-[0.14] blur-[100px] animate-blob-drift" />
      <div className="absolute -bottom-[180px] -right-[120px] w-[560px] h-[560px] rounded-full bg-coral opacity-[0.14] blur-[100px] animate-blob-drift [animation-delay:-10s]" />
      <div className="absolute top-[44%] left-[42%] w-[420px] h-[420px] rounded-full bg-sky opacity-[0.07] blur-[100px] animate-blob-drift [animation-delay:-6s]" />

      {/* Orbital rings */}
      <div className="absolute -top-[180px] -right-[180px] w-[560px] h-[560px] rounded-full border border-dashed border-amber/[0.08] animate-orbit-spin [animation-duration:85s]">
        <span className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-amber opacity-45 shadow-[0_0_16px_#ff9544]" />
        <span className="absolute -bottom-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-coral opacity-35 shadow-[0_0_16px_#ff5d73]" />
      </div>
      <div className="absolute top-[38%] -left-[450px] w-[900px] h-[900px] rounded-full border border-sky/[0.05] animate-orbit-spin [animation-duration:130s] [animation-direction:reverse]">
        <span className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-amber opacity-45 shadow-[0_0_16px_#ff9544]" />
      </div>
      <div className="absolute -bottom-[120px] right-[18%] w-[440px] h-[440px] rounded-full border border-dashed border-coral/[0.06] animate-orbit-spin [animation-duration:95s]">
        <span className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-amber opacity-45 shadow-[0_0_16px_#ff9544]" />
        <span className="absolute -bottom-1 left-1/2 -ml-1 w-2 h-2 rounded-full bg-coral opacity-35 shadow-[0_0_16px_#ff5d73]" />
      </div>

      {/* Drifting infra icons */}
      {driftIcons.map((icon, i) => (
        <div
          key={i}
          className={`absolute opacity-[0.09] animate-drift-float ${icon.cls}`}
        >
          <svg
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="block w-full h-auto"
          >
            {icon.svg}
          </svg>
        </div>
      ))}

      {/* Floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className={`absolute w-[3px] h-[3px] rounded-full opacity-0 animate-particle-rise ${p.color}`}
          style={{ left: p.left, animationDelay: p.delay, boxShadow: "0 0 6px currentColor" }}
        />
      ))}
    </div>
  );
}
