'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';

interface CoreSolution {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  imageAlt: string;
  icon: string;
  iconAlt: string;
}

const solutions: CoreSolution[] = [
  {
    id: 1,
    slug: 'global-expansion-services',
    title: 'GLOBAL EXPANSION SERVICE',
    subtitle: 'Market entry planning + execution support: target markets, channels, lead generation, USP, and risk control.',
    desc: 'Global expansion is more than just entering a new market - it\'s about developing a sustainable and scalable growth strategy that includes the right sales channels, compliance with international business laws, and effectively managing global teams. At EVIT Organization, our Custom Design Consulting Services are designed to guide businesses through every critical step of this process, ensuring a smooth, efficient, and successful market entry.',
    image: '/assets/daa7591f467f07ac34cf81f8dd257db99985d118.webp',
    imageAlt: 'Business network and growth dashboard',
    icon: '/assets/service-icon (2).png',
    iconAlt: 'Global expansion icon',
  },
  {
    id: 2,
    slug: 'sales-growth-system',
    title: 'G.O.D. SALES SYSTEM',
    subtitle: 'Step-by-step sales system for IT services: lead generation, qualification, meetings, negotiation, proposals, closing, upsell, cross-sell.',
    desc: 'Our online course covers everything you need to win more deals. From lead qualification and meeting strategy to negotiation, proposal building, and practical worksheets. Step-by-step tested formula that just needs to be implemented to your selling activities.',
    image: '/assets/2e869bba8104d15adef7f148438a7cd633820ab4.webp',
    imageAlt: 'Sales analytics dashboard with global data',
    icon: '/assets/service-icon (1).png',
    iconAlt: 'Sales system icon',
  },
  {
    id: 3,
    slug: 'marketing-service',
    title: 'MARKETING SERVICES',
    subtitle: 'Marketing funnel, Website + conversion + automation workflows to improve lead flow and conversion.',
    desc: 'Many businesses struggle to scale their marketing due to a lack of a clear strategy, outdated tactics, ineffective online presence, unaligned activities, poor analytics and execution. Even if they have existing marketing efforts, they often need to optimize these processes to drive conversions. As a result, businesses waste their budget on ineffective strategies, fail to fully utilize their marketing potential, and lose money and potential clients.',
    image: '/assets/540048d82298a1c0a80ba59038a0eef747a8965c.webp',
    imageAlt: 'Marketing funnel and connected business network',
    icon: '/assets/service-icon.png',
    iconAlt: 'Marketing services icon',
  },
];

interface CardProps {
  solution: CoreSolution;
  isDesktop: boolean;
}

function Card({ solution, isDesktop }: CardProps) {
  return (
    <motion.article
      initial={isDesktop ? { opacity: 0, y: 18, scale: 0.98 } : false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={isDesktop ? { opacity: 0, y: -18, scale: 0.98 } : undefined}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="bg-light mx-auto flex w-full flex-col gap-5 p-5 shadow-xl md:h-full md:min-h-0 md:flex-row md:items-center md:gap-6 lg:p-7"
    >
      {/* Image Frame Column */}
      <div className="relative h-[230px] shrink-0 overflow-hidden rounded-[10px] border border-blue-bright/45 shadow-lg md:h-[250px] md:w-[400px] lg:h-[260px] lg:w-[430px]">
        <Image
          src={solution.image}
          alt={solution.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 360px"
          className="object-cover"
        />
      </div>

      {/* Content Column */}
      <div className="relative z-[1] flex min-h-[230px] min-w-0 flex-1 flex-col justify-between py-1 text-left md:min-h-[250px] lg:min-h-[260px]">
        <div className="flex flex-col items-start w-full">
          <div className="relative mb-3 h-11 w-11">
            <Image
              src={solution.icon}
              alt={solution.iconAlt}
              fill
              sizes="44px"
              className="object-contain"
            />
          </div>

          <h3 className="mb-3 font-sans text-xl font-extrabold uppercase leading-tight tracking-tight text-white lg:text-2xl">
            {solution.title}
          </h3>

          <p className="mb-4 font-sans text-xs font-medium leading-relaxed text-blue-bright lg:text-sm">
            {solution.subtitle}
          </p>

          <p className="mb-5 max-w-[640px] font-sans text-xs font-semibold leading-relaxed text-white/90 lg:text-[13px]">
            {solution.desc}
          </p>
        </div>

        {/* Read More button at the bottom right */}
        <div className="relative z-20 mt-2 flex w-full justify-center md:justify-end">
          <Link
            href={`/services/${solution.slug}`}
            className="inline-flex h-10 items-center justify-center rounded-full bg-red-bright px-7 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(227,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a1a] hover:shadow-[0_10px_24px_rgba(227,0,0,0.38)]"
          >
            READ MORE &rarr;
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function CoreSolutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkMediaQuery = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkMediaQuery();
    window.addEventListener('resize', checkMediaQuery);
    return () => window.removeEventListener('resize', checkMediaQuery);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextIndex = Math.min(
      solutions.length - 1,
      Math.max(0, Math.floor(latest * solutions.length))
    );
    setActiveIndex(nextIndex);
  });

  return (
    <section id="services" ref={containerRef} className="relative bg-transparent pb-28 md:h-[320vh]">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:sticky md:top-0 md:flex md:min-h-screen md:flex-col md:pt-[14vh]">
        <motion.div
          className="mb-14 text-center"
        >
          <span className="font-sans text-sm font-bold uppercase text-blue-bright tracking-[0.22em] mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="font-sans text-3xl sm:text-[34px] font-extrabold text-white tracking-wide uppercase">
            OUR CORE SOLUTIONS
          </h2>
        </motion.div>

        <div className="relative flex w-full flex-col gap-12 sm:gap-16 md:h-[400px] md:gap-0">
          {isDesktop ? (
            <AnimatePresence mode="wait">
              <Card
                key={solutions[activeIndex].id}
                solution={solutions[activeIndex]}
                isDesktop={isDesktop}
              />
            </AnimatePresence>
          ) : (
            solutions.map((solution) => (
              <Card
                key={solution.id}
                solution={solution}
                isDesktop={isDesktop}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
