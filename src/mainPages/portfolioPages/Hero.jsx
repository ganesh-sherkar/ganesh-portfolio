"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiDownload,
  FiSmartphone,
  FiCode,
  FiChevronDown,
} from "react-icons/fi";
import HeroSceneBackground from "@/components/HeroSceneBackground";

const content = {
  name: "Ganesh Sherkar",
  role: "Full Stack Developer",
  tagline: "React.js • React Native • Node.js • MongoDB",
  summary:
    "I build scalable web and mobile applications with clean UI, strong performance, and practical solutions for real-world business needs.",
  image: "/assets/Professional1.jpg",
  resume: "/Ganesh_sherkar.pdf",
  stats: [
    { value: "1+", label: "Years Experience" },
    { value: "10K+", label: "Users Reached" },
    { value: "8+", label: "Projects Built" },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  // 3D Portrait tilt driven by pointer movement
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotateX = useSpring(mvX, { stiffness: 160, damping: 18 });
  const rotateY = useSpring(mvY, { stiffness: 160, damping: 18 });

  const onTilt = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    mvY.set(px * 16);
    mvX.set(-py * 16);
  };

  const resetTilt = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-8 pb-8 "
      style={{ background: "var(--bg)", color: "var(--text-body)" }}
    >
      <style>{`
        /* Dynamic Aurora Gradient Mesh Animations */
        @keyframes auroraWave1 {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 0.18;
          }
          33% {
            transform: translate(80px, -60px) scale(1.2) rotate(45deg);
            opacity: 0.28;
          }
          66% {
            transform: translate(-60px, 70px) scale(0.9) rotate(-30deg);
            opacity: 0.16;
          }
        }

        @keyframes auroraWave2 {
          0%, 100% {
            transform: translate(0, 0) scale(1.1) rotate(0deg);
            opacity: 0.15;
          }
          50% {
            transform: translate(-90px, -50px) scale(1.35) rotate(-60deg);
            opacity: 0.26;
          }
        }

        @keyframes auroraWave3 {
          0%, 100% {
            transform: translate(0, 0) scale(0.95);
            opacity: 0.12;
          }
          50% {
            transform: translate(70px, 60px) scale(1.25);
            opacity: 0.24;
          }
        }

        /* Rotating Portrait Neon Glow Ring */
        @keyframes spinRing {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Animated Scroll Wheel */
        @keyframes scrollWheelDot {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          40% {
            opacity: 1;
          }
          80% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 0;
            transform: translateY(12px);
          }
        }

        .aurora-orb-1 {
          animation: auroraWave1 18s ease-in-out infinite;
        }

        .aurora-orb-2 {
          animation: auroraWave2 22s ease-in-out infinite;
        }

        .aurora-orb-3 {
          animation: auroraWave3 16s ease-in-out infinite;
        }

        .animate-spin-ring {
          animation: spinRing 12s linear infinite;
        }

        .animate-scroll-dot {
          animation: scrollWheelDot 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>

      {/* =========================================================
          ANIMATED 3D WIREFRAME POLYHEDRON & AURORA BACKGROUND
      ========================================================= */}

      {/* 3D Geometric Polyhedron & Floating Tech Words Scene */}
      <HeroSceneBackground />

      {/* Dynamic Aurora Light Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Cyan / Electric Blue Aurora Orb */}
        <div
          className="aurora-orb-1 absolute -top-32 -left-20 h-[480px] w-[480px] rounded-full blur-[110px]"
          style={{
            background: "radial-gradient(circle, #00f0ff 0%, #3b82f6 50%, transparent 70%)",
          }}
        />

        {/* Purple / Magenta Aurora Orb */}
        <div
          className="aurora-orb-2 absolute top-1/4 -right-32 h-[540px] w-[540px] rounded-full blur-[130px]"
          style={{
            background: "radial-gradient(circle, #a855f7 0%, #ec4899 50%, transparent 70%)",
          }}
        />

        {/* Primary Accent Core Aurora Orb */}
        <div
          className="aurora-orb-3 absolute -bottom-36 left-1/3 h-[500px] w-[500px] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, var(--primary) 0%, #38bdf8 50%, transparent 70%)",
          }}
        />
      </div>

      {/* High-Tech Animated Cyber Grid Texture with Radial Fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-heading) 1px, transparent 1px), linear-gradient(90deg, var(--text-heading) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 30%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 30%, transparent 95%)",
        }}
      />

      {/* =========================================================
          MAIN HERO CONTAINER
      ========================================================= */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:gap-10 sm:px-6 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12 xl:gap-16">
        {/* LEFT — 3D TILT PROFILE IMAGE WITH ROTATING NEON GLOW RING */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center items-center w-full"
        >
          <div className="relative mx-auto flex justify-center items-center">
            <motion.div
              onMouseMove={onTilt}
              onMouseLeave={resetTilt}
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
              }}
              className="relative cursor-pointer select-none mx-auto flex justify-center items-center"
            >
              <div
                className="pointer-events-none absolute -left-6 -top-6 h-28 w-28 opacity-35 dark:opacity-55 select-none -z-10"
                style={{
                  backgroundImage: "radial-gradient(var(--primary) 1.5px, transparent 1.5px)",
                  backgroundSize: "12px 12px",
                }}
                aria-hidden="true"
              />

              {/* Outer Slow-Rotating Dotted Orbit Ring */}
              <div
                className="animate-[spin_30s_linear_infinite] pointer-events-none absolute -inset-5 sm:-inset-6 rounded-full opacity-50 dark:opacity-75"
                style={{
                  borderColor: "var(--primary)",
                }}
                aria-hidden="true"
              />

              {/* Soft Rotating Halo Blur */}
              <div
                className="animate-spin-ring pointer-events-none absolute -inset-4 rounded-full opacity-40 blur-2xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00f0ff, #3b82f6, #a855f7, #ec4899, #00f0ff)",
                }}
                aria-hidden="true"
              />

              {/* Sharp Rotating Conic Neon Gradient Ring */}
              <div
                className="animate-spin-ring pointer-events-none absolute -inset-[3px] rounded-full p-[2.5px]"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00f0ff, #3b82f6, #a855f7, #ec4899, #00f0ff)",
                }}
                aria-hidden="true"
              />

              {/* Profile Image Container with Dotted Outer Border Accent */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative h-[290px] w-[290px] xs:h-[310px] xs:w-[310px] overflow-hidden rounded-full sm:h-[320px] sm:w-[320px] md:h-[350px] md:w-[350px] lg:h-[380px] lg:w-[380px] xl:h-[410px] xl:w-[410px] ring-2 ring-offset-4 ring-dashed ring-[var(--primary)] ring-offset-[var(--bg)]"
                style={{ background: "var(--card)" }}
              >
                <Image
                  src={content.image}
                  alt="Ganesh Sherkar - Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Soft Glass Light Reflection */}
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_30%_10%,rgba(255,255,255,0.25),transparent_48%)]"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Experience Floating Badge */}
              <motion.div
                className="absolute -bottom-2 right-0 rounded-xl border px-3 py-1.5 shadow-2xl backdrop-blur-xl sm:-bottom-3 sm:-right-2 sm:px-3.5 sm:py-2"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-base font-bold sm:text-lg" style={{ color: "var(--primary)" }}>
                  1+
                </p>
                <p
                  className="mt-0 whitespace-nowrap text-[7px] uppercase tracking-[0.12em] sm:text-[8px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Years Exp
                </p>
              </motion.div>


            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — HERO CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* Welcome Tagline / Status Pill */}
          <div className="mb-2 flex items-center justify-center gap-2 sm:mb-3 lg:justify-start">
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] backdrop-blur-md sm:text-[10px]"
              style={{
                borderColor: "var(--border)",
                background: "var(--glass)",
                color: "var(--primary)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
              Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="whitespace-nowrap text-[1.5rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.7rem] xl:text-[3.1rem]"
            style={{ color: "var(--text-heading)" }}
          >
            Hi, I&apos;m <span className="gradient-text">{content.name}</span>
          </h1>

          {/* Role & Tech Stack */}
          <div className="mt-2 sm:mt-3">
            <h2
              className="text-base font-semibold leading-snug sm:text-lg md:text-xl"
              style={{ color: "var(--text-heading)" }}
            >
              {content.role}
            </h2>
            <p
              className="mt-1 text-[10px] font-semibold tracking-wide sm:text-xs"
              style={{ color: "var(--primary)" }}
            >
              React.js

              <span className="mx-1.5" style={{ color: "var(--text-muted)", opacity: 0.45 }}>•</span>
              Node.js
              <span className="mx-1.5" style={{ color: "var(--text-muted)", opacity: 0.45 }}>•</span>
              MongoDB
            </p>
          </div>

          {/* Summary */}
          <p
            className="mx-auto mt-2.5 max-w-[300px] text-xs leading-[1.65] sm:mt-3.5 sm:max-w-lg sm:text-sm sm:leading-relaxed lg:mx-0 lg:max-w-md xl:max-w-lg"
            style={{ color: "var(--text-body)", opacity: 0.85 }}
          >
            {content.summary}
          </p>

          {/* Availability */}
          <div className="mt-3 flex items-center justify-center gap-1.5 sm:mt-3.5 lg:justify-start">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse" />
            <span className="text-[10px] font-medium sm:text-xs" style={{ color: "var(--text-muted)" }}>
              Available for opportunities
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-4 flex w-full flex-row items-center justify-center gap-2 xs:gap-3 sm:mt-5 sm:w-auto lg:justify-start">
            {/* Primary Action: View Work */}
            <Link
              href="/projects"
              className="group relative flex-1 sm:flex-initial flex h-10 xs:h-11 items-center justify-center sm:justify-between gap-1.5 xs:gap-2 sm:gap-3 rounded-full px-3 xs:px-4 sm:pl-5 sm:pr-2 text-[11px] xs:text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 whitespace-nowrap"
              style={{
                background: "var(--primary)",
                color: "#FFFFFF",
                boxShadow: "0 4px 16px color-mix(in srgb, var(--primary) 30%, transparent)",
              }}
            >
              <span>View My Work</span>
              <span className="flex h-6 w-6 xs:h-7 xs:w-7 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-200 group-hover:translate-x-0.5 shrink-0">
                <FiArrowRight className="h-3 w-3 xs:h-3.5 xs:w-3.5" />
              </span>
            </Link>

            {/* Secondary Action: Download Resume */}
            <a
              href={content.resume}
              download
              className="group relative flex-1 sm:flex-initial flex h-10 xs:h-11 items-center justify-center sm:justify-between gap-1.5 xs:gap-2 sm:gap-3 rounded-full border px-3 xs:px-4 sm:pl-5 sm:pr-2 text-[11px] xs:text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md transition-all duration-200 hover:border-[var(--primary)] whitespace-nowrap"
              style={{
                background: "var(--glass)",
                borderColor: "var(--border)",
                color: "var(--text-heading)",
              }}
            >
              <span className="transition-colors group-hover:text-[var(--primary)]">Download Resume</span>
              <span
                className="flex h-6 w-6 xs:h-7 xs:w-7 items-center justify-center rounded-full border transition-all duration-200 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white shrink-0"
                style={{
                  background: "color-mix(in srgb, var(--primary) 8%, transparent)",
                  borderColor: "var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                <FiDownload className="h-3 w-3 xs:h-3.5 xs:w-3.5" />
              </span>
            </a>
          </div>

          {/* Modern Impact Metric Capsules */}
          <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3 max-w-lg w-full">
            {content.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="group relative flex flex-col justify-center px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:border-[var(--primary)] hover:-translate-y-0.5"
                style={{
                  background: "var(--glass)",
                  borderColor: "var(--border)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* Subtle top indicator bar on hover */}
                <div
                  className="absolute top-0 left-3 right-3 h-[1.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
                  }}
                />

                <div className="flex items-baseline gap-1">
                  <span
                    className="text-base sm:text-lg font-extrabold tracking-tight transition-colors duration-300 group-hover:text-[var(--primary)]"
                    style={{ color: "var(--text-heading)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background: idx === 0 ? "var(--primary)" : idx === 1 ? "#38bdf8" : "#a855f7",
                    }}
                  />
                </div>

                <p
                  className="mt-0.5 text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider leading-tight"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          VERTICAL RIGHT-SIDE CYBER SOCIAL RAIL (GITHUB, LINKEDIN, MSG)
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute right-2 sm:right-3.5 lg:right-7 top-[30%] -translate-y-1/2 z-30 flex flex-col items-center gap-1.5 sm:gap-2.5 lg:gap-3"
      >
        {/* ── Top Decorative Lines ── */}
        <div
          className="h-6 sm:h-10 lg:h-14 w-[1px] opacity-25"
          style={{ background: "linear-gradient(180deg, transparent, var(--border))" }}
        />
        <div
          className="h-1.5 w-1.5 rounded-full opacity-50"
          style={{ background: "var(--border)", boxShadow: "0 0 6px var(--border)" }}
        />
        <div
          className="h-8 sm:h-14 lg:h-20 w-[1px] opacity-40"
          style={{ background: "linear-gradient(180deg, var(--border), var(--primary))" }}
        />
        <div
          className="h-2 w-2 rounded-full opacity-70 animate-pulse"
          style={{ background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }}
        />


        {/* LinkedIn Button */}
        <div className="relative group flex items-center">
          <div className="pointer-events-none absolute right-full mr-3.5 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap z-50 hidden sm:block">
            <div
              className="relative flex items-center gap-2 rounded-xl border px-3 py-1.5 shadow-2xl backdrop-blur-xl"
              style={{
                background: "color-mix(in srgb, var(--card) 92%, black)",
                borderColor: "color-mix(in srgb, #0a66c2 50%, var(--border))",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), 0 0 16px rgba(56, 189, 248, 0.2)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-wide text-white">LinkedIn</span>
              <div
                className="absolute -right-1 top-1/2 -translate-y-1/2 h-2 w-2 rotate-45 border-t border-r"
                style={{
                  background: "color-mix(in srgb, var(--card) 92%, black)",
                  borderColor: "color-mix(in srgb, #0a66c2 50%, var(--border))",
                }}
              />
            </div>
          </div>
          <a
            href={content.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-xl sm:rounded-2xl border backdrop-blur-xl transition-all duration-200 hover:scale-110 hover:border-[#0a66c2] hover:text-[#38bdf8] hover:shadow-[0_0_22px_rgba(10,102,194,0.5)]"
            style={{
              background: "var(--glass)",
              borderColor: "var(--border)",
              color: "var(--text-heading)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            }}
          >
            <FiLinkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 transition-transform duration-200 group-hover:scale-110" />
          </a>
        </div>

        {/* Message Button */}
        <div className="relative group flex items-center">
          <div className="pointer-events-none absolute right-full mr-3.5 top-1/2 -translate-y-1/2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out whitespace-nowrap z-50 hidden sm:block">
            <div
              className="relative flex items-center gap-2 rounded-xl border px-3 py-1.5 shadow-2xl backdrop-blur-xl"
              style={{
                background: "color-mix(in srgb, var(--card) 92%, black)",
                borderColor: "color-mix(in srgb, var(--primary) 50%, var(--border))",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), 0 0 16px color-mix(in srgb, var(--primary) 30%, transparent)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ background: "var(--primary)", boxShadow: "0 0 8px var(--primary)" }}
              />
              <span className="text-[11px] font-semibold tracking-wide text-white">Send Message</span>
              <div
                className="absolute -right-1 top-1/2 -translate-y-1/2 h-2 w-2 rotate-45 border-t border-r"
                style={{
                  background: "color-mix(in srgb, var(--card) 92%, black)",
                  borderColor: "color-mix(in srgb, var(--primary) 50%, var(--border))",
                }}
              />
            </div>
          </div>
          <a
            href={content.socials.email}
            aria-label="Send Message"
            className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-xl sm:rounded-2xl border backdrop-blur-xl transition-all duration-200 hover:scale-110 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-[0_0_22px_color-mix(in_srgb,var(--primary)_50%,transparent)]"
            style={{
              background: "var(--glass)",
              borderColor: "var(--border)",
              color: "var(--text-heading)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            }}
          >
            <FiMail className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 transition-transform duration-200 group-hover:scale-110" />
          </a>
        </div>

        {/* ── Bottom Decorative Lines ── */}
        <div
          className="h-2 w-2 rounded-full opacity-70 animate-pulse"
          style={{ background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }}
        />
        <div
          className="h-8 sm:h-14 lg:h-20 w-[1px] opacity-40"
          style={{ background: "linear-gradient(180deg, var(--primary), var(--border))" }}
        />
        <div
          className="h-1.5 w-1.5 rounded-full opacity-50"
          style={{ background: "var(--border)", boxShadow: "0 0 6px var(--border)" }}
        />
        <div
          className="h-6 sm:h-10 lg:h-14 w-[1px] opacity-25"
          style={{ background: "linear-gradient(180deg, var(--border), transparent)" }}
        />
      </motion.div>

      {/* =========================================================
          EXACT MIDDLE CIRCULAR SCROLL DOWN BUTTON
      ========================================================= */}
      <motion.a
        href="#about"
        aria-label="Scroll down to explore"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="group absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center gap-1.5 transition-all duration-300"
      >
        {/* Outer Pulsing Ring for visibility */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute h-14 w-14 sm:h-[60px] sm:w-[60px] rounded-full animate-ping opacity-20"
            style={{ background: "var(--primary)" }}
          />

          {/* Glowing Circular Button */}
          <div
            className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 backdrop-blur-xl transition-all duration-300 group-hover:scale-110"
            style={{
              background: "color-mix(in srgb, var(--bg) 70%, var(--primary) 10%)",
              borderColor: "var(--primary)",
              boxShadow: "0 0 18px color-mix(in srgb, var(--primary) 40%, transparent), inset 0 0 12px color-mix(in srgb, var(--primary) 10%, transparent)",
            }}
          >
            <FiChevronDown
              className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce transition-transform duration-300 group-hover:scale-125"
              style={{ color: "var(--primary)" }}
            />
          </div>
        </div>

        {/* Scroll Label */}
        <span
          className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group-hover:text-[var(--primary)]"
          style={{ color: "var(--text-heading)", opacity: 0.7 }}
        >
          Scroll
        </span>
      </motion.a>
    </section>
  );
}