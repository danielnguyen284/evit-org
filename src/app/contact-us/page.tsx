import React from 'react';
import type { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
import Contact from "@/components/Contact";
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us | B2B IT Sales & Growth | EVIT Organization",
  description: "Get in touch with EVIT Organization. Let's discuss how to scale your technology company, implement our sales system, and expand your outreach globally.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <main className="bg-[#03032D] min-h-screen text-white flex flex-col justify-between pt-[88px] relative overflow-hidden">
        <div className="flex-1 flex items-center justify-center w-full py-4 sm:py-6">
          <Contact isMainHeading={true} />
        </div>

        <Footer />
      </main>

      <FloatingCalendar />
    </>
  );
}
