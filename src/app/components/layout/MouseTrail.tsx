"use client";

import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const positionsRef = useRef<{ x: number; y: number; age: number }[]>([]);
  const requestRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      positionsRef.current.push({ x: e.clientX, y: e.clientY, age: 0 });
      if (positionsRef.current.length > 50) {
        positionsRef.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and filter positions
      positionsRef.current = positionsRef.current
        .map((pos) => ({ ...pos, age: pos.age + 1 }))
        .filter((pos) => pos.age < 50); // Remove old points

      // Draw white glow
      ctx.beginPath();
      positionsRef.current.forEach((pos, i) => {
        if (i === 0) {
          ctx.moveTo(pos.x, pos.y);
        } else {
          ctx.lineTo(pos.x, pos.y);
        }
      });
      ctx.strokeStyle = `rgba(138, 0, 196, 1)`;
      ctx.lineWidth = 8;
      ctx.lineCap = "round";
      ctx.stroke();

      // Draw purple trail
      ctx.beginPath();
      positionsRef.current.forEach((pos, i) => {
        const width = 4 * (1 - i / positionsRef.current.length);
        if (i === 0) {
          ctx.moveTo(pos.x, pos.y);
        } else {
          ctx.lineTo(pos.x, pos.y);
        }
        ctx.lineWidth = width;
      });

      ctx.strokeStyle = "#8A00C4";
      ctx.lineCap = "round";
      ctx.stroke();

      // Slight wobble effect
      positionsRef.current = positionsRef.current.map((pos) => ({
        ...pos,
        x: pos.x + (Math.random() - 0.5) * 0.5,
        y: pos.y + (Math.random() - 0.5) * 0.5,
      }));

      requestRef.current = requestAnimationFrame(animate);
    };

    updateCanvasSize();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateCanvasSize);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateCanvasSize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}
