'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Working with **EVIT** helped us achieve our first **real results**. With the right sales method, strategy, and mindset from **EVIT**, we are confident we can continue to improve and achieve greater success in the future.',
    name: 'Faustina',
    role: 'Sales Representative',
  },
  {
    quote: 'Partnering with **EVIT** has been a turning point for our business. By implementing their systematic sales methodology and data-driven strategies, we have seen immediate, tangible growth. We now possess the clear roadmap necessary to scale our operations and achieve even greater milestones ahead.',
    name: 'Faustina',
    role: 'Sales Representative',
  },
  {
    quote: '**EVIT** provided more than just a sales plan; they delivered a fundamental shift in our strategic mindset. The initial results have exceeded our expectations, proving that their approach works in real-world conditions. We are confident that this new foundation will drive our continued success and market leadership.',
    name: 'Faustina',
    role: 'Sales Representative',
  },
  {
    quote: 'Working with **EVIT** allowed us to streamline our sales process and secure our first significant wins. The combination of their practical execution tactics and high-level strategy gave our team the tools to perform at a higher level. We look forward to sustaining this momentum and reaching new heights in the future.',
    name: 'Faustina',
    role: 'Sales Representative',
  },
];

const renderQuote = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-extrabold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export default function Testimonials() {
  return (
    <section className="relative bg-transparent pb-24 sm:pb-32 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Intro Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-[120px] text-left">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-lg font-bold uppercase text-blue-bright tracking-[0.18em] mb-4 block"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-3xl sm:text-[40px] font-extrabold text-white leading-tight uppercase mb-8"
            >
              WHAT PEOPLE SAY ABOUT EVIT
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-sm sm:text-base text-white/90 leading-relaxed"
            >
              Real feedback from professionals who have experienced the EVIT method firsthand. Discover how our tailored approach leads to greater success and sustainable business growth.
            </motion.p>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glow-card group cursor-pointer flex flex-col p-8 sm:p-10 min-h-[252px] relative overflow-hidden"
              >
                <blockquote className="font-sans text-sm sm:text-base text-white/90 leading-relaxed text-left mb-8">
                  &quot;{renderQuote(testimonial.quote)}&quot;
                </blockquote>
                <div className="flex items-end justify-between gap-4 mt-auto">
                  <div className="text-left">
                    <strong className="block font-sans text-[13px] font-extrabold text-red-bright uppercase mb-1">
                      {testimonial.name}
                    </strong>
                    <span className="block font-sans text-[10px] text-white/70">
                      {testimonial.role}
                    </span>
                  </div>
                  <div className="flex gap-1.5 text-[#ffd400] text-lg select-none" aria-label="5 star rating">
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
