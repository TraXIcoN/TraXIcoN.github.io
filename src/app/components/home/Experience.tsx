"use client";

import { motion, AnimatePresence } from "framer-motion";
import "../../styles/experience.css";
import { useState } from "react";
import { HandRaisedIcon } from "@heroicons/react/24/outline";
import {
  UserGroupIcon,
  AcademicCapIcon,
  LightBulbIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";

interface Skill {
  name: string;
  color: string;
}

interface ExperienceItem {
  number: number;
  company: string;
  position: string;
  isRight?: boolean;
  duration: string;
  description: string[];
  skills: Skill[];
}

const experiences: ExperienceItem[] = [
  {
    number: 1,
    company: "The Linux Foundation",
    position: "Software Engineer Fellow",
    duration: "September 2024 - December 2024",
    description: [
      "Enhanced RISC-V's prod pipeline with 2 peer-approved PRs, increasing testing coverage by 70% & improving reliability",
      "Optimized the RISC-V Sail Model repository by adding LaTeX/AsciiDoc documentation generation, type-checking, and an executable emulator, achieving 300 KIPS performance on Intel i7-7700",
      "Refactored a critical parser by modularizing outputs into dedicated scripts, improving scalability by 30% & maintainability",
      "Developed and integrated 20+ unit tests, streamlining debugging processes and improving code reliability by 25%",
      "Automated testing and integration workflows using YAML, enabling seamless updates with minimal manual intervention",
    ],
    skills: [
      { name: "RISC-V", color: "#8b5cf6" },
      { name: "YAML", color: "#ec4899" },
      { name: "LaTeX", color: "#14b8a6" },
      { name: "Testing", color: "#f97316" },
      { name: "Documentation", color: "#06b6d4" },
    ],
  },
  {
    number: 2,
    company: "All in Dating Inc",
    position: "Full Stack Developer Intern",
    isRight: true,
    duration: "May 2024 - August 2024",
    description: [
      "Engineered a Flutter dating app with WebSockets, reducing message delivery time by 30% for instant connections",
      "Conducted comprehensive API testing using Postman, optimizing SQL database performance to handle 10,000+ concurrent users while ensuring 99.99% uptime and seamless scalability",
      "Revamped system design to cut chat refresh costs, improving system speed and reducing resource usage by 50%",
      "Implemented an AI chat assistant using LLaMA-1 to enrich user experience with engaging conversation starters",
      "Analyzed web options and chose Azure Media Storage for efficient sharing of multimedia content",
    ],
    skills: [
      { name: "Flutter", color: "#0ea5e9" },
      { name: "WebSocket", color: "#8b5cf6" },
      { name: "SQL", color: "#22c55e" },
      { name: "LLaMA", color: "#f97316" },
      { name: "Azure", color: "#06b6d4" },
    ],
  },
  {
    number: 3,
    company: "LTIMindtree",
    position: "Cloud Software Engineer",
    duration: "June 2022 - July 2023",
    description: [
      "Led the migration from Oracle SQL to Databricks, reducing infrastructure costs by approximately $200K annually",
      "Optimized ETL pipelines and data schemas, reducing processing time by 40% and query execution by 36%, while improving scalability for high-throughput workloads",
      "Formulated Git workflows processing 5TB+ of sales data across 100 regions, ensuring 92% pipeline reliability",
      "Integrated Snowflake with SAP for real-time ETL workflows, optimizing data ingestion and transformation, cutting processing costs by 20%, and accelerating query performance by 35%",
    ],
    skills: [
      { name: "Databricks", color: "#f97316" },
      { name: "ETL", color: "#8b5cf6" },
      { name: "Git", color: "#22c55e" },
      { name: "Snowflake", color: "#06b6d4" },
      { name: "SAP", color: "#ec4899" },
    ],
  },
];

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const communityActivities = [
    {
      text: "Part of tech communities like Google Developers Club, IEEE, CSI",
      icon: UserGroupIcon,
    },
    {
      text: "Conducted workshops on web development and cybersecurity",
      icon: PresentationChartBarIcon,
    },
    {
      text: "Taught underprivileged kids",
      icon: AcademicCapIcon,
    },
    {
      text: "Creative freak looking to solve interesting problems",
      icon: LightBulbIcon,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#1a1f2b]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16 text-white">
          Experience In A Timeline
        </h2>

        <div className="text-center mb-8">
          <p className="text-gray-300 text-lg">
            <HandRaisedIcon className="w-6 h-6 inline-block mr-2 animate-bounce" />
            Tap on any card to view detailed experience
          </p>
        </div>

        <div className="timeline-container">
          {experiences.map((exp) => (
            <motion.div
              key={exp.number}
              className={`timeline-item ${exp.isRight ? "right" : "left"}`}
              initial={{ opacity: 0, x: exp.isRight ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={`timeline-content bg-[#252d3d] relative ${
                  expandedCard === exp.number ? "expanded" : ""
                }`}
                onClick={() =>
                  setExpandedCard(
                    expandedCard === exp.number ? null : exp.number
                  )
                }
                layout
              >
                <div className="timeline-number text-2xl">{exp.number}</div>

                {/* Tap indicator overlay */}
                {expandedCard !== exp.number && (
                  <div className="tap-indicator">Tap for details</div>
                )}

                <h3 className="text-white text-4xl font-bold mb-2">
                  {exp.company}
                </h3>
                <p className="text-gray-300 text-2xl mb-4">{exp.position}</p>

                {/* Click indicator */}
                {expandedCard !== exp.number && (
                  <motion.div
                    className="flex items-center justify-center mt-4 text-gray-300"
                    initial={{ opacity: 0.7 }}
                    animate={{
                      opacity: [0.7, 1, 0.7],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                  >
                    <HandRaisedIcon className="w-6 h-6 mr-2 transform rotate-90" />
                    <span className="text-sm">Click to expand</span>
                  </motion.div>
                )}

                <AnimatePresence>
                  {expandedCard === exp.number && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-xl text-gray-300 mb-4">
                        {exp.duration}
                      </p>
                      <ul className="list-disc list-inside mb-4 text-lg text-gray-300">
                        {exp.description.map((item, index) => (
                          <li key={index} className="mb-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-white text-sm font-medium"
                            style={{ backgroundColor: skill.color }}
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}

          {/* Community Activities Section */}
          <motion.div
            className="timeline-end-section"
            initial={{ height: 0 }}
            whileInView={{ height: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-[#252d3d] rounded-lg p-6 space-y-6">
              {communityActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <activity.icon className="w-8 h-8 text-purple-400 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{activity.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
