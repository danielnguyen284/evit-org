'use client';

import React, { useState } from 'react';
import { useBooking } from './BookingModal';



export default function Contact({ isMainHeading = false }: { isMainHeading?: boolean }) {
  const { openBooking } = useBooking();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'contact',
        event_label: 'contact_form_submit'
      });
    }

    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
      openBooking();
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative w-full py-6 sm:py-8 md:py-10 overflow-hidden z-10">
      <div className="max-w-[1200px] w-full mx-auto px-6 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left Column - Contact Info */}
        <div className="flex-1 text-left">
          <span className="font-sans text-xs sm:text-sm font-bold uppercase text-blue-bright tracking-[0.22em] mb-2 block">
            Contact Us
          </span>
          {isMainHeading ? (
            <h1 className="font-sans text-2xl sm:text-3xl md:text-[34px] font-extrabold text-white leading-[1.2] tracking-wide mb-4 uppercase">
              LOOKING TO EXPAND YOUR MARKET?
            </h1>
          ) : (
            <h2 className="font-sans text-2xl sm:text-3xl md:text-[34px] font-extrabold text-white leading-[1.2] tracking-wide mb-4 uppercase">
              LOOKING TO EXPAND YOUR MARKET?
            </h2>
          )}
          <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed text-white/85 mb-6 max-w-[580px]">
            Get in touch with our consultant to discover how EVIT can support your upcoming revenue growth.
          </p>

        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full lg:max-w-[460px] shrink-0">
          <div className="bg-light p-6 md:p-8 w-full relative">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mb-4 animate-pulse">
                  <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-sans text-lg font-extrabold text-white mb-2 uppercase">Message Sent!</h3>
                <p className="font-sans text-xs text-white/80">Thank you for getting in touch. We will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-sans text-[11px] font-bold text-white/80 uppercase tracking-wider">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white border border-white/10 text-[#03032D] text-xs sm:text-sm font-semibold rounded-[8px] px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-bright/50 focus:border-blue-bright outline-none transition-all shadow-inner"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-sans text-[11px] font-bold text-white/80 uppercase tracking-wider">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white border border-white/10 text-[#03032D] text-xs sm:text-sm font-semibold rounded-[8px] px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-bright/50 focus:border-blue-bright outline-none transition-all shadow-inner"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="font-sans text-[11px] font-bold text-white/80 uppercase tracking-wider">Your Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full bg-white border border-white/10 text-[#03032D] text-xs sm:text-sm font-semibold rounded-[8px] px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-bright/50 focus:border-blue-bright outline-none transition-all shadow-inner"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-sans text-[11px] font-bold text-white/80 uppercase tracking-wider">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    rows={3}
                    className="w-full bg-white border border-white/10 text-[#03032D] text-xs sm:text-sm font-semibold rounded-[8px] px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-bright/50 focus:border-blue-bright outline-none transition-all shadow-inner resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full h-12 mt-1 justify-center text-xs"
                >
                  Book Free Consultation
                  <span className="arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
