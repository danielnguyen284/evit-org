import React from 'react';
import type { Metadata } from 'next';
import CaseStudiesContent from './CaseStudiesContent';

export const metadata: Metadata = {
  title: "B2B IT Case Studies & Success Stories | EVIT Organization",
  description: "Read real client success stories. See how EVIT helped IT service companies and software development firms build outbound sales systems and enter international markets.",
  openGraph: {
    title: "B2B IT Case Studies & Success Stories | EVIT Organization",
    description: "Read real client success stories. See how EVIT helped IT service companies and software development firms build outbound sales systems and enter international markets.",
    url: "https://evitconsulting.com/case-studies",
  }
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
