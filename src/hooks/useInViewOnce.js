import { useEffect, useRef, useState } from 'react'

export function useInViewOnce(options = { rootMargin: '0px 0px -20% 0px', threshold: 0.15 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return

    const obs = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setInView(true)
        obs.disconnect()
      }
    }, options)

    obs.observe(el)
    return () => obs.disconnect()
  }, [inView, options])

  return { ref, inView }
}

