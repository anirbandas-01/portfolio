import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12 }
    )

    const children = el.querySelectorAll('.reveal')
    children.forEach(child => observer.observe(child))

    // Also observe the parent itself if it has the class
    if (el.classList.contains('reveal')) observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}
