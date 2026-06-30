import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#about', label: 'about' },
  { href: '#college', label: 'college' },
  { href: '#experience', label: 'experience' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#certifications', label: 'certs' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar({ theme, onToggle }) {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = NAV_LINKS.map(l => l.href.slice(1))
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href) => {
    setMenuOpen(false)
    const id = href.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        backgroundColor: 'var(--nav-bg)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: 'blur(12px)',
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); handleClick('#about') }}
          className="font-mono text-sm font-semibold tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          anirban.dev
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleClick(href)}
              className={`nav-link ${active === href.slice(1) ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggle}
            className="p-2 rounded-md transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(m => !m)}
            className="md:hidden p-2 rounded-md"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}
          className="md:hidden px-6 py-4 flex flex-col gap-4"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleClick(href)}
              className={`nav-link text-left ${active === href.slice(1) ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}