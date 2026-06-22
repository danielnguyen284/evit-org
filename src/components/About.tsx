import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollWordReveal from './ScrollWordReveal';

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

export default function About() {
  return (
    <section id="about" className="relative bg-transparent py-24 sm:py-32 text-center overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
        <span className="font-sans text-sm font-bold text-blue-bright tracking-[0.15em] mb-4 block">
          About Company
        </span>

        <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide mb-6">
          EVIT Organization
        </h2>

        <div className="max-w-[860px] mx-auto mb-14">
          <ScrollWordReveal
            text="At EVIT Organization, we transform global expansion from a daunting task into a step-by-step journey. With a proven framework, we specialize in creating sustainable, scalable growth strategies that provide:"
            className="font-sans text-[15px] sm:text-base text-white/85 leading-relaxed font-semibold"
          />
        </div>

        <div className="about-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-12">
          {cardsData.map((card) => (
            <div
              key={card.id}
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
            </div>
          ))}
        </div>

        <div className="max-w-[800px] mx-auto mt-12 mb-8">
          <ScrollWordReveal
            text="Our Guaranteed Consulting Services guide you through every critical stage - from planning to execution - ensuring an efficient, successful market entry and long-term growth. Partner with EVIT Organization to unlock your global potential."
            className="font-sans text-sm text-white/80 leading-relaxed font-semibold"
          />
        </div>

        <div className="flex justify-center">
          <Link href="/services" className="btn-primary">
            Our Services
            <span className="arrow">â†’</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
