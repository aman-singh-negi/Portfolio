import React from 'react';

interface SpotlightTextProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const SpotlightText: React.FC<SpotlightTextProps> = ({ 
  children, 
  className = '', 
  as: Component = 'span' 
}) => {
  const textContent = typeof children === 'string' ? children : '';
  
  return (
    <Component 
      className={`spotlight-text ${className}`}
      {...({ 'data-text': textContent } as any)}
    >
      {children}
    </Component>
  );
};

export default SpotlightText;