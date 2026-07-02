import { useScrollReveal } from '../hooks/useScrollReveal'
import { ExternalLink, Github } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Healthcare Risk Management Platform',
    period: 'Dec 2025 – Jan 2026',
    description:
      'A full-stack neonatal risk assessment platform that analyzes clinical inputs and generates risk scores to help medical staff identify high-risk patients early and act faster.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'REST API', 'JWT'],
    highlights: [
      'Built RESTful APIs for clinical data submission and automated risk scoring',
      'Integrated external prediction services to evaluate patient risk in real time',
      'Optimized MongoDB queries to handle concurrent patient record lookups efficiently',
    ],
    live: 'https://neonatal-risk-system.vercel.app/',
    github: 'https://github.com/anirbandas-01/neonatal_risk_system',
  },
  {
    title: 'Content Automation SaaS Platform',
    period: 'Oct 2025 – Nov 2025',
    description:
      'A multi-user SaaS platform that generates AI-written content — blogs, captions, and marketing copy — with role-based access, usage tracking, and a clean dashboard for managing outputs.',
    tech: ['React.js', 'Node.js', 'Firebase', 'PostgreSQL', 'OpenAI API'],
    highlights: [
      'Built scalable REST APIs with JWT auth and per-user request tracking',
      'Integrated OpenAI API to generate structured content based on user prompts',
      'Designed PostgreSQL schema to support multi-tenant data isolation',
    ],
    live: 'https://quick-ai-ashy-alpha.vercel.app/',
    github: 'https://github.com/anirbandas-01/AI-SaaS-App',
  },
  {
    title: 'Community Resource Platform',
    period: 'Feb 2026 – Mar 2026',
    description:
      'A community-driven platform where users can post, request, and discover local resources — including food, shelter, and essential services — connecting people in need with those who can help.',
    tech: ['PHP', 'Laravel', 'MySQL', 'REST API'],
    highlights: [
      'Designed RESTful APIs for resource posting, discovery, and user authentication',
      'Built relational MySQL schemas to link users, resources, and request workflows',
      'Optimized queries for fast resource filtering by category and location',
    ],
    live: 'https://community-sharing-platform.vercel.app/',
    github: 'https://github.com/anirbandas-01/community-sharing-platform',
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
                borderLeft: '3px solid var(--border)',
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
                    {project.live && project.live !== '#' && (
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
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline px-3 py-1.5 rounded-md font-mono text-xs flex items-center gap-1.5"
                      >
                        <Github size={12} />
                        code
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
                  {project.description}
                </p>

                
                  <ul className="space-y-1.5 mb-5">
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