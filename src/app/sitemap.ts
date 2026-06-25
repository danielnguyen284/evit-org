import { MetadataRoute } from 'next';
import { servicesData } from '@/data/servicesData';
import { caseStudiesData } from '@/data/caseStudiesData';
import { fetchWordPressPosts } from '@/data/blogFetch';
import { BLOG_POSTS_PER_PAGE } from '@/data/blogData';
import { SITE_URL } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  const getPostDate = (date?: string) => {
    if (date) {
      const parsed = new Date(date);
      if (!isNaN(parsed.getTime())) {
        return parsed;
      }
    }

    return new Date();
  };

  // 1. Static pages
  const staticPaths = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/charity',
    '/contact-us',
    '/blog',
    '/it-vendor-introduction',
  ];

  const staticEntries = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));

  // 2. Services dynamic pages
  const serviceEntries = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. Case Studies dynamic pages
  const caseStudyEntries = caseStudiesData.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 4. WordPress blog post dynamic pages
  let blogEntries: MetadataRoute.Sitemap = [];
  let blogPaginationEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await fetchWordPressPosts();
    blogEntries = posts.map((post) => {
      const postDate = getPostDate(post.date);
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: postDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      };
    });

    const totalBlogPages = Math.ceil(posts.length / BLOG_POSTS_PER_PAGE);
    blogPaginationEntries = Array.from({ length: Math.max(totalBlogPages - 1, 0) }, (_, index) => {
      const page = index + 2;
      const postsOnPage = posts.slice((page - 1) * BLOG_POSTS_PER_PAGE, page * BLOG_POSTS_PER_PAGE);
      const lastModified = postsOnPage
        .map((post) => getPostDate(post.date))
        .sort((a, b) => b.getTime() - a.getTime())[0] || new Date();

      return {
        url: `${baseUrl}/blog/page/${page}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.5,
      };
    });
  } catch (error) {
    console.error('Failed to generate sitemap entries for blog posts:', error);
  }

  return [...staticEntries, ...serviceEntries, ...caseStudyEntries, ...blogEntries, ...blogPaginationEntries];
}
