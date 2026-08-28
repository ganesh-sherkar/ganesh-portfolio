"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { fallbackAbout } from "@/lib/publicContent";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaCode,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
  FaRocket,
  FaMobileAlt,
  FaDatabase,
  FaServer,
  FaPalette,
  FaCheckCircle,
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaBolt,
  FaLayerGroup,
  FaUser,
  FaFlag,
  FaPhone,
  FaLanguage,
  FaUserTie,
  FaVolumeUp,
  FaVolumeMute,
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
  SiTypescript,
  SiPostman,
  SiVite,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import DevCodingBackground from "@/components/DevCodingBackground";

export default function AboutUs() {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleAudio = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const { profile } = fallbackAbout;

  /* =========================================================
     TECHNICAL SKILLS
  ========================================================= */

  const technicalSkills = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "#f7df1e",
      category: "Languages",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "#e34f26",
      category: "Languages",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "#264de4",
      category: "Languages",
    },
  

    {
      name: "React.js",
      icon: <FaReact />,
      color: "#61dafb",
      category: "Frontend",
    },
   
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: isDarkMode ? "#ffffff" : "#000000",
      category: "Frontend",
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux />,
      color: "#764abc",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#22d3ee",
      category: "Frontend",
    },
    {
      name: "Framer Motion",
      icon: <FaReact />,
      color: "#ff6b6b",
      category: "Frontend",
    },

    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#6fbc44",
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: isDarkMode ? "#ffffff" : "#000000",
      category: "Backend",
    },
    {
      name: "JWT Authentication",
      icon: <FaCode />,
      color: "#e879f9",
      category: "Backend",
    },
    {
      name: "API Integration",
      icon: <FaServer />,
      color: "#34d399",
      category: "Backend",
    },

    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "#4db33d",
      category: "Database",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "#ffca28",
      category: "Database",
    },
    
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "#f05032",
      category: "Tools",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: isDarkMode ? "#ffffff" : "#000000",
      category: "Tools",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      color: "#ff6c37",
      category: "Tools",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      color: "#646cff",
      category: "Tools",
    },
  ];

  const categories = [
    "All",
    "Languages",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? technicalSkills
      : technicalSkills.filter((skill) => skill.category === activeCategory);

  /* =========================================================
     STRENGTHS
  ========================================================= */

  const strengths = [
    {
      icon: <FaRocket />,
      title: "Scalable Development",
      description:
        "Building maintainable web and mobile applications designed to grow with real business requirements.",
    },
    {
      icon: <FaBolt />,
      title: "Performance First",
      description:
        "Focused on optimized APIs, efficient database queries, responsive interfaces and smooth application performance.",
    },
    {
      icon: <FaPalette />,
      title: "Modern UI / UX",
      description:
        "Creating clean, responsive and intuitive interfaces that feel polished across desktop, tablet and mobile.",
    },
    {
      icon: <FaServer />,
      title: "Full-Stack Thinking",
      description:
        "Comfortable working across frontend, backend, databases, APIs, authentication and deployment workflows.",
    },
  ];

  const getStatIcon = (icon) => {
    if (icon === "Work") return <FaBriefcase />;
    if (icon === "Projects") return <FaRocket />;
    if (icon === "Clients") return <FaCheckCircle />;
    return <FaBolt />;
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        px-4
        sm:px-6
        lg:px-8
        py-1
        sm:py-8
        md:py-10
      "
      style={{
        background: "var(--bg)",
        color: "var(--text-body)",
      }}
    >
      {/* =====================================================
          BACKGROUND & CODING PARTICLES
      ===================================================== */}

      <DevCodingBackground />

      <div
        className="
          pointer-events-none
          absolute
          -top-32
          -left-32
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          blur-[100px]
          opacity-[0.08]
        "
        style={{
          background: "var(--primary)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          top-[40%]
          -right-32
          w-72
          h-72
          sm:w-96
          sm:h-96
          rounded-full
          blur-[110px]
          opacity-[0.06]
        "
        style={{
          background: "var(--primary)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/3
          w-64
          h-64
          rounded-full
          blur-[100px]
          opacity-[0.04]
        "
        style={{
          background: "var(--primary)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* =====================================================
            HEADER
        ===================================================== */}


        {/* =====================================================
            HERO ABOUT AREA
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]
            xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]
            gap-8
            lg:gap-10
            xl:gap-14
            items-center
          "
        >
          {/* =================================================
              CONTENT (LEFT SIDE)
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              w-full
              min-w-0
              order-1
            "
          >
            <p
              className="
                text-[11px]
                sm:text-xs
                font-semibold
                tracking-[0.18em]
                uppercase
                mb-3
              "
              style={{
                color: "var(--primary)",
              }}
            >
              Who I Am
            </p>

            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                xl:text-[2.6rem]
                font-bold
                leading-[1.18]
                tracking-tight
              "
            >
              {profile.tagline}
            </h2>

            <p
              className="
                mt-4
                sm:mt-5
                text-sm
                sm:text-base
                leading-relaxed
                opacity-65
                max-w-2xl
              "
            >
              {profile.description}
            </p>

            {/* =================================================
                PROFILE INFO
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-2.5
                sm:gap-3
                mt-6
                sm:mt-7
              "
            >
              {[
                {
                  icon: <FaUser />,
                  label: "Full Name",
                  value: `${profile.firstName} ${profile.lastName}`,
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Location",
                  value: profile.address,
                },
                {
                  icon: <FaBriefcase />,
                  label: "Experience",
                  value: `${profile.experience}+ Years`,
                },
                {
                  icon: <FaFlag />,
                  label: "Nationality",
                  value: profile.nationality,
                },
                {
                  icon: <FaEnvelope />,
                  label: "Email",
                  value: profile.email,
                },
                {
                  icon: <FaPhone />,
                  label: "Phone",
                  value: profile.phone,
                },
                {
                  icon: <FaLanguage />,
                  label: "Languages",
                  value: profile.languages?.join(", "),
                },
                {
                  icon: <FaUserTie />,
                  label: "Freelance",
                  value: profile.freelance ? "Available" : "Not Available",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                    flex
                    items-center
                    gap-2.5
                    sm:gap-3
                    p-2.5
                    sm:p-3
                    rounded-xl
                    sm:rounded-2xl
                    border
                    min-w-0
                    transition-all
                    duration-300
                  "
                  style={{
                    background: isDarkMode
                      ? "rgba(255,255,255,0.025)"
                      : "rgba(0,0,0,0.02)",
                    borderColor: isDarkMode
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    className="
                      w-8
                      h-8
                      sm:w-8.5
                      sm:h-8.5
                      rounded-lg
                      sm:rounded-xl
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                    style={{
                      background:
                        "color-mix(in srgb, var(--primary) 12%, transparent)",
                      color: "var(--primary)",
                    }}
                  >
                    <span className="text-xs sm:text-sm">{item.icon}</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[8px] sm:text-[9px] uppercase tracking-wider opacity-40">
                      {item.label}
                    </p>

                    <p className="text-[10px] sm:text-xs font-semibold mt-0.5 truncate">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              VIDEO (RIGHT SIDE)
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              w-full
              flex
              justify-center
              lg:justify-end
              order-2
            "
          >
            {/* Ambient Glow */}

            <div
              className="
                absolute
                w-48
                h-48
                sm:w-60
                sm:h-60
                rounded-full
                blur-[80px]
                opacity-25
                pointer-events-none
              "
              style={{
                background: "var(--primary)",
              }}
            />

            {/* Decorative Corner Accents */}

            <div
              className="
                absolute
                -top-2
                -right-2
                w-14
                h-14
                rounded-2xl
                border
                pointer-events-none
                hidden
                sm:block
              "
              style={{
                borderColor: "var(--primary)",
                background: "var(--primary)",
                opacity: 0.08,
              }}
            />

            <div
              className="
                absolute
                -bottom-2
                -left-2
                w-16
                h-16
                rounded-2xl
                border
                pointer-events-none
                hidden
                sm:block
              "
              style={{
                borderColor: "var(--primary)",
                background: "var(--primary)",
                opacity: 0.07,
              }}
            />

            {/* Compact Video Card & Status Below */}

            <div
              className="
                relative
                z-10
                w-full
                max-w-[320px]
                xs:max-w-[350px]
                sm:max-w-[370px]
                lg:max-w-[380px]
                flex
                flex-col
                gap-3
              "
            >
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  relative
                  rounded-[1.5rem]
                  sm:rounded-[1.75rem]
                  p-2
                  sm:p-2.5
                  border
                  overflow-hidden
                  backdrop-blur-xl
                "
                style={{
                  background: isDarkMode
                    ? "rgba(255,255,255,0.035)"
                    : "rgba(0,0,0,0.025)",
                  borderColor: isDarkMode
                    ? "rgba(255,255,255,0.10)"
                    : "rgba(0,0,0,0.08)",
                  boxShadow: isDarkMode
                    ? "0 20px 50px rgba(0,0,0,0.28)"
                    : "0 20px 50px rgba(0,0,0,0.09)",
                }}
              >
                {/* Gradient Shimmer */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.05]
                  "
                  style={{
                    background:
                      "linear-gradient(135deg,var(--primary),transparent 50%,var(--primary))",
                  }}
                />

                {/* Compact Video Wrapper */}

                <div
                  className="
                    relative
                    w-full
                    h-[320px]
                    xs:h-[350px]
                    sm:h-[380px]
                    lg:h-[400px]
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[1.25rem]
                    sm:rounded-[1.4rem]
                    bg-black/20
                  "
                >
                  <video
                    ref={videoRef}
                    // src="/video/ganeshaivideo.mp4"
                    src="/video/gs.mp4"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-[1.25rem]
                      sm:rounded-[1.4rem]
                    "
                  >
                    <source src="/video/ganeshaivideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Sound Control Button */}
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={toggleAudio}
                    type="button"
                    aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                    className="
                      absolute
                      top-3.5
                      right-3.5
                      z-20
                      flex
                      items-center
                      gap-1.5
                      px-3
                      py-1.5
                      rounded-full
                      backdrop-blur-xl
                      border
                      text-xs
                      font-medium
                      transition-all
                      duration-300
                      cursor-pointer
                      select-none
                    "
                    style={{
                      background: isDarkMode
                        ? "rgba(15, 15, 15, 0.85)"
                        : "rgba(255, 255, 255, 0.90)",
                      borderColor: isMuted
                        ? isDarkMode
                          ? "rgba(255, 255, 255, 0.14)"
                          : "rgba(0, 0, 0, 0.10)"
                        : "var(--primary)",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.20)",
                      color: isMuted ? "inherit" : "var(--primary)",
                    }}
                  >
                    {isMuted ? (
                      <>
                        <FaVolumeMute className="text-xs opacity-75" />
                        <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">
                          Sound Off
                        </span>
                      </>
                    ) : (
                      <>
                        <FaVolumeUp className="text-xs animate-pulse" />
                        <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">
                          Sound On
                        </span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>

              {/* Status Badge (Outside & Below Video) */}

              <motion.div
                whileHover={{
                  y: -2,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  w-full
                  px-3.5
                  py-2.5
                  sm:px-4
                  sm:py-3
                  rounded-xl
                  sm:rounded-2xl
                  backdrop-blur-xl
                  border
                  flex
                  items-center
                  justify-between
                  gap-3
                  transition-all
                  duration-300
                "
                style={{
                  background: isDarkMode
                    ? "rgba(255,255,255,0.035)"
                    : "rgba(0,0,0,0.025)",
                  borderColor: isDarkMode
                    ? "rgba(255,255,255,0.10)"
                    : "rgba(0,0,0,0.08)",
                  boxShadow: isDarkMode
                    ? "0 10px 25px rgba(0,0,0,0.20)"
                    : "0 10px 25px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[8px] sm:text-[9px] uppercase tracking-widest opacity-45 leading-none">
                      Status
                    </p>

                    <p className="text-[11px] sm:text-xs font-semibold truncate mt-0.5 leading-tight">
                      Available for opportunities
                    </p>
                  </div>
                </div>

                <span
                  className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0"
                  style={{
                    background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                    color: "var(--primary)",
                    borderColor: "color-mix(in srgb, var(--primary) 25%, transparent)",
                  }}
                >
                  Open
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>



        {/* =====================================================
            SKILLS (TECHNICAL EXPERTISE)
        ===================================================== */}

        <div id="skills" className="mt-12 sm:mt-16 scroll-mt-24">
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title="Technical Expertise"
            description="Technologies and tools I use to build modern, scalable and production-ready applications."
          />

          {/* FILTERS */}

          <div
            className="
  mb-8
  sm:mb-10
  overflow-x-auto
  overflow-y-hidden
  pb-2
  [&::-webkit-scrollbar]:h-[3px]
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[var(--primary)]
"
          >
            <div
              className="
                flex
                justify-start
                sm:justify-center
                gap-2
                min-w-max
                px-1
              "
            >
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className="
                      shrink-0
                      px-4
                      sm:px-5
                      py-2.5
                      rounded-full
                      text-[11px]
                      sm:text-xs
                      font-semibold
                      border
                      transition-all
                      duration-300
                    "
                    style={{
                      background: active ? "var(--primary)" : "transparent",
                      color: active ? "#fff" : "var(--text-body)",
                      borderColor: active
                        ? "var(--primary)"
                        : isDarkMode
                          ? "rgba(255,255,255,0.10)"
                          : "rgba(0,0,0,0.10)",
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SKILLS */}

          <motion.div
            layout
            className="
              grid
              grid-cols-3
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              xl:grid-cols-6
              gap-2.5
              sm:gap-3
              lg:gap-4
            "
          >
            <style>{`
              @keyframes borderMoveAround {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
              .animate-border-move {
                animation: borderMoveAround 3.5s linear infinite;
              }
            `}</style>
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.02,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  relative
                  p-[1.5px]
                  rounded-xl
                  sm:rounded-2xl
                  min-h-[105px]
                  sm:min-h-[125px]
                  lg:min-h-[135px]
                  overflow-hidden
                  transition-all
                  duration-300
                "
                style={{
                  boxShadow: isDarkMode
                    ? "0 4px 20px rgba(0, 0, 0, 0.3)"
                    : "0 4px 15px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* Continuous Animated Moving Border Beam Around the Card */}
                <div
                  className="
                    absolute
                    -inset-[160%]
                    animate-border-move
                    opacity-60
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0%, transparent 45%, ${skill.color || "var(--primary)"} 72%, #00f0ff 85%, transparent 100%)`,
                    animationDuration: `${3 + (index % 4) * 0.4}s`,
                  }}
                />

                {/* Card Inner Body */}
                <div
                  className="
                    relative
                    w-full
                    h-full
                    p-3
                    sm:p-4
                    lg:p-5
                    rounded-[10px]
                    sm:rounded-[14px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    overflow-hidden
                    backdrop-blur-xl
                  "
                  style={{
                    background: isDarkMode ? "#090d14" : "#ffffff",
                  }}
                >
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-[0.08]
                      transition-opacity
                      duration-300
                    "
                    style={{
                      background: skill.color,
                    }}
                  />

                  <div
                    className="
                      relative
                      text-xl
                      sm:text-3xl
                      lg:text-4xl
                      mb-2
                      sm:mb-3
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    style={{
                      color: skill.color,
                    }}
                  >
                    {skill.icon}
                  </div>

                  <p
                    className="
                      relative
                      text-[10px]
                      sm:text-xs
                      lg:text-sm
                      font-semibold
                      leading-tight
                    "
                  >
                    {skill.name}
                  </p>

                  <p className="relative text-[8px] sm:text-[10px] opacity-40 mt-1">
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
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
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        text-center
        mb-8
        sm:mb-10
        lg:mb-12
      "
    >
      <p
        className="
          text-[10px]
          sm:text-xs
          tracking-[0.22em]
          uppercase
          font-bold
          mb-2.5
          sm:mb-3
        "
        style={{
          color: "var(--primary)",
        }}
      >
        {eyebrow}
      </p>

      <h2
        className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          tracking-tight
        "
      >
        {title}
      </h2>

      <p
        className="
          max-w-2xl
          mx-auto
          mt-3
          sm:mt-4
          text-xs
          sm:text-sm
          lg:text-base
          leading-6
          sm:leading-7
          opacity-55
          px-2
        "
      >
        {description}
      </p>
    </motion.div>
  );
}
