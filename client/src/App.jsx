import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProofBar from './components/ProofBar'
import About from './components/About'

function App() {
  const { theme } = useTheme()

  return (
    <div className={theme}>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#1E1208] text-[#0A0A0A] dark:text-[#F5EDE8] transition-colors duration-300">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <ProofBar />
          <About />
        </main>
      </div>
    </div>
  )
}

export default App
