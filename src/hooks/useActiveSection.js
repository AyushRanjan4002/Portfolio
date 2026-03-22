import { useEffect, useMemo, useState } from 'react'

export function useActiveSection(sectionIds, options = { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }) {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds])
  const [activeId, setActiveId] = useState(ids[0] ?? 'home')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return

    const obs = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting)
      if (!visible.length) return
      visible.sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))
      setActiveId(visible[0].target.id)
    }, options)

    elements.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [ids, options])

  return { activeId, setActiveId }
}

