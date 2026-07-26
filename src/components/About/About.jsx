import { FaCode, FaLaptopCode, FaRocket, FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const infoCards = [
  {
    icon: FaCode,
    title: 'Clean Code',
    desc: 'Codigo limpio, mantenible y escalable.',
  },
  {
    icon: FaLaptopCode,
    title: 'Full Stack',
    desc: 'Frontend y backend en un solo paquete.',
  },
  {
    icon: FaRocket,
    title: 'Performance',
    desc: 'Apps rapidas y optimizadas.',
  },
  {
    icon: FaHeart,
    title: 'Pasion',
    desc: 'Amor por cada proyecto que creo.',
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="min-h-screen flex flex-col justify-center px-6 pb-20 relative overflow-hidden scroll-mt-20">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Conoceme</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white-text">
            Sobre <span className="text-gradient">Mi</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8" />
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-10">
          {/* Left - Profile (bigger) */}
          <div className="lg:col-span-2">
            <div className="glass rounded-3xl p-8 text-center group hover:border-primary/20 transition-all duration-500 hover:shadow-glass-lg relative overflow-hidden">
              {/* Decorative corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

              {/* Avatar */}
              <div className="relative w-40 h-40 mx-auto mb-8">
                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
                {/* Glow */}
                <div className="absolute inset-2 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-xl" />
                {/* Avatar */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary via-primary-dark to-dark overflow-hidden border-2 border-primary/30 group-hover:border-primary/50 transition-all">
                  <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Background */}
                    <circle cx="60" cy="60" r="58" fill="#0c0c10" />
                    <circle cx="60" cy="60" r="58" fill="url(#aboutGrad)" opacity="0.3" />

                    {/* Body */}
                    <ellipse cx="60" cy="115" rx="35" ry="20" fill="#e11d48" opacity="0.9" />

                    {/* Neck */}
                    <rect x="52" y="75" width="16" height="12" rx="3" fill="#d97706" opacity="0.8" />

                    {/* Head */}
                    <circle cx="60" cy="52" r="28" fill="#f59e0b" />

                    {/* Hair */}
                    <path d="M 32 45 Q 32 20 60 15 Q 88 20 88 45 Q 86 30 75 25 Q 65 20 60 20 Q 55 20 45 25 Q 34 30 32 45 Z" fill="#1c1917" />
                    <path d="M 50 20 Q 48 8 55 12 Q 52 5 60 16" fill="#1c1917" />

                    {/* Eyes */}
                    <circle cx="48" cy="50" r="3" fill="#1c1917" />
                    <circle cx="72" cy="50" r="3" fill="#1c1917" />
                    <circle cx="49.5" cy="49" r="1" fill="white" />
                    <circle cx="73.5" cy="49" r="1" fill="white" />

                    {/* Eyebrows */}
                    <path d="M 42 44 Q 48 41 54 44" fill="none" stroke="#1c1917" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M 66 44 Q 72 41 78 44" fill="none" stroke="#1c1917" strokeWidth="1.8" strokeLinecap="round" />

                    {/* Smile */}
                    <path d="M 50 60 Q 60 68 70 60" fill="none" stroke="#1c1917" strokeWidth="1.5" strokeLinecap="round" />

                    {/* Headphones */}
                    <path d="M 30 45 Q 30 28 60 28 Q 90 28 90 45" fill="none" stroke="#27272a" strokeWidth="4" />
                    <rect x="26" y="42" width="8" height="14" rx="4" fill="#27272a" />
                    <rect x="86" y="42" width="8" height="14" rx="4" fill="#27272a" />
                    <rect x="27" y="43" width="6" height="12" rx="3" fill="#e11d48" opacity="0.6" />
                    <rect x="87" y="43" width="6" height="12" rx="3" fill="#e11d48" opacity="0.6" />

                    <defs>
                      <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e11d48" />
                        <stop offset="100%" stopColor="#f43f5e" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white-text mb-1">BrixnnDev</h3>
              <p className="text-primary text-sm font-mono mb-5 tracking-wider">Full Stack Developer</p>

              {/* Separator */}
              <div className="w-12 h-0.5 bg-primary/30 mx-auto mb-5 rounded-full" />

              <p className="text-gray-text text-sm leading-relaxed">
                Apasionado por crear soluciones web innovadoras.
                Me encanta transformar ideas en codigo funcional y moderno.
              </p>

              {/* Social mini */}
              <div className="flex justify-center gap-3 mt-6">
                <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-text hover:text-white-text hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                  <FaGithub className="text-lg" />
                </a>
                <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-text hover:text-[#0077b5] hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 transition-all duration-300">
                  <FaLinkedin className="text-lg" />
                </a>
                <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-text hover:text-[#1da1f2] hover:bg-[#1da1f2]/10 hover:border-[#1da1f2]/30 transition-all duration-300">
                  <FaTwitter className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Info + Journey */}
          <div className="lg:col-span-3 space-y-5">
            {/* Bio text */}
            <div className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary-dark to-transparent" />
              <h3 className="text-xl font-bold text-white-text mb-4 flex items-center gap-3">
                <span className="text-4xl font-bold text-primary/20">"</span>
                Mi historia
              </h3>
              <p className="text-gray-text leading-relaxed text-sm">
                Soy un desarrollador Full Stack con ganas de crear cosas increibles.
                Me encanta la tecnologia y todo lo que tiene que ver con programar.
                Cada dia busco aprender algo nuevo y mejorar mis habilidades.
                Mi objetivo es crear aplicaciones que no solo se vean bien,
                sino que tambien funcionen perfecto.
              </p>
            </div>

            {/* Info rows */}
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: 'Nombre', value: 'BrixnnDev' },
                { label: 'Especialidad', value: 'Full Stack Dev' },
                { label: 'Ubicacion', value: 'Colombia' },
                { label: 'Estado', value: 'Disponible', highlight: true },
              ].map((item) => (
                <div key={item.label} className="glass glass-hover rounded-xl px-5 py-4 flex justify-between items-center group transition-all duration-300">
                  <span className="text-gray-text text-sm">{item.label}</span>
                  <span className={`text-sm font-medium ${item.highlight ? 'text-green-400' : 'text-white-text'}`}>
                    {item.value}
                    {item.highlight && <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full ml-2 animate-pulse" />}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom - Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {infoCards.map((card, i) => (
            <div
              key={card.title}
              className="glass glass-hover rounded-2xl p-6 text-center group transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <card.icon className="text-xl text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white-text font-semibold text-sm mb-2">{card.title}</h4>
              <p className="text-gray-text text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
