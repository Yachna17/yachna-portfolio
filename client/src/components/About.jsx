import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import api from '../utils/api'
import { useSound } from '../hooks/useSound'

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
    <section id="about" className="py-28 px-6 bg-[#F7F4F4] dark:bg-[#221409]">
      <div className="max-w-5xl mx-auto">
        {/* EYEBROW */}
        <motion.p
          className="font-mono text-xs text-[#710014] dark:text-[#C5002A] uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          // about
        </motion.p>

        {/* HEADING */}
        <motion.h2
          className="font-head font-bold text-[#0A0A0A] dark:text-[#F5EDE8] tracking-tight mb-12"
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
            <div className="space-y-4 text-[15px] text-[#4A4244] dark:text-[#C4A898] leading-relaxed mb-6">
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
            <div className="flex items-center gap-3 bg-white dark:bg-[#271810] border border-[#E4DFE0] dark:border-[#3D2416] border-l-[3px] border-l-[#710014] dark:border-l-[#C5002A] rounded-r-lg px-4 py-3 mb-6 font-mono text-xs text-[#4A4244] dark:text-[#C4A898]">
              <span className="text-[#710014] dark:text-[#C5002A] font-medium">
                currently →
              </span>
              <span>{currently}</span>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="/yachna_resume.pdf"
                download
                onClick={() => play('pop')}
                className="px-5 py-2.5 bg-[#710014] dark:bg-[#C5002A] text-white text-sm font-semibold rounded-lg hover:bg-[#5A0010] dark:hover:bg-[#E0002F] transition-colors duration-200"
              >
                Download resume ↓
              </a>
              <a
                href="https://github.com/Yachna17"
                target="_blank"
                rel="noreferrer"
                onClick={() => play('pop')}
                className="px-5 py-2.5 bg-transparent text-[#0A0A0A] dark:text-[#F5EDE8] text-sm font-semibold rounded-lg border border-[#CFC8C9] dark:border-[#50301E] hover:border-[#8A8082] dark:hover:border-[#8A6458] hover:bg-[#F5F0F1] dark:hover:bg-[#311E14] transition-all duration-200"
              >
                View GitHub →
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
            <div className="bg-white dark:bg-[#271810] border border-[#E4DFE0] dark:border-[#3D2416] rounded-xl overflow-hidden">
              {/* PHOTO PLACEHOLDER */}
              <div className="h-56 bg-[#F5F0F1] dark:bg-[#311E14] border-b border-[#E4DFE0] dark:border-[#3D2416] flex flex-col items-center justify-center gap-2 text-[#C0B8B9] dark:text-[#52352A] font-mono text-xs">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#CFC8C9] dark:border-[#50301E] flex items-center justify-center text-2xl">
                  👤
                </div>
                your photo here
              </div>

              {/* PROFILE META */}
              <div className="p-5">
                <div className="font-head font-bold text-[17px] text-[#0A0A0A] dark:text-[#F5EDE8] mb-1">
                  Yachna
                </div>
                <div className="text-sm text-[#4A4244] dark:text-[#C4A898] mb-4">
                  Full Stack Developer
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#F7F4F4] dark:bg-[#1E1208] border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg font-mono text-xs text-[#4A4244] dark:text-[#C4A898]">
                    <span>📍</span> Mohali, Punjab
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#F7F4F4] dark:bg-[#1E1208] border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg font-mono text-xs text-[#4A4244] dark:text-[#C4A898]">
                    <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    Open to work
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#F7F4F4] dark:bg-[#1E1208] border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg font-mono text-xs text-[#4A4244] dark:text-[#C4A898]">
                    <span>🎓</span> Chandigarh University
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
