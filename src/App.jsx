import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import College from './sections/College'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Experience from './sections/Experience'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar theme={theme} onToggle={toggle} />

      <main>
        <Hero />
        <College />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
