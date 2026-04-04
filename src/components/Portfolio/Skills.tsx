"use client";

import { motion } from "framer-motion";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

const categories = [
  {
    name: "Cloud Platforms",
    color: "#3b82f6",
    skills: [
      { name: "AWS", icon: `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Azure", icon: `${DI}/azure/azure-original.svg` },
      { name: "Azure DevOps", icon: `${DI}/azuredevops/azuredevops-original.svg` },
      { name: "DigitalOcean", icon: `${DI}/digitalocean/digitalocean-original.svg` },
      { name: "Hostinger", icon: `${SI}/hostinger/673DE6` },
    ],
  },
  {
    name: "DevOps & Tools",
    color: "#22c55e",
    skills: [
      { name: "Git", icon: `${DI}/git/git-original.svg` },
      { name: "GitHub", icon: `${SI}/github/ffffff` },
      { name: "Docker", icon: `${DI}/docker/docker-original.svg` },
      { name: "Kubernetes", icon: `${DI}/kubernetes/kubernetes-original.svg` },
      { name: "Terraform", icon: `${DI}/terraform/terraform-original.svg` },
      { name: "Ansible", icon: `${SI}/ansible/EE0000` },
    ],
  },
  {
    name: "Programming & Scripting",
    color: "#eab308",
    skills: [
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      { name: "PHP", icon: `${DI}/php/php-original.svg` },
      { name: "Bash", icon: `${SI}/gnubash/4EAA25` },
      { name: "Shell", icon: `${SI}/windowsterminal/4CC2FF` },
    ],
  },
  {
    name: "Web Development",
    color: "#06b6d4",
    skills: [
      { name: "React.js", icon: `${DI}/react/react-original.svg` },
      { name: "Laravel", icon: `${DI}/laravel/laravel-original.svg` },
      { name: "WordPress", icon: `${SI}/wordpress/21759B` },
      { name: "MySQL", icon: `${DI}/mysql/mysql-original.svg` },
      { name: "NGINX", icon: `${DI}/nginx/nginx-original.svg` },
    ],
  },
  {
    name: "Monitoring & Logging",
    color: "#f97316",
    skills: [
      { name: "Azure Monitor", icon: `${DI}/azure/azure-original.svg` },
      { name: "CloudWatch", icon: `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Prometheus", icon: `${DI}/prometheus/prometheus-original.svg` },
      { name: "Grafana", icon: `${DI}/grafana/grafana-original.svg` },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-neon-green mb-2 tracking-widest">
            {"// INFRASTRUCTURE DASHBOARD"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono">
            Technical Skills
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.08 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 className="text-base font-bold text-white">
                  {cat.name}
                </h3>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.05 + skillIdx * 0.04 }}
                    whileHover={{ y: -4, borderColor: cat.color + "66" }}
                    className="flex flex-col items-center gap-3 py-5 px-3 rounded-xl bg-dark-card border border-dark-border cursor-default transition-all hover:shadow-lg hover:shadow-black/20"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      loading="lazy"
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-xs font-mono text-zinc-400 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
