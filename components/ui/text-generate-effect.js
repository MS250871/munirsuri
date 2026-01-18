'use client';
import { useLayoutEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({ words = '', className, speed = 35 }) => {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const rafRef = useRef(null);

  // Observe visibility
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 } // 30% visible
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [started]);

  // Typewriter logic (runs once)
  useLayoutEffect(() => {
    if (!started || !words) return;

    let cancelled = false;
    let i = 0;

    const tick = () => {
      if (cancelled) return;

      i += 1;
      setIndex(i);

      if (i >= words.length) {
        setDone(true);
        return;
      }

      timerRef.current = setTimeout(tick, speed);
    };

    rafRef.current = requestAnimationFrame(() => {
      if (cancelled) return;

      i = 1;
      setIndex(i);
      timerRef.current = setTimeout(tick, speed);
    });

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [started, words, speed]);

  const displayed = words.slice(0, index);

  return (
    <div
      ref={containerRef}
      className={cn(
        'font-bold',
        className,
        // YOUR HEIGHTS
        'min-h-[475px] md:min-h-[200px] xl:min-h-[300px]'
      )}
    >
      <div
        className="text-2xl leading-[38px] 
                   xl:text-[34px] xl:leading-[55px] 
                   tracking-tight text-left xl:text-center 
                   font-medium text-[rgba(0,31,31,1)]
                   whitespace-pre-wrap"
      >
        {displayed}
        {!done && started && <span className="ml-1 animate-pulse">|</span>}
      </div>
    </div>
  );
};

export default TextGenerateEffect;
