'use client';
import { PARTNERS } from '@/lib/constants';

export default function PartnersBar() {
  return (
    <section className="bg-white border-y border-gray-100 py-8">
      <div className="section-shell">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          {PARTNERS.map((p) => (
            <div key={p.name} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <span className="text-[9px] font-black text-gray-500">{p.abbr}</span>
              </div>
              <span className="text-[11px] font-semibold text-gray-500 leading-tight max-w-[100px]">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
