import React from 'react';
import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';
import { createPageMetadata, jsonLdScript, SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: "B2B IT Services & Sales Systems | EVIT Organization",
  description: "Scale your IT company globally. Discover our Global Expansion Services, G.O.D. Sales System, and specialized B2B tech marketing solutions.",
  path: "/services",
});

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Global Expansion Services & IT Sales Systems",
    "provider": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL
    },
    "description": "B2B IT Sales Consulting and Global Expansion Services for tech companies.",
    "areaServed": ["Europe", "US", "Canada", "APAC"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Sales Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Global Expansion Strategy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sales Team Enablement"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(serviceSchema)}
      />
      <ServicesContent />
    </>
  );
}
