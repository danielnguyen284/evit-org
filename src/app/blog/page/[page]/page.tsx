import React from 'react';
import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import BlogFeedClient from '../../BlogFeedClient';
import { fetchWordPressPosts } from "@/data/blogFetch";
import { BLOG_POSTS_PER_PAGE, WPPostRaw } from "@/data/blogData";
import { createPageMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ page: string }>;
}

const BLOG_META_DESCRIPTION = "Get the latest insights, tactical guides, and strategies on B2B sales systems, tech lead generation, and outbound marketing for IT service companies.";

function parsePageNumber(page: string) {
  const pageNumber = Number(page);
  return Number.isInteger(pageNumber) ? pageNumber : NaN;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page } = await params;
  const pageNumber = parsePageNumber(page);

  if (!Number.isFinite(pageNumber) || pageNumber < 2) {
    return createPageMetadata({
      title: "B2B IT Sales & Marketing Blog | EVIT Organization",
      description: BLOG_META_DESCRIPTION,
      path: "/blog",
    });
  }

  return createPageMetadata({
    title: `B2B IT Sales & Marketing Blog - Page ${pageNumber} | EVIT Organization`,
    description: BLOG_META_DESCRIPTION,
    path: `/blog/page/${pageNumber}`,
  });
}

export const revalidate = 600;

export default async function BlogPaginatedPage({ params }: PageProps) {
  const { page } = await params;
  const pageNumber = parsePageNumber(page);

  if (!Number.isFinite(pageNumber) || pageNumber < 1) {
    notFound();
  }

  if (pageNumber === 1) {
    permanentRedirect('/blog');
  }

  let initialPosts: WPPostRaw[] = [];
  try {
    initialPosts = await fetchWordPressPosts();
  } catch (err) {
    console.error("Failed to load paginated blog posts on server:", err);
  }

  const totalPages = Math.ceil(initialPosts.length / BLOG_POSTS_PER_PAGE);
  if (totalPages > 0 && pageNumber > totalPages) {
    notFound();
  }

  return <BlogFeedClient initialPosts={initialPosts} currentPage={pageNumber} />;
}
