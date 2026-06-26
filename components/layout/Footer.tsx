import Link from 'next/link';
import { FOOTER_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#1C2128] text-white">
      <div className="section-shell py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E5097F, #35C3D6)' }}>
                <svg width="16" height="14" viewBox="0 0 24 22" fill="white"><path d="M12 21.593c-.169-.15-8.31-7.376-8.31-12.458C3.69 4.72 7.41 2 12 2s8.31 2.72 8.31 7.135c0 5.082-8.141 12.308-8.31 12.458z"/></svg>
              </div>
              <div>
                <span className="font-bold text-white text-sm block" style={{ fontFamily: 'var(--font-quicksand)' }}>Women&apos;s Voices</span>
                <span className="text-white/50 text-[10px]">Longsight, Manchester</span>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed mb-6">Women&apos;s Voices empowers women from refugee, asylum-seeking, migrant, and minoritised communities through wellbeing support, education, advocacy, and leadership development.</p>
            <div className="flex items-center gap-2">
              {['#twitter','#facebook','#instagram','#linkedin'].map((href, i) => (
                <a key={href} href={href} className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E5097F] flex items-center justify-center transition-colors">
                  <span className="text-white text-[9px] font-bold">{['X','f','ig','in'][i]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-5 uppercase tracking-wider" style={{ fontFamily: 'var(--font-quicksand)' }}>Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.useful.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-white/60 text-xs hover:text-[#35C3D6] transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programmes */}
          <div>
            <h4 className="font-bold text-white text-sm mb-5 uppercase tracking-wider" style={{ fontFamily: 'var(--font-quicksand)' }}>Our Programmes</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.services.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-white/60 text-xs hover:text-[#35C3D6] transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-5 uppercase tracking-wider" style={{ fontFamily: 'var(--font-quicksand)' }}>Contact Us</h4>
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-start gap-2 text-white/60 text-xs"><span className="text-[#35C3D6] mt-0.5">📍</span> Burhan Centre, 81 Beresford Road, Longsight, Manchester M13 0GX</div>
              <div className="flex items-center gap-2 text-white/60 text-xs"><span className="text-[#35C3D6]">📞</span><a href="tel:01612256908" className="hover:text-white transition-colors">0161 225 6908</a></div>
              <div className="flex items-center gap-2 text-white/60 text-xs"><span className="text-[#35C3D6]">✉</span><a href="mailto:admin@womensvoices.org.uk" className="hover:text-white transition-colors break-all">admin@womensvoices.org.uk</a></div>
            </div>
            <Link href="/donate" className="inline-flex items-center gap-1.5 bg-[#E5097F] text-white text-[11px] font-bold uppercase tracking-wider rounded-full px-5 py-2.5 hover:bg-[#c4076d] transition-colors">
              ♥ DONATE NOW
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/40">
          <div className="flex items-center gap-3">
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of use</Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
          </div>
          <p>Women&apos;s Voices © 2026 · Company No. 08652552 · Longsight, Manchester</p>
        </div>
      </div>
    </footer>
  );
}
