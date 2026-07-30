"use client";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Link from "next/link";

export default function Hero() {
  const content = {
    name: "Nishitha",
    role: "React & React Native Developer | Full Stack MERN Developer",
    summary:
      "React.js | React Native | MERN Stack Developer with 2+ years of experience building scalable web and mobile apps for e-commerce and enterprise platforms.",

    highlight: [
      "🚀 Cut backend API response time by 40%",
      "📈 Grew user engagement by 25%+",
      "✅ Sustained 95%+ on-time Agile delivery",
    ],

    image: "/assets/ProfileMain.jpeg",

    resume: "/MUSKU NISHITHA.pdf",

    socials: {
      github: "https://github.com/MuskuNishitha",
      linkedin: "https://www.linkedin.com/in/musku-nishitha-7a535b36b",
      email: "mailto:muskunishitha2003@gmail.com",
    },
  };

  return (
    <section
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 py-10 md:py-0 relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text-body)",
      }}
    >
      {/* 🔥 Background Glow */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="absolute bottom-[-120px] left-[-120px] w-[250px] h-[250px] rounded-full blur-3xl opacity-10"
        style={{ background: "var(--primary)" }}
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left px-2 animate-fade-up">
          <h2
            className="text-xs sm:text-sm tracking-widest mb-3 pt-10 md:pt-0"
            style={{ color: "var(--primary)" }}
          >
            WELCOME TO MY PORTFOLIO
          </h2>

          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4"
            style={{ color: "var(--text-heading)" }}
          >
            Hi, I&apos;m <span className="gradient-text">{content.name}</span>
          </h1>

          <h3 className="text-base sm:text-lg md:text-2xl mb-4 opacity-80 leading-snug">
            {content.role}
          </h3>
          <div className="mb-4 space-y-2">
            {content.highlight.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[var(--primary)]">•</span>
                <p className="text-xs sm:text-sm font-medium text-[var(--primary)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base max-w-md mx-auto md:mx-0 mb-6 opacity-70 leading-relaxed">
            {content.summary}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto mt-2 sm:mt-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg font-semibold text-center transition transform hover:scale-105 w-full sm:w-auto"
              style={{
                background: "var(--primary)",
                color: "#fff",
              }}
            >
              View Projects
            </Link>

            <a
              href={content.resume}
              download
              className="px-6 py-3 rounded-lg font-semibold border text-center transition transform hover:scale-105 w-full sm:w-auto"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
              }}
            >
              Download Resume
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-3 mt-6 justify-center md:justify-start">
            <a
              href={content?.socials?.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:opacity-70"
            >
              <FiGithub className="text-4xl sm:text-5xl p-2" />
            </a>

            <a
              href={content?.socials?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:opacity-70"
            >
              <FiLinkedin className="text-4xl sm:text-5xl p-2" />
            </a>

            <a
              href={content?.socials?.email}
              aria-label="Email"
              className="transition hover:opacity-70"
            >
              <FiMail className="text-4xl sm:text-5xl p-2" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center mt-10 md:mt-0 animate-fade-up">
          <div
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4"
            style={{
              borderColor: "var(--primary)",
              boxShadow: "0 0 25px var(--primary)",
            }}
          >
            <Image
              src={content.image}
              alt="profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
