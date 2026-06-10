'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useBooking } from './BookingModal';

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-6 pb-16 pt-[104px] sm:pt-[112px] lg:pt-[120px] [@media(max-height:760px)]:pb-10 [@media(max-height:760px)]:pt-[96px]"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(3, 3, 45, 0.5) 0%, rgba(3, 3, 45, 0.9) 100%), url('/assets/hero-bg.jpg')`,
      }}
    >
      {/* Bottom overlay blend to blend smoothly with About section background */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#03032D] to-transparent pointer-events-none z-1" />

      <div className="relative z-10 flex w-full max-w-[950px] flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-sans text-3xl font-extrabold uppercase leading-[1.25] tracking-tight text-white sm:text-[40px] md:text-[52px] [@media(max-height:760px)]:mb-4 [@media(max-height:760px)]:md:text-[46px]"
        >
          Get More Clients
          <span className="block text-red-bright mt-1">With A Proven Sales System</span>
          <span className="block text-red-bright mt-1">For IT Service Providers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-[720px] font-sans text-sm leading-relaxed text-text-secondary opacity-90 sm:text-base [@media(max-height:760px)]:mb-8"
        >
          EVIT helps IT service providers scale revenue and expand globally. We install a proven IT sales & lead generation system—so founders and small sales teams build a predictable pipeline and get more clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <button onClick={openBooking} className="btn-primary">
            Book Free Consultation
            <span className="arrow">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
