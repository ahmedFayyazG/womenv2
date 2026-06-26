'use client';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-[#35C3D6] text-white flex items-center justify-center shadow-lg hover:bg-[#2BA8BA] transition-all hover:scale-110"
      aria-label="Scroll to top"
    >
      <ChevronUp size={20}/>
    </button>
  );
}
