'use client';

import React, { useRef } from 'react';
import { motion, type MotionValue, useScroll, useTransform } from 'framer-motion';

function ScrollRevealWord({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1.5) / total;
  const opacity = useTransform(scrollYProgress, [start, Math.min(end, 1)], [0.35, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
    </motion.span>
  );
}

export default function ScrollWordReveal({ text, className = '' }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 60%'],
  });

  const words = text.split(' ');

  return (
    <span ref={containerRef} className={`inline-flex flex-wrap justify-center gap-x-[6px] gap-y-[4px] ${className}`}>
      {words.map((word, i) => (
        <ScrollRevealWord
          key={`${word}-${i}`}
          word={word}
          index={i}
          total={words.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </span>
  );
}
