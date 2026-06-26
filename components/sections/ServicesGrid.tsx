'use client';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionHeading from '@/components/ui/SectionHeading';
import SpotlightCard from '@/components/ui/SpotlightCard';

const SERVICE_ICONS = [
  <svg key="1" width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="11" cy="10" r="4" fill="currentColor"/><circle cx="21" cy="10" r="3" fill="currentColor" opacity="0.6"/><path d="M4 24c0-4 3.1-7 7-7h6c3.9 0 7 3 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M24 22c0-2.5 1.8-4.5 4-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 32 32" fill="none"><path d="M5 6h22a2 2 0 012 2v12a2 2 0 01-2 2H10l-5 4V8a2 2 0 012-2z" fill="currentColor" opacity="0.85"/><circle cx="11" cy="13" r="1.5" fill="white"/><circle cx="16" cy="13" r="1.5" fill="white"/><circle cx="21" cy="13" r="1.5" fill="white"/></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 32 32" fill="none"><path d="M16 26 L5 15 C1 11 1 5 5 5 C8 5 11 7 13 10 L16 13 L19 10 C21 7 24 5 27 5 C31 5 31 11 27 15 Z" fill="currentColor" opacity="0.9"/></svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="10" cy="13" r="2.5" fill="currentColor"/><circle cx="22" cy="13" r="2.5" fill="currentColor" opacity="0.6"/><circle cx="16" cy="22" r="2.5" fill="currentColor" opacity="0.8"/><circle cx="11" cy="20" r="2" fill="currentColor" opacity="0.4"/><circle cx="21" cy="20" r="2" fill="currentColor" opacity="0.4"/></svg>,
];

const SERVICE_ACCENT = ['#059669', '#CA8A04', '#2563EB', '#EA580C'];
const SERVICE_SPOTLIGHT: `rgba(${number}, ${number}, ${number}, ${number})`[] = [
  'rgba(5, 150, 105, 0.08)',
  'rgba(202, 138, 4, 0.08)',
  'rgba(37, 99, 235, 0.08)',
  'rgba(234, 88, 12, 0.08)',
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#f7f5f2] py-16 lg:py-24" aria-labelledby="services-heading">
      <div className="section-shell">
        {/* Header centred */}
        <motion.div
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow className="justify-center">OUR PROGRAMMES</Eyebrow>
          <SectionHeading id="services-heading" className="text-center mb-3">
            Every Programme Designed Around the Real Needs of the Women We Serve
          </SectionHeading>
          <p className="text-[#5A5663] text-sm leading-relaxed">
            Accessible, free, and delivered with care — our programmes strengthen confidence, wellbeing, independence, and community belonging.
          </p>
        </motion.div>

        {/* 2×2 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <SpotlightCard
                spotlightColor={SERVICE_SPOTLIGHT[i]}
                className="bg-white rounded-2xl p-6 h-full shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Top accent bar */}
                <div className="h-0.5 w-10 rounded-full mb-5" style={{ background: SERVICE_ACCENT[i] }} />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: `${SERVICE_ACCENT[i]}15`, color: SERVICE_ACCENT[i] }}
                >
                  {SERVICE_ICONS[i]}
                </div>

                {/* Text */}
                <h3
                  className="font-bold text-[#1a1825] text-[15px] mb-2 leading-snug"
                  style={{ fontFamily: 'var(--font-quicksand)', fontWeight: 700 }}
                >
                  {service.title}
                </h3>
                <p className="text-[#6b6876] text-[13px] leading-relaxed flex-1">{service.description}</p>

                {/* Bottom link */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-1.5">
                  <span className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: SERVICE_ACCENT[i] }}>
                    Learn more
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: SERVICE_ACCENT[i] }}>
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline-magenta" href="/about">VIEW ALL PROGRAMMES</Button>
        </div>
      </div>
    </section>
  );
}
