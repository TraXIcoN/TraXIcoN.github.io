"use client";

import Link from "next/link";
import { NAV_ITEMS } from "../../lib/constants";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make navbar visible when scrolling up or at the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 w-auto transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-32"
      }`}
    >
      <div className="bg-black/20 backdrop-blur-lg rounded-full px-12 py-4">
        <ul className="flex items-center gap-12">
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
  );
};

export default Navigation;
