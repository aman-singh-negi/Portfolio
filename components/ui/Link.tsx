import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  external?: boolean;
}

export function Link({ children, external = false, className = '', ...props }: LinkProps) {
  return (
    <a 
      className={`inline-flex items-center gap-1 text-[#2563EB] hover:gap-2 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
      {external && <span className="text-sm">↗</span>}
    </a>
  );
}
