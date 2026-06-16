import React from 'react';
import type { Metadata } from 'next';
import CaseStudiesContent from './CaseStudiesContent';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: "B2B IT Case Studies & Success Stories | EVIT Organization",
  description: "Read real client success stories. See how EVIT helped IT service companies and software development firms build outbound sales systems and enter international markets.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
