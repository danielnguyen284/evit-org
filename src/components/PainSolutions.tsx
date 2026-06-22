'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { LayoutGroup, motion } from 'framer-motion';

interface RowData {
  id: number;
  type: 'pain' | 'solution';
  label: string;
  title: string;
  desc: string;
}

const rowsData: RowData[] = [
  {
    id: 1,
    type: 'pain',
    label: 'PAIN 1',
    title: 'REVENUE DEPENDS ON THE FOUNDER',
    desc: 'Every deal flows through you. Your network built this company, but now it is the ceiling. When you stop selling, the pipeline stops. You are the business development, the closer, and the strategy all in one. Your company cannot outgrow what you personally can handle.',
  },
  {
    id: 2,
    type: 'solution',
    label: 'Solution 1',
    title: 'PREDICTABLE OUTBOUND ENGINE',
    desc: 'Gain a structured pipeline generating qualified opportunities on a consistent basis. This enables predictable revenue growth and business scalability independent of individual contributors.',
  },
  {
    id: 3,
    type: 'pain',
    label: 'PAIN 2',
    title: 'NO GROWTH, REVENUE STAGNATION',
    desc: "Revenue flatlined. Referrals dried up, hired sales reps didn't deliver, and outbound efforts go nowhere. You are doing great work for existing clients but there is no system bringing new ones in. The company plateaued and nothing you have tried so far has broken through it.",
  },
  {
    id: 4,
    type: 'solution',
    label: 'Solution 2',
    title: 'MORE CLIENTS & SUSTAINABLE GROWTH',
    desc: 'Consistently attract and convert ideal clients through data-driven targeting and strategic positioning. The outcome is sustainable, compounding growth that operates independently of referral networks or individual effort.',
  },
];

const rotatingImages = {
  pain: {
    src: '/assets/pain-founder.webp',
    alt: 'Revenue and founder dependency 3D illustration',
    glow: 'bg-gradient-to-tr from-[#5e2ca4]/60 to-[#e80052]/90',
  },
  solution: {
    src: '/assets/solution-growth.webp',
    alt: 'Growth and predictable pipeline 3D illustration',
    glow: 'bg-gradient-to-tr from-[#6738b8]/60 to-[#00c6ff]/90',
  },
};

function PainSolutionTextBlock({ row }: { row: RowData }) {
  return (
    <div className="flex w-full flex-col items-start justify-center text-left">
      <span className="relative mb-4 inline-block font-sans text-sm font-semibold tracking-[0.15em] text-blue-bright after:mt-1.5 after:block after:h-0.5 after:w-10 after:rounded-full after:bg-blue-bright after:content-['']">
        {row.label}
      </span>
      <h2 className="mb-6 font-sans text-2xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-[38px]">
        {row.title}
      </h2>
      <p className="font-sans text-[15px] font-normal leading-relaxed text-text-secondary sm:text-base lg:text-[17px]">
        {row.desc}
      </p>
    </div>
  );
}

export default function PainSolutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pinState, setPinState] = useState<'before' | 'pinned' | 'after'>('before');
  const activeRow = rowsData[activeIndex];
  const activeImage = rotatingImages[activeRow.type];
  const isReversed = activeIndex >= 2;

  useEffect(() => {
    const updateActiveStep = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;
      const pinStartOffset = 80;
      const nextPinState = rect.top > pinStartOffset
        ? 'before'
        : rect.bottom <= window.innerHeight
          ? 'after'
          : 'pinned';
      const progress = scrollableDistance > 0
        ? Math.min(1, Math.max(0, -rect.top / scrollableDistance))
        : 0;
      const nextIndex = Math.min(
        rowsData.length - 1,
        Math.floor(progress * rowsData.length)
      );

      setPinState(nextPinState);
      setActiveIndex(nextIndex);
    };

    updateActiveStep();
    window.addEventListener('scroll', updateActiveStep, { passive: true });
    window.addEventListener('resize', updateActiveStep);

    return () => {
      window.removeEventListener('scroll', updateActiveStep);
      window.removeEventListener('resize', updateActiveStep);
    };
  }, []);

  const scenePositionClass = {
    before: 'absolute left-0 top-0',
    pinned: 'fixed left-0 top-0 z-[2]',
    after: 'absolute bottom-0 left-0',
  }[pinState];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible bg-transparent lg:h-[300vh]"
      data-active-step={activeIndex}
    >
      <div className={`hidden h-screen w-full lg:block ${scenePositionClass}`}>
        <LayoutGroup>
          <div className="mx-auto grid h-full w-full max-w-[1200px] grid-cols-2 items-center gap-20 px-6">
            <motion.div
              layout
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className={`relative row-start-1 flex h-full items-center justify-center ${
                isReversed ? 'col-start-2' : 'col-start-1'
              }`}
            >
              <motion.div
                key={`${activeRow.type}-glow-${isReversed ? 'right' : 'left'}`}
                initial={{ opacity: 0, scale: 0.82 }}
                animate={{ opacity: 0.82, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute h-[340px] w-[340px] rounded-full blur-[78px] ${activeImage.glow}`}
              />

              <div className="relative flex aspect-[1.12] w-full max-w-[470px] items-center justify-center">
                <motion.div
                  key={activeRow.id}
                  initial={{ opacity: 0, rotate: isReversed ? 90 : -90, scale: 0.72, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, rotate: 0, scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    width={450}
                    height={380}
                    style={{ height: 'auto' }}
                    className="w-[86%] max-w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.52)]"
                    preload={activeIndex === 0}
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              layout
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className={`relative row-start-1 flex h-full items-center overflow-hidden ${
                isReversed ? 'col-start-1' : 'col-start-2'
              }`}
            >
              <motion.div
                key={activeRow.id}
                initial={{ opacity: 0, y: 28, scale: 0.98, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex w-full items-center"
              >
                <PainSolutionTextBlock row={activeRow} />
              </motion.div>
            </motion.div>
          </div>
        </LayoutGroup>
      </div>

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-6 py-16 sm:py-24 lg:hidden">
        {rowsData.map((row) => {
          const image = rotatingImages[row.type];

          return (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8"
            >
              <div className="relative flex min-h-[300px] items-center justify-center">
                <div className={`absolute h-[260px] w-[260px] rounded-full blur-[68px] ${image.glow}`} />
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={450}
                  height={380}
                  style={{ height: 'auto' }}
                  className="relative max-w-[82%] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.52)]"
                />
              </div>
              <PainSolutionTextBlock row={row} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
