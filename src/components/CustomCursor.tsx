import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default true, verify in useEffect

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if on a device that supports hover
    const matchMedia = window.matchMedia('(pointer: fine)');
    setIsMobile(!matchMedia.matches);

    const checkMobileAndSize = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    matchMedia.addEventListener('change', checkMobileAndSize);

    if (!matchMedia.matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);

    // Efficiently bind hover events
    const interactables = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .magnetic'
    );

    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            const newInteractables = element.querySelectorAll(
              'a, button, [role="button"], input, textarea, select, .magnetic'
            );
            newInteractables.forEach((el) => {
              el.addEventListener('mouseenter', handleHoverStart);
              el.addEventListener('mouseleave', handleHoverEnd);
            });
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      matchMedia.removeEventListener('change', checkMobileAndSize);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div 
          className="w-full h-full border border-white rounded-full flex items-center justify-center transition-transform duration-300 ease-out"
          style={{
            transform: isHovered ? 'scale(1.5)' : 'scale(1)',
          }}
        >
          <div 
            className="w-1.5 h-1.5 bg-white rounded-full transition-transform duration-300"
            style={{
              transform: isHovered ? 'scale(0)' : 'scale(1)',
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
