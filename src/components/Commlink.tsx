"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Commlink() {
  const [open, setOpen] = useState(false)
  const links = ["home", "services", "crew", "contact"]
  const  [scrolled, setScrolled] = useState(false)
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-black/40 border-b border-[#C1440E]/10"
          : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 text-white font-spaceGrotesk md:grid md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-orbitron text-2xl tracking-widest text-[#FF1E1E]"
        >
          MARS<span className="text-white">STUDIO</span>
        </motion.div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#FF1E1E] focus:outline-none"
        >
          ☰
        </button>

        <ul
          className={`${
            open ? "block" : "hidden"
          } md:flex gap-8 text-sm uppercase tracking-wider md:justify-between`}
        >
          {links.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer"
            >
              <Link href={`/#${link}`} className="hover:text-[#FF1E1E]">
                {link}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C1440E] transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>
        <div className="hidden md:flex md:justify-end text-xs text-[#FF1E1E] tracking-widest">
          {dateTime.toLocaleString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </nav>
  )
}