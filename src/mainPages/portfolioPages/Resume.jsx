"use client";

import HeaderBanner from "@/global/HeaderBanner";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { fallbackResume } from "@/lib/publicContent";

export default function Resume() {
  const { isDarkMode } = useTheme();

  const { experiences, education, certifications, resumeUrl } = fallbackResume;

  return (
    <div
      className={`min-h-screen py-0 md:py-[50px] ${
        isDarkMode ? "bg-bg-2" : "bg-gray-50"
      }`}
    >
      <section className="container-custom py-[100px]">
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="section-label text-primary-3">My Journey</span>

          <h2
            className="section-title"
            style={{ color: "var(--text-heading)" }}
          >
            Experience & Education
          </h2>

          <div className="section-divider section-divider-center" />
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-[60px]">
          {/* ================= EXPERIENCE ================= */}
          <div>
            <div className="flex items-center gap-3 text-2xl font-bold mb-8">
              <span style={{ color: "var(--text-heading)" }}>
                Work Experience
              </span>
            </div>

            <div className="relative pl-7">
              {/* LINE */}
              <div className="absolute top-2 left-0 w-[2px] h-full bg-gradient-to-b from-primary to-transparent" />

              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="relative pb-10"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  {/* DOT */}
                  <div
                    className="absolute left-[-34px] top-2 w-3.5 h-3.5 rounded-full bg-primary"
                    style={{
                      border: `4px solid ${
                        isDarkMode ? "var(--bg-2)" : "#f3f4f6"
                      }`,
                    }}
                  />
                  <p className="text-xs text-primary-3">{exp.company}   | {exp.duration}</p>
                  {/* <p className="text-xs text-primary-3">{exp.duration}</p> */}

                  <h4
                    className="text-lg font-bold"
                    style={{ color: "var(--text-heading)" }}
                  >
                    {exp.role}
                  </h4>

                  <p className="text-sm text-gray-400">{exp.place}</p>

                  <ul className="mt-3 space-y-1 text-sm">
                    {exp.points.map((item, idx) => (
                      <li key={idx}>- {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div>
            {/* EDUCATION */}
            <div className="flex items-center gap-3 text-2xl font-bold mb-8">
              <span style={{ color: "var(--text-heading)" }}>Education</span>
            </div>

            <div className="relative pl-7 mb-12">
              <div className="absolute top-2 left-0 w-[2px] h-full bg-gradient-to-b from-primary to-transparent" />

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="relative pb-10"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div
                    className="absolute left-[-34px] top-2 w-3.5 h-3.5 rounded-full bg-primary"
                    style={{
                      border: `4px solid ${
                        isDarkMode ? "var(--bg-2)" : "#f3f4f6"
                      }`,
                    }}
                  />

                  <p className="text-xs text-primary-3">{edu.time}</p>

                  <h4
                    className="text-lg font-bold"
                    style={{ color: "var(--text-heading)" }}
                  >
                    {edu.title}
                  </h4>

                  <p className="text-sm text-gray-400">{edu.place}</p>

                  <p className="text-xs text-primary mt-1">{edu.cgpa}</p>
                </motion.div>
              ))}
            </div>

            {/* CERTIFICATIONS */}
            <div className="flex items-center gap-3 text-2xl font-bold mb-8">
              <span style={{ color: "var(--text-heading)" }}>
                Certifications
              </span>
            </div>

            <div className="grid gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  className={`p-4 rounded-xl border ${
                    isDarkMode
                      ? "bg-bg-card border-border"
                      : "bg-white border-gray-200 shadow-sm"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--text-heading)" }}
                  >
                    {cert.title}
                  </h4>

                  <p className="text-xs text-gray-400">{cert.issuer}</p>

                  <span className="text-xs text-primary">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* DOWNLOAD */}
        <div className="text-center mt-[60px]">
          <a href={resumeUrl} download className="btn-primary">
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}
