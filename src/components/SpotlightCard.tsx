import React, { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

const SpotlightCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bounds = useRef<DOMRect | null>(null);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (!bounds.current) {
      bounds.current = currentTarget.getBoundingClientRect();
    }
    mouseX.set(clientX - bounds.current.left);
    mouseY.set(clientY - bounds.current.top);
  }

  function handleMouseLeave() {
    bounds.current = null;
  }

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10 hidden md:block mix-blend-screen"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
