'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

interface Study {
  id: number;
  slug: string;
  quote: React.ReactNode;
  name: string;
  role: string;
  avatar: string;
  avatarAlt: string;
  companyLogo: string;
}

interface CaseStudiesLayout {
  isPinnedDesktop: boolean;
  scrollDistance: number;
  pinnedHeight: number | null;
}

const MAX_PIN_SCROLL_MULTIPLIER = 1.55;
const MIN_PIN_SCROLL_DISTANCE = 1000;

const studies: Study[] = [
  {
    id: 1,
    slug: 'gmo-runsystem',
    quote: (
      <>
        EVIT gave us a <span className="text-blue-bright font-bold">clear sales roadmap</span> and <span className="text-blue-bright font-bold">practical guidance </span> on &quot;how to do&quot;. As a result, our sales team has improved week by week and is now much more confident working independently with clients.
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
    slug: 'gmo-runsystem',
    quote: (
      <>
        Working with <span className="text-blue-bright font-bold">EVIT helped us achieve our first real results</span>. With the right sales method, strategy, and mindset from EVIT, we are confident we can continue to improve and achieve greater success in the future.
      </>
    ),
    name: 'Ms. Faustina',
    role: 'Sales Representative',
    avatar: '/assets/clients/client-6.png',
    avatarAlt: 'Sales representative portrait',
    companyLogo: '/assets/clients/company-1.png',
  },
  {
    id: 3,
    slug: 'reco-manpower',
    quote: (
      <>
        EVIT&apos;s service model helped us clearly understand the real expectations of international clients in Vietnam insights that would have been very difficult to gain on our own. We see EVIT as a <span className="text-blue-bright font-bold">long-term strategic partner</span> for our growth.
      </>
    ),
    name: 'Ms. Nguyễn Thị Bích Huệ (Hannah Nguyen)',
    role: 'Chief Executive Officer (CEO)',
    avatar: '/assets/clients/client-3.png',
    avatarAlt: 'Founder portrait',
    companyLogo: '/assets/clients/company-3.jpg',
  },
  {
    id: 4,
    slug: 'reco-manpower',
    quote: (
      <>
        With EVIT&apos;s support, we successfully won a deal with a <span className="text-blue-bright font-bold">high-quality European client</span> - one of the largest companies in Iceland.
      </>
    ),
    name: 'Mr. Dave Phan',
    role: 'Sales Manager',
    avatar: '/assets/clients/client-2.png',
    avatarAlt: 'Sales manager portrait',
    companyLogo: '/assets/clients/company-3.jpg',
  },
  {
    id: 5,
    slug: 'solazu',
    quote: (
      <>
        With EVIT&apos;s method, we achieved our goal of setting up client calls in just <span className="text-blue-bright font-bold">three weeks</span>. The approach is practical, effective, and straightforward to execute.
      </>
    ),
    name: 'Mr. David Toan',
    role: 'Sales Manager',
    avatar: '/assets/clients/client-4.jpg',
    avatarAlt: 'Sales manager portrait',
    companyLogo: '/assets/clients/company-4.jpg',
  },
  {
    id: 6,
    slug: 'nkk-tech',
    quote: (
      <>
        EVIT trained our sales team effectively and helped everything run smoothly. We now see the value of having an <span className="text-blue-bright font-bold">independent sales team</span> that can grow and operate with confidence.
      </>
    ),
    name: 'Mr. Tony Nguyen',
    role: 'Founder - CEO',
    avatar: '/assets/clients/client-5.jpg',
    avatarAlt: 'CEO portrait',
    companyLogo: '/assets/clients/nkktech_logo.jpg',
  },
  {
    id: 7,
    slug: 'hive-tech',
    quote: (
      <>
        We worked with EVIT and were impressed by their strong business development expertise and practical sales approach. They provided <span className="text-blue-bright font-bold">clear frameworks and actionable guidance</span>, making them a reliable partner for global expansion.
      </>
    ),
    name: 'Ms. Kim Anh',
    role: 'Community & Branding Executive',
    avatar: '/assets/clients/client-7.jpg',
    avatarAlt: 'Community and branding portrait',
    companyLogo: '/assets/clients/company-2.jpg',
  },
];

export default function CaseStudies() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<CaseStudiesLayout>({
    isPinnedDesktop: false,
    scrollDistance: 0,
    pinnedHeight: null,
  });

  useEffect(() => {
    let frame: number | null = null;

    const updateLayout = (nextLayout: CaseStudiesLayout) => {
      setLayout((currentLayout) => {
        if (
          currentLayout.isPinnedDesktop === nextLayout.isPinnedDesktop &&
          currentLayout.scrollDistance === nextLayout.scrollDistance &&
          currentLayout.pinnedHeight === nextLayout.pinnedHeight
        ) {
          return currentLayout;
        }

        return nextLayout;
      });
    };

    const updateMeasurements = () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(() => {
        frame = null;

        const nextIsPinnedDesktop = window.innerWidth >= 768;

        if (!nextIsPinnedDesktop || !trackRef.current || !viewportRef.current) {
          updateLayout({
            isPinnedDesktop: nextIsPinnedDesktop,
            scrollDistance: 0,
            pinnedHeight: null,
          });
          return;
        }

        const distance = Math.max(
          0,
          trackRef.current.scrollWidth - viewportRef.current.clientWidth
        );
        const pinScrollDistance = Math.min(
          distance,
          Math.max(window.innerHeight * MAX_PIN_SCROLL_MULTIPLIER, MIN_PIN_SCROLL_DISTANCE)
        );

        updateLayout({
          isPinnedDesktop: true,
          scrollDistance: distance,
          pinnedHeight: window.innerHeight + pinScrollDistance,
        });
      });
    };

    updateMeasurements();
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
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      fallbackFrames.forEach((timeoutId) => window.clearTimeout(timeoutId));
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateMeasurements);
    };
  }, []);

  const { isPinnedDesktop, scrollDistance, pinnedHeight } = layout;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <div
      id="case-studies"
      ref={targetRef}
      className="relative"
      data-case-studies-root
      data-pinned-height={pinnedHeight ?? undefined}
      style={isPinnedDesktop && pinnedHeight ? { height: pinnedHeight } : undefined}
    >
      <section
        data-case-studies-section
        className={`relative overflow-hidden w-full ${
          isPinnedDesktop ? 'sticky top-0 h-screen flex flex-col justify-center' : 'py-20'
        }`}
      >
        <div className="max-w-[1200px] w-full mx-auto px-6 mb-6 text-left md:mb-7 [@media(max-height:760px)]:mb-4">
          <div className="max-w-[620px]">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 block font-sans text-sm font-bold uppercase tracking-[0.22em] text-blue-bright [@media(max-height:760px)]:mb-2 [@media(max-height:760px)]:text-xs"
            >
              CASE STUDIES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-sans text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl md:text-[34px] [@media(max-height:760px)]:mb-2 [@media(max-height:760px)]:md:text-[30px]"
            >
              REAL RESULTS, REAL GROWTH
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden font-sans text-sm leading-relaxed text-white/80 sm:block [@media(max-height:760px)]:hidden"
            >
              A collection of success stories where EVIT&apos;s mindset and strategy transformed businesses performance. These case studies demonstrate our commitment to delivering practical value and long-term excellence for every client.
            </motion.p>
          </div>
        </div>

        {/* Carousel Outer Frame */}
        <div ref={viewportRef} className="w-full overflow-hidden py-2 md:py-3">
          {isPinnedDesktop ? (
            <motion.div
              ref={trackRef}
              data-case-studies-track
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
    <article className="relative flex min-h-[450px] w-[320px] flex-shrink-0 flex-col overflow-hidden rounded-[16px] border-[2px] border-blue-bright/80 bg-light px-7 pb-6 pt-7 shadow-[0_18px_34px_rgba(0,0,0,0.34),-16px_22px_36px_rgba(0,104,255,0.15)] sm:w-[450px] sm:px-9 md:min-h-[470px] md:w-[520px] md:px-11 md:pb-7 [@media(max-height:760px)]:min-h-[390px] [@media(max-height:760px)]:w-[460px] [@media(max-height:760px)]:px-8 [@media(max-height:760px)]:pb-5 [@media(max-height:760px)]:pt-5">
      {/* Avatar Wrapper */}
      <div className="relative mx-auto mb-6 h-[72px] w-[72px] overflow-hidden rounded-full border-2 border-white/80 bg-white/90 shadow-[30px_-4px_24px_rgba(210,32,198,0.46),44px_10px_30px_rgba(0,112,255,0.2)] md:h-[84px] md:w-[84px] [@media(max-height:760px)]:mb-4 [@media(max-height:760px)]:h-[64px] [@media(max-height:760px)]:w-[64px]">
        <Image
          src={study.avatar}
          alt={study.avatarAlt}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>

      <blockquote className="relative mb-5 border-l-4 border-red-bright pl-5 text-left font-sans text-[13px] leading-relaxed text-white/95 sm:pl-6 sm:text-sm md:text-[15px] [@media(max-height:760px)]:mb-4 [@media(max-height:760px)]:text-[13px] [@media(max-height:760px)]:leading-[1.45]">
        &quot;{study.quote}&quot;
      </blockquote>

      <div className="mb-6 mt-auto flex items-center justify-between gap-5 pl-5 sm:pl-6 [@media(max-height:760px)]:mb-4">
        <div className="min-w-0 text-left">
          <strong className="mb-1 block font-sans text-xs font-extrabold text-white sm:text-sm">
            {study.name}
          </strong>
          <span className="block font-sans text-[11px] text-white/85 sm:text-xs">
            {study.role}
          </span>
        </div>
        <div className="relative h-[36px] w-[124px] shrink-0 opacity-95 md:h-[42px] md:w-[148px] [@media(max-height:760px)]:h-[34px] [@media(max-height:760px)]:w-[120px]">
          <Image
            src={study.companyLogo}
            alt="EVIT client logo"
            fill
            sizes="(max-width: 768px) 124px, 148px"
            className="object-contain"
          />
        </div>
      </div>

      <Link 
        href={`/case-studies/${study.slug}`}
        className="mx-auto flex h-11 w-full max-w-[230px] cursor-pointer items-center justify-center gap-3 rounded-full border-none bg-red-bright px-7 font-sans text-xs font-extrabold text-white shadow-[0_12px_22px_rgba(227,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1616] [@media(max-height:760px)]:h-10"
      >
        SEE CASE STUDY
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
