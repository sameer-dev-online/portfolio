"use client";

import { techStack } from "@/lib/data";
import { useEffect, useState } from "react";

const techIcons: Record<string, string> = {
  "Next.js": "▲",
  React: "⚛",
  TypeScript: "TS",
  "Tailwind CSS": "~",
  "HTML/CSS": "#",
  "Node.js": "●",
  Python: "🐍",
  Express: "ε",
  PostgreSQL: "🐘",
  AppWrite: "A",
  OpenAI: "🤖",
  Groq: "⚡",
  LangChain: "🦜",
  RAG: "📚",
  "Vector DBs": "◈",
  MCP: "🔌",
  Git: "⎇",
  GitHub: "⬡",
  Vercel: "▽",
  "VS Code": "</>",
  Linux: "🐧",
};

export default function TechStackSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="tech-stack" className="py-24 sm:py-32 relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-3">
              Tech Stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Tools & Technologies
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl">
              The technologies I work with daily — from frontend to AI/ML,
              chosen for performance, scalability, and developer experience.
            </p>
            <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          {/* Tech Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((group) => (
              <div
                key={group.category}
                className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300"
              >
                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-5">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 text-sm text-gray-300 group"
                    >
                      <span className="w-8 h-8 rounded-lg bg-gray-800/70 border border-gray-700/50 flex items-center justify-center text-xs font-mono text-gray-500 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
                        {techIcons[skill] || "•"}
                      </span>
                      <span className="group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}