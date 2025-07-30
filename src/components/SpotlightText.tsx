import React, { useRef, useEffect, memo } from 'react';

interface SpotlightTextProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const SpotlightText: React.FC<SpotlightTextProps> = memo(({ 
  children, 
  className = '', 
  as: Component = 'span' 
}) => {
  const textContent = typeof children === 'string' ? children : '';
  const elementRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Skip effect for SSR
    if (typeof window === 'undefined') return;
    
    // Performance optimization: Use passive listeners
    const options = { passive: true };
    
    // Use requestAnimationFrame for smoother cursor tracking
    let rafId: number;
    let lastX = 0;
    let lastY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Cancel any pending animation frame
      cancelAnimationFrame(rafId);
      
      // Schedule the update on the next animation frame
      rafId = requestAnimationFrame(() => {
        if (!elementRef.current) return;
        
        // Get element's bounding rectangle
        const rect = elementRef.current.getBoundingClientRect();
        
        // Calculate cursor position relative to the element
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Only update if position changed significantly (throttling)
        if (Math.abs(x - lastX) > 5 || Math.abs(y - lastY) > 5) {
          lastX = x;
          lastY = y;
          
          // Apply the cursor position as CSS variables
          elementRef.current.style.setProperty('--cursor-x', `${x}px`);
          elementRef.current.style.setProperty('--cursor-y', `${y}px`);
        }
      });
    };
    
    // Add event listener to document for better tracking
    document.addEventListener('mousemove', handleMouseMove as EventListener, options);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove as EventListener, options);
      cancelAnimationFrame(rafId);
    };
  }, []);
  
  return (
    <Component 
      ref={elementRef as any}
      className={`spotlight-text ${className}`}
      data-text={textContent}
      style={{
        willChange: 'mask, -webkit-mask', // Performance hint for browsers
        transform: 'translateZ(0)' // Force GPU acceleration
      }}
    >
      {children}
    </Component>
  );
});

// Display name for debugging
SpotlightText.displayName = 'SpotlightText';

export default SpotlightText;