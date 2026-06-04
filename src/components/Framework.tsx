'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FrameworkStep {
  id: number;
  title: string;
  items: string[];
  icon: 'foundation' | 'execution' | 'scaling';
}

const frameworkSteps: FrameworkStep[] = [
  {
    id: 1,
    title: 'FOUNDATIONS FIRST',
    icon: 'foundation',
    items: [
      'Plan, Strategy, Sales Channels, Unique Offer, Potential Clients Profile (ICP)',
    ],
  },
  {
    id: 2,
    title: 'EXECUTION',
    icon: 'execution',
    items: [
      'Implementation of the system, focus on numbers, conversions + KPIs and tracking system.',
      'New leads, meetings and revenue generated',
    ],
  },
  {
    id: 3,
    title: 'SCALING',
    icon: 'scaling',
    items: [
      'Removing the CEO from sales activities.',
      'Adding resources, automating, and scaling the sales department.',
      'Growing leads, conversions, and revenue.',
    ],
  },
];

function FrameworkIcon({ type }: { type: FrameworkStep['icon'] }) {
  let src = '/assets/Component 2.png';
  let altText = 'Foundations First Icon';
  if (type === 'execution') {
    src = '/assets/Component 2 (1).png';
    altText = 'Execution Icon';
  } else if (type === 'scaling') {
    src = '/assets/Component 2 (2).png';
    altText = 'Scaling Icon';
  }

  return (
    <div className="relative w-[106px] h-[106px] mb-8 sm:mb-10 transition-transform duration-300 group-hover:scale-110">
      <Image
        src={src}
        alt={altText}
        fill
        sizes="106px"
        className="object-contain"
        priority
      />
    </div>
  );
}

export default function Framework() {
  return (
    <section id="resources" className="relative bg-transparent pb-24 sm:pb-32 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-sm font-bold uppercase text-blue-bright tracking-[0.18em] mb-4 block"
        >
          HOW IT WORKS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-3xl sm:text-[36px] font-extrabold uppercase text-white tracking-wide mb-14"
        >
          EVIT 3-STEP FRAMEWORK
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {frameworkSteps.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glow-card group cursor-pointer text-left flex flex-col justify-start min-h-[390px]"
            >
              <FrameworkIcon type={step.icon} />
              <h3 className="font-sans text-2xl sm:text-[27px] font-extrabold uppercase text-white leading-tight mb-6">
                {step.title}
              </h3>
              <ul className="flex flex-col gap-4 list-disc pl-5 mt-auto text-white/90">
                {step.items.map((item, idx) => (
                  <li key={idx} className="font-sans text-xs sm:text-[13px] leading-relaxed pl-1 marker:text-blue-bright">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
