'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <main className="bg-[#03032D] min-h-screen text-white flex flex-col justify-between pt-[88px] relative overflow-hidden">
        {/* Reusable Contact Form Section */}
        <div className="flex-1 flex items-center justify-center w-full py-4 sm:py-6">
          <Contact />
        </div>

        <Footer />
      </main>

      <FloatingCalendar />
    </>
  );
}
