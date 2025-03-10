"use client";

import Link from "next/link";
import { NAV_ITEMS } from "../../lib/constants";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className={`fixed w-full transition-transform duration-300 z-50 ${
        visible ? "translate-y-4" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
        <div className="flex items-center gap-4 w-full justify-between md:justify-center">
          {/* Avatar */}
          <motion.div
            className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-purple-600 dark:border-purple-400 hover:scale-110 transition-transform"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <Image
              src="/assets/img/Aditya.jpeg"
              alt="Aditya Mohan"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full">
            <div className="px-8 py-4">
              <ul className="flex items-center gap-8">
                {NAV_ITEMS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-2xl text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-16 left-0 w-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm py-4 px-6 shadow-lg rounded-b-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex flex-col items-center gap-4">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href} className="w-full">
                <Link
                  href={href}
                  className="block text-center py-2 text-xl text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navigation;
