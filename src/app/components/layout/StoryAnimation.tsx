"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../shared/ThemeContext";

interface StoryFrame {
  text: string;
  emoji: string;
  color: string;
  scale?: number;
  year: string;
}

const storyFrames: StoryFrame[] = [
  {
    text: "Hey Dad, I won the Math Olympiad!",
    emoji: "🥇",
    color: "#FFD700",
    year: "2016",
  },
  {
    text: "Hey bro, take a look at my own website!",
    emoji: "💻",
    color: "#00CED1",
    year: "2017",
  },
  {
    text: "Mom, look! I made Tic-Tac-Toe online!",
    emoji: "🎮",
    color: "#98FB98",
    year: "2018",
  },
  {
    text: "Graduated from High School",
    emoji: "🎓",
    color: "#DDA0DD",
    year: "2020",
  },
  {
    text: "First Internship",
    emoji: "🚀",
    color: "#87CEEB",
    year: "2021",
  },
  {
    text: "A Profound Heartbreak",
    emoji: "💔",
    color: "#FF69B4",
    scale: 0.9,
    year: "2022",
  },
  {
    text: "Suddenly Became an Animal Lover",
    emoji: "🐶",
    color: "#F4A460",
    year: "2022",
  },
  {
    text: "Personality Shift",
    emoji: "🔄",
    color: "#9370DB",
    year: "2023",
  },
  {
    text: "Flying Off to Masters",
    emoji: "✈️",
    color: "#20B2AA",
    year: "2024",
  },
  {
    text: "Culture Shock & Traveling",
    emoji: "🌍",
    color: "#FF7F50",
    year: "2024",
  },
  {
    text: "Here I am, Looking for a Job",
    emoji: "🤝",
    color: "#4169E1",
    year: "2025",
  },
];

const StoryAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

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

    // Clear canvas with theme-appropriate background
    ctx.fillStyle = theme === "dark" ? "white" : "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw root-like background with theme-appropriate color
    const drawRoot = (x: number, y: number, angle: number, depth: number) => {
      if (depth <= 0) return;

      const length = Math.random() * 20 + 10;
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle =
        theme === "dark"
          ? `rgba(0, 0, 0, ${0.1 + Math.random() * 0.1})`
          : `rgba(255, 255, 255, ${0.1 + Math.random() * 0.1})`;
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
      ctx.strokeStyle =
        theme === "dark"
          ? "rgba(0, 0, 0, 0.6)" // Increased opacity for light theme
          : "rgba(255, 255, 255, 0.6)"; // Increased opacity for dark theme
      ctx.lineWidth = 3; // Increased line width

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
  }, [currentFrame, theme]); // Add theme as dependency

  return (
    <div className="w-full max-w-md border-[#1a1a1a] shadow-purple-100 dark:shadow-purple-900/20">
      <div
        className={`relative w-full h-[300px] ${
          theme === "dark" ? "bg-white/80" : "bg-[#1a1a1a]/80"
        } rounded-xl overflow-hidden`}
      >
        {/* Title */}
        <motion.div
          className={`absolute top-3 left-4 z-20 ${
            theme === "dark"
              ? "bg-black/80 text-white/90"
              : "bg-white/80 text-black/90"
          } px-3 py-1 rounded-md`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-sm font-medium tracking-wide">
            Pivotal Moments of Life
          </span>
        </motion.div>

        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* TV Static Effect */}
        <div
          className={`absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay ${
            theme === "dark" ? "invert" : "invert-0"
          }`}
        >
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
                className={`absolute inset-0 ${
                  theme === "dark" ? "bg-white/80" : "bg-black/80"
                } backdrop-blur-sm rounded-xl -z-10`}
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
                <motion.div className="text-2xl font-bold text-shadow-lg">
                  <span style={{ color: storyFrames[currentFrame].color }}>
                    {storyFrames[currentFrame].text}
                  </span>
                </motion.div>
                <motion.div className="text-2xl font-bold text-shadow-lg">
                  <span className="text-gray-400 mr-2">
                    {storyFrames[currentFrame].year}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TV Frame */}
        <motion.div
          className={`absolute inset-0 border-6 ${
            theme === "dark" ? "border-gray-200" : "border-gray-800"
          } rounded-xl`}
          animate={{
            boxShadow: [
              `0 0 15px ${
                theme === "dark" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"
              }`,
              `0 0 30px ${
                theme === "dark" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)"
              }`,
              `0 0 15px ${
                theme === "dark" ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"
              }`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default StoryAnimation;
