import { motion } from 'framer-motion'
import { fadeUp } from './motion.js'

export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-16 sm:py-20 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-10"
          >
            {eyebrow && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-3 max-w-2xl text-pretty text-zinc-300">{subtitle}</p>}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  )
}

