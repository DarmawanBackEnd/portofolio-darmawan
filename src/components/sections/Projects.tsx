"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, X, Info } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const PROJECT_CATEGORIES = ["All", "Laravel/PHP", "React/Next.js"];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Baristara Academy Management System",
    category: "Laravel/PHP",
    shortDesc: "An integrated CRM and class scheduling platform designed for a coffee training academy.",
    longDesc: "A robust website management system developed to handle end-to-end administration for Baristara Academy. Allows staff to track student participation, organize complex schedules, manage class enrollments, handle secure online payments, and generate automatic financial reports.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Blade", "Chart.js"],
    features: [
      "Real-time student attendance and progress logs.",
      "Integrated secure payment gateways for course registration fee transactions.",
      "Visualized revenue and class enrollment metrics on the admin control board."
    ],
    github: "https://github.com"
  },
  {
    id: 2,
    title: "PT. Srikandhi Nusantara Jaya Corporate Website",
    category: "Laravel/PHP",
    shortDesc: "A dynamic, high-performance company profile website with robust server-side data control.",
    longDesc: "A complete website project crafted to establish a strong online identity for PT. Srikandhi Nusantara Jaya. Combines a sleek, highly responsive front-end customer interface with an administration panel that enables staff to update services, manage client inquiries, and edit news streams.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    features: [
      "Custom content management module for easy administrative updates.",
      "Fast page loads and full Search Engine Optimization (SEO) setup.",
      "Protected user forms for incoming business inquiries with automated email notifications."
    ],
    github: "https://github.com"
  },
  {
    id: 3,
    title: "Interactive Developer Portfolio",
    category: "React/Next.js",
    shortDesc: "A premium, high-speed interactive portfolio using Next.js, React 19, and Tailwind v4.",
    longDesc: "This current portfolio website represents standard-setting design. Implemented with Next.js App Router for extreme performance, customized smooth keyframe physics, drifting ambient colored circles, and cursor reactive glowing effects.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    features: [
      "Dynamic mouse-tracking light decoration utilizing hardware-accelerated animations.",
      "Completely optimized to compile into a static fast-loading production bundle.",
      "Professional vertical experiences timeline and project interactive detail pop-ups."
    ],
    github: "https://github.com"
  },
  {
    id: 4,
    title: "Dynamic Task Planner Tool",
    category: "React/Next.js",
    shortDesc: "A clean client-side planning dashboard created to optimize daily developer schedules.",
    longDesc: "A highly responsive single-page web planner created to help developers organize their tasks, track priority weights, set estimated durations, and manage simple drag-and-drop categories to stay productive throughout the day.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "LocalStorage"],
    features: [
      "Automatic data persistence using browser LocalStorage.",
      "Interactive category filters and smooth custom transitions using framer-motion.",
      "Clean UI layout designed with a minimalist slate dark mode concept."
    ],
    github: "https://github.com"
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS_DATA[0] | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeTab === "All") return true;
    return project.category === activeTab;
  });

  return (
    <section id="projects" className="relative py-24 bg-gray-950/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-semibold text-indigo-400 mb-3"
          >
            <Layers className="h-3 w-3" />
            <span>My Creations</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {PROJECT_CATEGORIES.map((tab) => {
            const isTabActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-300 ${
                  isTabActive
                    ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300"
                    : "border-white/5 bg-gray-900/40 text-gray-400 hover:text-white hover:border-white/10"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="glass-panel glass-panel-hover p-6 rounded-2xl glow-card cursor-pointer group flex flex-col justify-between"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Category Tag */}
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-indigo-400 mb-3 bg-indigo-500/10 px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges preview */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-2">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="text-[10px] font-semibold bg-white/5 border border-white/5 text-gray-300 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[10px] font-semibold bg-white/5 border border-white/5 text-gray-400 px-2 py-0.5 rounded">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Link Button */}
                  <div className="flex items-center gap-1 text-xs font-semibold text-teal-400 group-hover:underline">
                    <span>View Project Details</span>
                    <Info className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Window for Project Detail */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gray-950/80 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-panel p-6 sm:p-8 rounded-3xl z-10 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-gray-900/60 text-white hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Modal Header */}
                <div>
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md mb-3">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white pr-8 leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Long Description */}
                <p className="text-gray-300 text-sm leading-relaxed mt-4">
                  {selectedProject.longDesc}
                </p>

                {/* Key Features Section */}
                <div className="mt-6 border-t border-white/5 pt-5">
                  <h4 className="text-sm font-bold text-white mb-3">Core Features & Achievements:</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Full Grid */}
                <div className="mt-6">
                  <h4 className="text-sm font-bold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="text-xs font-medium bg-white/5 border border-white/5 text-gray-200 px-3.5 py-1.5 rounded-xl">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-8 border-t border-white/5 pt-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm font-semibold rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-gray-200 hover:bg-white/10 hover:text-white transition-all"
                  >
                    <Github className="h-4 w-4 text-indigo-400" />
                    Source Code
                  </a>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
