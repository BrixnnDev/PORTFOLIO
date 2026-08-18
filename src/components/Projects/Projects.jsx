import { useState, useMemo, useEffect } from 'react'
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaGlobe, FaChevronLeft, FaChevronRight, FaTimes, FaReact, FaSearch, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiMongodb, SiVite, SiFirebase } from 'react-icons/si'

const techIcons = {
  React: { icon: FaReact, color: '#61dafb' },
  HTML5: { icon: FaHtml5, color: '#e34f26' },
  CSS3: { icon: FaCss3Alt, color: '#1572b6' },
  JavaScript: { icon: FaJs, color: '#f7df1e' },
  TypeScript: { icon: SiTypescript, color: '#3178c6' },
  Tailwind: { icon: SiTailwindcss, color: '#06b6d4' },
  'Node.js': { icon: FaNodeJs, color: '#339933' },
  MongoDB: { icon: SiMongodb, color: '#47a248' },
  Vite: { icon: SiVite, color: '#646cff' },
  Git: { icon: FaGitAlt, color: '#f14e32' },
  Firebase: { icon: SiFirebase, color: '#ffca28' },
}

const projects = [
  {
    title: 'Legitix',
    description: 'Pagina de servicios de hackeo y herramientas digitales de Legitix, con acceso seguro, informacion de servicios y diseños llamativos.',
    tags: ['React', 'Tailwind', 'Vite'],
    github: '#',
    demo: 'https://legitixhack.vercel.app/',
    images: ['/images/Legitix/LEGITIX-1.png', '/images/Legitix/LEGITIX-2.png', '/images/Legitix/LEGITIX-3.png', '/images/Legitix/LEGITIX-4.png', '/images/Legitix/LEGITIX-5.png'],
    featured: true,
    info: {
      objective: 'Crear la pagina oficial de Legitix mostrando sus servicios, herramientas y acceso a la plataforma.',
      process: 'Pagina desarrollada con React y Vite, estilos con Tailwind CSS para un diseño moderno y responsivo. Se incluyeron los banners de Legitix y se desplego en Vercel.',
      features: ['Banners de Legitix', 'Servicios y herramientas', 'Acceso a la plataforma', 'Diseño responsivo'],
      duration: '1 semana',
      role: 'Frontend Developer',
    },
  },
  {
    title: 'DX7',
    description: 'Pagina oficial del clan DX7 de Free Fire, con informacion del clan, jugadores destacados, video de presentacion y red social oficial.',
    tags: ['React', 'Tailwind', 'Vite'],
    github: '#',
    demo: 'https://dx7.vercel.app/',
    images: ['/images/Dx7/DX7-1.png', '/images/Dx7/DX7-2.png', '/images/Dx7/DX7-3.png'],
    featured: true,
    info: {
      objective: 'Crear la pagina oficial del clan DX7 de Free Fire para mostrar la identidad del clan, sus jugadores y contenido promocional.',
      process: 'Se desarrollo la pagina con React y Vite para velocidad, con Tailwind CSS para un diseño moderno y responsivo. Se usaron banners del clan DX7 y se desplego en Vercel.',
      features: ['Banners del clan DX7', 'Informacion del clan de Free Fire', 'Video de presentacion', 'Redes sociales del clan', 'Diseño responsivo'],
      duration: '1 semana',
      role: 'Frontend Developer',
    },
  },
  {
    title: 'BxZar',
    description: 'Tienda en linea de productos con carrito de compras, filtros por categorias, buscador y diseño moderno responsivo.',
    tags: ['React', 'Tailwind', 'Vite'],
    github: '#',
    demo: 'https://bxzar.vercel.app/',
    images: ['/images/Bazar/Bazar.png', '/images/Bazar/Bazar1.png'],
    featured: true,
    info: {
      objective: 'Crear una tienda en linea moderna, rapida y responsiva para la venta de productos con la mejor experiencia de usuario.',
      process: 'Comenzo con el diseno en Figma, luego se desarrollo el frontend con React y Vite para Velocidad. Los estilos se implementaron con Tailwind CSS para un diseño consistente y rapido. Se despliego en Netlify.',
      features: ['Carrito de compras', 'Filtros por categorias', 'Buscador en tiempo real', 'Diseño responsivo', 'Modo oscuro', 'Animaciones suaves'],
      duration: '1 semana',
      role: 'Frontend Developer',
    },
  },
  {
    title: 'DevBoard',
    description: 'Panel de control para desarrolladores con gestor de tareas, notas y seguimiento de proyectos en tiempo real.',
    tags: ['React', 'TypeScript', 'Firebase'],
    github: '#',
    demo: '#',
    images: ['/images/devboard.svg'],
    featured: false,
    info: {
      objective: 'Organizar tareas y proyectos de desarrollo de forma visual, intuitiva y con sincronizacion en la nube.',
      process: 'Se diseno una interfaz modular y escalable. Se uso TypeScript para mayor seguridad en el codigo. Firebase como backend para autenticacion y datos en tiempo real.',
      features: ['Drag and drop', 'Notas rapidas', 'Seguimiento de proyectos', 'Sincronizacion en la nube', 'Autenticacion de usuarios'],
      duration: '2 semanas',
      role: 'Full Stack Developer',
    },
  },
  {
    title: 'NexaStore',
    description: 'Plataforma de ecommerce con pasarela de pagos, panel de administracion y sistema de inventario completo.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
    images: ['/images/nexastore.svg'],
    featured: false,
    info: {
      objective: 'Plataforma de ecommerce completa con todo lo necesario para vender productos online de forma profesional.',
      process: 'API RESTful construida con Express y Node.js. Base de datos MongoDB para flexibilidad. Frontend en React. Sistema de pagos integrado.',
      features: ['Panel de administracion', 'Gestion de inventario', 'Pasarela de pagos', 'Gestion de usuarios', 'Reportes y estadisticas'],
      duration: '3 semanas',
      role: 'Full Stack Developer',
    },
  },
  {
    title: 'Vortex Plus',
    description: 'Plataforma de streaming para ver peliculas en linea, con catalogo de contenido, reproduccion en tiempo real y sistema de suscripciones.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: 'https://vortexplus.vercel.app/',
    images: ['/images/Vortex+/VORTEX-2.png'],
    featured: true,
    info: {
      objective: 'Crear una plataforma de streaming moderna para ver peliculas online.',
      process: 'Frontend en React con video player custom. Backend con Node.js y MongoDB para gestion de contenido. Desplegada en Vercel.',
      features: ['Reproduccion en tiempo real', 'Catalogo de peliculas', 'Sistema de suscripciones', 'Busqueda avanzada', 'Listas de favoritos'],
      duration: '4 semanas',
      role: 'Full Stack Developer',
    },
  },
  {
    title: 'TaskFlow',
    description: 'App de productividad con gestor de tareas, calendario integrado y recordatorios inteligentes.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    github: '#',
    demo: '#',
    images: [],
    featured: false,
    info: {
      objective: 'Una app de productividad completa y facil de usar.',
      process: 'React + TypeScript para logica segura. Tailwind para UI moderna. Calendario con drag and drop.',
      features: ['Gestor de tareas', 'Calendario integrado', 'Recordatorios', 'Modo oscuro'],
      duration: '2 semanas',
      role: 'Frontend Developer',
    },
  },
  {
    title: 'CodeSnippets',
    description: 'Repositorio de snippets de codigo con syntax highlight, busqueda y organizacion por tags.',
    tags: ['React', 'Vite', 'Tailwind'],
    github: '#',
    demo: '#',
    images: [],
    featured: false,
    info: {
      objective: 'Guardar y organizar snippets de codigo de forma rapida.',
      process: 'Vite + React para velocidad. Syntax highlighting con libreria externa. Busqueda en tiempo real.',
      features: ['Syntax highlight', 'Busqueda por tags', 'Copiar con un click', 'Organizacion por categorias'],
      duration: '1 semana',
      role: 'Frontend Developer',
    },
  },
]

