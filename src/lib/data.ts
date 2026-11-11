/**
 * GitHub profile data for Abdul Sameer
 * Pulled from live GitHub API (sameer-dev-online)
 */

export const profile = {
  name: "Abdul Sameer",
  tagline: "Full-Stack Developer & AI Integrator",
  title: "Building Scalable Web Apps with Next.js, TypeScript & AI",
  bio: "Hi! I build scalable full-stack web applications using Next.js (App Router) and TypeScript. I integrate AI tools like OpenAI and Groq to enhance modern web apps. Based in Karachi, Pakistan.",
  location: "Karachi, Pakistan",
  email: "sameer.3for4@gmail.com",
  website: "sameer-dev.online",
  github: "https://github.com/sameer-dev-online",
  avatar: "https://avatars.githubusercontent.com/u/192999720?v=4",
  company: "Freelancer",
};

export interface Project {
  name: string;
  description: string;
  url: string;
  repo: string;
  language: string;
  stars: number;
  featured: boolean;
  year: number;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: "MentorAI",
    description:
      "Complete SaaS solution for coaches featuring an agentic AI chatbot system. Built with Next.js, TypeScript, and integrated AI agents for automated coaching assistance.",
    url: "https://mentorax-ai.vercel.app",
    repo: "https://github.com/sameer-dev-online/mentorax_ai",
    language: "TypeScript",
    stars: 0,
    featured: true,
    year: 2025,
    tech: ["Next.js", "TypeScript", "AI Agents", "SaaS"],
  },
  {
    name: "RAG Agent System",
    description:
      "Complete agentic RAG (Retrieval-Augmented Generation) system for intelligent document querying and knowledge retrieval using Python and vector databases.",
    url: "https://rag-agent-teal.vercel.app",
    repo: "https://github.com/sameer-dev-online/Rag_Agent",
    language: "Python",
    stars: 0,
    featured: true,
    year: 2026,
    tech: ["Python", "RAG", "LangChain", "Vector DB", "AI"],
  },
  {
    name: "Reels Pro",
    description:
      "Modern full-stack web app for creating, uploading, and sharing short video reels — featuring seamless video upload and a smooth responsive UI.",
    url: "https://reels-pro-nu.vercel.app",
    repo: "https://github.com/sameer-dev-online/reels-pro-app",
    language: "TypeScript",
    stars: 0,
    featured: true,
    year: 2025,
    tech: ["Next.js", "TypeScript", "Video Processing", "Upload"],
  },
  {
    name: "Vibewearz",
    description:
      "E-commerce platform for a print-on-demand business. Full admin panel with order management and storefront built with Next.js and TypeScript.",
    url: "https://vibewearz.vercel.app",
    repo: "https://github.com/sameer-dev-online/vibewearz",
    language: "TypeScript",
    stars: 0,
    featured: true,
    year: 2026,
    tech: ["Next.js", "TypeScript", "E-commerce", "Print-on-Demand"],
  },
  {
    name: "Mega Mall",
    description:
      "Full-stack e-commerce web application with both frontend and backend. Complete shopping experience with product management and cart functionality.",
    url: "https://mega-mall.vercel.app",
    repo: "https://github.com/sameer-dev-online/mega-mall",
    language: "TypeScript",
    stars: 0,
    featured: false,
    year: 2025,
    tech: ["Next.js", "TypeScript", "E-commerce", "Full-Stack"],
  },
  {
    name: "Postgrey MCP",
    description:
      "MCP (Model Context Protocol) server for PostgreSQL connections, enabling AI agents to query and interact with databases seamlessly.",
    url: "https://postgrey-mcp.vercel.app",
    repo: "https://github.com/sameer-dev-online/postgrey-mcp",
    language: "Python",
    stars: 0,
    featured: false,
    year: 2026,
    tech: ["Python", "MCP", "PostgreSQL", "AI Agents"],
  },
  {
    name: "Sarah Coach",
    description:
      "Complete personal coaching website designed for a professional coach — includes service pages, booking flows, and client management.",
    url: "https://sarah-johnson-sigma.vercel.app",
    repo: "https://github.com/sameer-dev-online/sarah_coach",
    language: "TypeScript",
    stars: 0,
    featured: false,
    year: 2025,
    tech: ["Next.js", "TypeScript", "Coaching", "Booking"],
  },
  {
    name: "True Feedback",
    description:
      "Anonymous feedback platform allowing users to send and receive honest feedback in a safe, moderated environment.",
    url: "https://true-feedback-dun.vercel.app",
    repo: "https://github.com/sameer-dev-online/true-feedback",
    language: "TypeScript",
    stars: 0,
    featured: false,
    year: 2025,
    tech: ["Next.js", "TypeScript", "Feedback", "Anonymous"],
  },
];

export const techStack = [
  { category: "Frontend", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", skills: ["Node.js", "Python", "Express", "PostgreSQL", "AppWrite"] },
  { category: "AI & ML", skills: ["OpenAI", "Groq", "LangChain", "RAG", "Vector DBs", "MCP"] },
  { category: "DevOps & Tools", skills: ["Git", "GitHub", "Vercel", "VS Code", "Linux"] },
];

export const socialLinks = [
  { name: "GitHub", url: profile.github, icon: "github" },
  { name: "Email", url: `mailto:${profile.email}`, icon: "email" },
  { name: "Website", url: `https://${profile.website}`, icon: "globe" },
];