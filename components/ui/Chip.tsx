import { ReactNode } from 'react';

export default function Chip({ children, variant = 'cyan' }: { children: ReactNode; variant?: 'cyan' | 'magenta' | 'dark' }) {
  const cls = variant === 'magenta'
    ? 'bg-[#E5097F] text-white'
    : variant === 'dark'
    ? 'bg-[#2D2A35] text-white'
    : 'bg-[#35C3D6] text-white';
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${cls}`}>
      {children}
    </span>
  );
}
