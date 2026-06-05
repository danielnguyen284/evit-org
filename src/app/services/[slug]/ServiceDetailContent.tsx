'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
      setFormData({ name: '', email: '', company: '', message: '' });
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

            {/* Consultation Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-light max-w-[720px] mx-auto rounded-2xl p-6 sm:p-10 shadow-2xl border border-blue-bright/35 relative overflow-hidden"
            >
              <div className="text-center mb-8">
                <h3 className="font-sans text-lg sm:text-[22px] font-extrabold text-white uppercase tracking-wider mb-2">
                  Request a Free Consultation
                </h3>
                <p className="font-sans text-xs sm:text-sm text-blue-bright font-medium">
                  Let us help you implement the right systems to scale your IT services.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="consultation-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="font-sans text-[11px] font-bold text-white uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-background/80 border border-blue-bright/25 rounded-md px-4 py-3 font-sans text-xs text-white placeholder-white/40 focus:outline-none focus:border-blue-bright transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="font-sans text-[11px] font-bold text-white uppercase tracking-wider">
                          Business Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-background/80 border border-blue-bright/25 rounded-md px-4 py-3 font-sans text-xs text-white placeholder-white/40 focus:outline-none focus:border-blue-bright transition-colors"
                          placeholder="name@company.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="font-sans text-[11px] font-bold text-white uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="bg-background/80 border border-blue-bright/25 rounded-md px-4 py-3 font-sans text-xs text-white placeholder-white/40 focus:outline-none focus:border-blue-bright transition-colors"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-sans text-[11px] font-bold text-white uppercase tracking-wider">
                        How can we help you expand / grow?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="bg-background/80 border border-blue-bright/25 rounded-md px-4 py-3 font-sans text-xs text-white placeholder-white/40 focus:outline-none focus:border-blue-bright transition-colors resize-none"
                        placeholder="Tell us about your business, target market, or challenges..."
                      />
                    </div>

                    <div className="mt-3 flex justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full sm:w-auto px-10 min-w-[200px]"
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
                            Book Consultation Call
                            <span className="arrow">→</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    className="flex flex-col items-center justify-center text-center py-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-16 h-16 bg-blue-bright/15 border border-blue-bright/40 rounded-full flex items-center justify-center text-blue-bright mb-6">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h4 className="font-sans text-lg font-bold text-white uppercase mb-2">
                      Inquiry Submitted Successfully!
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed max-w-[480px] mb-8">
                      Thank you for reaching out! Our team will review your inquiry and get back to you within 24 hours to schedule your free consultation.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex h-9 items-center justify-center rounded-full border border-blue-bright/30 px-6 font-sans text-xs font-bold uppercase tracking-wider text-blue-bright hover:bg-blue-bright/10 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCalendar />
    </>
  );
}
