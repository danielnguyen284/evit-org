'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
import ResponsiveHeroImage from "@/components/ResponsiveHeroImage";
import { 
  BLOG_POSTS_PER_PAGE,
  WPPostRaw, 
  FALLBACK_CATEGORIES,
  decodeHtmlEntities,
  stripHtmlToText
} from "@/data/blogData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
// test
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -50px 0px' }}
      variants={fadeUp}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface BlogFeedClientProps {
  initialPosts: WPPostRaw[];
  currentPage?: number;
}

type PaginationItem = number | 'start-ellipsis' | 'end-ellipsis';

function createPaginationItems(totalPages: number, currentPage: number): PaginationItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const siblingCount = 2;
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, index) => start + index);
  const startPage = Math.max(2, currentPage - siblingCount);
  const endPage = Math.min(totalPages - 1, currentPage + siblingCount);
  const showStartEllipsis = startPage > 2;
  const showEndEllipsis = endPage < totalPages - 1;

  if (!showStartEllipsis) {
    return [1, ...range(2, Math.min(5, totalPages - 1)), 'end-ellipsis', totalPages];
  }

  if (!showEndEllipsis) {
    return [1, 'start-ellipsis', ...range(Math.max(2, totalPages - 4), totalPages)];
  }

  return [1, 'start-ellipsis', ...range(startPage, endPage), 'end-ellipsis', totalPages];
}

