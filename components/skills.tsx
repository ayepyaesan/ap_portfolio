"use client"

import { motion } from "framer-motion"
import { Database, Server, Code, Layers, PenTool, GitBranch } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="h-6 w-6" />,
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS",  "Tailwind"],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      items: ["PHP","NodeJS", "ExpressJS"],
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6" />,
      items: ["MongoDB", "MySQL", "Supabase"],
    },
    {
      category: "DevOps",
      icon: <GitBranch className="h-6 w-6" />,
      items: ["Git", "GitHub", "Github Actions","Lovable", "Vercel", "Netlify", "Vite"],
    },
    {
      category: "Design",
      icon: <PenTool className="h-6 w-6" />,
      items: ["Figma", "Canva","Responsive Design", "Wireframing"],
    },
    {
      category: "Knowledge",
      icon: <Layers className="h-6 w-6" />,
      items: ["OOP", "Responsive Design", "UI/UX Principles", "Testing", "Agile/Scrum FUndamentals", "Project Management",],
    },
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
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 mr-3">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
