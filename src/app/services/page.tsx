'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
import CaseStudies from "@/components/CaseStudies";

interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  imageAlt: string;
  icon: string;
  iconAlt: string;
  detailHeading: string;
  detailSubtitle: string;
  bullets: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'global-expansion',
    slug: 'global-expansion',
    title: 'GLOBAL EXPANSION SERVICE',
    subtitle: 'Market entry planning + execution support: target markets, channels, lead generation, USP, and risk control.',
    desc: "Global expansion is more than just entering a new market—it's about developing a sustainable and scalable growth strategy that includes the right sales channels, compliance with international business laws, and effectively managing global teams. At EVIT Organization, our Custom Design Consulting Services are designed to guide businesses through every critical step of this process, ensuring a smooth, efficient, and successful market entry.",
    image: '/assets/daa7591f467f07ac34cf81f8dd257db99985d118.jpg',
    imageAlt: 'Business network and growth dashboard',
    icon: '/assets/service-icon (2).png',
    iconAlt: 'Global expansion icon',
    detailHeading: 'UNLOCK YOUR GLOBAL POTENTIAL',
    detailSubtitle: 'Achieve Sustainable Cash Flow and Growth',
    bullets: [
      'Expanding into international markets can be challenging and risky. Many companies struggle with identifying the right markets, setting up effective sales channels, and finding a suitable Unique Selling Point (USP) that helps them stand out in the market. Additionally, understanding business ethics in foreign countries is often challenging. The lack of a strategic roadmap can lead to costly mistakes, slow market entry, failure to gain traction, wasted time, and financial losses.',
      'Collaborating with EVIT is like having a personal guide that leads you from the initial stages to successful business development in the international arena. With our extensive experience, we will show you how to navigate the complexities of global markets. We will inform you in advance about potential challenges and provide the most effective solutions to expand business and sell your services on the global market.'
    ]
  },
  {
    id: 'god-sales-system',
    slug: 'god-sales-system',
    title: 'G.O.D. SALES SYSTEM',
    subtitle: 'Step-by-step sales system for IT services: lead generation, qualification, meetings, negotiation, proposals, closing, upsell, cross-sell.',
    desc: 'Our online course covers everything you need to win more deals. From lead qualification and meeting strategy to negotiation, proposal building, and practical worksheets. Step-by-step tested formula that just needs to be implemented to your selling activities.',
    image: '/assets/74050129a4c3f273bea5483ea83833715a20991b.png',
    imageAlt: 'Sales analytics dashboard with global data',
    icon: '/assets/service-icon (1).png',
    iconAlt: 'Sales system icon',
    detailHeading: 'DOMINATE YOUR SALES PIPELINE',
    detailSubtitle: 'Establish a Repeatable and High-Converting Sales Engine',
    bullets: [
      'Many IT service companies rely on word-of-mouth or sporadic referrals, which makes revenue growth unpredictable. Closing deals becomes difficult when sales teams lack a structured, step-by-step framework to handle qualification, demo meetings, handling objections, and proposal creation. Without a repeatable sales process, valuable leads slip through the cracks, closing cycles drag on, and scaling becomes impossible.',
      'The G.O.D. Sales System provides a battle-tested blueprint designed specifically for B2B IT service providers. We guide your team through building a structured pipeline, from qualifying leads to running high-impact meetings and executing professional closing techniques. This system equips you with practical templates, scripts, and worksheets, turning sales from a guessing game into a predictable science.'
    ]
  },
  {
    id: 'marketing-services',
    slug: 'marketing-services',
    title: 'MARKETING SERVICES',
    subtitle: 'Marketing funnel, Website + conversion + automation workflows to improve lead flow and conversion.',
    desc: 'Many businesses struggle to scale their marketing due to a lack of a clear strategy, outdated tactics, ineffective online presence, unaligned activities, poor analytics and execution. Even if they have existing marketing efforts, they often need to optimize these processes to drive conversions. As a result, businesses waste their budget on ineffective strategies, fail to fully utilize their marketing potential, and lose money and potential clients.',
    image: '/assets/540048d82298a1c0a80ba59038a0eef747a8965c.jpg',
    imageAlt: 'Marketing funnel and connected business network',
    icon: '/assets/service-icon.png',
    iconAlt: 'Marketing services icon',
    detailHeading: 'MAXIMIZE YOUR MARKETING ROI',
    detailSubtitle: 'Build High-Performing Funnels and Automated Client Acquisition',
    bullets: [
      "A beautiful website is useless if it doesn't convert visitors into leads. Many tech companies waste significant budget on ads or content marketing without having a defined funnel or automated lead nurturing. Incomplete tracking, unaligned messaging, and manual follow-ups lead to lost opportunities, high acquisition costs, and poor sales alignment.",
      'Our Marketing Services build high-converting landing pages, optimize your digital channels, and implement marketing automation workflows. We ensure every touchpoint is designed to guide prospects down the funnel, turning cold traffic into hot sales-ready leads. By aligning marketing with your sales goals, we help you save budget, improve efficiency, and accelerate growth.'
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      
      <main className="bg-[#03032D] min-h-screen text-white">
        {/* Services Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center pb-[40px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(3, 3, 45, 0.5) 0%, rgba(3, 3, 45, 0.9) 100%), url('/assets/services-bg.jpg')`,
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
