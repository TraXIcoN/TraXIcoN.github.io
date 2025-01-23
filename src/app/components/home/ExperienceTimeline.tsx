"use client";

import { motion } from "framer-motion";
import "../../styles/experience.css"; // We'll create this file for timeline-specific styles

interface ExperienceItem {
  number: number;
  company: string;
  position: string;
  isRight?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    number: 1,
    company: "The Linux Foundation - RISCV",
    position: "SOFTWARE ENGINEER MENTEE",
  },
  {
    number: 2,
    company: "Headstarter AI(Fellowship)",
    position: "SOFTWARE ENGINEER FELLOW",
    isRight: true,
  },
  {
    number: 3,
    company: "All in Dating Inc",
    position: "INTERN, FULL STACK DEVELOPER",
  },
  {
    number: 4,
    company: "LTIMindtree",
    position: "SENIOR DATA ENGINEER",
    isRight: true,
  },
  {
    number: 5,
    company: "AUTODL",
    position: "INTERN, BACKEND DEVELOPER",
  },
  {
    number: 6,
    company: "Reliance Industries Limited",
    position: "INTERN, CYBERSECURITY INTERN",
    isRight: true,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16 text-black">
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
              <div className="timeline-content">
                <div className="timeline-number text-4xl">{exp.number}</div>
                <h3 className="timeline-title text-5xl font-bold text-black">
                  {exp.company}
                </h3>
                <p className="timeline-position text-4xl text-gray-700">
                  {exp.position}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line" />
        </div>

        <motion.div className="text-center mt-16" whileHover={{ scale: 1.05 }}>
          <a
            href="https://drive.google.com/file/d/1nFDMRJQp1Ux92vljv0hvKTymaz_FX1wP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            View Resume!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
