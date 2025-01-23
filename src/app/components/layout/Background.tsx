"use client";

import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  size: number;
  type: "square" | "triangle" | "pentagon" | "rectangle" | "hexagon";
  rotation: number;
  speedX: number;
  speedY: number;
}

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create shapes
    const shapes: Shape[] = [];
    const shapeTypes: Shape["type"][] = [
      "square",
      "triangle",
      "pentagon",
      "rectangle",
      "hexagon",
    ];

    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 20,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        rotation: Math.random() * Math.PI * 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    const drawShape = (shape: Shape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.beginPath();

      switch (shape.type) {
        case "square":
          ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
          break;
        case "rectangle":
          ctx.rect(
            -shape.size / 2,
            -shape.size / 4,
            shape.size,
            shape.size / 2
          );
          break;
        case "triangle":
          ctx.moveTo(-shape.size / 2, shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.lineTo(0, -shape.size / 2);
          break;
        case "pentagon":
          for (let i = 0; i < 5; i++) {
            const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
            const x = (shape.size / 2) * Math.cos(angle);
            const y = (shape.size / 2) * Math.sin(angle);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          break;
        case "hexagon":
          for (let i = 0; i < 6; i++) {
            const angle = (i * 2 * Math.PI) / 6;
            const x = (shape.size / 2) * Math.cos(angle);
            const y = (shape.size / 2) * Math.sin(angle);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          break;
      }

      ctx.closePath();
      ctx.strokeStyle = "rgba(239, 68, 68, 0.2)";
      ctx.stroke();
      ctx.restore();
    };

    const drawLightning = (x1: number, y1: number, x2: number, y2: number) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);

      // Create lightning effect with multiple segments
      let x = x1;
      let y = y1;
      const segments = 5;
      const dx = (x2 - x1) / segments;
      const dy = (y2 - y1) / segments;

      for (let i = 0; i < segments - 1; i++) {
        const nextX = x + dx + (Math.random() - 0.5) * 20;
        const nextY = y + dy + (Math.random() - 0.5) * 20;
        ctx.lineTo(nextX, nextY);
        x = nextX;
        y = nextY;
      }

      ctx.lineTo(x2, y2);
      ctx.strokeStyle = "rgba(239, 68, 68, 0.1)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw shapes
      shapes.forEach((shape) => {
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += 0.002;

        // Bounce off edges
        if (shape.x < 0 || shape.x > canvas.width) shape.speedX *= -1;
        if (shape.y < 0 || shape.y > canvas.height) shape.speedY *= -1;

        drawShape(shape);
      });

      // Draw lightning between nearby shapes
      shapes.forEach((shape1, i) => {
        shapes.slice(i + 1).forEach((shape2) => {
          const distance = Math.hypot(shape2.x - shape1.x, shape2.y - shape1.y);
          if (distance < 200) {
            drawLightning(shape1.x, shape1.y, shape2.x, shape2.y);
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-gradient-to-br from-white to-gray-100"
    />
  );
};

export default Background;
