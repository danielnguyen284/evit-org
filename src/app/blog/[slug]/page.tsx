import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogDetailContent from './BlogDetailContent';
import { WPPostRaw, FALLBACK_POSTS, decodeHtmlEntities } from "@/data/blogData";
import { fetchWordPressPosts } from "@/data/blogFetch";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Return empty array to avoid fetching 85+ posts from WordPress during build time.
  // Next.js will build this page dynamically on-demand and cache it via ISR.
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Find post
  let post: WPPostRaw | undefined;
  try {
    const posts = await fetchWordPressPosts();
    post = posts.find(p => p.slug === slug);
  } catch (e) {
    console.warn("Metadata fetch error:", e);
  }

  if (!post) {
    post = FALLBACK_POSTS.find(p => p.slug === slug);
  }

  if (!post) {
    return {
      title: 'Post Not Found | EVIT Organization'
    };
  }

  const cleanTitle = decodeHtmlEntities(post.title.rendered);
  const cleanDesc = decodeHtmlEntities(post.excerpt.rendered)
    .replace(/<[^>]*>/g, '') // remove HTML tags
    .substring(0, 160);

  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const ogImage = featuredMedia?.source_url || "/assets/daa7591f467f07ac34cf81f8dd257db99985d118.webp";

  return {
    title: `${cleanTitle} | EVIT Organization Blog`,
    description: cleanDesc,
    openGraph: {
      title: `${cleanTitle} | EVIT Organization Blog`,
      description: cleanDesc,
      images: [{ url: ogImage }]
    }
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  let post: WPPostRaw | undefined;
  try {
    const posts = await fetchWordPressPosts();
    post = posts.find(p => p.slug === slug);
  } catch (error) {
    console.warn("Failed to fetch post in page server component:", error);
  }

  if (!post) {
    post = FALLBACK_POSTS.find(p => p.slug === slug);
  }

  if (!post) {
    notFound();
  }

  let allPosts: WPPostRaw[] = [];
  try {
    allPosts = await fetchWordPressPosts();
  } catch (error) {
    console.warn("Failed to fetch all posts for detail page:", error);
  }

  return <BlogDetailContent post={post} allPosts={allPosts} />;
}
