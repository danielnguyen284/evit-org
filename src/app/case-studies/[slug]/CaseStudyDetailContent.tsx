'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCalendar from '@/components/FloatingCalendar';
import Contact from '@/components/Contact';
import CaseStudies from '@/components/CaseStudies';
import { CaseStudyData } from '@/data/caseStudiesData';

interface CaseStudyDetailContentProps {
  caseStudy: CaseStudyData;
}

function SectionReveal({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CaseStudyDetailContent({ caseStudy }: CaseStudyDetailContentProps) {
  return (
    <>
      <Header />

      <main className="bg-[#03032D] min-h-screen text-white relative">
        {/* Case Studies Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center pb-[40px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(3, 3, 45, 0.4) 0%, rgba(3, 3, 45, 0.9) 100%), url('/assets/1508aab01b3a4fca97b3b1ccfa52ad0ca9d80acb.png')`,
          }}
        >
          {/* Bottom overlay blend to blend smoothly with content */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#03032D] to-transparent pointer-events-none z-[1]" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-[950px] w-full mx-auto px-6 pt-[80px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-3xl sm:text-[40px] md:text-[52px] font-extrabold leading-[1.25] text-white tracking-tight uppercase"
            >
              {caseStudy.heroTitle}
            </motion.h1>
          </div>
        </section>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-12 flex flex-col gap-20 sm:gap-28">
          
          {/* Header Title & Subtitle */}
          <SectionReveal className="text-center w-full">
            <h2 className="font-sans text-2xl sm:text-[32px] font-extrabold uppercase leading-tight tracking-wide text-white">
              {caseStudy.title}
            </h2>
            <p className="mt-4 font-sans text-xs sm:text-sm text-blue-bright font-bold leading-relaxed max-w-[800px] mx-auto uppercase tracking-wider">
              {caseStudy.subheading}
            </p>
          </SectionReveal>

          {/* About Client Section */}
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 lg:gap-16 items-stretch">
              {/* Left Profile Card */}
              <div className="glow-card bg-light p-8 flex flex-col items-center justify-between text-center min-h-[320px]">
                <div className="w-full flex flex-col items-center h-full justify-center">
                  {/* Logo Container */}
                  <div className="relative w-64 h-32 mb-8 flex items-center justify-center">
                    <Image
                      src={caseStudy.client.logo}
                      alt={`${caseStudy.client.name} logo`}
                      fill
                      className="object-contain"
                      sizes="256px"
                      priority
                    />
                  </div>
                  
                  {/* Metadata fields */}
                  <div className="w-full flex flex-col gap-4 text-left border-t border-white/10 pt-6 mt-auto">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-white/60 font-medium">Client:</span>
                      <span className="text-white font-bold">{caseStudy.client.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-white/60 font-medium">Country:</span>
                      <span className="text-white font-bold">{caseStudy.client.country}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-white/60 font-medium">Industry:</span>
                      <span className="text-white font-bold text-right">{caseStudy.client.industry}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Description & Tags */}
              <div className="flex flex-col justify-center text-left">
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-blue-bright mb-4">
                  About Client
                </h3>
                <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-text-secondary mb-8 font-medium">
                  {caseStudy.client.description}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-3">
                  {caseStudy.client.industryExp && (
                    <span className="border border-blue-bright/30 rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 bg-[#080832]/60 hover:border-blue-bright/80 transition-all duration-300">
                      {caseStudy.client.industryExp}
                    </span>
                  )}
                  {caseStudy.client.globalDelivery && (
                    <span className="border border-blue-bright/30 rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 bg-[#080832]/60 hover:border-blue-bright/80 transition-all duration-300">
                      {caseStudy.client.globalDelivery}
                    </span>
                  )}
                  {caseStudy.client.enterpriseCapability && (
                    <span className="border border-blue-bright/30 rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 bg-[#080832]/60 hover:border-blue-bright/80 transition-all duration-300">
                      {caseStudy.client.enterpriseCapability}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* THE PROBLEM Section */}
          <SectionReveal className="w-full flex flex-col text-left">
            <h3 className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-blue-bright mb-6">
              THE PROBLEM
            </h3>
            <div className="glow-card bg-light p-6 sm:p-8 flex flex-col gap-6">
              {caseStudy.problem.bullets.map((bullet, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="text-red-bright text-base font-bold shrink-0 mt-0.5">•</span>
                  <p className="font-sans text-xs sm:text-[15px] font-semibold leading-relaxed text-white/90">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* SOLUTIONS Section */}
          <SectionReveal className="w-full flex flex-col text-left">
            <h3 className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-blue-bright mb-6">
              SOLUTIONS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.solution.map((sol, idx) => {
                const numStr = String(idx + 1).padStart(2, '0');
                return (
                  <div key={idx} className="flex gap-4 items-start bg-[#080832]/40 border border-white/5 p-4 rounded-xl">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-blue-bright font-sans text-xs font-bold text-red-bright bg-blue-bright/10 shrink-0">
                      {numStr}
                    </div>
                    <p className="font-sans text-xs sm:text-sm font-semibold leading-relaxed text-white/90 uppercase pt-1.5">
                      {sol}
                    </p>
                  </div>
                );
              })}
            </div>
          </SectionReveal>

          {/* PROJECT ROADMAP Section */}
          <SectionReveal className="w-full flex flex-col text-left">
            <h3 className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-blue-bright mb-8">
              PROJECT ROADMAP
            </h3>

            {/* Desktop Horizontal Timeline */}
            <div className="hidden lg:flex flex-row items-center justify-center gap-4 flex-wrap bg-light border border-white/5 p-8 rounded-2xl w-full">
              {caseStudy.roadmap.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-blue-bright/20 bg-[#080832]/60 max-w-[200px] text-center min-h-[110px] flex-1">
                    <p className="font-sans text-[13px] font-extrabold uppercase leading-normal text-white">
                      {step}
                    </p>
                  </div>
                  {idx < caseStudy.roadmap.length - 1 && (
                    <span className="text-red-bright text-2xl font-bold shrink-0">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="flex lg:hidden flex-col items-center gap-4 bg-light border border-white/5 p-6 rounded-2xl w-full">
              {caseStudy.roadmap.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-blue-bright/20 bg-[#080832]/60 w-full text-center min-h-[80px]">
                    <p className="font-sans text-xs font-extrabold uppercase leading-normal text-white">
                      {step}
                    </p>
                  </div>
                  {idx < caseStudy.roadmap.length - 1 && (
                    <span className="text-red-bright text-xl font-bold">↓</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </SectionReveal>

          {/* BUSINESS OUTCOMES Section */}
          <SectionReveal className="w-full flex flex-col text-left">
            <h3 className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-blue-bright mb-6">
              BUSINESS OUTCOMES
            </h3>

            <div className={`grid grid-cols-1 gap-6 ${caseStudy.outcome.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
              {caseStudy.outcome.map((out, idx) => (
                <div key={idx} className="glow-card bg-light p-6 sm:p-8 flex flex-col gap-3 justify-center min-h-[160px]">
                  <h4 className="font-sans text-sm sm:text-base font-extrabold text-blue-bright uppercase tracking-wide">
                    {out.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-[13px] font-medium leading-relaxed text-white/90">
                    {out.bullet}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>

        </div>

        {/* Case Studies carousel at the bottom */}
        <CaseStudies />

        {/* Contact Us Section */}
        <div className="relative z-10">
          <Contact />
        </div>
      </main>

      <Footer />
      <FloatingCalendar />
    </>
  );
}
