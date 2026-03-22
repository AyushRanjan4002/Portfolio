import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Section from './Section.jsx'
import { PROJECTS, PROJECT_FILTERS } from '../data.js'
import { fadeUp, stagger } from './motion.js'

function Pill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        active ? 'bg-white text-zinc-900' : 'bg-white/5 text-zinc-200 ring-1 ring-white/10 hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={fadeUp}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="glass ring-soft group overflow-hidden rounded-3xl"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-56"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              aria-label="GitHub repository"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              aria-label="Live demo"
            >
              <FaExternalLinkAlt className="text-base" />
            </a>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.tags.includes(filter))
  }, [filter])

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A few highlights with clean UX, modern motion, and production-oriented engineering."
    >
      <div className="flex flex-wrap items-center gap-2">
        {PROJECT_FILTERS.map((f) => (
          <Pill key={f} active={f === filter} onClick={() => setFilter(f)}>
            {f}
          </Pill>
        ))}
      </div>

      <motion.div
        key={filter}
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">
          No projects match this filter yet.
        </div>
      )}
    </Section>
  )
}

