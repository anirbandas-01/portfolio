export default function Footer() {
  return (
    <footer
      style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}
      className="py-8"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Anirban Das. Built with React + Vite + Tailwind v4.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/anirbandas-01"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            GitHub
          </a>
          <span style={{ color: 'var(--border)' }}>·</span>
          <a
            href="https://linkedin.com/in/anirban-das-b192a9260"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            LinkedIn
          </a>
          <span style={{ color: 'var(--border)' }}>·</span>
          <a
            href="mailto:anirban140963@gmail.com"
            className="font-mono text-xs transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
