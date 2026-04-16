import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import api from '../utils/api'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi2'
import { useSound } from '../hooks/useSound'

function Contact() {
  const [status, setStatus] = useState('idle')
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

  const inputBase =
    'bg-white dark:bg-[rgba(255,255,255,0.04)] dark:backdrop-blur-xl border rounded-lg px-4 py-3 text-sm text-[#0A0A0A] dark:text-[#F0EEE8] placeholder-[#C0B8B9] dark:placeholder-[#4A4540] outline-none transition-all duration-200 focus:border-[#710014] dark:focus:border-[#FF6D1F] dark:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.1)] dark:focus:[box-shadow:0_0_0_1px_rgba(255,109,31,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]'

  const inputBorder = (hasError) =>
    hasError
      ? 'border-red-400 dark:border-red-500'
      : 'border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)]'

  return (
    <section id="contact" className="py-28 px-6 bg-[#F7F4F4] dark:bg-[#141212]">
      <div className="max-w-5xl mx-auto">
        {/* EYEBROW */}
        <motion.p
          className="font-mono text-xs text-[#710014] dark:text-[#FF6D1F] dark:[text-shadow:0_0_15px_rgba(255,109,31,0.4)] uppercase tracking-widest mb-3"
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
              className="font-head font-bold text-[#0A0A0A] dark:text-[#F0EEE8] tracking-tight mb-4 leading-tight"
              style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}
            >
              Have a project in mind?{' '}
              <span className="text-[#710014] dark:text-[#FF6D1F] dark:[text-shadow:0_0_20px_rgba(255,109,31,0.3)]">
                Let&apos;s build it.
              </span>
            </h2>

            <p className="text-sm text-[#4A4244] dark:text-[#958E85] leading-relaxed mb-8">
              I&apos;m open to full-time roles, internships, and freelance
              projects. I typically reply within 24 hours.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex flex-col gap-3">
              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/yachna-r/"
                target="_blank"
                rel="noreferrer"
                onClick={() => play('pop')}
                className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-[rgba(255,255,255,0.04)] dark:backdrop-blur-xl border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.07)] rounded-lg text-sm text-[#4A4244] dark:text-[#958E85] dark:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-[rgba(0,0,0,0.15)] dark:hover:[border-color:rgba(255,109,31,0.3)] dark:hover:[background:rgba(255,109,31,0.06)] transition-all duration-200"
              >
                <div className="w-7 h-7 bg-[#F7F4F4] dark:bg-[rgba(255,255,255,0.05)] dark:border dark:border-[rgba(255,255,255,0.08)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaLinkedinIn className="text-[#0A66C2] text-sm" />
                </div>
                linkedin.com/in/yachna-r
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Yachna17"
                target="_blank"
                rel="noreferrer"
                onClick={() => play('pop')}
                className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-[rgba(255,255,255,0.04)] dark:backdrop-blur-xl border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.07)] rounded-lg text-sm text-[#4A4244] dark:text-[#958E85] dark:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-[rgba(0,0,0,0.15)] dark:hover:[border-color:rgba(255,109,31,0.3)] dark:hover:[background:rgba(255,109,31,0.06)] transition-all duration-200"
              >
                <div className="w-7 h-7 bg-[#F7F4F4] dark:bg-[rgba(255,255,255,0.05)] dark:border dark:border-[rgba(255,255,255,0.08)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaGithub className="text-[#0A0A0A] dark:text-[#F0EEE8] text-sm" />
                </div>
                github.com/Yachna17
              </a>

              {/* EMAIL */}
              <a
                href="mailto:yachnarupwal@gmail.com"
                onClick={() => play('pop')}
                className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-[rgba(255,255,255,0.04)] dark:backdrop-blur-xl border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.07)] rounded-lg text-sm text-[#4A4244] dark:text-[#958E85] dark:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-[rgba(0,0,0,0.15)] dark:hover:[border-color:rgba(255,109,31,0.3)] dark:hover:[background:rgba(255,109,31,0.06)] transition-all duration-200"
              >
                <div className="w-7 h-7 bg-[#F7F4F4] dark:bg-[rgba(255,255,255,0.05)] dark:border dark:border-[rgba(255,255,255,0.08)] rounded-lg flex items-center justify-center flex-shrink-0">
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
                <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-[rgba(34,197,94,0.08)] border border-green-200 dark:border-[rgba(34,197,94,0.2)] flex items-center justify-center dark:[box-shadow:0_0_20px_rgba(34,197,94,0.15)]">
                  <HiCheckCircle className="text-2xl text-green-500 dark:text-green-400" />
                </div>
                <h3 className="font-head font-bold text-lg text-[#0A0A0A] dark:text-[#F0EEE8]">
                  Message sent!
                </h3>
                <p className="text-sm text-[#4A4244] dark:text-[#958E85]">
                  I&apos;ll reply within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle')
                    play('tick')
                  }}
                  className="font-mono text-xs text-[#710014] dark:text-[#FF6D1F] hover:underline mt-2 flex items-center gap-1"
                >
                  Send another <HiArrowRight className="text-xs" />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {/* NAME */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#8A8082] dark:text-[#4A4540]">
                    name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className={`${inputBase} ${inputBorder(errors.name)}`}
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
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#8A8082] dark:text-[#4A4540]">
                    email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={`${inputBase} ${inputBorder(errors.email)}`}
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
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#8A8082] dark:text-[#4A4540]">
                    message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputBase} ${inputBorder(errors.message)} resize-none`}
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
                  onClick={() => status === 'idle' && play('pop')}
                  disabled={status === 'loading'}
                  className="w-full py-3.5 bg-[#710014] dark:bg-[#FF6D1F] text-white text-sm font-semibold rounded-lg hover:bg-[#5A0010] dark:hover:bg-[#FF8C4A] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed dark:[box-shadow:0_0_20px_rgba(255,109,31,0.25)] dark:hover:[box-shadow:0_0_30px_rgba(255,109,31,0.4)] flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send message <HiArrowRight className="text-sm" />
                    </>
                  )}
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
