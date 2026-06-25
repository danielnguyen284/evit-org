'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
import {
  WPPostRaw,
  FALLBACK_POSTS,
  FALLBACK_CATEGORIES,
  decodeHtmlEntities,
  normalizeLegacyPostLinks,
  stripHtmlToText,
} from "@/data/blogData";

function preprocessHtml(html: string): string {
  if (!html) return '';
  return html.replace(/<img([^>]+)>/gi, (imgTag) => {
    let processed = imgTag;

    const dataSrcMatch = imgTag.match(/data-src=["']([^"']+)["']/i);
    if (dataSrcMatch) {
      const realSrc = dataSrcMatch[1];
      processed = processed.replace(/\ssrc=["']([^"']+)["']/i, '');
      processed = processed.replace(/data-src=["']([^"']+)["']/i, `src="${realSrc}"`);
    }

    const dataSrcsetMatch = imgTag.match(/data-srcset=["']([^"']+)["']/i);
    if (dataSrcsetMatch) {
      const realSrcset = dataSrcsetMatch[1];
      processed = processed.replace(/\ssrcset=["']([^"']+)["']/i, '');
      processed = processed.replace(/data-srcset=["']([^"']+)["']/i, `srcset="${realSrcset}"`);
    }

    const dataSizesMatch = imgTag.match(/data-sizes=["']([^"']+)["']/i);
    if (dataSizesMatch) {
      const realSizes = dataSizesMatch[1];
      processed = processed.replace(/\ssizes=["']([^"']+)["']/i, '');
      processed = processed.replace(/data-sizes=["']([^"']+)["']/i, `sizes="${realSizes}"`);
    }

    return processed;
  });
}

interface BlogDetailContentProps {
  post: WPPostRaw;
  allPosts: WPPostRaw[];
}

export default function BlogDetailContent({ post, allPosts }: BlogDetailContentProps) {
  // Helper to extract category name
  const getCategoryName = (p: WPPostRaw): string => {
    const terms = p._embedded?.["wp:term"]?.[0];
    if (terms && terms.length > 0) {
      const categoryTerm = terms.find(t => t.taxonomy === 'category');
      if (categoryTerm) {
        if (categoryTerm.name === 'Kinh doanh' || categoryTerm.slug === 'kinh-doanh') {
          return 'Business';
        }
        return categoryTerm.name;
      }
    }
    if (p.categories && p.categories.length > 0) {
      const catId = p.categories[0];
      if (catId === 3) return "Business";
      const cat = FALLBACK_CATEGORIES.find(c => c.id === catId);
      if (cat) return cat.name;
    }
    return "News";
  };

  // Helper to extract featured image
  const getImageUrl = (p: WPPostRaw): string => {
    const featuredMedia = p._embedded?.["wp:featuredmedia"]?.[0];
    return featuredMedia?.source_url || "/assets/daa7591f467f07ac34cf81f8dd257db99985d118.webp";
  };

  const currentCategoryName = getCategoryName(post);
  const activePosts = allPosts && allPosts.length > 0 ? allPosts : FALLBACK_POSTS;

  // Filter 3 related posts belonging to the SAME category
  let related = activePosts.filter(p => p.slug !== post.slug && getCategoryName(p) === currentCategoryName);
  if (related.length < 3) {
    const extra = activePosts.filter(p => p.slug !== post.slug && !related.some(r => r.slug === p.slug));
    related = [...related, ...extra];
  }
  related = related.slice(0, 3);

  const normalizedPostContent = preprocessHtml(normalizeLegacyPostLinks(post.content.rendered));

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#03032D] text-white overflow-x-hidden pt-[88px]">
        {/* Post Content Area - Single Column */}
        <section className="py-16 md:py-24 px-6 relative">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[url('/assets/background-wave-original.png')] bg-[length:100%_auto] bg-top bg-no-repeat opacity-20 mix-blend-screen brightness-0 invert-[0.38] sepia saturate-[2.8] hue-rotate-[190deg]" />

          <div className="relative z-10 max-w-[900px] mx-auto">
            {/* Featured Image */}
            <div className="relative w-full aspect-[16/9] md:h-[480px] rounded-2xl overflow-hidden border border-blue-bright/35 shadow-[0_0_30px_rgba(0,104,255,0.15)] mb-12 bg-slate-900">
              <Image
                src={getImageUrl(post)}
                alt={decodeHtmlEntities(post.title.rendered)}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
              />
            </div>

            {/* Title with vertical red accent line */}
            <div className="flex items-stretch mb-4">
              <div className="w-[6px] bg-[#E92228] rounded-full mr-4 shrink-0" />
              <div>
                <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold uppercase leading-tight text-white">
                  {decodeHtmlEntities(post.title.rendered)}
                </h1>
              </div>
            </div>

            {/* Meta (Date / Category) */}
            <div className="flex items-center gap-3 text-xs font-bold text-white/50 tracking-widest uppercase mb-10 pl-[22px]">
              <span>
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E92228]" />
              <span>{currentCategoryName}</span>
            </div>

            {/* Post Rich Content */}
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-sans text-white/85 leading-relaxed space-y-6 text-[15px] sm:text-base pl-[22px]"
            >
              {/* Custom prose styles mapping */}
              <div 
                className="blog-content-html"
                dangerouslySetInnerHTML={{ __html: normalizedPostContent }}
              />
            </motion.article>
          </div>
        </section>

        {/* Other News Section */}
        <section className="py-20 border-t border-blue-bright/10 bg-[#03032D]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-white text-center mb-12">
              OTHER NEWS
            </h2>
            
            {/* 3 post cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {related.map((rp) => {
                const rpImageUrl = getImageUrl(rp);
                const rpTitle = decodeHtmlEntities(rp.title.rendered);
                const rpHref = `/blog/${rp.slug}`;
                const rpExcerpt = stripHtmlToText(rp.excerpt.rendered);

                return (
                  <article
                    key={rp.id} 
                    className="group flex flex-col h-full bg-[#080832]/60 border border-blue-bright/35 hover:border-blue-bright/80 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,104,255,0.25)] hover:-translate-y-1"
                  >
                    {/* Featured Image */}
                    <Link
                      href={rpHref}
                      aria-label={rpTitle}
                      className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-900"
                    >
                      <Image
                        src={rpImageUrl}
                        alt={rpTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Title & Excerpt Body Block */}
                    <div className="flex flex-col flex-grow p-6 border-t border-white/5">
                      {/* Date */}
                      <time dateTime={rp.date} className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">
                        {new Date(rp.date).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                        })}
                      </time>

                      {/* Title with Red vertical accent line */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-[3px] bg-[#E92228] rounded-full self-stretch flex-shrink-0 transition-all duration-300 group-hover:bg-blue-bright" />
                        <h3 className="font-sans text-sm sm:text-base font-bold text-white leading-snug group-hover:text-blue-bright transition-colors line-clamp-2">
                          <Link href={rpHref}>
                            {rpTitle}
                          </Link>
                        </h3>
                      </div>

                      {/* Excerpt */}
                      <p className="font-sans text-xs text-white/65 leading-relaxed line-clamp-3">
                        {rpExcerpt}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Read More button to go back to Blog */}
            <div className="flex justify-center">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E92228] hover:bg-[#E92228]/90 text-white font-sans text-xs font-extrabold uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(233,34,40,0.3)] hover:shadow-[0_4px_25px_rgba(233,34,40,0.45)] hover:-translate-y-0.5"
              >
                READ MORE
                <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCalendar />
    </>
  );
}
