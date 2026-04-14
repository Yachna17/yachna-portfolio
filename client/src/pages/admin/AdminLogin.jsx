import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import adminApi from '../../utils/adminApi'

function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await adminApi.post('/api/admin/login', { password })
      navigate('/yachna-admin/dashboard')
    } catch {
      setError('Invalid password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0005] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* LOGO */}
        <div className="text-center mb-8">
          <div className="font-mono text-lg text-[#C4A8F0] mb-1">
            ⬡ admin panel
          </div>
          <div className="font-mono text-xs text-[#5A4080]">yachna.cv</div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#060010] border border-[#200038] rounded-xl p-6 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#5A4080]">
              password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="bg-[#0A0015] border border-[#200038] rounded-lg px-4 py-3 text-sm text-[#C4A8F0] placeholder-[#3A2060] outline-none focus:border-[#9B5CF6] transition-colors duration-200 font-mono"
              autoFocus
            />
          </div>

          {error && <p className="font-mono text-xs text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 bg-[#710014] text-white text-sm font-semibold rounded-lg hover:bg-[#5A0010] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-mono"
          >
            {loading ? 'Logging in...' : 'Login →'}
          </button>
        </form>

        <p className="text-center font-mono text-[10px] text-[#3A2060] mt-4">
          This page is not publicly linked.
        </p>
      </div>
    </div>
  )
}

export default AdminLogin
