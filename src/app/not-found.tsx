'use client';

import React from 'react';
import Link from 'next/link';
import Header from "@/components/Header";
import FloatingCalendar from "@/components/FloatingCalendar";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#03032D] px-5 pb-12 pt-[88px] text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_54%,rgba(0,132,209,0.1)_0%,rgba(3,3,45,0)_38%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58vh] bg-[url('/assets/background-wave-original.png')] bg-[length:100%_auto] bg-bottom bg-no-repeat opacity-60 mix-blend-screen brightness-0 invert-[0.38] sepia saturate-[2.8] hue-rotate-[190deg]" />

        <section className="relative z-10 flex min-h-[calc(100vh-140px)] w-full max-w-[920px] items-center justify-center">
          <div className="relative mx-auto flex w-full flex-col items-center">
            <h1
              className="select-none bg-clip-text font-sans text-[136px] font-extrabold leading-[0.82] tracking-[0] text-transparent drop-shadow-[0_20px_36px_rgba(0,112,255,0.18)] sm:text-[220px] md:text-[300px] lg:text-[360px]"
              style={{ backgroundImage: 'linear-gradient(180deg, #18E7FF 0%, #059BD8 48%, #002E72 100%)' }}
            >
              404
            </h1>

            <div className="relative z-10 -mt-4 flex flex-col items-center sm:-mt-10 md:-mt-16 lg:-mt-20">
              <p className="font-sans text-2xl font-extrabold uppercase leading-none tracking-[0.18em] text-white sm:text-[32px] md:text-[38px]">
                OOOPS!
              </p>

              <h2 className="mt-3 font-sans text-2xl font-extrabold uppercase leading-tight tracking-[0.04em] text-white sm:mt-4 sm:text-[36px] md:text-[46px]">
                PAGE NOT FOUND
              </h2>

              <Link
                href="/"
                className="group mt-8 inline-flex h-[54px] min-w-[184px] items-center justify-center rounded-full bg-red-bright px-9 font-sans text-sm font-extrabold uppercase tracking-[0.02em] text-white shadow-[0_12px_26px_rgba(227,0,0,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a1a] hover:shadow-[0_16px_34px_rgba(227,0,0,0.48)] sm:mt-10"
              >
                HOMEPAGE
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FloatingCalendar />
    </>
  );
}
