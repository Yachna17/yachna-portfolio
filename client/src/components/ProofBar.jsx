import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { num: 2, suffix: '', label: 'live projects' },
  { num: 1, suffix: '+', label: 'years building' },
  { num: 10, suffix: '+', label: 'technologies' },
  { num: 26, suffix: "'", label: 'MCA graduating' },
]

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const duration = 1200
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function ProofBar() {
  return (
    <motion.div
      className="flex bg-[#F7F4F4] dark:bg-[#221409] border-t border-b border-[#E4DFE0] dark:border-[#3D2416]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`flex-1 py-5 text-center ${
            index !== stats.length - 1
              ? 'border-r border-[#E4DFE0] dark:border-[#3D2416]'
              : ''
          }`}
        >
          <div className="font-head text-2xl font-bold text-[#0A0A0A] dark:text-[#F5EDE8] tracking-tight">
            <CountUp target={stat.num} suffix={stat.suffix} />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8082] dark:text-[#8A6458] mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default ProofBar
