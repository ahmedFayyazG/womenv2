'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="section-shell flex items-center justify-between gap-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E5097F, #35C3D6)' }}>
            <svg width="20" height="18" viewBox="0 0 24 22" fill="white">
              <path d="M12 21.593c-.169-.15-8.31-7.376-8.31-12.458C3.69 4.72 7.41 2 12 2s8.31 2.72 8.31 7.135c0 5.082-8.141 12.308-8.31 12.458z"/>
            </svg>
          </div>
          <div>
            <span className="font-bold text-[#E5097F] text-sm leading-none block" style={{ fontFamily: 'var(--font-quicksand)' }}>Women&apos;s</span>
            <span className="text-[10px] text-[#5A5663] leading-none block" style={{ fontFamily: 'var(--font-quicksand)' }}>Voices</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1 px-4 py-2 text-[13px] font-semibold transition-colors whitespace-nowrap ${
                link.active ? 'text-[#35C3D6] border-b-2 border-[#35C3D6]' : 'text-[#2D2A35] hover:text-[#E5097F]'
              }`}
              style={{ fontFamily: 'var(--font-quicksand)' }}
            >
              {link.label}
              {('dropdown' in link) && <ChevronDown size={12} />}
            </Link>
          ))}
        </nav>

        {/* Right: search + donate */}
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 hidden lg:flex items-center justify-center text-[#5A5663] hover:text-[#E5097F] transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#E5097F] text-white text-[11px] font-bold uppercase tracking-wider rounded-full px-5 py-2.5 hover:bg-[#c4076d] transition-colors"
            style={{ fontFamily: 'var(--font-quicksand)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 22" fill="currentColor"><path d="M12 21.593c-.169-.15-8.31-7.376-8.31-12.458C3.69 4.72 7.41 2 12 2s8.31 2.72 8.31 7.135c0 5.082-8.141 12.308-8.31 12.458z"/></svg>
            DONATE NOW
          </Link>
          <button className="lg:hidden p-2 text-[#2D2A35]" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center justify-between py-3 border-b border-gray-50 text-[14px] font-semibold text-[#2D2A35] hover:text-[#E5097F]" onClick={() => setOpen(false)}>
              {link.label}
              {('dropdown' in link) && <ChevronDown size={14} />}
            </Link>
          ))}
          <Link href="/donate" className="mt-4 flex items-center justify-center gap-2 bg-[#E5097F] text-white text-xs font-bold uppercase tracking-wider rounded-full px-6 py-3 hover:bg-[#c4076d]" onClick={() => setOpen(false)}>
            DONATE NOW
          </Link>
        </div>
      )}
    </header>
  );
}
