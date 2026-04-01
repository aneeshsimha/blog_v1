import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function CursorField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    const mouse = { x: -9999, y: -9999 };
    const PARTICLE_COUNT = 50;
    const INTERACTION_RADIUS = 180;
    const particles: Particle[] = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 1 + Math.random() * 1.5,
        });
      }
    }

    function getColor() {
      const isDark = document.documentElement.classList.contains("dark");
      return isDark ? "rgba(245, 158, 11, 0.07)" : "rgba(194, 65, 12, 0.06)";
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const color = getColor();

      for (const p of particles) {
        // Random drift
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;

        // Cursor interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < INTERACTION_RADIUS && dist > 0) {
          const force = (INTERACTION_RADIUS - dist) / INTERACTION_RADIUS * 0.15;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    initParticles();
    animate();

    window.addEventListener("resize", resize);

    // Only track mouse on devices with hover capability
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (hasHover) {
      window.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
