import { useEffect, useRef } from 'react';

// A sparse field of tiny dots that drift slowly and twinkle, like particles
// in still air. It sits behind all content and ignores the pointer.
const AREA_PER_STAR = 9000; // px² of viewport per dot; higher = sparser
const MAX_STARS = 260;
const SPARKLE_SHARE = 0.07; // fraction of dots that occasionally flash brighter

// Reads an "r, g, b" triplet from a CSS variable (set per theme in index.css).
function readRgb(varName, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return /^\d+,\s*\d+,\s*\d+$/.test(v) ? v : fallback;
}

function isDark() {
  const theme = document.documentElement.dataset.theme;
  if (theme) return theme === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function makeStar(width, height) {
  const sparkle = Math.random() < SPARKLE_SHARE;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    r: sparkle ? 1.1 + Math.random() * 0.6 : 0.5 + Math.random() * 0.9,
    base: 0.08 + Math.random() * 0.14,
    amp: sparkle ? 0.55 + Math.random() * 0.25 : 0.1 + Math.random() * 0.15,
    // radians per second: one twinkle every ~3–10 s
    w: (2 * Math.PI) / (3 + Math.random() * 7),
    phase: Math.random() * Math.PI * 2,
    // a few px per second, drifting gently up and sideways
    vx: (Math.random() - 0.5) * 4,
    vy: -0.5 - Math.random() * 2.5,
    sparkle,
  };
}

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    let width = 0;
    let height = 0;
    let stars = [];
    let rgb = '';
    let strength = 1;
    let scale = 1;
    let frame = null;
    let last = performance.now();

    function readColors() {
      rgb = readRgb('--star-rgb', '214, 118, 38');
      // Light paper washes out pale dots, so they get a boost there.
      strength = isDark() ? 1 : 1.5;
      scale = isDark() ? 1 : 1.35;
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(MAX_STARS, Math.round((width * height) / AREA_PER_STAR));
      stars = Array.from({ length: count }, () => makeStar(width, height));
    }

    function draw(t) {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        // Cubed sine keeps each dot dim most of the time with a brief peak.
        const pulse = Math.pow(0.5 + 0.5 * Math.sin(t * s.w + s.phase), 3);
        const alpha = (s.base + s.amp * pulse) * strength;
        ctx.fillStyle = `rgba(${rgb}, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * scale, 0, Math.PI * 2);
        ctx.fill();
        if (s.sparkle && pulse > 0.6) {
          // soft halo on the brightest moments
          ctx.fillStyle = `rgba(${rgb}, ${(alpha * 0.15).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * scale * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function step(now) {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      for (const s of stars) {
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        if (s.y < -4) {
          s.y = height + 4;
          s.x = Math.random() * width;
        }
        if (s.x < -4) s.x = width + 4;
        else if (s.x > width + 4) s.x = -4;
      }
      draw(now / 1000);
      frame = requestAnimationFrame(step);
    }

    function start() {
      cancelAnimationFrame(frame);
      if (reduceMotion.matches || document.hidden) {
        draw(0);
        return;
      }
      last = performance.now();
      frame = requestAnimationFrame(step);
    }

    function onResize() {
      resize();
      start();
    }

    function onThemeChange() {
      readColors();
      if (reduceMotion.matches) draw(0);
    }

    readColors();
    resize();
    start();

    const themeObserver = new MutationObserver(onThemeChange);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    darkQuery.addEventListener('change', onThemeChange);
    reduceMotion.addEventListener('change', start);
    document.addEventListener('visibilitychange', start);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      darkQuery.removeEventListener('change', onThemeChange);
      reduceMotion.removeEventListener('change', start);
      document.removeEventListener('visibilitychange', start);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}
    />
  );
}
