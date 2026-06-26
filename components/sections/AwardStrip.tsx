export default function AwardStrip() {
  return (
    <section
      aria-label="King's Award"
      className="py-4"
      style={{ background: 'linear-gradient(90deg, #5B2D8E 0%, #E5097F 60%, #5B2D8E 100%)' }}
    >
      <div className="section-shell flex items-center justify-between gap-6">
        {/* Crown + text */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="w-12 h-12 rounded-full bg-white/15 border-2 border-[#D9A521]/60 flex items-center justify-center shrink-0">
            <span className="text-2xl">👑</span>
          </div>
          <div className="min-w-0">
            <p className="text-white font-black uppercase tracking-wider text-sm leading-tight" style={{ fontFamily: 'var(--font-quicksand)' }}>
              EMPOWERING WOMEN FROM REFUGEE, MIGRANT &amp; MINORITISED COMMUNITIES
            </p>
            <p className="text-white/80 italic text-xs mt-0.5">Longsight, Manchester · Est. 2013 · Company No. 08652552</p>
          </div>
        </div>

        {/* C&S Badge */}
        <div className="w-12 h-12 rounded-full bg-white border-2 border-white/30 flex items-center justify-center shrink-0">
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E5097F, #35C3D6)' }}>
            <svg width="16" height="14" viewBox="0 0 24 22" fill="white"><path d="M12 21.593c-.169-.15-8.31-7.376-8.31-12.458C3.69 4.72 7.41 2 12 2s8.31 2.72 8.31 7.135c0 5.082-8.141 12.308-8.31 12.458z"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
