export interface Outcome {
  title: string;
  bullet: string;
}

export interface ClientInfo {
  logo: string;
  name: string;
  country: string;
  industry: string;
  description: string;
  industryExp: string;
  globalDelivery: string;
  enterpriseCapability: string;
}

export interface CaseStudyData {
  slug: string;
  heroTitle: string;
  heroBg: string;
  title: string;
  subheading: string;
  client: ClientInfo;
  problem: {
    bullets: string[];
  };
  solution: string[];
  roadmap: string[];
  outcome: Outcome[];
}

export const caseStudiesData: CaseStudyData[] = [
  {
    slug: "gmo-runsystem",
    heroTitle: "EXPANSION TO THE APAC MARKET",
    heroBg: "/assets/1508aab01b3a4fca97b3b1ccfa52ad0ca9d80acb.webp",
    title: "Global Market Expansion Consulting",
    subheading: "A real-world case study on global market entry for an IT services company, covering strategy design, sales process, and client acquisition.",
    client: {
      logo: "/assets/clients/company-1.webp",
      name: "GMO-Z.com RUNSYSTEM",
      country: "Viet Nam / Japan",
      industry: "Information technology",
      description: "GMO-Z.com RUNSYSTEM is an IT services company under the GMO Internet Group, providing software development, system integration, and digital transformation solutions to global clients. With strong engineering expertise and disciplined delivery, the company supports scalable and sustainable growth in international markets.",
      industryExp: "20+ years on-going",
      globalDelivery: "Cross-Border",
      enterpriseCapability: "Large-scale systems",
    },
    problem: {
      bullets: [
        "For over a year, GMO Runsystem invested significant time and resources trying to enter a new foreign market, but the project yielded zero results.",
        "From an inability to generate opportunities to a lack of market understanding, strategy, and more, GMO Runsystem faced major challenges at every stage of the sales process and beyond."
      ]
    },
    solution: [
      "Conduct deep company analysis",
      "Conduct market research and design a market entry strategy.",
      "Build a Global Expansion master plan",
      "Design new sales process USP & ICP",
      "Train sales team",
      "Consult directly and solve arising issues.",
      "Design and lead execution of campaigns.",
      "Delivery team and managers training"
    ],
    roadmap: [
      "Deep company analysis",
      "Deep market research",
      "Market entry strategy",
      "Master plan & sales process",
      "Create sales campaigns",
      "Design unique service offering to become more competitive in the market"
    ],
    outcome: [
      {
        title: "FASTER REVENUE IMPACT",
        bullet: "The first contract was signed in under 3 months, followed by 3 additional contracts in Month 4."
      },
      {
        title: "AI-TRACKED SALES PIPELINE",
        bullet: "New strategies and AI-supported tracking created full visibility across leads, opportunities, and deal stages."
      },
      {
        title: "SALES TEAM INDEPENDENCE",
        bullet: "The team now executes key sales activities independently, from sourcing & follow-ups to closing."
      },
      {
        title: "SUSTAINABLE GLOBAL GROWTH",
        bullet: "This new approach enables GMO Runsystem to consistently acquire foreign clients and scale in international markets."
      }
    ]
  },
  {
    slug: "reco-manpower",
    heroTitle: "SETTING UP A NEW BUSINESS MODEL AND EXPANSION TO EU",
    heroBg: "/assets/74050129a4c3f273bea5483ea83833715a20991b.webp",
    title: "European Market Entry Preparation",
    subheading: "Prepared for European market entry by building a structured go-to-market model, enabling the internal team, and aligning services with European client expectations.",
    client: {
      logo: "/assets/clients/company-3.jpg",
      name: "Reco Manpower",
      country: "Viet Nam",
      industry: "Information technology",
      description: "Reco Manpower is an IT-focused manpower and HR services provider, helping technology companies build, scale, and manage high-quality teams in Vietnam. With deep market knowledge and structured recruitment processes, Reco supports both fast-growing startups and large enterprises with reliable, long-term talent solutions.",
      industryExp: "15+ years on-going",
      globalDelivery: "Cross-Border",
      enterpriseCapability: "Enterprise-Ready Workforce",
    },
    problem: {
      bullets: [
        "RECO identified strong demand for IT services in the EU and aimed to expand into the market. However, the company lacked a clear go-to-market model and sufficient insight into the expectations and buying behavior of European clients.",
        "This gap made it difficult to design a compelling service offering and effectively engage EU customers."
      ]
    },
    solution: [
      "Build and implement model: Provide best solution, which fit with company strengths",
      "Train and prepare Client Team: Build tools and transfer knowledge so RECO team was ready to work directly with European clients directly",
      "Find client: Provide client and support with whole process from beginning to signing contract."
    ],
    roadmap: [
      "Research and understand capabilities of company",
      "Implement suitable business model and team training",
      "Support in finding clients and signing contract"
    ],
    outcome: [
      {
        title: "NEW BUSINESS MODEL DESIGNED",
        bullet: "A clear and scalable business model was developed to replace the existing, ineffective approach."
      },
      {
        title: "VALUE PROPOSITION DEFINED",
        bullet: "Ideal client profile and unique service offering were clarified to support focused market entry."
      },
      {
        title: "MARKET ENTRY EXECUTED",
        bullet: "A go-to-market strategy was implemented, including sales team training and readiness."
      },
      {
        title: "UK MARKET ENTRY ACHIEVED",
        bullet: "Successfully entered the UK market and closed a major client, generating recurring revenue. Signed 1 contract with 2 sales people trained and deployed."
      }
    ]
  },
  {
    slug: "nfq",
    heroTitle: "APAC MARKET ENTRY & SALES DEVELOPMENT",
    heroBg: "/assets/7c21ecf1796d40be0fbfd3cd297c2396db71629c.webp",
    title: "APAC Market Entry & Sales Development",
    subheading: "Entered the APAC market by building a dedicated sales team, implementing a structured sales process, and executing a localized market entry strategy.",
    client: {
      logo: "/assets/clients/company-2.jpg", // Using company-2.jpg as fallback logo
      name: "NFQ",
      country: "Lithuania",
      industry: "Information technology",
      description: "NFQ has been a leading player in the market for twenty years, with offices in seven countries across Europe, the Middle East, and Asia. With German and Latvian roots, NFQ is an IT outsourcing firm that is well established in European markets and has a desire to develop in the APAC region.",
      industryExp: "23+ years on-going",
      globalDelivery: "Cross-Border",
      enterpriseCapability: "Scalable Enterprise Systems",
    },
    problem: {
      bullets: [
        "NFQ faced significant barriers in entering the APAC market due to the absence of a dedicated sales team and limited understanding of local business practices.",
        "In addition, the lack of a structured sales process and experienced sales leadership made it difficult to develop and execute an effective market entry strategy."
      ]
    },
    solution: [
      "Conduct deep company analysis",
      "Conduct market research and design market entry strategy.",
      "Build sales campaigns",
      "Create sales process",
      "Train, consulting and mentoring of sales team and new appointed CEO",
      "Consult directly and solve arising issues.",
      "Design USP & USO",
      "Support in building team - hire new members"
    ],
    roadmap: [
      "Deep company analysis",
      "Deep market research",
      "Master plan & sales process",
      "Create sales campaigns",
      "Design USP and USO",
      "Market entry",
      "Client acquisition"
    ],
    outcome: [
      {
        title: "ESTABLISHED SALES TEAM",
        bullet: "A dedicated sales team was successfully built to support APAC market entry. Total 4 Sales Representatives."
      },
      {
        title: "APAC MARKET ENTRY ACHIEVED",
        bullet: "Entry into key markets including Korea, Australia, Japan, and Singapore."
      },
      {
        title: "LOCALIZED SALES APPROACH",
        bullet: "A sales approach tailored to Southeast Asia and the broader APAC region was developed."
      },
      {
        title: "INDEPENDENT SALES OPERATIONS",
        bullet: "A self-sustaining and independent sales team was built and scaled."
      }
    ]
  },
  {
    slug: "hive-tech",
    heroTitle: "EU MARKET ENTRY & BUSINESS MODEL SETUP",
    heroBg: "/assets/bd57a4ce07e80d25e9d190a5adf99ec8e3c675ec.webp",
    title: "Sales Team Enablement & Western Market Entry Preparation",
    subheading: "Expanded into Western markets by training a young sales team, designing a global sales strategy, and supporting real client deal execution.",
    client: {
      logo: "/assets/clients/company-4.jpg",
      name: "HiveTech Solution",
      country: "Viet Nam",
      industry: "Information technology",
      description: "HiveTech Solution is a Vietnam-based IT services company providing software development, IT infrastructure, and digital technology solutions for businesses. The company focuses on delivering secure, scalable systems that help organizations improve operations and grow sustainably.",
      industryExp: "5+ years on-going",
      globalDelivery: "Cross-Border",
      enterpriseCapability: "Scalable IT Systems",
    },
    problem: {
      bullets: [
        "HiveTech is an IT outsourcing company from Vietnam that wants to develop its presence globally.",
        "Due to relatively inexperienced and new sales team members, HiveTech was lacking a specific plan to develop globally."
      ]
    },
    solution: [
      "Design Ad Hoc training suitable with sales team members and strategy of company",
      "Train team members",
      "Help to build strategy to enter global markets",
      "Support in finding clients",
      "Participate in meetings",
      "Consult directly and solve arising issues.",
      "Consultant take position of standing manager and lead team for a period of 3 months"
    ],
    roadmap: [
      "Deep company analysis",
      "Design training and train team members",
      "Design and implement sales strategy",
      "Approach client - support, consultant, pitch, negotiate and help to win contract",
      "On-going consulting sales campaigns",
      "Consultant takes position of standing manager for sales team and train new manager"
    ],
    outcome: [
      {
        title: "STRATEGIC PARTITION",
        bullet: "Acting not only as a service provider but also as a partner to Hivetech."
      },
      {
        title: "CONSULTANT SUPPORT",
        bullet: "Utilization of a foreign consultant to support business development activities."
      },
      {
        title: "CLIENT ENGAGEMENT",
        bullet: "Close collaboration with the Hivetech team to meet clients and build trust with potential customers worldwide."
      }
    ]
  },
  {
    slug: "solazu",
    heroTitle: "EXPANSION TO THE US MARKET",
    heroBg: "/assets/bf85fcc2a8dcb5d2cf0089bcccd6e4184b693b15.webp",
    title: "Sales & Marketing Team Build-up and Deal Execution for Global Growth",
    subheading: "Built a structured sales and marketing organization with clear roles, defined processes, and execution support to win global client contracts.",
    client: {
      logo: "/assets/clients/solazu_logo.jpg",
      name: "Solazu",
      country: "Viet Nam",
      industry: "Information technology",
      description: "Solazu is a Vietnam-based technology company that delivers AI-powered software and digital solutions to help businesses optimize operations, accelerate development, and unlock data-driven insights. The company combines advanced AI workflows with cross-border delivery and scalable enterprise-grade systems to support clients at every stage of digital transformation.",
      industryExp: "9+ years on-going",
      globalDelivery: "Cross-Border",
      enterpriseCapability: "Scalable AI Systems",
    },
    problem: {
      bullets: [
        "Solazu was founded by a software development specialist with limited experience in sales and marketing. Client acquisition relied heavily on the founder’s personal network, creating significant business risk.",
        "The absence of dedicated sales and marketing leadership and a structured process hindered sustainable growth and restricted expansion into global markets."
      ]
    },
    solution: [
      "Create a master plan that outlines the full recruitment process as well as detailed information about training and a market expansion plan.",
      "Recruitment, training, client acquisition, and new process implementation.",
      "Testing process and winning new client: Provide client support with the whole process from lead generation to signing contract, participating in client meetings, preparing proposals, and contract negotiations."
    ],
    roadmap: [
      "Research and understand capabilities of company",
      "Recruitment and team training",
      "Creating process, RACI, R&R",
      "Implement process and winning new clients following process"
    ],
    outcome: [
      {
        title: "SALES ORGANIZATION ESTABLISHED",
        bullet: "A dedicated sales team and structured sales process were built, removing the founder from day-to-day sales operations."
      },
      {
        title: "FOUNDER DEPENDENCY REDUCED",
        bullet: "Sales execution was handled independently, allowing leadership to focus on oversight rather than deal management."
      },
      {
        title: "REVENUE DIVERSIFICATION",
        bullet: "A new client was acquired, reducing dependency on a single key account."
      },
      {
        title: "US CONTRACT SECURED",
        bullet: "Successfully signed 1 contract with a new client from the US in under 3 months from kick-off."
      }
    ]
  },
  {
    slug: "nkk-tech",
    heroTitle: "DEVELOPMENT OF BUSINESS IN THE US MARKET",
    heroBg: "/assets/ca1bcf1b3b6f612520edaed83e8927ec556a5961.webp",
    title: "Develop of business in the US market",
    subheading: "Developed the US market by establishing a scalable sales and marketing foundation and executing a structured global market expansion strategy.",
    client: {
      logo: "/assets/clients/nkktech_logo.jpg",
      name: "NKKTech",
      country: "Viet Nam",
      industry: "Software Development",
      description: "NKKTech is a Vietnam-based IT firm specializing in AI-driven software solutions with 20+ employees. With strong roots in Japan and expertise in E-commerce, Healthcare, Media, and Automation, the company targets the US, Singapore, and Australia to build a scalable global sales system.",
      industryExp: "7+ years on-going",
      globalDelivery: "Cross-Border",
      enterpriseCapability: "Scalable Enterprise Systems",
    },
    problem: {
      bullets: [
        "NKKTech operated without a dedicated sales function, with client development and market outreach primarily managed at the leadership level. The company’s market presence was largely concentrated in Japan, with limited exposure to broader international markets.",
        "In parallel, marketing activities, brand positioning, and structured training were still in an early stage, which limited the company’s ability to scale sales activities and support long-term growth."
      ]
    },
    solution: [
      "Company Audit & Deep Analysis",
      "Market Expansion Planning",
      "Define ICP, USP, and USO",
      "Sales and Marketing Strategy formulation",
      "Sales Team Development",
      "Scalability Framework implementation",
      "Risk Mitigation"
    ],
    roadmap: [
      "Deep company analysis",
      "Deep market research",
      "Master plan & sales process implementation",
      "Design USP and USO",
      "Market entry",
      "Client acquisition"
    ],
    outcome: [
      {
        title: "US MARKET EXPANSION",
        bullet: "Guided NKK’s full expansion into the US over a six-month period."
      },
      {
        title: "DEAL CONVERSION",
        bullet: "Achieved a strong client conversion rate, resulting in 1 signed contract and multiple ongoing deals."
      },
      {
        title: "SALES AUTOMATION",
        bullet: "Automated the entire sales process to improve execution and scalability."
      },
      {
        title: "PARTNERSHIP EXTENSION",
        bullet: "The partnership was extended for an additional two years following the engagement."
      }
    ]
  }
];
