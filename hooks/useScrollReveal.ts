'use client';
import { useEffect, useRef } from 'react';

interface Options {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  callback: (entry: IntersectionObserverEntry) => void,
  options: Options = {}
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, rootMargin = '0px', once = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          callback(entry);
          if (once && entry.isIntersecting) observer.unobserve(el);
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [callback, threshold, rootMargin, once]);

  return ref;
}
