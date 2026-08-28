"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiStar,
  FiGlobe,
  FiGithub,
  FiSmartphone,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";
import { useTheme } from "@/components/ThemeProvider";
import { fallbackPortfolio } from "@/lib/publicContent";
import DevCodingBackground from "@/components/DevCodingBackground";
import "@/components/styles/ProjectCards.css";

export default function Projects() {
  const { isDarkMode } = useTheme();
  const [filter, setFilter] = useState("all");

  const { categories, projects } = fallbackPortfolio;

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      className={`relative min-h-screen overflow-hidden py-16 sm:py-20 px-4 transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* DEVELOPER CODING BACKGROUND ANIMATION */}
      <DevCodingBackground />

      {/* BACKGROUND DECORATION */}
      <div
        className="pointer-events-none absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background: "var(--primary)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* SMALL LABEL */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              className="h-px w-8"
              style={{
                background: "var(--primary)",
              }}
            />
            <span
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]"
              style={{
                color: "var(--primary)",
              }}
            >
              My Work
            </span>
            <span
              className="h-px w-8"
              style={{
                background: "var(--primary)",
              }}
            />
          </div>

          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            My{" "}
            <span
              style={{
                color: "var(--primary)",
              }}
            >
              Projects
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            A selection of real-world web, mobile, e-commerce and dashboard
            applications built with modern technologies.
          </p>
        </div>

        {/* ================= FILTER ================= */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-2.5 mb-10">
          {categories.map((category) => {
            const isActive = filter === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setFilter(category.id)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${isActive
                  ? "text-white shadow-lg scale-[1.03]"
                  : isDarkMode
                    ? "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                  }`}
                style={
                  isActive
                    ? {
                      background: "var(--primary)",
                    }
                    : undefined
                }
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* ================= PROJECT GRID - SMALLER CARDS ================= */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredProjects.map((project, index) => {
              const hasLiveLink =
                typeof project.liveLink === "string" &&
                project.liveLink.trim().length > 0;

              const hasGithubLink =
                typeof project.githubLink === "string" &&
                project.githubLink.trim().length > 0;

              const playstoreLinks = Array.isArray(project.playstoreLinks)
                ? project.playstoreLinks.filter(
                  (app) =>
                    app &&
                    typeof app.url === "string" &&
                    app.url.trim().length > 0,
                )
                : [];

              const hasPlayStoreLinks = playstoreLinks.length > 0;

              return (
                <motion.article
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className={`group project-tech-card ${
                    !isDarkMode ? "project-tech-card-light" : ""
                  }`}
                >
                  {/* ================= IMAGE - WITH HOVER DROP SHADOW & ZOOM ================= */}
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={index < 4}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover project-card-image"
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b080c]/80 via-black/20 to-transparent pointer-events-none" />

                    {/* PROJECT NUMBER */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold font-mono shadow-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* FEATURED BADGE */}
                    {project.id === 1 && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-3 py-1 text-[10px] font-bold shadow-[0_0_12px_rgba(250,204,21,0.5)]">
                          <FiStar size={11} className="fill-black" />
                          Featured
                        </span>
                      </div>
                    )}

                    {/* CATEGORY ON IMAGE */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white/90 px-3 py-1 text-[10px] font-medium tracking-wide">
                        {project.subcategory}
                      </span>
                    </div>
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="flex flex-col flex-1 p-4 sm:p-5">
                    {/* TITLE & PERIOD */}
                    <div className="mb-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="project-card-title text-base sm:text-lg font-bold tracking-tight leading-snug">
                          {project.title}
                        </h3>

                        <span
                          className="text-[10px] whitespace-nowrap opacity-60 mt-1 font-medium"
                          title={project.period}
                        >
                          {project.period}
                        </span>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p
                      className={`text-xs leading-relaxed mb-3 line-clamp-2 ${
                        isDarkMode ? "text-gray-300/80" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* ================= FEATURES ================= */}
                    {project.features?.length > 0 && (
                      <div className="mb-3.5">
                        <div className="space-y-1.5">
                          {project.features
                            .slice(0, 2)
                            .map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-start gap-2"
                              >
                                <span
                                  className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                                  style={{
                                    background: isDarkMode
                                      ? "#c2a4ff"
                                      : "var(--primary)",
                                    boxShadow: isDarkMode
                                      ? "0 0 6px rgba(194, 164, 255, 0.8)"
                                      : "none",
                                  }}
                                />
                                <p
                                  className={`text-[11.5px] leading-relaxed ${
                                    isDarkMode
                                      ? "text-gray-300/75"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {feature}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* ================= TECH STACK MICRO BADGES ================= */}
                    {project.tech?.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 4).map((technology) => (
                            <span
                              key={technology}
                              className={`project-tech-badge ${
                                !isDarkMode ? "project-tech-badge-light" : ""
                              }`}
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ================= LINKS & BUTTONS ================= */}
                    {(hasLiveLink || hasGithubLink || hasPlayStoreLinks) && (
                      <div className="mt-auto pt-3.5 border-t border-white/10 dark:border-white/10">
                        {/* WEBSITE + GITHUB */}
                        {(hasLiveLink || hasGithubLink) && (
                          <div
                            className={`grid gap-2 ${
                              hasLiveLink && hasGithubLink
                                ? "grid-cols-2"
                                : "grid-cols-1"
                            }`}
                          >
                            {/* WEBSITE */}
                            {hasLiveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn-primary group/link w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs"
                              >
                                <FiGlobe size={13} />
                                <span>Website</span>
                                <FiArrowUpRight
                                  size={12}
                                  className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                />
                              </a>
                            )}

                            {/* GITHUB */}
                            {hasGithubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`project-btn-secondary ${
                                  !isDarkMode ? "project-btn-secondary-light" : ""
                                } group/link w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs`}
                              >
                                <FiGithub size={13} />
                                <span>GitHub</span>
                                <FiArrowUpRight
                                  size={12}
                                  className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                                />
                              </a>
                            )}
                          </div>
                        )}

                        {/* PLAY STORE LINKS */}
                        {hasPlayStoreLinks && (
                          <div
                            className={`mt-2 grid gap-2 ${
                              playstoreLinks.length > 1
                                ? "grid-cols-2"
                                : "grid-cols-1"
                            }`}
                          >
                            {playstoreLinks.map((app, appIndex) => (
                              <a
                                key={`${app.url}-${appIndex}`}
                                href={app.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`project-btn-secondary ${
                                  !isDarkMode
                                    ? "project-btn-secondary-light"
                                    : ""
                                } group/app w-full min-w-0 flex items-center justify-between gap-2 py-2 px-3 text-xs`}
                              >
                                {/* LEFT */}
                                <span className="flex items-center gap-2 min-w-0">
                                  <span
                                    className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md"
                                    style={{
                                      background: "rgba(194, 164, 255, 0.2)",
                                      color: isDarkMode
                                        ? "#c2a4ff"
                                        : "var(--primary)",
                                    }}
                                  >
                                    <FiSmartphone size={12} />
                                  </span>

                                  <span className="min-w-0 text-xs font-medium truncate">
                                    {app.name || `App ${appIndex + 1}`}
                                  </span>
                                </span>

                                <FiExternalLink
                                  size={12}
                                  className="flex-shrink-0 opacity-60 transition-all duration-200 group-hover/app:opacity-100 group-hover/app:translate-x-0.5"
                                />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          /* ================= EMPTY STATE ================= */
          <div className="py-16 text-center">
            <div
              className={`inline-flex flex-col items-center justify-center rounded-xl px-6 py-8 border ${isDarkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200"
                }`}
            >
              <p className="text-base font-semibold mb-1">No projects found</p>
              <p className="text-xs opacity-60">
                Try selecting another category.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}