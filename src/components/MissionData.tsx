'use client'
import { motion } from 'framer-motion'

const missionStats = [
  { label: 'ORBIT REACH', value: 94, type: 'circular' },
  { label: 'ENERGY OUTPUT', value: 87, type: 'bar' },
  { label: 'SIGNAL STRENGTH', value: 72, type: 'ring' },
  { label: 'SYSTEMS ONLINE', value: 5, type: 'indicator' },
]

const liveFeed = [
  '> Uploading navigation data to mainframe...',
  '> Syncing with satellite array...',
  '> Mission trajectory: stable.',
  '> Updating coordinates...',
  '> Orbit recalibration complete...',
]


export default function MissionDataSection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col md:flex-row overflow-hidden">
      {/* LEFT: cinematic console */}
      <div className="relative flex-1 flex flex-col justify-center p-20 border-r border-white/10 overflow-hidden">
        {/* moving vertical scan lines */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.05)_100%)] bg-[length:3px_100%]"
          animate={{ backgroundPositionX: ['0%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        <motion.h2
          className="font-orbitron text-3xl md:text-5xl tracking-widest mb-12 z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          OUR MISSION
        </motion.h2>

        {/* Stats Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
          {missionStats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative backdrop-blur-sm flex flex-col items-center justify-center p-6 bg-white/5 rounded-lg border border-white/10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className="font-orbitron text-sm text-[#c1440e] tracking-[0.25em] mb-2">
                {stat.label}
              </h3>
              {/* Visual placeholder animations */}
              {stat.type === 'circular' && (
                <motion.div
                  className="w-20 h-20 flex items-center justify-center text-lg font-spaceGrotesk border-2 border-[#c1440e] rounded-full"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                >
                  {stat.value}%
                </motion.div>
              )}
              {stat.type === 'bar' && (
                <div className="w-full h-4 bg-white/10 rounded-full mt-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-[#c1440e]/30 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  />
                </div>
              )}
              {stat.type === 'ring' && (
                <motion.div
                  className="w-16 h-16 border-2 border-[#c1440e] rounded-full flex items-center justify-center text-white/80"
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {stat.value}%
                </motion.div>
              )}
              {stat.type === 'indicator' && (
                <motion.div
                  className="w-6 h-6 bg-[#c1440e] rounded-full mt-2"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Live Feed */}
        <div className="mt-12 overflow-hidden h-28 relative z-10">
          <motion.div
            className="flex flex-col gap-2"
            animate={{ y: ['100%', '-100%'] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {liveFeed.map((line, i) => (
              <p
                key={i}
                className="font-spaceGrotesk text-sm text-white/70"
              >
                {line}
              </p>
            ))}
          </motion.div>
        </div>
      </div>

      {/* RIGHT: blueprint visual */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* faint grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* satellite outline */}
        <motion.img
          width= {1500}
          height={1000}
          src="/Untitled design (28).png"
          alt="Satellite Blueprint"
          className="relative h-full w-auto object-top-left pointer-events-none select-none"
          style={{
            objectFit: "cover"
          }}
          animate={{
            rotate: [0, 2, -2, 0],
            y: [0, -10, 10, 0],
            opacity: [0.45, 0.55, 0.45],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* moving highlight scan */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c1440e]/5 to-transparent"
          animate={{ y: ['100%', '-100%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </section>
  )
}