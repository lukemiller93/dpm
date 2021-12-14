import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function useFadeIn({
  customVars = {},
  delay = 0,
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
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay, duration } },
  };

  return { ref, ctrls, vars };
}
