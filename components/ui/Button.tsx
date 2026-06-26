import Link from 'next/link';
import { ReactNode } from 'react';

type Variant = 'solid-magenta' | 'solid-cyan' | 'outline-magenta' | 'outline-white' | 'outline-dark';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const styles: Record<Variant, string> = {
  'solid-magenta': 'bg-[#E5097F] text-white hover:bg-[#c4076d] border-2 border-[#E5097F]',
  'solid-cyan': 'bg-[#35C3D6] text-white hover:bg-[#2BA8BA] border-2 border-[#35C3D6]',
  'outline-magenta': 'bg-transparent text-[#E5097F] border-2 border-[#E5097F] hover:bg-[#E5097F] hover:text-white',
  'outline-white': 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#2D2A35]',
  'outline-dark': 'bg-transparent text-[#2D2A35] border-2 border-[#2D2A35] hover:bg-[#2D2A35] hover:text-white',
};

export default function Button({ children, href, variant = 'solid-magenta', onClick, type = 'button', className = '' }: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-200 min-h-[44px] ${styles[variant]} ${className}`;
  if (href) return <Link href={href} className={base}>{children}</Link>;
  return <button type={type} onClick={onClick} className={base}>{children}</button>;
}
