'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'EVIT gave us a **clear sales roadmap** and **practical guidance** on "how to do". As a result, our sales team has improved week by week and is now much more confident working independently with clients.',
    name: 'Mr. Ng\u00f4 V\u0103n T\u1ea9u',
    role: 'Chief Executive Officer (CEO)',
  },
  {
    quote:
      'Working with **EVIT helped us achieve our first real results**. With the right sales method, strategy, and mindset from EVIT, we are confident we can continue to improve and achieve greater success in the future.',
    name: 'Ms. Faustina',
    role: 'Sales Representative',
  },
  {
    quote:
      "EVIT's service model helped us clearly understand the real expectations of international clients in Vietnam insights that would have been very difficult to gain on our own. We see EVIT as a **long-term strategic partner** for our growth.",
    name: 'Ms. Nguy\u1ec5n Th\u1ecb B\u00edch Hu\u1ec7 (Hannah Nguyen)',
    role: 'Chief Executive Officer (CEO)',
  },
  {
    quote:
      "With EVIT's support, we successfully won a deal with a **high-quality European client** - one of the largest companies in Iceland.",
    name: 'Mr. Dave Phan',
    role: 'Sales Manager',
  },
  {
    quote:
      "With EVIT's method, we achieved our goal of setting up client calls in just **three weeks**. The approach is practical, effective, and straightforward to execute.",
    name: 'Mr. David Toan',
    role: 'Sales Manager',
  },
  {
    quote:
      'EVIT trained our sales team effectively and helped everything run smoothly. We now see the value of having an **independent sales team** that can grow and operate with confidence.',
    name: 'Mr. Tony Nguyen',
    role: 'Chief Executive Officer (CEO)',
  },
  {
    quote:
      'Vietnam needs more people like you - true **bridges between Vietnam and Europe**. Thanks to your work, European partners better understand Vietnam, creating real opportunities for everyone.',
    name: 'Mr. Teddy Nguyen',
    role: 'Co-Founder & Chairman',
  },
  {
    quote:
      "Could not hide my impression about EVIT's **passion, knowledge, and kindness**. It was my big honor to work and collaborate with you.",
    name: 'Mr. Tus Nguyen',
    role: 'Founder & CEO',
  },
  {
    quote:
      'EVIT is the first name that comes to mind for connecting Vietnamese and European companies. With deep cultural and business insight, EVIT and their team are highly recommended for **successful cross-market expansion**.',
    name: 'Ms. Ellen (Minh) Nguyen',
    role: 'Chief Marketing Officer (CMO)',
  },
  {
    quote:
      "I'm delighted to recommend EVIT for their outstanding work with IMT. Their expertise and practical training refined our sales strategy, delivered **measurable results**, and elevated our team's performance.",
    name: 'Mr. Timothy Ton-That',
    role: 'Head of Business Analysts/Product Owners',
  },
  {
    quote:
      'EVIT is one of our most trusted and professional business partners. The team has worked with us across multiple projects, consistently demonstrating strong logical thinking, forward-looking vision, and innovative ideas. Their execution is excellent, and we truly enjoy working with EVIT.',
    name: 'Mr. An Nguyen',
    role: 'Founder - CEO',
  },
  {
    quote:
      'We worked with EVIT and were impressed by their strong business development expertise and practical sales approach. They provided **clear frameworks and actionable guidance**, making them a reliable partner for global expansion.',
    name: 'Ms. Kim Anh',
    role: 'Community & Branding Executive',
  },
];

const testimonialColumns = [
  testimonials.filter((_, index) => index % 2 === 0),
  testimonials.filter((_, index) => index % 2 === 1),
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
    <section className="relative overflow-hidden bg-transparent pb-24 sm:pb-32">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="text-left lg:sticky lg:top-[120px] lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 block font-sans text-lg font-bold uppercase tracking-[0.18em] text-blue-bright"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 font-sans text-3xl font-extrabold uppercase leading-tight text-white sm:text-[40px]"
            >
              WHAT PEOPLE SAY ABOUT EVIT
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-sm leading-relaxed text-white/90 sm:text-base"
            >
              Real feedback from professionals who have experienced the EVIT method firsthand. Discover how our tailored approach leads to greater success and sustainable business growth.
            </motion.p>
          </div>

          <div className="testimonials-marquee lg:col-span-8">
            <div className="relative max-h-[720px] overflow-hidden pr-1 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {testimonialColumns.map((column, columnIndex) => (
                  <div key={columnIndex} className="overflow-hidden">
                    <div
                      className={`testimonials-marquee-track flex flex-col gap-8 ${
                        columnIndex === 1 ? 'testimonials-marquee-track-slow' : ''
                      }`}
                    >
                      {[...column, ...column].map((testimonial, idx) => (
                        <TestimonialCard
                          key={`${columnIndex}-${idx}`}
                          testimonial={testimonial}
                          delay={(idx % column.length) * 0.05}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: (typeof testimonials)[number];
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glow-card group flex min-h-[300px] cursor-pointer flex-col overflow-hidden p-7 sm:min-h-[330px] sm:p-8"
      tabIndex={0}
    >
      <div className="mb-5 flex gap-1.5 text-lg text-[#ffd400] select-none" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} aria-hidden="true">
            {'\u2605'}
          </span>
        ))}
      </div>
      <blockquote className="mb-8 text-left font-sans text-sm leading-relaxed text-white/90">
        &quot;{renderQuote(testimonial.quote)}&quot;
      </blockquote>
      <div className="mt-auto text-left">
        <strong className="mb-1 block font-sans text-[13px] font-extrabold uppercase text-red-bright">
          {testimonial.name}
        </strong>
        <span className="block font-sans text-[10px] leading-snug text-white/70 sm:text-[11px]">
          {testimonial.role}
        </span>
      </div>
    </motion.article>
  );
}
