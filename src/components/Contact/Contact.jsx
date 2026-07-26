import { useState } from 'react'
import { FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaCheck, FaSpinner } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, sending, sent

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'brixnndev@email.com', href: 'mailto:brixnndev@email.com' },
    { icon: FaMapMarkerAlt, label: 'Ubicacion', value: 'Colombia', href: '#' },
    { icon: FaPhone, label: 'Telefono', value: '+57 XXX XXX XXXX', href: '#' },
  ]

  const socials = [
    { icon: FaGithub, href: '#', label: 'GitHub', color: 'hover:text-white-text hover:bg-white/10' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-[#0077b5] hover:bg-[#0077b5]/10' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-[#1da1f2] hover:bg-[#1da1f2]/10' },
  ]

  return (
    <section id="contacto" className="min-h-screen flex flex-col justify-center px-6 pb-24 relative overflow-hidden scroll-mt-20">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/3 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Hablemos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white-text">
            <span className="text-gradient">Contacto</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8" />
          <p className="text-gray-text mt-6 max-w-lg mx-auto text-sm leading-relaxed">
            Tienes un proyecto en mente? Me encantaria escuchar tu idea.
            Juntos podemos crear algo increible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left - Info + Social */}
          <div className="lg:col-span-2 space-y-4">
            {/* Contact cards */}
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all flex-shrink-0">
                  <item.icon className="text-primary text-lg" />
                </div>
                <div>
                  <p className="text-gray-text text-xs font-mono uppercase tracking-wider">{item.label}</p>
                  <p className="text-white-text text-sm font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="glass rounded-2xl p-5">
              <p className="text-gray-text text-xs font-mono uppercase tracking-wider mb-4">Redes sociales</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 glass rounded-xl flex items-center justify-center text-gray-text transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>


          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Top glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

              <h3 className="text-xl font-bold text-white-text mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
                  <FaEnvelope className="text-primary text-sm" />
                </div>
                Enviame un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-gray-text text-xs font-mono uppercase tracking-wider">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white-text focus:border-primary focus:bg-white/[0.05] focus:outline-none transition-all duration-300 placeholder:text-gray-text/40"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-text text-xs font-mono uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white-text focus:border-primary focus:bg-white/[0.05] focus:outline-none transition-all duration-300 placeholder:text-gray-text/40"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-text text-xs font-mono uppercase tracking-wider">Mensaje</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white-text focus:border-primary focus:bg-white/[0.05] focus:outline-none transition-all duration-300 resize-none placeholder:text-gray-text/40"
                    placeholder="Cuentame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-2 group ${
                    status === 'sent'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : status === 'sending'
                      ? 'bg-primary/50 text-white/70 cursor-wait'
                      : 'bg-primary text-white hover:bg-primary-dark hover:shadow-red-glow'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      Enviar Mensaje
                      <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      Enviando...
                      <FaSpinner className="text-sm animate-spin" />
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      Mensaje enviado
                      <FaCheck className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
