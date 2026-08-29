import { useEffect, useRef } from 'react';

const SIZE = 15; // hexagon circumradius in px
const HEX_W = Math.sqrt(3) * SIZE; // horizontal spacing between column centers
const ROW_H = 1.5 * SIZE; // vertical spacing between rows

function hexVertices(cx, cy) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 90);
    pts.push([cx + SIZE * Math.cos(angle), cy + SIZE * Math.sin(angle)]);
  }
  return pts;
}

function tracePath(ctx, pts) {
  pts.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
  ctx.closePath();
}

function readVar(varName, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return v || fallback;
}

export default function HexGrid() {
  const canvasRef = useRef(null);
  const gridLayerRef = useRef(null); // offscreen canvas: the static grid, redrawn only on resize/theme change
  const centersRef = useRef([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const frame = useRef(null);
  const dimsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const gridLayer = document.createElement('canvas');
    gridLayerRef.current = gridLayer;
    const gridCtx = gridLayer.getContext('2d');

    function buildStaticGrid() {
      const { width, height } = dimsRef.current;
      const dpr = window.devicePixelRatio || 1;
      gridLayer.width = width * dpr;
      gridLayer.height = height * dpr;
      gridCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      gridCtx.clearRect(0, 0, width, height);

      const lineRGB = readVar('--text-rgb', '27, 31, 35');

      const cols = Math.ceil(width / HEX_W) + 2;
      const rows = Math.ceil(height / ROW_H) + 2;

      const centers = [];
      gridCtx.beginPath();
      for (let row = -1; row < rows; row++) {
        const y = row * ROW_H;
        const xOffset = row % 2 !== 0 ? HEX_W / 2 : 0;
        for (let col = -1; col < cols; col++) {
          const x = col * HEX_W + xOffset;
          centers.push([x, y]);
          tracePath(gridCtx, hexVertices(x, y));
        }
      }
      gridCtx.strokeStyle = `rgba(${lineRGB}, 0.05)`;
      gridCtx.lineWidth = 1;
      gridCtx.stroke();

      gridCtx.beginPath();
      centers.forEach(([x, y]) => {
        hexVertices(x, y).forEach(([vx, vy]) => {
          gridCtx.moveTo(vx + 1, vy);
          gridCtx.arc(vx, vy, 1, 0, Math.PI * 2);
        });
      });
      gridCtx.fillStyle = `rgba(${lineRGB}, 0.12)`;
      gridCtx.fill();

      centersRef.current = centers;
    }

    function draw() {
      const { width, height } = dimsRef.current;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(gridLayer, 0, 0, width, height);

      const { x: mx, y: my } = mouse.current;
      let nearest = null;
      let nearestDist = Infinity;
      centersRef.current.forEach(([x, y]) => {
        const d = Math.hypot(x - mx, y - my);
        if (d < nearestDist) {
          nearestDist = d;
          nearest = [x, y];
        }
      });

      if (nearest && nearestDist < SIZE * 1.3) {
        const tintHex = readVar('--cobalt-bright', '#2f74a3');
        ctx.beginPath();
        tracePath(ctx, hexVertices(nearest[0], nearest[1]));
        ctx.fillStyle = `${tintHex}22`;
        ctx.fill();
      }
    }

    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      dimsRef.current = { width, height };
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStaticGrid();
      draw();
    }

    function scheduleDraw() {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        draw();
      });
    }

    function onMouseMove(e) {
      mouse.current = { x: e.clientX, y: e.clientY };
      scheduleDraw();
    }

    function onMouseLeave() {
      mouse.current = { x: -9999, y: -9999 };
      scheduleDraw();
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const themeObserver = new MutationObserver(() => {
      buildStaticGrid();
      scheduleDraw();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      themeObserver.disconnect();
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        pointerEvents: 'none',
      }}
    />
  );
}
