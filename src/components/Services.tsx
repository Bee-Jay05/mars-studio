"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Futuristic UI/UX",
    description: "Next-gen interface design with cinematic sci-fi aesthetics.",
    image: "/astronaut-mars-collage (1).jpg",
  },
  {
    id: 2,
    title: "Motion & Animation",
    description: "Dynamic animation systems that bring digital worlds to life.",
    image: "/astronaut-mars-collage (2).jpg",
  },
  {
    id: 3,
    title: "Visual Storytelling",
    description: "Immersive narratives and interfaces that feel alive.",
    image: "/astronaut-mars-collage (3).jpg",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full h-screen py-24 flex flex-col justify-center bg-black text-white font-spaceGrotesk overflow-hidden"
    >
      {/* Background holographic gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,transparent_70%, rgba(0,0,0,1) 100%)] pointer-events-none" />
      <div className="absolute inset-0 grid grid-cols-12 opacity-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border border-red-500/20" />
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-orbitron text-center mb-4 tracking-wider"
      >
        SERVICES
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl max-w-2xl mx-auto font-orbitron text-center mb-16 tracking-wider text-gray-400"
      >
        Exploring the edge of design and technology, we craft interfaces, animations, and visual experiences that feel alive and futuristic.
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.1)]"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700"
              />

              {/* Neon holographic frame with corner brackets */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Outer neon glow */}
                <div className="absolute inset-0 border border-red-500/50 rounded-2xl shadow-[0_0_40px_rgba(255,0,0,0.3)] animate-pulse" />

                {/* Inner animated grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_95%,rgba(255,0,0,0.08)_100%),linear-gradient(to_right,transparent_95%,rgba(255,0,0,0.08)_100%)] bg-[length:20px_20px] opacity-30 animate-[pulse_2s_ease-in-out_infinite] rounded-2xl" />

                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-red-500 rounded-tl-lg animate-pulse" />
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-red-500 rounded-tr-lg animate-pulse" />
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-red-500 rounded-bl-lg animate-pulse" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-red-500 rounded-br-lg animate-pulse" />
              </div>

              {/* Gradient overlay for cinematic depth */}
              <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/100 to-transparent opacity-70" />
            </div>

            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
              <h3 className="text-xl font-orbitron text-red-400 tracking-wide drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]">
                {service.title}
              </h3>
              <p className="text-gray-300 font-spaceGrotesk mt-2 text-sm">{service.description}</p>
            </div>

            {/* Subtle hover particle effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-red-500/40 rounded-full w-1 h-1"
                  animate={{
                    x: [0, Math.random() * 10 - 5, 0],
                    y: [0, Math.random() * 10 - 5, 0],
                    opacity: [0.2, 0.7, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}