import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import api from '../utils/api'

const fallbackEducation = [
  {
    _id: '1',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Chandigarh University',
    location: 'Mohali, Punjab',
    year: '2024 — 2026',
    coursework: [
      'Web Programming',
      'DBMS',
      'Computer Networks',
      'IoT',
      'Mobile App Dev',
      'Agile',
    ],
    type: 'education',
  },
  {
    _id: '2',
    degree: 'BSc (H) Computer Science',
    institution: 'Delhi University',
    location: 'Delhi',
    year: '2021 — 2024',
    coursework: [],
    type: 'education',
  },
]

const fallbackCertifications = [
  {
    _id: 'c1',
    name: 'Your next certification',
    issuer: 'Issuer · Year',
    credentialUrl: '',
    type: 'certification',
  },
]

function Education() {
  const [certifications, setCertifications] = useState(fallbackCertifications)

  useEffect(() => {
    api
      .get('/api/certifications')
      .then((res) => {
        if (res.data.success && res.data.data.length > 0) {
          setCertifications(res.data.data)
        }
      })
      .catch(() => {})
  }, [])

  const timelineItems = [
    ...fallbackEducation,
    ...certifications.map((c) => ({ ...c, type: 'certification' })),
  ]

  return (
    <section
      id="education"
      className="py-28 px-6 bg-[#FAFAFA] dark:bg-[#1E1208]"
    >
      <div className="max-w-3xl mx-auto">
        {/* EYEBROW */}
        <motion.p
          className="font-mono text-xs text-[#710014] dark:text-[#C5002A] uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          // education
        </motion.p>

        {/* HEADING */}
        <motion.h2
          className="font-head font-bold text-[#0A0A0A] dark:text-[#F5EDE8] tracking-tight mb-16"
          style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Where I&apos;ve learned.
        </motion.h2>

        {/* TIMELINE */}
        <div className="relative pl-8">
          {/* VERTICAL LINE */}
          <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-[#710014] dark:from-[#C5002A] to-transparent" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={item._id}
              className="relative mb-10 last:mb-0"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* DOT */}
              <div
                className={`absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 border-[#FAFAFA] dark:border-[#1E1208] ${
                  item.type === 'certification'
                    ? 'bg-[#D97706]'
                    : 'bg-[#710014] dark:bg-[#C5002A]'
                }`}
                style={{
                  boxShadow:
                    item.type === 'certification'
                      ? '0 0 0 3px rgba(217,119,6,0.2)'
                      : '0 0 0 3px rgba(113,0,20,0.2)',
                }}
              />

              {/* YEAR */}
              <div
                className={`font-mono text-xs mb-2 font-medium ${
                  item.type === 'certification'
                    ? 'text-[#D97706]'
                    : 'text-[#710014] dark:text-[#C5002A]'
                }`}
              >
                {item.type === 'certification' ? '🏆 certification' : item.year}
              </div>

              {/* CARD */}
              <div
                className={`bg-white dark:bg-[#271810] border rounded-xl p-5 ${
                  item.type === 'certification'
                    ? 'border-[#D97706]/20 dark:border-[#D97706]/20'
                    : 'border-[#E4DFE0] dark:border-[#3D2416]'
                }`}
              >
                {item.type === 'certification' && (
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#D97706] border border-[#D97706]/25 rounded px-2 py-0.5 bg-[#D97706]/05 mb-3">
                    🏆 certification
                  </div>
                )}

                <h3 className="font-head font-bold text-[17px] text-[#0A0A0A] dark:text-[#F5EDE8] mb-1">
                  {item.type === 'certification' ? item.name : item.degree}
                </h3>

                <p className="text-sm text-[#4A4244] dark:text-[#C4A898] mb-3">
                  {item.type === 'certification'
                    ? item.issuer
                    : `${item.institution} · ${item.location}`}
                </p>

                {item.type === 'education' && item.coursework?.length > 0 && (
                  <div className="flex gap-1.5 flex-wrap">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="font-mono text-[10px] text-[#4A4244] dark:text-[#C4A898] border border-[#E4DFE0] dark:border-[#3D2416] rounded px-2 py-1 bg-[#F7F4F4] dark:bg-[#1E1208]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}

                {item.type === 'certification' && item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-[#710014] dark:text-[#C5002A] hover:underline"
                  >
                    View credential ↗
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

export default Education