export default function BlogFeedClient({ initialPosts, currentPage = 1 }: BlogFeedClientProps) {
  const [posts] = useState<WPPostRaw[]>(initialPosts);
  const [activeCategory, setActiveCategory] = useState('all');
  const [localPage, setLocalPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const feedRef = useRef<HTMLDivElement>(null);

  // Helper to extract category name
  const getCategoryName = (post: WPPostRaw): string => {
    const terms = post._embedded?.["wp:term"]?.[0];
    if (terms && terms.length > 0) {
      const categoryTerm = terms.find(t => t.taxonomy === 'category');
      if (categoryTerm) {
        if (categoryTerm.name === 'Kinh doanh' || categoryTerm.slug === 'kinh-doanh') {
          return 'Business';
        }
        return categoryTerm.name;
      }
    }
    if (post.categories && post.categories.length > 0) {
      const catId = post.categories[0];
      if (catId === 3) return "Business";
      const cat = FALLBACK_CATEGORIES.find(c => c.id === catId);
      if (cat) return cat.name;
    }
    return "News";
  };

  // Helper to extract featured image url
  const getFeaturedImageUrl = (post: WPPostRaw): string => {
    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
    if (featuredMedia?.source_url) {
      return featuredMedia.source_url;
    }
    return "/assets/daa7591f467f07ac34cf81f8dd257db99985d118.webp";
  };

  // Filter posts based on active category
  const getCategoryFilteredPosts = () => {
    if (activeCategory === 'all') return posts;
    
    const activeCatObj = FALLBACK_CATEGORIES.find(c => c.slug === activeCategory);
    if (!activeCatObj) return posts;

    return posts.filter(post => {
      const categoryName = getCategoryName(post).toLowerCase();
      const targetName = activeCatObj.name.toLowerCase();
      
      return categoryName === targetName || post.categories.includes(activeCatObj.id);
    });
  };

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const categoryFilteredPosts = getCategoryFilteredPosts();
  const filteredPosts = normalizedSearchQuery
    ? categoryFilteredPosts.filter((post) => {
        const searchableText = [
          decodeHtmlEntities(post.title.rendered),
          stripHtmlToText(post.excerpt.rendered),
          stripHtmlToText(post.content.rendered).slice(0, 1500),
          getCategoryName(post),
        ].join(' ').toLowerCase();

        return searchableText.includes(normalizedSearchQuery);
      })
    : categoryFilteredPosts;
  const usesUrlPagination = activeCategory === 'all' && !normalizedSearchQuery;
  const effectivePage = usesUrlPagination ? currentPage : localPage;
  const totalPages = Math.ceil(filteredPosts.length / BLOG_POSTS_PER_PAGE);
  const safeCurrentPage = Math.min(Math.max(effectivePage, 1), totalPages || 1);
  const paginationItems = createPaginationItems(totalPages, safeCurrentPage);
  
  // Get posts for current page
  const startIndex = (safeCurrentPage - 1) * BLOG_POSTS_PER_PAGE;
  const displayedPosts = filteredPosts.slice(startIndex, startIndex + BLOG_POSTS_PER_PAGE);

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setLocalPage(1);
    setTimeout(() => {
      feedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setLocalPage(1);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setLocalPage(1);
  };

  const handleLocalPageChange = (page: number) => {
    setLocalPage(page);
    feedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getPageHref = (page: number) => {
    return page === 1 ? '/blog#blog-feed' : `/blog/page/${page}#blog-feed`;
  };

  const getCategoryTitle = () => {
    if (normalizedSearchQuery) {
      return 'Search Results';
    }

    const cat = FALLBACK_CATEGORIES.find(c => c.slug === activeCategory);
    if (!cat || cat.slug === 'all') return "All News";
    return `${cat.name} News`;
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#03032D] text-white overflow-x-hidden">
        {/* Hero Section - 100vh */}
        <section className="relative flex h-screen min-h-screen w-full items-center justify-center overflow-hidden px-6">
          {/* Background image container for Next.js Image Optimization */}
          <div className="absolute inset-0 -z-10 select-none pointer-events-none">
            <ResponsiveHeroImage
              desktopSrc="/assets/9c793d0712ca618d82f52c32ab5819a0e00d73ad.webp"
              mobileSrc="/assets/9c793d0712ca618d82f52c32ab5819a0e00d73ad-mobile.webp"
              alt="Blog Page"
              className="object-cover object-center"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(3,3,45,0.45)] via-[rgba(3,3,45,0.85)] to-[#03032D]" />
          </div>

          <div className="absolute inset-0 bg-[#03032D]/20 pointer-events-none" />

          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-4xl font-extrabold uppercase leading-tight tracking-[0.05em] text-white sm:text-[54px] md:text-[64px] lg:text-[76px]"
            >
              BLOG PAGE
            </motion.h1>
          </div>

          {/* Bottom Glowing Divider */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-bright/35 to-transparent" />
        </section>

        {/* Blog Feed Section */}
        <section
          id="blog-feed"
          ref={feedRef}
          className="relative py-20 sm:py-28 overflow-hidden border-b border-blue-bright/10 scroll-mt-[70px]"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[url('/assets/background-wave-original.png')] bg-[length:100%_auto] bg-top bg-no-repeat opacity-20 mix-blend-screen brightness-0 invert-[0.38] sepia saturate-[2.8] hue-rotate-[190deg]" />

          <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
            
            {/* Filter Navigation Bar */}
            <Reveal className="mb-14">
              <div className="flex flex-wrap justify-center gap-3 pb-8">
                {FALLBACK_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.slug;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.slug)}
                      className={`font-sans text-[13px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all duration-300 ${
                        isActive
                          ? "bg-blue-bright border-blue-bright text-white shadow-[0_0_15px_rgba(0,104,255,0.4)]"
                          : "border-white/20 hover:border-white/50 text-white/80 hover:text-white bg-transparent"
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* Search Bar */}
            <Reveal className="mb-12">
              <div className="mx-auto max-w-[760px]">
                <label htmlFor="blog-search" className="sr-only">
                  Search blog posts
                </label>
                <div className="group relative flex items-center rounded-full border border-blue-bright/35 bg-[#080832]/70 px-5 py-3.5 shadow-[0_0_24px_rgba(0,104,255,0.12)] backdrop-blur-md transition-colors focus-within:border-blue-bright/80">
                  <Search className="mr-3 h-5 w-5 flex-shrink-0 text-white/45 transition-colors group-focus-within:text-blue-bright" aria-hidden="true" />
                  <input
                    id="blog-search"
                    type="search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search articles..."
                    className="w-full bg-transparent font-sans text-sm font-semibold text-white placeholder:text-white/35 focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      aria-label="Clear search"
                      className="ml-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  )}
                </div>
                {normalizedSearchQuery && (
                  <p className="mt-3 text-center font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} for <span className="text-white/65">{searchQuery.trim()}</span>
                  </p>
                )}
              </div>
            </Reveal>

            {/* Dynamic Category Title */}
            <Reveal className="mb-12 text-center">
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-white">
                {getCategoryTitle()}
              </h2>
              <div className="w-16 h-[2px] bg-red-bright mx-auto mt-4" />
            </Reveal>

            {/* Posts Grid Layout */}
            {displayedPosts.length === 0 ? (
              <div className="text-center py-20 text-white/50 font-semibold">
                {normalizedSearchQuery ? 'No posts match your search.' : 'No posts found in this category.'}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post, index) => {
                  const imageUrl = getFeaturedImageUrl(post);
                  const postTitle = decodeHtmlEntities(post.title.rendered);
                  const postHref = `/blog/${post.slug}`;
                  const postExcerpt = stripHtmlToText(post.excerpt.rendered);

                  return (
                    <Reveal key={post.id} delay={index * 0.1}>
                      <article
                        className="group flex flex-col h-full bg-[#080832]/60 border border-blue-bright/35 hover:border-blue-bright/80 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,104,255,0.25)] hover:-translate-y-1"
                      >
                        {/* Featured Image */}
                        <Link
                          href={postHref}
                          aria-label={postTitle}
                          className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-900"
                        >
                          <Image
                            src={imageUrl}
                            alt={postTitle}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </Link>

                        {/* Title & Body Block */}
                        <div className="flex flex-col flex-grow p-6 border-t border-white/5">
                          {/* Date */}
                          <time dateTime={post.date} className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">
                            {new Date(post.date).toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })}
                          </time>

                          {/* Title with Red vertical accent line */}
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-[3px] bg-[#E92228] rounded-full self-stretch flex-shrink-0 transition-all duration-300 group-hover:bg-blue-bright" />
                            <h3 className="font-sans text-base sm:text-lg font-bold text-white leading-snug group-hover:text-blue-bright transition-colors line-clamp-2">
                              <Link href={postHref}>
                                {postTitle}
                              </Link>
                            </h3>
                          </div>

                          {/* Excerpt */}
                          <p className="font-sans text-xs sm:text-[13px] text-white/65 leading-relaxed line-clamp-3">
                            {postExcerpt}
                          </p>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <Reveal className="mt-16 flex justify-center items-center gap-2">
                {/* Prev Button */}
                {safeCurrentPage === 1 ? (
                  <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 text-white/30">
                    Prev
                  </span>
                ) : usesUrlPagination ? (
                  <Link
                    href={getPageHref(safeCurrentPage - 1)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-colors"
                  >
                    Prev
                  </Link>
                ) : (
                  <button
                    onClick={() => handleLocalPageChange(safeCurrentPage - 1)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-colors"
                  >
                    Prev
                  </button>
                )}

                {/* Page Numbers */}
                {paginationItems.map((item) => {
                  if (typeof item !== 'number') {
                    return (
                      <span
                        key={item}
                        aria-hidden="true"
                        className="w-6 h-9 flex items-center justify-center text-xs font-bold text-white/45"
                      >
                        ...
                      </span>
                    );
                  }

                  const page = item;
                  const isActive = page === safeCurrentPage;
                  const pageClassName = `w-9 h-9 flex items-center justify-center text-xs font-bold rounded-lg transition-all ${
                    isActive
                      ? "bg-blue-bright text-white shadow-[0_0_10px_rgba(0,104,255,0.3)]"
                      : "border border-white/10 hover:border-white/30 text-white/70 hover:text-white"
                  }`;

                  return usesUrlPagination ? (
                    <Link
                      key={page}
                      href={getPageHref(page)}
                      aria-current={isActive ? 'page' : undefined}
                      className={pageClassName}
                    >
                      {page}
                    </Link>
                  ) : (
                    <button
                      key={page}
                      onClick={() => handleLocalPageChange(page)}
                      aria-current={isActive ? 'page' : undefined}
                      className={pageClassName}
                    >
                      {page}
                    </button>
                  );
                })}

                {/* Next Button */}
                {safeCurrentPage === totalPages ? (
                  <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 text-white/30">
                    Next
                  </span>
                ) : usesUrlPagination ? (
                  <Link
                    href={getPageHref(safeCurrentPage + 1)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-colors"
                  >
                    Next
                  </Link>
                ) : (
                  <button
                    onClick={() => handleLocalPageChange(safeCurrentPage + 1)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-colors"
                  >
                    Next
                  </button>
                )}
              </Reveal>
            )}

          </div>
        </section>
      </main>

      <Footer />
      <FloatingCalendar />
    </>
  );
}
