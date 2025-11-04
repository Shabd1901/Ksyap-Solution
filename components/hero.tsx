"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToVision = () => {
    document.getElementById("vision")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint-200/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-slate-400 rounded-full"
            animate={{
              x: [0, 80, 0],
              y: [0, -80, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.15,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold mb-8"
        >
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Welcome to
          </span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent"
          >
            Ksyap Solution
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-2xl md:text-3xl text-slate-700 mb-12 leading-relaxed"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="font-light"
          >
            Providing Excellence to the System and Organization
          </motion.p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToVision}
          className="ripple-button bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-md shadow-blue-200 hover:shadow-blue-300 border border-blue-300"
        >
          Explore Our Vision
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer"
            onClick={scrollToVision}
          >
            <ChevronDown className="h-8 w-8 text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
