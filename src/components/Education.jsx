import Section from './Section.jsx'
import Timeline from './Timeline.jsx'
import { EDUCATION } from '../data.js'

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Education timeline"
      subtitle="Where I built core CS foundations and practical engineering skills."
    >
      <Timeline items={EDUCATION} />
    </Section>
  )
}

