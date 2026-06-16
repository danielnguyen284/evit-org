'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
import CaseStudies from "@/components/CaseStudies";
import { servicesData } from "@/data/servicesData";

export default function ServicesContent() {
  return (
    <>
      <Header />
      
      <main className="bg-[#03032D] min-h-screen text-white">
        {/* Services Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center pb-[40px] overflow-hidden">
          {/* Background image container for Next.js Image Optimization */}
          <div className="absolute inset-0 -z-10 select-none pointer-events-none">
            <Image
              src="/assets/services-bg.webp"
              alt="Services Banner"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(3,3,45,0.5)] to-[rgba(3,3,45,0.9)]" />
          </div>

          {/* Bottom overlay blend to blend smoothly with content */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#03032D] to-transparent pointer-events-none z-[1]" />


          <div className="relative z-10 flex flex-col items-center text-center max-w-[950px] w-full mx-auto px-6 pt-[80px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-3xl sm:text-[40px] md:text-[52px] font-extrabold leading-[1.25] text-white tracking-tight uppercase"
            >
              Go Global Expand
              <span className="block text-white mt-1 sm:mt-2">Your Reach and Grow Worldwide</span>
            </motion.h1>
          </div>
        </section>

        {/* Detailed Services list */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-24 sm:pt-32 flex flex-col gap-24 sm:gap-32">
          {servicesData.map((service, index) => (
            <motion.section
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="scroll-mt-[100px] flex flex-col"
            >
              {/* Card Container (Homepage Card styling but static and no button inside) */}
              <div className="bg-light mx-auto flex w-full flex-col gap-5 p-5 shadow-xl md:flex-row md:items-center md:gap-6 lg:p-7">
                {/* Image Frame Column */}
                <div className="relative h-[230px] sm:h-[280px] md:h-[250px] md:w-[400px] lg:h-[280px] lg:w-[450px] shrink-0 overflow-hidden rounded-[10px] border border-blue-bright/45 shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* Content Column */}
                <div className="relative z-[1] flex min-h-[230px] min-w-0 flex-1 flex-col justify-center py-1 text-left">
                  <div className="flex flex-col items-start w-full">
                    <div className="relative mb-4 h-11 w-11">
                      <Image
                        src={service.icon}
                        alt={service.iconAlt}
                        fill
                        sizes="44px"
                        className="object-contain"
                      />
                    </div>

                    <h3 className="mb-3 font-sans text-xl font-extrabold uppercase leading-tight tracking-tight text-white lg:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mb-4 font-sans text-xs font-semibold leading-relaxed text-blue-bright lg:text-sm">
                      {service.subtitle}
                    </p>

                    <p className="max-w-[640px] font-sans text-xs font-semibold leading-relaxed text-white/90 lg:text-[13px]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Detail section below the card */}
              <div className="mt-14 text-center w-full px-4">
                <h4 className="font-sans text-xl sm:text-[24px] font-extrabold text-white tracking-wide uppercase mb-3">
                  {service.detailHeading}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-blue-bright font-bold tracking-wider uppercase mb-8">
                  {service.detailSubtitle}
                </p>

                <div className="flex flex-col gap-5 text-left w-full mb-10">
                  {service.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className="text-text-secondary text-sm font-semibold shrink-0 mt-0.5">•</span>
                      <p className="font-sans text-xs sm:text-[13px] font-semibold leading-relaxed text-text-secondary">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Centered Red Learn More Button */}
                <div className="flex justify-center">
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn-primary"
                  >
                    Learn More
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Case Studies Section */}
        <CaseStudies />
      </main>

      <Footer />
      <FloatingCalendar />
    </>
  );
}
