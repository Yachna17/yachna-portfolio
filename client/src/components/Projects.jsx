import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import api from '../utils/api'

const fallbackProjects = [
  {
    _id: '1',
    title: 'YASDEV',
    description:
      'Frontend developer role. Built and maintained responsive components using TypeScript and Next.js for a professional web presence.',
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://www.yasdev.com',
    githubUrl: '',
    image: '/yasdev-thumb.png',
    featured: true,
    order: 0,
  },

  {
    _id: '2',
    title: 'Gantavia',
    description:
      'A full-stack travel companion web app for destination exploration, trip planning, and booking management. Features real-time weather API, Google Maps integration, and JWT authentication.',
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
    liveUrl: '',
    githubUrl: '',
    image: '/gantavia-thumb.png',
    video: '/videos/gantavia.mp4',
    featured: false,
    order: 1,
  },

  {
    _id: '3',
    title: 'Portfolio v1',
    description:
      'Previous personal portfolio. Responsive design with contact form, deployed with custom domain on Vercel.',
    techStack: ['React.js', 'JavaScript', 'CSS'],
    liveUrl: 'https://yachna.cv',
    githubUrl: 'https://github.com/Yachna17/personal-website',
    image: '',
    featured: false,
    order: 2,
  },
]

function Projects() {
  const [projects, setProjects] = useState(fallbackProjects)

  useEffect(() => {
    api
      .get('/api/projects')
      .then((res) => {
        if (res.data.success && res.data.data.length > 0) {
          setProjects(res.data.data)
        }
      })
      .catch(() => {})
  }, [])

  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-[#F7F4F4] dark:bg-[#221409]"
    >
      <div className="max-w-5xl mx-auto">
        {/* EYEBROW */}
        <motion.p
          className="font-mono text-xs text-[#710014] dark:text-[#C5002A] uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          // projects
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
          Things I&apos;ve built.
        </motion.h2>

        {/* FEATURED PROJECT */}
        {featured && (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-[#271810] border border-[#E4DFE0] dark:border-[#3D2416] rounded-xl overflow-hidden mb-4 group transition-all duration-200 hover:border-[#710014] dark:hover:border-[#C5002A]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {/* LEFT — INFO */}
            <div className="p-8 flex flex-col gap-4 justify-center">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#710014] dark:text-[#C5002A]">
                ✦ featured project
              </div>
              <h3 className="font-head font-bold text-2xl text-[#0A0A0A] dark:text-[#F5EDE8] tracking-tight">
                {featured.title}
              </h3>
              <p className="text-sm text-[#4A4244] dark:text-[#C4A898] leading-relaxed">
                {featured.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {featured.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] text-[#4A4244] dark:text-[#C4A898] border border-[#E4DFE0] dark:border-[#3D2416] rounded px-2 py-1 bg-[#F7F4F4] dark:bg-[#1E1208]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#710014] dark:bg-[#C5002A] text-white text-xs font-semibold rounded-lg hover:bg-[#5A0010] dark:hover:bg-[#E0002F] transition-colors duration-200"
                  >
                    Live demo ↗
                  </a>
                )}
                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-transparent text-[#4A4244] dark:text-[#C4A898] text-xs font-semibold rounded-lg border border-[#E4DFE0] dark:border-[#3D2416] hover:border-[#CFC8C9] dark:hover:border-[#50301E] hover:text-[#0A0A0A] dark:hover:text-[#F5EDE8] transition-all duration-200"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT — PREVIEW */}
            <div className="min-h-[260px] lg:min-h-full bg-[#F7F4F4] dark:bg-[#1E1208] border-t lg:border-t-0 lg:border-l border-[#E4DFE0] dark:border-[#3D2416] overflow-hidden">
              {featured.video ? (
                <video
                  src={featured.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full min-h-[260px] flex flex-col items-center justify-center gap-3 text-[#C0B8B9] dark:text-[#52352A] font-mono text-xs">
                  <div className="w-12 h-12 rounded-full border border-[#E4DFE0] dark:border-[#3D2416] bg-[#FDF5F6] dark:bg-[#2A1010] flex items-center justify-center text-lg">
                    ▶
                  </div>
                  <span>add screen recording</span>
                  <span className="text-[10px]">15–20s · mp4 · muted loop</span>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.map((project, index) => (
            <motion.div
              key={project._id}
              className="bg-white dark:bg-[#271810] border border-[#E4DFE0] dark:border-[#3D2416] rounded-xl p-6 flex flex-col gap-4 cursor-default transition-all duration-200 hover:border-[#710014] dark:hover:border-[#C5002A] hover:shadow-md hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* SCREENSHOT PLACEHOLDER */}
              <div className="w-full h-36 bg-[#F7F4F4] dark:bg-[#1E1208] border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg flex items-center justify-center text-[#C0B8B9] dark:text-[#52352A] font-mono text-xs">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  '[ screenshot ]'
                )}
              </div>

              <h3 className="font-head font-bold text-lg text-[#0A0A0A] dark:text-[#F5EDE8]">
                {project.title}
              </h3>

              <p className="text-sm text-[#4A4244] dark:text-[#C4A898] leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex gap-1.5 flex-wrap">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] text-[#4A4244] dark:text-[#C4A898] border border-[#E4DFE0] dark:border-[#3D2416] rounded px-2 py-1 bg-[#F7F4F4] dark:bg-[#1E1208]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-[#710014] dark:bg-[#C5002A] text-white text-xs font-semibold rounded-lg hover:bg-[#5A0010] dark:hover:bg-[#E0002F] transition-colors duration-200"
                  >
                    Live ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-transparent text-[#4A4244] dark:text-[#C4A898] text-xs font-semibold rounded-lg border border-[#E4DFE0] dark:border-[#3D2416] hover:border-[#CFC8C9] dark:hover:border-[#50301E] transition-all duration-200"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
