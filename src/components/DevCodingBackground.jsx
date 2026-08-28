// components/DevCodingBackground.jsx
"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function DevCodingBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId = null;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let mouse = { x: -1000, y: -1000, radius: 140 };

    const updateSize = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;

      // Cap pixel ratio to 1.5 for buttery smooth 60fps performance without GPU strain
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();

    // IntersectionObserver: PAUSE canvas animation when section is off-screen!
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry?.isIntersecting ?? false;
        if (isVisible) {
          if (!animId) {
            animId = requestAnimationFrame(render);
          }
        } else {
          if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
          }
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(container);

    // Optimized Mouse Tracking (throttled)
    let mouseTicking = false;
    const onMouseMove = (e) => {
      if (!isVisible) return;
      if (!mouseTicking) {
        requestAnimationFrame(() => {
          const rect = container.getBoundingClientRect();
          if (
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom &&
            e.clientX >= rect.left &&
            e.clientX <= rect.right
          ) {
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
          } else {
            mouse.x = -1000;
            mouse.y = -1000;
          }
          mouseTicking = false;
        });
        mouseTicking = true;
      }
    };

    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    // Optimized Node Count (20-25 nodes instead of 55 for 10x lower math overhead)
    const nodeCount = Math.min(24, Math.max(14, Math.floor(width / 60)));
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() < 0.3 ? 3.5 : 2.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.015,
      });
    }

    const maxDistance = 140;

    const render = () => {
      if (!isVisible) {
        animId = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const purpleColor = isDarkMode ? "168, 85, 247" : "135, 80, 247";

      // 1. Draw Connecting Geometric Lines
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * (isDarkMode ? 0.45 : 0.3);
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(${purpleColor}, ${lineAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Connect to mouse pointer
        if (mouse.x > 0 && mouse.y > 0) {
          const dxMouse = n1.x - mouse.x;
          const dyMouse = n1.y - mouse.y;
          const distMouse = Math.hypot(dxMouse, dyMouse);

          if (distMouse < mouse.radius) {
            const mouseAlpha = (1 - distMouse / mouse.radius) * 0.6;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${mouseAlpha})`;
            ctx.lineWidth = 1.4;
            ctx.stroke();
          }
        }
      }

      // 2. Draw Nodes with Pure Arcs (No CPU shadowBlur rasterization)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        // Wrap around edges
        if (node.x < -10) node.x = width + 10;
        if (node.x > width + 10) node.x = -10;
        if (node.y < -10) node.y = height + 10;
        if (node.y > height + 10) node.y = -10;

        const currentRadius = node.radius + Math.sin(node.pulse) * 0.4;

        // Lightweight Outer Glow Ring (100x faster than shadowBlur)
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 240, 255, 0.15)";
        ctx.fill();

        // Cyan Core Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#00f0ff";
        ctx.fill();

        // Inner Bright Center Dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const onResize = () => {
      updateSize();
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isDarkMode]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* Deep Violet & Cyan Nebula Glow */}
      <div
        className="absolute -top-40 -left-20 h-[450px] w-[450px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, #3b82f6 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 -right-32 h-[450px] w-[450px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, #00f0ff 45%, transparent 70%)",
        }}
      />

      {/* Cyber Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Optimized Real-Time Plexus Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-100" />
    </div>
  );
}
