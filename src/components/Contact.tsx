'use client';

import React, { useState } from 'react';
import { useBooking } from './BookingModal';

function LocationIcon() {
  return (
    <svg className="w-5 h-5 text-blue-bright shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5 text-blue-bright shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-blue-bright shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Contact() {
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
          <h2 className="font-sans text-2xl sm:text-3xl md:text-[34px] font-extrabold text-white leading-[1.2] tracking-wide mb-4 uppercase">
            LOOKING TO EXPAND YOUR MARKET?
          </h2>
          <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed text-white/85 mb-6 max-w-[580px]">
            Get in touch with our consultant to discover how EVIT can support your upcoming revenue growth.
          </p>

          <ul className="flex flex-col gap-4 mb-6 font-sans">
            <li className="flex items-center gap-3 text-white/95 text-xs sm:text-sm font-semibold">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-bright/10 border border-blue-bright/20 shrink-0">
                <LocationIcon />
              </div>
              <span>145 Trần Sâm, Sơn Trà, Đà Nẵng, Vietnam</span>
            </li>
            <li className="flex items-center gap-3 text-white/95 text-xs sm:text-sm font-semibold">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-bright/10 border border-blue-bright/20 shrink-0">
                <MailIcon />
              </div>
              <a href="mailto:info@evitconsulting.com" className="hover:text-blue-bright transition-colors">
                info@evitconsulting.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/95 text-xs sm:text-sm font-semibold">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-bright/10 border border-blue-bright/20 shrink-0">
                <PhoneIcon />
              </div>
              <a href="tel:+84705737170" className="hover:text-blue-bright transition-colors">
                +84705737170
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-3.5 mt-6">
            <a 
              href="https://www.facebook.com/goglobalasia1/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-red-bright text-red-bright hover:bg-red-bright hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.12 8.08h2.25V4.21c-.39-.05-1.72-.17-3.27-.17-3.23 0-5.44 1.97-5.44 5.58v3.14H5v4.33h3.66V24h4.49v-6.91h3.51l.56-4.33h-4.07V10.05c0-1.25.34-1.97 1.97-1.97Z" />
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@goglobalasia" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-red-bright text-red-bright hover:bg-red-bright hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.5v-7L15.8 12l-6.2 3.5Z" />
              </svg>
            </a>
            <a 
              href="https://creators.spotify.com/pod/profile/evit-organization/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Spotify Podcast"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-red-bright text-red-bright hover:bg-red-bright hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1.5a9 9 0 0 0-5.67 16 1.1 1.1 0 1 0 1.39-1.7A6.8 6.8 0 1 1 18.8 10.5a6.75 6.75 0 0 1-2.52 5.28 1.1 1.1 0 0 0 1.39 1.7A9 9 0 0 0 12 1.5Z" />
                <path d="M12 5.8a5 5 0 0 0-3.13 8.9 1 1 0 1 0 1.26-1.56 3 3 0 1 1 3.74 0 1 1 0 1 0 1.26 1.56A5 5 0 0 0 12 5.8Z" />
                <path d="M12 10a2 2 0 0 0-1.12 3.66l-.9 6.36A1.28 1.28 0 0 0 11.25 21.5h1.5a1.28 1.28 0 0 0 1.27-1.48l-.9-6.36A2 2 0 0 0 12 10Z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/evit-org/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-red-bright text-red-bright hover:bg-red-bright hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.38-1.85c3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.2 0 22.23 0Z" />
              </svg>
            </a>
          </div>
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
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-white border border-white/10 text-[#03032D] text-xs sm:text-sm font-semibold rounded-[8px] px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-bright/50 focus:border-blue-bright outline-none transition-all shadow-inner"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-white border border-white/10 text-[#03032D] text-xs sm:text-sm font-semibold rounded-[8px] px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-bright/50 focus:border-blue-bright outline-none transition-all shadow-inner"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                    className="w-full bg-white border border-white/10 text-[#03032D] text-xs sm:text-sm font-semibold rounded-[8px] px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-bright/50 focus:border-blue-bright outline-none transition-all shadow-inner"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your Message"
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
