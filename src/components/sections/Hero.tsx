"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail, Sparkles, Terminal } from "lucide-react";

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

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TYPING_WORDS = ["Web Developer", "Laravel & PHP Expert", "Full Stack Developer", "Database Specialist"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [subStr, setSubStr] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = TYPING_WORDS[wordIdx];
    
    const tick = () => {
      if (!isDeleting) {
        setSubStr(currentWord.substring(0, subStr.length + 1));
        if (subStr === currentWord) {
          timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before starting delete
        } else {
          timer = setTimeout(tick, 100);
        }
      } else {
        setSubStr(currentWord.substring(0, subStr.length - 1));
        if (subStr === "") {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % TYPING_WORDS.length);
        } else {
          timer = setTimeout(tick, 50);
        }
      }
    };

    timer = setTimeout(tick, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [subStr, isDeleting, wordIdx]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Intro Texts */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Available for Hire & Projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none"
            >
              Hi, I am <span className="text-gradient">Darmawan Wibisono</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-gray-300 h-[40px] flex items-center"
            >
              <span className="mr-2">I am a</span>
              <span className="text-gradient-teal font-black">{subStr}</span>
              <span className="w-1.5 h-6 bg-teal-400 ml-1 animate-pulse" />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Building fast, interactive, and visually stunning web applications with modern technologies like Next.js, React, Tailwind, and TypeScript. Let's build something extraordinary together.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02]"
              >
                View My Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/cv.pdf"
                download="Darmawan_CV.pdf"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-gray-200 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white"
              >
                <FileText className="h-4 w-4 text-indigo-400" />
                Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 pt-4"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Connect:</span>
              <a
                href="https://github.com/DarmawanBackEnd"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-gray-900/50 text-gray-400 transition-all hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/darmawan-wibisono-933227324/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-gray-900/50 text-gray-400 transition-all hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@darmawan.dev"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-gray-900/50 text-gray-400 transition-all hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Interactive Terminal IDE */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full max-w-md glass-panel rounded-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Window Tabs */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-950/80 border-b border-white/5 select-none">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-500">
                  <Terminal className="h-3.5 w-3.5 text-indigo-400" />
                  <span>darmawan.tsx</span>
                </div>
                <div className="w-10" />
              </div>

              {/* IDE Code Content */}
              <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-gray-300 bg-gray-950/40 select-none">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-gray-400">{`{`}</span>
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">name:</span>{" "}
                  <span className="text-teal-300">"Darmawan"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">role:</span>{" "}
                  <span className="text-teal-300">"Software Engineer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">skills:</span>{" "}
                  <span className="text-gray-400">{`[`}</span>
                </div>
                <div className="pl-8">
                  <span className="text-teal-300">"Laravel"</span>,{" "}
                  <span className="text-teal-300">"PHP"</span>,{" "}
                  <span className="text-teal-300">"MySQL"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-teal-300">"React"</span>,{" "}
                  <span className="text-teal-300">"Next.js"</span>
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">{`],`}</span>
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">passionateAbout:</span>{" "}
                  <span className="text-gray-400">{`{`}</span>
                </div>
                <div className="pl-8">
                  <span className="text-gray-400">performance:</span>{" "}
                  <span className="text-yellow-400">true</span>,
                </div>
                <div className="pl-8">
                  <span className="text-gray-400">cleanCode:</span>{" "}
                  <span className="text-yellow-400">true</span>,
                </div>
                <div className="pl-8">
                  <span className="text-gray-400">animations:</span>{" "}
                  <span className="text-yellow-400">true</span>
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">{`}`}</span>
                </div>
                <div>
                  <span className="text-gray-400">{`};`}</span>
                </div>
                
                <div className="mt-4 text-gray-500 border-t border-white/5 pt-4">
                  <span className="text-green-500">// Outputting passion</span>
                </div>
                <div>
                  <span className="text-purple-400">if</span>{" "}
                  <span className="text-gray-400">(</span>
                  <span className="text-blue-400">developer</span>
                  <span className="text-white">.</span>
                  <span className="text-gray-300">passionateAbout</span>
                  <span className="text-white">.</span>
                  <span className="text-gray-300">cleanCode</span>
                  <span className="text-gray-400">)</span>{" "}
                  <span className="text-gray-400">{`{`}</span>
                </div>
                <div className="pl-4 text-green-400">
                  <span>console</span>
                  <span className="text-white">.</span>
                  <span>log</span>
                  <span className="text-white">(</span>
                  <span className="text-teal-300">"Let's build standard-setting apps! 🚀"</span>
                  <span className="text-white">);</span>
                </div>
                <div>
                  <span className="text-gray-400">{`}`}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
