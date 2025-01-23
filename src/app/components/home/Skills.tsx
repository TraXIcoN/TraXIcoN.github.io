"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaReact,
  FaNode,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";

interface SkillCategory {
  name: string;
  icon: IconType;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: FaReact,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "HTML/CSS",
    ],
  },
  {
    name: "Backend Development",
    icon: FaNode,
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "RESTful APIs",
      "GraphQL",
    ],
  },
  {
    name: "Database & Cloud",
    icon: FaAws,
    skills: ["MongoDB", "PostgreSQL", "AWS", "Firebase", "Redis", "Docker"],
  },
  {
    name: "Tools & Others",
    icon: FaGitAlt,
    skills: ["Git", "CI/CD", "Jest", "Cypress", "Agile", "Linux"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-bold mb-12 text-primary dark:text-white text-center">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <category.icon className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                <h3 className="text-3xl font-bold text-primary dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-2xl">
            Always learning and exploring new technologies to stay at the
            forefront of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
