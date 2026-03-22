import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineArrowUp, HiOutlineMail } from "react-icons/hi";

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/60 py-10">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">
              Let’s connect
            </div>
            <div className="mt-2 flex items-center gap-3">
              <a
                className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                href="https://github.com/priyanshu-thakur1885"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl text-zinc-100 transition group-hover:scale-110" />
              </a>
              <a
                className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                href="https://www.linkedin.com/in/priyanshu-thakur-71a4652aa/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-zinc-100 transition group-hover:scale-110" />
              </a>
              <a
                className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                href="priyanshut1885@gmail.com"
                aria-label="Email"
              >
                <HiOutlineMail className="text-2xl text-zinc-100 transition group-hover:scale-110" />
              </a>
            </div>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={backToTop}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 sm:self-start"
          >
            <HiOutlineArrowUp className="text-lg" />
            Back to top
          </motion.button>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Priyanshu Thakur. All rights reserved.
          </span>
          <span>Built with React • Tailwind • Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
