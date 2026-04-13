import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    <footer className="border-t border-[#E4DFE0] dark:border-[#3D2416] bg-[#FAFAFA] dark:bg-[#1E1208]">
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-center">
        <div className="font-mono text-xs text-[#8A8082] dark:text-[#8A6458] flex items-center gap-2 flex-wrap justify-center">
          {/* LOGO */}
          <span className="text-[#0A0A0A] dark:text-[#F5EDE8] font-medium">
            yachna<span className="text-[#710014] dark:text-[#C5002A]">.</span>
          </span>

          <span className="text-[#C0B8B9] dark:text-[#52352A]">·</span>

          {/* EASTER EGG — BUILT WITH MERN */}
          <div className="relative">
            <button
              onMouseEnter={() => setShowStack(true)}
              onMouseLeave={() => setShowStack(false)}
              className="hover:text-[#710014] dark:hover:text-[#C5002A] transition-colors duration-200 cursor-default"
            >
              Built with MERN ✦
            </button>

            <AnimatePresence>
              {showStack && (
                <motion.div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-[#271810] border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg px-4 py-3 shadow-lg z-10 whitespace-nowrap"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="font-mono text-[10px] text-[#8A8082] dark:text-[#8A6458] uppercase tracking-widest mb-2">
                    full stack
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-w-[240px]">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] text-[#4A4244] dark:text-[#C4A898] border border-[#E4DFE0] dark:border-[#3D2416] rounded px-2 py-0.5 bg-[#F7F4F4] dark:bg-[#1E1208]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <span className="text-[#C0B8B9] dark:text-[#52352A]">·</span>
          <span>© {new Date().getFullYear()}</span>
          <span className="text-[#C0B8B9] dark:text-[#52352A]">·</span>

          {/* BACK TO TOP */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-[#710014] dark:hover:text-[#C5002A] transition-colors duration-200"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
