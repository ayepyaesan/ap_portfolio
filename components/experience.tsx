"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, GraduationCap } from "lucide-react"

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  const experiences = [
    {
      title: "",
      company: "Education & Certifications",
      period: "",
      description: [
        <div><span className="font-bold">Mandalay Technological University(MTU)</span><br />3rd year CEIT student (GPA – 4.8/5) Paused due to political issues</div>,
        <div><span className="font-bold">NCC Education Level 4 Diploma in Computing (with Business Management)</span><br />Achieved certification in January 2025</div>,
        <div><span className="font-bold">NCC Education Level 5 Diploma in Computing (with Business Management)</span><br />Just finished level 5 and planning to join final year at University of Lancashire from UK</div>,
        <div><span className="font-bold">Certificate in UI/UX principles for Beginners</span><br />From Strategy First International College</div>,
        <div><span className="font-bold">SheCodes – online coding workshops for women</span><br />Currently completed 3 workshops about web development</div>,
      ],
    },
    {
      title: "",
      company: "Language",
      period: "",
      description: [
        "Japanese N2 level (N2 Passed)",
        "English B1 level ",
      ],
    },
    {
      title: "",
      company: "Achievements",
      period: "",
      description: [
        "Strategy First x MYANWEN Business Plan Competition 2025 – First Prize & Innovative award winner (Team HERgy)",
        "Strategy First x MYANWEN AI Hackathon 2025 – Third Prize winner (Team HERgy)",
      ],
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="milestones" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Milestones</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">My professional journey and career highlights</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex overflow-x-auto mb-8 pb-2 scrollbar-hide">
            <div className="flex space-x-2">
              {experiences.map((exp, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeTab === index
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {exp.company}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  {experiences[activeTab].company === "Education & Certifications" ? <GraduationCap className="h-6 w-6" /> : <Briefcase className="h-6 w-6" />}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experiences[activeTab].title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{experiences[activeTab].company}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{experiences[activeTab].period}</span>
                  </div>
                </div>

                <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="space-y-3 mt-4">
                  {experiences[activeTab].description.map((item, idx) => (
                    <motion.li key={idx} variants={itemVariants} className="flex items-start">
                      <span className="inline-block h-1.5 w-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
