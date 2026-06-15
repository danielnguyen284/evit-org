import { MetadataRoute } from 'next';
import { servicesData } from '@/data/servicesData';
import { caseStudiesData } from '@/data/caseStudiesData';
import { fetchWordPressPosts } from '@/data/blogFetch';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://evitconsulting.com';

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
  try {
    const posts = await fetchWordPressPosts();
    blogEntries = posts.map((post) => {
      let postDate = new Date();
      if (post.date) {
        const parsed = new Date(post.date);
        if (!isNaN(parsed.getTime())) {
          postDate = parsed;
        }
      }
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: postDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      };
    });
  } catch (error) {
    console.error('Failed to generate sitemap entries for blog posts:', error);
  }

  return [...staticEntries, ...serviceEntries, ...caseStudyEntries, ...blogEntries];
}
