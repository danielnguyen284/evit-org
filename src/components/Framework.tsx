'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';

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
    <div className="relative mb-8 h-[118px] w-[118px] transition-transform duration-300 group-hover:scale-105 sm:h-[138px] sm:w-[138px]">
      <Image
        src={src}
        alt={altText}
        fill
        sizes="138px"
        className="object-contain"
      />
    </div>
  );
}

interface FrameworkCardProps {
  step: FrameworkStep;
  isDesktop: boolean;
}

function FrameworkCard({ step, isDesktop }: FrameworkCardProps) {
  return (
    <motion.article
      initial={isDesktop ? { opacity: 0, y: 18, scale: 0.98 } : false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={isDesktop ? { opacity: 0, y: -18, scale: 0.98 } : undefined}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="group flex h-full w-full flex-col rounded-[14px] border border-blue-bright/85 bg-light px-9 py-9 text-left shadow-[0_18px_40px_rgba(0,0,0,0.28),-16px_22px_36px_rgba(0,104,255,0.16)] sm:px-12 sm:py-11"
    >
      <FrameworkIcon type={step.icon} />
      <h3 className="mb-8 font-sans text-2xl font-extrabold uppercase leading-tight text-white sm:text-[30px]">
        {step.title}
      </h3>
      <ul className="flex list-disc flex-col gap-5 pl-5 text-white/90">
        {step.items.map((item, idx) => (
          <li
            key={idx}
            className="font-sans text-sm leading-relaxed marker:text-blue-bright sm:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Framework() {
  const containerRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkMediaQuery = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkMediaQuery();
    window.addEventListener('resize', checkMediaQuery);

    return () => {
      window.removeEventListener('resize', checkMediaQuery);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextIndex = Math.min(
      frameworkSteps.length - 1,
      Math.max(0, Math.floor(latest * frameworkSteps.length))
    );
    setActiveIndex(nextIndex);
  });

  return (
    <section
      id="resources"
      ref={containerRef}
      className="relative bg-transparent py-20 sm:py-24 md:h-[320vh] md:py-0"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 md:sticky md:top-0 md:flex md:min-h-screen md:items-center">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 block font-sans text-xs font-bold uppercase tracking-[0.18em] text-blue-bright"
            >
              HOW IT WORKS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-9 font-sans text-2xl font-extrabold uppercase tracking-wide text-white sm:text-[30px] lg:mb-10"
            >
              EVIT 3- STEP FRAMEWORK
            </motion.h2>

            {isDesktop ? (
              <div className="relative h-[420px] w-full sm:h-[460px] md:h-[460px]">
                <AnimatePresence mode="wait">
                  <FrameworkCard
                    key={frameworkSteps[activeIndex].id}
                    step={frameworkSteps[activeIndex]}
                    isDesktop={isDesktop}
                  />
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {frameworkSteps.map((step) => (
                  <FrameworkCard
                    key={step.id}
                    step={step}
                    isDesktop={isDesktop}
                  />
                ))}
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex w-full max-w-[480px] items-center justify-center lg:max-w-[520px]"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(193,32,210,0.28)_0%,rgba(0,112,255,0.18)_34%,transparent_70%)] blur-xl" />
            <Image
              src="/assets/bd57a4ce07e80d25e9d190a5adf99ec8e3c675ec.webp"
              alt="EVIT framework system"
              width={560}
              height={560}
              sizes="(max-width: 1024px) 80vw, 520px"
              className="relative z-[1] h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
