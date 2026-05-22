"use client";

import React from "react";
import AmbientBackground from "@/components/ui/AmbientBackground";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen text-gray-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Ambient background decoration */}
      <AmbientBackground />

      {/* Floating Menu */}
      <Navbar />

      {/* Main sections */}
      <main className="flex-grow flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Professional Footer */}
      <footer className="relative border-t border-white/5 bg-gray-950/80 py-10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left side */}
            <div className="flex items-center gap-1.5 text-base font-bold text-white">
              <span className="text-gradient font-black">&lt;</span>
              <span>Darmawan</span>
              <span className="text-gradient font-black">/&gt;</span>
            </div>

            {/* Middle side */}
            <p className="text-xs sm:text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Darmawan Portfolio. All Rights Reserved. Built with Next.js & React.
            </p>

            {/* Right side - status indicators */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-xs font-semibold text-gray-400">Available for Opportunities</span>
            </div>

          </div>
        </div>
      </footer>

      {/* Smooth scroll-to-top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/20 text-indigo-400 shadow-xl backdrop-blur-sm transition-all hover:bg-indigo-500 hover:text-white hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
