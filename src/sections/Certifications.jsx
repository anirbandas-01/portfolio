import { useScrollReveal } from '../hooks/useScrollReveal'
import { Award, ExternalLink } from 'lucide-react'

const CERTS = [
  {
    name: 'Oracle Cloud Infrastructure Generative AI Professional',
    issuer: 'Oracle',
    year: '2025',
    badge: 'OCI GenAI',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=BF39C312472BDF185E5AB757929D30F94912B8E48C645936457AA164F41F586B',
    // Replace above with your real certificate/badge link
  },
  {
    name: 'Oracle Cloud Infrastructure AI Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
    badge: 'OCI AI',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=A75CDCC58B3665B241E18FE4FF5E3113D59EE9F1701B39652E252AF183610302',
  },
  {
    name: 'Oracle AI Vector Search Certified Professional',
    issuer: 'Oracle',
    year: '2025',
    badge: 'OCI Vector',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=36C37ED76178E3DBD3AFF78CB5CCF4ABF33B4679D118D74223B90AA268462B6A',
  },
]

export default function Certifications() {
  const ref = useScrollReveal()

  return (
    <section id="certifications" style={{ backgroundColor: 'var(--bg)' }} className="py-24">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <div className="reveal mb-14">
          <p className="section-label mb-3">credentials</p>
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            Certifications
          </h2>
          <p className="mt-3 text-sm max-w-md" style={{ color: 'var(--text-muted)' }}>
            Verified credentials from Oracle — spanning generative AI, cloud infrastructure, and vector search.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="reveal card-hover rounded-xl border p-6 block group"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                transitionDelay: `${i * 50}ms`,
                textDecoration: 'none',
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--tag-bg)' }}
                >
                  <Award size={18} style={{ color: 'var(--text)' }} />
                </div>
                <ExternalLink
                  size={14}
                  style={{ color: 'var(--text-muted)' }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>

              <div
                className="font-mono text-xs px-2.5 py-1 rounded-full inline-block mb-3"
                style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--tag-text)' }}
              >
                {cert.badge}
              </div>

              <h3 className="font-semibold text-sm leading-snug mb-2" style={{ color: 'var(--text)' }}>
                {cert.name}
              </h3>
              <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                {cert.issuer} · {cert.year}
              </p>
            </a>
          ))}
        </div>

        <div className="reveal mt-8">
          {/* <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
            💡 Tip: Replace the <code className="px-1 py-0.5 rounded" style={{ backgroundColor: 'var(--tag-bg)' }}>link</code> values in <code className="px-1 py-0.5 rounded" style={{ backgroundColor: 'var(--tag-bg)' }}>Certifications.jsx</code> with your real Oracle badge share URLs.
          </p> */}
        </div>
      </div>
    </section>
  )
}