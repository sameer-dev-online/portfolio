import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Sameer | Full-Stack Developer & AI Integrator",
  description:
    "Portfolio of Abdul Sameer — a full-stack developer specialized in Next.js, TypeScript, and AI-powered web applications. Based in Karachi, Pakistan.",
  keywords: [
    "Abdul Sameer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "AI",
    "Portfolio",
    "Karachi",
    "Pakistan",
    "Web Developer",
  ],
  authors: [{ name: "Abdul Sameer" }],
  creator: "Abdul Sameer",
  openGraph: {
    title: "Abdul Sameer | Full-Stack Developer & AI Integrator",
    description:
      "Building scalable web apps with Next.js, TypeScript, and AI. Check out my projects and get in touch.",
    url: "https://sameer-dev.online",
    siteName: "Abdul Sameer Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Sameer | Full-Stack Developer & AI Integrator",
    description:
      "Building scalable web apps with Next.js, TypeScript, and AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#030712] text-gray-100 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}