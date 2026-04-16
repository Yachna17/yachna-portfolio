import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { useSound } from '../hooks/useSound'
import { HiArrowRight, HiArrowDown } from 'react-icons/hi2'

function Hero() {
  const { theme } = useTheme()
  const { play } = useSound()
  const floatingRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (floatingRef.current) {
        floatingRef.current.style.opacity = '1'
        floatingRef.current.style.transform = 'translateY(0)'
      }
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  const isDark = theme === 'dark'

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#FAFAFA] dark:bg-[#181818]">
      {/* LIGHT MODE DOT GRID */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.6,
        }}
      />

      {/* DARK MODE GRID */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* DARK MODE GLOW ORBS */}
      {isDark && (
        <>
          <div
            className="absolute pointer-events-none"
            style={{
              width: '600px',
              height: '500px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,109,31,0.07) 0%, transparent 70%)',
              top: '-100px',
              left: '-100px',
              animation: 'float1 8s ease-in-out infinite',
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,140,74,0.05) 0%, transparent 70%)',
              bottom: '-50px',
              right: '-50px',
              animation: 'float2 10s ease-in-out infinite',
            }}
          />
        </>
      )}

      {/* LIGHT MODE BLOB */}
      {!isDark && (
        <div
          className="absolute pointer-events-none"
          style={{
            width: '500px',
            height: '360px',
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse, rgba(113,0,20,0.06) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        />
      )}

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* BADGE */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <div
            className={`inline-flex items-center gap-2 font-mono text-xs rounded-full px-4 py-2 ${
              isDark
                ? 'bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] text-[#958E85] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.2)]'
                : 'bg-white border border-[rgba(0,0,0,0.08)] text-[#4A4244] shadow-sm'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"
              style={{
                boxShadow: isDark ? '0 0 8px rgba(34,197,94,0.6)' : 'none',
                animation: 'pulse 2s infinite',
              }}
            />
            ✦ Available for work
          </div>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          variants={itemVariants}
          className="font-head font-extrabold leading-[1.05] tracking-tight text-[#0A0A0A] dark:text-[#F0EEE8] mb-6"
          style={{
            fontSize: 'clamp(44px, 7vw, 88px)',
            textShadow: isDark ? '0 0 80px rgba(255,109,31,0.1)' : 'none',
          }}
        >
          I build things
          <br />
          <span
            style={{
              color: isDark ? '#FF6D1F' : '#710014',
              textShadow: isDark ? '0 0 40px rgba(255,109,31,0.35)' : 'none',
            }}
          >
            for the web.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-sm text-[#4A4244] dark:text-[#958E85] mb-10 tracking-wide"
        >
          Full stack developer
          <span className="mx-3 text-[#C0B8B9] dark:text-[#4A4540]">·</span>
          MCA &apos;26
          <span className="mx-3 text-[#C0B8B9] dark:text-[#4A4540]">·</span>3
          live projects
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="flex gap-3 justify-center flex-wrap"
        >
          <a
            href="#projects"
            onClick={() => play('pop')}
            className="px-7 py-3.5 text-white text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-1.5"
            style={{
              background: isDark ? '#FF6D1F' : '#710014',
              boxShadow: isDark
                ? '0 0 25px rgba(255,109,31,0.35), 0 4px 15px rgba(0,0,0,0.3)'
                : '0 2px 8px rgba(113,0,20,0.25)',
            }}
            onMouseEnter={(e) => {
              if (isDark)
                e.currentTarget.style.boxShadow =
                  '0 0 40px rgba(255,109,31,0.5), 0 8px 25px rgba(0,0,0,0.4)'
            }}
            onMouseLeave={(e) => {
              if (isDark)
                e.currentTarget.style.boxShadow =
                  '0 0 25px rgba(255,109,31,0.35), 0 4px 15px rgba(0,0,0,0.3)'
            }}
          >
            See my work <HiArrowRight className="text-sm" />
          </a>
          <a
            href="/resume.pdf"
            download
            onClick={() => play('pop')}
            className={`px-7 py-3.5 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
              isDark
                ? 'bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] text-[#F0EEE8] hover:border-[rgba(255,109,31,0.4)] hover:bg-[rgba(255,109,31,0.08)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                : 'bg-transparent border border-[rgba(0,0,0,0.15)] text-[#0A0A0A] hover:bg-[#F5F0F1]'
            }`}
          >
            Download resume <HiArrowDown className="text-sm" />
          </a>
        </motion.div>
      </motion.div>

      {/* SCROLL HINT */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 font-mono text-[10px] text-[#C0B8B9] dark:text-[#4A4540]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ animation: 'bounce 2s infinite' }}
      >
        <span>scroll</span>
        <span className="text-base">↓</span>
      </motion.div>

      {/* FLOATING BADGE */}
      <div
        ref={floatingRef}
        className={`absolute bottom-8 left-8 hidden md:flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-200 ${
          isDark
            ? 'bg-[rgba(255,255,255,0.06)] backdrop-blur-xl border border-[rgba(255,109,31,0.25)] text-[#F0EEE8] shadow-[0_0_20px_rgba(255,109,31,0.1),0_8px_32px_rgba(0,0,0,0.3)]'
            : 'bg-white border border-[rgba(0,0,0,0.08)] text-[#0A0A0A] shadow-md'
        }`}
        style={{
          opacity: 0,
          transform: 'translateY(10px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <span
          className="w-2 h-2 rounded-full bg-green-500"
          style={{ boxShadow: isDark ? '0 0 6px rgba(34,197,94,0.5)' : 'none' }}
        />
        Let&apos;s work together ↗
      </div>

      <style>{`
        @keyframes pulse { 0%{box-shadow:0 0 0 0 rgba(34,197,94,0.4)} 70%{box-shadow:0 0 0 6px rgba(34,197,94,0)} 100%{box-shadow:0 0 0 0 rgba(34,197,94,0)} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }
        @keyframes float1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,20px)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,30px)} }
      `}</style>
    </section>
  )
}

export default Hero
