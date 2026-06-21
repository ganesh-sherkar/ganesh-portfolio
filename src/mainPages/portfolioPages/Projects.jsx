"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiStar } from "react-icons/fi";
import { useTheme } from "@/components/ThemeProvider";
import { fallbackPortfolio } from "@/lib/publicContent";

export default function Projects() {
  const { isDarkMode } = useTheme();
  const [filter, setFilter] = useState("all");

  const { categories, projects } = fallbackPortfolio;

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      className={`min-h-screen py-20 px-4 transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-[var(--primary)]">Projects</span>
        </h2>
        <p className="text-sm opacity-70 mt-2">
          Scalable real-world applications built with modern tech stack
        </p>
      </div>

      {/* FILTER */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              filter === cat.id
                ? "bg-[var(--primary)] text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -8 }}
            className={`rounded-2xl overflow-hidden border shadow-xl transition ${
              isDarkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200"
            }`}
          >
            {/* IMAGE */}
            <div className="relative h-52">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />

              {project.id === 1 && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 text-xs flex items-center gap-1 rounded">
                  <FiStar /> Featured
                </span>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-xl font-bold">{project.title}</h3>

              <p className="text-[var(--primary)] text-sm font-medium">
                {project.subcategory}
              </p>

              <p className="text-xs opacity-60 mb-3">{project.period}</p>

              <p className="text-sm opacity-70 mb-3">
                {project.description}
              </p>

              {/* FEATURES */}
              <div className="space-y-1 mb-4">
                {project.features.slice(0, 3).map((f, i) => (
                  <p key={i} className="text-xs opacity-80">
                    • {f}
                  </p>
                ))}
              </div>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border"
                    style={{
                      borderColor: "var(--primary)",
                      color: "var(--primary)",
                      background: isDarkMode
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(0,0,0,0.03)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="flex-1 text-center py-2 rounded-lg bg-[var(--primary)] text-white font-medium hover:opacity-90"
                >
                  Live
                </a>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}