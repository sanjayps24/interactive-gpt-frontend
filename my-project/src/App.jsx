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
          <button className="px-5 py-2 bg-white/90 text-black rounded-full text-sm font-semibold hover:bg-white transition shadow-lg">
            Sign In
          </button>
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