"use client";

import { useState, useEffect } from "react";

const systemInfo = [
  { type: "command", text: "$ neofetch" },
  { type: "blank", text: "" },
  { type: "ascii", text: "    ╭───────────────────────╮" },
  { type: "ascii", text: "    │   AJAY  UPADHYAY      │" },
  { type: "ascii", text: "    │   DevOps Engineer      │" },
  { type: "ascii", text: "    ╰───────────────────────╯" },
  { type: "blank", text: "" },
  { type: "label", text: "  Cloud       AWS · Azure · DigitalOcean" },
  { type: "label", text: "  Containers  Docker · Kubernetes" },
  { type: "label", text: "  IaC         Terraform · CloudFormation · Ansible" },
  { type: "label", text: "  CI/CD       GitHub Actions · Jenkins · Azure DevOps" },
  { type: "label", text: "  Monitor     Prometheus · Grafana · CloudWatch" },
  { type: "label", text: "  Languages   Python · Bash · JavaScript · PHP" },
  { type: "blank", text: "" },
  { type: "command", text: "$ uptime" },
  { type: "success", text: "  99.9% SLA  ·  3+ years  ·  110+ projects  ·  4 certs" },
  { type: "blank", text: "" },
  { type: "command", text: "$ echo $STATUS" },
  { type: "success", text: "  All systems operational ✓" },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (visibleLines >= systemInfo.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = systemInfo[visibleLines];
    if (currentLine.type === "blank") {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setCharIndex(0);
      }, 80);
      return () => clearTimeout(timer);
    }

    if (charIndex < currentLine.text.length) {
      const speed = currentLine.type === "command" ? 35 : 12;
      const timer = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCharIndex(0);
    }, currentLine.type === "command" ? 350 : 80);
    return () => clearTimeout(timer);
  }, [visibleLines, charIndex]);

  const getLineColor = (type: string) => {
    switch (type) {
      case "command": return "text-neon-green";
      case "ascii": return "text-neon-blue";
      case "label": return "text-zinc-300";
      case "success": return "text-neon-green";
      default: return "text-zinc-400";
    }
  };

  return (
    <div className="w-full rounded-xl overflow-hidden border border-dark-border bg-[#0d1117] shadow-2xl shadow-neon-blue/5">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-dark-border">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-mono text-zinc-500">
          ajay@cloud:~
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[340px]">
        {systemInfo.slice(0, visibleLines + 1).map((line, i) => {
          if (line.type === "blank") return <div key={i} className="h-2" />;

          const isCurrentLine = i === visibleLines;
          const displayText = isCurrentLine
            ? line.text.slice(0, charIndex)
            : line.text;

          return (
            <div key={i} className={`${getLineColor(line.type)} whitespace-pre`}>
              {line.type === "label" ? (
                <>
                  <span className="text-neon-blue">
                    {displayText.split("  ")[0]}
                    {"  "}
                    {displayText.split("  ")[1]}
                  </span>
                  <span className="text-zinc-400">
                    {displayText.substring(
                      (displayText.split("  ")[0] + "  " + displayText.split("  ")[1]).length
                    )}
                  </span>
                </>
              ) : (
                displayText
              )}
              {isCurrentLine && !isComplete && (
                <span className="inline-block w-2 h-4 bg-neon-green ml-0.5 align-middle animate-blink" />
              )}
            </div>
          );
        })}
        {isComplete && (
          <div className="text-neon-green">
            ${" "}
            <span className="inline-block w-2 h-4 bg-neon-green ml-0.5 align-middle animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
}
