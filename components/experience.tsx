"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(0)

  const experiences = [
    {
      title: "SDE apprentice",
      company: "Infineon",
      period: "July 2025 - May 2026",
      location: "Onsite",
      responsibilities: [
        "Starting soon — bags almost packed for Bangalore and excited to contribute to tech-driven product development and strategic problem solving!"
      ],
      technologies: ["to be updated"],
    },
    {
      title: "Product Management Intern",
      company: "Skillarena",
      period: "June 2024 - September 2024",
      location: "On-Site",
      responsibilities: [
        "Conducting in-depth user research to identify needs and pain points for the target group.",
        "Analyzed user feedback and competitor data to define product requirements and prioritize features.",
        "Developed detailed Product Requirement Documents (PRDs), outlining feature specifications, user flows, and acceptance criteria to ensure alignment with business goals.",
        "Conducted A/B tests to evaluate feature impact and iterated based on results.",
      ],
      technologies: ["Notion", "Figma", "Excel", "Jira"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-[#121212] z-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            WORK <span className="text-[#FF5252]">EXPERIENCE</span>
          </h2>
          <div className="h-2 w-20 bg-[#FF5252] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`w-full text-left p-4 border-2 border-black dark:border-white rounded-lg transition-all ${
                    activeExperience === index
                      ? "bg-[#FF5252] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-[#1a1a1a]"
                    }`}
                >
                  <h3 className="font-bold text-lg">{exp.company}</h3>
                  <p className="text-sm">{exp.title}</p>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeExperience}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 bg-transparent dark:bg-transparent p-6 rounded-lg border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] "
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold">{experiences[activeExperience].title}</h3>
              <p className="text-[#FF5252] font-bold">{experiences[activeExperience].company}</p>
              <div className="flex flex-wrap justify-between mt-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">{experiences[activeExperience].period}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{experiences[activeExperience].location}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold mb-2 text-lg">Responsibilities:</h4>
              <ul className="space-y-2">
                {experiences[activeExperience].responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-[#FF5252] rounded-full mt-2 mr-2"></span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-lg">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {experiences[activeExperience].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-[#121212] text-gray-800 dark:text-gray-200 font-medium rounded-md border-2 border-black dark:border-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

