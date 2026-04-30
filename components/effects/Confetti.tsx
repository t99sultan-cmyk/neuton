"use client";

/**
 * Lightweight confetti burst — vanilla canvas, no deps.
 * Call `fireConfetti({ x, y })` to emit a burst at viewport coordinates.
 */

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vrot: number;
  size: number;
  color: string;
  shape: "rect" | "circle";
  life: number;
  ttl: number;
};

const COLORS = ["#E8B589", "#D4A86A", "#A8D9BC", "#F4EBDC", "#F0C9A0"];
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let particles: Particle[] = [];
let raf = 0;

function ensureCanvas() {
  if (typeof window === "undefined") return;
  if (canvas) return;
  canvas = document.createElement("canvas");
  canvas.className = "confetti-canvas";
  document.body.appendChild(canvas);
  resize();
  window.addEventListener("resize", resize);
  ctx = canvas.getContext("2d");
}

function resize() {
  if (!canvas) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function spawnAt(x: number, y: number, count = 50) {
  for (let i = 0; i < count; i++) {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.85;
    const speed = 6 + Math.random() * 8;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      rot: Math.random() * Math.PI * 2,
      vrot: -0.2 + Math.random() * 0.4,
      size: 4 + Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: Math.random() < 0.6 ? "rect" : "circle",
      life: 0,
      ttl: 70 + Math.floor(Math.random() * 40),
    });
  }
}

function tick() {
  if (!ctx || !canvas) return;
  const w = canvas.width / (window.devicePixelRatio || 1);
  const h = canvas.height / (window.devicePixelRatio || 1);
  ctx.clearRect(0, 0, w, h);
  particles = particles.filter((p) => p.life < p.ttl);
  for (const p of particles) {
    p.life++;
    p.vy += 0.28;
    p.vx *= 0.99;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vrot;
    const fade = 1 - p.life / p.ttl;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = Math.max(0, fade);
    ctx.fillStyle = p.color;
    if (p.shape === "rect") {
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
  if (particles.length > 0) {
    raf = requestAnimationFrame(tick);
  } else {
    raf = 0;
  }
}

export function fireConfetti(opts: { x: number; y: number; count?: number }) {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  ensureCanvas();
  spawnAt(opts.x, opts.y, opts.count ?? 50);
  if (!raf) raf = requestAnimationFrame(tick);
}
