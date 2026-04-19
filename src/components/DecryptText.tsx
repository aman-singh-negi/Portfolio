import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

interface DecryptTextProps {
  text: string;
  className?: string;
  speed?: number; // Milliseconds per character change
  maxIterations?: number; // How many times a character scrambles before settling
  as?: React.ElementType; // The HTML element to render (default is 'span')
}

export const DecryptText = ({
  text,
  className = '',
  speed = 50,
  maxIterations = 10,
  as: Component = 'span'
}: DecryptTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let iteration = 0;
      let currentInterval: number | null = null;

      const scramble = () => {
        setDisplayText((prev) => {
          return text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return text[index]; // Revealed character
              }
              // Scrambled character
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join('');
        });

        if (iteration >= text.length) {
          if (currentInterval) clearInterval(currentInterval);
        }

        iteration += 1 / maxIterations;
      };

      currentInterval = window.setInterval(scramble, speed);

      return () => {
        if (currentInterval) clearInterval(currentInterval);
      };
    }
  }, [isInView, text, speed, maxIterations]);

  // Framer motion wrap if we want to add any other motion properties, 
  // but using just simple state updates for the scramble is very performant here.
  return (
    <Component ref={ref} className={`${className} font-display tracking-tight`}>
      {displayText}
    </Component>
  );
};

export default DecryptText;
