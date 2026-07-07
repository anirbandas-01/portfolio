import { useState, useEffect } from 'react'
import { Github, Linkedin, ArrowDown, FileText } from 'lucide-react'

const ROLES = [
  'Full Stack Developer',
  'React Enthusiast',
  'Node.js Builder',
  'REST API Designer',
  'MCA Student @ MAKAUT',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = ROLES[roleIndex]
    let i = typing ? 0 : role.length
    const dir = typing ? 1 : -1
    const speed = typing ? 65 : 35

    const timer = setInterval(() => {
      i += dir
      setDisplayed(role.slice(0, i))

      if (typing && i === role.length) {
        clearInterval(timer)
        setTimeout(() => setTyping(false), 1800)
      } else if (!typing && i === 0) {
        clearInterval(timer)
        setRoleIndex(idx => (idx + 1) % ROLES.length)
        setTyping(true)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [roleIndex, typing])

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-20"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
          <div className="max-w-2xl">
          {/* Label */}
          <p className="section-label mb-6">Hello, world</p>

          {/* Open to work badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: '#22c55e' }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: '#22c55e' }}
              />
            </span>
            <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
              Open to Full-Stack / Backend Developer roles
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight"
            style={{ color: 'var(--text)' }}
          >
            Anirban Das
          </h1>

          {/* Typing role */}
          <div className="h-10 mb-6">
            <p className="font-mono text-lg md:text-xl" style={{ color: 'var(--text-muted)' }}>
              {displayed}
              <span className="cursor-blink">|</span>
            </p>
          </div>

          {/* Description */}
          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: 'var(--text-muted)' }}
          >
            I build scalable web applications — from database architecture to polished UIs.
            Currently working as a Technical Support Associate at Spectra Consultancy while
            pursuing my MCA and shipping full-stack projects on the side.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary px-5 py-2.5 rounded-md font-mono text-sm font-medium"
            >
              view projects
            </a>
            <a
              href="/Anirban_SDE_Resume.pdf"
              download
              className="btn-outline px-5 py-2.5 rounded-md font-mono text-sm font-medium flex items-center gap-2"
            >
              <FileText size={14} />
              download cv
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/anirbandas-01"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 font-mono text-sm transition-opacity duration-200 hover:opacity-60"
              style={{ color: 'var(--text-muted)' }}
            >
              <Github size={16} />
              <span>github</span>
            </a>
            <span style={{ color: 'var(--border)' }}>·</span>
            <a
              href="https://linkedin.com/in/anirban-das-b192a9260"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 font-mono text-sm transition-opacity duration-200 hover:opacity-60"
              style={{ color: 'var(--text-muted)' }}
            >
              <Linkedin size={16} />
              <span>linkedin</span>
            </a>
          </div>
          </div>

          {/* Photo */}
          <div className="shrink-0 mx-auto lg:mx-0">
            <div
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border flex items-center justify-center"
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
            >
              <img
                src="/profile.webp"
                alt="Anirban Das"
                width={256}
                height={256}
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div
                className="w-full h-full hidden items-center justify-center font-mono text-sm text-center px-4"
                style={{ color: 'var(--text-muted)', display: 'none' }}
              >
                Add your photo at<br /><code className="text-xs">public/profile.webp</code>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
          <ArrowDown size={14} className="animate-bounce" />
          <span className="font-mono text-xs">scroll to explore</span>
        </div>
      </div>
    </section>
  )
}