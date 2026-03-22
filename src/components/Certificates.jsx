import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Section from "./Section.jsx";
import { CERTIFICATES } from "../data.js";
import { fadeUp, stagger } from "./motion.js";

export default function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title="Credentials"
      subtitle="A few certifications that back up my skills"
    >
      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {CERTIFICATES.map((c) => (
          <motion.a
            key={`${c.title}-${c.year}`}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="glass ring-soft group overflow-hidden rounded-3xl"
          >
            <div className="relative">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="h-40 w-full object-cover opacity-[0.95] transition duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white">
                    {c.title}
                  </div>
                  <div className="mt-1 text-xs text-zinc-400">
                    {c.issuer} • {c.year}
                  </div>
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <FiExternalLink className="text-base text-zinc-200" />
                </span>
              </div>
              <p className="mt-3 text-sm text-zinc-300"></p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
