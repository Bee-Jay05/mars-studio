"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Capabilities() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="relative h-screen py-32 w-full overflow-hidden bg-black text-white font-spaceGrotesk">
      {/* Background grid + glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100%_5vh]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#C1440E]/30 rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-orbitron text-center text-[#FF1E1E] mb-10 tracking-widest"
      >
        CONTACT MARS STUDIO
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-400 mb-20 max-w-2xl mx-auto"
      >
        Initiate transmission. Reach out for collaborations, cosmic design requests, or interstellar partnerships.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-3xl mx-auto p-12"
      >
        {/* Neon corners */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#C1440E]/60 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#C1440E]/60 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#C1440E]/60 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#C1440E]/60 rounded-br-lg" />

                {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  className="peer w-full bg-transparent border-b-2 border-gray-600 focus:border-[#C1440E] outline-none py-2 text-white"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#FF1E1E]"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  className="peer w-full bg-transparent border-b-2 border-gray-600 focus:border-[#C1440E] outline-none py-2 text-white"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#FF1E1E]"
                >
                  Email
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                required
                rows={4}
                className="peer w-full bg-transparent border-b-2 border-gray-600 focus:border-[#C1440E] outline-none py-2 text-white resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#FF1E1E]"
              >
                Message
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,0,0,0.5)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#FF1E1E]/80 py-3 text-lg font-orbitron tracking-widest text-white rounded-md border border-[#C1440E] hover:bg-[#FF1E1E]/90 transition-all"
            >
              TRANSMIT MESSAGE
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center text-gray-300"
          >
            <h3 className="text-2xl font-orbitron text-[#FF1E1E] mb-4">Transmission Sent</h3>
            <p>Our crew will decode your signal and respond shortly.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Subtle bottom glow */}
      <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-[#C1440E]/20 to-transparent" />
    </section>
  )
}