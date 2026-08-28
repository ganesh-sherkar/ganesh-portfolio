// components/HeroSceneBackground.jsx
"use client";

import { useEffect, useRef } from "react";

export default function HeroSceneBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = null;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    onResize();
    window.addEventListener("resize", onResize, { passive: true });

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

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let mouseTicking = false;
    const onMouseMove = (e) => {
      if (!isVisible) return;
      if (!mouseTicking) {
        requestAnimationFrame(() => {
          mouse.targetX = (e.clientX / width - 0.5) * 0.8;
          mouse.targetY = (e.clientY / height - 0.5) * 0.8;
          mouseTicking = false;
        });
        mouseTicking = true;
      }
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices = [
      [-1, phi, 0],
      [1, phi, 0],
      [-1, -phi, 0],
      [1, -phi, 0],
      [0, -1, phi],
      [0, 1, phi],
      [0, -1, -phi],
      [0, 1, -phi],
      [phi, 0, -1],
      [phi, 0, 1],
      [-phi, 0, -1],
      [-phi, 0, 1],
    ];

    const vertices = rawVertices.map(([x, y, z]) => {
      const len = Math.hypot(x, y, z);
      return [x / len, y / len, z / len];
    });

    const midPointCache = {};
    const getMidPoint = (p1, p2) => {
      const key = p1 < p2 ? `${p1}_${p2}` : `${p2}_${p1}`;
      if (midPointCache[key] !== undefined) return midPointCache[key];
      const v1 = vertices[p1];
      const v2 = vertices[p2];
      const mid = [(v1[0] + v2[0]) / 2, (v1[1] + v2[1]) / 2, (v1[2] + v2[2]) / 2];
      const len = Math.hypot(...mid);
      const newIdx = vertices.push([mid[0] / len, mid[1] / len, mid[2] / len]) - 1;
      midPointCache[key] = newIdx;
      return newIdx;
    };

    const baseFaces = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
    ];

    const edgesSet = new Set();
    baseFaces.forEach(([v1, v2, v3]) => {
      const a = getMidPoint(v1, v2);
      const b = getMidPoint(v2, v3);
      const c = getMidPoint(v3, v1);

      const subFaces = [
        [v1, a, c],
        [v2, b, a],
        [v3, c, b],
        [a, b, c],
      ];

      subFaces.forEach(([p1, p2, p3]) => {
        const addEdge = (i, j) => {
          const key = i < j ? `${i}_${j}` : `${j}_${i}`;
          edgesSet.add(key);
        };
        addEdge(p1, p2);
        addEdge(p2, p3);
        addEdge(p3, p1);
      });
    });

    const edges = Array.from(edgesSet).map((str) => str.split("_").map(Number));

    const dustCount = 30;
    const dust = Array.from({ length: dustCount }, () => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: (Math.random() - 0.5) * 2,
      radius: Math.random() * 1.5 + 0.8,
      speedX: (Math.random() - 0.5) * 0.0015,
      speedY: (Math.random() - 0.5) * 0.0015,
      speedZ: (Math.random() - 0.5) * 0.0015,
      color: Math.random() > 0.5 ? "#00f0ff" : "#a855f7",
    }));

    let rotX = 0;
    let rotY = 0;
    let rotZ = 0;

    const render = () => {
      if (!isVisible) {
        animId = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      rotX += 0.003 + mouse.y * 0.01;
      rotY += 0.004 + mouse.x * 0.01;
      rotZ += 0.002;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);

      const fov = 850;
      const baseRadius = width < 768 ? Math.min(width, height) * 0.48 : Math.min(width, height) * 0.52;
      const centerX = width < 768 ? width * 0.5 : width * 0.58;
      const centerY = height * 0.5;

      dust.forEach((d) => {
        d.x += d.speedX;
        d.y += d.speedY;
        d.z += d.speedZ;
        if (d.x < -1) d.x = 1;
        if (d.x > 1) d.x = -1;
        if (d.y < -1) d.y = 1;
        if (d.y > 1) d.y = -1;

        const screenX = centerX + d.x * baseRadius * 1.3;
        const screenY = centerY + d.y * baseRadius * 1.3;

        ctx.beginPath();
        ctx.arc(screenX, screenY, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.globalAlpha = 0.35;
        ctx.fill();
      });

      const projected = vertices.map(([x, y, z]) => {
        let y1 = y * cosX - z * sinX;
        let z1 = y * sinX + z * cosX;
        let x2 = x * cosY + z1 * sinY;
        let z2 = -x * sinY + z1 * cosY;
        let x3 = x2 * cosZ - y1 * sinZ;
        let y3 = x2 * sinZ + y1 * cosZ;

        // Smooth perspective without severe fish-eye distortion
        const scale = fov / (fov + z2 * baseRadius * 0.35);
        return {
          x: centerX + x3 * baseRadius * scale,
          y: centerY + y3 * baseRadius * scale,
          z: z2,
          scale,
        };
      });

      edges.forEach(([i1, i2]) => {
        const p1 = projected[i1];
        const p2 = projected[i2];
        const avgZ = (p1.z + p2.z) / 2;
        const depthAlpha = Math.max(0.12, Math.min(0.65, (avgZ + 1.2) / 2.2));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(168, 85, 247, ${depthAlpha * 0.85})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
      });

      projected.forEach((p) => {
        const alpha = Math.max(0.2, Math.min(0.9, (p.z + 1.2) / 2.2));
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.8 * p.scale, 0, Math.PI * 2);
        ctx.fillStyle = "#00f0ff";
        ctx.globalAlpha = alpha;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}