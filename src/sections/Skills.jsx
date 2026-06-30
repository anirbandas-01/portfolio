import { useScrollReveal } from '../hooks/useScrollReveal'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', level: 90 },
      { name: 'Java', level: 72 },
      { name: 'SQL', level: 80 },
      { name: 'PHP', level: 65 },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React.js', level: 88 },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'REST APIs', level: 88 },
      { name: 'JWT Auth', level: 80 },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MySQL', level: 78 },
    ],
  },
  {
    label: 'Tools & Cloud',
    items: [
      { name: 'Git', level: 88 },
      { name: 'Docker', level: 65 },
      { name: 'Vercel / Render', level: 85 },
      { name: 'OpenAI API', level: 72 },
      { name: 'Firebase', level: 70 },
    ],
  },
  {
    label: 'CS Fundamentals',
    items: [
      { name: 'Data Structures', level: 80 },
      { name: 'OOP', level: 85 },
      { name: 'Operating Systems', level: 74 },
      { name: 'Networking', level: 72 },
    ],
  },
]

function SkillBar({ name, level }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-xs" style={{ color: 'var(--text)' }}>{name}</span>
        <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{level}%</span>
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--tag-bg)' }}>
        <div
          className="h-full rounded-full skill-bar-fill"
          style={{ width: `${level}%`, backgroundColor: 'var(--text)' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" style={{ backgroundColor: 'var(--bg)' }} className="py-24">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <div className="reveal mb-14">
          <p className="section-label mb-3">technical toolkit</p>
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            Languages & Frameworks
          </h2>
          <p className="mt-3 text-sm max-w-md" style={{ color: 'var(--text-muted)' }}>
            Technologies I use daily to build full-stack applications — from APIs to UIs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={i}
              className="reveal card-hover rounded-xl p-5 border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <p className="section-label mb-4">{group.label}</p>
              {group.items.map((item) => (
                <SkillBar key={item.name} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
