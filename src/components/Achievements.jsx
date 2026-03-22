import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import Section from './Section.jsx'
import { ACHIEVEMENTS } from '../data.js'
import { fadeUp, stagger } from './motion.js'

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Highlights"
      subtitle="A few milestones that reflect my focus on execution, learning, and impact."
    >
      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {ACHIEVEMENTS.map((a) => (
          <motion.div
            key={a.title}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="glass ring-soft rounded-3xl p-5"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <FiAward className="text-xl text-white" />
              </span>
              <div className="text-sm font-semibold text-white">{a.title}</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{a.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

