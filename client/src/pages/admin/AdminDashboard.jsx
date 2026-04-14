import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import adminApi from '../../utils/adminApi'
import AdminSkills from './AdminSkills'
import AdminProjects from './AdminProjects'
import AdminCertifications from './AdminCertifications'
import AdminAbout from './AdminAbout'

const tabs = ['Skills', 'Projects', 'Certifications', 'About']

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Skills')
  const [session, setSession] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    adminApi
      .get('/api/admin/status')
      .then(() => setSession(true))
      .catch(() => navigate('/yachna-admin'))
  }, [navigate])

  const handleLogout = async () => {
    await adminApi.post('/api/admin/logout')
    navigate('/yachna-admin')
  }

  if (!session) return null

  return (
    <div className="min-h-screen bg-[#04000A] text-[#C4A8F0]">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-3 bg-[#030008] border-b border-[#1A0030]">
        <div className="font-mono text-sm text-[#9B5CF6]">
          ⬡ admin · yachna.cv
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono text-xs px-3 py-1.5 rounded transition-all duration-150 ${
                  activeTab === tab
                    ? 'bg-[rgba(155,92,246,0.15)] text-[#9B5CF6] border border-[rgba(155,92,246,0.3)]'
                    : 'text-[#5A4080] hover:text-[#9B5CF6]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button
            onClick={handleLogout}
            className="font-mono text-xs text-[#3A2060] hover:text-red-400 transition-colors duration-200"
          >
            logout
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 max-w-4xl mx-auto">
        {activeTab === 'Skills' && <AdminSkills />}
        {activeTab === 'Projects' && <AdminProjects />}
        {activeTab === 'Certifications' && <AdminCertifications />}
        {activeTab === 'About' && <AdminAbout />}
      </div>
    </div>
  )
}

export default AdminDashboard
