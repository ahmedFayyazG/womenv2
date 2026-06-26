'use client';
import { useState, useCallback, useEffect } from 'react';

export function useCarousel(total: number, autoplayMs = 0) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const go = useCallback((idx: number) => setCurrent(idx), []);

  useEffect(() => {
    if (!autoplayMs) return;
    const id = setInterval(next, autoplayMs);
    return () => clearInterval(id);
  }, [autoplayMs, next]);

  return { current, next, prev, go };
}
