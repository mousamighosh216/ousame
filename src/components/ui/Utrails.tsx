"use client";

import { useRef, useEffect, useState } from "react";
import { useUTrail } from "@/hooks/useUtrails";

type Trail = {
  r: number;
  color: string;
  speed: number;
  coverage: number;
};

interface UTrailProps {
  width?: number;
  height?: number;
  background?: string;
  lineWidth?: number;
  trails?: Trail[];

  // reusable UI controls
  className?: string;
  style?: React.CSSProperties;
  scale?: number;
  opacity?: number;
}

const DEFAULT_TRAILS: Trail[] = [
  { r: 133, color: "#6A2A11", speed: 90, coverage: 0.8 },
  { r: 106, color: "#C56D46", speed: 155, coverage: 0.83 },
  { r: 79, color: "#6A611B", speed: 65, coverage: 0.77 },
  { r: 52, color: "#4D4617", speed: 210, coverage: 0.85 },
  { r: 25, color: "#FECF97", speed: 120, coverage: 0.79 },
];

export default function UTrail({
  width = 360,
  height = 540,
  background = "transparent",
  lineWidth = 22,
  trails = DEFAULT_TRAILS,
  scale = 1,
  opacity = 1,
  className = "",
  style = {},
}: UTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const scaledTrails = trails.map((t) => ({
    ...t,
    r: t.r * scale,
  }));

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  useUTrail({
    canvasRef,
    width,
    height,
    background,
    lineWidth,
    trails: scaledTrails,
  });

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: "block",
        opacity: visible ? opacity : 0,
    transform: visible
      ? "translateX(0) translateY(0)"
      : "translateX(10px)", // 👉 slide from right (change direction here)
    transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}