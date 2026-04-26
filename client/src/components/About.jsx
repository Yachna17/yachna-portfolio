import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import api from '../utils/api'
import { useSound } from '../hooks/useSound'
import { HiUser, HiLocationMarker, HiAcademicCap } from 'react-icons/hi'
import { HiArrowDown, HiArrowRight } from 'react-icons/hi2'

function About() {
  const [currently, setCurrently] = useState(
    'Building this portfolio (MERN + Admin Panel)'
  )
  const { play } = useSound()

  useEffect(() => {
    api
      .get('/api/currently')
      .then((res) => {
        if (res.data.success && res.data.data) {
          setCurrently(res.data.data)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section id="about" className="py-28 px-6 bg-[#F7F4F4] dark:bg-[#141212]">
      <div className="max-w-5xl mx-auto">
        {/* EYEBROW */}
        <motion.p
          className="font-mono text-xs text-accent uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          // about
        </motion.p>

        {/* HEADING */}
        <motion.h2
          className="font-head font-bold text-t1 tracking-tight mb-12"
          style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Building things that matter.
        </motion.h2>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-start">
          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-[15px] text-t2 leading-relaxed mb-6">
              <p>
                I&apos;m a full stack developer graduating from Chandigarh
                University in May 2026, specializing in building web
                applications with React and Node.js.
              </p>
              <p>
                I care about clean code, good UX, and shipping products that
                actually work. I&apos;ve built a travel platform with real-time
                APIs, contributed to freelance frontend projects, and I&apos;m
                always working on something new.
              </p>
              <p>
                When I&apos;m not building, I&apos;m probably exploring new
                technologies or thinking about the next thing to ship.
              </p>
            </div>

            {/* CURRENTLY BAR */}
            <div className="flex items-center gap-3 bg-white dark:bg-accent-dim backdrop-blur-xl border border-border-base border-l-[3px] border-l-accent rounded-r-lg px-4 py-3 mb-6 font-mono text-xs text-t2">
              <span className="text-accent font-medium flex items-center gap-1">
                currently <HiArrowRight className="text-[10px]" />
              </span>
              <span>{currently}</span>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="/yachna_resume.pdf"
                download
                onClick={() => play('pop')}
                className="px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-all duration-200 flex items-center gap-1.5"
              >
                Download resume <HiArrowDown className="text-sm" />
              </a>
              <a
                href="https://github.com/Yachna17"
                target="_blank"
                rel="noreferrer"
                onClick={() => play('pop')}
                className="px-5 py-2.5 bg-transparent text-t1 text-sm font-semibold rounded-lg border border-border-mid hover:border-t3 hover:bg-bg-alt transition-all duration-200 flex items-center gap-1.5"
              >
                View GitHub <HiArrowRight className="text-sm" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT — PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-bg-card border border-border-base rounded-xl overflow-hidden transition-all duration-300">
              {/* PHOTO PLACEHOLDER */}
              <div className="border-b border-border-base overflow-hidden">
                <img
                  src="/yachna.jpeg"
                  alt="Yachna"
                  className="w-full object-cover"
                  style={{
                    objectPosition:
                      '50% 10%' /* horizontal center, 10% from top */,
                    transform:
                      'scale(1.1)' /* zoom in slightly to crop bottom */,
                    transformOrigin: 'top center' /* anchor zoom from top */,
                  }}
                />
              </div>

              {/* PROFILE META */}
              <div className="p-5">
                <div className="font-head font-bold text-[17px] text-t1 mb-1">
                  Yachna
                </div>
                <div className="text-sm text-t2 mb-4">Full Stack Developer</div>

                <div className="flex flex-col gap-2">
                  {/* LOCATION */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-bg-alt border border-border-base rounded-lg font-mono text-xs text-t2 transition-all duration-200 hover:border-accent-hover">
                    <HiLocationMarker className="text-sm text-accent flex-shrink-0" />
                    Mohali, Punjab
                  </div>

                  {/* OPEN TO WORK */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-bg-alt border border-border-base rounded-lg font-mono text-xs text-t2 transition-all duration-200 hover:border-accent-hover">
                    <span
                      className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"
                      style={{ boxShadow: '0 0 6px rgba(34,197,94,0.5)' }}
                    />
                    Open to work
                  </div>

                  {/* UNIVERSITY */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-bg-alt border border-border-base rounded-lg font-mono text-xs text-t2 transition-all duration-200 hover:border-accent-hover">
                    <HiAcademicCap className="text-sm text-accent flex-shrink-0" />
                    Chandigarh University
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
