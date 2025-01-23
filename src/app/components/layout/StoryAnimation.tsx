"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface StoryFrame {
  text: string;
  emoji: string;
  color: string;
  scale?: number;
}

const storyFrames: StoryFrame[] = [
  { text: "Hey Dad, I won the Math Olympiad!", emoji: "🎖️", color: "#FFD700" },
  {
    text: "Hey bro, take a look at my own website!",
    emoji: "💻",
    color: "#00CED1",
  },
  {
    text: "Mom, look! I made Tic-Tac-Toe online!",
    emoji: "🎮",
    color: "#98FB98",
  },
  {
    text: "Graduated from Bachelor's",
    emoji: "🎓",
    color: "#DDA0DD",
  },
  {
    text: "First Job, Growing in Career",
    emoji: "🚀",
    color: "#87CEEB",
  },
  {
    text: "A Profound Heartbreak",
    emoji: "💔",
    color: "#FF69B4",
    scale: 0.9,
  },
  {
    text: "Suddenly Became an Animal Lover",
    emoji: "🐶",
    color: "#F4A460",
  },
  {
    text: "Personality Shift",
    emoji: "🔄",
    color: "#9370DB",
  },
  {
    text: "Flying Off to Masters",
    emoji: "✈️",
    color: "#20B2AA",
  },
  {
    text: "Culture Shock & Traveling",
    emoji: "🌍",
    color: "#FF7F50",
  },
  {
    text: "Here I am, Looking for a Job",
    emoji: "🤝",
    color: "#4169E1",
  },
];

const StoryAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % storyFrames.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Clear canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw root-like background
    const drawRoot = (x: number, y: number, angle: number, depth: number) => {
      if (depth <= 0) return;

      const length = Math.random() * 20 + 10;
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.1})`;
      ctx.lineWidth = Math.max(0.5, depth * 0.5);
      ctx.stroke();

      const branches = Math.floor(Math.random() * 2) + 1;
      for (let i = 0; i < branches; i++) {
        const newAngle = angle + (Math.random() - 0.5) * 1.5;
        drawRoot(endX, endY, newAngle, depth - 1);
      }
    };

    // Draw multiple root starting points
    for (let i = 0; i < 8; i++) {
      drawRoot(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * Math.PI * 2,
        4
      );
    }

    // Draw stick figures
    const drawStickFigure = (
      x: number,
      y: number,
      height: number,
      action: string
    ) => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = 2;

      // Head
      ctx.beginPath();
      ctx.arc(x, y - height / 1.2, height / 6, 0, Math.PI * 2);
      ctx.stroke();

      // Body
      ctx.beginPath();
      ctx.moveTo(x, y - height / 1.5);
      ctx.lineTo(x, y - height / 3);
      ctx.stroke();

      // Arms
      if (action === "wave") {
        ctx.beginPath();
        ctx.moveTo(x, y - height / 2);
        ctx.lineTo(x - height / 4, y - height / 1.8);
        ctx.moveTo(x, y - height / 2);
        ctx.lineTo(x + height / 4, y - height / 1.3);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(x, y - height / 2);
        ctx.lineTo(x - height / 4, y - height / 2.2);
        ctx.moveTo(x, y - height / 2);
        ctx.lineTo(x + height / 4, y - height / 2.2);
        ctx.stroke();
      }

      // Legs
      ctx.beginPath();
      ctx.moveTo(x, y - height / 3);
      ctx.lineTo(x - height / 4, y);
      ctx.moveTo(x, y - height / 3);
      ctx.lineTo(x + height / 4, y);
      ctx.stroke();
    };

    // Draw random number of stick figures
    const figureCount = Math.floor(Math.random() * 3) + 2; // 2-4 figures
    for (let i = 0; i < figureCount; i++) {
      const x = canvas.width * (0.3 + Math.random() * 0.4); // Keep figures in middle 40%
      const y = canvas.height * 0.8; // Keep figures near bottom
      const height = canvas.height * 0.3; // Figure height
      const action = Math.random() > 0.5 ? "wave" : "stand";
      drawStickFigure(x, y, height, action);
    }
  }, [currentFrame]); // Redraw on frame change

  return (
    <div className="w-full max-w-md">
      <div className="relative w-full h-[300px] bg-black rounded-xl overflow-hidden">
        {/* Title */}
        <motion.div
          className="absolute top-3 left-4 z-20 bg-black/80 px-3 py-1 rounded-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-sm font-medium text-white/90 tracking-wide">
            Pivotal Moments of Life
          </span>
        </motion.div>

        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* TV Static Effect */}
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay">
          <div className="w-full h-full bg-[url('/static-noise.gif')]" />
        </div>

        {/* Content with Background Panel */}
        <div className="relative w-full h-full flex items-center justify-center p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFrame}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{
                opacity: 1,
                scale: storyFrames[currentFrame].scale || 1,
                y: 0,
              }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center relative z-10"
            >
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-xl -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="px-6 py-4">
                <motion.div
                  className="text-5xl mb-3"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {storyFrames[currentFrame].emoji}
                </motion.div>
                <motion.div
                  className="text-2xl font-bold text-shadow-lg"
                  style={{ color: storyFrames[currentFrame].color }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {storyFrames[currentFrame].text}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TV Frame */}
        <motion.div
          className="absolute inset-0 border-6 border-gray-800 rounded-xl"
          animate={{
            boxShadow: [
              "0 0 15px rgba(255,255,255,0.2)",
              "0 0 30px rgba(255,255,255,0.4)",
              "0 0 15px rgba(255,255,255,0.2)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default StoryAnimation;
