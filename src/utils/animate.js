// slide up animate
export const animate = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hide: {
    y: 50,
    opacity: 0,
  },
};

export const card = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
  hide: {
    opacity: 0,
  },
};

export const cardItem = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hide: {
    opacity: 0,
    x: 50,
  },
};
