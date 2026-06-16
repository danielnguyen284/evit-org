import React from 'react';
import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: "B2B IT Services & Sales Systems | EVIT Organization",
  description: "Scale your technology company and expand into global markets. Learn about our Global Expansion Services, G.O.D. Sales System, and specialized tech marketing systems.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesContent />;
}
