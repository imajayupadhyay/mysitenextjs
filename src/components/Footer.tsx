export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border mt-[60px]">
      <div className="max-w-[1240px] mx-auto px-7 py-8 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 font-mono text-[11px] text-text-3">
        <span className="font-display font-semibold text-[14px] text-text tracking-[-0.01em]">
          Ajay Upadhyay
        </span>
        <span>DevOps &amp; Cloud Engineer · New Delhi</span>
        <span>© {new Date().getFullYear()} — all rights reserved</span>
      </div>
    </footer>
  );
}
