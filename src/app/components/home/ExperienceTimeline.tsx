"use client";

import { motion, AnimatePresence } from "framer-motion";
import "../../styles/experience.css"; // We'll create this file for timeline-specific styles
import { useState } from "react";

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
    company: "The Linux Foundation - RISCV",
    position: "SOFTWARE ENGINEER MENTEE",
    duration: "Jan 2024 - Present",
    description: [
      "Led development of RISC-V instruction set simulator in Rust",
      "Implemented core RISC-V instructions and memory management",
      "Collaborated with mentors to optimize simulator performance",
    ],
    skills: [
      { name: "Rust", color: "orange" },
      { name: "RISC-V", color: "blue" },
      { name: "Assembly", color: "gray" },
      { name: "Git", color: "red" },
    ],
  },
  {
    number: 2,
    company: "Headstarter AI (Fellowship)",
    position: "SOFTWARE ENGINEER FELLOW",
    isRight: true,
    duration: "Sep 2023 - Dec 2023",
    description: [
      "Built AI-powered resume analysis tool using OpenAI API",
      "Developed full-stack application with Next.js and MongoDB",
      "Implemented real-time chat features and user authentication",
    ],
    skills: [
      { name: "Next.js", color: "black" },
      { name: "OpenAI", color: "green" },
      { name: "MongoDB", color: "green" },
      { name: "TypeScript", color: "blue" },
    ],
  },
  {
    number: 3,
    company: "All in Dating Inc",
    position: "INTERN, FULL STACK DEVELOPER",
    duration: "May 2024 - Aug 2024",
    description: [
      "Engineered a Flutter-based dating app with real-time chat",
      "Optimized SQL databases handling 10K+ user records",
      "Implemented AI-driven conversation starters using LLaMA-1",
      "Enhanced media storage and sharing with Azure solutions",
    ],
    skills: [
      { name: "Flutter", color: "blue" },
      { name: "Dart", color: "teal" },
      { name: "PostgreSQL", color: "orange" },
      { name: "Azure", color: "blue" },
    ],
  },
  {
    number: 4,
    company: "LTIMindtree",
    position: "SENIOR DATA ENGINEER",
    isRight: true,
    duration: "Jun 2022 - Jul 2023",
    description: [
      "Led the migration from Oracle SQL to Databricks, reducing infrastructure costs by approximately $200K annually",
      "Optimized ETL pipelines and data schemas, reducing processing time by 40% and query execution by 36%, while improving scalability for high-throughput workloads",
      "Formulated Git workflows processing 5TB+ of sales data across 100 regions, ensuring 92% pipeline reliability",
      "Integrated Snowflake with SAP for real-time ETL workflows, optimizing data ingestion and transformation, cutting processing costs by 20%, and accelerating query performance by 35%",
    ],
    skills: [
      { name: "Azure", color: "blue" },
      { name: "Databricks", color: "orange" },
      { name: "Apache Airflow", color: "green" },
      { name: "Power BI", color: "yellow" },
    ],
  },
  {
    number: 5,
    company: "CODES & COFFEE TECH",
    position: "MOBILE APP DEVELOPER",
    duration: "FEB 2021 - May 2022",
    description: [
      "Developed a Flutter-based inventory management app for a leading retail client, launching on Google Play Store and onboarding 100+ vendors within the first quarter",
      "Implemented asynchronous programming techniques to optimise API response times resulting in a 40% faster data retrieval",
      "Installed caching mechanisms using Redis for cost savings and used GraphQL to reduce API requests by almost 45%",
    ],
    skills: [
      { name: "Python", color: "blue" },
      { name: "Flask", color: "red" },
      { name: "PostgreSQL", color: "orange" },
      { name: "Elasticsearch", color: "green" },
    ],
  },
];

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16 text-primary dark:text-white">
          Experience In A Timeline
        </h2>

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
                className={`timeline-content bg-white dark:bg-gray-800 ${
                  expandedCard === exp.number ? "expanded" : ""
                }`}
                onClick={() =>
                  setExpandedCard(
                    expandedCard === exp.number ? null : exp.number
                  )
                }
                layout
              >
                <div className="timeline-number text-4xl">{exp.number}</div>
                <h3 className="text-primary dark:text-white text-5xl font-bold">
                  {exp.company}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-4xl">
                  {exp.position}
                </p>

                <AnimatePresence>
                  {expandedCard === exp.number && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-2xl text-white-600 mb-4">
                        {exp.duration}
                      </p>
                      <ul className="list-disc list-inside mb-4 text-xl text-white-700">
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
                            className={`px-3 py-1 rounded-full text-white text-sm font-medium`}
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
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
