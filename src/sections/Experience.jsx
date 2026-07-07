import { useScrollReveal } from '../hooks/useScrollReveal'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const EXPERIENCE = [
  {
    role: 'Technical Support Associate',
    company: 'Spectra Consultancy',
    location: 'On-site',
    period: 'Apr 2026 – Present',
    current: true,
    highlights: [
      'Resolved technical issues for clients across software and application workflows, ensuring fast turnaround on day-to-day problems',
      'Troubleshot software and application bugs, identifying root causes before escalation',
      'Coordinated with engineering teams to escalate and track complex technical issues through to resolution',
      'Communicated directly with clients via calls, email, and chat — translating technical issues into clear, non-technical explanations',
    ],
  },
  {
    role: 'Independent Full Stack Developer',
    company: 'Self-employed / Freelance',
    location: 'Remote',
    period: '2023 – Present',
    current: false,
    highlights: [
      'Developed and deployed 5+ full-stack applications using React, Node.js, and SQL/NoSQL databases',
      'Built secure REST APIs and deployed applications on Vercel and Render',
    ],
  },
]

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" style={{ backgroundColor: 'var(--bg)' }} className="py-24">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <div className="reveal mb-14">
          <p className="section-label mb-3">where I've worked</p>
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            Experience
          </h2>
          <p className="mt-3 text-sm max-w-md" style={{ color: 'var(--text-muted)' }}>
            Professional and self-driven work — from client-facing support to shipping full-stack products.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px hidden sm:block"
            style={{ backgroundColor: 'var(--border)' }}
          />

          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="reveal relative sm:pl-14" style={{ transitionDelay: `${i * 50}ms` }}>
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1 w-10 h-10 rounded-full items-center justify-center hidden sm:flex"
                  style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
                >
                  <Briefcase size={16} style={{ color: 'var(--text)' }} />
                </div>

                <div
                  className="card-hover rounded-xl p-6 border"
                  style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
                >
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                    <div>
                      <h3 className="font-semibold text-base" style={{ color: 'var(--text)' }}>
                        {exp.role}
                      </h3>
                      <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span
                        className="font-mono text-xs px-2.5 py-1 rounded-full shrink-0"
                        style={{ backgroundColor: 'var(--text)', color: 'var(--bg)' }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} style={{ color: 'var(--text-muted)' }} />
                      <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} style={{ color: 'var(--text-muted)' }} />
                      <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: 'var(--text-muted)' }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}