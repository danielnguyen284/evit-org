import React from 'react';
import type { Metadata } from 'next';
import BlogFeedClient from './BlogFeedClient';
import { fetchWordPressPosts } from "@/data/blogFetch";
import { WPPostRaw } from "@/data/blogData";
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: "B2B IT Sales & Marketing Blog | EVIT Organization",
  description: "Get the latest insights, tactical guides, and strategies on B2B sales systems, tech lead generation, and outbound marketing for IT service companies.",
  path: "/blog",
});

export const revalidate = 600;

export default async function BlogPage() {
  let initialPosts: WPPostRaw[] = [];
  try {
    initialPosts = await fetchWordPressPosts();
  } catch (err) {
    console.error("Failed to load blog posts on server:", err);
  }

  return <BlogFeedClient initialPosts={initialPosts} />;
}
