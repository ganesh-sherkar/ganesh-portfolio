"use client";

import React from "react";

const projectData = [
  // Row 1 - 3 projects
  [
    {
      name: "SafeChat",
      image: "/assets/safechat.jpg",
      url: "https://safeechats.web.app/",
      desc: "A modern chatting website with real-time messaging, user profiles, online status, notifications and a smooth WhatsApp-like chat experience.",
    },
    {
      name: "FreshGo",
      image: "/assets/freshgo.jpg",
      url: "https://github.com/yourusername/freshgo",
      desc: "A quick-commerce grocery website inspired by modern delivery platforms with categories, products, cart, search and fast delivery experience.",
    },
    {
      name: "Zestore",
      image: "/assets/zestore.jpg",
      url: "https://zestorecom.web.app/",
      desc: "A complete e-commerce shopping website with products, categories, search, filters, cart, wishlist, checkout and a modern shopping experience.",
    },
  ],
  // Row 2 - 2 projects
  [
    {
      name: "BookMyTicket",
      image: "/assets/bookmyticket.jpg",
      url: "https://vehicle-book.web.app/",
      desc: "An online ticket booking platform where users can explore shows, select seats, book tickets and manage their booking details.",
    },
    {
      name: "BuildMate",
      image: "/assets/buildmate.jpg",
      url: "https://github.com/yourusername/buildmate",
      desc: "A service and building-material platform connecting customers with service providers, suppliers and contractors.",
    },
  ],
  // Row 3 - 1 project
  [
    {
      name: "Portfolio",
      image: "/assets/portfolio.jpg",
      url: "https://github.com/yourusername/portfolio",
      desc: "A premium developer portfolio showcasing projects, technical skills, services, experience and modern interactive UI animations.",
    },
  ],
];

