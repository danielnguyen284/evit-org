import fs from 'fs';
import path from 'path';
import { WPPostRaw, FALLBACK_POSTS } from './blogData';

let cachedPosts: WPPostRaw[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes cache TTL

export async function fetchWordPressPosts(): Promise<WPPostRaw[]> {
  const now = Date.now();
  
  // 1. Try in-memory cache first
  if (cachedPosts && (now - lastFetchTime < CACHE_TTL)) {
    return cachedPosts;
  }

  const cacheFilePath = path.join(process.cwd(), 'src', 'data', 'wordpress-cache.json');

  // 2. Fetch from API
  try {
    const res = await fetch("https://evit-org.com/wp-json/wp/v2/posts?per_page=100&_embed=1", {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json'
      },
      next: { revalidate: 600 } // ISR cache for 10 minutes
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      cachedPosts = data;
      lastFetchTime = now;

      // Write to filesystem cache for future fallback if API fails
      try {
        fs.writeFileSync(cacheFilePath, JSON.stringify(data, null, 2), 'utf-8');
      } catch (err) {
        console.warn("Failed to write WordPress filesystem cache:", err);
      }

      return data;
    }
    
    // Fallback to filesystem cache if API returns empty
    const fallbackData = getFilesystemCacheFallback(cacheFilePath);
    if (fallbackData) return fallbackData;
    
    return FALLBACK_POSTS;
  } catch (error) {
    console.warn("WP API fetch failed, falling back to local blog database:", error);
    
    // Fallback to filesystem cache
    const fallbackData = getFilesystemCacheFallback(cacheFilePath);
    if (fallbackData) return fallbackData;
    
    if (cachedPosts) {
      return cachedPosts;
    }
    return FALLBACK_POSTS;
  }
}

function getFilesystemCacheFallback(cacheFilePath: string): WPPostRaw[] | null {
  try {
    if (fs.existsSync(cacheFilePath)) {
      const fileContent = fs.readFileSync(cacheFilePath, 'utf-8');
      const parsed = JSON.parse(fileContent);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Failed to read fallback WordPress filesystem cache:", err);
  }
  return null;
}

export async function fetchWordPressPostBySlug(slug: string): Promise<WPPostRaw | null> {
  try {
    const res = await fetch(`https://evit-org.com/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=1`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json'
      },
      next: { revalidate: 60 } // Cache this single post query for 1 minute
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data[0];
    }
    return null;
  } catch (error) {
    console.warn(`Failed to fetch WP post by slug (${slug}):`, error);
    return null;
  }
}

