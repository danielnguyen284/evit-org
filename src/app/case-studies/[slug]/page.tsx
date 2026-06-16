import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { caseStudiesData } from '@/data/caseStudiesData';
import CaseStudyDetailContent from './CaseStudyDetailContent';
import { absoluteUrl, createPageMetadata, jsonLdScript, SITE_NAME, SITE_URL } from '@/lib/seo';

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

  return createPageMetadata({
    title: `${caseStudy.client.name} Case Study | EVIT Organization`,
    description: caseStudy.subheading,
    path: `/case-studies/${caseStudy.slug}`,
    image: caseStudy.client.logo,
    type: "article",
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = caseStudiesData.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/case-studies/${caseStudy.slug}#article`,
    headline: `${caseStudy.client.name} Case Study`,
    description: caseStudy.subheading,
    image: absoluteUrl(caseStudy.client.logo),
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/assets/logo.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/case-studies/${caseStudy.slug}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(caseStudyJsonLd)}
      />
      <CaseStudyDetailContent caseStudy={caseStudy} />
    </>
  );
}
