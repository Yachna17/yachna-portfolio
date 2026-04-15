import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import api from '../utils/api'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useSound } from '../hooks/useSound'

function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const { play } = useSound()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('loading')
    try {
      await api.post('/api/contact', data)
      setStatus('success')
      play('chime')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 px-6 bg-[#F7F4F4] dark:bg-[#221409]">
      <div className="max-w-5xl mx-auto">
        {/* EYEBROW */}
        <motion.p
          className="font-mono text-xs text-[#710014] dark:text-[#C5002A] uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          // contact
        </motion.p>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-head font-bold text-[#0A0A0A] dark:text-[#F5EDE8] tracking-tight mb-4 leading-tight"
              style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}
            >
              Have a project in mind?{' '}
              <span className="text-[#710014] dark:text-[#C5002A]">
                Let&apos;s build it.
              </span>
            </h2>

            <p className="text-sm text-[#4A4244] dark:text-[#C4A898] leading-relaxed mb-8">
              I&apos;m open to full-time roles, internships, and freelance
              projects. I typically reply within 24 hours.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/yachna-r/"
                target="_blank"
                rel="noreferrer"
                onClick={() => play('pop')}
                className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-[#271810] border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg text-sm text-[#4A4244] dark:text-[#C4A898] hover:border-[#CFC8C9] dark:hover:border-[#50301E] hover:text-[#0A0A0A] dark:hover:text-[#F5EDE8] transition-all duration-200"
              >
                <div className="w-6 h-6 bg-[#F7F4F4] dark:bg-[#311E14] rounded flex items-center justify-center">
                  <FaLinkedinIn className="text-[#0A66C2] text-sm" />
                </div>
                linkedin.com/in/yachna-r
              </a>

              <a
                href="https://github.com/Yachna17"
                target="_blank"
                rel="noreferrer"
                onClick={() => play('pop')}
                className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-[#271810] border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg text-sm text-[#4A4244] dark:text-[#C4A898] hover:border-[#CFC8C9] dark:hover:border-[#50301E] hover:text-[#0A0A0A] dark:hover:text-[#F5EDE8] transition-all duration-200"
              >
                <div className="w-6 h-6 bg-[#F7F4F4] dark:bg-[#311E14] rounded flex items-center justify-center">
                  <FaGithub className="text-[#0A0A0A] dark:text-[#F5EDE8] text-sm" />
                </div>
                github.com/Yachna17
              </a>

              <a
                href="mailto:yachnarupwal@gmail.com"
                onClick={() => play('pop')}
                className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-[#271810] border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg text-sm text-[#4A4244] dark:text-[#C4A898] hover:border-[#CFC8C9] dark:hover:border-[#50301E] hover:text-[#0A0A0A] dark:hover:text-[#F5EDE8] transition-all duration-200"
              >
                <div className="w-6 h-6 bg-[#F7F4F4] dark:bg-[#311E14] rounded flex items-center justify-center">
                  <MdEmail className="text-[#EA4335] text-sm" />
                </div>
                yachnarupwal@gmail.com
              </a>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center justify-center text-2xl">
                  ✓
                </div>
                <h3 className="font-head font-bold text-lg text-[#0A0A0A] dark:text-[#F5EDE8]">
                  Message sent!
                </h3>
                <p className="text-sm text-[#4A4244] dark:text-[#C4A898]">
                  I&apos;ll reply within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle')
                    play('tick')
                  }}
                  className="font-mono text-xs text-[#710014] dark:text-[#C5002A] hover:underline mt-2"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {/* NAME */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#8A8082] dark:text-[#8A6458]">
                    name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className={`bg-white dark:bg-[#271810] border rounded-lg px-4 py-3 text-sm text-[#0A0A0A] dark:text-[#F5EDE8] placeholder-[#C0B8B9] dark:placeholder-[#52352A] outline-none transition-colors duration-200 focus:border-[#710014] dark:focus:border-[#C5002A] ${
                      errors.name
                        ? 'border-red-400'
                        : 'border-[#E4DFE0] dark:border-[#3D2416]'
                    }`}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <span className="font-mono text-[10px] text-red-400">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#8A8082] dark:text-[#8A6458]">
                    email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={`bg-white dark:bg-[#271810] border rounded-lg px-4 py-3 text-sm text-[#0A0A0A] dark:text-[#F5EDE8] placeholder-[#C0B8B9] dark:placeholder-[#52352A] outline-none transition-colors duration-200 focus:border-[#710014] dark:focus:border-[#C5002A] ${
                      errors.email
                        ? 'border-red-400'
                        : 'border-[#E4DFE0] dark:border-[#3D2416]'
                    }`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email',
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="font-mono text-[10px] text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#8A8082] dark:text-[#8A6458]">
                    message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`bg-white dark:bg-[#271810] border rounded-lg px-4 py-3 text-sm text-[#0A0A0A] dark:text-[#F5EDE8] placeholder-[#C0B8B9] dark:placeholder-[#52352A] outline-none transition-colors duration-200 focus:border-[#710014] dark:focus:border-[#C5002A] resize-none ${
                      errors.message
                        ? 'border-red-400'
                        : 'border-[#E4DFE0] dark:border-[#3D2416]'
                    }`}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters',
                      },
                    })}
                  />
                  {errors.message && (
                    <span className="font-mono text-[10px] text-red-400">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* ERROR STATE */}
                {status === 'error' && (
                  <p className="font-mono text-[10px] text-red-400">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  onClick={() => play('pop')}
                  disabled={status === 'loading'}
                  className="w-full py-3.5 bg-[#710014] dark:bg-[#C5002A] text-white text-sm font-semibold rounded-lg hover:bg-[#5A0010] dark:hover:bg-[#E0002F] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
