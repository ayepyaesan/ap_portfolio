"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/ayepyaesan", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/aye-pyae-wai-khin-soe972/", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/apyae_r?igsh=dzA5Z3VoaTFtZGQ1&utm_source=qr", label: "Instagram" },
    // { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
            >
              Aye Pyae Wai Khin Soe
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              Building modern web applications with the MERN stack. Let's create something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link href={link.href} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-500 text-sm">© {currentYear} Aye Pyae Wai Khin Soe. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
