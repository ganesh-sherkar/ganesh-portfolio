"use client";

import { useTheme } from "@/components/ThemeProvider";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiFirebase,
  SiGooglemaps,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";

const SkillsHome = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    // FRONTEND
    { name: "HTML", icon: <FaHtml5 />, color: "#e34f26", category: "Frontend" },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "#264de4",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "#f7df1e",
      category: "Frontend",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      color: "#38bdf8",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: isDarkMode ? "#fff" : "#000",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#22d3ee",
      category: "Frontend",
    },

    // BACKEND
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#6fbc44",
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: isDarkMode ? "#fff" : "#000",
      category: "Backend",
    },
    {
      name: "API Development",
      icon: <SiExpress />,
      color: "#818cf8",
      category: "Backend",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "#ffca28",
      category: "Backend",
    },

    // DATABASE
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "#4db33d",
      category: "Database",
    },

    // TOOLS
    {
      name: "Redux Toolkit",
      icon: <SiRedux />,
      color: "#764abc",
      category: "Tools",
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt />,
      color: "#f05032",
      category: "Tools",
    },
    {
      name: "Google Maps API",
      icon: <SiGooglemaps />,
      color: "#34d399",
      category: "Tools",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      className="py-20 px-4 md:px-10 max-w-7xl mx-auto"
      // style={{ background: "var(--bg)", color: "var(--text-body)" }}
    >
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-sm tracking-widest text-[var(--primary)] mb-2">
          SKILLS
        </h2>

        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          My Technical Skills
        </h1>

        <p className="text-sm opacity-70 max-w-md mx-auto">
          Technologies I use to build scalable web and mobile applications.
        </p>
      </div>

      {/* FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 text-sm rounded-full border transition ${
              activeCategory === cat
                ? "bg-[var(--primary)] text-white"
                : "border-gray-400 text-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {filteredSkills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, y: -4 }}
            className="p-4 rounded-xl flex flex-col items-center gap-2 cursor-pointer border"
            style={{
              background: isDarkMode
                ? "rgba(255,255,255,0.03)"
                : "rgba(0,0,0,0.02)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="text-3xl" style={{ color: skill.color }}>
              {skill.icon}
            </div>

            <p className="text-xs text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsHome;
