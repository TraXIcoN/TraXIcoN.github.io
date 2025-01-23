"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "../shared/SocialLinks";
import { CONTACT_EMAIL } from "../../lib/constants";
import StoryAnimation from "../layout/StoryAnimation";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-8 mt-32">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-8xl font-bold mb-8">
                <span className="text-primary dark:text-white">ADITYA</span>{" "}
                <span className="text-purple-600">MOHAN</span>
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600 dark:text-gray-300 mb-8 text-2xl">
                <span>ATLANTA, GA</span>
                <span>·</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
                <span>·</span>
                <span>(404) 784-8960</span>
                <span>·</span>
                <a
                  href="/resume.pdf"
                  download
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600"
                >
                  DOWNLOAD RESUME
                </a>
              </div>

              <motion.p
                className="text-3xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Driven by a passion for innovation and a keen interest in
                technology, I'm Aditya Mohan, a Computer Science graduate
                student at Georgia State University. With a strong foundation in
                full-stack software development and a track record of leading
                impactful projects, I'm eager to contribute my skills and
                expertise to a dynamic team.
              </motion.p>

              <SocialLinks />
            </motion.div>
          </div>

          <div className="md:w-1/2 flex items-center justify-center">
            <StoryAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
