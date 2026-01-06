"use client"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-gray-400 border-t border-red-500/20 py-12 font-spaceGrotesk overflow-hidden">
      {/* subtle glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08)_0%,transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-xl text-white mb-2 tracking-widest">
            MARS<span className="text-red-500">STUDIO</span>
          </h2>
          <p className="text-sm text-gray-400">
            Building futuristic digital worlds. Crafted with precision, powered by imagination.
          </p>
        </motion.div>

        {/* middle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-white font-orbitron text-sm mb-2 tracking-widest">NAVIGATION</h3>
          {["Home", "Services", "Crew", "Contact"].map((item) => (
            <a key={item} href={`/#${item.toLowerCase()}`} className="hover:text-red-400 text-sm">
              {item}
            </a>
          ))}
        </motion.div>

        {/* right */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm"
        >
          <h3 className="text-white font-orbitron text-sm mb-2 tracking-widest">CONTACT</h3>
          <p>marsstudio@neuma.dev</p>
          <p>+01 404 777 1985</p>
          <p>Orbit Complex, Mars Base Alpha</p>
        </motion.div>
      </div>

      <div className="relative mt-10 text-center text-xs text-gray-600 tracking-widest">
        © {new Date().getFullYear()} MARS STUDIO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}