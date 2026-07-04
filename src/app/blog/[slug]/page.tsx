import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogDetailContent from './BlogDetailContent';
import { WPPostRaw, FALLBACK_POSTS, decodeHtmlEntities } from "@/data/blogData";
import { fetchWordPressPosts, fetchWordPressPostBySlug } from "@/data/blogFetch";
import { absoluteUrl, createPageMetadata, jsonLdScript, SITE_NAME, SITE_URL } from '@/lib/seo';

const matchSlug = (wpSlug: string, paramSlug: string) => {
  if (wpSlug === paramSlug) return true;
  try {
    return decodeURIComponent(wpSlug) === decodeURIComponent(paramSlug);
  } catch {
    return false;
  }
};

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
    post = posts.find(p => matchSlug(p.slug, slug));
  } catch (e) {
    console.warn("Metadata fetch error:", e);
  }

  if (!post) {
    try {
      const singlePost = await fetchWordPressPostBySlug(slug);
      if (singlePost) {
        post = singlePost;
      }
    } catch (e) {
      console.warn("Metadata fetch by slug error:", e);
    }
  }

  if (!post) {
    post = FALLBACK_POSTS.find(p => matchSlug(p.slug, slug));
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

  const metadata = createPageMetadata({
    title: `${cleanTitle} | EVIT Organization Blog`,
    description: cleanDesc,
    path: `/blog/${post.slug}`,
    image: ogImage,
    type: "article",
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: post.date,
      authors: ["EVIT Expert"],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  let post: WPPostRaw | undefined;
  try {
    const posts = await fetchWordPressPosts();
    post = posts.find(p => matchSlug(p.slug, slug));
  } catch (error) {
    console.warn("Failed to fetch post in page server component:", error);
  }

  if (!post) {
    try {
      const singlePost = await fetchWordPressPostBySlug(slug);
      if (singlePost) {
        post = singlePost;
      }
    } catch (error) {
      console.warn("Failed to fetch post by slug in page server component:", error);
    }
  }

  if (!post) {
    post = FALLBACK_POSTS.find(p => matchSlug(p.slug, slug));
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

  const cleanTitle = decodeHtmlEntities(post.title.rendered);
  const cleanDesc = decodeHtmlEntities(post.excerpt.rendered)
    .replace(/<[^>]*>/g, '')
    .substring(0, 160);
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const image = featuredMedia?.source_url || "/assets/daa7591f467f07ac34cf81f8dd257db99985d118.webp";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: cleanTitle,
    description: cleanDesc,
    image: absoluteUrl(image),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "EVIT Expert",
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
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(articleJsonLd)}
      />
      <BlogDetailContent post={post} allPosts={allPosts} />
    </>
  );
}
