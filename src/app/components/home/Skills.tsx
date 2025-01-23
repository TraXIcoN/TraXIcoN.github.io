"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaNpm,
  FaPython,
  FaHtml5,
  FaJava,
  FaTerminal,
  FaAngular,
  FaGitAlt,
  FaDocker,
  FaVrCardboard,
  FaCloud,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiPhp,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiFlask,
  SiJira,
} from "react-icons/si";

const skillCategories = {
  languages: [
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaNpm, name: "npm" },
    { icon: FaPython, name: "Python" },
    { icon: SiCplusplus, name: "C++" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiPhp, name: "PHP" },
    { icon: FaJava, name: "Java" },
    { icon: FaTerminal, name: "Shell" },
  ],
  frameworks: [
    { icon: SiDjango, name: "Django" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: FaGitAlt, name: "Git" },
    { icon: SiPandas, name: "Pandas" },
    { icon: SiNumpy, name: "NumPy" },
    { icon: SiFlask, name: "Flask" },
    { icon: FaAngular, name: "Angular" },
  ],
  tools: [
    { icon: SiJira, name: "Jira" },
    { icon: FaDocker, name: "Docker" },
    { icon: FaVrCardboard, name: "AR/VR" },
    { icon: FaCloud, name: "AWS/AZURE" },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {Object.entries(skillCategories).map(
          ([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="mb-12"
            >
              <h3 className="text-4xl font-bold mb-6 capitalize text-black">
                {category.replace("_", " ")}
              </h3>
              <div className="flex flex-wrap gap-8">
                {skills.map(({ icon: Icon, name }, index) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <Icon className="w-12 h-12 text-gray-700" />
                    <span className="mt-2 text-xl text-gray-600">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        )}

        <div className="mt-8">
          <h4 className="text-3xl font-bold mb-4 text-black">Others:</h4>
          <p className="text-2xl text-gray-700">Agile, LLMs, CNNs</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
