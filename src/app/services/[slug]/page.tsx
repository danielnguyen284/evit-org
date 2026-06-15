import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailContent from './ServiceDetailContent';

import { servicesData } from '@/data/servicesData';

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

  return {
    title: `${service.title} | EVIT Organization`,
    description: service.subtitle,
    openGraph: {
      title: `${service.title} | EVIT Organization`,
      description: service.subtitle,
      images: [{ url: service.image }]
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}
