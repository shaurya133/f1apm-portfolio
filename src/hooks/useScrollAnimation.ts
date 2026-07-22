
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return {
    ref,
    inView,
    animationClass: inView ? 'animate-fade-in' : 'opacity-0 translate-y-8'
  };
};
