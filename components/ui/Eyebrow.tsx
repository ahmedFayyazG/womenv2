import { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  color?: 'magenta' | 'cyan' | 'white';
  className?: string;
}

export default function Eyebrow({ children, color = 'magenta', className = '' }: EyebrowProps) {
  const colorClass = color === 'magenta' ? 'text-[#E5097F]' : color === 'cyan' ? 'text-[#35C3D6]' : 'text-white';
  return (
    <p
      className={`mb-3 text-sm font-bold uppercase tracking-[0.2em] ${colorClass} ${className}`}
      style={{ fontFamily: 'var(--font-amatic, "Amatic SC", cursive)', fontSize: '1rem', letterSpacing: '0.2em' }}
    >
      {children}
    </p>
  );
}
