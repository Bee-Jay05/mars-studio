"use client"
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="relative w-full h-screen py-30 bg-black text-white font-spaceGrotesk">


      {/* faint grid lines */}
      <div className="absolute inset-0 flex justify-between opacity-10 pointer-events-none">
        <div className="w-px h-full bg-white/20" />
        <div className="w-px h-full bg-white/20" />
        <div className="w-px h-full bg-white/20" />
      </div>

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto z-10 relative"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6 font-orbitron tracking-widest">
          MARS STUDIO <span className="text-[#c1440e]">2055</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex justify-between max-w-lg my-10 mx-auto"
        >
          <div className="w-3 h-3 bg-[#c1440e] mt-3 rounded-full" />
          <div className="w-3 h-3 bg-[#c1440e] mt-3 rounded-full" />
          <div className="w-3 h-3 bg-[#c1440e] mt-3 rounded-full" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <p className="text-lg md:text-xl leading-relaxed mt-6">
          At Mars Studio, we design beyond boundaries. Our work fuses minimalism, motion, and imagination to craft interfaces that feel like technology from another world. Every pixel is placed with intent — built to move, to glow, and to guide users through seamless digital atmospheres.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-6">
          We believe design should feel alive. From cinematic visuals to interactive detail, our goal is to make every project a small step toward the future. Whether it’s a brand launch, portfolio, or experience, we create digital worlds that feel as timeless as the red planet itself.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}