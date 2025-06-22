"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Pinnochio's Nose",
      period: "Jan 2024 - March 2024",
      description: [
        "Built model to detect deepfakes, AI-generated images, and profane audio using ResNet50, CNNs, and speech recognition, achieving 98%+ accuracy in image detection.",
        "Developed an interactive UI for real-time inference and integrated cybercrime reporting for flagged content.",
        "Applied data augmentation, model evaluation, and content filtering to support safer digital engagement through automated moderation.",
      ],
      technologies: [
        "Python",
        "ResNet50",
        "CNN",
        "HuggingFace",
        "GoogleSpeechRecognition",
      ],
      github: "https://github.com/Anushka-Sharma-sahariya/Pinocchio-s-Nose",
      color: "#FF5252",
    },
    {
      title: "Ecosync",
      period: "Sept 2024 - Dec 2024",
      description: [
        "Designed and developed a responsive energy management dashboard enabling solar optimization, energy storage insights, and real-time sustainability tracking.",
        "Implemented clean UI components for community power sharing and user-driven energy analytics using modern frontend tools.",
        "Key features: real-time tariff monitoring, smart scheduling, energy analytics, and solar energy management.Leveraged machine learning (Python, TensorFlow)",
      ],
      technologies: ["Python", "TensorFlow", "StreamLit"],
      github: "https://github.com/Anushka-Sharma-sahariya/Luminous",
      color: "#3B82F6",
    },
  
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            MY <span className="text-[#FF5252]">PROJECTS</span>
          </h2>
          <div className="h-2 w-20 bg-[#FF5252] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
              className="relative bg-transparent rounded-lg border-2 border-black dark:border-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
              style={{
                borderColor: hoveredProject === index ? project.color : "currentColor"
              }}
            >
              <div
                className="h-2"
                style={{ backgroundColor: project.color }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.period}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-[#2b2b2b] rounded-full hover:bg-gray-200 dark:hover:bg-[#1a1a1a] transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {project.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className="inline-block h-2 w-2 rounded-full mt-2 mr-2"
                          style={{ backgroundColor: project.color }}
                        ></span>
                        <span className="text-sm">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-gray-100 dark:bg-[#121212] text-gray-800 dark:text-gray-200 font-medium rounded-md border border-gray-300 dark:border-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
