import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { caseStudiesData } from '@/data/caseStudiesData';
import CaseStudyDetailContent from './CaseStudyDetailContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudiesData.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudiesData.find((cs) => cs.slug === slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | EVIT Organization'
    };
  }

  return {
    title: `${caseStudy.client.name} Case Study | EVIT Organization`,
    description: caseStudy.subheading,
    openGraph: {
      title: `${caseStudy.client.name} Case Study | EVIT Organization`,
      description: caseStudy.subheading,
      images: [{ url: caseStudy.client.logo }]
    }
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = caseStudiesData.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetailContent caseStudy={caseStudy} />;
}
