"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";

const TIMELINE_DATA = [
  {
    type: "work",
    role: "Web Developer",
    company: "PT. Integrasi Produktivitas Indonesia",
    location: "Indonesia",
    duration: "07/2025 - Present",
    description: "Developed and maintained interactive company profile websites for various corporate clients to boost client acquisition and engagement.",
    achievements: [
      "Designed and implemented an integrated website management system for a coffee training program (Baristara Academy).",
      "Built backend management features for tracking participant data, scheduling classes, processing payments, and recording revenue.",
      "Managed web content and optimized system performance to ensure a seamless user experience."
    ]
  },
  {
    type: "work",
    role: "Fullstack Web Developer",
    company: "Lumino Digital Agency (Self Employed)",
    location: "Indonesia",
    duration: "06/2025 - Present",
    description: "Built a dynamic company profile website for PT. Srikandhi Nusantara Jaya, implementing responsive front-end designs and robust server-side logic.",
    achievements: [
      "Managed the full lifecycle of client projects, from initial design and development to deployment and maintenance.",
      "Collaborated via version control to deliver optimal and engaging digital solutions for clients."
    ]
  },
  {
    type: "education",
    role: "Software Engineering",
    company: "SMKN 1 CILEGON - High School Diploma",
    location: "Cilegon, Indonesia",
    duration: "06/2023 - 07/2026",
    description: "Acquired a strong foundation in software engineering, database management, and web programming principles.",
    achievements: [
      "Obtained solid understanding of PHP, Laravel, MySQL, and modern web architectures.",
      "Adept at collaborating via Git version control to build dynamic web projects."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-gray-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 px-3 py-1 text-xs font-semibold text-teal-400 mb-3"
          >
            <Briefcase className="h-3 w-3" />
            <span>My Career Path</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Work Experience & <span className="text-gradient">Education</span>
          </motion.h2>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-teal-500 to-transparent transform sm:-translate-x-1/2" />

          {/* Timeline Cards */}
          <div className="space-y-12">
            {TIMELINE_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const IconComp = item.type === "work" ? Briefcase : GraduationCap;
              
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge (Circle) */}
                  <div className="absolute left-4 sm:left-1/2 h-8 w-8 rounded-full border-2 border-indigo-500 bg-gray-950 flex items-center justify-center transform -translate-x-[15px] sm:-translate-x-4 z-10 shadow-lg shadow-indigo-500/20">
                    <IconComp className="h-3.5 w-3.5 text-indigo-400" />
                  </div>

                  {/* Spacer Column for large layouts */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Main Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:px-6"
                  >
                    <div className="glass-panel glass-panel-hover p-6 rounded-2xl glow-card">
                      {/* Badge / Date & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-semibold text-gray-400">
                        <span className="flex items-center gap-1 text-indigo-400">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 opacity-60" />
                          {item.location}
                        </span>
                      </div>

                      {/* Header Title */}
                      <h3 className="text-lg font-bold text-white leading-tight">{item.role}</h3>
                      <h4 className="text-sm font-semibold text-gradient-teal mt-0.5">{item.company}</h4>

                      {/* Description */}
                      <p className="text-gray-300 text-xs sm:text-sm mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements Bullets */}
                      <ul className="mt-4 space-y-2 border-t border-white/5 pt-3">
                        {item.achievements.map((ach, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-2 text-xs text-gray-400 leading-normal">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
