'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingContextType {
  isOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBooking = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Clean up overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <BookingContext.Provider value={{ isOpen, openBooking, closeBooking }}>
      {children}
      <BookingModal />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}

function BookingModal() {
  const { isOpen, closeBooking } = useBooking();
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  // Reset loading state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const checkMediaQuery = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkMediaQuery();
    window.addEventListener('resize', checkMediaQuery);
    return () => window.removeEventListener('resize', checkMediaQuery);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="!fixed inset-0 !z-[99999] flex items-center justify-center p-4">
          
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="absolute inset-0 bg-[#03032D]/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-[480px] lg:max-w-[1000px] h-[88vh] lg:h-[806px] bg-[#070732] border border-blue-bright/25 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#03032D]/40">
              <h3 className="font-sans text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
                Book Free Consultation
              </h3>
              
              {/* Close Button */}
              <button
                onClick={closeBooking}
                className="p-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Close scheduler"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scheduler Body Container */}
            <div className="flex-1 relative w-full h-full bg-[#070732] overflow-hidden">
              
              {/* Loading Indicator */}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070732] z-20">
                  <div className="w-10 h-10 border-4 border-blue-bright/20 border-t-blue-bright rounded-full animate-spin mb-4" />
                  <span className="font-sans text-xs text-white/60 font-semibold tracking-wider uppercase">
                    Loading Meeting Scheduler...
                  </span>
                </div>
              )}

              {/* HubSpot Iframe */}
              <iframe
                src="https://meetings-na2.hubspot.com/adam-skoneczny?embed=true&uuid=172b86ac-3248-45c3-ac21-83cbb38a24bd"
                style={
                  isDesktop
                    ? {
                        width: '870px',
                        height: '650px',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%) scale(1.15)',
                        transformOrigin: 'center center',
                        border: 'none',
                      }
                    : {
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }
                }
                scrolling="no"
                onLoad={() => setIsLoading(false)}
                title="HubSpot Meetings Scheduler"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
