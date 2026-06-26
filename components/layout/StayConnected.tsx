'use client';
import { useState } from 'react';

export default function StayConnected() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {open ? (
        <div className="bg-white rounded-2xl shadow-2xl p-5 w-72 mb-3">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[#2D2A35] text-sm" style={{ fontFamily: 'var(--font-quicksand)' }}>Stay Connected</h3>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
          </div>
          <p className="text-[#5A5663] text-xs leading-relaxed mb-4">Subscribe to our newsletter for updates on our work and events.</p>
          <input type="email" placeholder="Your email address" className="w-full border border-gray-200 rounded-full px-4 py-2 text-xs mb-3 outline-none focus:border-[#E5097F]"/>
          <button className="w-full bg-[#E5097F] text-white text-xs font-bold uppercase tracking-wider rounded-full py-2.5 hover:bg-[#c4076d] transition-colors">SUBSCRIBE</button>
        </div>
      ) : null}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#E5097F] text-white text-xs font-bold uppercase tracking-wider rounded-full px-5 py-3 shadow-lg hover:bg-[#c4076d] transition-all hover:scale-105"
        style={{ fontFamily: 'var(--font-quicksand)' }}
      >
        {open ? '×' : '♥'} Stay Connected
      </button>
    </div>
  );
}
