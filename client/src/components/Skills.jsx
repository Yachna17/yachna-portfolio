import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import api from '../utils/api'
import { useSound } from '../hooks/useSound'
import { HiArrowRight } from 'react-icons/hi2'

const categories = [
  'Frontend',
  'Backend',
  'Database',
  'Tools',
  'Methodologies',
  'Other',
]

const fallbackSkills = [
  {
    _id: '1',
    name: 'React.js',
    icon: 'devicon-react-original colored',
    category: 'Frontend',
  },
  {
    _id: '2',
    name: 'JavaScript',
    icon: 'devicon-javascript-plain colored',
    category: 'Frontend',
  },
  {
    _id: '3',
    name: 'Tailwind CSS',
    icon: 'devicon-tailwindcss-plain colored',
    category: 'Frontend',
  },
  {
    _id: '4',
    name: 'TypeScript',
    icon: 'devicon-typescript-plain colored',
    category: 'Frontend',
  },
  {
    _id: '5',
    name: 'Node.js',
    icon: 'devicon-nodejs-plain colored',
    category: 'Backend',
  },
  {
    _id: '6',
    name: 'Express.js',
    icon: 'devicon-express-original',
    category: 'Backend',
  },
  {
    _id: '7',
    name: 'Next.js',
    icon: 'devicon-nextjs-plain',
    category: 'Backend',
  },
  {
    _id: '8',
    name: 'REST API',
    icon: 'devicon-openapi-plain colored',
    category: 'Backend',
  },
  {
    _id: '9',
    name: 'MongoDB',
    icon: 'devicon-mongodb-plain colored',
    category: 'Database',
  },
  {
    _id: '10',
    name: 'MySQL',
    icon: 'devicon-mysql-plain colored',
    category: 'Database',
  },
  {
    _id: '11',
    name: 'Git',
    icon: 'devicon-git-plain colored',
    category: 'Tools',
  },
  {
    _id: '12',
    name: 'GitHub',
    icon: 'devicon-github-original',
    category: 'Tools',
  },
  {
    _id: '13',
    name: 'Vercel',
    icon: 'devicon-vercel-original',
    category: 'Tools',
  },
  {
    _id: '14',
    name: 'Postman',
    icon: 'devicon-postman-plain colored',
    category: 'Tools',
  },
  {
    _id: '15',
    name: 'Agile',
    icon: 'devicon-jira-plain colored',
    category: 'Methodologies',
  },
  { _id: '16', name: 'Scrum', icon: 'SCR', category: 'Methodologies' },
  {
    _id: '17',
    name: 'Kotlin',
    icon: 'devicon-kotlin-plain colored',
    category: 'Other',
  },
  {
    _id: '18',
    name: 'Flutter',
    icon: 'devicon-flutter-plain colored',
    category: 'Other',
  },
  {
    _id: '19',
    name: 'Android Studio',
    icon: 'devicon-androidstudio-plain colored',
    category: 'Other',
  },
  { _id: '20', name: 'Tableau', icon: 'Tb', category: 'Other' },
  { _id: '21', name: 'Cisco Packet Tracer', icon: 'CPT', category: 'Other' },
]

const learningNext = ['DSA', 'Next.js', 'AWS']

function SkillIcon({ icon }) {
  const isDevicon = icon.startsWith('devicon')
  if (isDevicon) {
    return <i className={`${icon} text-lg`} />
  }
  return <span className="text-xs font-bold text-t2">{icon}</span>
}

function Skills() {
  const [skills, setSkills] = useState(fallbackSkills)
  const [openCategory, setOpenCategory] = useState('Frontend')
  const { play } = useSound()

  useEffect(() => {
    api
      .get('/api/skills')
      .then((res) => {
        if (res.data.success && res.data.data.length > 0) {
          setSkills(res.data.data)
        }
      })
      .catch(() => {})
  }, [])

  const getSkillsByCategory = (category) =>
    skills.filter((s) => s.category === category)

  return (
    <section id="skills" className="py-28 px-6 bg-[#FAFAFA] dark:bg-[#181818]">
      <div className="max-w-5xl mx-auto">
        {/* EYEBROW */}
        <motion.p
          className="font-mono text-xs text-accent uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          // skills
        </motion.p>

        {/* HEADING */}
        <motion.h2
          className="font-head font-bold text-t1 tracking-tight mb-12"
          style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Tools I work with.
        </motion.h2>

        {/* DESKTOP — 3x2 GRID */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              viewport={{ once: true }}
            >
              {/* CATEGORY HEADER */}
              <div className="font-mono text-[10px] uppercase tracking-widest text-t3 pb-2 border-b border-border-base mb-3">
                {category}
              </div>

              <div className="flex flex-col gap-1.5">
                {getSkillsByCategory(category).map((skill, i) => (
                  <motion.div
                    key={skill._id}
                    onMouseEnter={() => play('shimmer')}
                    className="flex items-center gap-2.5 px-3 py-2.5 bg-white dark:bg-bg-card dark:backdrop-blur-xl border border-border-base rounded-lg text-sm font-medium text-t1 cursor-default transition-all duration-200 hover:border-accent hover:bg-accent-dim dark:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.06),0_2px_8px_rgba(0,0,0,0.2)] dark:hover:[box-shadow:0_0_15px_rgba(122,21,37,0.12),inset_0_1px_0_rgba(255,255,255,0.08),0_4px_15px_rgba(0,0,0,0.3)] dark:hover:[transform:translateX(3px)]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.08 + i * 0.04,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 rounded bg-bg-alt flex items-center justify-center flex-shrink-0">
                      <SkillIcon icon={skill.icon} />
                    </div>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE — ACCORDION */}
        <div className="flex flex-col gap-2 md:hidden mb-8">
          {categories.map((category) => (
            <div
              key={category}
              className="border border-border-base rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenCategory(openCategory === category ? null : category)
                }
                className={`w-full flex items-center justify-between px-4 py-3 font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                  openCategory === category
                    ? 'bg-accent-dim text-accent'
                    : 'bg-white dark:bg-bg-card text-t2'
                }`}
              >
                {category}
                <span className="text-[10px]">
                  {openCategory === category ? '▲' : '▼'}
                </span>
              </button>
              {openCategory === category && (
                <div className="p-3 bg-bg-alt flex flex-wrap gap-2">
                  {getSkillsByCategory(category).map((skill) => (
                    <div
                      key={skill._id}
                      className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-bg-card dark:backdrop-blur-xl border border-border-base rounded-lg text-xs font-medium text-t1"
                    >
                      <SkillIcon icon={skill.icon} />
                      {skill.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* LEARNING NEXT */}
        <motion.div
          className="flex items-center gap-4 flex-wrap p-4 bg-white dark:bg-bg-card dark:backdrop-blur-xl border border-border-base rounded-xl dark:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.06)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-t3 whitespace-nowrap flex items-center gap-1">
            learning next <HiArrowRight className="text-[10px]" />
          </span>
          <div className="flex gap-2 flex-wrap">
            {learningNext.map((item) => (
              <span
                key={item}
                className="font-mono text-xs text-t2 border border-dashed border-border-mid rounded px-3 py-1 bg-bg-alt"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
