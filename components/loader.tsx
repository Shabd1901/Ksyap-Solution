"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background mesh - extremely subtle on light background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1
            className="text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-800 bg-clip-text text-transparent" /* Darker gradients for contrast */
            style={{ textShadow: "none" }}
          >
            Ksyap <span className="text-cyan-700">Solution</span>
          </h1>
          <p className="text-gray-700 text-2xl font-light">Transforming Business Through Technology</p>
        </motion.div>

        {/* Futuristic loading ring - no heavy shadow */}
        <motion.div
          className="relative mx-auto w-24 h-24 mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-600 to-purple-800 bg-clip-border" />
          <div className="absolute inset-2 rounded-full bg-white" />
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-600 rounded-full transform -translate-x-1/2 shadow-none" />
        </motion.div>

        {/* Progress bar - no heavy shadow */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-800 rounded-full max-w-xs mx-auto shadow-none"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-gray-600 text-lg"
        >
          Initializing professional experience...
        </motion.p>
      </div>
    </div>
  )
}
