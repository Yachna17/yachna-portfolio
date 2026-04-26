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
      <div className="bg-admin-bg-card border border-admin-border rounded-xl p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-admin-t2 mb-4">
          Currently → text
        </div>
        <p className="font-mono text-xs text-admin-t3 mb-4">
          This shows in the About section as "currently → [your text]"
        </p>
        <form onSubmit={handleSave} className="flex flex-col gap-3">
          <input
            value={currently}
            onChange={(e) => setCurrently(e.target.value)}
            placeholder="e.g. Building this portfolio"
            className="bg-admin-bg border border-admin-border rounded-lg px-3 py-2 text-sm text-admin-t1 placeholder-admin-t3 outline-none focus:border-admin-accent font-mono transition-colors"
          />
          {saved && (
            <p className="font-mono text-xs text-admin-success">Saved!</p>
          )}
          <button
            type="submit"
            className="w-full py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors font-mono"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminAbout
