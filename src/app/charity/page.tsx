import React from 'react';
import type { Metadata } from 'next';
import CharityContent from './CharityContent';

export const metadata: Metadata = {
  title: "One Developer, One Child | Purpose-Driven Tech | EVIT Organization",
  description: "Making an impact on orphans' lives. We donate at least 10% of project profits to support families at SOS Children's Villages Vietnam with complete transparency.",
  openGraph: {
    title: "One Developer, One Child | Purpose-Driven Tech | EVIT Organization",
    description: "Making an impact on orphans' lives. We donate at least 10% of project profits to support families at SOS Children's Villages Vietnam with complete transparency.",
    url: "https://evitconsulting.com/charity",
  }
};

export default function CharityPage() {
  return <CharityContent />;
}
