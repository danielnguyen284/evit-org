import React from 'react';
import type { Metadata } from 'next';
import ResourcesClient from './ResourcesClient';
import { fetchWordPressPosts } from "@/data/blogFetch";
import { WPPostRaw } from "@/data/blogData";

export const metadata: Metadata = {
  title: "IT Vendor Resources & Onboarding | EVIT Organization",
  description: "Register as an IT vendor with EVIT Organization. Access guidelines, partnership resources, and latest insights for B2B IT providers scaling global operations.",
  openGraph: {
    title: "IT Vendor Resources & Onboarding | EVIT Organization",
    description: "Register as an IT vendor with EVIT Organization. Access guidelines, partnership resources, and latest insights for B2B IT providers scaling global operations.",
    url: "https://evitconsulting.com/it-vendor-introduction",
  }
};

export default async function ResourcesPage() {
  let initialPosts: WPPostRaw[] = [];
  try {
    const allPosts = await fetchWordPressPosts();
    initialPosts = allPosts.slice(0, 3);
  } catch (err) {
    console.error("Failed to fetch blog posts for IT Vendor page on server:", err);
  }

  return <ResourcesClient initialPosts={initialPosts} />;
}
