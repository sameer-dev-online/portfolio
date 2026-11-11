"use client";

import { profile, projects } from "@/lib/data";
import { useEffect, useState } from "react";

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const totalRepos = projects.length;
  const techUsed = [
    ...new Set(projects.flatMap((p) => p.tech)),
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Who I Am
            </h2>
            <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Bio */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                {profile.bio}
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                I specialize in building modern web applications that combine
                beautiful user interfaces with powerful backend systems. From
                e-commerce platforms to AI-powered SaaS solutions, I love
                tackling complex problems and turning ideas into production-ready
                applications.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Currently based in <strong className="text-gray-300">{profile.location}</strong>,
                I work as a <strong className="text-gray-300">{profile.company}</strong>{" "}
                helping clients bring their digital products to life.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {totalRepos}+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {techUsed.length}+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    Technologies
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    2+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    Years Building
                  </div>
                </div>
              </div>

              {/* GitHub Link */}
              <div className="pt-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View all on GitHub &rarr;
                </a>
              </div>
            </div>

            {/* Avatar Card */}
            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity" />
                <div className="relative bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-50" />
                      <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="relative w-24 h-24 rounded-full border-2 border-gray-700 object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {profile.tagline}
                    </p>
                    <div className="mt-4 w-full border-t border-gray-800 pt-4 space-y-2 text-left">
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{profile.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{profile.company}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{profile.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}