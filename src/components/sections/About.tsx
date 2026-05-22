"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Wrench, Cpu, Layers } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Backend & Database Development",
    icon: Server,
    color: "from-teal-500 to-emerald-500",
    skills: ["Laravel", "PHP", "MySQL", "Node.js", "RESTful APIs", "PostgreSQL", "Database Design"],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-indigo-500 to-blue-500",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion"],
  },
  {
    title: "Tools & Certifications",
    icon: Wrench,
    color: "from-purple-500 to-pink-500",
    skills: ["BNSP Web Development Certified", "Git & GitHub", "npm / pnpm", "VS Code", "Vercel", "Figma"],
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gray-950/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-semibold text-indigo-400 mb-3"
          >
            <Cpu className="h-3 w-3" />
            <span>About Me & Tech Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            My Professional <span className="text-gradient">Core Skills</span>
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-teal-500" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5 text-indigo-400" />
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Dedicated Web Developer with practical experience in building dynamic company profile websites and comprehensive backend management systems using Laravel, PHP, and MySQL. Proven ability to handle end-to-end web development, from content management to payment integration, through professional roles and entrepreneurial initiatives. Holds a BNSP certification in web development and is adept at collaborating via version control to deliver optimal and engaging digital solutions for clients.
              </p>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-gradient">1+</div>
                <div className="text-xs font-semibold text-gray-400 mt-1">Years of Activity</div>
              </div>
              <div className="glass-panel p-5 rounded-2xl text-center">
                <div className="text-3xl font-extrabold text-gradient-teal">10+</div>
                <div className="text-xs font-semibold text-gray-400 mt-1">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills Stack Categorized */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {SKILL_CATEGORIES.map((category, catIdx) => {
              const IconComp = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.15 }}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl glow-card"
                >
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white shadow-md`}>
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/5 bg-gray-900/60 px-3.5 py-1.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
