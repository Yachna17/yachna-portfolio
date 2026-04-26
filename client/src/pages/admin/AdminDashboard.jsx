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
    <div className="min-h-screen bg-admin-bg text-admin-t1">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-3 bg-admin-bg-card border-b border-admin-border">
        <div className="font-mono text-sm text-admin-accent">
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
                    ? 'bg-admin-accent-dim text-admin-accent border border-admin-accent-dim'
                    : 'text-admin-t2 hover:text-admin-accent'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button
            onClick={handleLogout}
            className="font-mono text-xs text-admin-t3 hover:text-admin-danger transition-colors duration-200"
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
