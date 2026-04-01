import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpg'
import { PROFILE } from '../data.js'
import Section from './Section.jsx'
import { fadeUp, stagger } from './motion.js'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A little about me"
      subtitle="Professional, curious, and focused on building products that feel great to use."
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-5"
        >
          <div className="glass ring-soft overflow-hidden rounded-3xl">
            <img
              src={profileImg}
              alt="Profile"
              loading="lazy"
              className="h-[320px] w-full object-cover sm:h-[380px]"
            />
          </div>
        </motion.div>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="lg:col-span-7"
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }} className="text-zinc-300">
            {PROFILE.intro}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-6 grid gap-4 sm:grid-cols-2"
          >
            <div className="glass rounded-3xl p-5 ring-soft">
              <div className="text-sm font-semibold text-white">Career objective</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{PROFILE.objective}</p>
            </div>
            <div className="glass rounded-3xl p-5 ring-soft">
              <div className="text-sm font-semibold text-white">How I work</div>
              <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                <li>• Ship iteratively with strong fundamentals</li>
                <li>• Design for accessibility and clarity</li>
                <li>• Keep codebases clean and scalable</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {['UI/UX', 'Performance', 'Accessibility', 'Clean Architecture', 'Animations'].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}

