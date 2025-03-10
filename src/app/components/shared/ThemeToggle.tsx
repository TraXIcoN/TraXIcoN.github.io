"use client";

import { useTheme } from "../../components/shared/ThemeContext";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="fixed md:top-8 md:right-8 top-20 right-4 p-2 md:p-3 rounded-full 
                bg-white/80 dark:bg-purple-800/80 backdrop-blur-sm 
                text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400
                shadow-lg transition-colors z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </motion.button>
  );
};
