"use client";

import { useTheme } from "@/components/ThemeProvider";
import { fallbackResume } from "@/lib/publicContent";
import { motion } from "framer-motion";

const Experience = () => {
  const { isDarkMode } = useTheme();
const { experiences, education, certifications, resumeUrl } =
    fallbackResume;

 

  return (
    <section
      className={`py-[90px]  transition-colors ${
        isDarkMode
          ? "bg-gradient-to-b from-[#050816] to-[#02040f]"
          : "bg-gradient-to-b from-gray-100 to-white"
      }`}
    >
      {/* TITLE */}
      <div className="text-center mb-16">
        {/* <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
          Work Experience
        </h2> */}
          <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: 'var(--text-heading)' }}
            >
               Work Experience
            </h2>
            <div
              className="w-24 h-1 mx-auto rounded-full"
              style={{
                background: `linear-gradient(to right, var(--primary), var(--primary-2))`
              }}
            />
      </div>

      

      <div className="relative max-w-6xl mx-auto px-4">
        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-primary to-primary shadow-[0_0_25px_var(--primary)]" />

        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center mb-16 ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* CARD */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 px-4"
            >
              <div
                className={`p-6 rounded-xl backdrop-blur-md border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] ${
                  isDarkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-gray-200 shadow-lg"
                }`}
              >
                {/* ROLE */}
                <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                  {exp.role}
                </h3>

                {/* COMPANY */}
                <p className="text-sm text-gray-400 mb-1">{exp.company}</p>

                {/* DATE */}
                <p className="text-xs text-gray-500 mb-4">{exp.duration}</p>

                {/* POINTS */}
                <ul
                  className="space-y-2 text-sm"
                  style={{
                    color: isDarkMode
                      ? "var(--text-body)"
                      : "var(--text-muted)",
                  }}
                >
                  {exp.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span style={{ color: "var(--primary-3)" }}>•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CENTER DOT */}
            <div className="hidden md:flex w-12 h-12 items-center justify-center z-10">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-4 h-4 bg-primary rounded-full shadow-[0_0_25px_var(--primary)]"
              />
            </div>

            {/* EMPTY SPACE */}
            <div className="hidden md:block w-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
