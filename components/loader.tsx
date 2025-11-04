"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100 flex items-center justify-center z-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Ksyap <span className="text-cyan-600">Solution</span>
          </h1>
          <p className="text-slate-700 text-2xl font-light">Transforming Business Through Technology</p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-24 h-24 mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-border" />
          <div className="absolute inset-2 rounded-full bg-white" />
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-600 rounded-full transform -translate-x-1/2" />
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-full max-w-xs mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-slate-600 text-lg"
        >
          Initializing professional experience...
        </motion.p>
      </div>
    </div>
  )
}
