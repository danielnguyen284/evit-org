'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
import { 
  WPPostRaw, 
  FALLBACK_CATEGORIES,
  decodeHtmlEntities 
} from "@/data/blogData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

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
}

export default function BlogFeedClient({ initialPosts }: BlogFeedClientProps) {
  const [posts] = useState<WPPostRaw[]>(initialPosts);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const feedRef = useRef<HTMLDivElement>(null);

  const postsPerPage = 6;

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
    return "/assets/daa7591f467f07ac34cf81f8dd257db99985d118.jpg";
  };

  // Filter posts based on active category
  const getFilteredPosts = () => {
    if (activeCategory === 'all') return posts;
    
    const activeCatObj = FALLBACK_CATEGORIES.find(c => c.slug === activeCategory);
    if (!activeCatObj) return posts;

    return posts.filter(post => {
      const categoryName = getCategoryName(post).toLowerCase();
      const targetName = activeCatObj.name.toLowerCase();
      
      return categoryName === targetName || post.categories.includes(activeCatObj.id);
    });
  };

  const filteredPosts = getFilteredPosts();
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Get posts for current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setCurrentPage(1);
    setTimeout(() => {
      feedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    feedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getCategoryTitle = () => {
    const cat = FALLBACK_CATEGORIES.find(c => c.slug === activeCategory);
    if (!cat || cat.slug === 'all') return "All News";
    return `${cat.name} News`;
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#03032D] text-white overflow-x-hidden">
        {/* Hero Section - 100vh */}
        <section
          className="relative flex h-screen min-h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-6"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(3, 3, 45, 0.45) 0%, rgba(3, 3, 45, 0.85) 80%, #03032D 100%), url('/assets/9c793d0712ca618d82f52c32ab5819a0e00d73ad.png')",
          }}
        >
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
                No posts found in this category.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post, index) => {
                  const imageUrl = getFeaturedImageUrl(post);

                  return (
                    <Reveal key={post.id} delay={index * 0.1}>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col h-full bg-[#080832]/60 border border-blue-bright/35 hover:border-blue-bright/80 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,104,255,0.25)] hover:-translate-y-1"
                      >
                        {/* Featured Image */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                          <Image
                            src={imageUrl}
                            alt={decodeHtmlEntities(post.title.rendered)}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Title & Body Block */}
                        <div className="flex flex-col flex-grow p-6 border-t border-white/5">
                          {/* Date */}
                          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">
                            {new Date(post.date).toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })}
                          </span>

                          {/* Title with Red vertical accent line */}
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-[3px] bg-[#E92228] rounded-full self-stretch flex-shrink-0 transition-all duration-300 group-hover:bg-blue-bright" />
                            <h3 className="font-sans text-base sm:text-lg font-bold text-white leading-snug group-hover:text-blue-bright transition-colors line-clamp-2">
                              {decodeHtmlEntities(post.title.rendered)}
                            </h3>
                          </div>

                          {/* Excerpt */}
                          <p 
                            className="font-sans text-xs sm:text-[13px] text-white/65 leading-relaxed line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(post.excerpt.rendered) }}
                          />
                        </div>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <Reveal className="mt-16 flex justify-center items-center gap-2">
                {/* Prev Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 hover:border-white/30 text-white/80 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Prev
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isActive = page === currentPage;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-9 h-9 flex items-center justify-center text-xs font-bold rounded-lg transition-all ${
                        isActive
                          ? "bg-blue-bright text-white shadow-[0_0_10px_rgba(0,104,255,0.3)]"
                          : "border border-white/10 hover:border-white/30 text-white/70 hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border border-white/10 hover:border-white/30 text-white/80 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Next
                </button>
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
