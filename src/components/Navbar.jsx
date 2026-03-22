import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { NAV_ITEMS, PROFILE } from '../data.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const ids = useMemo(() => NAV_ITEMS.map((n) => n.id), [])
  const { activeId, setActiveId } = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="h-0.5 origin-left bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400"
        />
        <div className="bg-zinc-950/60 backdrop-blur-xl">
          <div className="container-x">
            <div className="flex h-16 items-center justify-between">
              <button
                onClick={() => scrollToId('home')}
                className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
                aria-label="Go to top"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition group-hover:bg-white/10">
                  <span className="h-2 w-2 rounded-full bg-violet-400" />
                </span>
                <span className="hidden sm:inline">{PROFILE.name}</span>
              </button>

              <nav className="hidden items-center gap-1 md:flex">
                {NAV_ITEMS.map((item) => {
                  const active = item.id === activeId
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveId(item.id)
                        scrollToId(item.id)
                      }}
                      className={`relative rounded-full px-3 py-2 text-sm transition ${
                        active ? 'text-white' : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-white/8 ring-1 ring-white/10"
                          transition={{ type: 'spring', stiffness: 450, damping: 38 }}
                        />
                      )}
                      {item.label}
                    </button>
                  )
                })}
              </nav>

              <div className="flex items-center gap-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId('contact')
                  }}
                  className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:translate-y-[-1px] hover:bg-zinc-100 md:inline-flex"
                >
                  Let’s talk
                </a>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 md:hidden"
                  onClick={() => setOpen((v) => !v)}
                  aria-label={open ? 'Close menu' : 'Open menu'}
                >
                  {open ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute left-1/2 top-4 w-[calc(100%-2rem)] -translate-x-1/2 rounded-3xl border border-white/10 bg-zinc-950/80 p-2 backdrop-blur-xl ring-soft"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between px-3 py-2">
                <div className="text-sm font-semibold text-white">{PROFILE.name}</div>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX className="text-xl" />
                </button>
              </div>
              <div className="px-2 pb-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setOpen(false)
                      setActiveId(item.id)
                      scrollToId(item.id)
                    }}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${
                      item.id === activeId
                        ? 'bg-white/8 text-white ring-1 ring-white/10'
                        : 'text-zinc-200 hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-zinc-400">↵</span>
                  </button>
                ))}
                <button
                  onClick={() => {
                    setOpen(false)
                    scrollToId('contact')
                  }}
                  className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

