"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const projects = [
  { id: 1, title: "Lunar Interface", subtitle: "UI Design // 2089", image: "/astronaut-mars-collage.jpg", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, title: "Ares Command", subtitle: "Dashboard // 2091", image: "/astronaut-mars-collage (1).jpg", info: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 3, title: "Nebula Motion", subtitle: "Animation // 2088", image: "/astronaut-mars-collage (2).jpg", info: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
  { id: 4, title: "Orbital Grid", subtitle: "Frontend Dev // 2090", image: "/astronaut-mars-collage (3).jpg", info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
  { id: 5, title: "Titan Beacon", subtitle: "UX + Visuals // 2092", image: "/creative-collage-mars-planet-with-astronaut.jpg", info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia." },
  { id: 6, title: "Red Horizon", subtitle: "Experimental // 2093", image: "/creative-collage-mars-planet-with-astronaut (1).jpg", info: "Mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur." },
];

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="relative min-h-screen bg-black text-white overflow-hidden px-8 py-24">
      {/* Background grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.05),transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border border-[#c1440e]/30" />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-orbitron mb-12 text-center tracking-wider"
        >
          PROJECTS
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
              className="relative group cursor-pointer overflow-hidden border border-[#c1440e]/30 rounded-xl shadow-[0_0_30px_rgba(255,0,0,0.05)]"
              onClick={() => setSelected(project.id)}
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 opacity-80 group-hover:opacity-40 transition-all duration-700"
              />

              {/* Animated grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_95%,rgba(255,0,0,0.1)_100%),linear-gradient(to_right,transparent_95%,rgba(255,0,0,0.1)_100%)] bg-[length:40px_40px] opacity-20 group-hover:opacity-30 animate-pulse"></div>

              {/* Glow ring border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-0 blur-2xl bg-[#c1440e]/10 rounded-xl animate-pulse" />
                <div className="absolute inset-0 border border-[#c1440e]/50 rounded-xl" />
              </div>

              {/* Corner markers */}
              <div className="absolute top-2 left-2 w-3 h-3 bg-[#c1440e]/80 rounded-sm group-hover:scale-125 transition-transform"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#c1440e]/80 rounded-sm group-hover:scale-125 transition-transform"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col p-6 justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-md">
                {/* Top row */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-orbitron text-white tracking-wide drop-shadow-[0_0_6px_rgba(255,0,0,0.5)]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#c1440e] font-spaceGrotesk">{project.subtitle}</p>
                  </div>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.1 }}
                    className="text-8xl font-orbitron text-[#c1440e]/50 select-none leading-none"
                  >
                    {project.id}
                  </motion.h1>
                </div>

                {/* Info text */}
                <p className="text-gray-300 text-sm font-spaceGrotesk leading-relaxed max-w-sm">
                  {project.info || "Experimental design interface exploring deep space aesthetics."}
                </p>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="self-start mt-4 px-5 py-2 border border-[#c1440e] text-[#c1440e] font-spaceGrotesk rounded-md hover:bg-[#c1440e]/10 transition-all tracking-wide"
                >
                  View Mission
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Futuristic Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[90%] max-w-5xl bg-gradient-to-b from-black/80 to-[#451804]/20 border border-[#c1440e]/30 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,0,0,0.1)]"
            >
              {/* Holographic grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 animate-pulse" />

              {/* Neon corner brackets */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#c1440e]/70 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#c1440e]/70 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#c1440e]/70 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#c1440e]/70 rounded-br-lg"></div>

              {/* Exit button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 text-[#c1440e] hover:text-white transition"
              >
                <X size={28} />
              </button>

              {/* Content layout */}
              <div className="relative z-10 grid md:grid-cols-2 gap-8 p-10 items-center">
                {/* Left: Image / holographic display */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative rounded-xl overflow-hidden border border-[#c1440e]/40"
                >
                  <Image
                    src={projects.find((p) => p.id === selected)?.image || ""}
                    alt="project visual"
                    width={600}
                    height={400}
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-sm text-[#c1440e] font-spaceGrotesk tracking-widest">
                    LIVE FEED // ACTIVE TRANSMISSION
                  </div>
                </motion.div>

                {/* Right: Text / transmission data */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-left space-y-5"
                >
                  <h3 className="text-4xl font-orbitron text-[#c1440e] tracking-wider drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
                    {projects.find((p) => p.id === selected)?.title}
                  </h3>
                  <p className="text-md text-gray-400 uppercase font-spaceGrotesk tracking-wide">
                    {projects.find((p) => p.id === selected)?.subtitle}
                  </p>

                  <div className="h-[1px] bg-[#c1440e]/30 w-1/2 my-4"></div>

                  <p className="text-gray-300 leading-relaxed font-spaceGrotesk">
                    Mission data recovered from Mars Studio archives. Visual experiment integrating next-gen interface design, cinematic transitions, and speculative UI motion studies.
                  </p>

                  {/* Animated futuristic data readout */}
                  <div className="grid grid-cols-2 gap-4 pt-6 text-sm font-spaceGrotesk text-gray-400">
                    <div className="border-l-2 border-[#c1440e]/40 pl-3">
                      <p>STATUS</p>
                      <p className="text-[#c1440e]">ONLINE</p>
                    </div>
                    <div className="border-l-2 border-[#c1440e]/40 pl-3">
                      <p>SECTOR</p>
                      <p className="text-[#c1440e]">ALPHA-03</p>
                    </div>
                    <div className="border-l-2 border-[#c1440e]/40 pl-3">
                      <p>LAST SIGNAL</p>
                      <p className="text-[#c1440e]">MJD 60315.2</p>
                    </div>
                    <div className="border-l-2 border-[#c1440e]/40 pl-3">
                      <p>VISUAL TYPE</p>
                      <p className="text-[#c1440e]">CINEMATIC</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="mt-8 px-6 py-3 border border-[#c1440e] text-[#c1440e] rounded-lg hover:bg-[#c1440e]/10 transition-all tracking-wide"
                  >
                    Launch Full Case Study
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}