"use client"

import { motion } from "framer-motion"

export default function FinalNote() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.p
        className="text-lg md:text-xl text-gray-300 mb-6"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Thank you for sharing your <span className="text-pink-400">thoughts</span>, your <span className="text-purple-400">time</span>, and your <span className="text-indigo-400">emotions</span> with me.
      </motion.p>

      <motion.h1
        className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-lg mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        You'll always be one of the most beautiful and unforgettable chapters of my life.
      </motion.h1>

      <motion.p
        className="text-md md:text-lg text-gray-400 italic"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        My only regret is... <span className="text-pink-500">you were never meant to be mine.</span>
      </motion.p>
    </motion.div>
  )
}
