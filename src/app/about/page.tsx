import React from 'react';
import type { Metadata } from 'next';
import AboutContent from './AboutContent';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: "About Us | B2B IT Sales Consulting | EVIT Organization",
  description: "Learn about EVIT Organization. For over 7 years, we have helped B2B IT service providers and technical founders build predictable sales engines and successfully enter global markets.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
