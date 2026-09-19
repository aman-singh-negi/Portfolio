import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-[#2563EB] text-white hover:bg-[#2563EB]/90 hover:-translate-y-[-2px]',
    secondary: 'bg-[#FFFFFF] text-[#111111] border border-[#E5E5E5] hover:border-[#D4D4D4] hover:-translate-y-[-2px]'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
