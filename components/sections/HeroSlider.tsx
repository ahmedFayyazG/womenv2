'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const SLIDES = [
  {
    id: 0,
    eyebrow: 'EMPOWERING WOMEN SINCE 2013',
    heading: "Building Stronger Communities Through Women's Empowerment",
    bgGradient: 'linear-gradient(135deg, rgba(91,45,142,0.82) 0%, rgba(229,9,127,0.65) 100%)',
    bgColor: '#2a1040',
  },
  {
    id: 1,
    eyebrow: 'SAFE SPACES FOR GROWTH & HEALING',
    heading: 'A Women-Led Organisation Creating Opportunity for All',
    bgGradient: 'linear-gradient(135deg, rgba(43,168,186,0.8) 0%, rgba(53,195,214,0.6) 100%)',
    bgColor: '#0a3a4a',
  },
  {
    id: 2,
    eyebrow: 'EDUCATION · WELLBEING · LEADERSHIP',
    heading: 'Supporting Women from Refugee, Migrant & Minoritised Communities',
    bgGradient: 'linear-gradient(135deg, rgba(229,9,127,0.82) 0%, rgba(244,114,182,0.65) 100%)',
    bgColor: '#480a28',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden"
      style={{ minHeight: '88vh', background: slide.bgColor, transition: 'background-color 0.8s ease' }}
    >
      {/* Photo-like background texture */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="absolute rounded-full" style={{
            width: `${80 + (i % 4) * 50}px`, height: `${80 + (i % 4) * 50}px`,
            left: `${(i * 19 + 3) % 90}%`, top: `${(i * 23 + 5) % 85}%`,
            background: 'rgba(255,255,255,0.15)', filter: 'blur(1px)',
          }} />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 transition-all duration-700" style={{ background: slide.bgGradient }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4" style={{ minHeight: '88vh' }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5 }}
          >
            {/* Eyebrow with gold blob */}
            <div className="relative inline-block mb-4">
              <span
                className="relative z-10 text-white font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'var(--font-amatic, "Amatic SC", cursive)', fontSize: '1.1rem' }}
              >
                {slide.eyebrow}
              </span>
              <div className="absolute -inset-2 rounded-full opacity-30" style={{ background: 'radial-gradient(ellipse, #D9A521 0%, transparent 70%)' }} />
            </div>

            <h1
              className="text-white font-bold leading-tight mb-8"
              style={{ fontFamily: 'var(--font-quicksand, "Quicksand")', fontSize: 'clamp(28px, 5vw, 58px)', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
            >
              {slide.heading}
            </h1>

            <Button variant="solid-cyan" href="/about">LEARN MORE</Button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev/Next */}
      {[{ fn: prev, side: 'left-4', icon: ChevronLeft }, { fn: next, side: 'right-4', icon: ChevronRight }].map(({ fn, side, icon: Icon }) => (
        <button key={side} onClick={fn} className={`absolute ${side} top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all`} aria-label="Slide">
          <Icon size={20} />
        </button>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 24 : 10, height: 10, background: i === current ? '#35C3D6' : 'rgba(255,255,255,0.5)', borderRadius: 9999, border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }} />
        ))}
      </div>

    </section>
  );
}
