import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function Hero() {
  const floatingBadgeRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (floatingBadgeRef.current) {
        floatingBadgeRef.current.style.opacity = '1'
        floatingBadgeRef.current.style.transform = 'translateY(0)'
      }
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#FAFAFA] dark:bg-[#1E1208] overflow-hidden">
      {/* DOT GRID BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #CFC8C9 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.6,
        }}
      />

      {/* DARK MODE DOT GRID */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          backgroundImage:
            'radial-gradient(circle, #3D2416 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.6,
        }}
      />

      {/* CRIMSON BLOB */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '500px',
          height: '360px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(113,0,20,0.07) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* HERO CONTENT */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* AVAILABILITY BADGE */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#4A4244] dark:text-[#C4A898] border border-[#E4DFE0] dark:border-[#3D2416] rounded-full px-4 py-2 bg-white dark:bg-[#271810]">
            <span
              className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"
              style={{
                boxShadow: '0 0 0 0 rgba(34,197,94,0.4)',
                animation: 'pulse 2s infinite',
              }}
            />
            ✦ Available for work
          </div>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          variants={itemVariants}
          className="font-head font-extrabold leading-[1.05] tracking-tight text-[#0A0A0A] dark:text-[#F5EDE8] mb-6"
          style={{ fontSize: 'clamp(44px, 7vw, 88px)' }}
        >
          I build things
          <br />
          <span className="text-[#710014] dark:text-[#C5002A]">
            for the web.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-sm text-[#4A4244] dark:text-[#C4A898] mb-10 tracking-wide"
        >
          Full stack developer
          <span className="mx-3 text-[#C0B8B9] dark:text-[#52352A]">·</span>
          MCA &apos;26
          <span className="mx-3 text-[#C0B8B9] dark:text-[#52352A]">·</span>3
          live projects
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="flex gap-3 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-7 py-3.5 bg-[#710014] dark:bg-[#C5002A] text-white text-sm font-semibold rounded-lg hover:bg-[#5A0010] dark:hover:bg-[#E0002F] transition-all duration-200"
            style={{ boxShadow: '0 2px 8px rgba(113,0,20,0.25)' }}
          >
            See my work →
          </a>
          <a
            href="/yachna_resume.pdf"
            download
            className="px-7 py-3.5 bg-transparent text-[#0A0A0A] dark:text-[#F5EDE8] text-sm font-semibold rounded-lg border border-[#CFC8C9] dark:border-[#50301E] hover:border-[#8A8082] dark:hover:border-[#8A6458] hover:bg-[#F5F0F1] dark:hover:bg-[#311E14] transition-all duration-200"
          >
            Download resume ↓
          </a>
        </motion.div>
      </motion.div>

      {/* SCROLL HINT */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 font-mono text-[10px] text-[#C0B8B9] dark:text-[#52352A]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ animation: 'bounce 2s infinite' }}
      >
        <span>scroll</span>
        <span className="text-base">↓</span>
      </motion.div>

      {/* FLOATING BADGE — appears after 10s */}
      <div
        ref={floatingBadgeRef}
        className="absolute bottom-8 left-8 hidden md:flex items-center gap-2 bg-white dark:bg-[#271810] border border-[#E4DFE0] dark:border-[#3D2416] rounded-full px-4 py-2 text-sm font-medium text-[#0A0A0A] dark:text-[#F5EDE8] cursor-pointer hover:border-[#710014] dark:hover:border-[#C5002A] transition-all duration-200"
        style={{
          opacity: 0,
          transform: 'translateY(10px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
        Let&apos;s work together ↗
      </div>

      {/* PULSE ANIMATION */}
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          70% { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}

export default Hero
