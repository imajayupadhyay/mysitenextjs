const keywords = [
  "Kubernetes", "Terraform", "AWS", "Docker", "CI/CD",
  "Azure DevOps", "CloudFormation", "Prometheus", "Grafana", "Jenkins",
  "GitHub Actions", "Ansible", "Lambda", "S3", "CloudWatch",
];

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-[22px] my-10 border-y border-border relative [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
      aria-hidden="true"
    >
      <div className="flex gap-14 animate-marquee-scroll w-max font-display font-semibold text-[clamp(24px,3vw,38px)] text-text-3 tracking-tight whitespace-nowrap hover:[animation-play-state:paused]">
        {[...keywords, ...keywords].map((k, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-14 transition-colors hover:text-amber"
          >
            {k}
            <span className="inline-block w-2 h-2 rounded-full bg-amber opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}
