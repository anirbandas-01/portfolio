import { useScrollReveal } from '../hooks/useScrollReveal'
import { ExternalLink, Github } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Healthcare Risk Management Platform',
    period: 'Dec 2025 – Jan 2026',
    description:
      'A full-stack healthcare web application for managing and analyzing patient data, with RESTful APIs for authentication, data handling, and risk evaluation workflows.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'REST API', 'JWT'],
    highlights: [
      'Designed RESTful APIs for data handling and risk evaluation',
      'Integrated external prediction services via APIs',
      'Optimized backend with efficient database queries',
    ],
    live: '#',
    github: '#',
  },
  {
    title: 'Content Automation SaaS Platform',
    period: 'Oct 2025 – Nov 2025',
    description:
      'A full-stack SaaS platform for automated content generation and user workflows, built for multi-user access with AI service integrations.',
    tech: ['React.js', 'Node.js', 'Firebase', 'PostgreSQL', 'OpenAI API'],
    highlights: [
      'Built scalable REST APIs with multi-user authentication',
      'Integrated external AI services for content generation',
      'Optimized backend to handle high-volume requests',
    ],
    live: '#',
    github: '#',
  },
  {
    title: 'Community Resource Platform',
    period: 'Feb 2026 – Mar 2026',
    description:
      'A full-stack community web platform for managing and sharing local resources, built with PHP (Laravel) and MySQL.',
    tech: ['PHP', 'Laravel', 'MySQL', 'REST API'],
    highlights: [
      'Designed RESTful APIs for user auth and resource posting',
      'Structured relational database schemas',
      'Optimized queries for efficient data retrieval',
    ],
    live: '#',
    github: '#',
  },
]

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" style={{ backgroundColor: 'var(--bg-secondary)' }} className="py-24">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <div className="reveal mb-14">
          <p className="section-label mb-3">what I've built</p>
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            Projects
          </h2>
          <p className="mt-3 text-sm max-w-md" style={{ color: 'var(--text-muted)' }}>
            5+ applications deployed to production — spanning healthcare, SaaS, and community tools.
          </p>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="reveal card-hover rounded-xl border overflow-hidden"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-bold text-lg" style={{ color: 'var(--text)' }}>
                        {project.title}
                      </h3>
                    </div>
                    <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                      {project.period}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline px-3 py-1.5 rounded-md font-mono text-xs flex items-center gap-1.5"
                      >
                        <ExternalLink size={12} />
                        live
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline px-3 py-1.5 rounded-md font-mono text-xs flex items-center gap-1.5"
                    >
                      <Github size={12} />
                      code
                    </a>
                  </div>
                </div>

                <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
                  {project.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: 'var(--text-muted)' }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--tag-text)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 text-center">
          <a
            href="https://github.com/anirbandas-01"
            target="_blank"
            rel="noreferrer"
            className="btn-outline px-5 py-2.5 rounded-md font-mono text-sm inline-flex items-center gap-2"
          >
            <Github size={14} />
            view all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
