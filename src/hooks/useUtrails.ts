import { useEffect, useRef } from "react";

type Trail = {
  r: number;
  color: string;
  speed: number;
  coverage: number;
};

interface UseUTrailProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  width: number;
  height: number;
  background: string;
  lineWidth: number;
  trails: Trail[];
}

export function useUTrail({
  canvasRef,
  width,
  height,
  background,
  lineWidth,
  trails,
}: UseUTrailProps) {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const context = ctx; // ✅ stabilized

    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // ✅ safer than scale (prevents stacking)
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = width / 2;
    const arcCy = height - 150;
    const armTopY = 20;

    const pathLen = (r: number) =>
      2 * (arcCy - armTopY) + Math.PI * r;

    const drawTrail = (trail: Trail, ts: number) => {
      const { r, color, speed, coverage } = trail;

      const total = pathLen(r);
      const dash = total * coverage;
      const gap = total - dash;
      const offset = ((ts * 0.001) * speed) % total;

      context.save();

      context.beginPath();
      context.moveTo(cx - r, armTopY);
      context.lineTo(cx - r, arcCy);
      context.arc(cx, arcCy, r, Math.PI, 0, true);
      context.lineTo(cx + r, armTopY);

      context.strokeStyle = color;
      context.lineWidth = lineWidth;
      context.lineCap = "round";
      context.lineJoin = "round";

      context.setLineDash([dash, gap]);
      context.lineDashOffset = -offset;

      context.stroke();
      context.restore();
    };

    const frame = (ts: number) => {
      if (document.hidden) {
        rafRef.current = requestAnimationFrame(frame);
        return;
      }

      context.clearRect(0, 0, width, height);

      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      for (const trail of trails) {
        drawTrail(trail, ts);
      }

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      context.setLineDash([]);
    };
  }, [canvasRef, width, height, background, lineWidth, trails]);
}