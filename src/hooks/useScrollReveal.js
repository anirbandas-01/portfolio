import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reveal every child in this section together
          el.querySelectorAll('.reveal').forEach(child => {
            child.classList.add('visible')
          })

          observer.disconnect()
        }
      },
      {
        threshold: 0.05,
      }
    )

    // Observe ONLY the section container
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}