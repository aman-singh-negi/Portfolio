import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover ? 'hover:-translate-y-[-4px] hover:shadow-lg transition-all duration-300' : '';
  
  return (
    <div className={`bg-[#FFFFFF] border border-[#E5E5E5] rounded-xl p-6 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
