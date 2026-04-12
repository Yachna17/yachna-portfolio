import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-10 h-16
        bg-[#FAFAFA]/90 dark:bg-[#1E1208]/90
        backdrop-blur-md
        transition-all duration-300
        ${
          scrolled
            ? 'border-b border-[#E4DFE0] dark:border-[#3D2416]'
            : 'border-b border-transparent'
        }
      `}
      >
        {/* LOGO */}
        <a
          href="#"
          className="font-mono text-[19px] font-medium text-[#0A0A0A] dark:text-[#F5EDE8] tracking-tight"
        >
          yachna<span className="text-[#710014] dark:text-[#C5002A]">.</span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#4A4244] dark:text-[#C4A898] hover:text-[#0A0A0A] dark:hover:text-[#F5EDE8] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-2">
          {/* THEME TOGGLE */}
          <div className="flex items-center gap-1 bg-[#F5F0F1] dark:bg-[#311E14] border border-[#E4DFE0] dark:border-[#3D2416] rounded-full px-1.5 py-1">
            <button
              onClick={() => theme === 'dark' && toggleTheme()}
              className={`text-xs px-3 py-1 rounded-full transition-all duration-200 font-mono ${
                theme === 'light'
                  ? 'bg-white dark:bg-[#271810] text-[#0A0A0A] shadow-sm'
                  : 'text-[#8A6458]'
              }`}
            >
              ☀
            </button>
            <button
              onClick={() => theme === 'light' && toggleTheme()}
              className={`text-xs px-3 py-1 rounded-full transition-all duration-200 font-mono ${
                theme === 'dark'
                  ? 'bg-[#271810] text-[#F5EDE8] shadow-sm'
                  : 'text-[#8A8082]'
              }`}
            >
              ☾
            </button>
          </div>

          {/* SOUND TOGGLE */}
          <button className="w-9 h-9 flex items-center justify-center border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg text-sm text-[#4A4244] dark:text-[#C4A898] hover:border-[#CFC8C9] dark:hover:border-[#50301E] hover:bg-[#F5F0F1] dark:hover:bg-[#311E14] transition-all duration-200">
            🔈
          </button>

          {/* HIRE ME */}
          <a
            href="#contact"
            className="h-9 px-4 bg-[#710014] dark:bg-[#C5002A] text-white text-sm font-semibold rounded-lg hover:bg-[#5A0010] dark:hover:bg-[#E0002F] transition-colors duration-200"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            Hire me
          </a>
        </div>

        {/* MOBILE RIGHT */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg text-xs"
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex items-center justify-center border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg text-sm font-bold text-[#0A0A0A] dark:text-[#F5EDE8]"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAFAFA] dark:bg-[#1E1208] flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-head font-bold text-[#0A0A0A] dark:text-[#F5EDE8] hover:text-[#710014] dark:hover:text-[#C5002A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-[#710014] dark:bg-[#C5002A] text-white font-semibold rounded-lg text-lg"
          >
            Hire me
          </a>
        </div>
      )}
    </>
  )
}

export default Navbar
