import { motion } from 'framer-motion'
import { fadeUp, stagger } from './motion.js'

export default function Timeline({ items }) {
  return (
    <motion.ol
      variants={stagger(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative space-y-4"
    >
      <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />
      {items.map((it) => (
        <motion.li
          key={`${it.title}-${it.place}-${it.year}`}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative pl-12"
        >
          <div className="absolute left-2 top-3 h-5 w-5 rounded-full border border-white/15 bg-zinc-950">
            <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400" />
          </div>

          <div className="glass ring-soft rounded-3xl p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div className="text-sm font-semibold text-white">{it.title}</div>
              <div className="text-xs font-medium text-zinc-400">{it.year}</div>
            </div>
            <div className="mt-1 text-sm text-zinc-300">{it.place}</div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{it.detail}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  )
}

