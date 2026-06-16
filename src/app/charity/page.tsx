import React from 'react';
import type { Metadata } from 'next';
import CharityContent from './CharityContent';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: "One Developer, One Child | Purpose-Driven Tech | EVIT Organization",
  description: "Making an impact on orphans' lives. We donate at least 10% of project profits to support families at SOS Children's Villages Vietnam with complete transparency.",
  path: "/charity",
});

export default function CharityPage() {
  return <CharityContent />;
}
