'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingContextType {
  isOpen: boolean;
  bookingSession: number;
  openBooking: () => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingSession, setBookingSession] = useState(0);

  const openBooking = () => {
    setBookingSession((session) => session + 1);
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
    <BookingContext.Provider value={{ isOpen, bookingSession, openBooking, closeBooking }}>
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
  const { isOpen, bookingSession, closeBooking } = useBooking();
  const [loadedSession, setLoadedSession] = useState(0);
  const isLoading = isOpen && loadedSession !== bookingSession;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="!fixed inset-0 !z-[99999] flex items-center justify-center p-1 sm:p-2">
          
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
            className="relative z-10 h-[98svh] w-full max-w-[520px] overflow-hidden rounded-2xl border border-blue-bright/25 bg-[#070732] shadow-2xl lg:max-h-[980px] lg:max-w-[1120px]"
          >
            {/* Close Button */}
            <button
              onClick={closeBooking}
              className="absolute right-3 top-3 z-30 rounded-full border border-white/15 bg-[#03032D]/85 p-2 text-white/80 shadow-lg backdrop-blur transition-all hover:bg-white/15 hover:text-white sm:right-4 sm:top-4"
              aria-label="Close scheduler"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scheduler Body Container */}
            <div className="relative h-full w-full overflow-hidden bg-[#070732]">
              
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
                key={bookingSession}
                src="https://meetings-na2.hubspot.com/lan-nguyen"
                className="block h-full w-full border-0"
                scrolling="no"
                onLoad={() => setLoadedSession(bookingSession)}
                title="HubSpot Meetings Scheduler"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
