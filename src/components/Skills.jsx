import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { SKILLS } from '../data.js'
import { fadeUp, stagger } from './motion.js'

function SkillCard({ name, icon: Icon, level }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -3, scale: 1.01 }}
      className="glass ring-soft rounded-3xl p-4"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            {Icon ? <Icon className="text-xl text-zinc-100" /> : <span className="h-2 w-2 rounded-full bg-violet-400" />}
          </span>
          <div className="text-sm font-semibold text-white">{name}</div>
        </div>
        <div className="text-xs font-medium text-zinc-400">{level}%</div>
      </div>

      <div className="mt-3 h-2 w-full rounded-full bg-white/5 ring-1 ring-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I use to build"
      subtitle="A balanced stack for building production-ready apps — from UI to backend and tooling."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {SKILLS.map((group) => (
          <div key={group.category} className="glass ring-soft rounded-3xl p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="text-sm font-semibold text-white">{group.category}</div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
                {group.items.length} skills
              </span>
            </div>

            <motion.div
              variants={stagger(0.04)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {group.items.map((s) => (
                <SkillCard key={s.name} name={s.name} icon={s.icon} level={s.level} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  )
}

