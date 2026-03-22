import { motion } from "framer-motion";
import { FiDownload, FiFileText } from "react-icons/fi";
import Section from "./Section.jsx";
import { fadeUp } from "./motion.js";

const RESUME_URL = "/resume.pdf";

export default function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Resume"
      subtitle="Preview and download. Replace `public/resume.pdf` with your actual resume file."
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-8"
        >
          <div className="glass ring-soft overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/5 px-5 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <FiFileText className="text-lg" />
                <span>Resume preview</span>
              </div>
              <a
                href={RESUME_URL}
                download
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                <FiDownload />
                Download
              </a>
            </div>

            <div className="aspect-[16/10] bg-zinc-950 relative">
              <iframe
                title="Resume preview"
                src={RESUME_URL}
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-4"
        >
          <div className="glass ring-soft rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">Quick notes</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>• Keep it one page and impact-focused</li>
              <li>• Lead with achievements and quantifiable results</li>
              <li>• Use action verbs: Designed, Built, Optimized, Developed</li>
              <li>• Include GitHub, Portfolio, and LinkedIn links</li>
              <li>• Tailor content and keywords for each role</li>
              <li>
                • Use ATS-friendly formatting (avoid graphics, keep clean)
              </li>
            </ul>

            <a
              href={RESUME_URL}
              download
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
            >
              <FiDownload />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
