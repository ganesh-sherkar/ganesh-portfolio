// components/FloatingChatButton.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import Link from "next/link";
import { FiCpu, FiArrowRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { RiRobot2Fill } from "react-icons/ri";

export default function FloatingChatButton() {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [typedIndex, setTypedIndex] = useState(0);

  const hints = [
    "Ask my AI Agent...",
    "Explore Ganesh's Skills",
    "Inspect Live Projects",
    "Talk with DevBoost AI",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedIndex((prev) => (prev + 1) % hints.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [hints.length]);

  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 220, delay: 0.8 }}
      className="fixed bottom-5 left-4 sm:left-6 z-50 flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="DevBoost AI Assistant"
    >
      <Link href="/devboost-ai" className="relative flex items-center gap-3 focus:outline-none">
        {/* =========================================================
            1. CYBERNETIC AI AGENT ORB / CORE
        ========================================================= */}
        <div className="relative flex items-center justify-center">
          {/* Ambient Multi-Color Nebula Aura */}
          <div
            className="absolute -inset-2.5 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "radial-gradient(circle, var(--primary) 0%, #00f0ff 60%, transparent 80%)",
            }}
          />

          {/* Continuous Rotating 360° Conic Border Beam */}
          <div className="relative p-[2.5px] rounded-full overflow-hidden shadow-2xl">
            <div
              className="absolute inset-[-150%] animate-[spin_3.5s_linear_infinite]"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, var(--primary) 90deg, #00f0ff 180deg, #ec4899 270deg, transparent 360deg)",
              }}
            />

            {/* Inner Dark Capsule Body */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full backdrop-blur-2xl transition-all duration-300 border border-white/20"
              style={{
                background: isDarkMode
                  ? "radial-gradient(circle at 35% 30%, #1e1b4b 0%, #090d16 100%)"
                  : "radial-gradient(circle at 35% 30%, #ffffff 0%, #ede9fe 100%)",
                boxShadow: "inset 0 2px 6px rgba(255, 255, 255, 0.3), 0 8px 24px rgba(0, 0, 0, 0.35)",
              }}
            >
              {/* Concentric Subtle Rings */}
              <div className="absolute inset-1 rounded-full border border-cyan-400/20 opacity-30 pointer-events-none" />
              <div className="absolute inset-2 rounded-full border border-purple-400/15 pointer-events-none" />

              {/* Expressive AI Agent Core Icon */}
              <div className="relative z-10 flex items-center justify-center">
                <RiRobot2Fill
                  className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    color: isDarkMode ? "#00f0ff" : "var(--primary)",
                    filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.6))",
                  }}
                />
              </div>

              {/* Mini Sparkling Star Glint on Core */}
              <span className="absolute top-1.5 right-2 text-[10px] text-yellow-300 pointer-events-none">
                ✦
              </span>

              {/* Live Neural Online Beacon */}
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3 items-center justify-center">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 border border-white/90 shadow-[0_0_8px_#10b981]" />
              </span>
            </motion.div>
          </div>
        </div>

        {/* =========================================================
            2. INTERACTIVE AI AGENT DOCK / BADGE CALLOUT
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0.95, x: 0 }}
          className="hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border backdrop-blur-2xl transition-all duration-300 group-hover:border-[var(--primary)] group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
          style={{
            background: isDarkMode
              ? "color-mix(in srgb, #090d16 85%, transparent)"
              : "color-mix(in srgb, #ffffff 90%, transparent)",
            borderColor: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="flex flex-col">
            {/* Header: AI Badge + Status */}
            <div className="flex items-center gap-1.5">
              <span className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 dark:text-cyan-300">
                <HiSparkles className="h-3 w-3 text-purple-400" />
                DevBoost AI
              </span>
             
            </div>

            {/* Dynamic Rotating Prompt Hints */}
            <AnimatePresence mode="wait">
              <motion.p
                key={typedIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.28 }}
                className="text-[11px] font-medium tracking-tight whitespace-nowrap mt-0.5"
                style={{ color: "var(--text-heading)" }}
              >
                {hints[typedIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Interactive Arrow Pod */}
          <span
            className="flex h-6 w-6 items-center justify-center rounded-xl transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white group-hover:translate-x-0.5"
            style={{
              background: "color-mix(in srgb, var(--primary) 15%, transparent)",
              color: "var(--primary)",
            }}
          >
            <FiArrowRight className="h-3 w-3" />
          </span>
        </motion.div>
      </Link>
    </motion.aside>
  );
}