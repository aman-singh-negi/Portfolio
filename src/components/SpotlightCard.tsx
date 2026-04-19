import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const SpotlightCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bounds = useRef<DOMRect | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!bounds.current) {
      bounds.current = rect;
    }
    
    // For spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    // For tilt
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    bounds.current = null;
    x.set(0);
    y.set(0);
  }

  return (
    <div style={{ perspective: "1500px", transformStyle: "preserve-3d" }} className="h-full">
      <motion.div
        className={`group relative overflow-hidden ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10 hidden md:block mix-blend-screen"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(139, 92, 246, 0.35),
                transparent 80%
              )
            `,
            transform: "translateZ(1px)"
          }}
        />
        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d", height: "100%" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default SpotlightCard;
