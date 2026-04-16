import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSparkles, HiArrowUp } from 'react-icons/hi2'

const techStack = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Tailwind CSS',
  'Framer Motion',
  'Vercel',
  'Render',
]

function Footer() {
  const [showStack, setShowStack] = useState(false)

  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.07)] bg-[#FAFAFA] dark:bg-[rgba(255,255,255,0.02)] dark:backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-center">
        <div className="font-mono text-xs text-[#8A8082] dark:text-[#4A4540] flex items-center gap-2 flex-wrap justify-center">
          {/* LOGO */}
          <span className="text-[#0A0A0A] dark:text-[#F0EEE8] font-medium">
            yachna
            <span className="text-[#710014] dark:text-[#FF6D1F] dark:[text-shadow:0_0_10px_rgba(255,109,31,0.4)]">
              .
            </span>
          </span>

          <span className="text-[#C0B8B9] dark:text-[#3A3530]">·</span>

          {/* EASTER EGG — BUILT WITH MERN */}
          <div className="relative">
            <button
              onMouseEnter={() => setShowStack(true)}
              onMouseLeave={() => setShowStack(false)}
              className="flex items-center gap-1 hover:text-[#710014] dark:hover:text-[#FF6D1F] transition-colors duration-200 cursor-default"
            >
              Built with MERN
              <HiSparkles className="text-[10px] text-[#710014] dark:text-[#FF6D1F]" />
            </button>

            <AnimatePresence>
              {showStack && (
                <motion.div
                  className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-white dark:bg-[#242424] dark:backdrop-blur-2xl border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 shadow-lg dark:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.08),0_20px_40px_rgba(0,0,0,0.6)] z-10 whitespace-nowrap"
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="font-mono text-[10px] text-[#8A8082] dark:text-[#4A4540] uppercase tracking-widest mb-2">
                    full stack
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-w-[240px]">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] text-[#4A4244] dark:text-[#958E85] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded px-2 py-0.5 bg-[#F7F4F4] dark:bg-[rgba(255,255,255,0.04)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <span className="text-[#C0B8B9] dark:text-[#3A3530]">·</span>
          <span>© {new Date().getFullYear()}</span>
          <span className="text-[#C0B8B9] dark:text-[#3A3530]">·</span>

          {/* BACK TO TOP */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 hover:text-[#710014] dark:hover:text-[#FF6D1F] transition-colors duration-200"
          >
            Back to top <HiArrowUp className="text-[10px]" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
