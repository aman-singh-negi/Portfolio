import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import cursorSvg from '../assets/cursor-design.svg';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [morphBlobs, setMorphBlobs] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; depth: number }>>([]);
  const [isClicking, setIsClicking] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [cursorSize, setCursorSize] = useState('26px');
  const [magneticElement, setMagneticElement] = useState<{ element: Element | null, rect: DOMRect | null }>({ element: null, rect: null });
  const [magnetStrength, setMagnetStrength] = useState(0);
  const [trailPoints, setTrailPoints] = useState<Array<{ x: number, y: number, opacity: number }>>([]);
  const [ripples, setRipples] = useState<Array<{ id: number, x: number, y: number }>>([]);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const blobIdRef = useRef(0);
  const rippleIdRef = useRef(0);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const trailPointsRef = useRef<Array<{ x: number, y: number, opacity: number }>>([]);

  // Create 3D morphing blob effect
  const createMorphBlob = (x: number, y: number, size: number = 26) => {
    const newBlob = {
      id: blobIdRef.current++,
      x: x + (Math.random() - 0.5) * 15,
      y: y + (Math.random() - 0.5) * 15,
      size: size + Math.random() * 12,
      delay: Math.random() * 0.3,
      depth: Math.random() * 50 - 25 // Random depth for 3D effect
    };

    setMorphBlobs(prev => [...prev.slice(-12), newBlob]);

    setTimeout(() => {
      setMorphBlobs(prev => prev.filter(blob => blob.id !== newBlob.id));
    }, 2000);
  };
  
  // Add trail point for mouse trail effect
  const addTrailPoint = (x: number, y: number) => {
    const newPoint = { x, y, opacity: 1 };
    trailPointsRef.current = [...trailPointsRef.current.slice(-15), newPoint];
    setTrailPoints(trailPointsRef.current);
    
    // Fade out trail points over time
    setTimeout(() => {
      trailPointsRef.current = trailPointsRef.current.map((point, index) => {
        if (point === newPoint) {
          return { ...point, opacity: 0 };
        }
        return point;
      });
      setTrailPoints(trailPointsRef.current);
    }, 500);
  };
  
  // Create ripple effect on click
  const createRipple = (x: number, y: number) => {
    const newRipple = {
      id: rippleIdRef.current++,
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 800); // Match the animation duration in CSS
  };

  // Check if device is mobile or small screen and update cursor size
  useEffect(() => {
    const checkMobileAndSize = () => {
      const width = window.innerWidth;
      setIsMobile(navigator.maxTouchPoints > 0 || width < 768);
      
      // Update cursor size based on screen width
      if (width < 768) {
        setCursorSize('16px');
      } else if (width < 1025) {
        setCursorSize('20px');
      } else {
        setCursorSize('26px');
      }
    };
    
    checkMobileAndSize();
    window.addEventListener('resize', checkMobileAndSize);
    
    return () => {
      window.removeEventListener('resize', checkMobileAndSize);
    };
  }, []);

  useEffect(() => {
    // Skip setting up mouse events on mobile devices
    if (isMobile) return;
    
    const mouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Calculate velocity and rotation based on movement
      const velX = newX - lastPositionRef.current.x;
      const velY = newY - lastPositionRef.current.y;
      const speed = Math.sqrt(velX * velX + velY * velY);
      
      // Update rotation based on movement direction
      setRotation(prev => ({
        x: prev.x + velY * 0.5,
        y: prev.y + velX * 0.5,
        z: prev.z + (velX - velY) * 0.3
      }));
      
      setVelocity({ x: velX, y: velY });
      
      // Apply magnetic effect if hovering over magnetic element
      if (magneticElement.element && magneticElement.rect) {
        const rect = magneticElement.rect;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = centerX - newX;
        const distanceY = centerY - newY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Calculate magnetic pull based on distance from element center
        const maxDistance = Math.max(rect.width, rect.height) * 1.5;
        const pullStrength = Math.max(0, 1 - distance / maxDistance);
        setMagnetStrength(pullStrength);
        
        if (pullStrength > 0) {
          // Apply magnetic pull
          const magnetX = newX + distanceX * pullStrength * 0.5;
          const magnetY = newY + distanceY * pullStrength * 0.5;
          setMousePosition({ x: magnetX, y: magnetY });
          lastPositionRef.current = { x: magnetX, y: magnetY };
        } else {
          setMousePosition({ x: newX, y: newY });
          lastPositionRef.current = { x: newX, y: newY };
        }
      } else {
        setMousePosition({ x: newX, y: newY });
        lastPositionRef.current = { x: newX, y: newY };
      }
      
      // Add trail point for mouse trail effect
      if (speed > 2) {
        addTrailPoint(newX, newY);
      }

      // Create 3D morphing blobs based on movement speed
      if (speed > 3) {
        const blobSize = Math.min(speed * 0.6 + 18, 45);
        if (Math.random() < 0.4) {
          createMorphBlob(newX, newY, blobSize);
        }
      }

      // Create extra blobs when hovering text
      if (isHoveringText && Math.random() < 0.15) {
        createMorphBlob(newX, newY, 35);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Create ripple effect at click position
      createRipple(e.clientX, e.clientY);
      
      // Create 3D explosion of morphing blobs on click
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          createMorphBlob(
            e.clientX + (Math.random() - 0.5) * 80,
            e.clientY + (Math.random() - 0.5) * 80,
            Math.random() * 25 + 20
          );
        }, i * 25);
      }
      
      // Apply click effect to magnetic element if present
      if (magneticElement.element) {
        magneticElement.element.classList.add('clicked');
        setTimeout(() => {
          if (magneticElement.element) {
            magneticElement.element.classList.remove('clicked');
          }
        }, 300);
      }
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleTextHover = (e: Event) => {
      setIsHoveringText(true);
      // Check if the element should have magnetic effect
      const element = e.target as Element;
      if (element.classList.contains('magnetic') || 
          element.closest('.magnetic') ||
          element.tagName.toLowerCase() === 'button' ||
          element.tagName.toLowerCase() === 'a') {
        const rect = element.getBoundingClientRect();
        setMagneticElement({ element, rect });
      }
    };
    
    const handleTextLeave = () => {
      setIsHoveringText(false);
      setMagneticElement({ element: null, rect: null });
      setMagnetStrength(0);
    };
    
    const handleInteractiveHover = (e: Event) => {
      setIsHoveringInteractive(true);
      // Apply magnetic effect to all interactive elements
      const element = e.target as Element;
      const rect = element.getBoundingClientRect();
      setMagneticElement({ element, rect });
    };
    
    const handleInteractiveLeave = () => {
      setIsHoveringInteractive(false);
      setMagneticElement({ element: null, rect: null });
      setMagnetStrength(0);
    };

    // Add event listeners
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add hover effects for text elements
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, .gradient-text, .spotlight-text');
    textElements.forEach(el => {
      el.addEventListener('mouseenter', handleTextHover);
      el.addEventListener('mouseleave', handleTextLeave);
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .magnetic');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleInteractiveHover);
      el.addEventListener('mouseleave', handleInteractiveLeave);
    });
    
    // Add magnetic class to buttons and links for easier selection
    document.querySelectorAll('a, button').forEach(el => {
      el.classList.add('magnetic');
    });

    // Use MutationObserver to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            
            const newTextElements = element.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, .gradient-text, .spotlight-text');
            newTextElements.forEach(el => {
              el.addEventListener('mouseenter', handleTextHover);
              el.addEventListener('mouseleave', handleTextLeave);
            });

            const newInteractiveElements = element.querySelectorAll('a, button, [role="button"], input, textarea, select, .magnetic');
            newInteractiveElements.forEach(el => {
              el.addEventListener('mouseenter', handleInteractiveHover);
              el.addEventListener('mouseleave', handleInteractiveLeave);
              
              // Add magnetic class to new buttons and links
              if (el.tagName.toLowerCase() === 'a' || el.tagName.toLowerCase() === 'button') {
                el.classList.add('magnetic');
              }
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [isMobile]);

  // Update CSS custom properties for spotlight effect
  useEffect(() => {
    document.documentElement.style.setProperty('--cursor-x', `${mousePosition.x}px`);
    document.documentElement.style.setProperty('--cursor-y', `${mousePosition.y}px`);
  }, [mousePosition]);

  // Add/remove body class for text hover effect
  useEffect(() => {
    if (isHoveringText) {
      document.body.classList.add('text-hover');
    } else {
      document.body.classList.remove('text-hover');
    }
    
    return () => {
      document.body.classList.remove('text-hover');
    };
  }, [isHoveringText]);

  // Don't show custom cursor on mobile devices
  if (isMobile) {
    return null;
  }

  const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);

  return (
    <>
      {/* SVG Filters for Cursor Effects */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 1  0 1 0 0 1  0 0 1 0 1  0 0 0 18 -7" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over"/>
          </filter>
        </defs>
      </svg>
      
      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <div 
          key={`ripple-${ripple.id}`}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '50px',
            height: '50px'
          }}
        />
      ))}

      {/* Main Cursor Container */}
      <div 
        id="cursor"
        className="fixed pointer-events-none z-[10000] select-none Cursor"
        style={{
          filter: 'url(#goo)',
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Mouse Trail Effect */}
        <AnimatePresence>
          {trailPoints.map((point, index) => (
            <motion.div
              key={`trail-${index}`}
              className="absolute rounded-full"
              initial={{ opacity: 0.8, scale: 0.5 }}
              animate={{ 
                opacity: point.opacity * 0.6,
                scale: 0.5 + (1 - point.opacity) * 0.5
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '8px',
                height: '8px',
                x: point.x - 4,
                y: point.y - 4,
                background: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                mixBlendMode: 'difference'
              }}
            />
          ))}
        </AnimatePresence>
        
        {/* Main 3D Cursor Sphere */}
        <motion.div
          ref={cursorRef}
          className="absolute"
          animate={{
            x: mousePosition.x - 15,
            y: mousePosition.y - 15,
            scale: isClicking ? 1.8 : isHoveringText ? 1.4 : isHoveringInteractive ? 1.2 : 1,
            rotateX: rotation.x * 0.1,
            rotateY: rotation.y * 0.1,
            rotateZ: rotation.z * 0.05,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 600, 
            damping: 15,
            mass: 0.2
          }}
          style={{
            transformStyle: 'preserve-3d',
            filter: magnetStrength > 0 ? 'url(#glow)' : 'none',
          }}
        >
          {/* Main cursor sphere */}
          <span 
            className="absolute block rounded-full"
            style={{
              backgroundColor: isHoveringInteractive ? 'rgba(255, 255, 255, 0.9)' : 'white',
              transform: `
                translate(-50%, -50%)
                scaleX(${1 + Math.abs(velocity.x) * 0.008}) 
                scaleY(${1 + Math.abs(velocity.y) * 0.008})
                translateZ(${speed * 0.5}px)
              `,
              transformOrigin: 'center center',
              transition: 'transform 0.1s ease-out, width 0.2s ease, height 0.2s ease, box-shadow 0.3s ease',
              mixBlendMode: 'difference',
              width: cursorSize,
              height: cursorSize,
              boxShadow: magnetStrength > 0 ? `0 0 ${15 + magnetStrength * 15}px rgba(255, 255, 255, ${0.3 + magnetStrength * 0.4})` : 'none'
            }}
          />
          
          {/* Magnetic attraction indicator */}
          {magnetStrength > 0 && (
            <span 
              className="absolute block rounded-full"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                transform: 'translate(-50%, -50%)',
                width: `${parseInt(cursorSize) * (1 + magnetStrength * 1.5)}px`,
                height: `${parseInt(cursorSize) * (1 + magnetStrength * 1.5)}px`,
                opacity: magnetStrength * 0.8,
                transition: 'all 0.2s ease-out'
              }}
            />
          )
        </motion.div>

        {/* 3D Morphing Trail Blobs */}
        <AnimatePresence>
          {morphBlobs.map((blob) => (
            <motion.div
              key={blob.id}
              className="absolute"
              initial={{ 
                x: blob.x - blob.size / 2,
                y: blob.y - blob.size / 2,
                scale: 0,
                opacity: 0.9,
                rotateX: 0,
                rotateY: 0,
                z: blob.depth
              }}
              animate={{ 
                scale: [0, 1.2, 0.9, 0],
                opacity: [0.9, 0.7, 0.4, 0],
                x: blob.x - blob.size / 2 + (Math.random() - 0.5) * 30,
                y: blob.y - blob.size / 2 + (Math.random() - 0.5) * 30,
                rotateX: [0, 180, 360],
                rotateY: [0, -180, -360],
                z: [blob.depth, blob.depth + 20, blob.depth - 10, blob.depth]
              }}
              exit={{ 
                scale: 0,
                opacity: 0,
                z: blob.depth - 50
              }}
              transition={{ 
                duration: 2,
                delay: blob.delay,
                ease: "easeOut"
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div 
                className="rounded-full"
                style={{
                  width: `${blob.size}px`,
                  height: `${blob.size}px`,
                  background: `radial-gradient(circle at 35% 35%, 
                    rgba(255,255,255,0.9) 0%, 
                    rgba(255,255,255,0.7) 30%, 
                    rgba(255,255,255,0.5) 60%, 
                    rgba(255,255,255,0.2) 100%)`,
                  boxShadow: `
                    inset -3px -3px 6px rgba(0,0,0,0.15),
                    inset 3px 3px 6px rgba(255,255,255,0.2),
                    0 0 15px rgba(255,255,255,0.3),
                    0 3px 10px rgba(0,0,0,0.2)
                  `,
                  mixBlendMode: 'difference',
                  transform: `translateZ(${blob.depth}px)`
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* 3D Orbital Elements for Text Hover */}
        {isHoveringText && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`orbit-${i}`}
                className="absolute"
                animate={{
                  x: mousePosition.x - 6 + Math.cos(Date.now() * 0.002 + i * Math.PI / 2) * 25,
                  y: mousePosition.y - 6 + Math.sin(Date.now() * 0.002 + i * Math.PI / 2) * 25,
                  scale: [0.6, 1.1, 0.6],
                  rotateX: [0, 360],
                  rotateY: [0, -360],
                  z: Math.sin(Date.now() * 0.003 + i) * 15
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 40% 40%, 
                      rgba(255,255,255,1) 0%, 
                      rgba(255,255,255,0.6) 50%, 
                      rgba(255,255,255,0.2) 100%)`,
                    boxShadow: `
                      inset -2px -2px 4px rgba(0,0,0,0.2),
                      0 0 10px rgba(255,255,255,0.4),
                      0 2px 6px rgba(0,0,0,0.2)
                    `,
                    mixBlendMode: 'difference'
                  }}
                />
              </motion.div>
            ))}
          </>
        )}

        {/* 3D Click Explosion Effect */}
        {isClicking && (
          <>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`explosion-${i}`}
                className="absolute"
                initial={{
                  x: mousePosition.x - 8,
                  y: mousePosition.y - 8,
                  scale: 0,
                  rotateX: 0,
                  rotateY: 0,
                  z: 0
                }}
                animate={{
                  x: mousePosition.x - 8 + Math.cos((i * Math.PI * 2) / 12) * 60,
                  y: mousePosition.y - 8 + Math.sin((i * Math.PI * 2) / 12) * 60,
                  scale: [0, 1.5, 0],
                  opacity: [1, 0.7, 0],
                  rotateX: [0, 720],
                  rotateY: [0, -720],
                  z: [0, Math.random() * 40 - 20, -30]
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut"
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, 
                      rgba(255,255,255,1) 0%, 
                      rgba(255,255,255,0.8) 40%, 
                      rgba(255,255,255,0.3) 100%)`,
                    boxShadow: `
                      inset -2px -2px 4px rgba(0,0,0,0.2),
                      0 0 12px rgba(255,255,255,0.5),
                      0 3px 8px rgba(0,0,0,0.3)
                    `,
                    mixBlendMode: 'difference'
                  }}
                />
              </motion.div>
            ))}
          </>
        )}
      </div>

      {/* Enhanced 3D Noise Texture with Depth */}
      <div 
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x - 75,
          top: mousePosition.y - 75,
          width: '150px',
          height: '150px',
          background: `
            radial-gradient(circle, transparent 30%, rgba(255,255,255,0.1) 70%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")
          `,
          mixBlendMode: 'overlay',
          borderRadius: '50%',
          transition: 'all 0.3s ease',
          opacity: speed > 8 ? 0.6 : 0.3,
          transform: `
            scale(${1 + speed * 0.02}) 
            rotateZ(${rotation.z * 0.1}deg)
            perspective(500px) 
            rotateX(${rotation.x * 0.05}deg) 
            rotateY(${rotation.y * 0.05}deg)
          `,
          filter: `blur(${Math.max(0, 2 - speed * 0.1)}px) brightness(${1 + speed * 0.02})`
        }}
      />
    </>
  );
};

export default CustomCursor;
