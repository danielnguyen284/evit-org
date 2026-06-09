import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogDetailContent from './BlogDetailContent';
import { WPPostRaw, FALLBACK_POSTS, fetchWordPressPosts } from "@/data/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await fetchWordPressPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.warn("Failed to fetch posts for static paths, generating with fallbacks:", error);
    return FALLBACK_POSTS.map((post) => ({
      slug: post.slug,
    }));
  }
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

  const cleanTitle = post.title.rendered;
  const cleanDesc = post.excerpt.rendered
    .replace(/<[^>]*>/g, '') // remove HTML tags
    .substring(0, 160);

  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const ogImage = featuredMedia?.source_url || "/assets/daa7591f467f07ac34cf81f8dd257db99985d118.jpg";

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

  return <BlogDetailContent post={post} />;
}
