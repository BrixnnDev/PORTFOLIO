import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiDiscord } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="glass border-t border-glass-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <a href="#inicio" className="text-xl font-bold">
          <span className="text-white-text">Brixnn</span>
          <span className="text-gradient">Dev</span>
        </a>

        <p className="text-gray-text text-sm">
          &copy; {new Date().getFullYear()} BrixnnDev. Todos los derechos reservados.
        </p>

        <div className="flex gap-3">
          {[
            { icon: FaGithub, href: 'https://github.com/BrixnnDev' },
            { icon: FaLinkedin, href: '#' },
            { icon: SiDiscord, href: '#' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="w-10 h-10 glass glass-hover rounded-xl flex items-center justify-center text-gray-text hover:text-primary transition-all"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
