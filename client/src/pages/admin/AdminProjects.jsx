import { useEffect, useState } from 'react'
import adminApi from '../../utils/adminApi'

function AdminProjects() {
  const [projects, setProjects] = useState([])
  const [form, setForm] = useState({
    title: '',
    description: '',
    techStack: '',
    liveUrl: '',
    githubUrl: '',
    imageurl: '',
    featured: false,
  })
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const fetchProjects = async () => {
    const res = await adminApi.get('/api/projects')
    setProjects(res.data.data)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleAdd = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = {
        ...form,
        image: form.imageUrl,
        techStack: form.techStack
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
      }
      await adminApi.post('/api/admin/projects', payload)
      setForm({
        title: '',
        description: '',
        techStack: '',
        liveUrl: '',
        githubUrl: '',
        featured: false,
      })
      setMsg('Project added')
      fetchProjects()
    } catch {
      setMsg('Error adding project')
    } finally {
      setLoading(false)
      setTimeout(() => setMsg(''), 2000)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this project?')) return
    await adminApi.delete(`/api/admin/projects/${id}`)
    fetchProjects()
  }

  const toggleFeatured = async (project) => {
    await adminApi.put(`/api/admin/projects/${project._id}`, {
      ...project,
      featured: !project.featured,
    })
    fetchProjects()
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[rgba(255,255,255,0.02)] border border-[#1A0030] rounded-xl p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#5A4080] mb-4">
          Projects ({projects.length})
        </div>
        <div className="flex flex-col gap-2">
          {projects.map((project) => (
            <div
              key={project._id}
              className="flex items-center justify-between py-2 border-b border-[rgba(26,0,48,0.5)] last:border-b-0"
            >
              <div>
                <span className="text-sm text-[#C4A8F0]">{project.title}</span>
                {project.featured && (
                  <span className="ml-2 font-mono text-[10px] text-[#710014] border border-[rgba(197,0,42,0.3)] rounded px-1.5 py-0.5">
                    featured
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleFeatured(project)}
                  className="font-mono text-[10px] text-[#9B5CF6] border border-[rgba(155,92,246,0.25)] rounded px-2 py-0.5 hover:bg-[rgba(155,92,246,0.1)] transition-colors"
                >
                  {project.featured ? 'unfeature' : 'feature'}
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="font-mono text-[10px] text-red-400 border border-[rgba(248,113,113,0.25)] rounded px-2 py-0.5 hover:bg-[rgba(248,113,113,0.1)] transition-colors"
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.02)] border border-[#1A0030] rounded-xl p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#5A4080] mb-4">
          Add project
        </div>
        <form onSubmit={handleAdd} className="flex flex-col gap-3">
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Project title"
            required
            className="bg-[rgba(255,255,255,0.03)] border border-[#1A0030] rounded-lg px-3 py-2 text-sm text-[#C4A8F0] placeholder-[#3A2060] outline-none focus:border-[#9B5CF6] font-mono transition-colors"
          />
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Description"
            rows={3}
            required
            className="bg-[rgba(255,255,255,0.03)] border border-[#1A0030] rounded-lg px-3 py-2 text-sm text-[#C4A8F0] placeholder-[#3A2060] outline-none focus:border-[#9B5CF6] font-mono transition-colors resize-none"
          />
          <input
            value={form.techStack}
            onChange={(e) => setForm({ ...form, techStack: e.target.value })}
            placeholder="Tech stack (comma separated) e.g. React, Node.js"
            className="bg-[rgba(255,255,255,0.03)] border border-[#1A0030] rounded-lg px-3 py-2 text-sm text-[#C4A8F0] placeholder-[#3A2060] outline-none focus:border-[#9B5CF6] font-mono transition-colors"
          />
          <input
            value={form.liveUrl}
            onChange={(e) => setForm({ ...form, liveUrl: e.target.value })}
            placeholder="Live URL (optional)"
            className="bg-[rgba(255,255,255,0.03)] border border-[#1A0030] rounded-lg px-3 py-2 text-sm text-[#C4A8F0] placeholder-[#3A2060] outline-none focus:border-[#9B5CF6] font-mono transition-colors"
          />
          <input
            value={form.githubUrl}
            onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
            placeholder="GitHub URL (optional)"
            className="bg-[rgba(255,255,255,0.03)] border border-[#1A0030] rounded-lg px-3 py-2 text-sm text-[#C4A8F0] placeholder-[#3A2060] outline-none focus:border-[#9B5CF6] font-mono transition-colors"
          />
          <input
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            placeholder="Image URL (optional) — paste Cloudinary or imgur link"
            className="bg-[rgba(255,255,255,0.03)] border border-[#1A0030] rounded-lg px-3 py-2 text-sm text-[#C4A8F0] placeholder-[#3A2060] outline-none focus:border-[#9B5CF6] font-mono transition-colors"
          />
          <label className="flex items-center gap-2 font-mono text-xs text-[#C4A8F0] cursor-pointer">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              className="w-4 h-4"
            />
            Featured project (shows full width)
          </label>
          {msg && <p className="font-mono text-xs text-green-400">{msg}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[#710014] text-white text-sm font-semibold rounded-lg hover:bg-[#5A0010] transition-colors disabled:opacity-50 font-mono"
          >
            {loading ? 'Adding...' : '+ Add project'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminProjects
