import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import api from '../utils/api'
import { useSound } from '../hooks/useSound'
import {
  HiArrowRight,
  HiArrowTopRightOnSquare,
  HiPlay,
  HiSparkles,
} from 'react-icons/hi2'

const fallbackProjects = [
  {
    _id: '1',
    title: 'Gantavia',
    description:
      'A full-stack travel companion web app for destination exploration, trip planning, and booking management. Features real-time weather API, Google Maps integration, and JWT authentication.',
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
    liveUrl: '',
    githubUrl: 'https://github.com/Yachna17/gantavia',
    image: '/gantavia-thumb.png',
    video: '/videos/gantavia.mp4',
    featured: true,
    order: 0,
  },
  {
    _id: '2',
    title: 'YASDEV',
    description:
      'Frontend developer role. Built and maintained responsive components using TypeScript and Next.js for a professional web presence.',
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://www.yasdev.com',
    githubUrl: '',
    image: '/yasdev-thumb.png',
    video: '/videos/yasdev.mp4',
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
    githubUrl: '',
    image: '/portfolio_v1.png',
    featured: false,
    order: 2,
  },
]

function Projects() {
  const [projects, setProjects] = useState(fallbackProjects)
  const { play } = useSound()

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

  const featured = projects.find((p) => p.featured) || projects[0]
  const grid = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-[#F7F4F4] dark:bg-[#141212]"
    >
      <div className="max-w-5xl mx-auto">
        {/* EYEBROW */}
        <motion.p
          className="font-mono text-xs text-accent uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          // projects
        </motion.p>

        {/* HEADING */}
        <motion.h2
          className="font-head font-bold text-t1 tracking-tight mb-10"
          style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Things I&apos;ve built.
        </motion.h2>

        {/* FEATURED CARD */}
        {featured && (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-bg-card dark:backdrop-blur-[30px] border border-border-base rounded-xl overflow-hidden mb-4 group transition-all duration-300 hover:border-accent dark:hover:border-accent dark:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.07),0_20px_60px_rgba(0,0,0,0.4)] dark:hover:[box-shadow:0_0_40px_rgba(122,21,37,0.1),inset_0_1px_0_rgba(255,255,255,0.09),0_25px_70px_rgba(0,0,0,0.5)] dark:hover:[transform:translateY(-3px)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {/* LEFT — INFO */}
            <div className="p-8 flex flex-col gap-4 justify-center">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent flex items-center gap-1">
                <HiSparkles className="text-xs" />
                featured project
              </div>

              <h3 className="font-head font-bold text-[26px] text-t1 leading-tight tracking-tight">
                {featured.title}
              </h3>

              <p className="text-sm text-t2 leading-relaxed">
                {featured.description}
              </p>

              <div className="flex gap-1.5 flex-wrap">
                {featured.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] text-t2 border border-border-base rounded px-2.5 py-1 bg-bg-alt"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-1">
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => play('pop')}
                    className="flex items-center gap-1.5 px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-all duration-200"
                  >
                    Live <HiArrowTopRightOnSquare className="text-xs" />
                  </a>
                )}
                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => play('pop')}
                    className="flex items-center gap-1.5 px-4 py-2 bg-transparent text-t1 text-sm font-medium rounded-lg border border-border-mid hover:border-accent hover:bg-accent-dim transition-all duration-200 dark:bg-bg-card dark:backdrop-blur-xl"
                  >
                    GitHub <HiArrowRight className="text-xs" />
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT — MEDIA */}
            <div className="min-h-[260px] lg:min-h-full bg-bg-alt border-t lg:border-t-0 lg:border-l border-border-base overflow-hidden relative">
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
                <div className="w-full h-full min-h-[260px] flex flex-col items-center justify-center gap-3 text-t3 font-mono text-xs">
                  <div className="w-12 h-12 rounded-full border border-border-mid bg-accent-dim flex items-center justify-center text-lg">
                    <HiPlay className="text-lg text-accent" />
                  </div>
                  <span>add screen recording</span>
                  <span className="text-[10px]">15–20s · mp4 · muted loop</span>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* GRID CARDS */}
        {grid.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {grid.map((project, index) => (
              <motion.div
                key={project._id}
                className="bg-white dark:bg-bg-card dark:backdrop-blur-[25px] border border-border-base rounded-xl p-6 flex flex-col gap-4 cursor-default transition-all duration-200 hover:border-accent hover:shadow-md hover:-translate-y-1 dark:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.06),0_4px_20px_rgba(0,0,0,0.3)] dark:hover:[box-shadow:0_0_25px_rgba(122,21,37,0.1),inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.4)] dark:hover:[transform:translateY(-3px)_scale(1.005)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* SCREENSHOT */}
                {project.image && (
                  <div className="w-full h-40 rounded-lg overflow-hidden border border-border-base bg-bg-alt">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <h3 className="font-head font-bold text-[18px] text-t1 leading-tight">
                  {project.title}
                </h3>

                <p className="text-sm text-t2 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex gap-1.5 flex-wrap">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-t2 border border-border-base rounded px-2.5 py-1 bg-bg-alt"
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
                      onClick={() => play('pop')}
                      className="flex items-center gap-1 px-3 py-1.5 bg-accent text-white text-xs font-semibold rounded-lg hover:bg-accent-hover transition-all duration-200"
                    >
                      Live <HiArrowTopRightOnSquare className="text-xs" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => play('pop')}
                      className="flex items-center gap-1 px-3 py-1.5 bg-transparent text-t1 text-xs font-medium rounded-lg border border-border-base hover:border-accent hover:bg-accent-dim transition-all duration-200 dark:bg-bg-card"
                    >
                      GitHub <HiArrowRight className="text-xs" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
