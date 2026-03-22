import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useMemo, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import Section from "./Section.jsx";
import { fadeUp } from "./motion.js";

function getEnv(key) {
  return import.meta?.env?.[key] ?? "";
}

export default function Contact() {
  const serviceId = getEnv("VITE_EMAILJS_SERVICE_ID");
  const templateId = getEnv("VITE_EMAILJS_TEMPLATE_ID");
  const publicKey = getEnv("VITE_EMAILJS_PUBLIC_KEY");
  const canSend = Boolean(serviceId && templateId && publicKey);

  const portfolioEmail = useMemo(
    () => getEnv("VITE_PORTFOLIO_EMAIL") || "priyanshut1885@gmail.com",
    [],
  );
  const portfolioLocation = useMemo(
    () => getEnv("VITE_PORTFOLIO_LOCATION") || "Palampur, India",
    [],
  );

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "idle", message: "" });

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    if (!canSend) {
      setStatus({
        type: "error",
        message:
          "Email sending is not configured. Add EmailJS keys in a `.env` file (see `.env.example`).",
      });
      return;
    }

    try {
      setSending(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey },
      );
      setStatus({
        type: "success",
        message: "Message sent successfully. I’ll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Failed to send. Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something great"
      subtitle="Have an opportunity or want to collaborate? Send a message — I reply quickly."
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <form onSubmit={onSubmit} className="glass ring-soft rounded-3xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-medium text-zinc-300">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-zinc-500 focus:border-violet-400/60"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-zinc-300">Email</span>
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-zinc-500 focus:border-violet-400/60"
                  placeholder="you@example.com"
                  autoComplete="email"
                  type="email"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-xs font-medium text-zinc-300">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={6}
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-violet-400/60"
                placeholder="Tell me about the role, project, or idea…"
              />
            </label>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={sending}
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending ? "Sending…" : "Send message"}
              </button>
              <a
                href={`mailto:${portfolioEmail}`}
                className="rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
              >
                Email instead
              </a>

              {!canSend && (
                <span className="text-xs text-zinc-400">
                  EmailJS not configured — form will show a warning until `.env`
                  is set.
                </span>
              )}
            </div>

            {status.type !== "idle" && (
              <div
                className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                    : "border-rose-400/30 bg-rose-400/10 text-rose-200"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="glass ring-soft rounded-3xl p-6">
            <div className="text-sm font-semibold text-white">
              Contact details
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-zinc-300">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <HiOutlineMail className="text-xl text-white" />
                </span>
                <a
                  className="hover:text-white"
                  href={`mailto:${portfolioEmail}`}
                >
                  {portfolioEmail}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <HiOutlineLocationMarker className="text-xl text-white" />
                </span>
                <span>{portfolioLocation}</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
                href="https://www.linkedin.com/in/priyanshu-thakur-71a4652aa/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
                href="https://github.com/priyanshu-thakur1885"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
