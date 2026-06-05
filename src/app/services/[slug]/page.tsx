import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceDetailContent from './ServiceDetailContent';

interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  imageAlt: string;
  icon: string;
  iconAlt: string;
  detailHeading: string;
  detailSubtitle: string;
  bullets: string[];
  heroBg?: string;
  heroTitle?: string;
  heroSubtitle?: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'global-expansion',
    slug: 'global-expansion',
    title: 'GLOBAL EXPANSION SERVICE',
    subtitle: 'Market entry planning + execution support: target markets, channels, lead generation, USP, and risk control.',
    desc: "Global expansion is more than just entering a new market—it's about developing a sustainable and scalable growth strategy that includes the right sales channels, compliance with international business laws, and effectively managing global teams. At EVIT Organization, our Custom Design Consulting Services are designed to guide businesses through every critical step of this process, ensuring a smooth, efficient, and successful market entry.",
    image: '/assets/daa7591f467f07ac34cf81f8dd257db99985d118.jpg',
    imageAlt: 'Business network and growth dashboard',
    icon: '/assets/service-icon (2).png',
    iconAlt: 'Global expansion icon',
    detailHeading: 'UNLOCK YOUR GLOBAL POTENTIAL',
    detailSubtitle: 'Achieve Sustainable Cash Flow and Growth',
    heroBg: '/assets/3fba5de9dc3c6d1da2c7409aac29a148fb465e44.png',
    heroTitle: 'BUSINESS EXPANSION',
    heroSubtitle: 'Your Guide to Global Market',
    bullets: [
      'Expanding into international markets can be challenging and risky. Many companies struggle with identifying the right markets, setting up effective sales channels, and finding a suitable Unique Selling Point (USP) that helps them stand out in the market. Additionally, understanding business ethics in foreign countries is often challenging. The lack of a strategic roadmap can lead to costly mistakes, slow market entry, failure to gain traction, wasted time, and financial losses.',
      'Collaborating with EVIT is like having a personal guide that leads you from the initial stages to successful business development in the international arena. With our extensive experience, we will show you how to navigate the complexities of global markets. We will inform you in advance about potential challenges and provide the most effective solutions to expand business and sell your services on the global market.'
    ]
  },
  {
    id: 'god-sales-system',
    slug: 'god-sales-system',
    title: 'G.O.D. SALES SYSTEM',
    subtitle: 'Step-by-step sales system for IT services: lead generation, qualification, meetings, negotiation, proposals, closing, upsell, cross-sell.',
    desc: 'Our online course covers everything you need to win more deals. From lead qualification and meeting strategy to negotiation, proposal building, and practical worksheets. Step-by-step tested formula that just needs to be implemented to your selling activities.',
    image: '/assets/2e869bba8104d15adef7f148438a7cd633820ab4.jpg',
    imageAlt: 'Sales analytics dashboard with global data',
    icon: '/assets/service-icon (1).png',
    iconAlt: 'Sales system icon',
    detailHeading: 'DOMINATE YOUR SALES PIPELINE',
    detailSubtitle: 'Establish a Repeatable and High-Converting Sales Engine',
    heroBg: '/assets/74050129a4c3f273bea5483ea83833715a20991b.png',
    heroTitle: 'G.O.D SALES SYSTEM FOR IT COMPANIES',
    heroSubtitle: 'Turn “friends & family” based sales into a predictable pipeline, without the founder doing everything.',
    bullets: [
      'Many IT service companies rely on word-of-mouth or sporadic referrals, which makes revenue growth unpredictable. Closing deals becomes difficult when sales teams lack a structured, step-by-step framework to handle qualification, demo meetings, handling objections, and proposal creation. Without a repeatable sales process, valuable leads slip through the cracks, closing cycles drag on, and scaling becomes impossible.',
      'The G.O.D. Sales System provides a battle-tested blueprint designed specifically for B2B IT service providers. We guide your team through building a structured pipeline, from qualifying leads to running high-impact meetings and executing professional closing techniques. This system equips you with practical templates, scripts, and worksheets, turning sales from a guessing game into a predictable science.'
    ]
  },
  {
    id: 'marketing-services',
    slug: 'marketing-services',
    title: 'MARKETING SERVICES',
    subtitle: 'Marketing funnel, Website + conversion + automation workflows to improve lead flow and conversion.',
    desc: 'Many businesses struggle to scale their marketing due to a lack of a clear strategy, outdated tactics, ineffective online presence, unaligned activities, poor analytics and execution. Even if they have existing marketing efforts, they often need to optimize these processes to drive conversions. As a result, businesses waste their budget on ineffective strategies, fail to fully utilize their marketing potential, and lose money and potential clients.',
    image: '/assets/540048d82298a1c0a80ba59038a0eef747a8965c.jpg',
    imageAlt: 'Marketing funnel and connected business network',
    icon: '/assets/service-icon.png',
    iconAlt: 'Marketing services icon',
    detailHeading: 'MAXIMIZE YOUR MARKETING ROI',
    detailSubtitle: 'Build High-Performing Funnels and Automated Client Acquisition',
    heroBg: '/assets/ca1bcf1b3b6f612520edaed83e8927ec556a5961.png',
    heroTitle: 'B2B MARKETING & LEAD GENERATION',
    heroSubtitle: 'Marketing Solutions Tailored to Your Business Needs',
    bullets: [
      "A beautiful website is useless if it doesn't convert visitors into leads. Many tech companies waste significant budget on ads or content marketing without having a defined funnel or automated lead nurturing. Incomplete tracking, unaligned messaging, and manual follow-ups lead to lost opportunities, high acquisition costs, and poor sales alignment.",
      'Our Marketing Services build high-converting landing pages, optimize your digital channels, and implement marketing automation workflows. We ensure every touchpoint is designed to guide prospects down the funnel, turning cold traffic into hot sales-ready leads. By aligning marketing with your sales goals, we help you save budget, improve efficiency, and accelerate growth.'
    ]
  }
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: 'global-expansion' },
    { slug: 'god-sales-system' },
    { slug: 'marketing-services' }
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
