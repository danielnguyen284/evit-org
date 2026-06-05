'use client';

import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Study {
  id: number;
  quote: React.ReactNode;
  name: string;
  role: string;
  avatar: string;
  avatarAlt: string;
  companyLogo: string;
}

const studies: Study[] = [
  {
    id: 1,
    quote: (
      <>
        EVIT gave us a <span className="text-blue-bright font-bold">clear sales roadmap</span> and <span className="text-blue-bright font-bold">practical guidance</span> on &quot;how to do&quot;. As a result, our sales team has improved week by week and is now much more confident working independently with clients.
      </>
    ),
    name: 'Mr. Ngô Văn Tấu',
    role: 'Chief Executive Officer (CEO)',
    avatar: '/assets/clients/client-1.jpg',
    avatarAlt: 'Client portrait',
    companyLogo: '/assets/clients/company-1.png',
  },
  {
    id: 2,
    quote: (
      <>
        Working with <span className="text-blue-bright font-bold">EVIT helped us achieve our first real results</span>. With the right sales method, strategy, and mindset from EVIT, we are confident we can continue to improve and achieve greater success in the future.
      </>
    ),
    name: 'Faustina',
    role: 'Sales Representative',
    avatar: '/assets/clients/client-2.jpg',
    avatarAlt: 'Sales representative portrait',
    companyLogo: '/assets/clients/company-2.png',
  },
  {
    id: 3,
    quote: (
      <>
        EVIT&apos;s service model helped us clearly understand the real expectations of international clients in Vietnam-insights that would have been very difficult to gain on our own. We see EVIT as a <span className="text-blue-bright font-bold">long-term strategic partner</span> for our growth.
      </>
    ),
    name: 'Mrs. Nguyen Thi Bich Hien',
    role: 'Chief Executive Officer (CEO)',
    avatar: '/assets/clients/client-3.jpg',
    avatarAlt: 'Founder portrait',
    companyLogo: '/assets/clients/company-3.png',
  },
  {
    id: 4,
    quote: (
      <>
        Their team rebuilt our outbound process from the ground up. The weekly reviews made every number visible, and our pipeline became <span className="text-blue-bright font-bold">predictable instead of accidental</span>.
      </>
    ),
    name: 'Mr. Daniel Park',
    role: 'Growth Director',
    avatar: '/assets/clients/client-4.png',
    avatarAlt: 'Growth director portrait',
    companyLogo: '/assets/clients/company-4.png',
  },
  {
    id: 5,
    quote: (
      <>
        Before EVIT, we had marketing activity but no clear conversion path. The new funnel and follow-up workflow helped us <span className="text-blue-bright font-bold">turn more leads into booked meetings</span>.
      </>
    ),
    name: 'Ms. Linh Tran',
    role: 'Marketing Lead',
    avatar: '/assets/clients/client-5.png',
    avatarAlt: 'Marketing lead portrait',
    companyLogo: '/assets/clients/company-5.png',
  },
  {
    id: 6,
    quote: (
      <>
        The framework was simple enough for our small team to implement and strong enough to scale. EVIT helped us focus on the <span className="text-blue-bright font-bold">sales actions that actually move revenue</span>.
      </>
    ),
    name: 'Mr. Hoang Minh',
    role: 'Managing Partner',
    avatar: '/assets/clients/client-6.png',
    avatarAlt: 'Managing partner portrait',
    companyLogo: '/assets/clients/company-6.png',
  },
];

