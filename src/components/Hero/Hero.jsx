import { useState, useEffect } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import Model3D from './Model3D'

function TypeWriter({ text, delay = 0, speed = 80, className = '', onComplete }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1))
      }, speed)
      return () => clearTimeout(timer)
    } else if (onComplete) {
      onComplete()
    }
  }, [displayed, started, text, speed, onComplete])

  return (
    <span className={className}>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="animate-blink text-primary">|</span>
      )}
    </span>
  )
}

function LoopTypeWriter({ text, speed = 80, deleteSpeed = 40, pause = 1500, className = '' }) {
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer

    if (!isDeleting && displayed.length < text.length) {
      timer = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed)
    } else if (!isDeleting && displayed.length === text.length) {
      timer = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed)
    } else if (isDeleting && displayed.length === 0) {
      timer = setTimeout(() => setIsDeleting(false), 300)
    }

    return () => clearTimeout(timer)
  }, [displayed, isDeleting, text, speed, deleteSpeed, pause])

  return (
    <span className={className}>
      {displayed}
      <span className="animate-blink text-primary">|</span>
    </span>
  )
}

export default function Hero() {
  const [nameDone, setNameDone] = useState(false)

  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden mesh-bg scroll-mt-0">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 py-12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-mono text-lg tracking-wider animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Hola, soy
            </p>
            <h1 className="text-6xl md:text-7xl font-bold text-white-text leading-tight">
              <TypeWriter text="Brixnn" delay={400} speed={100} onComplete={() => setNameDone(true)} />
              {nameDone && (
                <span className="text-gradient animate-fade-in-up">
                  <TypeWriter text="Dev" delay={100} speed={120} />
                </span>
              )}
            </h1>
            {nameDone && (
              <h2 className="text-2xl md:text-3xl text-gray-text font-light h-9">
                Desarrollador{' '}
                <LoopTypeWriter text="Full Stack" speed={80} deleteSpeed={40} pause={1500} className="text-light-text" />
              </h2>
            )}
          </div>

          <p className="text-gray-text text-lg max-w-lg leading-relaxed" style={{ animationDelay: '0.6s' }}>
            Creo experiencias digitales modernas y funcionales.
            Apasionado por el codigo limpio y las interfaces elegantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all hover:shadow-red-glow flex items-center justify-center gap-2 group"
            >
              Ver Proyectos
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 glass glass-hover rounded-xl font-semibold text-light-text transition-all flex items-center justify-center gap-2"
            >
              Contactame
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-12 pt-4">
            {[
              { num: '2+', label: 'Anos exp.' },
              { num: '15+', label: 'Proyectos' },
              { num: '10+', label: 'Tecnologias' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-gradient">{stat.num}</p>
                <p className="text-sm text-gray-text">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - 3D Model */}
        <div className="hidden lg:flex items-center justify-center h-[500px]">
          <Model3D />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-text tracking-widest uppercase">Scroll</span>
        <FaArrowDown className="text-primary text-sm" />
      </div>
    </section>
  )
}
