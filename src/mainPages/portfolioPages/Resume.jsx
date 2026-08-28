"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiDownload,
  FiAward,
  FiBookOpen,
  FiMapPin,
  FiZap,
  FiTrendingUp,
  FiCheck,
  FiLayers,
  FiExternalLink,
} from "react-icons/fi";
import { useTheme } from "@/components/ThemeProvider";
import { fallbackResume } from "@/lib/publicContent";
import DevCodingBackground from "@/components/DevCodingBackground";

export default function Resume() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("all");

  const {
    experiences = [],
    education = [],
    certifications = [],
    resumeUrl = "/Ganesh Sherkar Resume.pdf",
  } = fallbackResume;

  const totalCount =
    experiences.length + education.length + certifications.length;

  const tabs = [
    { id: "all", label: "All Overview", count: totalCount, icon: FiLayers },
    {
      id: "experience",
      label: "Experience",
      count: experiences.length,
      icon: FiBriefcase,
    },
    {
      id: "education",
      label: "Education",
      count: education.length,
      icon: FiBookOpen,
    },
    {
      id: "certifications",
      label: "Certifications",
      count: certifications.length,
      icon: FiAward,
    },
  ];

  const stats = [
    { label: "Experience", value: "1+ Yrs", icon: FiTrendingUp },
    { label: "Roles", value: `${experiences.length || 3}+`, icon: FiBriefcase },
    { label: "Agile Sprints", value: "10+", icon: FiZap },
    { label: "Delivery Rate", value: "95%+", icon: FiCheckCircle },
  ];

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 py-10 sm:py-14 md:py-16 ${
        isDarkMode ? "bg-[#05060d] text-white" : "bg-gray-50/90 text-gray-900"
      }`}
    >
      {/* Background Ambience */}
      <DevCodingBackground />

      <div
        className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 sm:h-96 sm:w-96 -translate-x-1/2 rounded-full blur-[110px] opacity-[0.10]"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-24 h-64 w-64 rounded-full blur-[100px] opacity-[0.08]"
        style={{ background: "var(--primary)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =======================================================
            HEADER SECTION (Compact & Sleek)
        ======================================================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-6 sm:pb-8 border-b border-white/10 dark:border-white/10 border-gray-200">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-2.5 text-xs font-semibold uppercase tracking-wider"
              style={{
                borderColor: isDarkMode
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(0,0,0,0.10)",
                background: isDarkMode
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(0,0,0,0.02)",
                color: "var(--primary)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--primary)" }}
              />
              Career Path & Credentials
            </div>

            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--text-heading)" }}
            >
              Resume &{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--primary), var(--primary-3, #a97bff))",
                }}
              >
                Experience
              </span>
            </h1>

            <p
              className={`mt-1.5 text-xs sm:text-sm max-w-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Explore my professional journey, hands-on production experience,
              academic background, and verified certifications.
            </p>
          </div>

          {/* Quick Action: Download Resume */}
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-md text-white transition-all duration-300"
              style={{
                background: "var(--primary)",
                boxShadow:
                  "0 6px 20px color-mix(in srgb, var(--primary) 35%, transparent)",
              }}
            >
              <FiDownload className="text-sm" />
              <span>Download CV</span>
            </motion.a>
          </div>
        </div>

        {/* =======================================================
            COMPACT STATS STRIP (Small flex cards)
        ======================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 my-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`flex items-center gap-3 p-2.5 sm:p-3.5 rounded-xl border backdrop-blur-md transition-all duration-200 ${
                  isDarkMode
                    ? "bg-white/[0.025] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                    : "bg-white/90 border-gray-200/90 shadow-sm hover:border-gray-300"
                }`}
              >
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 text-sm"
                  style={{
                    background:
                      "color-mix(in srgb, var(--primary) 12%, transparent)",
                    color: "var(--primary)",
                  }}
                >
                  <Icon />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-sm sm:text-base font-extrabold leading-tight"
                    style={{ color: "var(--text-heading)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={`text-[11px] font-medium truncate mt-0.5 ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =======================================================
            CATEGORY SELECTOR TABS (Sleek pill bar)
        ======================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 mb-6">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                  active
                    ? "text-white border-transparent shadow-sm"
                    : isDarkMode
                    ? "text-gray-400 hover:text-white border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                    : "text-gray-600 hover:text-gray-900 border-gray-200 bg-white hover:bg-gray-100/80 shadow-xs"
                }`}
                style={active ? { background: "var(--primary)" } : {}}
              >
                <TabIcon
                  className={`text-xs ${
                    active
                      ? "text-white"
                      : "group-hover:text-[var(--primary)] transition-colors"
                  }`}
                />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md font-bold ${
                    active
                      ? "bg-white/20 text-white"
                      : isDarkMode
                      ? "bg-white/10 text-gray-400"
                      : "bg-gray-100 text-gray-600 border border-gray-200"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* =======================================================
            DYNAMIC CONTENT SECTIONS
        ======================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* ── 1. EXPERIENCE SECTION (Small Compact Flex Cards) ── */}
            {(activeTab === "all" || activeTab === "experience") && (
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                      style={{
                        background:
                          "color-mix(in srgb, var(--primary) 14%, transparent)",
                        color: "var(--primary)",
                      }}
                    >
                      <FiBriefcase />
                    </div>
                    <h2
                      className="text-base sm:text-lg font-bold tracking-tight"
                      style={{ color: "var(--text-heading)" }}
                    >
                      Work Experience
                    </h2>
                  </div>
                  <span
                    className={`text-[11px] font-medium ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {experiences.length} Positions
                  </span>
                </div>

                <div className="flex flex-col gap-3.5 sm:gap-4">
                  {experiences.map((exp, index) => {
                    const initials = exp.company
                      ? exp.company
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()
                      : "EXP";

                    return (
                      <motion.div
                        key={`${exp.role}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.04 }}
                        className={`group relative rounded-xl border p-4 sm:p-5 transition-all duration-200 ${
                          isDarkMode
                            ? "bg-white/[0.025] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                            : "bg-white border-gray-200/90 shadow-xs hover:border-gray-300 hover:shadow-sm"
                        }`}
                      >
                        {/* Left accent accent bar */}
                        <div
                          className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity"
                          style={{ background: "var(--primary)" }}
                        />

                        {/* Card Header Flex */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-white/10 dark:border-white/10 border-gray-100">
                          <div className="flex items-start sm:items-center gap-3">
                            {/* Company Avatar Badge */}
                            <div
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 border"
                              style={{
                                background:
                                  "color-mix(in srgb, var(--primary) 10%, transparent)",
                                borderColor:
                                  "color-mix(in srgb, var(--primary) 20%, transparent)",
                                color: "var(--primary)",
                              }}
                            >
                              {initials}
                            </div>

                            <div>
                              <h3
                                className="text-sm sm:text-base font-bold leading-tight"
                                style={{ color: "var(--text-heading)" }}
                              >
                                {exp.role}
                              </h3>
                              <p
                                className="text-xs font-semibold mt-0.5"
                                style={{ color: "var(--primary)" }}
                              >
                                {exp.company}
                              </p>
                            </div>
                          </div>

                          {/* Duration Badge */}
                          <div
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold self-start sm:self-center border"
                            style={{
                              borderColor: isDarkMode
                                ? "rgba(255,255,255,0.10)"
                                : "rgba(0,0,0,0.08)",
                              background: isDarkMode
                                ? "rgba(255,255,255,0.03)"
                                : "rgba(0,0,0,0.02)",
                              color: isDarkMode ? "#cbd5e1" : "#475569",
                            }}
                          >
                            <FiCalendar className="text-[11px] opacity-75" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        {/* Bullet Highlights (Compact flex rows) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-3">
                          {exp.points.map((pt, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-start gap-2 text-xs leading-relaxed"
                              style={{
                                color: isDarkMode ? "#cbd5e1" : "#475569",
                              }}
                            >
                              <div
                                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px]"
                                style={{
                                  background:
                                    "color-mix(in srgb, var(--primary) 15%, transparent)",
                                  color: "var(--primary)",
                                }}
                              >
                                <FiCheck />
                              </div>
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Pills (Small flex tags) */}
                        {exp.tech && exp.tech.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-white/10 dark:border-white/10 border-gray-100">
                            <span className="text-[10px] uppercase font-bold tracking-wider opacity-50 mr-1">
                              Stack:
                            </span>
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md border transition-colors hover:border-[var(--primary)]"
                                style={{
                                  background: isDarkMode
                                    ? "rgba(255,255,255,0.03)"
                                    : "rgba(0,0,0,0.02)",
                                  borderColor: isDarkMode
                                    ? "rgba(255,255,255,0.08)"
                                    : "rgba(0,0,0,0.06)",
                                  color: isDarkMode ? "#e2e8f0" : "#334155",
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── 2. EDUCATION & CERTIFICATIONS (Dual Grid of Small Flex Cards) ── */}
            {(activeTab === "all" ||
              activeTab === "education" ||
              activeTab === "certifications") && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                {/* EDUCATION COLUMN */}
                {(activeTab === "all" || activeTab === "education") && (
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                          style={{
                            background:
                              "color-mix(in srgb, var(--primary) 14%, transparent)",
                            color: "var(--primary)",
                          }}
                        >
                          <FiBookOpen />
                        </div>
                        <h2
                          className="text-base sm:text-lg font-bold tracking-tight"
                          style={{ color: "var(--text-heading)" }}
                        >
                          Education
                        </h2>
                      </div>
                      <span
                        className={`text-[11px] font-medium ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {education.length} Degrees
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      {education.map((edu, idx) => (
                        <motion.div
                          key={`${edu.title}-${idx}`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.04 }}
                          className={`relative rounded-xl border p-3.5 sm:p-4 transition-all duration-200 ${
                            isDarkMode
                              ? "bg-white/[0.025] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                              : "bg-white border-gray-200/90 shadow-xs hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span
                              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                              style={{
                                background:
                                  "color-mix(in srgb, var(--primary) 12%, transparent)",
                                color: "var(--primary)",
                              }}
                            >
                              {edu.time}
                            </span>
                            {edu.cgpa && (
                              <span
                                className="text-[11px] font-semibold px-2 py-0.5 rounded-md border"
                                style={{
                                  borderColor:
                                    "color-mix(in srgb, var(--primary) 25%, transparent)",
                                  color: "var(--primary)",
                                }}
                              >
                                {edu.cgpa}
                              </span>
                            )}
                          </div>

                          <h3
                            className="text-xs sm:text-sm font-bold"
                            style={{ color: "var(--text-heading)" }}
                          >
                            {edu.title}
                          </h3>

                          <p
                            className={`text-xs mt-1 flex items-center gap-1.5 ${
                              isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            <FiMapPin className="text-[11px] shrink-0 text-[var(--primary)]" />
                            <span>{edu.place}</span>
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CERTIFICATIONS COLUMN */}
                {(activeTab === "all" || activeTab === "certifications") && (
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs"
                          style={{
                            background:
                              "color-mix(in srgb, var(--primary) 14%, transparent)",
                            color: "var(--primary)",
                          }}
                        >
                          <FiAward />
                        </div>
                        <h2
                          className="text-base sm:text-lg font-bold tracking-tight"
                          style={{ color: "var(--text-heading)" }}
                        >
                          Certifications
                        </h2>
                      </div>
                      <span
                        className={`text-[11px] font-medium ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {certifications.length} Verified
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      {certifications.map((cert, idx) => (
                        <motion.div
                          key={`${cert.title}-${idx}`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.04 }}
                          className={`flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border transition-all duration-200 ${
                            isDarkMode
                              ? "bg-white/[0.025] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                              : "bg-white border-gray-200/90 shadow-xs hover:border-gray-300"
                          }`}
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 border"
                            style={{
                              background:
                                "color-mix(in srgb, var(--primary) 12%, transparent)",
                              borderColor:
                                "color-mix(in srgb, var(--primary) 20%, transparent)",
                            }}
                          >
                            {cert.icon || "☕"}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h3
                                className="text-xs sm:text-sm font-bold truncate"
                                style={{ color: "var(--text-heading)" }}
                              >
                                {cert.title}
                              </h3>
                              <span
                                className="text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0"
                                style={{
                                  background:
                                    "color-mix(in srgb, var(--primary) 10%, transparent)",
                                  color: "var(--primary)",
                                }}
                              >
                                {cert.year}
                              </span>
                            </div>
                            <p
                              className={`text-xs mt-0.5 truncate ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              {cert.issuer}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}