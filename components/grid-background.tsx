"use client";

import { useEffect, useRef } from "react";

export function GridBackground() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let animFrame: number;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(() => {
        grid.style.setProperty("--mx", `${e.clientX}px`);
        grid.style.setProperty("--my", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      aria-hidden
      className="pointer-events-none fixed inset-[-40px] z-0"
      style={{
        ["--mx" as string]: "50vw",
        ["--my" as string]: "50vh",
        backgroundImage:
          "linear-gradient(rgba(74,140,101,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(74,140,101,0.12) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage:
          "radial-gradient(circle 280px at var(--mx) var(--my), black 0%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(circle 280px at var(--mx) var(--my), black 0%, transparent 100%)",
        transform:
          "translate(calc((var(--mx) - 50vw) * 0.01), calc((var(--my) - 50vh) * 0.01))",
        transition: "transform 0.3s ease-out",
      }}
    />
  );
}
