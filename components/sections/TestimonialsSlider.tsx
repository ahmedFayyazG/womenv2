'use client';
import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionHeading from '@/components/ui/SectionHeading';

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const next = useCallback(() => { setDir(1); setCurrent((c) => (c + 1) % TESTIMONIALS.length); }, []);
  const prev = useCallback(() => { setDir(-1); setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); }, []);

  const visible = [TESTIMONIALS[current], TESTIMONIALS[(current + 1) % TESTIMONIALS.length]];

  return (
    <section className="paper-texture py-16 lg:py-24" aria-labelledby="testimonials-heading">
      <div className="section-shell">
        <div className="grid lg:grid-cols-[340px_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}>
            <Eyebrow>TESTIMONIALS</Eyebrow>
            <SectionHeading id="testimonials-heading">What People Say About Us</SectionHeading>
            <p className="text-[#5A5663] text-sm leading-relaxed mb-7 max-w-[340px]">
              Hear from our supporters and beneficiaries about the real impact we&apos;ve made. Dive in and be inspired.
            </p>
            <Button variant="outline-magenta" href="/testimonials">ALL TESTIMONIALS</Button>
          </motion.div>

          {/* Right: slider */}
          <div className="relative min-w-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={current} className="grid sm:grid-cols-2 gap-5" initial={{ opacity: 0, x: dir * 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -30 }} transition={{ duration: 0.4 }}>
                {visible.map((t) => (
                  <div key={t.id} className="bg-white rounded-xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col gap-4">
                    <div className="text-[#35C3D6] select-none" style={{ fontSize: '3.5rem', fontFamily: 'Georgia,serif', lineHeight: 0.7 }} aria-hidden>❝</div>
                    <p className="text-[#5A5663] text-sm leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-sm" style={{ background: 'linear-gradient(135deg, #E5097F, #35C3D6)' }} aria-hidden>
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-[#2D2A35] font-bold text-sm" style={{ fontFamily: 'var(--font-quicksand)' }}>{t.name}</p>
                        <p className="text-[#35C3D6] text-[11px] font-semibold uppercase tracking-wide">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center gap-3 mt-6 justify-end">
              <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-[#E5097F] text-[#E5097F] hover:bg-[#E5097F] hover:text-white flex items-center justify-center transition-all" aria-label="Previous"><ChevronLeft size={16}/></button>
              <button onClick={next} className="w-10 h-10 rounded-full border-2 border-[#E5097F] text-[#E5097F] hover:bg-[#E5097F] hover:text-white flex items-center justify-center transition-all" aria-label="Next"><ChevronRight size={16}/></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
