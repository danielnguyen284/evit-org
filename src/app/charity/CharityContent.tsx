'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
import ResponsiveHeroImage from "@/components/ResponsiveHeroImage";

const revealViewport = {
  once: true,
  amount: 0.18,
  margin: '0px 0px -90px 0px',
};

// Fade up animation variants for scroll reveal
const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const cardReveal = {
  hidden: { opacity: 0, y: 42, scale: 0.96, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
};

const portraitReveal = {
  hidden: { opacity: 0, x: 70, scale: 0.96, filter: 'blur(10px)' },
  visible: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
};

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
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={fadeUp}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const charityFaqs = [
  {
    question: 'How much of the profit goes to the children?',
    answer: 'Minimum 10% of our profit from your engagement. We may contribute more depending on the quarter and specific needs.',
  },
  {
    question: 'Can I visit the SOS Village?',
    answer: 'Absolutely. We can arrange visits when you\'re in Vietnam. Meeting "your" family in person is incredibly meaningful.',
  },
  {
    question: 'What if I want to contribute more?',
    answer: 'We welcome additional contributions, and we\'ll ensure they go directly to your assigned family or to critical needs at the village.',
  },
  {
    question: 'Is this tax-deductible?',
    answer: 'SOS Village Vietnam is a registered charity. We can provide documentation for tax purposes. (Consult your tax advisor for specific guidance.)',
  },
  {
    question: 'What happens if our engagement ends?',
    answer: 'The family doesn\'t lose support. We\'ll work to assign more sponsors, and we\'ll keep you updated if you\'d like to continue supporting them independently.',
  },
  {
    question: 'Do the children know who we are?',
    answer: 'Yes. They know your company name, they see your logo (if you approve), and they send personal thank-you messages. The connection is real.',
  },
];

const mattersCards = [
  {
    id: 1,
    title: 'KNOW EXACTLY WHICH CHILDREN YOU\'RE "ADOPTING."',
  },
  {
    id: 2,
    title: 'SEE MEASURABLE IMPACT EVERY QUARTER.',
  },
  {
    id: 3,
    title: 'CONNECT DIRECTLY WITH THE SOS VILLAGE FAMILY.',
  },
  {
    id: 4,
    title: 'LET YOUR TEAM SEE THE DIFFERENCE THEY MAKE.',
  },
  {
    id: 5,
    title: 'SHARE YOUR IMPACT AND INSPIRE OTHERS.',
  },
];

export default function CharityContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            iframe.contentWindow?.postMessage('{"method":"play"}', '*');
          } else {
            iframe.contentWindow?.postMessage('{"method":"pause"}', '*');
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(iframe);

    return () => {
      observer.unobserve(iframe);
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#03032D] text-white overflow-x-hidden">
        {/* Hero Section - 100vh */}
        <section className="relative flex h-screen min-h-screen w-full items-center justify-center overflow-hidden px-6">
          {/* Background image container for Next.js Image Optimization */}
          <div className="absolute inset-0 -z-10 select-none pointer-events-none">
            <ResponsiveHeroImage
              desktopSrc="/assets/15477946316ab69706f2750bd4e6a33415a0ed5b.webp"
              mobileSrc="/assets/15477946316ab69706f2750bd4e6a33415a0ed5b-mobile.webp"
              alt="One Developer, One Child"
              className="object-cover object-center"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(3,3,45,0.42)] via-[rgba(3,3,45,0.58)] to-[rgba(3,3,45,0.74)]" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[980px] font-sans text-4xl font-extrabold uppercase leading-tight tracking-[0.01em] text-white sm:text-[48px] md:text-[58px] lg:text-[64px]"
            >
              One Developer, One Child
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-[850px] font-sans text-sm font-medium leading-relaxed tracking-0 text-white/95 sm:text-base"
            >
              A new standard in purpose-driven business.
            </motion.p>
          </div>
        </section>

        {/* Section 1: "WHAT IF BUILDING SOFTWARE..." */}
        <section className="relative flex min-h-[72vh] items-center overflow-hidden py-20 sm:py-24">
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Founder Image */}
              <Reveal className="relative mx-auto flex w-full max-w-[480px] items-center justify-center">
                <div className="pointer-events-none absolute bottom-[6%] left-[12%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(227,0,0,0.12)_0%,transparent_70%)] blur-2xl" />
                <div className="pointer-events-none absolute bottom-[2%] right-[6%] h-[230px] w-[230px] rounded-full bg-[radial-gradient(circle,rgba(0,132,209,0.12)_0%,transparent_68%)] blur-2xl" />
                <div className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-2xl border border-blue-bright/40 bg-slate-950/35 backdrop-blur-md shadow-[0_12px_36px_rgba(0,0,0,0.4)] flex items-center justify-center">
                  <Image
                    src="/assets/96ef3dd67dd459d6795b77b8e110d6a1579d1a89.jpg"
                    alt="Founder - EVIT"
                    fill
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Reveal>

              {/* Right Column - Statement Details */}
              <Reveal delay={0.08} className="text-left max-w-[680px] lg:max-w-none">
                <span className="font-sans text-sm font-bold uppercase text-blue-bright tracking-[0.15em] mb-3 block">
                  Our Initiative
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white mb-6 leading-tight">
                  What if building software could change a child&apos;s life?
                </h2>
                
                <div className="space-y-6 font-sans text-sm sm:text-base font-semibold leading-relaxed text-white/90">
                  <p>
                    When companies partner with us to build their development teams in Asia, something extraordinary happens: a portion of every project&apos;s profit directly transforms the lives of children who need it most.
                  </p>
                  <p>
                    This isn&apos;t a charity activity; this is a long-term, transparent support program that allows people to care for orphans and see the real impact YOU have on their lives.
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* Section 2: "WHY WE CREATED IT" */}
        <section className="relative overflow-hidden py-16 sm:py-20">
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            <Reveal className="relative mx-auto min-h-[380px] max-w-[1200px] overflow-hidden rounded-[10px] border border-blue-bright/80 bg-[#070735] px-7 py-10 shadow-[0_18px_42px_rgba(0,0,0,0.42),0_0_28px_rgba(0,132,209,0.18)] sm:px-10 sm:py-12 lg:px-14">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_7%_95%,rgba(0,104,255,0.48)_0%,rgba(0,104,255,0.18)_24%,transparent_46%),radial-gradient(circle_at_88%_56%,rgba(193,32,210,0.42)_0%,rgba(193,32,210,0.16)_25%,transparent_48%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,53,0.96)_0%,rgba(7,7,53,0.86)_48%,rgba(7,7,53,0.34)_72%,rgba(7,7,53,0.08)_100%)]" />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                variants={fadeUp}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex min-h-[300px] flex-col justify-center lg:max-w-[560px]"
              >
                <div className="text-left">
                  <h2 className="font-sans text-2xl font-extrabold uppercase tracking-wide text-white sm:text-[32px]">
                    Why We Created It
                  </h2>
                  <div className="mt-7 max-w-[560px] space-y-5 font-sans text-[13px] font-medium leading-relaxed text-white/88 sm:text-sm">
                    <p>
                      For the last 7 years, I have personally supported orphanages in Vietnam, quietly and without publicity.
                    </p>
                    <p>
                      No logos. No publicity. No announcements.
                    </p>
                    <p>
                      When I moved to Da Nang, I decided to do it differently.
                    </p>
                    <p>
                      I understood that those children deserve more, and to give them more, we need to have: <span className="text-blue-bright">Bigger awareness</span>, <span className="text-blue-bright">Better opportunities</span> to create <span className="text-blue-bright">Bigger impact</span>.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                variants={portraitReveal}
                transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none relative z-10 mx-auto mt-8 flex h-[320px] w-full max-w-[430px] items-end justify-center lg:absolute lg:bottom-0 lg:right-6 lg:mt-0 lg:h-[calc(100%-14px)] lg:w-[47%] lg:max-w-[520px]"
              >
                <Image
                  src="/assets/18fdfbc5d212108609f073256049734bfa6128b2.webp"
                  alt="EVIT founder portrait"
                  width={620}
                  height={760}
                  sizes="(max-width: 1024px) 78vw, 520px"
                  className="h-full w-auto object-contain object-bottom drop-shadow-[0_22px_34px_rgba(0,0,0,0.45)]"
                />
              </motion.div>
            </Reveal>
          </div>
        </section>

        {/* Section 3: "WHY THIS MATTERS" */}
        <section className="relative flex min-h-screen items-center overflow-hidden py-20 sm:py-24">
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            
            <Reveal className="mx-auto mb-12 max-w-[920px] text-center">
              <h2 className="font-sans text-3xl sm:text-[34px] font-extrabold uppercase tracking-wide text-white mb-7">
                Why This Matters
              </h2>
              <p className="mx-auto max-w-[820px] font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-semibold mb-8">
                Most charity programs are a black box. You donate, and that is it. There is no transparency, there is no follow-up, and there is no connection with children.
              </p>
              <span className="font-sans text-xs sm:text-sm font-extrabold uppercase text-blue-bright tracking-[0.24em]">
                WE&apos;RE DOING SOMETHING DIFFERENT
              </span>
            </Reveal>

            {/* 5 Cards Layout: 3 Top, 2 Bottom Centered */}
            <div className="mx-auto max-w-[980px] space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {mattersCards.slice(0, 3).map((card, index) => (
                  <motion.div
                    key={card.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={revealViewport}
                    variants={cardReveal}
                    transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="glow-card flex min-h-[162px] flex-col items-center justify-center gap-5 rounded-[10px] border border-blue-bright/80 bg-[#080832]/75 p-7 text-center shadow-[0_18px_34px_rgba(0,132,209,0.18)] backdrop-blur-md transition-all duration-300 hover:border-blue-bright hover:shadow-[0_18px_38px_rgba(0,132,209,0.28)]"
                  >
                    <div className="relative h-12 w-12 shrink-0">
                      <Image
                        src="/assets/icon-checkmark.png"
                        alt="Checkmark Icon"
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <h3 className="font-sans text-[12px] font-extrabold uppercase leading-snug tracking-[0.16em] text-white">
                      {card.title}
                    </h3>
                  </motion.div>
                ))}
              </div>

              <div className="mx-auto grid max-w-[660px] grid-cols-1 gap-6 md:grid-cols-2">
                {mattersCards.slice(3, 5).map((card, index) => (
                  <motion.div
                    key={card.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={revealViewport}
                    variants={cardReveal}
                    transition={{ duration: 0.65, delay: (index + 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="glow-card flex min-h-[162px] flex-col items-center justify-center gap-5 rounded-[10px] border border-blue-bright/80 bg-[#080832]/75 p-7 text-center shadow-[0_18px_34px_rgba(0,132,209,0.18)] backdrop-blur-md transition-all duration-300 hover:border-blue-bright hover:shadow-[0_18px_38px_rgba(0,132,209,0.28)]"
                  >
                    <div className="relative h-12 w-12 shrink-0">
                      <Image
                        src="/assets/icon-checkmark.png"
                        alt="Checkmark Icon"
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <h3 className="font-sans text-[12px] font-extrabold uppercase leading-snug tracking-[0.16em] text-white">
                      {card.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: "RADICAL TRANSPARENCY: SEE EVERY IMPACT" */}
        <section className="relative flex min-h-[78vh] items-center overflow-hidden py-20 sm:py-24">
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            
            <Reveal className="mx-auto mb-12 max-w-[900px] text-center">
              <h2 className="font-sans text-3xl font-extrabold uppercase tracking-wide text-white sm:text-[36px]">
                Radical Transparency: See Every Impact
              </h2>
              <p className="mx-auto mt-6 max-w-[760px] font-sans text-sm font-bold leading-relaxed tracking-[0.22em] text-blue-bright">
                We believe you deserve to see exactly where your contribution goes. Here&apos;s how we keep it completely transparent:
              </p>
            </Reveal>

            {/* 3 Columns Grid */}
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-3">
              
              {/* Column 1 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                variants={cardReveal}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glow-card relative flex min-h-[250px] flex-col overflow-hidden !rounded-[10px] border border-blue-bright/80 bg-[#080832]/80 p-8 shadow-[0_16px_32px_rgba(0,132,209,0.18)] backdrop-blur-md"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_0%,rgba(0,104,255,0.36)_0%,rgba(0,104,255,0.12)_28%,transparent_55%),radial-gradient(circle_at_88%_100%,rgba(195,55,190,0.42)_0%,rgba(195,55,190,0.15)_28%,transparent_58%)]" />
                <h3 className="relative z-10 mb-12 font-sans text-base font-extrabold uppercase leading-snug tracking-[0.22em] text-white">
                  Visual Connection
                </h3>
                <ul className="relative z-10 list-disc space-y-2.5 pl-4 font-sans text-xs font-medium leading-relaxed text-white/88 [&_li>span:first-child]:hidden">
                  <li className="list-item">
                    <span className="text-blue-bright shrink-0">•</span>
                    <span>Photos and videos of your sponsored family.</span>
                  </li>
                  <li className="list-item">
                    <span className="text-blue-bright shrink-0">•</span>
                    <span>Optional: Your company logo featured at the SOS Village (with your permission).</span>
                  </li>
                  <li className="list-item">
                    <span className="text-blue-bright shrink-0">•</span>
                    <span>Optional: Feature your sponsorship on our website.</span>
                  </li>
                </ul>
              </motion.div>

              {/* Column 2 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                variants={cardReveal}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="glow-card relative flex min-h-[250px] flex-col overflow-hidden !rounded-[10px] border border-blue-bright/80 bg-[#080832]/80 p-8 shadow-[0_16px_32px_rgba(0,132,209,0.18)] backdrop-blur-md"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_0%,rgba(0,104,255,0.36)_0%,rgba(0,104,255,0.12)_28%,transparent_55%),radial-gradient(circle_at_88%_100%,rgba(195,55,190,0.42)_0%,rgba(195,55,190,0.15)_28%,transparent_58%)]" />
                <h3 className="relative z-10 mb-12 font-sans text-base font-extrabold uppercase leading-snug tracking-[0.22em] text-white">
                  Quarterly Impact Reports
                </h3>
                <p className="relative z-10 font-sans text-xs font-medium leading-relaxed text-white/88">
                  Depending on what we&apos;re funding that quarter, you&apos;ll receive: Educational Support, Nutrition Programs, Technology & Equipment, Skills Training.
                </p>
              </motion.div>

              {/* Column 3 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                variants={cardReveal}
                transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="glow-card relative flex min-h-[250px] flex-col overflow-hidden !rounded-[10px] border border-blue-bright/80 bg-[#080832]/80 p-8 shadow-[0_16px_32px_rgba(0,132,209,0.18)] backdrop-blur-md"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_0%,rgba(0,104,255,0.36)_0%,rgba(0,104,255,0.12)_28%,transparent_55%),radial-gradient(circle_at_88%_100%,rgba(195,55,190,0.42)_0%,rgba(195,55,190,0.15)_28%,transparent_58%)]" />
                <h3 className="relative z-10 mb-12 font-sans text-base font-extrabold uppercase leading-snug tracking-[0.22em] text-white">
                  Gratitude
                </h3>
                <ul className="relative z-10 list-disc space-y-2.5 pl-4 font-sans text-xs font-medium leading-relaxed text-white/88 [&_li>span:first-child]:hidden">
                  <li className="list-item">
                    <span className="text-blue-bright shrink-0">•</span>
                    <span>Video messages from the children thanking sponsors by name.</span>
                  </li>
                  <li className="list-item">
                    <span className="text-blue-bright shrink-0">•</span>
                    <span>Letters and drawings from the kids.</span>
                  </li>
                  <li className="list-item">
                    <span className="text-blue-bright shrink-0">•</span>
                    <span>Updates on major life milestones (graduations, achievements, etc.)</span>
                  </li>
                </ul>
              </motion.div>

            </div>

          </div>
        </section>

        {/* Section 5: "HOW IT WORKS" */}
        <section className="relative flex min-h-[72vh] items-center overflow-hidden py-20 sm:py-24">
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            
            <Reveal className="mx-auto mb-12 max-w-[900px] text-center">
              <span className="hidden">
                The Process
              </span>
              <h2 className="font-sans text-3xl font-extrabold uppercase tracking-wide text-white sm:text-[36px]">
                How It Works
              </h2>
            </Reveal>

            {/* Split timeline grid */}
            <div className="mx-auto grid max-w-[990px] grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-14">
              
              {/* Box 1 */}
              <Reveal className="flex flex-col text-left">
                <div className="mb-6 font-sans text-6xl font-extrabold leading-none text-blue-bright sm:text-[76px]">1</div>
                <h3 className="mb-7 font-sans text-base font-extrabold uppercase tracking-[0.24em] text-blue-bright">
                  Transparency Meets Impact
                </h3>
                <div className="max-w-[420px] space-y-4 font-sans text-xs font-medium leading-relaxed text-white/90">
                  <p>
                    When you build your software development team through our organization, 10% of our revenue goes directly to supporting children at SOS Children&apos;s Villages Vietnam.
                  </p>
                  <p>
                    SOS Village operates on a family model. Eight children live together with one dedicated &quot;mother&quot; in a home, creating a real family environment. These are homes where children grow up with stability, love, and opportunity.
                  </p>
                </div>
              </Reveal>

              {/* Timeline Divider */}
              <div className="relative hidden h-[250px] w-[26px] items-center justify-center md:flex [&>div]:hidden">
                <Image
                  src="/assets/Vector 1.svg"
                  alt=""
                  width={39}
                  height={545}
                  className="h-full w-auto object-contain opacity-90"
                />
                <div className="w-[1px] h-full bg-gradient-to-b from-blue-bright/10 via-blue-bright/60 to-blue-bright/10" />
                <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-blue-bright bg-[#030325] flex items-center justify-center">
                  <span className="text-blue-bright font-sans text-[10px] font-bold">→</span>
                </div>
              </div>

              {/* Box 2 */}
              <Reveal delay={0.1} className="flex flex-col text-left">
                <div className="mb-6 font-sans text-6xl font-extrabold leading-none text-blue-bright sm:text-[76px]">2</div>
                <h3 className="mb-7 font-sans text-base font-extrabold uppercase tracking-[0.24em] text-blue-bright">
                  Your Family. Your Impact.
                </h3>
                <div className="max-w-[420px] space-y-3 font-sans text-xs font-medium leading-relaxed text-white/90">
                  <p>
                    We assign one family to your partnership, and you&apos;ll know exactly who you&apos;re helping:
                  </p>
                  <ul className="space-y-1.5 pl-2 [&_li>span:first-child]:hidden">
                    <li className="flex items-start gap-2 before:text-white/90 before:content-['>']">
                      <span className="text-blue-bright">•</span>
                      <span>Their names.</span>
                    </li>
                    <li className="flex items-start gap-2 before:text-white/90 before:content-['>']">
                      <span className="text-blue-bright">•</span>
                      <span>Their faces (photos and videos).</span>
                    </li>
                    <li className="flex items-start gap-2 before:text-white/90 before:content-['>']">
                      <span className="text-blue-bright">•</span>
                      <span>Their progress (quarterly updates).</span>
                    </li>
                    <li className="flex items-start gap-2 before:text-white/90 before:content-['>']">
                      <span className="text-blue-bright">•</span>
                      <span>Their gratitude (personal video messages from the kids).</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

            </div>

          </div>
        </section>

        {/* Section 6: "THE BUSINESS CASE" */}
        <section className="relative overflow-hidden py-20 sm:py-24">
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6">
            <Reveal className="mx-auto max-w-[1360px]">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[10px] border border-blue-bright/80 shadow-[0_16px_34px_rgba(0,132,209,0.18)]">
                <iframe
                  ref={iframeRef}
                  src="https://player.vimeo.com/video/1201859307?api=1&autoplay=1&muted=1&byline=0&title=0&portrait=0&badge=0&dnt=1"
                  className="h-full w-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="One Developer, One Child impact video"
                />
              </div>
            </Reveal>

            <Reveal delay={0.08} className="mx-auto mt-20 max-w-[900px] text-center sm:mt-24">
              <h2 className="font-sans text-3xl font-extrabold uppercase tracking-wide text-white sm:text-[36px]">
                The Business Case
              </h2>
              <p className="mx-auto mt-6 max-w-[680px] font-sans text-sm font-bold leading-relaxed tracking-[0.22em] text-blue-bright">
                Let&apos;s be direct: This program makes business sense
              </p>
            </Reveal>

            <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                {
                  title: 'For The Children',
                  items: ['Education', 'nutrition', 'Opportunity', 'Support', 'Hope'],
                },
                {
                  title: 'For You',
                  items: [
                    'Meaningful CSR program with zero additional overhead',
                    'Authentic story to share with your stakeholders and team',
                    'Real, documented social impact',
                    'Team morale boost',
                  ],
                },
                {
                  title: 'For Us',
                  items: [
                    'Meaning and purpose',
                    'Differentiation in a crowded market',
                    'Deeper, more meaningful client relationships',
                    'Living our values, not just talking about them',
                  ],
                },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={revealViewport}
                  variants={cardReveal}
                  transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="glow-card relative flex min-h-[280px] flex-col overflow-hidden !rounded-[10px] border border-blue-bright/80 bg-[#080832]/80 p-8 shadow-[0_16px_32px_rgba(0,132,209,0.18)] backdrop-blur-md"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_0%,rgba(0,104,255,0.36)_0%,rgba(0,104,255,0.12)_28%,transparent_55%),radial-gradient(circle_at_88%_100%,rgba(195,55,190,0.42)_0%,rgba(195,55,190,0.15)_28%,transparent_58%)]" />
                  <h3 className="relative z-10 mb-10 font-sans text-base font-extrabold uppercase leading-snug tracking-[0.22em] text-white">
                    {card.title}
                  </h3>
                  <ul className="relative z-10 list-disc space-y-4 pl-4 font-sans text-xs font-medium leading-relaxed text-white/88">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: "A QUIET INVITATION" */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Image */}
              <Reveal className="relative mx-auto flex w-full max-w-[480px] items-center justify-center">
                <div className="pointer-events-none absolute bottom-[6%] left-[12%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(227,0,0,0.12)_0%,transparent_70%)] blur-2xl" />
                <div className="pointer-events-none absolute bottom-[2%] right-[6%] h-[230px] w-[230px] rounded-full bg-[radial-gradient(circle,rgba(0,132,209,0.12)_0%,transparent_68%)] blur-2xl" />
                <div className="relative h-[280px] sm:h-[360px] w-full overflow-hidden rounded-2xl border border-blue-bright/40 shadow-[0_12px_36px_rgba(0,0,0,0.4)]">
                  <Image
                    src="/assets/398b87993e53ef2ba25c373bda22ab9cab5441ac.webp"
                    alt="A Quiet Invitation"
                    fill
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              {/* Right Column - Details */}
              <Reveal delay={0.08} className="text-left max-w-[680px] lg:max-w-none">
                <span className="font-sans text-sm font-bold uppercase text-blue-bright tracking-[0.15em] mb-3 block">
                  Reach Out
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white mb-6">
                  A Quiet Invitation
                </h2>
                
                <div className="space-y-4 font-sans text-sm sm:text-base font-semibold leading-relaxed text-white/90 mb-8">
                  <p>
                    We do not &quot;sell&quot; this program.
                  </p>
                  <p>
                    People usually ask us to understand more about how we work.
                  </p>
                  <p>
                    If you are curious, we are happy to explain more. If not, that is also completely fine.
                  </p>
                  <p className="text-blue-bright border-l-2 border-blue-bright/45 pl-4 py-1">
                    Impact should be chosen, not pushed.
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm">
                    For more information: <a href="mailto:admin@evit-org.com" className="font-bold text-blue-bright hover:underline">admin@evit-org.com</a>
                  </p>
                </div>

                <Link href="/contact-us" className="btn-primary inline-flex">
                  Contact Us
                  <span className="arrow">→</span>
                </Link>
              </Reveal>

            </div>
          </div>
        </section>

        {/* Section 7: "FREQUENTLY ASKED QUESTIONS" */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-[#03032D]">
          {/* Background Radial Glow */}
          <div className="absolute top-[14%] left-1/2 -translate-x-1/2 w-[760px] h-[520px] bg-gradient-to-tr from-blue-bright/10 to-purple-800/10 blur-[90px] rounded-full pointer-events-none -z-1" />

          <div className="max-w-[1200px] w-full mx-auto px-6">
            <div className="text-center mb-16">
              <Reveal className="block">
                <span className="font-sans text-sm font-bold uppercase text-blue-bright tracking-[0.22em] mb-4 block">
                  FAQs
                </span>
                <h2 className="font-sans text-3xl sm:text-[34px] font-extrabold text-white tracking-wide uppercase">
                  Frequently Asked Questions
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {charityFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <motion.article
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={revealViewport}
                    variants={cardReveal}
                    transition={{ duration: 0.58, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
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

      </main>

      <Footer />
      <FloatingCalendar />
    </>
  );
}
