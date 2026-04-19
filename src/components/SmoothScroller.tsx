import { useEffect, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollerProps {
  children: ReactNode;
}

const SmoothScroller = ({ children }: SmoothScrollerProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Make lenis globally available for other components (like Framer Motion)
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      Reflect.deleteProperty(window, 'lenis');
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroller;
