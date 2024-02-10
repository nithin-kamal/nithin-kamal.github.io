export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -1500, width: 0, height: 0, opacity: 0 },
    visible: {
      x: 0,
      width: "100%",
      height: "100%",
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 1500, width: 0, height: 0, opacity: 0 },
    visible: {
      x: 0,
      width: "100%",
      height: "100%",
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, height: 0, opacity: 0 },
  visible: {
    y: 0,
    height: "100%",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
