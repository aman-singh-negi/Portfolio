import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/SpotlightText.css';

const SpotlightText = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const updateSpotlight = (e: MouseEvent) => {
      const rect = spotlight.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setSpotlightPosition({ x, y });
    };

    const options: AddEventListenerOptions = { passive: true };
    document.addEventListener('mousemove', updateSpotlight, options);

    return () => {
      document.removeEventListener('mousemove', updateSpotlight, options);
    };
  }, []);

  return (
    <div ref={spotlightRef} className="spotlight-container">
      <motion.div
        className="spotlight"
        animate={{
          left: spotlightPosition.x,
          top: spotlightPosition.y,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 40 }}
      />
      <h1 className="spotlight-text">Welcome to My Portfolio</h1>
    </div>
  );
};

export default SpotlightText;
