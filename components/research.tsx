"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, FileText } from "lucide-react"

export default function Research() {
  const [expandedResearch, setExpandedResearch] = useState<number | null>(null)

  const researchItems = [
    {
      title: "Pinocchio’s Nose: A Deep Learning Framework for Detecting Visual and Audio Manipulation",
      period: "Feb 2025 - Current",
      status: "In Process",
      type: "Research",
      description: [
        "A dual-modality deep learning system designed to detect manipulated content in digital media. The framework integrates a ResNet50-based model for deepfake image detection and a CNN for AI-generated visuals, alongside an automated audio profanity filter using speech-to-text and natural language processing. Aimed at combating misinformation and promoting safer digital interactions, the system is built with scalability, user accessibility, and ethical AI deployment in mind.",
      ],
      color: "#FF5252",
    },
  ]

  return (
    <section id="research" className="py-20 bg-gray-100 dark:bg-[#121212]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            RESEARCH & <span className="text-[#FF5252]">PUBLICATIONS</span>
          </h2>
          <div className="h-2 w-20 bg-[#FF5252] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {researchItems.map((item, index) => (
            <motion.div
              key={index}
              layoutId={`research-${index}`}
              onClick={() => setExpandedResearch(expandedResearch === index ? null : index)}
              className="bg-transparent rounded-lg border-2 border-black dark:border-white overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] cursor-pointer hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <div className="h-2" style={{ backgroundColor: item.color }}></div>
              <div className="p-6 clickable">
                <div className="flex items-start justify-between clickable">
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                      <span className="inline-block h-1 w-1 rounded-full bg-gray-500"></span>
                      <span
                        className="px-2 py-0.5 text-xs rounded-full"
                        style={{
                          backgroundColor: `${item.color}20`,
                          color: item.color,
                        }}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-2 rounded-full" style={{ backgroundColor: `${item.color}20` }}>
                    {item.type === "Research" ? (
                      <BookOpen className="h-5 w-5" style={{ color: item.color }} />
                    ) : (
                      <FileText className="h-5 w-5" style={{ color: item.color }} />
                    )}
                  </div>
                </div>

                {expandedResearch === index && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
                    <ul className="space-y-2">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start">
                          <span
                            className="inline-block h-2 w-2 rounded-full mt-2 mr-2"
                            style={{ backgroundColor: item.color }}
                          ></span>
                          <span className="text-sm">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

