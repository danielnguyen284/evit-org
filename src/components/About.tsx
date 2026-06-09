'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, type MotionValue, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

interface CardItem {
  id: number;
  line1: string;
  line2: string;
}

const cardsData: CardItem[] = [
  { id: 1, line1: 'RIGHT', line2: 'APPROACH' },
  { id: 2, line1: 'RIGHT', line2: 'SALES CHANNELS' },
  { id: 3, line1: 'RIGHT', line2: 'SERVICE OFFERINGS' },
  { id: 4, line1: 'RIGHT', line2: 'CLIENTS' },
];

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

function ScrollWordReveal({ text, className = '' }: { text: string; className?: string }) {
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

export default function About() {
  return (
    <section id="about" className="relative bg-transparent py-24 sm:py-32 text-center overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
          className="font-sans text-sm font-bold uppercase text-blue-bright tracking-[0.15em] mb-4 block"
        >
          About Company
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide mb-6"
        >
          EVIT Organization
        </motion.h2>

        <div className="max-w-[860px] mx-auto mb-14">
          <ScrollWordReveal
            text="At EVIT Organization, we transform global expansion from a daunting task into a step-by-step journey. With a proven framework, we specialize in creating sustainable, scalable growth strategies that provide:"
            className="font-sans text-[15px] sm:text-base text-white/85 leading-relaxed font-semibold"
          />
        </div>

        {/* 4 Cards Grid with Staggered Scroll Animation */}
        <div className="about-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-12">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glow-card group cursor-pointer flex min-h-[190px] flex-col items-center justify-center px-6 py-7 sm:px-7 sm:py-8"
            >
              <div className="flex items-center justify-center mb-6 relative transition-all duration-300">
                <Image
                   src="/assets/icon-checkmark.png"
                   alt="Checkmark Icon"
                   width={84}
                   height={84}
                   className="h-[84px] w-[84px] object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="card-title font-sans text-xl font-extrabold uppercase text-white tracking-[0.1em] leading-snug">
                <span className="block font-bold text-white mb-1">{card.line1}</span>
                <span className="block font-bold text-white">{card.line2}</span>
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="max-w-[800px] mx-auto mt-12 mb-8">
          <ScrollWordReveal
            text="Our Guaranteed Consulting Services guide you through every critical stage—from planning to execution—ensuring an efficient, successful market entry and long-term growth. Partner with EVIT Organization to unlock your global potential."
            className="font-sans text-sm text-white/80 leading-relaxed font-semibold"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <Link href="/services" className="btn-primary">
            Our Services
            <span className="arrow">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
