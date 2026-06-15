import React from 'react';
import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: "About Us | B2B IT Sales Consulting | EVIT Organization",
  description: "Learn about EVIT Organization. For over 7 years, we have helped B2B IT service providers and technical founders build predictable sales engines and successfully enter global markets.",
  openGraph: {
    title: "About Us | B2B IT Sales Consulting | EVIT Organization",
    description: "Learn about EVIT Organization. For over 7 years, we have helped B2B IT service providers and technical founders build predictable sales engines and successfully enter global markets.",
    url: "https://evitconsulting.com/about",
  }
};

export default function AboutPage() {
  return <AboutContent />;
}
