import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={theme}>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#1E1208] text-[#0A0A0A] dark:text-[#F5EDE8] transition-colors duration-300">
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg border border-[#E4DFE0] dark:border-[#3D2416] bg-white dark:bg-[#271810] text-sm font-mono"
        >
          {theme === 'light' ? '☾ dark' : '☀ light'}
        </button>
        <h1 className="text-4xl font-head font-bold p-8">yachna portfolio</h1>
      </div>
    </div>
  )
}

export default App