function ImageCarousel({ images, title }) {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(current === 0 ? images.length - 1 : current - 1)
  const next = () => setCurrent(current === images.length - 1 ? 0 : current + 1)

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-5xl font-bold text-primary/15">{title.split(' ').map(w => w[0]).join('')}</span>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, idx) => (
          <div key={idx} className="min-w-full h-full flex items-center justify-center p-4">
            <img src={img} alt={`${title} ${idx + 1}`} className="w-full h-full object-contain rounded-lg" onError={(e) => { e.target.style.display = 'none' }} />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center text-white-text hover:bg-primary/30 transition-all z-10"><FaChevronLeft className="text-xs" /></button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center text-white-text hover:bg-primary/30 transition-all z-10"><FaChevronRight className="text-xs" /></button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, idx) => (
              <button key={idx} onClick={() => setCurrent(idx)} className={`w-2 h-2 rounded-full transition-all ${idx === current ? 'bg-primary w-4' : 'bg-white/30'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  const [imgCurrent, setImgCurrent] = useState(0)
  const prevImg = () => setImgCurrent(imgCurrent === 0 ? project.images.length - 1 : imgCurrent - 1)
  const nextImg = () => setImgCurrent(imgCurrent === project.images.length - 1 ? 0 : imgCurrent + 1)

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      <div className="relative glass-strong rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-primary/15 flex flex-col" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-gray-text hover:text-white-text hover:bg-white/10 transition-all z-30"><FaTimes /></button>
        <div className="overflow-y-auto flex-1 overscroll-contain">
          <div className="h-56 md:h-72 bg-gradient-to-br from-primary/10 via-dark-light to-primary/5 relative overflow-hidden flex-shrink-0">
            <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${imgCurrent * 100}%)` }}>
              {project.images.map((img, idx) => (
                <div key={idx} className="min-w-full h-full flex items-center justify-center p-6">
                  <img src={img} alt={`${project.title} ${idx + 1}`} className="max-w-full max-h-full object-contain rounded-xl" onError={(e) => { e.target.style.display = 'none' }} />
                </div>
              ))}
            </div>
            {project.images.length > 1 && (
              <>
                <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-white-text hover:bg-primary/30 transition-all"><FaChevronLeft /></button>
                <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-white-text hover:bg-primary/30 transition-all"><FaChevronRight /></button>
              </>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center"><FaReact className="text-primary text-lg" /></div>
                <div>
                  <h3 className="text-2xl font-bold text-white-text">{project.title}</h3>
                  <p className="text-primary text-xs font-mono">{project.info.role}</p>
                </div>
              </div>
              <p className="text-gray-text text-sm leading-relaxed mt-3 pl-[52px]">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => {
                const tech = techIcons[tag]
                return (
                  <div key={tag} className="flex items-center gap-2 glass rounded-xl px-4 py-2.5">
                    {tech && <tech.icon className="text-lg" style={{ color: tech.color }} />}
                    <span className="text-light-text text-sm font-medium">{tag}</span>
                  </div>
                )
              })}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-5"><p className="text-primary text-xs font-mono uppercase tracking-wider mb-2">Objective</p><p className="text-light-text text-sm leading-relaxed">{project.info.objective}</p></div>
              <div className="glass rounded-2xl p-5"><p className="text-primary text-xs font-mono uppercase tracking-wider mb-2">Rol & Duracion</p><p className="text-light-text text-sm leading-relaxed">{project.info.role} &middot; {project.info.duration}</p></div>
            </div>
            <div className="glass rounded-2xl p-5"><p className="text-primary text-xs font-mono uppercase tracking-wider mb-2">Process</p><p className="text-light-text text-sm leading-relaxed">{project.info.process}</p></div>
            <div className="glass rounded-2xl p-5"><p className="text-primary text-xs font-mono uppercase tracking-wider mb-3">Features</p><div className="flex flex-wrap gap-2">{project.info.features.map((feat) => (<span key={feat} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-light-text border border-white/10">{feat}</span>))}</div></div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-all hover:shadow-red-glow"><FaGlobe className="text-xs" /> Ver pagina <FaExternalLinkAlt className="text-[10px]" /></a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover text-sm font-semibold rounded-xl text-light-text transition-all"><FaGithub /> Codigo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AllProjectsPage({ onClose, onOpenModal }) {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const prevHash = window.location.hash
    history.replaceState(null, '', window.location.pathname)
    return () => { history.replaceState(null, '', window.location.pathname + prevHash) }
  }, [])

  const allTags = useMemo(() => {
    const tags = new Set()
    projects.forEach(p => p.tags.forEach(t => tags.add(t)))
    return ['all', ...Array.from(tags)]
  }, [])

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
      const matchFilter = filter === 'all' || p.tags.includes(filter)
      return matchSearch && matchFilter
    })
  }, [search, filter])

  return (
    <div className="fixed inset-0 z-[90]">
      <div className="absolute inset-0 bg-dark" onClick={onClose} />
      <div className="relative h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 z-10 glass-strong border-b border-glass-border">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white-text">Todos los <span className="text-gradient">Proyectos</span></h2>
              <p className="text-gray-text text-xs">{filtered.length} proyectos encontrados</p>
            </div>
            <button onClick={onClose} className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-text hover:text-white-text hover:bg-white/10 transition-all">
              <FaTimes />
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Search */}
          <div className="glass rounded-2xl p-6 mb-8">
            <div className="relative mb-4">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-text" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por nombre, descripcion o tecnologia..."
                className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white-text focus:border-primary focus:outline-none transition-all placeholder:text-gray-text/40"
              />
            </div>
            {/* Filter tags */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    filter === tag
                      ? 'bg-primary text-white'
                      : 'bg-white/5 text-gray-text border border-white/10 hover:border-primary/30 hover:text-white-text'
                  }`}
                >
                  {tag === 'all' ? 'Todos' : tag}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-text text-lg">No se encontraron proyectos</p>
              <p className="text-gray-text/50 text-sm mt-2">Intenta con otro termino</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <div
                  key={project.title}
                  className="glass rounded-2xl overflow-hidden group hover:border-primary/20 transition-all duration-500 hover:shadow-glass hover:-translate-y-1 flex flex-col"
                >
                  {/* Image */}
                  <div className="h-44 bg-gradient-to-br from-primary/10 via-dark-light to-primary/5 relative overflow-hidden">
                    <ImageCarousel images={project.images} title={project.title} />
                    {project.featured && (
                      <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 bg-primary text-white rounded-full z-20">Destacado</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-white-text mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-gray-text text-xs leading-relaxed mb-4 flex-1">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => {
                        const tech = techIcons[tag]
                        return (
                          <div key={tag} className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10">
                            {tech && <tech.icon className="text-[10px]" style={{ color: tech.color }} />}
                            <span className="text-light-text text-[10px] font-medium">{tag}</span>
                          </div>
                        )
                      })}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button onClick={() => onOpenModal(project)} className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold rounded-xl hover:shadow-red-glow transition-all">
                        <FaReact className="text-[10px]" /> Info
                      </button>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary-dark transition-all">
                        <FaGlobe className="text-[10px]" /> Ver
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3 py-2 glass glass-hover text-xs font-semibold rounded-xl text-light-text transition-all">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [modalProject, setModalProject] = useState(null)
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="proyectos" className="min-h-screen flex flex-col justify-center px-6 pb-20 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white-text">Mis <span className="text-gradient">Proyectos</span></h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8" />
          <p className="text-gray-text mt-6 max-w-md mx-auto text-sm">Algunos de los proyectos en los que he trabajado.</p>
        </div>

        <div className="space-y-5">
          {projects.slice(0, 3).map((project) => (
            <div key={project.title} className="glass rounded-2xl overflow-hidden group hover:border-primary/20 transition-all duration-500 hover:shadow-glass">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-72 bg-gradient-to-br from-primary/10 via-dark-light to-primary/5 relative overflow-hidden flex-shrink-0">
                  <ImageCarousel images={project.images} title={project.title} />
                  {project.featured && <span className="absolute top-4 left-4 text-xs font-mono px-3 py-1 bg-primary text-white rounded-full z-20">Destacado</span>}
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white-text mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-text text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => {
                      const tech = techIcons[tag]
                      return (
                        <div key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                          {tech && <tech.icon className="text-sm" style={{ color: tech.color }} />}
                          <span className="text-light-text text-xs font-medium">{tag}</span>
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setModalProject(project)} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-2xl hover:shadow-red-glow transition-all group/btn">
                      <FaReact className="text-xs group-hover:rotate-180 transition-transform duration-500" /> Ver info
                    </button>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-all hover:shadow-red-glow group/btn">
                      <FaGlobe className="text-xs" /> Ver pagina <FaExternalLinkAlt className="text-[10px] opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 glass glass-hover text-sm font-semibold rounded-xl text-light-text transition-all">
                      <FaGithub /> Codigo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button onClick={() => setShowAll(true)} className="inline-flex items-center gap-2 px-8 py-4 glass glass-hover rounded-xl font-semibold text-light-text transition-all duration-300 hover:shadow-glass group">
            Ver mas proyectos <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
      {showAll && <AllProjectsPage onClose={() => setShowAll(false)} onOpenModal={(p) => setModalProject(p)} />}
    </section>
  )
}
