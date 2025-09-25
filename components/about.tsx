"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-96 md:w-96 md:h-[600px] overflow-hidden border-2 border-purple-500 dark:border-purple-800 shadow-xl">
                <Image src="/aye_pyae.jpg" alt="Aye Pyae Wai Khin Soe" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I’m a front-end developer with a strong passion for crafting intuitive and visually appealing digital experiences. 
                With a solid foundation in UI/UX principles, I strive to design responsive, user-friendly interfaces that not only look great but also make people’s lives easier. 
                My creative mindset allows me to translate ideas into seamless web experiences, ensuring every project delivers both form and function. 
                In addition to my front-end expertise, I have working knowledge of back-end technologies and database management, giving me a well-rounded perspective on building complete, efficient web solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                My journey in web development began with a curiosity about how websites work, which evolved into a deep
                passion for creating digital experiences that solve real-world problems.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Name:</h4>
                  <p className="text-gray-600 dark:text-gray-300">Aye Pyae Wai Khin Soe</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">From:</h4>
                  <p className="text-gray-600 dark:text-gray-300">Mandalay, Myanmar</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email:</h4>
                  <p className="text-gray-600 dark:text-gray-300">ayepyae2000.mdy@gmail.com</p>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1Un5EqRivZeehaIRfjlA1wk3xahJq_xtb/view?usp=sharing",
                    "_blank"
                  );
                }}
                >
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
