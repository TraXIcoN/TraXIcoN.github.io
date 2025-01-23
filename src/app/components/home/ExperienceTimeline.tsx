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
      "Designed scalable data pipelines for retail analytics using Databricks",
      "Optimized SQL workflows, reducing data processing time by 40%",
      "Automated ETL workflows with Apache Airflow on Azure Cloud",
      "Developed Power BI dashboards for real-time sales insights",
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
    company: "AUTODL",
    position: "INTERN, BACKEND DEVELOPER",
    duration: "Dec 2021 - May 2022",
    description: [
      "Developed RESTful APIs for an ML-based document labeling platform",
      "Optimized API performance, reducing response times by 35%",
      "Implemented role-based access control (RBAC) for enhanced security",
      "Integrated Elasticsearch for fast and efficient document retrieval",
    ],
    skills: [
      { name: "Python", color: "blue" },
      { name: "Flask", color: "red" },
      { name: "PostgreSQL", color: "orange" },
      { name: "Elasticsearch", color: "green" },
    ],
  },
  {
    number: 6,
    company: "Reliance Industries Limited",
    position: "INTERN, CYBERSECURITY INTERN",
    isRight: true,
    duration: "May 2021 - Jul 2021",
    description: [
      "Conducted penetration testing to identify vulnerabilities in enterprise networks",
      "Developed automated scripts for security audits using Python",
      "Assisted in implementing SIEM solutions for threat monitoring",
      "Performed forensic analysis to detect potential security breaches",
    ],
    skills: [
      { name: "Cybersecurity", color: "black" },
      { name: "Penetration Testing", color: "red" },
      { name: "Python", color: "blue" },
      { name: "SIEM", color: "purple" },
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
                      <p className="text-2xl text-gray-600 mb-4">
                        {exp.duration}
                      </p>
                      <ul className="list-disc list-inside mb-4 text-xl text-gray-700">
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
