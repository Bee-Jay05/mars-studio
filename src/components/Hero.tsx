"use client";
import { motion } from "framer-motion";
import { useState, useEffect, use } from "react";

export default function Hero() {
  const [ text, subText] = useState("");
  const fulltext = "MARS STUDIO";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fulltext.length) {
        subText((prev) => prev + fulltext.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white font-spaceGrotesk">

      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: "url('/file_00000000e65071f59dbc74cb2571d1e7.png')"}} />

      {/* Divider lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between">
        <div className="w-px h-full bg-white/10" />
        <div className="w-px h-full bg-white/10 animate-pulse" />
        <div className="w-px h-full bg-white/10 animate-pulse" />
        <div className="w-px h-full bg-white/10 animate-pulse" />
        <div className="w-px h-full bg-white/10" />
      </div>

      {/* Overlay image */}
      <div className="inset-0 absolute bg-gradient-to-b from-black/60-to-black/90" />

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full relative z-10 px-8 md:px-20 items-center">

        {/* left side - hero text */}
        <div className="space-y-6">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-md tracking-widest text-[#c1440e] font-orbitron uppercase"
            >
              {text}
              <span className="animate-blink">_</span>
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold text-white font-orbitron mt-3"
            >
              Designing Beyond Earth
            </motion.h1>
            <motion.p
              initial={{ opacity: 0}}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.8 }}
              className="max-w-md text-gray-300"
            >
              Crafting digital experiences for the next planet. Our mission: bold design for cosmic frontiers.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
              className="flex gap-4"
            >
              <motion.button 
                whileHover={{scale: 1.05, boxShadow: "0 0 15px #ffffff44"}}
                className="border border-white/30 px-6 py-2 rounded-lg text-sm tracking-wide hover:bg-white/10 transition">View Projects</motion.button>
              <motion.button 
                whileHover={{scale: 1.05, boxShadow: "0 0 15px #c1440e44"}}
                className="border border-[#c1440e] px-6 py-2 rounded-lg text-sm tracking-wide hover:bg-[#c1440e]/20 text-[#c1440e] transition">Transition Log</motion.button>
            </motion.div>
          </div>
        </div>

        {/* Right side: transmission feed */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.0, duration: 1.0, ease: "anticipate" }}
          className="hidden md:flex flex-col justify-center font-mono text-sm text-gray-400 space-y-2 border-l border-white/10 pl-10"
        >
          <p className="animate-flicker">[ Transmission Feed Active... ]</p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            className="space-y-1 opacity-80">
            <p>&gt; Olympus Mons Mining Co. — Requesting UI update...</p>
            <p>&gt; Phobos Labs — Prototype visuals approved.</p>
            <p>&gt; Earth Division — Awaiting new design packets.</p>
            <p>&gt; Ares-9 — Signal strength nominal.</p>
            <p>&gt; Neuma Collaboration — Mission archived.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}