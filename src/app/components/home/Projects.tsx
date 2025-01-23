"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, CardFooter } from "../shared/Card";
import { Button } from "../shared/Button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
  title: string;
  tech: string[];
  description: string;
  date: string;
  github?: string;
  demo?: string;
}

const projects: ProjectProps[] = [
  {
    title: "AI-Enhanced Game Development with Unity",
    tech: [
      "Unity",
      "C#",
      "AI Language Models",
      "Microsoft Autogen",
      "NPC Systems",
      "Game Development",
    ],
    description:
      "Integrated AI language models in Unity for real-time NPC dialogue based on player inputs and game events. Leveraged Microsoft Autogen to implement human-in-the-loop and multi-agent models for NPC behavior. Incorporated environment-aware modular dialogue generation to enhance gameplay immersion and adaptability.",
    date: "December 2024",
  },
  {
    title: "ALPFA Atlanta Job-Matching Platform",
    tech: ["Django", "React", "Tailwind CSS", "SpaCy", "GPT-4", "Langchain"],
    description:
      "Won 1st place at the Code-to-Give Hackathon by Morgan Stanley. Developed a job-matching platform leveraging SpaCy for profile parsing, boosting match accuracy by 20%. Created GPT-4/Langchain tool for sponsors to evaluate 100+ resumes in parallel, reducing review time by 30%. Enhanced user engagement by 25% with React frontend.",
    date: "September 2024",
    github: "https://github.com/TraXIcoN/ALPFAteam3",
  },
  {
    title: "Smart AI Accessibility for Google Meet",
    tech: [
      "JavaScript",
      "Chrome Extension",
      "MediaPipe",
      "Deep Learning",
      "HTTP Services",
      "Real-time Communication",
    ],
    description:
      "Secured 1st place among 30,000+ teams in Smart India Hackathon 2022. Led development of a JS-based Chrome extension enhancing accessibility for 1,000+ users with disabilities. Integrated AI with MediaPipe achieving 90%+ accuracy in real-time communication. Optimized server CPU usage by 40%.",
    date: "September 2022",
    github: "https://github.com/TraXIcoN/SIHCODEFINAL",
  },
  {
    title: "Bittorrent Client",
    tech: [
      "Python",
      "HTTP & UDP",
      "Bittorent specifications",
      "Upnp",
      "Cross-platform",
      "Git",
    ],
    description:
      "Implemented a resume builder with OpenAI's GPT, converting informal inputs into formal job descriptions...",
    date: "November 2023",
    github: "https://github.com/yourusername/bittorrent-client",
  },
  // Add other projects...
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-bold mb-12 text-black">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} delay={index * 0.1}>
              <CardHeader>
                <h3 className="text-4xl font-bold text-black">
                  {project.title}
                </h3>
                <p className="text-xl text-gray-500">{project.date}</p>
              </CardHeader>

              <CardBody>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-2xl text-gray-700">{project.description}</p>
              </CardBody>

              <CardFooter className="flex gap-4">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </Button>
                )}
                {project.demo && (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open("https://github.com/TraXIcoN", "_blank")}
          >
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