export default function CaseStudies() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [pinnedHeight, setPinnedHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateDesktopState = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    updateDesktopState();
    window.addEventListener('resize', updateDesktopState);

    return () => {
      window.removeEventListener('resize', updateDesktopState);
    };
  }, []);

  useLayoutEffect(() => {
    if (!isDesktop) {
      setScrollDistance(0);
      setPinnedHeight(null);
      return;
    }

    const updateMeasurements = () => {
      if (!trackRef.current || !viewportRef.current) {
        return;
      }

      const distance = Math.max(
        0,
        trackRef.current.scrollWidth - viewportRef.current.clientWidth
      );

      setScrollDistance(distance);
      setPinnedHeight(window.innerHeight + distance);
    };

    updateMeasurements();
    const frame = window.requestAnimationFrame(updateMeasurements);
    const fallbackFrames = [
      window.setTimeout(updateMeasurements, 100),
      window.setTimeout(updateMeasurements, 500),
    ];
    const resizeObserver = new ResizeObserver(updateMeasurements);

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }
    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    window.addEventListener('resize', updateMeasurements);

    return () => {
      window.cancelAnimationFrame(frame);
      fallbackFrames.forEach((timeoutId) => window.clearTimeout(timeoutId));
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateMeasurements);
    };
  }, [isDesktop]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <div
      ref={targetRef}
      className="relative"
      style={isDesktop && pinnedHeight ? { height: pinnedHeight } : undefined}
    >
      <section
        id="case-studies"
        className={`relative overflow-hidden w-full ${
          isDesktop ? 'sticky top-0 h-screen flex flex-col justify-center' : 'py-20'
        }`}
      >
        <div className="max-w-[1200px] w-full mx-auto px-6 mb-6 text-left md:mb-7">
          <div className="max-w-[620px]">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-sm font-bold uppercase text-blue-bright tracking-[0.22em] mb-4 block"
            >
              CASE STUDIES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-sans text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl md:text-[34px]"
            >
              REAL RESULTS, REAL GROWTH
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden font-sans text-sm leading-relaxed text-white/80 sm:block"
            >
              A collection of success stories where EVIT&apos;s mindset and strategy transformed businesses performance. These case studies demonstrate our commitment to delivering practical value and long-term excellence for every client.
            </motion.p>
          </div>
        </div>

        {/* Carousel Outer Frame */}
        <div ref={viewportRef} className="w-full overflow-hidden py-2 md:py-3">
          {isDesktop ? (
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex w-max gap-9 px-[max(24px,calc((100vw-1200px)/2+24px))] will-change-transform"
            >
              {studies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </motion.div>
          ) : (
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none px-6">
              {studies.map((study) => (
                <div key={study.id} className="snap-center flex-shrink-0">
                  <CaseStudyCard study={study} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function CaseStudyCard({ study }: { study: Study }) {
  return (
    <article className="relative flex h-[390px] w-[320px] flex-shrink-0 flex-col overflow-hidden rounded-[16px] border-[2px] border-blue-bright/80 bg-light px-7 pb-6 pt-7 shadow-[0_18px_34px_rgba(0,0,0,0.34),-16px_22px_36px_rgba(0,104,255,0.15)] sm:w-[450px] sm:px-9 md:h-[400px] md:w-[520px] md:px-11 md:pb-7">
      {/* Avatar Wrapper */}
      <div className="relative mx-auto mb-6 h-14 w-14 overflow-hidden rounded-full border-2 border-white/80 bg-white/90 shadow-[30px_-4px_24px_rgba(210,32,198,0.46),44px_10px_30px_rgba(0,112,255,0.2)] md:h-16 md:w-16">
        <Image
          src={study.avatar}
          alt={study.avatarAlt}
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </div>

      <blockquote className="relative mb-5 max-h-[126px] overflow-hidden border-l-4 border-red-bright pl-5 text-left font-sans text-[13px] leading-relaxed text-white/95 sm:pl-6 sm:text-sm md:text-[15px]">
        &quot;{study.quote}&quot;
      </blockquote>

      <div className="mb-6 mt-auto flex items-center justify-between gap-5 pl-5 sm:pl-6">
        <div className="text-left">
          <strong className="mb-1 block font-sans text-xs font-extrabold text-white sm:text-sm">
            {study.name}
          </strong>
          <span className="block font-sans text-[11px] text-white/85 sm:text-xs">
            {study.role}
          </span>
        </div>
        <div className="relative h-7 w-[92px] opacity-95">
          <Image
            src={study.companyLogo}
            alt="EVIT client logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <button className="mx-auto flex h-11 w-full max-w-[230px] cursor-pointer items-center justify-center gap-3 rounded-full border-none bg-red-bright px-7 font-sans text-xs font-extrabold text-white shadow-[0_12px_22px_rgba(227,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1616]" type="button">
        SEE CASE STUDY
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}
