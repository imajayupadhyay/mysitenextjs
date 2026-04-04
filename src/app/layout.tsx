import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ajayupadhyay.com"),
  title: {
    default: "Ajay Upadhyay | DevOps & Cloud Engineer",
    template: "%s | Ajay Upadhyay",
  },
  description:
    "Portfolio of Ajay Upadhyay — DevOps & Cloud Engineer with 3+ years of experience in AWS, Azure, Kubernetes, Terraform, CI/CD pipelines, and cloud infrastructure management. AWS & Azure Certified.",
  keywords: [
    "Ajay Upadhyay",
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS",
    "Azure",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Docker",
    "Cloud Infrastructure",
    "AWS Certified Solutions Architect",
    "Azure Administrator",
    "DevOps Portfolio",
    "Infrastructure as Code",
  ],
  authors: [{ name: "Ajay Upadhyay" }],
  creator: "Ajay Upadhyay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ajayupadhyay.com",
    siteName: "Ajay Upadhyay — DevOps & Cloud Engineer",
    title: "Ajay Upadhyay | DevOps & Cloud Engineer",
    description:
      "DevOps & Cloud Engineer specializing in AWS, Azure, Kubernetes, Terraform, and CI/CD. 3+ years experience, 110+ projects, 99.9% uptime SLA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Upadhyay | DevOps & Cloud Engineer",
    description:
      "DevOps & Cloud Engineer specializing in AWS, Azure, Kubernetes, Terraform, and CI/CD. 3+ years experience, 110+ projects, 99.9% uptime SLA.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
