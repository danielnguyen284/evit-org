export interface WPAuthor {
  id: number;
  name: string;
  avatar_urls?: {
    [key: string]: string;
  };
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: {
    width: number;
    height: number;
  };
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface WPPostRaw {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: WPAuthor[];
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPTerm[][];
  };
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}

export interface BlogTag {
  id: number;
  name: string;
  slug: string;
}

export const FALLBACK_CATEGORIES: BlogCategory[] = [
  { id: 1, name: "All News", slug: "all" },
  { id: 2, name: "Business", slug: "business" },
  { id: 4, name: "Featured", slug: "featured" },
  { id: 5, name: "Business Expansion", slug: "business-expansion" },
  { id: 6, name: "Business Growth", slug: "business-growth" },
];

export const FALLBACK_TAGS: BlogTag[] = [
  { id: 10, name: "Business Expansion", slug: "business-expansion" },
  { id: 11, name: "Business Growth", slug: "business-growth" },
  { id: 12, name: "IT service providers", slug: "it-service-providers" },
  { id: 13, name: "IT outsourcing", slug: "it-outsourcing" },
  { id: 14, name: "Global Sales", slug: "global-sales" },
  { id: 15, name: "Skilled software engineers", slug: "skilled-software-engineers" },
];

export const FALLBACK_POSTS: WPPostRaw[] = [
  {
    id: 101,
    date: "2026-02-27T08:00:00",
    slug: "it-companies-2026-4-trends-that-decide-who-scales",
    link: "/blog/it-companies-2026-4-trends-that-decide-who-scales",
    title: { rendered: "4 Make-or-Break Trends for IT Companies in 2026" },
    excerpt: { rendered: "The landscape of IT services is shifting rapidly in 2026. Discover the 4 key trends in AI-driven delivery, global expansion, and scale strategies that will determine which companies grow and which get left behind." },
    content: { rendered: `<p>The landscape of IT services is shifting rapidly in 2026. Discover the 4 key trends in AI-driven delivery, global expansion, and scale strategies that will determine which companies grow and which get left behind.</p>
    <h2>1. AI-Driven Software Development Lifecycle (SDLC)</h2>
    <p>AI is no longer just a coding assistant; it is transforming the entire software creation process. Companies that integrate AI into their business analyst, coding, testing, and deployment phases are delivering projects 40% faster.</p>
    <h2>2. Shift from Offshore to Hybrid Outsource</h2>
    <p>Western buyers are increasingly demanding local interface points. Successful IT companies in Vietnam are opening local entities or business development offices in Europe and the US to manage clients directly, creating a hybrid delivery model.</p>
    <h2>3. The Rise of Low-Code and Generative UI</h2>
    <p>Speed to market is critical. Customers want visual prototypes and working apps in days, not months. Utilizing modern tech stacks and generative tools is a must to secure large contracts.</p>
    <h2>4. Value-Based and Outcome-Based Pricing</h2>
    <p>Firms are moving away from simple time-and-materials contracts. Clients want to pay for outcomes and business value. Aligning your pricing structure to client growth metrics is the ultimate way to close big deals in 2026.</p>` },
    author: 1,
    featured_media: 201,
    categories: [2, 6], // Business, Business Growth
    tags: [11, 12], // Business Growth, IT service providers
    _embedded: {
      author: [{ id: 1, name: "EVIT Team" }],
      "wp:featuredmedia": [{
        id: 201,
        source_url: "/assets/daa7591f467f07ac34cf81f8dd257db99985d118.webp",
        alt_text: "4 Trends for IT Companies in 2026"
      }]
    }
  },
  {
    id: 102,
    date: "2026-02-13T08:00:00",
    slug: "how-can-small-it-companies-win-big-clients",
    link: "/blog/how-can-small-it-companies-win-big-clients",
    title: { rendered: "How Can Small IT Companies Win Big Clients?" },
    excerpt: { rendered: "Small IT service providers often struggle to build trust with large global corporations. Learn the specific, step-by-step strategies to project authority, demonstrate capability, and close major enterprise accounts." },
    content: { rendered: `<p>Small IT service providers often struggle to build trust with large global corporations. Learn the specific, step-by-step strategies to project authority, demonstrate capability, and close major enterprise accounts.</p>
    <p>To win large clients, you must first speak their language. Focus on risk mitigation, security compliance, and clear communication. Large buyers do not just buy technology; they buy certainty.</p>
    <h3>Key Strategies:</h3>
    <ul>
      <li><strong>Specialize deeply:</strong> Do not be a generalist. Master a specific domain or technology.</li>
      <li><strong>Build transparent processes:</strong> Show them exactly how you manage quality, deadlines, and communication.</li>
      <li><strong>Provide trial value:</strong> Offer a low-risk pilot project or structured architectural assessment to prove your capabilities first.</li>
    </ul>` },
    author: 1,
    featured_media: 202,
    categories: [2, 5], // Business, Business Expansion
    tags: [10, 14], // Business Expansion, Global Sales
    _embedded: {
      author: [{ id: 1, name: "EVIT Team" }],
      "wp:featuredmedia": [{
        id: 202,
        source_url: "/assets/540048d82298a1c0a80ba59038a0eef747a8965c.webp",
        alt_text: "How IT Companies win"
      }]
    }
  },
  {
    id: 103,
    date: "2026-02-11T08:00:00",
    slug: "evit-how-to-hire-great-salespeople-in-it-services",
    link: "/blog/evit-how-to-hire-great-salespeople-in-it-services",
    title: { rendered: "EVIT – How to Hire Great Salespeople in IT Services" },
    excerpt: { rendered: "Hiring the right sales professionals in the IT sector is notoriously difficult. EVIT breaks down the exact traits, interviewing frameworks, and compensation models required to recruit high-performing IT sales representatives." },
    content: { rendered: `<p>Hiring the right sales professionals in the IT sector is notoriously difficult. EVIT breaks down the exact traits, interviewing frameworks, and compensation models required to recruit high-performing IT sales representatives.</p>
    <p>Many IT companies make the mistake of hiring generalist salespeople who lack technical empathy. In complex B2B services, a great salesperson must bridge the gap between business value and technical execution.</p>
    <h3>Interview Questions that Reveal Real Capability:</h3>
    <ol>
      <li>How do you research a prospect before the first call?</li>
      <li>Tell me about a deal that was going cold and how you turned it around.</li>
      <li>How do you handle technical objections from a client CTO?</li>
    </ol>` },
    author: 1,
    featured_media: 203,
    categories: [2], // Business
    tags: [12, 14], // IT service providers, Global Sales
    _embedded: {
      author: [{ id: 1, name: "EVIT Team" }],
      "wp:featuredmedia": [{
        id: 203,
        source_url: "/assets/2e869bba8104d15adef7f148438a7cd633820ab4.webp",
        alt_text: "How to hire high-performing salespeople in IT services"
      }]
    }
  },
  {
    id: 104,
    date: "2026-02-06T08:00:00",
    slug: "3-best-3-worst-sales-traits-that-close-deals",
    link: "/blog/3-best-3-worst-sales-traits-that-close-deals",
    title: { rendered: "3 Best & 3 Worst: Sales Traits That Close Deals" },
    excerpt: { rendered: "Close rates depend heavily on sales behavior. Here are the 3 best traits that foster client trust and close deals, and the 3 worst habits that drive prospects away instantly." },
    content: { rendered: `<p>Close rates depend heavily on sales behavior. Here are the 3 best traits that foster client trust and close deals, and the 3 worst habits that drive prospects away instantly.</p>
    <h3>The 3 Best Traits:</h3>
    <ul>
      <li><strong>Active Listening:</strong> Understanding the customer's actual pain point rather than pushing a pre-defined package.</li>
      <li><strong>Impeccable Follow-up:</strong> Keeping clean CRM records and maintaining consistent, helpful contact.</li>
      <li><strong>Technical Empathy:</strong> Being able to understand the engineering challenges of the prospect.</li>
    </ul>
    <h3>The 3 Worst Habits:</h3>
    <ul>
      <li><strong>Overpromising:</strong> Claiming capabilities or delivery speeds that your team cannot sustain.</li>
      <li><strong>Self-Centered Pitching:</strong> Focusing entirely on your company slides instead of the customer's needs.</li>
      <li><strong>Being Pushy:</strong> Forcing a close before the prospect has built trust in your quality and team stability.</li>
    </ul>` },
    author: 1,
    featured_media: 204,
    categories: [2], // Business
    tags: [14], // Global Sales
    _embedded: {
      author: [{ id: 1, name: "EVIT Team" }],
      "wp:featuredmedia": [{
        id: 204,
        source_url: "/assets/74050129a4c3f273bea5483ea83833715a20991b.webp",
        alt_text: "3 Best and Worst Sales Traits That Close Deals"
      }]
    }
  },
  {
    id: 105,
    date: "2025-11-14T08:00:00",
    slug: "expanding-your-it-services-which-market-is-right-for-you",
    link: "/blog/expanding-your-it-services-which-market-is-right-for-you",
    title: { rendered: "Expanding Your IT Services: Which Market Is Right for You?" },
    excerpt: { rendered: "Choosing the correct international market for global expansion is vital. We analyze the differences in client expectations, budgets, and sales cycles between the US, Europe, and Asia." },
    content: { rendered: `<p>Choosing the correct international market for global expansion is vital. We analyze the differences in client expectations, budgets, and sales cycles between the US, Europe, and Asia.</p>
    <p>US clients tend to move fast, appreciate direct sales pitches, and have higher budget ceilings. European clients demand deeper relationships, data compliance (GDPR), and long-term stability.</p>` },
    author: 1,
    featured_media: 205,
    categories: [5], // Business Expansion
    tags: [10, 13], // Business Expansion, IT outsourcing
    _embedded: {
      author: [{ id: 1, name: "EVIT Team" }],
      "wp:featuredmedia": [{
        id: 205,
        source_url: "/assets/b111d46df729ec4085b067064109d2ae015e59ae.webp",
        alt_text: "Expanding Your IT Services"
      }]
    }
  },
  {
    id: 106,
    date: "2025-10-24T08:00:00",
    slug: "how-evit-help-asian-it-companies-win-western-clients",
    link: "/blog/how-evit-help-asian-it-companies-win-western-clients",
    title: { rendered: "How EVIT Help Asian IT Companies Win Western Clients" },
    excerpt: { rendered: "EVIT acts as a bridge connecting high-quality software engineering teams in Vietnam and Asia with global clients in Western countries. Discover our proven B2B sales system." },
    content: { rendered: `<p>EVIT acts as a bridge connecting high-quality software engineering teams in Vietnam and Asia with global clients in Western countries. Discover our proven B2B sales system.</p>
    <p>By establishing outbound sales funnels, coaching Vietnamese founders on Western communication expectations, and defining highly focused service offers, we help IT teams win consistent international deals.</p>` },
    author: 1,
    featured_media: 206,
    categories: [4], // Featured
    tags: [12, 13, 15], // IT service providers, IT outsourcing, Skilled software engineers
    _embedded: {
      author: [{ id: 1, name: "EVIT Team" }],
      "wp:featuredmedia": [{
        id: 206,
        source_url: "/assets/bd57a4ce07e80d25e9d190a5adf99ec8e3c675ec.webp",
        alt_text: "How EVIT Help Asian IT Companies"
      }]
    }
  },
  {
    id: 107,
    date: "2025-10-24T08:00:00",
    slug: "cracking the-western-buyer-code-why-they-dont-buy-from-you",
    link: "/blog/cracking-the-western-buyer-code-why-they-dont-buy-from-you",
    title: { rendered: "Cracking the Western Buyer Code: Why They Don’t Buy from You" },
    excerpt: { rendered: "Understanding the psychological hurdles Western business buyers face. Avoid the common cultural and business communication mistakes that kill international software sales deals." },
    content: { rendered: `<p>Understanding the psychological hurdles Western business buyers face. Avoid the common cultural and business communication mistakes that kill international software sales deals.</p>
    <p>A major friction point is the lack of initiative. Western clients expect their IT partners to proactively propose solutions, suggest improvements, and take ownership of the outcomes, rather than just waiting for tasks.</p>` },
    author: 1,
    featured_media: 207,
    categories: [2], // Business
    tags: [14], // Global Sales
    _embedded: {
      author: [{ id: 1, name: "EVIT Team" }],
      "wp:featuredmedia": [{
        id: 207,
        source_url: "/assets/bf85fcc2a8dcb5d2cf0089bcccd6e4184b693b15.webp",
        alt_text: "Cracking the Western Buyer Code"
      }]
    }
  },
  {
    id: 108,
    date: "2025-10-23T08:00:00",
    slug: "how-much-control-do-you-lose-by-outsourcing-global-bizdev",
    link: "/blog/how-much-control-do-you-lose-by-outsourcing-global-bizdev",
    title: { rendered: "How Much Control Do You Lose by Outsourcing Global BizDev?" },
    excerpt: { rendered: "Many tech founders fear losing control over their reputation and messaging when outsourcing sales. Learn how to construct a hybrid sales team with transparent, measurable KPIs." },
    content: { rendered: `<p>Many tech founders fear losing control over their reputation and messaging when outsourcing sales. Learn how to construct a hybrid sales team with transparent, measurable KPIs.</p>
    <p>With correct tooling, a shared B2B sales playbook, and regular status check-ins, you maintain 100% visibility over prospect relationships while freeing the founder's time to focus on delivery.</p>` },
    author: 1,
    featured_media: 208,
    categories: [4], // Featured
    tags: [13, 14], // IT outsourcing, Global Sales
    _embedded: {
      author: [{ id: 1, name: "EVIT Team" }],
      "wp:featuredmedia": [{
        id: 208,
        source_url: "/assets/fc96753d4e50d1a5a918994758ba91d5de42b045.webp",
        alt_text: "Outsourcing Global BizDev"
      }]
    }
  },
  {
    id: 109,
    date: "2025-10-23T08:00:00",
    slug: "why-the-next-generation-of-it-companies-will-be-hybrid",
    link: "/blog/why-the-next-generation-of-it-companies-will-be-hybrid",
    title: { rendered: "Why the Next Generation of IT Companies Will Be Hybrid" },
    excerpt: { rendered: "The classic offshore-only IT outsourcing agency is dying. Successful technology companies are transitioning to hybrid teams with onshore consulting and offshore delivery models." },
    content: { rendered: `<p>The classic offshore-only IT outsourcing agency is dying. Successful technology companies are transitioning to hybrid teams with onshore consulting and offshore delivery models.</p>
    <p>This allows businesses to enjoy the cost-efficiency of global software engineering pools (like Vietnam) while providing high-touch project management and account growth directly in client markets.</p>` },
    author: 1,
    featured_media: 209,
    categories: [2], // Business
    tags: [12, 13], // IT service providers, IT outsourcing
    _embedded: {
      author: [{ id: 1, name: "EVIT Team" }],
      "wp:featuredmedia": [{
        id: 209,
        source_url: "/assets/3fba5de9dc3c6d1da2c7409aac29a148fb465e44.webp",
        alt_text: "Hybrid IT Delivery Model"
      }]
    }
  },
  {
    id: 110,
    date: "2025-10-22T08:00:00",
    slug: "why-most-it-ceos-fail-at-sales-and-how-to-fix-it",
    link: "/blog/why-most-it-ceos-fail-at-sales-and-how-to-fix-it",
    title: { rendered: "Why Most IT CEOs Fail at Sales (and How to Fix It)" },
    excerpt: { rendered: "IT founders often rely too long on referrals and friends networks. Learn how to construct a predictable outbound B2B sales system that runs without the CEO doing everything." },
    content: { rendered: `<p>IT founders often rely too long on referrals and friends networks. Learn how to construct a predictable outbound B2B sales system that runs without the CEO doing everything.</p>
    <p>Transitioning from founder-led organic growth to standard sales processes requires clear quotas, automated lead generation databases, and a disciplined approach to B2B outbound campaign management.</p>` },
    author: 1,
    featured_media: 210,
    categories: [2], // Business
    tags: [11, 14], // Business Growth, Global Sales
    _embedded: {
      author: [{ id: 1, name: "EVIT Team" }],
      "wp:featuredmedia": [{
        id: 210,
        source_url: "/assets/1508aab01b3a4fca97b3b1ccfa52ad0ca9d80acb.webp",
        alt_text: "Why Most IT CEOs Fail at Sales"
      }]
    }
  }
];



export function decodeHtmlEntities(str: string): string {
  if (!str) return '';
  const entities: { [key: string]: string } = {
    '&#8211;': '–',
    '&#8212;': ' - ',
    '&#8216;': '‘',
    '&#8217;': '’',
    '&#8220;': '“',
    '&#8221;': '”',
    '&#038;': '&',
    '&amp;': '&',
    '&#38;': '&',
    '&#8230;': '…',
    '&quot;': '"',
    '&#34;': '"',
    '&#039;': "'",
    '&#39;': "'",
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>'
  };
  return str.replace(/&#?\w+;/g, match => entities[match] || match);
}
