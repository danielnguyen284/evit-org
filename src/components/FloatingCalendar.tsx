'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCalendar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ y: -4, scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="!fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-bright to-[#004b7a] border border-white/10 cursor-pointer shadow-[0_8px_24px_rgba(1,132,209,0.3)] hover:shadow-[0_12px_30px_rgba(1,132,209,0.6)] hover:from-[#019eff] hover:to-blue-bright flex items-center justify-center !z-50 text-white transition-shadow duration-300"
          onClick={handleClick}
          aria-label="Book a free consultation calendar"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current hover:rotate-[-10deg] transition-transform duration-300">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v2h-5v-2zm0 4h5v2h-5v-2zm-4-4h3v2H8v-2zm0 4h3v2H8v-2z" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
