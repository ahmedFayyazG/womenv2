'use client';
import { useState, useEffect, useRef } from 'react';

export function useCounter(target: number, duration = 1500, trigger = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    startRef.current = performance.now();
    let reset = false;

    const step = (now: number) => {
      if (!reset) {
        setCount(0);
        reset = true;
      }
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
      else setCount(target);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, trigger]);

  return count;
}
