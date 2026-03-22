import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { PROFILE } from '../data.js'
import { fadeUp, stagger } from './motion.js'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.30]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-500/10 via-cyan-500/5 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/25 via-cyan-400/15 to-emerald-500/20 blur-3xl" />

      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to opportunities
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            >
              {PROFILE.name}
              <span className="text-zinc-400"> — </span>
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
                {PROFILE.title}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg"
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => scrollToId('projects')}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:translate-y-[-1px] hover:bg-zinc-100"
              >
                View Projects
              </button>
              <a
                href="/resume.pdf"
                download
                className="rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
              >
                Download Resume
              </a>
              <button
                onClick={() => scrollToId('contact')}
                className="rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
              >
                Contact
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl text-zinc-100 transition group-hover:scale-110" />
              </a>
              <a
                className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-zinc-100 transition group-hover:scale-110" />
              </a>
              <a
                className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                href="mailto:you@example.com"
                aria-label="Email"
              >
                <HiOutlineMail className="text-2xl text-zinc-100 transition group-hover:scale-110" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="glass ring-soft relative overflow-hidden rounded-3xl p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-cyan-500/5 to-emerald-500/10" />
              <div className="relative">
                <div className="text-sm font-semibold text-white">What I do</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  I design and build modern web apps with strong UX, clean component architecture, and
                  performance in mind.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    { k: 'Frontend', v: 'React • Tailwind • FramerMotion' },
                    { k: 'Backend', v: 'Node • REST • Auth' },
                    { k: 'Quality', v: 'UX • Accessibility • Testing' },
                    { k: 'Delivery', v: 'GitHub • Render • Docs' },
                  ].map((x) => (
                    <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs font-medium text-zinc-300">{x.k}</div>
                      <div className="mt-1 text-sm font-semibold text-white">{x.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-medium text-zinc-300">Currently focused on</div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    Building polished industry ready and fully commercial products with delightful micro‑interactions
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

