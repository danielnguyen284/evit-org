'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
import CaseStudies from "@/components/CaseStudies";

const problemBullets = [
  'Do not enjoy sales, usually are introverts',
  'Do not have a marketing & sales background',
  'Rely too much on relationships',
  'Do not know how to build a predictable sales system',
];

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#03032D] text-white">
        <section
          className="relative flex min-h-[78vh] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-6 pt-[88px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(3, 3, 45, 0.35) 0%, rgba(3, 3, 45, 0.78) 72%, #03032D 100%), url('/assets/7c21ecf1796d40be0fbfd3cd297c2396db71629c.png')",
          }}
        >
          <div className="absolute inset-0 bg-[#03032D]/20" />
          <div className="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-[#03032D] to-transparent" />

          <div className="relative z-10 mx-auto flex w-full max-w-[920px] flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-3xl font-extrabold uppercase leading-tight tracking-[0.01em] text-white sm:text-[44px] md:text-[52px]"
            >
              Welcome To EVIT
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-[760px] font-sans text-xs font-medium leading-relaxed text-white/88 sm:text-sm"
            >
              We work with IT service providers, founders, and sales teams who want a consistent lead flow,
              better clients, and to generate more revenue from global markets.
            </motion.p>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-blue-bright/20 py-20 sm:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[url('/assets/background-wave-original.png')] bg-[length:100%_auto] bg-top bg-no-repeat opacity-50 mix-blend-screen brightness-0 invert-[0.38] sepia saturate-[2.8] hue-rotate-[190deg]" />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            <Reveal className="mx-auto mb-20 max-w-[980px] text-center sm:mb-28">
              <h2 className="font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[34px]">
                We Help Tech Companies Get More Clients. Guaranteed
              </h2>
              <p className="mx-auto mt-7 max-w-[820px] font-sans text-xs font-extrabold uppercase leading-relaxed tracking-[0.26em] text-blue-bright sm:text-sm">
                We work with IT service providers, founders, and sales teams who want a consistent lead flow,
                better clients, and to generate more revenue from global markets.
              </p>
            </Reveal>

            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-16">
              <Reveal className="text-left">
                <h2 className="mb-8 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[34px]">
                  The Problem We Solve
                </h2>

                <p className="mb-7 max-w-[720px] font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
                  Most IT companies are built by technical founders. But many technical founders:
                </p>

                <ul className="mb-8 flex max-w-[720px] list-disc flex-col gap-4 pl-5 marker:text-blue-bright">
                  {problemBullets.map((bullet) => (
                    <li key={bullet} className="font-sans text-xs font-medium leading-relaxed text-white/88 sm:text-sm">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="max-w-[760px] space-y-5 font-sans text-xs font-medium leading-relaxed text-white/88 sm:text-sm">
                  <p>
                    They grow through referrals and personal networks. It works at the beginning, until they hit the limit.
                  </p>
                  <p>
                    Not because the company is bad, but because there is no structured sales system.
                  </p>
                  <p>
                    That is where we step in.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08} className="relative mx-auto flex w-full max-w-[460px] items-center justify-center">
                <div className="pointer-events-none absolute bottom-[6%] left-[12%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(227,0,0,0.26)_0%,transparent_70%)] blur-2xl" />
                <div className="pointer-events-none absolute bottom-[2%] right-[6%] h-[230px] w-[230px] rounded-full bg-[radial-gradient(circle,rgba(0,132,209,0.24)_0%,transparent_68%)] blur-2xl" />
                <Image
                  src="/assets/bf85fcc2a8dcb5d2cf0089bcccd6e4184b693b15.png"
                  alt="Sales problem insight illustration"
                  width={520}
                  height={520}
                  sizes="(max-width: 1024px) 80vw, 460px"
                  className="relative z-10 h-auto w-full object-contain"
                  priority={false}
                />
              </Reveal>
            </div>

            <div className="mt-24 grid items-center gap-12 sm:mt-32 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-20">
              <Reveal className="relative mx-auto flex w-full max-w-[390px] items-center justify-center">
                <div className="pointer-events-none absolute bottom-[12%] right-[6%] h-[210px] w-[210px] rounded-full bg-[radial-gradient(circle,rgba(227,0,0,0.24)_0%,transparent_70%)] blur-2xl" />
                <div className="pointer-events-none absolute bottom-[6%] left-[6%] h-[230px] w-[230px] rounded-full bg-[radial-gradient(circle,rgba(0,132,209,0.2)_0%,transparent_68%)] blur-2xl" />
                <Image
                  src="/assets/21887aecb0305956952648bab596e5f9c44c220b.png"
                  alt="Mission target illustration"
                  width={420}
                  height={416}
                  sizes="(max-width: 1024px) 76vw, 390px"
                  className="relative z-10 h-auto w-full object-contain"
                />
              </Reveal>

              <Reveal delay={0.08} className="max-w-[760px] text-left">
                <h2 className="mb-8 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[34px]">
                  Our Mission
                </h2>
                <div className="space-y-6 font-sans text-xs font-medium leading-[2] text-white/88 sm:text-sm">
                  <p>
                    We exist to help IT companies turn strong technical capability into structured, predictable growth.
                  </p>
                  <p>
                    Many founders build excellent products and delivery teams first. As they scale, they need a clear sales
                    system that connects technical expertise with real business outcomes and international markets.
                  </p>
                  <p>
                    For the last 7 years, we have been helping IT companies to sell their products and services in foreign
                    markets, and this is what we do best.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal className="mx-auto mt-24 max-w-[980px] rounded-[14px] border border-blue-bright/80 bg-light px-6 py-10 text-center shadow-[0_18px_42px_rgba(0,0,0,0.36),0_0_38px_rgba(0,132,209,0.14)] sm:mt-32 sm:px-12">
              <h2 className="font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px]">
                For The Last 7 Years
              </h2>
              <p className="mx-auto mt-6 max-w-[780px] font-sans text-xs font-extrabold uppercase leading-relaxed tracking-[0.24em] text-blue-bright sm:text-sm">
                We have been helping IT companies to sell their products and services in foreign markets,
                and this is what we do best.
              </p>
            </Reveal>
          </div>
        </section>

        <CaseStudies />
      </main>

      <Footer />
      <FloatingCalendar />
    </>
  );
}
