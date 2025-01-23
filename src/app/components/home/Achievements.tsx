"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaCertificate, FaAward } from "react-icons/fa";

interface Achievement {
  title: string;
  description: string;
  icon: typeof FaTrophy;
}

const achievements: Achievement[] = [
  {
    title: "Morgan Stanley Code to Give Winner",
    description:
      "Secured 1st place in the ALPFA Hackathon, solving real-world problems.",
    icon: FaTrophy,
  },
  {
    title: "AZ-900 Certified",
    description: "Earned Microsoft Azure Fundamentals (AZ-900) certification.",
    icon: FaCertificate,
  },
  {
    title: "LFX Mentorship - The Linux Foundation",
    description:
      "Selected as a Software Engineer Mentee for RISC-V development.",
    icon: FaMedal,
  },
  {
    title: "CS Undergraduate Showcase Judge",
    description: "Invited to judge Georgia State University’s CS showcase.",
    icon: FaAward,
  },
  {
    title: "Smart India Hackathon Winner",
    description:
      "Won the Smart India Hackathon 2022, a national level hackathon.",
    icon: FaMedal,
  },
  {
    title: "Google Cloud Ready Facilitator",
    description: "Completed 30+ quests and 15+ skill badges in Google Cloud.",
    icon: FaMedal,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-bold mb-12 text-primary dark:text-white text-center">
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <achievement.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-white">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
