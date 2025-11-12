
//   { id: 1, name: "Commander Vega", role: "Lead Designer", image: "/_ (19).jpeg" },
"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const crew = [
  { id: 1, name: "Commander Vega", role: "Lead Designer", image: "/_ (19).jpeg" },
  { id: 2, name: "Lt. Orion", role: "Motion Specialist", image: "/_ (19).jpeg" },
  { id: 3, name: "Dr. Nova", role: "Visual Storyteller", image: "/_ (19).jpeg" },
  { id: 4, name: "Echo-9", role: "AI Strategist", image: "/_ (19).jpeg" },
  { id: 5, name: "Kairo", role: "Frontend Architect", image: "/_ (19).jpeg" },
  { id: 6, name: "Zyn", role: "Backend Engineer", image: "/_ (19).jpeg" },
  { id: 7, name: "Nyra", role: "3D Artist", image: "/_ (19).jpeg" },
  { id: 8, name: "Sol", role: "Creative Director", image: "/_ (19).jpeg" },
]

export default function CrewSection() {
  const [selected, setSelected] = useState<any>(null)

  return (
    <section className="relative w-full py-24 bg-black text-white font-spaceGrotesk overflow-hidden">
      <h2 className="text-5xl font-orbitron text-center mb-12 tracking-wider text-red-400">THE CREW</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-8">
        {crew.map((member, idx) => (
          <motion.div
            key={member.id}
            onClick={() => setSelected(member)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative cursor-pointer overflow-hidden rounded-xl group"
          >
            <div className="absolute inset-0 border border-red-500/40 rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.25)] animate-pulse pointer-events-none" />
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className="object-cover w-full h-80 rounded-2xl group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 z-12">
              <h3 className="text-xl font-orbitron text-red-400">{member.name}</h3>
              <p className="text-gray-300 text-sm">{member.role}</p>
            </div>

            {/* overlay */}
            <div 
              className="absolute w-full h-full bg-black/20 z-10 top-0"
            />

            {/* Neon corner brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c1440e]/70 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c1440e]/70 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c1440e]/70 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c1440e]/70 rounded-br-lg"></div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex justify-center items-center p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="relative max-w-3xl w-full bg-gradient-to-b from-black/80 to-[#451804]/20 border border-[#c1440e]/30 rounded-2xl p-12 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-[0_0_60px_rgba(255,0,0,0.1)] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Holographic grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 animate-pulse" />

              {/* Neon corner brackets */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#c1440e]/70 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#c1440e]/70 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#c1440e]/70 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#c1440e]/70 rounded-br-lg"></div>

              {/* Exit button */}  
              <motion.div
                className="absolute inset-0 border border-red-500/30 rounded-3xl pointer-events-none"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 text-red-400 hover:text-white transition"
              >
                <X size={28} />
              </button>

              {/* Left: Image & Info */}
              <div
                className="flex flex-col items-center relative"
              >
                <motion.div
                  className="relative rounded-lg border border-red-500/50 shadow-[0_0_50px_rgba(255,0,0,0.4)] overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255,0,0,0.1)",
                      "0 0 40px rgba(255,0,0,0.2)",
                      "0 0 20px rgba(255,0,0,0.1)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    width={300}
                    height={300}
                    className="object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                </motion.div>

                <div className="mt-6 space-y-1 w-full">
                  <h3 className="text-xl font-orbitron text-red-400 tracking-wider">{selected.name}</h3>
                  <p className="text-gray-400 text-sm uppercase">{selected.role}</p>
                </div>

                <div className="w-full gap-y-3 grid mt-6 text-sm text-gray-300 uppercase">
                  <p className="grid grid-cols-3 relative"><span className="absolute h-[1px] w-full bg-gray-500 -top-2 opacity-30"></span><span className="text-red-400">DOB</span> <span className="col-span-2">12 Aug 2091</span></p>
                  <p className="grid grid-cols-3 relative"><span className="absolute h-[1px] w-full bg-gray-500 -top-2 opacity-30"></span><span className="text-red-400">Hometown</span> <span className="col-span-2">Neo-Tokyo</span> </p>
                  <p className="grid grid-cols-3 relative"><span className="absolute h-[1px] w-full bg-gray-500 -top-2 opacity-30"></span><span className="text-red-400">Status</span> <span className="col-span-2">Active</span> </p>
                  <p className="grid grid-cols-3 relative"><span className="absolute h-[1px] w-full bg-gray-500 -top-2 opacity-30"></span><span className="text-red-400">Position</span> <span className="col-span-2">{selected.role}</span> </p>
                  <p className="grid grid-cols-3 relative"><span className="absolute h-[1px] w-full bg-gray-500 -top-2 opacity-30"></span><span className="text-red-400">Email</span> <span className="col-span-2 lowercase">{selected.name.toLowerCase().replace(/\s/g, ".")}@mars.studio</span> </p>
                  <p className="grid grid-cols-3 relative"><span className="absolute h-[1px] w-full bg-gray-500 -top-2 opacity-30"></span><span className="absolute h-[1px] w-full bg-gray-500 -bottom-2 opacity-30"></span><span className="text-red-400">Comm</span> <span className="col-span-2">+00 943-883-2211</span> </p>
                </div>
              </div>

              {/* Right: Skills & Stats */}
              <div className="relative before:absolute before:content-[''] before:h-full before:w-[1px] before:bg-gray-500 before:opacity-30 before:left-0 before:top-0 pl-6">
                <div className="absolute inset-0 pointer-events-none" />
                <h4 className="text-xl font-orbitron text-red-400 mb-3">Skill Matrix</h4>
                {[
                  { name: "React", value: 90 },
                  { name: "Next.js", value: 85 },
                  { name: "Framer Motion", value: 80 },
                  { name: "Three.js", value: 75 },
                  { name: "Tailwind", value: 85 },
                  { name: "Node.js", value: 60 },
                  { name: "Express.js", value: 70 },
                ].map((skill, i) => (
                  <div
                    className="mb-4"
                  >
                    <p className="text-sm text-gray-300 mb-1">{skill.name}</p>
                    <div className="w-full bg-gray-200/30 relative border-l-4 border-r-4 h-4 overflow-hidden flex flex-col justify-center">
                      <div className="w-full h-1 bg-black/80">
                        <motion.div 
                          key={i}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.value}%` }}
                          transition={{ duration: 1.5, delay: i * 0.2 }}
                          className="h-1 bg-red-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <h4 className="text-xl font-orbitron text-red-400 mt-8 mb-2">Metrics</h4>
                <div className="gap-y-3 grid text-sm text-gray-300 uppercase">
                  <p className="grid grid-cols-3 relative"><span className="absolute h-[1px] w-full bg-gray-500 -top-2 opacity-30"></span><span className="col-span-2">Missions Completed</span> <span className="">182</span> </p>
                  <p className="grid grid-cols-3 relative"><span className="absolute h-[1px] w-full bg-gray-500 -top-2 opacity-30"></span><span className="col-span-2">Efficiency Rating</span> <span className="">98%</span> </p>
                  <p className="grid grid-cols-3 relative"><span className="absolute h-[1px] w-full bg-gray-500 -top-2 opacity-30"></span><span className="col-span-2">Precision Index</span> <span className="">93%</span> </p>
                  <p className="grid grid-cols-3 relative"><span className="absolute h-[1px] w-full bg-gray-500 -top-2 opacity-30"></span><span className="absolute h-[1px] w-full bg-gray-500 -bottom-2 opacity-30"></span><span className="col-span-2">Sector Reach</span> <span className="">12 Systems</span> </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}