import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import api from '../utils/api'

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
  {
    _id: '16',
    name: 'Scrum',
    icon: 'SCR',
    category: 'Methodologies',
  },
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
  {
    _id: '20',
    name: 'Tableau',
    icon: 'Tb',
    category: 'Other',
  },
  {
    _id: '21',
    name: 'Cisco Packet Tracer',
    icon: 'CPT',
    category: 'Other',
  },
]

const learningNext = ['DSA', 'Next.js', 'AWS']

function SkillIcon({ icon, ReactIcon }) {
  if (ReactIcon) {
    return <ReactIcon className="text-lg" />
  }
  const isDevicon = icon.startsWith('devicon')
  if (isDevicon) {
    return <i className={`${icon} text-lg`} />
  }
  return (
    <span className="text-xs font-bold text-[#4A4244] dark:text-[#C4A898]">
      {icon}
    </span>
  )
}

function Skills() {
  const [skills, setSkills] = useState(fallbackSkills)
  const [openCategory, setOpenCategory] = useState('Frontend')

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
    <section id="skills" className="py-28 px-6 bg-[#FAFAFA] dark:bg-[#1E1208]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="font-mono text-xs text-[#710014] dark:text-[#C5002A] uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          // skills
        </motion.p>

        <motion.h2
          className="font-head font-bold text-[#0A0A0A] dark:text-[#F5EDE8] tracking-tight mb-12"
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
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A8082] dark:text-[#8A6458] pb-2 border-b border-[#E4DFE0] dark:border-[#3D2416] mb-3">
                {category}
              </div>
              <div className="flex flex-col gap-1.5">
                {getSkillsByCategory(category).map((skill, i) => (
                  <motion.div
                    key={skill._id}
                    className="flex items-center gap-2.5 px-3 py-2.5 bg-white dark:bg-[#271810] border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg text-sm font-medium text-[#0A0A0A] dark:text-[#F5EDE8] cursor-default transition-all duration-200 hover:border-[#710014] dark:hover:border-[#C5002A] hover:bg-[#FDF5F6] dark:hover:bg-[#2A1010]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.08 + i * 0.04,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 rounded bg-[#F7F4F4] dark:bg-[#311E14] flex items-center justify-center flex-shrink-0">
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
              className="border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenCategory(openCategory === category ? null : category)
                }
                className={`w-full flex items-center justify-between px-4 py-3 font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                  openCategory === category
                    ? 'bg-[#FDF5F6] dark:bg-[#2A1010] text-[#710014] dark:text-[#C5002A]'
                    : 'bg-white dark:bg-[#271810] text-[#4A4244] dark:text-[#C4A898]'
                }`}
              >
                {category}
                <span>{openCategory === category ? '▲' : '▼'}</span>
              </button>
              {openCategory === category && (
                <div className="p-3 bg-[#FAFAFA] dark:bg-[#1E1208] flex flex-wrap gap-2">
                  {getSkillsByCategory(category).map((skill) => (
                    <div
                      key={skill._id}
                      className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#271810] border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg text-xs font-medium text-[#0A0A0A] dark:text-[#F5EDE8]"
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
          className="flex items-center gap-4 flex-wrap p-4 bg-white dark:bg-[#271810] border border-[#E4DFE0] dark:border-[#3D2416] rounded-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8082] dark:text-[#8A6458] whitespace-nowrap">
            learning next →
          </span>
          <div className="flex gap-2 flex-wrap">
            {learningNext.map((item) => (
              <span
                key={item}
                className="font-mono text-xs text-[#4A4244] dark:text-[#C4A898] border border-dashed border-[#CFC8C9] dark:border-[#50301E] rounded px-3 py-1"
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
