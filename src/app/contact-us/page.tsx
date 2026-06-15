import React from 'react';
import type { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | B2B IT Sales & Growth | EVIT Organization",
  description: "Get in touch with EVIT Organization. Let's discuss how to scale your technology company, implement our sales system, and expand your outreach globally.",
  openGraph: {
    title: "Contact Us | B2B IT Sales & Growth | EVIT Organization",
    description: "Get in touch with EVIT Organization. Let's discuss how to scale your technology company, implement our sales system, and expand your outreach globally.",
    url: "https://evitconsulting.com/contact-us",
  }
};

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
