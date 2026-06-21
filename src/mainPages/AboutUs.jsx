"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { fallbackAbout } from "@/lib/publicContent";

export default function AboutUs() {
  const { isDarkMode } = useTheme();

  // ✅ STATIC DATA
  const content = fallbackAbout;

  const { profile, skills, experience } = content;

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 md:px-12 transition-colors duration-300"
      style={{
        background: "var(--bg)",
        color: "var(--text-body)",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-sm tracking-widest mb-3 text-[var(--primary)]">
            ABOUT ME
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Who am I?
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base opacity-70">
            Full-stack developer focused on building scalable web and mobile
            applications with performance and real-world impact.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {profile.firstName}{" "}
              <span className="text-[var(--primary)]">
                {profile.lastName}
              </span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed opacity-80 mb-6">
              {profile.description}
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="opacity-60">Location</p>
                <p className="font-medium">Hyderabad, India</p>
              </div>
              <div>
                <p className="opacity-60">Experience</p>
                <p className="font-medium">{profile.experience}+ Years</p>
              </div>
              <div>
                <p className="opacity-60">Email</p>
                <p className="font-medium">{profile.email}</p>
              </div>
              <div>
                <p className="opacity-60">Phone</p>
                <p className="font-medium">+91{profile.phone}</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6">Skills</h3>

            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>

                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded">
                    <div
                      className="h-2 rounded"
                      style={{
                        width: `${skill.percentage}%`,
                        background: "var(--primary)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* EXPERIENCE */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Work Experience
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border transition hover:shadow-lg"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "var(--bg-card)",
                }}
              >
                <h4 className="font-bold text-lg">{exp.role}</h4>
                <p className="text-sm text-[var(--primary)] mb-2">
                  {exp.company}
                </p>
                <p className="text-xs opacity-60 mb-3">{exp.duration}</p>

                <ul className="space-y-2 text-sm opacity-80">
                  {exp.points.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}