const TechStackNew = () => {
  return (
    <div className="
      relative
      w-full
      min-h-screen
      min-h-[100svh]
      flex
      items-center
      justify-center
      overflow-hidden
      px-[clamp(60px,8vw,100px)]
      py-[clamp(60px,8vw,100px)]
      bg-[#0b080c]
      max-[768px]:py-[70px]
      max-[768px]:px-[12px]
      max-[480px]:min-h-auto
      max-[480px]:py-[80px]
      max-[480px]:px-[10px]
      max-[360px]:px-[6px]
    ">
      {/* Video Background */}
      <div className="
        absolute
        inset-0
        w-full
        h-full
        overflow-hidden
        z-0
        before:content-['']
        before:absolute
        before:top-0
        before:left-0
        before:w-full
        before:h-[clamp(90px,12vw,180px)]
        before:bg-gradient-to-b
        before:from-[#0b080c]
        before:via-[rgba(11,8,12,0.8)]
        before:to-transparent
        before:z-[2]
        before:pointer-events-none
        after:content-['']
        after:absolute
        after:bottom-0
        after:left-0
        after:w-full
        after:h-[clamp(90px,12vw,180px)]
        after:bg-gradient-to-t
        after:from-[#0b080c]
        after:via-[rgba(11,8,12,0.8)]
        after:to-transparent
        after:z-[2]
        after:pointer-events-none
      ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>

        {/* Dark Overlay */}
        <div className="
          absolute
          inset-0
          w-full
          h-full
          bg-gradient-to-b
          from-[rgba(11,8,12,0.65)]
          via-[rgba(0,0,0,0.48)]
          to-[rgba(0,0,0,0.55)]
          z-[1]
        "></div>
      </div>

      {/* Content */}
      <div className="
        relative
        z-[3]
        w-full
        max-w-[1150px]
        mx-auto
        px-[10px]
        max-[768px]:max-w-[660px]
        max-[480px]:px-[4px]
      ">
        {/* Header */}
        <div className="
          flex
          items-center
          justify-center
          gap-[clamp(12px,2vw,26px)]
          mx-auto
          mb-[clamp(28px,4.5vw,50px)]
          w-full
          max-w-[1050px]
          max-[768px]:mb-[30px]
          max-[480px]:mb-[24px]
          max-[480px]:gap-[8px]
          max-[360px]:mb-[20px]
          max-[360px]:gap-[8px]
        ">
          {/* Left Decorative Elements */}
          <div className="
            flex
            items-center
            gap-[clamp(8px,1.2vw,14px)]
            flex-1
            max-w-[clamp(140px,24vw,340px)]
            justify-end
            max-[480px]:max-w-[clamp(50px,16vw,110px)]
            max-[480px]:gap-[6px]
            max-[360px]:max-w-[clamp(50px,16vw,110px)]
            max-[360px]:gap-[6px]
          ">
            <div className="
              flex
              flex-col
              gap-[3.5px]
              flex-1
              w-full
              items-end
            ">
              <span className="
                w-full
                h-[2px]
                rounded-[2px]
                bg-gradient-to-r
                from-transparent
                via-[rgba(194,164,255,0.4)]
                to-[#c2a4ff]
                shadow-[0_0_10px_rgba(194,164,255,0.45)]
                max-[360px]:max-w-[30px]
              "></span>
              <span className="
                w-[72%]
                h-[1.5px]
                rounded-[2px]
                opacity-80
                bg-gradient-to-r
                from-transparent
                via-[rgba(194,164,255,0.4)]
                to-[#c2a4ff]
                shadow-[0_0_10px_rgba(194,164,255,0.45)]
                max-[360px]:max-w-[30px]
              "></span>
              <span className="
                w-[44%]
                h-[1px]
                rounded-[2px]
                opacity-55
                bg-gradient-to-r
                from-transparent
                via-[rgba(194,164,255,0.4)]
                to-[#c2a4ff]
                shadow-[0_0_10px_rgba(194,164,255,0.45)]
                max-[360px]:max-w-[30px]
              "></span>
            </div>

            <div className="flex items-center gap-[5px] flex-shrink-0">
              <span className="
                w-[4px]
                h-[4px]
                rounded-full
                bg-[#c2a4ff]
                flex-shrink-0
                opacity-75
                shadow-[0_0_8px_#c2a4ff,0_0_14px_rgba(194,164,255,0.7)]
                max-[480px]:w-[3.5px]
                max-[480px]:h-[3.5px]
              "></span>
              <span className="
                w-[6px]
                h-[6px]
                rounded-full
                bg-[#c2a4ff]
                flex-shrink-0
                shadow-[0_0_8px_#c2a4ff,0_0_14px_rgba(194,164,255,0.7)]
                max-[480px]:w-[5px]
                max-[480px]:h-[5px]
              "></span>
            </div>
          </div>

          <h2 className="
            m-0
            text-center
            text-[clamp(24px,3.8vw,42px)]
            leading-[1.2]
            font-[650]
            tracking-[0.08em]
            uppercase
            text-[#c2a4ff]
            shadow-[0_0_24px_rgba(194,164,255,0.5)]
            whitespace-nowrap
            flex-shrink-0
            max-[480px]:text-[21px]
            max-[480px]:tracking-[0.05em]
            max-[360px]:text-[17px]
          ">
            My Projects
          </h2>

          {/* Right Decorative Elements */}
          <div className="
            flex
            items-center
            gap-[clamp(8px,1.2vw,14px)]
            flex-1
            max-w-[clamp(140px,24vw,340px)]
            justify-start
            max-[480px]:max-w-[clamp(50px,16vw,110px)]
            max-[480px]:gap-[6px]
            max-[360px]:max-w-[clamp(50px,16vw,110px)]
            max-[360px]:gap-[6px]
          ">
            <div className="flex items-center gap-[5px] flex-shrink-0">
              <span className="
                w-[6px]
                h-[6px]
                rounded-full
                bg-[#c2a4ff]
                flex-shrink-0
                shadow-[0_0_8px_#c2a4ff,0_0_14px_rgba(194,164,255,0.7)]
                max-[480px]:w-[5px]
                max-[480px]:h-[5px]
              "></span>
              <span className="
                w-[4px]
                h-[4px]
                rounded-full
                bg-[#c2a4ff]
                flex-shrink-0
                opacity-75
                shadow-[0_0_8px_#c2a4ff,0_0_14px_rgba(194,164,255,0.7)]
                max-[480px]:w-[3.5px]
                max-[480px]:h-[3.5px]
              "></span>
            </div>

            <div className="
              flex
              flex-col
              gap-[3.5px]
              flex-1
              w-full
              items-start
            ">
              <span className="
                w-full
                h-[2px]
                rounded-[2px]
                bg-gradient-to-r
                from-[#c2a4ff]
                via-[rgba(194,164,255,0.4)]
                to-transparent
                shadow-[0_0_10px_rgba(194,164,255,0.45)]
                max-[360px]:max-w-[30px]
              "></span>
              <span className="
                w-[72%]
                h-[1.5px]
                rounded-[2px]
                opacity-80
                bg-gradient-to-r
                from-[#c2a4ff]
                via-[rgba(194,164,255,0.4)]
                to-transparent
                shadow-[0_0_10px_rgba(194,164,255,0.45)]
                max-[360px]:max-w-[30px]
              "></span>
              <span className="
                w-[44%]
                h-[1px]
                rounded-[2px]
                opacity-55
                bg-gradient-to-r
                from-[#c2a4ff]
                via-[rgba(194,164,255,0.4)]
                to-transparent
                shadow-[0_0_10px_rgba(194,164,255,0.45)]
                max-[360px]:max-w-[30px]
              "></span>
            </div>
          </div>
        </div>

        {/* Projects Pyramid */}
        <div className="
          w-full
          flex
          flex-col
          items-center
          gap-[clamp(16px,2vw,28px)]
          max-[480px]:gap-[12px]
        ">
          {projectData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="
                w-full
                flex
                justify-center
                items-center
                gap-[clamp(16px,1.8vw,28px)]
                flex-wrap
                max-[768px]:gap-[14px]
                max-[480px]:gap-[10px]
                max-[360px]:gap-[6px]
              "
            >
              {row.map((project, projectIndex) => (
                <a
                  key={projectIndex}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex-[1_1_auto]
                    min-w-[clamp(160px,16vw,220px)]
                    max-w-[clamp(200px,20vw,280px)]
                    h-[clamp(180px,18vw,240px)]
                    p-0
                    flex
                    flex-col
                    items-center
                    justify-center
                    rounded-[clamp(20px,2.2vw,30px)]
                    bg-[rgba(255,255,255,0.04)]
                    border-[1.5px]
                    border-[rgba(255,255,255,0.12)]
                    backdrop-blur-[14px]
                    [-webkit-backdrop-filter:blur(14px)]
                    no-underline
                    cursor-pointer
                    relative
                    overflow-hidden
                    transition-[transform,background,border-color,box-shadow]
                    duration-[0.35s]
                    ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    hover:translate-y-[-8px]
                    hover:bg-[rgba(194,164,255,0.08)]
                    hover:border-[rgba(194,164,255,0.55)]
                    hover:shadow-[0_12px_30px_rgba(194,164,255,0.2),0_0_20px_rgba(194,164,255,0.12)]
                    max-[768px]:min-w-[130px]
                    max-[768px]:max-w-[160px]
                    max-[768px]:h-[150px]
                    max-[480px]:min-w-[105px]
                    max-[480px]:max-w-[130px]
                    max-[480px]:h-[120px]
                    max-[480px]:rounded-[16px]
                    max-[360px]:min-w-[90px]
                    max-[360px]:max-w-[110px]
                    max-[360px]:h-[105px]
                  "
                  title={project.name}
                  data-cursor="disable"
                >
                  {/* Project Image - Full Width Card */}
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      rounded-[clamp(20px,2.2vw,30px)]
                      opacity-90
                      transition-[transform,filter,opacity]
                      duration-[0.35s]
                      ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      group-hover:opacity-100
                      group-hover:scale-[1.05]
                      group-hover:drop-shadow-[0_0_14px_rgba(194,164,255,0.7)]
                      max-[480px]:rounded-[16px]
                    "
                  />

                  {/* Dark Overlay on Image for better text visibility */}
                  <div className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    rounded-[clamp(20px,2.2vw,30px)]
                    bg-gradient-to-t
                    from-[rgba(0,0,0,0.7)]
                    via-[rgba(0,0,0,0.3)]
                    to-[rgba(0,0,0,0.1)]
                    transition-opacity
                    duration-[0.3s]
                    group-hover:opacity-90
                    max-[480px]:rounded-[16px]
                  "></div>

                  {/* Project Name */}
                  <span className="
                    relative
                    z-[2]
                    w-full
                    px-[10px]
                    text-[rgba(255,255,255,0.95)]
                    text-[clamp(16px,1.6vw,20px)]
                    leading-[1.2]
                    font-[600]
                    text-center
                    whitespace-nowrap
                    overflow-hidden
                    text-ellipsis
                    text-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
                    transition-[color,text-shadow]
                    duration-[0.3s]
                    ease-[ease]
                    group-hover:text-[#ffffff]
                    group-hover:shadow-[0_0_12px_rgba(194,164,255,0.7)]
                    max-[768px]:text-[14px]
                    max-[768px]:px-[8px]
                    max-[480px]:text-[12px]
                    max-[480px]:px-[6px]
                    max-[480px]:max-w-[70px]
                    max-[360px]:text-[10px]
                    max-[360px]:max-w-[60px]
                    max-[360px]:px-[4px]
                  ">
                    {project.name}
                  </span>

                  {/* Hover Overlay */}
                  <div className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-[62%]
                    z-[5]
                    flex
                    flex-col
                    items-center
                    justify-center
                    p-[clamp(7px,0.8vw,12px)_clamp(8px,1vw,14px)]
                    bg-gradient-to-b
                    from-[rgba(15,10,25,0.72)]
                    via-[rgba(30,20,50,0.94)]
                    to-[rgba(20,14,38,0.99)]
                    rounded-[0_0_inherit_inherit]
                    opacity-0
                    translate-y-[100%]
                    transition-[opacity,transform]
                    duration-[0.4s]
                    ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                    pointer-events-none
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-hover:pointer-events-auto
                    max-[768px]:h-[65%]
                    max-[768px]:p-[6px]
                    max-[480px]:h-[68%]
                    max-[480px]:p-[5px]
                    max-[360px]:h-[70%]
                    max-[360px]:p-[4px]
                  ">
                    {/* Project Name */}
                    <h3 className="
                      m-0
                      mb-[5px]
                      text-[clamp(10px,1vw,13px)]
                      font-[700]
                      uppercase
                      tracking-[0.05em]
                      leading-[1.15]
                      text-[#ffffff]
                      shadow-[0_2px_8px_rgba(0,0,0,0.35)]
                      text-center
                      max-[768px]:text-[9px]
                      max-[768px]:mb-[3px]
                      max-[480px]:text-[8px]
                      max-[480px]:mb-[2px]
                      max-[360px]:text-[7px]
                    ">
                      {project.name}
                    </h3>

                    {/* Project Description */}
                    <p className="
                      line-clamp-3
                      overflow-hidden
                      m-[3px_0_8px]
                      text-[rgba(255,255,255,0.72)]
                      text-[clamp(8px,0.82vw,11px)]
                      leading-[1.35]
                      font-[400]
                      text-center
                      max-w-full
                      max-[768px]:text-[7.5px]
                      max-[768px]:my-[2px]
                      max-[768px]:mb-[5px]
                      max-[480px]:text-[6.5px]
                      max-[480px]:my-[2px]
                      max-[480px]:mb-[4px]
                      max-[360px]:text-[5.5px]
                      max-[360px]:my-[1px]
                      max-[360px]:mb-[3px]
                      max-[360px]:leading-[1.15]
                    ">
                      {project.desc}
                    </p>

                    {/* View Project Button */}
                    <div className="
                      min-w-[clamp(48px,4.5vw,65px)]
                      h-[clamp(24px,2.5vw,30px)]
                      px-[8px]
                      flex
                      items-center
                      justify-center
                      gap-[3px]
                      bg-[rgba(255,255,255,0.92)]
                      rounded-[999px]
                      text-[#c2a4ff]
                      shadow-[0_3px_10px_rgba(0,0,0,0.3)]
                      transition-[transform,box-shadow,background]
                      duration-[0.25s]
                      ease-[ease]
                      hover:scale-[1.08]
                      hover:bg-[#ffffff]
                      hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
                      max-[768px]:min-w-[42px]
                      max-[768px]:h-[22px]
                      max-[768px]:px-[6px]
                      max-[480px]:min-w-[36px]
                      max-[480px]:h-[19px]
                      max-[480px]:px-[5px]
                      max-[480px]:gap-[2px]
                      max-[360px]:min-w-[31px]
                      max-[360px]:h-[17px]
                      max-[360px]:px-[4px]
                    ">
                      <span className="
                        text-[clamp(8px,0.75vw,10px)]
                        font-[700]
                        leading-[1]
                        max-[768px]:text-[7px]
                        max-[480px]:text-[6.5px]
                        max-[360px]:text-[5.5px]
                      ">
                        View
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="
                          w-[clamp(10px,1.1vw,14px)]
                          h-[clamp(10px,1.1vw,14px)]
                          flex-shrink-0
                          max-[768px]:w-[9px]
                          max-[768px]:h-[9px]
                          max-[480px]:w-[8px]
                          max-[480px]:h-[8px]
                          max-[360px]:w-[7px]
                          max-[360px]:h-[7px]
                        "
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;