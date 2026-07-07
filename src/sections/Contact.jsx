import { useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

// ─── EmailJS config ──────────────────────────────────────────────────────────
// 1. Go to https://emailjs.com and sign up (free)
// 2. Create an Email Service (Gmail recommended)
// 3. Create an Email Template — use these variables:
//    {{from_name}}, {{from_email}}, {{message}}
// 4. Replace these three values:
const EMAILJS_SERVICE_ID  = 'service_ygzpq8p'
const EMAILJS_TEMPLATE_ID = 'template_a69bcvh'
const EMAILJS_PUBLIC_KEY  = 'It0_TxT_jk2ev4X_8'
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const ref = useScrollReveal()
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ from_name: '', from_email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" style={{ backgroundColor: 'var(--bg-secondary)' }} className="py-24">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <div className="reveal mb-14">
          <p className="section-label mb-3">get in touch</p>
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            Contact
          </h2>
          <p className="mt-3 text-sm max-w-md" style={{ color: 'var(--text-muted)' }}>
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: info */}
          <div className="reveal">
            <div className="space-y-5 mb-10">
              <a
                href="mailto:anirban140963@gmail.com"
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                style={{ color: 'var(--text)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--tag-bg)' }}
                >
                  <Mail size={15} style={{ color: 'var(--text)' }} />
                </div>
                <div>
                  <p className="font-mono text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>email</p>
                  <p>anirban140963@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/anirbandas-01"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                style={{ color: 'var(--text)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--tag-bg)' }}
                >
                  <Github size={15} style={{ color: 'var(--text)' }} />
                </div>
                <div>
                  <p className="font-mono text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>github</p>
                  <p>anirbandas-01</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/anirban-das-b192a9260"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                style={{ color: 'var(--text)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--tag-bg)' }}
                >
                  <Linkedin size={15} style={{ color: 'var(--text)' }} />
                </div>
                <div>
                  <p className="font-mono text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>linkedin</p>
                  <p>anirban-das-b192a9260</p>
                </div>
              </a>
            </div>

            <div
              className="rounded-xl p-5 border"
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <p className="font-mono text-xs mb-2" style={{ color: 'var(--text-muted)' }}>currently</p>
              <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                Technical Support Associate @ Spectra Consultancy
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                Open to full-stack / backend developer roles — full-time or freelance
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal" style={{ transitionDelay: '50ms' }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-xs mb-1.5 block" style={{ color: 'var(--text-muted)' }}>
                  name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="input-themed w-full px-4 py-2.5 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="font-mono text-xs mb-1.5 block" style={{ color: 'var(--text-muted)' }}>
                  email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="input-themed w-full px-4 py-2.5 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="font-mono text-xs mb-1.5 block" style={{ color: 'var(--text-muted)' }}>
                  message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What would you like to discuss?"
                  className="input-themed w-full px-4 py-2.5 rounded-lg text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full py-2.5 rounded-lg font-mono text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin" />
                    sending...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    send message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm p-3 rounded-lg" style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--text)' }}>
                  <CheckCircle size={15} />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm p-3 rounded-lg" style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--text)' }}>
                  <AlertCircle size={15} />
                  Something went wrong. Email me directly instead.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}