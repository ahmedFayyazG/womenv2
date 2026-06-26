'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionHeading from '@/components/ui/SectionHeading';

export default function CommunityCta() {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="community-heading">
      <div className="section-shell">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left: photo placeholder */}
          <motion.div className="relative" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}>
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]" style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #2a1040 0%, #5B2D8E 50%, #0a3a5a 100%)' }}>
              <div className="w-full h-full flex items-center justify-center">
                {/* Community illustration */}
                <svg width="280" height="220" viewBox="0 0 280 220" fill="none">
                  <circle cx="140" cy="100" r="70" fill="rgba(255,255,255,0.05)"/>
                  {[80, 110, 140, 170, 200].map((x, i) => (
                    <g key={i}>
                      <circle cx={x} cy={90 + (i % 2) * 15} r={12} fill={['#F472B6','#35C3D6','#D9A521','#E5097F','#35C3D6'][i]} opacity="0.85"/>
                      <ellipse cx={x} cy={115 + (i % 2) * 15} rx={10} ry={16} fill={['#F472B6','#35C3D6','#D9A521','#E5097F','#35C3D6'][i]} opacity="0.6"/>
                    </g>
                  ))}
                  <text x="140" y="175" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="Quicksand,sans-serif" fontWeight="600">Community Together</text>
                </svg>
              </div>
            </div>
            {/* Pink overlay card */}
            <div className="absolute bottom-5 left-5 rounded-xl p-4 max-w-[220px]" style={{ background: 'linear-gradient(135deg, #E5097F 0%, #F472B6 100%)', boxShadow: '0 12px 40px rgba(229,9,127,0.4)' }}>
              <div className="absolute -top-5 -right-3 w-10 h-10 rounded-full bg-white border-2 border-[#E5097F] flex items-center justify-center shadow-md">
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E5097F, #35C3D6)' }}>
                  <svg width="12" height="11" viewBox="0 0 24 22" fill="white"><path d="M12 21.593c-.169-.15-8.31-7.376-8.31-12.458C3.69 4.72 7.41 2 12 2s8.31 2.72 8.31 7.135c0 5.082-8.141 12.308-8.31 12.458z"/></svg>
                </div>
              </div>
              <p className="text-white font-bold text-sm leading-snug mb-2" style={{ fontFamily: 'var(--font-quicksand)' }}>Join Us to Strengthen Women&apos;s Voices</p>
              <a href="/contact" className="text-white/90 text-[11px] font-semibold uppercase tracking-wider hover:text-white transition-colors">GET INVOLVED</a>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Eyebrow>EMPOWERING WOMEN&apos;S VOICES &amp; LEADERSHIP</Eyebrow>
            <SectionHeading id="community-heading">Creating Safe Spaces for Growth, Healing, and Opportunity</SectionHeading>
            <p className="text-[#5A5663] text-sm leading-relaxed mb-7">
              Women&apos;s Voices supports women from diverse communities by creating safe spaces for learning, wellbeing, confidence-building, and leadership development. Through mentoring, advocacy, education, and community engagement, we empower women to strengthen their voices, overcome barriers, and create positive change within their families and communities.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <Button variant="solid-cyan" href="/about">LEARN MORE</Button>
              <a href="/about" className="flex items-center gap-1.5 text-[#E5097F] text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all duration-200">
                ABOUT US <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
