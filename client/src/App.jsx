import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'

function App() {
  const { theme } = useTheme()

  return (
    <div className={theme}>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#1E1208] text-[#0A0A0A] dark:text-[#F5EDE8] transition-colors duration-300">
        <Navbar />
        <main className="pt-16">
          <h1 className="text-4xl font-head font-bold p-8">yachna portfolio</h1>
        </main>
      </div>
    </div>
  )
}

export default App
