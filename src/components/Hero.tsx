'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center pb-[40px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(3, 3, 45, 0.5) 0%, rgba(3, 3, 45, 0.9) 100%), url('/assets/hero-bg.jpg')`,
      }}
    >
      {/* Bottom overlay blend to blend smoothly with About section background */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#03032D] to-transparent pointer-events-none z-1" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[950px] w-full mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-3xl sm:text-[40px] md:text-[52px] font-extrabold leading-[1.25] text-white tracking-tight uppercase mb-6"
        >
          Get More Clients
          <span className="block text-red-bright mt-1">With A Proven Sales System</span>
          <span className="block text-red-bright mt-1">For IT Service Providers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed max-w-[720px] mb-10 opacity-90"
        >
          EVIT helps IT service providers scale revenue and expand globally. We install a proven IT sales & lead generation system—so founders and small sales teams build a predictable pipeline and get more clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <button className="btn-primary">
            Book Free Consultation
            <span className="arrow">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
