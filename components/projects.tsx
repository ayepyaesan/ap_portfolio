"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Floral E-commerce System",
      description:
        "An e-commerce platform for a flower shop, featuring user authentication, product management, and a seamless shopping experience.",
      image: "/romanceinblooms.png",
      tags: ["PHP", "Bootstrap", "MySQL","Fontawesome", "Parasedown"],
      liveUrl: "https://github.com/ayepyaesan/Floral-Ecommerce-Platform",
      githubUrl: "https://github.com/ayepyaesan/Floral-Ecommerce-Platform",
    },
    {
      title: "Culinary Platform",
      description:
        "A comprehensive culinary platform that allows users to explore recipes, sharing, and download resources.",
      image: "/culinary.png",
      tags: ["HTML", "CSS", "Bootstrap", "mySQL", "Javascript"],
      liveUrl: "https://score-board-one-alpha.vercel.app/login",
      githubUrl: "",
    },
    {
      title: "Smart Writing Platform",
      description:
        "A writing platform that helps users meet their deadlines through daily goals, financial commitment, and AI-powered monitoring features.",
      image: "/norush.png",
      tags: ["Vite", "Typescript", "React", "Supabase", "Tailwind CSS", "Shadcn-UI"],
      liveUrl: "https://norush-write-rewards.lovable.app/",
      githubUrl: "https://github.com/ayepyaesan/norush-write-rewards",
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
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Here are some of my recent projects</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * idx }}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button asChild size="sm" className="w-full">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
