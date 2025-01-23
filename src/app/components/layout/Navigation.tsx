"use client";

import Link from "next/link";
import { NAV_ITEMS } from "../../lib/constants";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed w-full transition-transform duration-300 z-50 ${
        visible ? "translate-y-4" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <motion.div
            className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-red-600 hover:scale-110 transition-transform"
            initial={{ scale: 0 }}
            animate={{ scale: 1.4 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <Image
              src="/assets/img/Aditya.jpeg"
              alt="Aditya Mohan"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Navigation Bar */}
          <nav className="bg-black/80 backdrop-blur-sm rounded-full">
            <div className="px-8 py-4">
              <ul className="flex items-center gap-8">
                {NAV_ITEMS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-2xl text-white hover:text-red-400 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
