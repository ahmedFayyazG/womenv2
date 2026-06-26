'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { ACCORDION_ITEMS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionHeading from '@/components/ui/SectionHeading';

export default function VolunteerAccordion() {
  const [open, setOpen] = useState<number>(1);

  return (
    <section className="paper-texture py-16 lg:py-24" aria-labelledby="volunteer-heading">
      <div className="section-shell">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left: King's Award graphic */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}>
            <KingsAwardPanel />
          </motion.div>

          {/* Right: accordion */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Eyebrow>GET INVOLVED</Eyebrow>
            <SectionHeading id="volunteer-heading">Why Volunteer With Women&apos;s Voices?</SectionHeading>
            <div className="flex flex-col gap-3 mb-8">
              {ACCORDION_ITEMS.map((item) => (
                <div key={item.id} className="rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                  <button
                    onClick={() => setOpen(open === item.id ? 0 : item.id)}
                    aria-expanded={open === item.id}
                    className={`w-full flex items-center justify-between px-5 py-4 text-left text-sm font-bold transition-all duration-200 ${open === item.id ? 'bg-[#35C3D6] text-white' : 'bg-white text-[#2D2A35] hover:bg-gray-50'}`}
                    style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 700 }}
                  >
                    <span className="pr-4 text-[13px]">{item.title}</span>
                    {open === item.id ? <Minus size={16} className="shrink-0"/> : <Plus size={16} className="shrink-0 text-[#E5097F]"/>}
                  </button>
                  <AnimatePresence initial={false}>
                    {open === item.id && (
                      <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.4,0,0.2,1] }} style={{ overflow: 'hidden' }}>
                        <div className="bg-white px-5 pb-5 pt-3">
                          <p className="text-[#5A5663] text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <Button variant="solid-magenta" href="/contact">GET IN TOUCH</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function KingsAwardPanel() {
  const values = [
    { label: "Women's\nEmpowerment", color: '#E5097F' },
    { label: "Community\nVoice", color: '#35C3D6' },
    { label: "Equality &\nInclusion", color: '#5B2D8E' },
    { label: "Education\n& Growth", color: '#CA8A04' },
    { label: "Health &\nWellbeing", color: '#059669' },
    { label: "Collective\nStrength", color: '#2563EB' },
  ];
  return (
    <div className="rounded-2xl overflow-hidden relative min-h-[420px]" style={{ background: 'linear-gradient(135deg, #3D1A66 0%, #5B2D8E 40%, #7C3AED 100%)' }}>
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-50" style={{ background: 'linear-gradient(225deg, #F472B6 0%, transparent 70%)' }}/>
      <div className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle, #35C3D6 0%, transparent 70%)' }}/>
      <div className="relative z-10 flex flex-col items-center justify-center p-8 min-h-[420px] gap-6">
        <p className="text-white/80 text-xs font-bold uppercase tracking-[0.25em]" style={{ fontFamily: 'var(--font-amatic, "Amatic SC", cursive)', fontSize: '1rem' }}>OUR VALUES</p>
        <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
          {values.map((v, i) => (
            <div key={i} className="rounded-xl p-3 text-center" style={{ background: `${v.color}22`, border: `1px solid ${v.color}55` }}>
              <div className="w-6 h-6 rounded-full mx-auto mb-2" style={{ background: v.color }}/>
              <p className="text-white text-[9px] font-bold uppercase leading-tight whitespace-pre-line tracking-wide">{v.label}</p>
            </div>
          ))}
        </div>
        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #E5097F, #35C3D6)' }}>
          <span className="text-white font-black text-lg" style={{ fontFamily: 'var(--font-quicksand)' }}>WV</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-[#2a0a50] py-3 px-4 text-center">
        <p className="text-white font-black text-[11px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-quicksand)' }}>WOMEN&apos;S VOICES · MANCHESTER · EST. 2013</p>
      </div>
    </div>
  );
}
