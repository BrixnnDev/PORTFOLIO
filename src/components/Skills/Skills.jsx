import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
  FaPython, FaDatabase,
} from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiMongodb, SiVite } from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#e34f26', level: 90 },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6', level: 85 },
      { name: 'JavaScript', icon: FaJs, color: '#f7df1e', level: 85 },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 75 },
      { name: 'React', icon: FaReact, color: '#61dafb', level: 85 },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4', level: 90 },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 80 },
      { name: 'Python', icon: FaPython, color: '#3776ab', level: 70 },
      { name: 'Vite', icon: SiVite, color: '#646cff', level: 80 },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248', level: 75 },
      { name: 'SQL', icon: FaDatabase, color: '#336791', level: 70 },
      { name: 'Git', icon: FaGitAlt, color: '#f14e32', level: 85 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="min-h-screen flex flex-col justify-center px-6 pb-20 relative overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">Stack tecnologico</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white-text">
            Mis <span className="text-gradient">Habilidades</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8" />
          <p className="text-gray-text mt-6 max-w-md mx-auto text-sm">
            Tecnologias que uso dia a dia para crear experiencias digitales increibles.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass rounded-3xl p-8 hover:border-primary/15 transition-all duration-500">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-primary-dark rounded-full" />
                <h3 className="text-lg font-bold text-white-text">{category.title}</h3>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300"
                  >
                    {/* Icon + Name */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
                      >
                        <skill.icon
                          className="text-lg"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <p className="text-white-text text-sm font-medium">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
