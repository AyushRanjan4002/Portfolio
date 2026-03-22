export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export const stagger = (delayChildren = 0.06) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren } },
})

