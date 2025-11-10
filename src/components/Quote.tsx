"use client"
import { motion } from "framer-motion"
import { Quote as QuoteIcon } from "lucide-react"

export default function Quote() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white font-spaceGrotesk">
      {/* Background with parallax and gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), url('/file_0000000085cc7246a65ad7e9f4469ca7.png')",
        }}
      />

      {/* Floating particles overlay */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            animate={{
              y: ["0%", "-100%"],
              opacity: [0.3, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center h-full w-full mx-auto px-8 md:px-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <QuoteIcon className="mx-auto mb-8 text-blue-400 w-10 h-10" />
          <h1 className="text-4xl md:text-5xl italic leading-tight text-white/90">
            Great design is the silence between notes — where clarity meets emotion, and simplicity becomes power.
          </h1>
          <motion.div
            className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2 }}
          />
        </motion.div>
      </div>
    </section>
  )
}