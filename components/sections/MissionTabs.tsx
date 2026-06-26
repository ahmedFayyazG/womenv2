'use client';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { MISSION_TABS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionHeading from '@/components/ui/SectionHeading';
import { useCounter } from '@/hooks/useCounter';

export default function MissionTabs() {
  const [activeTab, setActiveTab] = useState('mission');
  const [inView, setInView] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const tab = MISSION_TABS.find((t) => t.id === activeTab)!;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white" aria-labelledby="mission-heading">
      {/* Tab buttons */}
      <div className="section-shell pt-12 pb-0">
        <div className="flex" role="tablist">
          {MISSION_TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={activeTab === t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
                activeTab === t.id ? 'bg-[#E5097F] text-white' : 'bg-[#2D2A35] text-white/70 hover:text-white'
              }`}
              style={{ fontFamily: 'var(--font-quicksand)', letterSpacing: '0.12em' }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content panels */}
      <div className="grid lg:grid-cols-2 min-h-[520px]">
        {/* Left: magenta */}
        <div className="bg-[#E5097F] p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full bg-white/8 pointer-events-none" />
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
              <Eyebrow color="white">{tab.eyebrow}</Eyebrow>
              <SectionHeading color="white" id="mission-heading">{tab.heading}</SectionHeading>
              <p className="text-white/85 text-sm leading-relaxed mb-8">{tab.body}</p>
              {tab.counters && (
                <div className="flex gap-8 mb-8">
                  {tab.counters.map((c) => <CounterBlock key={c.label} {...c} trigger={inView && activeTab === 'mission'} />)}
                </div>
              )}
              {tab.bars && (
                <div className="flex flex-col gap-5 mb-8">
                  {tab.bars.map((b) => <ProgressBar key={b.label} {...b} trigger={inView && activeTab === 'vision'} />)}
                </div>
              )}
              <Button variant="outline-white" href="/donate">DONATE NOW ♥</Button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: photo */}
        <div className="relative bg-[#1a3040] flex items-center justify-center overflow-hidden min-h-[360px]">
          <div className="absolute inset-0 opacity-15">
            <svg width="100%" height="100%" viewBox="0 0 500 500"><circle cx="250" cy="250" r="200" stroke="white" strokeWidth="1" fill="none"/><circle cx="250" cy="250" r="140" stroke="white" strokeWidth="1" fill="none"/><circle cx="250" cy="250" r="80" stroke="white" strokeWidth="1" fill="none"/></svg>
          </div>
          {/* Hands illustration */}
          <svg width="300" height="240" viewBox="0 0 300 240" fill="none" className="relative z-10">
            <ellipse cx="150" cy="190" rx="100" ry="20" fill="rgba(255,255,255,0.04)"/>
            <path d="M85 190 C75 170 70 148 80 133 C86 124 97 122 106 128 C103 113 108 103 119 103 C128 103 133 111 132 121 C137 107 146 100 154 104 C162 108 163 118 160 130 C166 115 175 110 182 114 C190 118 190 130 183 146 L178 190 Z" fill="rgba(255,255,255,0.25)"/>
            <path d="M215 190 C225 170 230 148 220 133 C214 124 203 122 194 128 C197 113 192 103 181 103 C172 103 167 111 168 121 C163 107 154 100 146 104 C138 108 137 118 140 130 C134 115 125 110 118 114 C110 118 110 130 117 146 L122 190 Z" fill="rgba(255,255,255,0.25)"/>
            <circle cx="150" cy="152" r="10" fill="rgba(229,9,127,0.7)"/>
            <path d="M150 158 L141 150 C138 147 138 143 141 140 C144 137 149 138 150 141 L151 143 L152 141 C153 138 158 137 161 140 C164 143 164 147 161 150 Z" fill="white" opacity="0.9"/>
          </svg>
          {/* Gold dots */}
          <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none flex items-end overflow-hidden">
            {[40,90,150,200,260,310,360,420].map((x, i) => (
              <div key={i} className="absolute rounded-full" style={{ left: x, bottom: 8 + (i % 3) * 6, width: 6 + (i % 3) * 3, height: 6 + (i % 3) * 3, background: '#D9A521', opacity: 0.2 + (i % 4) * 0.06 }}/>
            ))}
          </div>
          {/* Play button */}
          <button onClick={() => setVideoOpen(true)} className="absolute z-20 w-16 h-16 rounded-full bg-[#35C3D6] hover:bg-[#2BA8BA] flex items-center justify-center shadow-[0_8px_30px_rgba(53,195,214,0.5)] transition-all hover:scale-110 active:scale-95" aria-label="Watch video">
            <Play size={22} className="text-white ml-1" fill="white"/>
          </button>
          <span className="absolute bottom-16 text-white/90 text-xs font-bold tracking-widest z-20" style={{ fontFamily: 'var(--font-amatic, "Amatic SC", cursive)', fontSize: '1rem' }}>WATCH VIDEO</span>
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setVideoOpen(false)}>
            <motion.div className="bg-black rounded-2xl overflow-hidden w-full max-w-3xl aspect-video flex items-center justify-center" initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }} onClick={(e) => e.stopPropagation()}>
              <div className="text-white text-center p-8">
                <Play size={48} className="mx-auto mb-4 text-[#35C3D6]"/>
                <p className="text-lg font-semibold">Video coming soon</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CounterBlock({ value, suffix, label, trigger }: { value: number; suffix: string; label: string; trigger: boolean }) {
  const count = useCounter(value, 1500, trigger);
  return (
    <div>
      <div className="text-white font-black text-4xl leading-none">{count}{suffix}</div>
      <div className="text-white/70 text-[10px] uppercase tracking-widest mt-1 font-bold">{label}</div>
    </div>
  );
}

function ProgressBar({ label, percent, trigger }: { label: string; percent: number; trigger: boolean }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-white/90 text-[11px] font-semibold uppercase tracking-wider">{label}</span>
        <span className="text-white text-[11px] font-bold">{percent}%</span>
      </div>
      <div className="h-2 bg-white/25 rounded-full overflow-hidden">
        <div className="h-full bg-white rounded-full progress-fill" style={{ width: trigger ? `${percent}%` : '0%' }}/>
      </div>
    </div>
  );
}
