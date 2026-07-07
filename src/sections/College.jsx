import { useScrollReveal } from '../hooks/useScrollReveal'
import { GraduationCap, BookOpen, Calendar } from 'lucide-react'

const EDUCATION = [
  {
    icon: GraduationCap,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Academy of Technology, MAKAUT',
    period: '2024 – Present',
    cgpa: '7.40',
    status: 'Ongoing',
    highlights: [
      'Deepening expertise in system design, distributed systems, and advanced algorithms',
      'Building production-grade full-stack projects alongside coursework',
      'Exploring cloud infrastructure and containerized deployments',
    ],
  },
  {
    icon: BookOpen,
    degree: 'B.Sc. Computer Science',
    institution: 'Kanchrapara College, University of Kalyani',
    period: '2021 – 2024',
    cgpa: '7.49',
    status: 'Completed',
    highlights: [
      'Core foundations in Data Structures, OOP, OS, and Networking',
      'First exposure to web development — sparked a passion for building',
      'Graduated with a strong academic record while self-teaching modern dev stacks',
    ],
  },
]

export default function College() {
  const ref = useScrollReveal()

  return (
    <section id="college" style={{ backgroundColor: 'var(--bg-secondary)' }} className="py-24">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <div className="reveal mb-14">
          <p className="section-label mb-3">academic journey</p>
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            College Life
          </h2>
          <p className="mt-3 text-sm max-w-md" style={{ color: 'var(--text-muted)' }}>
            Two institutions, one trajectory — from fundamentals to full-stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => {
            const Icon = edu.icon
            return (
              <div
                key={i}
                className="reveal card-hover rounded-xl p-6 border"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--tag-bg)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--text)' }} />
                  </div>
                  <span
                    className="font-mono text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: edu.status === 'Ongoing' ? 'var(--text)' : 'var(--tag-bg)',
                      color: edu.status === 'Ongoing' ? 'var(--bg)' : 'var(--text-muted)',
                    }}
                  >
                    {edu.status}
                  </span>
                </div>

                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--text)' }}>
                  {edu.degree}
                </h3>
                <p className="font-mono text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                  {edu.institution}
                </p>

                <div className="flex items-center gap-4 mb-5 mt-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} style={{ color: 'var(--text-muted)' }} />
                    <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                      {edu.period}
                    </span>
                  </div>
                  <div
                    className="font-mono text-xs px-2 py-0.5 rounded"
                    style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--tag-text)' }}
                  >
                    CGPA {edu.cgpa}
                  </div>
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--text-muted)' }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}