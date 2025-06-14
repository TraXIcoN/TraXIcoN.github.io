import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiHashnode } from "react-icons/si";
import type { NavItem, SocialLink } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#interests", label: "Interests" },
  { href: "#achievements", label: "Achievements" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/adityamohan16/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/TraXIcoN",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/chiflado_adiiii16/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.adityamohan.me/",
    icon: SiHashnode,
    label: "Blog",
  },
  {
    href: "https://leetcode.com/adityamohan16/",
    icon: SiLeetcode,
    label: "LeetCode",
  },
  {
    href: "https://www.hackerrank.com/adityamohan16",
    icon: SiHackerrank,
    label: "HackerRank",
  },
];

export const CONTACT_EMAIL = "adityamohan1601@gmail.com";
export const RESUME_LINK =
  "https://drive.google.com/file/d/1nFDMRJQp1Ux92vljv0hvKTymaz_FX1wP/view?usp=sharing";

// Color palette
export const THEME = {
  primary: {
    light: "#9333ea", // Purple-600
    main: "#7e22ce", // Purple-700
    dark: "#6b21a8", // Purple-800
  },
  background: {
    light: "#f3f4f6", // Gray-100
    main: "#1a1a1a", // Light black
    dark: "#171717", // Neutral-900
  },
  text: {
    primary: "#171717", // Neutral-900
    secondary: "#4b5563", // Gray-600
    light: "#9ca3af", // Gray-400
  },
};
