import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProofBar from './components/ProofBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'

function App() {
  const { theme } = useTheme()

  return (
    <div className={theme}>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#1E1208] text-[#0A0A0A] dark:text-[#F5EDE8] transition-colors duration-300">
        <CommandPalette />
        <Navbar />
        <main className="pt-16">
          <Hero />
          <ProofBar />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
