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
          className="font-mono text-xs text-[#710014] dark:text-[#FF6D1F] dark:[text-shadow:0_0_15px_rgba(255,109,31,0.4)] uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          // about
        </motion.p>

        {/* HEADING */}
        <motion.h2
          className="font-head font-bold text-[#0A0A0A] dark:text-[#F0EEE8] tracking-tight mb-12"
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
            <div className="space-y-4 text-[15px] text-[#4A4244] dark:text-[#958E85] leading-relaxed mb-6">
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
            <div className="flex items-center gap-3 bg-white dark:bg-[rgba(255,109,31,0.06)] dark:backdrop-blur-xl border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,109,31,0.2)] border-l-[3px] border-l-[#710014] dark:border-l-[#FF6D1F] rounded-r-lg px-4 py-3 mb-6 font-mono text-xs text-[#4A4244] dark:text-[#958E85] dark:[box-shadow:0_0_20px_rgba(255,109,31,0.05)]">
              <span className="text-[#710014] dark:text-[#FF6D1F] font-medium flex items-center gap-1">
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
                className="px-5 py-2.5 bg-[#710014] dark:bg-[#FF6D1F] text-white text-sm font-semibold rounded-lg hover:bg-[#5A0010] dark:hover:bg-[#FF8C4A] transition-all duration-200 dark:[box-shadow:0_0_20px_rgba(255,109,31,0.25)] dark:hover:[box-shadow:0_0_30px_rgba(255,109,31,0.4)] flex items-center gap-1.5"
              >
                Download resume <HiArrowDown className="text-sm" />
              </a>
              <a
                href="https://github.com/Yachna17"
                target="_blank"
                rel="noreferrer"
                onClick={() => play('pop')}
                className="px-5 py-2.5 bg-transparent text-[#0A0A0A] dark:text-[#F0EEE8] text-sm font-semibold rounded-lg border border-[#CFC8C9] dark:border-[rgba(255,255,255,0.1)] hover:border-[#8A8082] dark:hover:border-[rgba(255,109,31,0.4)] hover:bg-[#F5F0F1] dark:hover:bg-[rgba(255,109,31,0.08)] transition-all duration-200 dark:bg-[rgba(255,255,255,0.04)] dark:backdrop-blur-xl flex items-center gap-1.5"
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
            <div className="bg-white dark:bg-[rgba(255,255,255,0.04)] dark:backdrop-blur-[30px] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden dark:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.07),0_20px_60px_rgba(0,0,0,0.5)] dark:[transform:perspective(1000px)_rotateY(-3deg)_rotateX(1deg)] dark:hover:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)_translateY(-4px)] transition-all duration-300">
              {/* PHOTO PLACEHOLDER */}
              <div className="h-56 bg-[#F5F0F1] dark:bg-[rgba(255,109,31,0.04)] border-b border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.07)] flex flex-col items-center justify-center gap-3 text-[#C0B8B9] dark:text-[#4A4540] font-mono text-xs">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#CFC8C9] dark:border-[rgba(255,109,31,0.25)] dark:bg-[rgba(255,109,31,0.06)] flex items-center justify-center dark:[box-shadow:0_0_15px_rgba(255,109,31,0.1)]">
                  <HiUser className="text-3xl text-[#C0B8B9] dark:text-[#FF6D1F]" />
                </div>
                your photo here
              </div>

              {/* PROFILE META */}
              <div className="p-5">
                <div className="font-head font-bold text-[17px] text-[#0A0A0A] dark:text-[#F0EEE8] mb-1">
                  Yachna
                </div>
                <div className="text-sm text-[#4A4244] dark:text-[#958E85] mb-4">
                  Full Stack Developer
                </div>

                <div className="flex flex-col gap-2">
                  {/* LOCATION */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#F7F4F4] dark:bg-[rgba(255,255,255,0.03)] dark:backdrop-blur-xl border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.07)] rounded-lg font-mono text-xs text-[#4A4244] dark:text-[#958E85] transition-all duration-200 dark:hover:[border-color:rgba(255,109,31,0.2)]">
                    <HiLocationMarker className="text-sm text-[#8A8082] dark:text-[#FF6D1F] flex-shrink-0" />
                    Mohali, Punjab
                  </div>

                  {/* OPEN TO WORK */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#F7F4F4] dark:bg-[rgba(255,255,255,0.03)] dark:backdrop-blur-xl border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.07)] rounded-lg font-mono text-xs text-[#4A4244] dark:text-[#958E85] transition-all duration-200 dark:hover:[border-color:rgba(255,109,31,0.2)]">
                    <span
                      className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"
                      style={{ boxShadow: '0 0 6px rgba(34,197,94,0.5)' }}
                    />
                    Open to work
                  </div>

                  {/* UNIVERSITY */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#F7F4F4] dark:bg-[rgba(255,255,255,0.03)] dark:backdrop-blur-xl border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.07)] rounded-lg font-mono text-xs text-[#4A4244] dark:text-[#958E85] transition-all duration-200 dark:hover:[border-color:rgba(255,109,31,0.2)]">
                    <HiAcademicCap className="text-sm text-[#8A8082] dark:text-[#FF6D1F] flex-shrink-0" />
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
