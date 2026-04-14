import { useEffect, useState } from 'react'
import adminApi from '../../utils/adminApi'

function AdminAbout() {
  const [currently, setCurrently] = useState(
    'Building this portfolio (MERN + Admin Panel)'
  )
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    adminApi
      .get('/api/admin/currently')
      .then((res) => setCurrently(res.data.data || ''))
      .catch(() => {})
  }, [])

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      await adminApi.post('/api/admin/currently', { currently })
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch {}
  }

  return (
    <div className="max-w-lg">
      <div className="bg-[rgba(255,255,255,0.02)] border border-[#1A0030] rounded-xl p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#5A4080] mb-4">
          Currently → text
        </div>
        <p className="font-mono text-xs text-[#3A2060] mb-4">
          This shows in the About section as "currently → [your text]"
        </p>
        <form onSubmit={handleSave} className="flex flex-col gap-3">
          <input
            value={currently}
            onChange={(e) => setCurrently(e.target.value)}
            placeholder="e.g. Building this portfolio"
            className="bg-[rgba(255,255,255,0.03)] border border-[#1A0030] rounded-lg px-3 py-2 text-sm text-[#C4A8F0] placeholder-[#3A2060] outline-none focus:border-[#9B5CF6] font-mono transition-colors"
          />
          {saved && <p className="font-mono text-xs text-green-400">Saved!</p>}
          <button
            type="submit"
            className="w-full py-2.5 bg-[#710014] text-white text-sm font-semibold rounded-lg hover:bg-[#5A0010] transition-colors font-mono"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminAbout
