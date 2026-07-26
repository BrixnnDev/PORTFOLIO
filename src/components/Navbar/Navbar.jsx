import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Mi', href: '#sobre-mi' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
]

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
        <a href="#inicio" className="text-2xl font-bold">
          <span className="text-white-text">Port</span>
          <span className="text-gradient">Folio</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-gray-text hover:text-white-text transition-colors font-medium rounded-lg hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-4 px-5 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all hover:shadow-red-glow text-sm"
          >
            Contratame
          </a>
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
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 text-gray-text hover:text-white-text hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
