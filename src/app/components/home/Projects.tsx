"use client";

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
  image?: string;
  video?: string;
  report?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Masters Project: Quest Forge - Context Aware NPCs",
    tech: [
      "Three.js",
      "Python",
      "Microsoft Autogen",
      "OpenAI",
      "Redis",
      "MongoDB",
      "RAG",
      "Agentic AI",
      "Node.js",
      "Websockets",
    ],
    description:
      "Built a context-aware multiplayer game engine with Microsoft AutoGen-powered NPCs, delta-compressed networking (83% bandwidth reduction), and real-time 60FPS Three.js rendering for desktop, mobile, and VR—supporting 30-player parkour mode with precise physics.",
    date: "May 2025",
    report:
      "https://drive.google.com/file/d/1eIsGx68jylgRW_lLvm-xNQ1iRKNC0giD/view?usp=sharing",
    image: "quest_forge.png",
  },
  {
    title: "BlazeGuard - AI First Responder",
    tech: [
      "Next.js",
      "Mapbox",
      "Tailwind CSS",
      "Supabase",
      "LiveKit",
      "Python",
      "Gemini-2.0",
      "Google AI",
    ],
    description:
      "Developed BlazeGuard to assist first responders with real-time, voice-driven AI responses during disaster surges. Integrated Gemini-2.0-Flash-Exp and Google text-embedding-004 for medical data retrieval. Built with Next.js, Mapbox & Tailwind, supporting high-volume emergency calls.",
    date: "January 2025",
    demo: "https://devpost.com/software/blazeguard",
    image: "blazeguard.png",
  },
  {
    title: "TheFOMOFund.tech - Your Risk Analyst",
    tech: [
      "Next.js",
      "FastAPI",
      "AWS",
      "GPT",
      "DynamoDB",
      "Lambda",
      "EventBridge",
      "Vercel",
    ],
    description:
      "Developed an AI-driven financial risk platform with real-time forecasting on AWS. Reduced AI costs by 98% using fine-tuned GPT. Built interactive risk dashboard with Next.js & FastAPI, achieving 1,200+ unique visitors in first month.",
    date: "December 2024",
    demo: "https://thefomofund.tech",
    image: "fomofundtech.png",
  },
  {
    title: "GrooveChain: AI-Powered Music Generator",
    tech: [
      "Next.js",
      "TypeScript",
      "Solidity",
      "Ethereum",
      "MetaMask",
      "SUNO AI",
      "Meyda",
      "Pinata",
    ],
    description:
      "Created a Next.js application supporting 500+ audio uploads with real-time AI feedback. Integrated Meyda for audio analysis and SUNO AI for lyric generation. Implemented NFT-based music publishing with Solidity & MetaMask, enabling 100+ concurrent artists.",
    date: "February 2025",
    github: "https://github.com/TraXIcoN/AiRockverse",
    image: "groovechain.png",
  },
  {
    title: "ALPFA Atlanta Job-Matching Platform",
    tech: ["Django", "React", "SpaCy", "GPT-4", "Langchain", "Morgan Stanley"],
    description:
      "Won 1st place at Code-to-Give Hackathon by Morgan Stanley. Developed job-matching platform with SpaCy for profile parsing, boosting match accuracy by 20%. Created GPT-4/Langchain tool for parallel resume evaluation.",
    date: "September 2024",
    github: "https://github.com/TraXIcoN/ALPFAteam3",
    image: "alpfa.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl font-bold mb-12 text-white">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              delay={index * 0.1}
              className="bg-[#ffffff] dark:bg-[#252d3d] overflow-hidden"
            >
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              {project.video && (
                <div className="relative h-48 w-full overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={project.video}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
              )}
              <CardHeader className="bg-[#ffffff] dark:bg-[#252d3d]">
                <h3 className="text-3xl font-bold text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-lg text-purple-300">{project.date}</p>
              </CardHeader>

              <CardBody className="bg-[#ffffff] dark:bg-[#252d3d]">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-900/30
                               text-purple-300 
                               border border-purple-500/50
                               rounded-full text-sm font-medium
                               hover:bg-purple-800/40 
                               transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-black-300 dark:text-white">
                  {project.description}
                </p>
              </CardBody>

              <CardFooter className="bg-[#ffffff] dark:bg-[#252d3d] flex gap-4">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, "_blank")}
                    className="text-purple-300 
                             border-purple-500
                             hover:bg-purple-900/30
                             transition-colors duration-200"
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
                    className="bg-purple-600 hover:bg-purple-700 text-white
                             transition-colors duration-200"
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
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3
                     transition-colors duration-200"
          >
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
