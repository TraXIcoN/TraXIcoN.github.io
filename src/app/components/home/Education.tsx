"use client";

import { motion } from "framer-motion";

interface Education {
  school: string;
  degree: string;
  details: string[];
  gpa?: string;
  period: string;
}

const educationData: Education[] = [
  {
    school: "Georgia State University",
    degree: "Masters in Computer Science",
    details: [
      "Full Scholarship along with GTA",
      "Research voulunteer under Dr. Haoxin Wang",
    ],
    gpa: "3.8/4",
    period: "Expected Graduation May 2025",
  },
  {
    school: "Vivekanand Education Society's Institute of Technology",
    degree: "Bachelor of Engineering in Computer Science",
    details: [
      "Sr. Web Editor with IEEE VESIT",
      "IOT Facilitator - Google Developers Club - VESIT",
    ],
    gpa: "3.5/4",
    period: "August 2018 - June 2022",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-bold mb-12 text-primary dark:text-white text-center">
          Education
        </h2>

        <div className="space-y-12 text-left">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row justify-between bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all duration-200"
            >
              <div className="flex-grow">
                <h3 className="text-4xl font-bold mb-2 text-primary dark:text-white">
                  {edu.school}
                </h3>
                <div className="text-3xl text-gray-700 dark:text-gray-300 mb-3">
                  {edu.degree}
                </div>
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-2xl text-gray-600 dark:text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                {edu.gpa && (
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    GPA:{" "}
                    <span className="text-purple-600 dark:text-purple-400">
                      {edu.gpa}
                    </span>
                  </p>
                )}
              </div>
              <div className="text-purple-600 dark:text-purple-400 mt-4 md:mt-0 md:ml-8 whitespace-nowrap">
                {edu.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
