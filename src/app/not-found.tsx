'use client';

import React from 'react';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-[#03032D] min-h-screen flex flex-col justify-between pt-[88px] relative overflow-hidden">
        {/* Central 404 Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative z-10">
          <div className="max-w-[700px] w-full flex flex-col items-center justify-center">
            {/* Massive 404 Text */}
            <h1 className="font-sans text-[120px] sm:text-[180px] md:text-[240px] font-extrabold leading-none tracking-tighter select-none bg-gradient-to-b from-[#00E5FF] to-[#0184D1] bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(0,112,255,0.2)]">
              404
            </h1>
            
            {/* OOOPS! */}
            <p className="font-sans text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-[0.25em] uppercase mt-2">
              OOOPS!
            </p>

            {/* PAGE NOT FOUND */}
            <h2 className="font-sans text-2xl sm:text-3xl md:text-[36px] font-extrabold text-white tracking-wider uppercase mt-4">
              PAGE NOT FOUND
            </h2>

            {/* HOMEPAGE BUTTON */}
            <Link href="/" className="btn-primary mt-10">
              HOMEPAGE
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>

        <Footer />
      </main>
      <FloatingCalendar />
    </>
  );
}
