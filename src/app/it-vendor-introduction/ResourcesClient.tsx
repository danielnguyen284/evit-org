'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
import { useBooking } from "@/components/BookingModal";
import { WPPostRaw, decodeHtmlEntities } from "@/data/blogData";

// Fade up animation variants for scroll reveal
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
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
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -80px 0px' }}
      variants={fadeUp}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ResourcesClientProps {
  initialPosts: WPPostRaw[];
}

export default function ResourcesClient({ initialPosts }: ResourcesClientProps) {
  const { openBooking } = useBooking();

  const getFeaturedImageUrl = (post: WPPostRaw): string => {
    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
    if (featuredMedia?.source_url) {
      return featuredMedia.source_url;
    }
    return "/assets/daa7591f467f07ac34cf81f8dd257db99985d118.webp";
  };

  const cardsData = [
    {
      id: 1,
      icon: '/assets/image 1 [Vectorized].png',
      title: 'CONNECTING AND MATCHMAKING WITH TOP IT SERVICE PROVIDERS IN VIETNAM',
    },
    {
      id: 2,
      icon: '/assets/image 2 [Vectorized].png',
      title: 'IT DELIVERY CENTERS OR R&D CENTERS IN VIETNAM WITH ZERO UPFRONT INVESTMENT',
    },
    {
      id: 3,
      icon: '/assets/image 3 [Vectorized].png',
      title: (
        <>
          LEVERAGE EVIT&apos;S NETWORK TO SECURE THE BEST DEAL.{' '}
          <span className="text-blue-bright">GUARANTEED</span>
        </>
      ),
    },
    {
      id: 4,
      icon: '/assets/image 4 [Vectorized].png',
      title: 'NO FEE FOR CONNECTING AND MATCHING SERVICES',
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#03032D] text-white overflow-x-hidden">
        {/* Hero Section - 100vh */}
        <section className="relative flex h-screen min-h-screen w-full items-center justify-center overflow-hidden px-6">
          {/* Background image container for Next.js Image Optimization */}
          <div className="absolute inset-0 -z-10 select-none pointer-events-none">
            <Image
              src="/assets/f061061994c33d3b378765bc4c76d1d4665cf244.webp"
              alt="Connect & leverage top quality IT teams in Vietnam"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(3,3,45,0.45)] via-[rgba(3,3,45,0.82)] to-[#03032D]" />
          </div>

          <div className="absolute inset-0 bg-[#03032D]/15 pointer-events-none" />

          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-3xl font-extrabold uppercase leading-tight tracking-[0.02em] text-white sm:text-[44px] md:text-[54px] lg:text-[62px] max-w-[1100px]"
            >
              Connect & leverage top quality<br className="hidden md:inline" />
              IT teams in Vietnam. Fast, safe, effective
            </motion.h1>
          </div>
        </section>

        {/* Corporate Service - EVIT Organization Section */}
        <section id="vendor-introduction" className="relative py-24 sm:py-32 overflow-hidden">
          {/* Subtle background wave element */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[url('/assets/background-wave-original.png')] bg-[length:100%_auto] bg-top bg-no-repeat opacity-30 mix-blend-screen brightness-0 invert-[0.38] sepia saturate-[2.8] hue-rotate-[190deg]" />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            <Reveal className="mx-auto mb-16 max-w-[900px] text-center">
              <span className="font-sans text-sm font-bold uppercase text-blue-bright tracking-[0.15em] mb-3 block">
                Corporate Service
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white mb-6">
                EVIT Organization
              </h2>
              <p className="font-sans text-sm sm:text-[15px] text-white/80 leading-relaxed font-semibold">
                At EVIT, we&apos;re more than just a link. Our mission is to provide value by connecting you to a wide network,
                skilled talents, and constant support from our experts to make sure that your collaboration with IT vendors
                goes smoothly and effectively.
              </p>
            </Reveal>

            {/* Grid of 4 Cards (2x2 layout on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto mb-12">
              {cardsData.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="glow-card group cursor-pointer flex min-h-[240px] flex-col items-center justify-center p-8 rounded-2xl border border-blue-bright/35 bg-[#080832]/65 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-bright/60"
                >
                  <div className="flex items-center justify-center mb-6">
                    <Image
                      src={card.icon}
                      alt="EVIT Card Icon"
                      width={70}
                      height={70}
                      className="object-contain w-[70px] h-[70px] transition-transform duration-300 group-hover:scale-105"
                      priority={index < 2}
                    />
                  </div>
                  <h3 className="font-sans text-xs sm:text-[13px] font-extrabold text-white tracking-wider leading-relaxed uppercase text-center w-full max-w-[380px]">
                    {card.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Red About Us Button */}
            <Reveal className="flex justify-center mt-12">
              <Link href="/about" className="btn-primary">
                About Us
                <span className="arrow">→</span>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Creative Approach - WHY VIETNAM? Section */}
        <section id="why-vietnam" className="relative py-24 sm:py-32 overflow-hidden">
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_480px] gap-12 lg:gap-16 items-center">
              
              {/* Left Column - HCMC Skyline Image */}
              <Reveal className="relative mx-auto flex w-full max-w-[480px] items-center justify-center">
                <div className="pointer-events-none absolute bottom-[6%] left-[12%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(227,0,0,0.18)_0%,transparent_70%)] blur-2xl" />
                <div className="pointer-events-none absolute bottom-[2%] right-[6%] h-[230px] w-[230px] rounded-full bg-[radial-gradient(circle,rgba(0,132,209,0.18)_0%,transparent_68%)] blur-2xl" />
                <div className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-2xl border border-blue-bright/40 shadow-[0_12px_36px_rgba(0,0,0,0.4)]">
                  <Image
                    src="/assets/4cafdf2644be75bae9c6bd30de93511515d299d1.webp"
                    alt="Why Vietnam - HCMC Skyline"
                    fill
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              {/* Right Column - Text Details */}
              <Reveal delay={0.08} className="text-left max-w-[680px] lg:max-w-none">
                <span className="font-sans text-sm font-bold uppercase text-blue-bright tracking-[0.15em] mb-3 block">
                  Creative Approach
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white mb-6">
                  Why Vietnam?
                </h2>
                
                <p className="mb-7 font-sans text-sm sm:text-base font-semibold leading-relaxed text-white/90">
                  Amidst the dynamic IT landscape of Southeast Asia, Vietnam has emerged as an exceptionally promising market.
                </p>

                <ul className="mb-8 flex flex-col gap-4 pl-0 list-none">
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-start gap-3 font-sans text-xs sm:text-sm font-semibold leading-relaxed text-white/80"
                  >
                    <span className="text-blue-bright text-lg shrink-0 mt-[-2px]">•</span>
                    <span><strong className="text-white">1,000,000</strong> skilled software engineers</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start gap-3 font-sans text-xs sm:text-sm font-semibold leading-relaxed text-white/80"
                  >
                    <span className="text-blue-bright text-lg shrink-0 mt-[-2px]">•</span>
                    <span><strong className="text-white">40,000+</strong> IT companies</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start gap-3 font-sans text-xs sm:text-sm font-semibold leading-relaxed text-white/80"
                  >
                    <span className="text-blue-bright text-lg shrink-0 mt-[-2px]">•</span>
                    <span>High-quality IT engineers with affordable prices</span>
                  </motion.li>
                </ul>

                <button onClick={openBooking} className="btn-primary inline-flex cursor-pointer border-0 outline-none">
                  Book Free Consultation
                  <span className="arrow">→</span>
                </button>
              </Reveal>

            </div>
          </div>
        </section>

        {/* OUR PRACTICE - WHY CHOOSE EVIT Section */}
        <section id="why-choose-evit" className="relative py-24 sm:py-32 overflow-hidden">
          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            
            {/* Top Circuit Board Image */}
            <Reveal className="relative mx-auto flex w-full max-w-[1200px] items-center justify-center mb-14">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,132,209,0.15)_0%,transparent_60%)] blur-3xl" />
              <div className="relative w-full overflow-hidden rounded-2xl border border-blue-bright/40 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                <Image
                  src="/assets/bdff73de3bbae3fd869ca356065758038e2acb85.webp"
                  alt="Our Practice - Transparency, Speed, Risk"
                  width={1000}
                  height={275}
                  className="w-full h-auto object-contain"
                  priority={true}
                />
              </div>
            </Reveal>

            {/* Section details */}
            <Reveal delay={0.08} className="mx-auto max-w-[900px] text-center">
              <span className="font-sans text-sm font-bold uppercase text-blue-bright tracking-[0.15em] mb-3 block">
                Our Practice
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white mb-8">
                Why Choose EVIT
              </h2>
              
              <div className="space-y-6">
                <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed font-semibold">
                  EVIT is more than a service provider; we are your partners in navigating the dynamic worldwide IT markets.
                  With a foundation built on transparency, expertise, and quality as well as speed, we are here to be your
                  guide into global markets.
                </p>
                <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed font-medium max-w-[800px] mx-auto">
                  Our services are unique because we provide guarantees of results as well as risk reduction to a minimum
                  during your global expansion journey.
                </p>
              </div>
            </Reveal>

          </div>
        </section>

        {/* Blog Section */}
        <section id="latest-blog" className="relative py-24 sm:py-32 overflow-hidden">
          {/* Subtle background wave element */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[url('/assets/background-wave-original.png')] bg-[length:100%_auto] bg-top bg-no-repeat opacity-20 mix-blend-screen brightness-0 invert-[0.38] sepia saturate-[2.8] hue-rotate-[190deg]" />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            <Reveal className="mx-auto mb-16 max-w-[900px] text-center">
              <span className="font-sans text-sm font-bold uppercase text-blue-bright tracking-[0.15em] mb-3 block">
                Our Blog
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-white mb-6">
                NEWS & ARTICLES
              </h2>
            </Reveal>

            {initialPosts.length === 0 ? (
              <div className="text-center py-20 text-white/50 font-semibold">
                No posts found.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {initialPosts.map((post, index) => {
                  const imageUrl = getFeaturedImageUrl(post);

                  return (
                    <Reveal key={post.id} delay={index * 0.1}>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col h-full bg-[#080832]/60 border border-blue-bright/35 hover:border-blue-bright/80 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,104,255,0.25)] hover:-translate-y-1"
                      >
                        {/* Featured Image */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                          <Image
                            src={imageUrl}
                            alt={decodeHtmlEntities(post.title.rendered)}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Title & Body Block */}
                        <div className="flex flex-col flex-grow p-6 border-t border-white/5">
                          {/* Date */}
                          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">
                            {new Date(post.date).toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })}
                          </span>

                          {/* Title with Red vertical accent line */}
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-[3px] bg-[#E92228] rounded-full self-stretch flex-shrink-0 transition-all duration-300 group-hover:bg-blue-bright" />
                            <h3 className="font-sans text-base sm:text-lg font-bold text-white leading-snug group-hover:text-blue-bright transition-colors line-clamp-2">
                              {decodeHtmlEntities(post.title.rendered)}
                            </h3>
                          </div>

                          {/* Excerpt */}
                          <p 
                            className="font-sans text-xs sm:text-[13px] text-white/65 leading-relaxed line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(post.excerpt.rendered) }}
                          />
                        </div>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            )}

            {/* Read More Button */}
            <Reveal className="flex justify-center mt-12">
              <Link href="/blog" className="btn-primary">
                READ MORE
                <span className="arrow">→</span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCalendar />
    </>
  );
}
