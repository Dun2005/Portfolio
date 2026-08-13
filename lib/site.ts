export const site = {
  name: "Your Name",
  initials: "YN",
  title: "Software Developer",
  location: "Your City, Country",
  tagline:
    "I build reliable software and enjoy turning complex ideas into clean, well-crafted solutions that just work.",
  description:
    "I'm a software developer open to freelance work, collaborations, and projects from anywhere.",
  email: "hello@example.com",
  url: "https://example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tech: string[];
};

export type App = {
  name: string;
  description: string;
  link?: string;
};

export type BlogPost = {
  title: string;
  description: string;
  date: string;
  readingTime: string;
};

export const projects: Project[] = [
  {
    name: "Project Alpha",
    description:
      "A full-stack web application that streamlines workflows with real-time collaboration, role-based access, and a polished dashboard.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-alpha",
    demo: "https://example.com",
    featured: true,
  },
  {
    name: "Project Beta",
    description:
      "A REST API service powering mobile clients, with authentication, rate limiting, and comprehensive test coverage.",
    tech: ["ASP.NET", "C#", "SQL Server", "Redis"],
    github: "https://github.com/yourusername/project-beta",
    featured: true,
  },
  {
    name: "Project Gamma",
    description:
      "An open-source CLI tool that automates repetitive developer tasks and integrates with popular CI/CD pipelines.",
    tech: ["Node.js", "TypeScript", "Vitest"],
    github: "https://github.com/yourusername/project-gamma",
  },
  {
    name: "Project Delta",
    description:
      "A data visualization dashboard that turns raw metrics into actionable insights with interactive charts.",
    tech: ["React", "D3.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/project-delta",
    demo: "https://example.com",
  },
];

export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "Company Name",
    location: "Remote",
    period: "2023 — Present",
    description:
      "Design, build, and maintain web applications end-to-end. Collaborate across teams to ship reliable features and improve performance.",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL"],
  },
  {
    role: "Junior Developer",
    company: "Another Company",
    location: "City, Country",
    period: "2021 — 2023",
    description:
      "Implemented features, wrote automated tests, and supported production systems while learning industry best practices.",
    tech: ["JavaScript", "ASP.NET", "C#", "SQL Server"],
  },
];

export const apps: App[] = [
  {
    name: "App One",
    description:
      "A productivity tool that helps you organise tasks and track progress across projects.",
    link: "https://example.com",
  },
  {
    name: "App Two",
    description:
      "A lightweight utility that formats and validates developer data quickly.",
    link: "https://example.com",
  },
  {
    name: "App Three",
    description:
      "A cross-platform companion app with offline support and cloud sync.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with a Modern Web Stack",
    description:
      "A practical overview of the tools and patterns I reach for when starting a new project.",
    date: "2026-01-15",
    readingTime: "6 min read",
  },
  {
    title: "Writing Clean, Maintainable Code",
    description:
      "Lessons learned from refactoring legacy codebases and keeping them healthy over time.",
    date: "2025-11-02",
    readingTime: "8 min read",
  },
  {
    title: "Shipping Reliable Software",
    description:
      "Testing strategies, CI/CD pipelines, and habits that help you ship with confidence.",
    date: "2025-08-20",
    readingTime: "5 min read",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/apps", label: "Apps" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];
