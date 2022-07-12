/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function useAnimateIn({
  customVars = {},
  delay = 0,
  distance = `1rem`,
  duration = 1,
  repeat = false,
  threshold = 0.75,
}) {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: !repeat,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start('visible');
    }
    if (!inView) {
      ctrls.start('hidden');
    }
  }, [ctrls, inView]);

  const vars = customVars || {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return { ref, ctrls, vars };
}
