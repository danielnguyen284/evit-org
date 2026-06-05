'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";

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
  heroBg?: string;
  heroTitle?: string;
  heroSubtitle?: string;
}

interface ServiceDetailContentProps {
  service: ServiceItem;
}

function GodSalesSystemOverview() {
  const bullets = [
    'Built for IT service providers who want predictable sales',
    'Focused on real execution (daily actions, conversions, meetings, clients)',
    "Includes: sales plan, sales system setup, sales process, KPI's tracking discipline, negotiation flows",
    'Designed to help you escape the Founder Trap and get more clients',
  ];

  return (
    <section className="relative w-full overflow-hidden py-4 sm:py-6">
      <div className="mb-12 text-center sm:mb-16">
        <h2 className="mb-4 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px]">
          G.O.D SALES SYSTEM FOR IT COMPANIES
        </h2>
        <p className="mx-auto max-w-[640px] font-sans text-xs font-bold uppercase leading-relaxed tracking-[0.26em] text-blue-bright sm:text-sm">
          Turn &quot;friends &amp; family&quot; based sales into a predictable pipeline,
          without the founder doing everything.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex w-full max-w-[520px] items-center justify-center"
        >
          <div className="pointer-events-none absolute bottom-[8%] left-[18%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(193,32,210,0.26)_0%,rgba(0,112,255,0.16)_36%,transparent_70%)] blur-xl" />
          <Image
            src="/assets/fc7a00f869220fc564cfbabb86ea19ba8d1031e7.png"
            alt="G.O.D Sales System trophy"
            width={640}
            height={640}
            sizes="(max-width: 1024px) 80vw, 520px"
            className="relative z-[1] h-auto w-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
          className="flex flex-col items-start text-left"
        >
          <p className="mb-9 max-w-[560px] font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
            If you&apos;re an IT services company and sales feel like chaos,
            random leads, inconsistent meetings, and revenue that depends on
            the founder&apos;s family and friends, this program installs a clear
            system you can run weekly, track with numbers, and scale with a
            team or solo.
          </p>

          <ul className="mb-10 flex max-w-[600px] list-disc flex-col gap-5 pl-5 text-white/90">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="font-sans text-xs font-medium leading-relaxed marker:text-blue-bright sm:text-sm"
              >
                {bullet}
              </li>
            ))}
          </ul>

          <a
            href="#consultation"
            className="inline-flex h-11 items-center justify-center rounded-full bg-red-bright px-8 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(227,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a1a] hover:shadow-[0_10px_24px_rgba(227,0,0,0.38)]"
          >
            BOOK FREE CONSULTATION -&gt;
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  return (
    <>
      <Header />

      <main className="bg-[#03032D] min-h-screen text-white overflow-x-hidden">
        {/* Dynamic Service Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center pb-[40px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(3, 3, 45, 0.5) 0%, rgba(3, 3, 45, 0.9) 100%), url('${service.heroBg || '/assets/services-bg.jpg'}')`,
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
              {service.heroTitle || service.title}
            </motion.h1>
            <p className="mt-4 font-sans text-xs sm:text-sm text-text-secondary leading-relaxed max-w-[680px]">
              {service.heroSubtitle || service.subtitle}
            </p>
          </div>
        </section>

        {/* Detailed Service Section Container */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-24 sm:pt-32 flex flex-col gap-16 sm:gap-20">
          
          {/* Card Block */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-light mx-auto flex w-full flex-col gap-5 p-5 shadow-xl md:flex-row md:items-center md:gap-6 lg:p-7"
          >
            {/* Image Frame Column */}
            <div className="relative h-[230px] sm:h-[280px] md:h-[250px] md:w-[400px] lg:h-[280px] lg:w-[450px] shrink-0 overflow-hidden rounded-[10px] border border-blue-bright/45 shadow-lg">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                priority
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
          </motion.div>

          {/* Detailed Content Bullets */}
          <div className="w-full px-4">
            {service.id === 'god-sales-system' ? (
              <GodSalesSystemOverview />
            ) : (
              <>
            <h2 className="font-sans text-xl sm:text-[24px] font-extrabold text-white tracking-wide uppercase text-center mb-3">
              {service.detailHeading}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-blue-bright font-bold tracking-wider uppercase text-center mb-10">
              {service.detailSubtitle}
            </p>

            <div className="flex flex-col gap-6 text-left w-full mb-20">
              {service.bullets.map((bullet, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
                  <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
              </>
            )}

            {/* Contact Us Section */}
            <motion.section
              id="consultation"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto grid w-full max-w-[980px] overflow-hidden border border-blue-bright/80 bg-[#03032D]/60 shadow-[0_18px_40px_rgba(0,0,0,0.28)] lg:grid-cols-[minmax(0,1fr)_360px]"
            >
              <div className="min-h-[300px] p-7 text-left sm:p-9 lg:min-h-[380px] lg:border-r lg:border-blue-bright/55">
                <span className="mb-5 block font-sans text-sm font-bold uppercase tracking-[0.22em] text-blue-bright">
                  Contact Us
                </span>
                <h3 className="mb-9 max-w-[600px] font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[30px]">
                  LOOKING TO EXPAND YOUR MARKET?
                </h3>
                <p className="max-w-[600px] font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
                  Get in touch with our consultant to discover how EVIT can
                  support your upcoming revenue growth.
                </p>
              </div>

              <div className="bg-light p-7 sm:p-9">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="flex w-full flex-col gap-5 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-[8px] border border-white/10 bg-white px-5 py-4 font-sans text-sm font-semibold text-[#03032D] shadow-inner outline-none transition-all placeholder:text-gray-500 focus:border-blue-bright focus:ring-2 focus:ring-blue-bright/40"
                      placeholder="Your Name"
                      aria-label="Your Name"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-[8px] border border-white/10 bg-white px-5 py-4 font-sans text-sm font-semibold text-[#03032D] shadow-inner outline-none transition-all placeholder:text-gray-500 focus:border-blue-bright focus:ring-2 focus:ring-blue-bright/40"
                      placeholder="Your Email"
                      aria-label="Your Email"
                    />

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-[8px] border border-white/10 bg-white px-5 py-4 font-sans text-sm font-semibold text-[#03032D] shadow-inner outline-none transition-all placeholder:text-gray-500 focus:border-blue-bright focus:ring-2 focus:ring-blue-bright/40"
                      placeholder="Your Phone"
                      aria-label="Your Phone"
                    />

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full resize-none rounded-[8px] border border-white/10 bg-white px-5 py-4 font-sans text-sm font-semibold text-[#03032D] shadow-inner outline-none transition-all placeholder:text-gray-500 focus:border-blue-bright focus:ring-2 focus:ring-blue-bright/40"
                      placeholder="Your Message"
                      aria-label="Your Message"
                    />

                    <div className="mt-1 flex justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-red-bright px-8 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(227,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a1a] hover:shadow-[0_10px_24px_rgba(227,0,0,0.38)] disabled:cursor-not-allowed disabled:opacity-70 [&_.arrow]:hidden"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          <>
                            BOOK FREE CONSULTATION
                            <span className="arrow">→</span>
                            <span className="ml-2">-&gt;</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    className="flex min-h-[320px] flex-col items-center justify-center text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-blue-bright/40 bg-blue-bright/15 text-blue-bright">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h4 className="mb-2 font-sans text-lg font-bold uppercase text-white">
                      Inquiry Submitted Successfully!
                    </h4>
                    <p className="mb-8 max-w-[280px] font-sans text-xs leading-relaxed text-text-secondary sm:text-sm">
                      Thank you for reaching out! Our team will review your inquiry and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex h-9 items-center justify-center rounded-full border border-blue-bright/30 px-6 font-sans text-xs font-bold uppercase tracking-wider text-blue-bright transition-colors hover:bg-blue-bright/10"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCalendar />
    </>
  );
}
