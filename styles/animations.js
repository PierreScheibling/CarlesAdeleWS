export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
}

export const navAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { ease: 'easeInOut', duration: 0.8 },
  },
}

export const footerAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { ease: 'easeInOut', duration: 1},
  },
}

export const articlesAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delay: 0.5,
      duration: 0.5,
      when: 'afterChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
}

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { type: 'tween', ease: 'easeOut', duration: 0.75 },
  },
}

export const expertiseTitleAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: 'tween', ease: 'easeOut', duration: 0.75, delay: 0.5 },
  },
}

export const expertiseTextAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: 'tween', ease: 'easeOut', duration: 0.75, delay: 1 },
  },
}

export const honorairesTextAnim = {
  hidden: { opacity: 0, y: -150 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'tween', ease: 'easeOut', duration: 0.75, delay: 0.7 },
  },
}

export const titlelineAnim = {
  hidden: { width: '0%' },
  show: {
    width: '33%',
    transition: { duration: 1.5, delay: 0.5 },
  },
}

export const lineAnim = {
  hidden: { width: '0%' },
  show: {
    width: '100%',
    transition: { duration: 1 },
  },
}

export const mentionLineAnim = {
  hidden: { width: '0%' },
  show: {
    width: '12%',
    transition: { duration: 1, delay: 0.3 },
  },
}

export const fiscaTextAnim = {
  hidden: { x: -1300, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.3 },
  },
}

export const fiscabackAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.3 },
  },
}

export const drBackAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
}

export const letterA = {
  hidden: {
    opacity: 0,
    top: 'clamp(-30rem, -20vh, 10rem)',
    left: 'clamp(-30rem, -20vh, 10rem)',
  },
  show: {
    opacity: 1,
    top: 'clamp(-30rem, -11vh, 10rem)',
    left: 'clamp(-30rem, 0vh, 10rem)',
    transition: { duration: 1 },
  },
}

export const letterC = {
  hidden: {
    opacity: 0,
    top: 'clamp(-30rem, 15vh, 10rem)',
    right: 'clamp(-30rem, -15vh, 10rem)',
  },
  show: {
    opacity: 0.8,
    top: 'clamp(-30rem, 1vh, 10rem)',
    right: 'clamp(-30rem, 1vh, 10rem)',
    transition: { duration: 1 },
  },
}

export const avocatAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1.3 },
  },
}

export const avocat2Anim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1.5 },
  },
}

export const lineIndex = {
  hidden: { width: 0 },
  show: {
    width: '40%',
    transition: { duration: 1.1, delay: 0.6 },
  },
}

export const toggleMenuAnim = {
  hhidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1 },
  },
}
