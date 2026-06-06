'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
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

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      
      <main className="bg-[#03032D] min-h-screen text-white relative overflow-hidden">
        {/* Banner Section - Full Screen Height Hero */}
        <section 
          className="relative h-screen w-full flex items-center justify-center pb-[40px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(3, 3, 45, 0.4) 0%, rgba(3, 3, 45, 0.9) 100%), url('/assets/1508aab01b3a4fca97b3b1ccfa52ad0ca9d80acb.png')`,
          }}
        >
          {/* Bottom overlay blend */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#03032D] to-transparent pointer-events-none z-[1]" />

          <div className="relative z-10 text-center px-6 pt-[80px] max-w-[950px] w-full mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-3xl sm:text-[46px] md:text-[56px] font-extrabold uppercase tracking-tight text-white select-none"
            >
              CASE STUDIES
            </motion.h1>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-[1200px] w-full mx-auto px-6 pb-24 relative z-10 pt-24 sm:pt-32">
          <div className="text-center max-w-[850px] mx-auto mb-16 sm:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 font-sans text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl md:text-[34px]"
            >
              REAL RESULTS, REAL GROWTH
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-xs sm:text-[14px] leading-relaxed text-blue-bright font-bold uppercase tracking-[0.06em]"
            >
              A collection of success stories where EVIT&apos;s mindset and strategy transformed business performance. These case studies demonstrate our commitment to delivering practical value and long-term excellence for every client
            </motion.p>
          </div>

          {/* Grid Layout of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {studies.map((study, idx) => (
              <motion.article 
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: Math.min(idx * 0.08, 0.3) }}
                className="bg-light relative flex min-h-[440px] w-full flex-col overflow-hidden rounded-[16px] border-[2px] border-blue-bright/80 px-6 pb-6 pt-7 sm:px-8 md:px-10 md:pb-7"
              >
                {/* Avatar Wrapper */}
                <div className="relative mx-auto mb-6 h-[72px] w-[72px] overflow-hidden rounded-full border-2 border-white/80 bg-white/90 shadow-[30px_-4px_24px_rgba(210,32,198,0.46),44px_10px_30px_rgba(0,112,255,0.2)] md:h-[84px] md:w-[84px]">
                  <Image
                    src={study.avatar}
                    alt={study.avatarAlt}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>

                <blockquote className="relative mb-5 max-h-[190px] overflow-hidden border-l-4 border-red-bright pl-4 text-left font-sans text-xs leading-relaxed text-white/95 sm:pl-5 sm:text-[13px] md:text-sm">
                  &quot;{study.quote}&quot;
                </blockquote>

                <div className="mb-6 mt-auto flex items-center justify-between gap-5 pl-4 sm:pl-5">
                  <div className="text-left">
                    <strong className="mb-1 block font-sans text-[11px] font-extrabold text-white sm:text-xs md:text-sm">
                      {study.name}
                    </strong>
                    <span className="block font-sans text-[10px] text-white/85 sm:text-[11px] md:text-xs">
                      {study.role}
                    </span>
                  </div>
                  <div className="relative h-[32px] w-[110px] opacity-95 sm:h-[36px] sm:w-[124px] md:h-[42px] md:w-[148px]">
                    <Image
                      src={study.companyLogo}
                      alt="EVIT client logo"
                      fill
                      sizes="(max-width: 640px) 110px, (max-width: 768px) 124px, 148px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <Link 
                  href={`/case-studies/${study.slug}`}
                  className="mx-auto flex h-11 w-full max-w-[230px] cursor-pointer items-center justify-center gap-3 rounded-full border-none bg-red-bright px-7 font-sans text-xs font-extrabold text-white shadow-[0_12px_22px_rgba(227,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1616]"
                >
                  SEE CASE STUDY
                  <span aria-hidden="true">→</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        <Footer />
      </main>

      <FloatingCalendar />
    </>
  );
}
