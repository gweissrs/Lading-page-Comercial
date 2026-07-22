import { useEffect, useRef } from 'react'
import { trackSection } from './analytics'

export function useSectionTracking(sectionName) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let fired = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired) {
          fired = true
          trackSection(sectionName)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [sectionName])
  return ref
}
