'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Study {
  id: number;
  quote: React.ReactNode;
  name: string;
  role: string;
  avatar: string;
  avatarAlt: string;
}

const studies: Study[] = [
  {
    id: 1,
    quote: (
      <>
        EVIT gave us a <span className="text-blue-bright font-bold">clear sales roadmap</span> and practical guidance on how to do it. As a result, our sales team has improved week by week and is now much more confident working independently with clients.
      </>
    ),
    name: 'Mr. Nguyen Van Tuan',
    role: 'Chief Executive Officer (CEO)',
    avatar: '/assets/540048d82298a1c0a80ba59038a0eef747a8965c.jpg',
    avatarAlt: 'Client portrait',
  },
  {
    id: 2,
    quote: (
      <>
        Working with EVIT <span className="text-blue-bright font-bold">helped us achieve our first real results</span>. With the right sales method, strategy, and mindset from EVIT, we are confident we can continue to improve and achieve greater success in the future.
      </>
    ),
    name: 'Ms. Faustrina',
    role: 'Sales Representative',
    avatar: '/assets/daa7591f467f07ac34cf81f8dd257db99985d118.jpg',
    avatarAlt: 'Sales representative portrait',
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
    avatar: '/assets/2e869bba8104d15adef7f148438a7cd633820ab4.jpg',
    avatarAlt: 'Founder portrait',
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
    avatar: '/assets/hero-bg.jpg',
    avatarAlt: 'Growth director portrait',
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
    avatar: '/assets/93399949fe72f74d48c8ac9828123999f81ce7b2.png',
    avatarAlt: 'Marketing lead portrait',
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
    avatar: '/assets/b111d46df729ec4085b067064109d2ae015e59ae.png',
    avatarAlt: 'Managing partner portrait',
  },
];

export default function CaseStudies() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth - window.innerWidth + 120);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -trackWidth]);

  return (
    <div
      ref={targetRef}
      className={`relative ${isDesktop ? 'h-[250vh]' : ''}`}
    >
      <section
        id="case-studies"
        className={`relative overflow-hidden w-full ${
          isDesktop ? 'sticky top-0 h-screen flex flex-col justify-center' : 'py-20'
        }`}
      >
        <div className="max-w-[1200px] w-full mx-auto px-6 mb-10 text-left">
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
              className="font-sans text-3xl sm:text-[34px] font-extrabold text-white tracking-wide uppercase mb-6"
            >
              REAL RESULTS, REAL GROWTH
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-sm text-white/80 leading-relaxed"
            >
              A collection of success stories where EVIT&apos;s mindset and strategy transformed businesses performance. These case studies demonstrate our commitment to delivering practical value and long-term excellence for every client.
            </motion.p>
          </div>
        </div>

        {/* Carousel Outer Frame */}
        <div className="w-full overflow-hidden py-4">
          {isDesktop ? (
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-9 px-[calc((100vw-1200px)/2+24px)] w-max will-change-transform"
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
    <article className="relative w-[340px] sm:w-[360px] min-h-[290px] overflow-hidden border-[1.5px] border-blue-bright/60 rounded-2xl pt-[76px] pb-8 px-8 bg-light shadow-xl before:content-[''] before:absolute before:left-5 before:top-24 before:w-0.5 before:h-[76px] before:bg-red-bright before:rounded-sm">
      {/* Avatar Wrapper */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[58px] h-[58px] rounded-full bg-white/90 shadow-[18px_0_26px_rgba(232,0,164,0.3)] flex items-center justify-center border-2 border-red-bright overflow-hidden">
        <Image
          src={study.avatar}
          alt={study.avatarAlt}
          width={58}
          height={58}
          className="object-cover w-full h-full"
        />
      </div>

      <blockquote className="min-h-[100px] font-sans text-xs sm:text-[13px] text-white/90 leading-relaxed pl-5 mb-6 text-left">
        &quot;{study.quote}&quot;
      </blockquote>

      <div className="flex items-end justify-between gap-4 mb-6">
        <div className="text-left">
          <strong className="block font-sans text-[11px] font-extrabold text-white mb-1 uppercase tracking-wider">
            {study.name}
          </strong>
          <span className="block font-sans text-[10px] text-white/70">
            {study.role}
          </span>
        </div>
        <div className="relative w-[76px] h-6">
          <Image
            src="/assets/logo.png"
            alt="EVIT client logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <button className="flex items-center justify-center gap-2 px-5 py-2.5 mx-auto border-none rounded-full bg-red-bright text-white font-sans text-[10px] font-extrabold cursor-pointer shadow-[0_10px_20px_rgba(227,0,0,0.22)] hover:bg-[#ff1616] hover:-translate-y-0.5 transition-all duration-300" type="button">
        SEE CASE STUDY
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}
