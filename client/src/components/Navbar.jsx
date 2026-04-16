import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'
import { useSound } from '../hooks/useSound'
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiSun, HiMoon } from 'react-icons/hi2'

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { play } = useSound()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [soundOn, setSoundOn] = useState(
    () => localStorage.getItem('sound') === 'true'
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSound = () => {
    const next = !soundOn
    setSoundOn(next)
    localStorage.setItem('sound', next.toString())
    if (next) play('chime')
  }

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  const navBg =
    theme === 'dark'
      ? 'bg-[rgba(17,17,17,0.75)] backdrop-blur-2xl border-b border-[rgba(255,255,255,0.08)]'
      : `bg-[#FAFAFA]/90 backdrop-blur-md ${scrolled ? 'border-b border-[rgba(0,0,0,0.08)]' : 'border-b border-transparent'}`

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 transition-all duration-300 ${navBg}`}
      >
        <a
          href="#"
          className="font-mono text-[19px] font-medium text-[#0A0A0A] dark:text-[#F0EEE8] tracking-tight"
        >
          yachna
          <span className="text-[#710014] dark:text-[#FF6D1F] dark:[text-shadow:0_0_20px_rgba(255,109,31,0.4)]">
            .
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => play('tick')}
              className="text-sm font-medium text-[#4A4244] dark:text-[#958E85] hover:text-[#0A0A0A] dark:hover:text-[#F0EEE8] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          {/* THEME TOGGLE */}
          <div className="flex items-center gap-1 bg-[#F5F0F1] dark:bg-[rgba(255,255,255,0.05)] dark:backdrop-blur-xl border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-full px-1.5 py-1">
            <button
              onClick={() => {
                theme === 'dark' && toggleTheme()
                play('click')
              }}
              className={`text-xs px-3 py-1 rounded-full transition-all duration-200 font-mono flex items-center ${
                theme === 'light'
                  ? 'bg-white text-[#0A0A0A] shadow-sm'
                  : 'text-[#4A4540]'
              }`}
            >
              <HiSun className="text-sm" />
            </button>
            <button
              onClick={() => {
                theme === 'light' && toggleTheme()
                play('click')
              }}
              className={`text-xs px-3 py-1 rounded-full transition-all duration-200 font-mono flex items-center ${
                theme === 'dark'
                  ? 'bg-[rgba(255,255,255,0.08)] text-[#F0EEE8] shadow-sm'
                  : 'text-[#8A8082]'
              }`}
            >
              <HiMoon className="text-sm" />
            </button>
          </div>

          {/* SOUND TOGGLE */}
          <button
            onClick={toggleSound}
            className={`w-9 h-9 flex items-center justify-center border rounded-lg text-sm transition-all duration-200 ${
              soundOn
                ? 'border-[#710014] dark:border-[#FF6D1F] text-[#710014] dark:text-[#FF6D1F] bg-[rgba(113,0,20,0.05)] dark:bg-[rgba(255,109,31,0.08)]'
                : 'border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] text-[#4A4244] dark:text-[#958E85] hover:border-[#710014] dark:hover:border-[#FF6D1F] dark:bg-[rgba(255,255,255,0.03)] dark:backdrop-blur-xl'
            }`}
          >
            {soundOn ? (
              <HiSpeakerWave className="text-base" />
            ) : (
              <HiSpeakerXMark className="text-base" />
            )}
          </button>

          {/* HIRE ME */}
          <a
            href="#contact"
            onClick={() => play('pop')}
            className="flex items-center h-9 px-4 bg-[#710014] dark:bg-[#FF6D1F] text-white text-sm font-semibold rounded-lg hover:bg-[#5A0010] dark:hover:bg-[#FF8C4A] transition-all duration-200 dark:[box-shadow:0_0_20px_rgba(255,109,31,0.3)] dark:hover:[box-shadow:0_0_30px_rgba(255,109,31,0.5)]"
          >
            Hire me
          </a>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] dark:bg-[rgba(255,255,255,0.04)] dark:backdrop-blur-xl rounded-lg text-xs text-[#0A0A0A] dark:text-[#F0EEE8]"
          >
            {theme === 'light' ? (
              <HiMoon className="text-sm" />
            ) : (
              <HiSun className="text-sm" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex items-center justify-center border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] dark:bg-[rgba(255,255,255,0.04)] dark:backdrop-blur-xl rounded-lg text-sm font-bold text-[#0A0A0A] dark:text-[#F0EEE8]"
          >
            {menuOpen ? (
              <HiX className="text-lg" />
            ) : (
              <HiMenu className="text-lg" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAFAFA] dark:bg-[rgba(17,17,17,0.95)] dark:backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setMenuOpen(false)
                play('tick')
              }}
              className="text-3xl font-head font-bold text-[#0A0A0A] dark:text-[#F0EEE8] hover:text-[#710014] dark:hover:text-[#FF6D1F] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              setMenuOpen(false)
              play('pop')
            }}
            className="mt-4 px-8 py-3 bg-[#710014] dark:bg-[#FF6D1F] text-white font-semibold rounded-lg text-lg dark:[box-shadow:0_0_25px_rgba(255,109,31,0.3)]"
          >
            Hire me
          </a>
        </div>
      )}
    </>
  )
}

export default Navbar
