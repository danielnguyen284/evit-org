'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Do you specialize in IT services or general business expansion?',
    answer: 'We focus on IT service providers selling B2B services and products.',
  },
  {
    question: "What's included in your global expansion work?",
    answer: 'Audit, plan, best sales strategies designed for your company, sales process, channel plan, lead gen approach, sales process, execution rhythm.',
  },
  {
    question: 'How fast can we see qualified meetings?',
    answer: 'You usually see signals in weeks, but stable results require consistent weekly execution.',
  },
  {
    question: 'Which markets do you support?',
    answer: 'Europe (Nordic, DACH, Poland, Czech Republic, France, Holland, UK), US, Canada, APAC (Singapore, Thailand, South Korea, Australia, New Zealand, Hong Kong).',
  },
  {
    question: 'Do you provide leads or build our system?',
    answer: 'We provide system + coaching so you can generate leads independently.',
  },
  {
    question: 'Can you train our sales team?',
    answer: 'Yes--training modules for different seniority levels.',
  },
  {
    question: 'How do you measure success?',
    answer: 'Meetings, qualified leads, pipeline value, win rate, and deal cycle time.',
  },
  {
    question: 'Do you help with proposals and pricing?',
    answer: 'Yes--templates + scope control + pricing logic.',
  },
  {
    question: 'What do you need from our side?',
    answer: 'One owner, weekly time, fast feedback, and execution discipline.',
  },
  {
    question: 'What makes EVIT different?',
    answer: 'We are 100% focused on working with IT service and products companies.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-transparent pb-24 sm:pb-32 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-[14%] left-1/2 -translate-x-1/2 w-[760px] h-[520px] bg-gradient-to-tr from-blue-bright/10 to-purple-800/10 blur-[90px] rounded-full pointer-events-none -z-1" />

      <div className="max-w-[1200px] w-full mx-auto px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-sm font-bold uppercase text-blue-bright tracking-[0.22em] mb-4 block"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-3xl sm:text-[34px] font-extrabold text-white tracking-wide uppercase"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                onClick={() => toggleFAQ(idx)}
                className="cursor-pointer border border-blue-bright/20 rounded-2xl p-6 bg-[#0a0a38]/80 hover:border-blue-bright/50 hover:shadow-[0_16px_32px_rgba(1,132,209,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-4 w-full">
                  <h3 className="font-sans text-sm sm:text-base font-semibold text-white/95 leading-snug text-left">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 font-sans text-lg font-bold text-blue-bright leading-none select-none"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </div>

                <div className="overflow-hidden">
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 14 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p className="font-sans text-xs sm:text-sm font-semibold text-white/90 leading-relaxed text-left border-t border-blue-bright/10 pt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
