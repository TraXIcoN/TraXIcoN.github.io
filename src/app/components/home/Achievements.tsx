"use client";

import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

interface Achievement {
  text: string;
}

const achievements: Achievement[] = [
  {
    text: "Winner of SIH 2022, a national level hackathon conducted for all students in India.",
  },
  {
    text: "Achieved AZURE Cloud Practitioner AZ-900 certification, emphasizing cloud computing expertise.",
  },
  // Add more achievements as needed
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 lg:pl-64 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold mb-12 text-black">Achievements</h2>

        <div className="space-y-6 text-center">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start gap-4"
            >
              <FaCertificate className="flex-shrink-0 w-8 h-8 text-yellow-400 mt-1" />
              <p className="text-2xl text-gray-700">{achievement.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
