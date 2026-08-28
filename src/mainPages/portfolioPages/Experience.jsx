"use client";

import { motion } from "framer-motion";
import "./styles/Experience.css";

/* ─────────────────────────────────────────
   JOURNEY DATA
───────────────────────────────────────── */
const journeyData = [
  {
    number: "01",
    title: "Education",
    date: "2020 – 2022",
    description:
      "Completed my education with a strong foundation in computer science and problem solving.",
    icon: "🎓",
  },
  {
    number: "02",
    title: "Started Coding",
    date: "2022",
    description:
      "Began my coding journey and explored web development. Built small projects and learned daily.",
    icon: "💻",
  },
  {
    number: "03",
    title: "First Projects",
    date: "2022 – 2023",
    description:
      "Built my first projects using HTML, CSS, JavaScript and gained hands-on experience in frontend development.",
    icon: "🚀",
  },
  {
    number: "04",
    title: "Professional Start",
    date: "2023 – 2024",
    description:
      "Started my professional journey as a Frontend Developer and worked on real-world applications.",
    icon: "💼",
  },
  {
    number: "05",
    title: "Growth & Learning",
    date: "2024",
    description:
      "Focused on improving skills, exploring new technologies and building scalable projects.",
    icon: "🏆",
  },
  {
    number: "06",
    title: "Building Impact",
    date: "2024 – Present",
    description:
      "Working on meaningful projects that solve real problems and create value for users.",
    icon: "💡",
  },
  {
    number: "07",
    title: "Future Goals",
    date: "Beyond",
    description:
      "Continuing to learn, grow and build innovative solutions that make a difference.",
    icon: "⭐",
  },
];

const bottomValues = [
  { icon: "</>", label: "Passion for Code" },
  { icon: "⚙️", label: "Love for Learning" },
  { icon: "🎯", label: "Focus on Impact" },
  { icon: "♥", label: "Driven by Purpose" },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const Experience = () => {
  const row1 = journeyData.slice(0, 4);
  const row2 = journeyData.slice(4, 7);

  return (
    <section className="exp-journey">
      {/* ── Decorative corner dots ── */}
      <div className="exp-corner-dots top-left" />
      <div className="exp-corner-dots top-right" />

      {/* ── HEADER ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="exp-header"
      >
        <div className="exp-title-wrapper">
          <div className="exp-decor-side exp-decor-left" aria-hidden="true">
            <span className="exp-decor-dot" />
            <span className="exp-decor-bar" />
            <span className="exp-decor-diamond" />
          </div>
          <h2 className="exp-title">
            My <span className="exp-title-accent">Journey</span>
          </h2>
          <div className="exp-decor-side exp-decor-right" aria-hidden="true">
            <span className="exp-decor-diamond" />
            <span className="exp-decor-bar" />
            <span className="exp-decor-dot" />
          </div>
        </div>
        <p className="exp-subtitle">
          A journey of continuous learning, building, and growing.
          <br />
          Turning ideas into real-world digital experiences.
        </p>
      </motion.div>

      {/* ── ROW 1 : 4 CARDS ── */}
      <div className="exp-row exp-row-1">
        {/* SVG Connecting Dotted Lines with Start Dots */}
        <svg
          className="exp-connector exp-connector-row1"
          viewBox="0 0 1100 60"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Start Glowing Dot */}
          <circle cx="50" cy="30" r="7" fill="var(--primary)" fillOpacity="0.25" />
          <circle cx="50" cy="30" r="3.5" fill="var(--primary)" />
          <path
            d="M 50 30 C 150 55, 200 55, 300 30 S 450 5, 550 30 S 700 55, 800 30 S 950 5, 1050 30"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeLinecap="round"
            strokeOpacity="0.45"
            fill="none"
          />
          <circle cx="1050" cy="30" r="3.5" fill="var(--primary)" fillOpacity="0.7" />
        </svg>

        {row1.map((item, i) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="exp-card-wrapper"
          >
            {/* Icon Circle */}
            <div className="exp-icon-circle">
              <span className="exp-icon">{item.icon}</span>
            </div>

            {/* Card */}
            <div className="exp-card">
              <span className="exp-card-number">{item.number}</span>
              <h3 className="exp-card-title">{item.title}</h3>
              <div className="exp-card-date">
                <span className="exp-date-icon">📅</span>
                <span>{item.date}</span>
              </div>
              <p className="exp-card-desc">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── SVG CONNECTING ROW 1 → ROW 2 ── */}
      <svg
        className="exp-connector exp-connector-bridge"
        viewBox="0 0 1100 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <circle cx="1000" cy="0" r="3.5" fill="var(--primary)" fillOpacity="0.7" />
        <path
          d="M 1000 0 C 1000 40, 900 70, 700 70 S 300 70, 100 40"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
          strokeOpacity="0.4"
          fill="none"
        />
        <circle cx="100" cy="40" r="3.5" fill="var(--primary)" fillOpacity="0.7" />
      </svg>

      {/* ── ROW 2 : 3 CARDS + MOTIVATION ── */}
      <div className="exp-row exp-row-2">
        {/* SVG Connecting Dotted Lines with Start Dots */}
        <svg
          className="exp-connector exp-connector-row2"
          viewBox="0 0 800 60"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Start Glowing Dot */}
          <circle cx="50" cy="30" r="7" fill="var(--primary)" fillOpacity="0.25" />
          <circle cx="50" cy="30" r="3.5" fill="var(--primary)" />
          <path
            d="M 50 30 C 130 55, 200 55, 280 30 S 420 5, 500 30 S 620 55, 750 30"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeLinecap="round"
            strokeOpacity="0.45"
            fill="none"
          />
          <circle cx="750" cy="30" r="3.5" fill="var(--primary)" fillOpacity="0.7" />
        </svg>

        {row2.map((item, i) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
            className="exp-card-wrapper"
          >
            {/* Icon Circle */}
            <div className="exp-icon-circle">
              <span className="exp-icon">{item.icon}</span>
            </div>

            {/* Card */}
            <div className="exp-card">
              <span className="exp-card-number">{item.number}</span>
              <h3 className="exp-card-title">{item.title}</h3>
              <div className="exp-card-date">
                <span className="exp-date-icon">📅</span>
                <span>{item.date}</span>
              </div>
              <p className="exp-card-desc">{item.description}</p>
            </div>
          </motion.div>
        ))}

        {/* ── MOTIVATION SECTION ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="exp-motivation"
        >
          <div className="exp-motivation-rings">
            <div className="exp-ring exp-ring-outer" />
            <div className="exp-ring exp-ring-inner" />
            <div className="exp-motivation-icon">🏔️</div>
          </div>
          <p className="exp-motivation-text">
            The Best is
            <br />
            <span className="exp-motivation-accent">Yet to Come</span>
          </p>
        </motion.div>
      </div>

      {/* ── BOTTOM VALUES BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="exp-bottom-bar"
      >
        {bottomValues.map((val, i) => (
          <div key={i} className="exp-bottom-item">
            <span className="exp-bottom-icon">{val.icon}</span>
            <span className="exp-bottom-label">{val.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;