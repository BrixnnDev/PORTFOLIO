import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { name: 'Inicio', target: 'inicio' },
  { name: 'Sobre Mi', target: 'sobre-mi' },
  { name: 'Habilidades', target: 'habilidades' },
  { name: 'Proyectos', target: 'proyectos' },
  { name: 'Contacto', target: 'contacto' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-lg shadow-primary/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => scrollTo('inicio')} className="text-2xl font-bold">
          <span className="text-white-text">Port</span>
          <span className="text-gradient">Folio</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.target)}
              className="px-4 py-2 text-gray-text hover:text-white-text transition-colors font-medium rounded-lg hover:bg-white/5"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contacto')}
            className="ml-4 px-5 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all hover:shadow-red-glow text-sm"
          >
            Contratame
          </button>
        </div>

        <button
          className="md:hidden text-2xl text-light-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-2xl overflow-hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => { scrollTo(link.target); setIsOpen(false) }}
              className="block w-full text-left px-6 py-4 text-gray-text hover:text-white-text hover:bg-white/5 transition-all"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
