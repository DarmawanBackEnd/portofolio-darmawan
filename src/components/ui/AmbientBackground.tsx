"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AmbientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030712]">
      {/* Interactive Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 80,
          mass: 0.8,
        }}
      />

      {/* Floating Blobs */}
      <div className="absolute top-[10%] left-[5%] h-96 w-96 rounded-full bg-purple-600/10 blur-[120px] animate-float" />
      <div className="absolute bottom-[20%] right-[10%] h-[450px] w-[450px] rounded-full bg-teal-500/10 blur-[130px] animate-float-reverse" />
      <div className="absolute top-[40%] right-[30%] h-80 w-80 rounded-full bg-indigo-600/5 blur-[100px] animate-float" />

      {/* Grid Pattern overlay for depth */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
        style={{ opacity: 0.6 }}
      />
    </div>
  );
}
