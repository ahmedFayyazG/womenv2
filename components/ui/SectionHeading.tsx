import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  id?: string;
  color?: 'dark' | 'white';
  className?: string;
}

export default function SectionHeading({ children, id, color = 'dark', className = '' }: Props) {
  return (
    <h2
      id={id}
      className={`font-bold leading-tight mb-5 ${color === 'white' ? 'text-white' : 'text-[#2D2A35]'} ${className}`}
      style={{ fontFamily: 'var(--font-quicksand, "Quicksand", sans-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
    >
      {children}
    </h2>
  );
}
