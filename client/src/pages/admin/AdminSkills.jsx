import { useEffect, useState } from 'react'
import adminApi from '../../utils/adminApi'

const categories = [
  'Frontend',
  'Backend',
  'Database',
  'Tools',
  'Methodologies',
  'Other',
]

function AdminSkills() {
  const [skills, setSkills] = useState([])
  const [form, setForm] = useState({ name: '', icon: '', category: 'Frontend' })
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const fetchSkills = async () => {
    const res = await adminApi.get('/api/skills')
    setSkills(res.data.data)
  }

  useEffect(() => {
    fetchSkills()
  }, [])

  const handleAdd = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await adminApi.post('/api/admin/skills', form)
      setForm({ name: '', icon: '', category: 'Frontend' })
      setMsg('Skill added')
      fetchSkills()
    } catch {
      setMsg('Error adding skill')
    } finally {
      setLoading(false)
      setTimeout(() => setMsg(''), 2000)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this skill?')) return
    await adminApi.delete(`/api/admin/skills/${id}`)
    fetchSkills()
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* CURRENT SKILLS */}
      <div className="bg-[rgba(255,255,255,0.02)] border border-[#1A0030] rounded-xl p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#5A4080] mb-4">
          Current skills ({skills.length})
        </div>
        <div className="flex flex-col gap-1 max-h-96 overflow-y-auto">
          {skills.map((skill) => (
            <div
              key={skill._id}
              className="flex items-center justify-between py-2 border-b border-[rgba(26,0,48,0.5)] last:border-b-0"
            >
              <span className="text-sm text-[#C4A8F0]">
                {skill.name}
                <span className="text-[#5A4080] ml-2 text-xs">
                  · {skill.category}
                </span>
              </span>
              <button
                onClick={() => handleDelete(skill._id)}
                className="font-mono text-[10px] text-red-400 border border-[rgba(248,113,113,0.25)] rounded px-2 py-0.5 hover:bg-[rgba(248,113,113,0.1)] transition-colors"
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ADD SKILL */}
      <div className="bg-[rgba(255,255,255,0.02)] border border-[#1A0030] rounded-xl p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#5A4080] mb-4">
          Add skill
        </div>
        <form onSubmit={handleAdd} className="flex flex-col gap-3">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Skill name e.g. Docker"
            required
            className="bg-[rgba(255,255,255,0.03)] border border-[#1A0030] rounded-lg px-3 py-2 text-sm text-[#C4A8F0] placeholder-[#3A2060] outline-none focus:border-[#9B5CF6] font-mono transition-colors"
          />
          <input
            value={form.icon}
            onChange={(e) => setForm({ ...form, icon: e.target.value })}
            placeholder="Devicon class e.g. devicon-docker-plain colored"
            required
            className="bg-[rgba(255,255,255,0.03)] border border-[#1A0030] rounded-lg px-3 py-2 text-sm text-[#C4A8F0] placeholder-[#3A2060] outline-none focus:border-[#9B5CF6] font-mono transition-colors"
          />
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="bg-[rgba(255,255,255,0.03)] border border-[#1A0030] rounded-lg px-3 py-2 text-sm text-[#C4A8F0] outline-none focus:border-[#9B5CF6] font-mono transition-colors"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {msg && <p className="font-mono text-xs text-green-400">{msg}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[#710014] text-white text-sm font-semibold rounded-lg hover:bg-[#5A0010] transition-colors disabled:opacity-50 font-mono"
          >
            {loading ? 'Adding...' : '+ Add skill'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminSkills
