import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailContent from './ServiceDetailContent';

import { servicesData } from '@/data/servicesData';
import { absoluteUrl, createPageMetadata, jsonLdScript, SITE_NAME, SITE_URL } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'global-expansion-services' },
    { slug: 'sales-growth-system' },
    { slug: 'marketing-service' }
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found | EVIT Organization'
    };
  }

  return createPageMetadata({
    title: `${service.title} | EVIT Organization`,
    description: service.subtitle,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.subtitle,
    image: absoluteUrl(service.image),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Global",
    url: absoluteUrl(`/services/${service.slug}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(serviceJsonLd)}
      />
      <ServiceDetailContent service={service} />
    </>
  );
}
