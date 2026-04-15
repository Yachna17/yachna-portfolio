import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'
import { useSound } from '../hooks/useSound'
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiSun, HiMoon } from 'react-icons/hi2'

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

  const { play } = useSound()
  const [soundOn, setSoundOn] = useState(
    () => localStorage.getItem('sound') === 'true'
  )

  const toggleSound = () => {
    const next = !soundOn
    setSoundOn(next)
    localStorage.setItem('sound', next.toString())
    if (next) play('chime')
  }

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
              onMouseEnter={() => play('tick')}
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
              onClick={() => {
                theme === 'dark' && toggleTheme()
                play('click')
              }}
              className={`text-xs px-3 py-1 rounded-full transition-all duration-200 font-mono ${
                theme === 'light'
                  ? 'bg-white dark:bg-[#271810] text-[#0A0A0A] shadow-sm'
                  : 'text-[#8A6458]'
              }`}
            >
              <HiSun className="text-sm" />
            </button>
            <button
              onClick={() => {
                theme === 'light' && toggleTheme()
                play('click')
              }}
              className={`text-xs px-3 py-1 rounded-full transition-all duration-200 font-mono ${
                theme === 'dark'
                  ? 'bg-[#271810] text-[#F5EDE8] shadow-sm'
                  : 'text-[#8A8082]'
              }`}
            >
              <HiMoon className="text-sm" />
            </button>
          </div>

          {/* SOUND TOGGLE */}
          <button
            onClick={toggleSound}
            title={soundOn ? 'Sound on' : 'Sound off'}
            className={`w-9 h-9 flex items-center justify-center border rounded-lg text-sm transition-all duration-200 ${
              soundOn
                ? 'border-[#710014] dark:border-[#C5002A] text-[#710014] dark:text-[#C5002A] bg-[#FDF5F6] dark:bg-[#2A1010]'
                : 'border-[#E4DFE0] dark:border-[#3D2416] text-[#4A4244] dark:text-[#C4A898] hover:border-[#CFC8C9] dark:hover:border-[#50301E] hover:bg-[#F5F0F1] dark:hover:bg-[#311E14]'
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
            {theme === 'light' ? (
              <HiMoon className="text-sm" />
            ) : (
              <HiSun className="text-sm" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex items-center justify-center border border-[#E4DFE0] dark:border-[#3D2416] rounded-lg text-sm font-bold text-[#0A0A0A] dark:text-[#F5EDE8]"
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
        <div className="fixed inset-0 z-40 bg-[#FAFAFA] dark:bg-[#1E1208] flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setMenuOpen(false)
                play('tick')
              }}
              className="text-3xl font-head font-bold text-[#0A0A0A] dark:text-[#F5EDE8] hover:text-[#710014] dark:hover:text-[#C5002A] transition-colors"
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
