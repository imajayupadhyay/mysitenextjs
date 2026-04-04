import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Ajay Upadhyay's DevOps portfolio — professional experience, technical skills across AWS & Azure, certifications, and cloud infrastructure projects.",
};

export default function PortfolioPage() {
  return <Portfolio />;
}
