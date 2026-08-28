"use client";

import React, { useEffect, useRef } from "react";
import "./styles/Cursor.css";

// 20 glowing dots for an extended, rich trailing stream
const TRAIL_DOTS = 20;

const DOT_CONFIGS = [
  { size: 9.0, opacity: 1.0, glow: 14 },
  { size: 8.2, opacity: 0.96, glow: 12 },
  { size: 7.5, opacity: 0.92, glow: 11 },
  { size: 6.8, opacity: 0.86, glow: 10 },
  { size: 6.2, opacity: 0.80, glow: 9 },
  { size: 5.6, opacity: 0.74, glow: 8 },
  { size: 5.0, opacity: 0.68, glow: 7 },
  { size: 4.5, opacity: 0.62, glow: 6 },
  { size: 4.0, opacity: 0.56, glow: 6 },
  { size: 3.6, opacity: 0.50, glow: 5 },
  { size: 3.2, opacity: 0.44, glow: 5 },
  { size: 2.8, opacity: 0.38, glow: 4 },
  { size: 2.5, opacity: 0.32, glow: 4 },
  { size: 2.2, opacity: 0.27, glow: 3 },
  { size: 1.9, opacity: 0.22, glow: 3 },
  { size: 1.6, opacity: 0.17, glow: 2 },
  { size: 1.4, opacity: 0.13, glow: 2 },
  { size: 1.2, opacity: 0.09, glow: 2 },
  { size: 1.0, opacity: 0.06, glow: 1 },
  { size: 0.8, opacity: 0.04, glow: 1 },
];

export default function Cursor() {
  const rootRef = useRef(null);
  const pointerRef = useRef(null);
  const pulseRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isVisible = false;
    let isHovering = false;
    let isMouseDown = false;
    let stopTimeout = null;
    let animFrameId;

    // Track smooth positions for each dot in the trail
    const dotPositions = Array.from({ length: TRAIL_DOTS }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }));

    const pointerEl = pointerRef.current;
    const pulseEl = pulseRef.current;
    const rootEl = rootRef.current;
    const dots = dotsRef.current;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (rootEl) rootEl.classList.add("is-active");
        dotPositions.forEach((pos) => {
          pos.x = mouseX + 11;
          pos.y = mouseY + 11;
        });
      }

      // When moving, immediately remove stop pulse
      if (rootEl) rootEl.classList.remove("is-stopped");
      if (stopTimeout) clearTimeout(stopTimeout);

      // Trigger rounded circle pulse when cursor stops moving (after ~120ms idle)
      stopTimeout = setTimeout(() => {
        if (isVisible && rootEl) {
          rootEl.classList.add("is-stopped");
        }
      }, 120);
    };

    const onMouseDown = () => {
      isMouseDown = true;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (stopTimeout) clearTimeout(stopTimeout);
      if (rootEl) {
        rootEl.classList.remove("is-active");
        rootEl.classList.remove("is-stopped");
      }
    };

    const onMouseEnter = (e) => {
      isVisible = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (rootEl) rootEl.classList.add("is-active");
    };

    const onMouseOver = (e) => {
      const target = e.target?.closest?.(
        "a, button, input, textarea, select, [role='button'], .cursor-pointer, [data-cursor='pointer']"
      );
      isHovering = !!target;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true, capture: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    // High performance animation loop
    const render = () => {
      if (isVisible && pointerEl) {
        const scale = isMouseDown ? 0.88 : isHovering ? 1.18 : 1;
        pointerEl.style.transform = `translate3d(${mouseX - 2}px, ${mouseY - 2}px, 0) scale(${scale})`;

        if (pulseEl) {
          pulseEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }

        // Notch position behind the delta arrowhead where dots emanate
        const notchX = mouseX + 11;
        const notchY = mouseY + 11;

        for (let i = 0; i < TRAIL_DOTS; i++) {
          const prevX = i === 0 ? notchX : dotPositions[i - 1].x;
          const prevY = i === 0 ? notchY : dotPositions[i - 1].y;

          // Smooth lerp formula for a long fluid snake-like curve
          const lerp = i === 0 ? 0.50 : 0.42;
          dotPositions[i].x += (prevX - dotPositions[i].x) * lerp;
          dotPositions[i].y += (prevY - dotPositions[i].y) * lerp;

          const dotEl = dots[i];
          if (dotEl) {
            dotEl.style.transform = `translate3d(${dotPositions[i].x}px, ${dotPositions[i].y}px, 0)`;
          }
        }
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
      if (stopTimeout) clearTimeout(stopTimeout);
      window.removeEventListener("mousemove", onMouseMove, { capture: true });
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="custom-neon-cursor-root"
      aria-hidden="true"
    >
      {/* Expanding Rounded Pulse Rings When Cursor Stops */}
      <div className="cursor-stop-pulse-layer" ref={pulseRef}>
        <div className="cursor-pulse-circle ring-1" />
        <div className="cursor-pulse-circle ring-2" />
        <div className="cursor-pulse-circle ring-3" />
      </div>

      {/* Glowing Extended Dot Trail Layer */}
      <div className="custom-cursor-trail-layer">
        {DOT_CONFIGS.map((cfg, i) => (
          <div
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            className="custom-cursor-dot"
            style={{
              width: `${cfg.size}px`,
              height: `${cfg.size}px`,
              marginLeft: `-${cfg.size / 2}px`,
              marginTop: `-${cfg.size / 2}px`,
              opacity: cfg.opacity,
              background: `radial-gradient(circle at 35% 35%, #ffffff 0%, var(--primary-3, var(--primary, #8750f7)) 45%, var(--primary, #8750f7) 70%, var(--primary-2, var(--primary, #8750f7)) 100%)`,
              boxShadow: `0 0 ${cfg.glow}px ${cfg.glow > 5 ? 2 : 1}px var(--primary, #8750f7), 0 0 ${cfg.glow * 2}px color-mix(in srgb, var(--primary, #8750f7) 65%, transparent)`,
            }}
          />
        ))}
      </div>

      {/* Sleek Neon Arrow Pointer */}
      <div className="custom-cursor-pointer" ref={pointerRef}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="neon-cursor-svg"
        >
          {/* Delta Arrow Fill */}
          <path
            d="M3 3 L25 12 L15.5 15.5 L12 25 Z"
            fill="#0b0f14"
            stroke="var(--primary, #8750f7)"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Crisp Highlight Outline */}
          <path
            d="M5.5 5.5 L20 12 L14.5 14 L12 20 Z"
            fill="none"
            stroke="var(--primary-3, #ffffff)"
            strokeWidth="0.9"
            strokeOpacity="0.9"
          />

          {/* Glowing Center Tip Accent */}
          <circle cx="5" cy="5" r="1" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
}
