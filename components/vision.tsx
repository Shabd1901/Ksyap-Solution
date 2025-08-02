"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb } from "lucide-react"

export default function Vision() {
  return (
    <section id="vision" className="py-20 px-4 relative">
      {/* Background mesh - extremely subtle on light background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-purple-700 bg-clip-text text-transparent">
              Our Vision & Mission
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glassmorphism-card-subtle p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-white/50 to-gray-50/50 backdrop-blur-sm" /* Adjusted for light theme */
          >
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200">
                <Lightbulb className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-3xl font-bold ml-4 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Vision
              </h3>
            </div>
            <p className="text-gray-700 text-xl leading-relaxed">
              To be a globally trusted leader in transformative information technology solutions.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glassmorphism-card-subtle p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-sm" /* Adjusted for light theme */
          >
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 border border-purple-200">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold ml-4 bg-gradient-to-r from-purple-700 to-cyan-600 bg-clip-text text-transparent">
                Mission
              </h3>
            </div>
            <p className="text-gray-700 text-xl leading-relaxed">
              Building the best system together to expand your business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
