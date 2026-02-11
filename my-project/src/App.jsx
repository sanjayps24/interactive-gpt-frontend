import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full bg-transparent text-gray-900">
        <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-md bg-white/30 border-b border-white/20 sticky top-0 z-10">
          <div className="flex items-center gap-6">
            <Link to="/" className="font-bold text-xl tracking-tight text-white drop-shadow-md">ChatGPT</Link>
            <div className="hidden md:flex items-center gap-4">
              <Link to="/" className="text-white/80 hover:text-white transition drop-shadow-sm">Home</Link>
              <Link to="/about" className="text-white/80 hover:text-white transition drop-shadow-sm">About</Link>
              <Link to="/contact" className="text-white/80 hover:text-white transition drop-shadow-sm">Contact</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-2xl text-sm font-bold hover:bg-white/20 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.3)] transition-all shadow-2xl group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Log In
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-700 text-white rounded-2xl text-sm font-black hover:scale-105 transition-all shadow-2xl border border-white/20 active:scale-95">
              Sign Up
            </button>
          </div>
        </nav>

        <main className="flex-1 flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App