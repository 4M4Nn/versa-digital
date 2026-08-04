import type {
  NavLink,
  ServiceStory,
  PricingPackage,
  SeoPackage,
  CaseStudy,
  Testimonial,
  BlogPost,
  FaqItem,
  Founder,
  FullService,
} from "@/types";

export const siteConfig = {
  name: "Versa Digital",
  type: "AI-Powered Digital Marketing Agency",
  tagline: "Strategize. Create. Scale.",
  subTagline: "Kerala's First AEO Management Agency",
  phone: "+91 9746733133",
  phoneHref: "+919746733133",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919746733133",
  email: "hello@versadigital.in",
  website: "www.versadigital.in",
  address: "Jogeo Building, Chembumukku, Kakkanad, Kochi 682021",
  mapQuery: "Jogeo Building, Chembumukku, Kakkanad, Kochi, Kerala 682021",
  partOf: "Versa Growth Ventures",
  instagramUrl: "https://instagram.com/versadigital.in",
  facebookUrl: "https://facebook.com/versadigital.in",
  linkedinUrl: "https://linkedin.com/company/versa-digital",
  youtubeUrl: "https://youtube.com/@versadigital",
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "SEO", href: "/seo" },
  { label: "AEO", href: "/aeo" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const trustBadges = [
  { icon: "star", text: "Kerala's #1 AEO Agency" },
  { icon: "bot", text: "AI-Powered Marketing" },
  { icon: "trending", text: "Proven ROI Results" },
];

export const services: ServiceStory[] = [
  {
    id: "seo-aeo",
    slug: "ai-seo-aeo",
    number: "01",
    label: "AI SEO + AEO",
    headline: ["Rank on Google.", "Rank on ChatGPT.", "Rank everywhere."],
    paragraphs: [
      "Most agencies only optimize for Google. We optimize for every search surface — Google, ChatGPT, Perplexity, Gemini, and voice search.",
      "Kerala's first AEO (Answer Engine Optimization) agency. We make your business the answer AI gives.",
    ],
    results: [
      "3x organic traffic in 90 days",
      "Top 3 Google rankings",
      "Featured in AI search answers",
      "Voice search optimization",
    ],
    background: "light",
    reversed: false,
    ctaLabel: "Get Free SEO Audit →",
    ctaHref: "/seo",
  },
  {
    id: "smm",
    slug: "social-media-marketing",
    number: "02",
    label: "Social Media Marketing",
    headline: ["Content that", "stops the scroll."],
    paragraphs: [
      "We create content that your audience actually wants to see. Not generic posts. Premium visual storytelling for your brand.",
    ],
    results: [
      "5x average engagement increase",
      "10K+ followers in 90 days",
      "Daily content calendar",
      "AI-powered caption writing",
    ],
    background: "dark",
    reversed: true,
    ctaLabel: "Explore Social Media Marketing →",
    ctaHref: "/smm",
  },
  {
    id: "performance",
    slug: "performance-marketing",
    number: "03",
    label: "Performance Marketing",
    headline: ["Every rupee", "tracked. Every", "result guaranteed."],
    paragraphs: [
      "Meta Ads. Google Ads. LinkedIn Ads. We run data-driven campaigns that bring real customers — not just clicks.",
    ],
    results: [
      "4x average ROAS",
      "₹45 average cost per lead",
      "Real-time campaign optimization",
      "Weekly performance reports",
    ],
    background: "pale",
    reversed: false,
    ctaLabel: "Get a Free Ads Audit →",
    ctaHref: "/services",
  },
  {
    id: "content-video",
    slug: "content-video",
    number: "04",
    label: "Content + Video",
    headline: ["Scroll-stopping", "content. Every day."],
    paragraphs: [
      "Premium social media posters, short-form reels, and AI-generated video content — produced consistently, every single week.",
    ],
    results: [
      "Premium social media posters",
      "Short video reels production",
      "AI-generated video content",
      "Professional camera shoots",
    ],
    background: "dark",
    reversed: true,
    ctaLabel: "See Our Content Work →",
    ctaHref: "/portfolio",
  },
];

export const growthPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹15,000",
    period: "/month",
    badge: "STARTER MONTHLY",
    description: "Perfect for startups and local businesses.",
    features: [
      { key: "posters", text: "8 Premium Social Media Posters", included: true },
      { key: "reels", text: "3 Short Reels", included: true },
      { key: "social-mgmt", text: "Social Media Management (Meta)", included: true },
      { key: "meta-ads", text: "Meta Ads Setup (up to ₹30,000)", included: true },
      { key: "linkedin", text: "LinkedIn Management", included: false },
      { key: "youtube", text: "YouTube Management", included: false },
      { key: "gbp", text: "Google Business Profile", included: false },
      { key: "special-day", text: "Special Day Creatives", included: false },
      { key: "seo-aeo", text: "SEO / AEO", included: false },
      { key: "ai-video", text: "AI Video Generation", included: false },
      { key: "camera-shoot", text: "Camera Shoot", included: false },
    ],
    idealFor: ["New Businesses", "Product Launches", "Brand Awareness", "Initial Online Presence"],
    ctaLabel: "Get Started",
    style: "outline",
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹25,000",
    period: "/month",
    badge: "MOST POPULAR",
    description: "Our Most Popular Plan.",
    features: [
      { key: "posters", text: "16 Premium Posters", included: true },
      { key: "reels", text: "6 Reels", included: true },
      { key: "social-mgmt", text: "Social Media Management (Meta)", included: true },
      { key: "meta-ads", text: "Meta Ads (up to ₹1,00,000)", included: true },
      { key: "linkedin", text: "LinkedIn Management", included: true },
      { key: "youtube", text: "YouTube Management", included: true },
      { key: "gbp", text: "Google Business Profile", included: true },
      { key: "special-day", text: "Special Day Creatives", included: true },
      { key: "seo-aeo", text: "SEO / AEO", included: true },
      { key: "ai-video", text: "AI Generated Videos (10sec + 20sec)", included: true },
      { key: "camera-shoot", text: "Camera Shoot", included: false },
    ],
    idealFor: ["Growing Businesses", "Monthly Lead Generation", "Consistent Branding", "Higher Engagement"],
    ctaLabel: "Get Started",
    style: "filled",
    featured: true,
  },
  {
    id: "unlimited",
    name: "Unlimited",
    price: "₹50,000",
    period: "/month",
    badge: "PREMIUM MONTHLY",
    description: "Complete Digital Marketing Solution.",
    features: [
      { key: "posters", text: "Unlimited Posters", included: true },
      { key: "reels", text: "10 Premium Reels", included: true },
      { key: "social-mgmt", text: "Complete Social Media Management", included: true },
      { key: "meta-ads", text: "Unlimited Meta Ads Management", included: true },
      { key: "linkedin", text: "LinkedIn Management", included: true },
      { key: "youtube", text: "YouTube Management", included: true },
      { key: "gbp", text: "Google Business Profile", included: true },
      { key: "special-day", text: "Special Day Creatives", included: true },
      { key: "seo-aeo", text: "SEO / AEO", included: true },
      { key: "ai-video", text: "AI Generated Videos", included: true },
      { key: "camera-shoot", text: "4 Professional Camera Shoots/Month", included: true },
    ],
    idealFor: ["Established Brands", "High Growth Companies", "Multi-Platform Marketing", "Complete Digital Presence"],
    ctaLabel: "Get Started",
    style: "dark",
  },
];

export const allPlansInclude = [
  { icon: "palette", text: "Branding" },
  { icon: "pen", text: "Creative" },
  { icon: "megaphone", text: "Marketing" },
  { icon: "smartphone", text: "Platform Management" },
  { icon: "search", text: "SEO & Visibility" },
  { icon: "chart", text: "Reporting" },
];

export const seoPackages: SeoPackage[] = [
  {
    id: "seo-basic",
    name: "Basic",
    price: "₹2,999",
    period: "/month",
    features: [
      "Keyword research (10 keywords)",
      "On-page optimization",
      "Google Search Console setup",
      "Monthly report",
    ],
    idealFor: "Small local businesses",
  },
  {
    id: "seo-growth",
    name: "Growth",
    price: "₹6,999",
    period: "/month",
    badge: "MOST POPULAR",
    features: [
      "25 keywords",
      "On-page + off-page SEO",
      "AEO optimization (ChatGPT/Perplexity)",
      "Link building",
      "Bi-weekly reports",
      "Google Business optimization",
    ],
    idealFor: "Growing businesses",
  },
  {
    id: "seo-agency",
    name: "Agency",
    price: "₹14,999",
    period: "/month",
    features: [
      "Unlimited keywords",
      "Full AEO management",
      "Technical SEO audit",
      "Content strategy",
      "Weekly reports",
      "Dedicated SEO manager",
      "Competitor analysis",
    ],
    idealFor: "Established brands",
  },
];

export const whyPillars = [
  "Strategy First",
  "AI Powered Marketing",
  "Premium Creative Design",
  "Performance Driven Campaigns",
  "Monthly Growth Reports",
  "Dedicated Support",
  "Fast Turnaround",
  "Scalable Solutions",
];

export const caseStudies: CaseStudy[] = [
  {
    id: "ipb-kochi",
    client: "IPB Kochi",
    service: "Social Media + AEO",
    result: "Instagram reach 5x in 60 days. Ranked on AI search for banking courses.",
    metric: "5x",
    metricLabel: "Reach",
  },
  {
    id: "brew-bloom",
    client: "Brew & Bloom Coffee",
    service: "Full Digital Marketing",
    result: "3x leads. Website traffic doubled. WhatsApp inquiries up 200%.",
    metric: "3x",
    metricLabel: "Leads",
  },
  {
    id: "future-optima",
    client: "Future Optima IT",
    service: "SEO + Content",
    result: "200+ monthly organic leads. Top 3 ranking for IT courses Kerala.",
    metric: "200+",
    metricLabel: "Leads",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Arjun Menon",
    business: "Brew & Bloom Coffee",
    location: "Kochi",
    quote:
      "Versa Digital didn't just manage our Instagram — they rebuilt how customers discover us. Our WhatsApp enquiries doubled within two months.",
    rating: 5,
  },
  {
    name: "Fathima Rasheed",
    business: "IPB Kochi",
    location: "Kakkanad",
    quote:
      "We had no idea what AEO even meant before Versa Digital explained it. Now we show up when people ask ChatGPT about banking courses in Kerala.",
    rating: 5,
  },
  {
    name: "Vishnu Prasad",
    business: "Future Optima IT",
    location: "Ernakulam",
    quote:
      "The SEO team is genuinely different — they report weekly, they explain everything, and the organic leads have been consistent every single month.",
    rating: 5,
  },
  {
    name: "Meera Krishnan",
    business: "Meera's Boutique",
    location: "Thrissur",
    quote:
      "Our reels finally look premium instead of like every other boutique on Instagram. The team understands our brand better than we do sometimes.",
    rating: 5,
  },
];

export const founders: Founder[] = [
  {
    name: "Sandeep Neelamana",
    role: "Operations Head",
    bio: "Leads operations and client delivery, ensuring every Versa Digital campaign runs on strategy, not guesswork.",
  },
  {
    name: "Sreenivasa Prabhu",
    role: "Finance Head",
    bio: "Brings entrepreneurial and cross-industry financial expertise, keeping Versa Digital's growth sustainable and client investment accountable.",
  },
  {
    name: "Aman Faisal S",
    role: "Marketing Head",
    bio: "Drives Versa Digital's own brand and product marketing strategy — the same AI-powered playbook used for every client.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-aeo-why-kerala-businesses-need-it",
    title: "What is AEO and Why Kerala Businesses Need It",
    excerpt:
      "Answer Engine Optimization is quietly becoming more important than traditional SEO. Here's what it means for your business.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    category: "AEO",
    date: "July 2026",
    author: "Versa Digital Team",
    body: [
      "For the past two decades, ranking on Google was the entire game. Businesses fought over the top 10 blue links, invested in backlinks, and obsessed over keyword density. That game hasn't disappeared — but a new one has quietly started running alongside it, and most Kerala businesses haven't noticed yet.",
      "Answer Engine Optimization (AEO) is the practice of optimizing your business's online presence so that AI systems like ChatGPT, Perplexity, and Google's AI Overviews can understand, trust, and recommend you as a direct answer to a user's question. When someone asks ChatGPT 'what's the best digital marketing agency in Kochi', the AI doesn't crawl a results page and let the user pick — it gives one confident answer, synthesized from the most structured, trustworthy, and relevant information it can find.",
      "This is a fundamentally different game from traditional SEO. Ranking #1 on Google means being one of ten options a user scans. Being the answer an AI engine gives means being the ONLY option a user hears. For a local business, that difference is enormous — it's the difference between being discovered and being handed the customer directly.",
      "So how does AEO actually work in practice? It starts with structured, fact-based content: clear service descriptions, consistent business information across every platform, schema markup that machines can parse unambiguously, and content written to directly answer the questions your customers are actually asking, rather than content stuffed with keywords for search engine crawlers. AI models reward clarity and consistency, not keyword games.",
      "It also means being present in the sources AI models actually trust — structured directories, Google Business Profile, review platforms, and industry-specific listings, all kept consistent and updated. An AI engine cross-references multiple sources before it commits to an answer; if your business information is inconsistent or thin across the web, you simply won't be trusted enough to be recommended.",
      "Kerala's digital marketing landscape hasn't caught up to this shift yet, which is exactly the opportunity. Versa Digital is Kerala's first agency to build AEO into every client engagement — not as an add-on, but as a core discipline alongside traditional SEO. The businesses that invest in this now, while most competitors are still fighting over Google's page one, will own the answer when customers start asking AI instead of typing a search query.",
      "If you're running a business in Kerala and you've never checked what ChatGPT or Perplexity says when someone asks about your industry in your city, that's the first thing worth doing today. You might be surprised — or you might be invisible. Either way, now is the time to find out.",
    ],
  },
  {
    slug: "how-ai-is-changing-digital-marketing-2026",
    title: "How AI is Changing Digital Marketing in 2026",
    excerpt:
      "From content generation to ad optimization, AI has moved from novelty to necessity. Here's what's actually working right now.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    category: "AI Marketing",
    date: "July 2026",
    author: "Versa Digital Team",
    body: [
      "Two years ago, 'AI marketing' mostly meant a chatbot generating slightly awkward Instagram captions. In 2026, that framing feels almost quaint. AI now touches nearly every stage of a marketing campaign — research, creative production, ad optimization, and reporting — and the agencies that haven't adapted are visibly falling behind on cost and speed.",
      "The most immediate shift has been in content velocity. AI-assisted video generation and design tools let a small creative team produce what used to require triple the headcount — not by replacing human judgment, but by removing the repetitive production work around it. At Versa Digital, this is how we deliver 10-second and 20-second AI-generated video content as a standard part of our Growth and Unlimited packages, work that would have been cost-prohibitive for most local businesses just a year or two ago.",
      "On the paid media side, AI-driven bid optimization inside Meta and Google's ad platforms has matured to the point where manual bid management is often actively worse than letting the algorithm optimize toward a stated goal — provided the account is fed the right conversion signals and creative variety. The agency's job has shifted from tweaking bids to engineering the inputs: clean tracking, strong creative testing, and clear campaign structure that gives the AI something good to optimize.",
      "Search behavior itself is the biggest change. As covered in our piece on AEO, a growing share of discovery now happens through AI answer engines rather than traditional search results pages. This means marketing strategy in 2026 has to account for two audiences simultaneously: human users scrolling a feed, and AI models parsing structured information to decide who to recommend.",
      "None of this makes the fundamentals obsolete. Good marketing still starts with a clear understanding of the customer, a distinctive brand voice, and an honest product. What's changed is how much of the execution can now be accelerated by AI — and how much competitive advantage goes to businesses whose marketing partner actually knows how to use these tools well, rather than treating them as a gimmick.",
      "For Kerala businesses specifically, this shift is a genuine equalizer. AI tools mean a local business no longer needs a Bangalore-sized marketing budget to produce premium creative and run data-driven campaigns. The playing field is more level than it's ever been — but only for the businesses willing to work with a partner who's actually built for this era of marketing, not still running 2020's playbook with 2026's price tag.",
    ],
  },
  {
    slug: "meta-ads-vs-google-ads-which-is-better",
    title: "Meta Ads vs Google Ads: Which is Better for You",
    excerpt:
      "The honest answer depends entirely on your business and your customer's buying journey. Here's how to decide.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1200&auto=format&fit=crop",
    category: "Performance Marketing",
    date: "June 2026",
    author: "Versa Digital Team",
    body: [
      "It's one of the most common questions we hear from new clients: should our budget go to Meta Ads or Google Ads? The honest answer is that it depends on how your specific customer actually makes buying decisions — and most businesses benefit from understanding both before committing a budget to either.",
      "Google Ads captures demand. Someone searching 'best interior designer in Kochi' already knows they want an interior designer — they're actively looking, and a well-targeted search ad puts you directly in front of that intent. This makes Google Ads extremely effective for businesses with clear, searchable intent: services people actively look for when they need them, like plumbers, lawyers, clinics, or IT courses.",
      "Meta Ads (Facebook and Instagram) creates demand. Your audience isn't searching for you — they're scrolling. A strong Meta campaign interrupts that scroll with a compelling offer or story and creates interest that didn't exist a moment before. This makes it exceptionally effective for visually driven products, lifestyle brands, food and beverage businesses, fashion, and anything where seeing the product is what sells it.",
      "Cost structures differ meaningfully too. Google Ads costs are driven by keyword competition — a lawyer competing for 'best divorce lawyer Kochi' pays significantly more per click than a bakery running Meta ads to a local audience. For lower-consideration, visually appealing products, Meta often delivers a lower cost per lead. For high-value, considered purchases where the customer is already actively searching, Google Ads' intent-capture usually justifies the higher cost per click.",
      "In practice, the businesses that get the best results almost never choose one exclusively. A typical effective structure uses Meta Ads to build awareness and warm an audience through content and retargeting, while Google Ads captures the high-intent searches from people who've heard of the brand or are actively comparing options. The two channels compound each other rather than compete.",
      "At Versa Digital, every Performance Marketing engagement starts with an honest audit of where your specific customer's buying journey actually happens — not a generic recommendation. Our Growth and Unlimited packages include both Meta and Google-aligned strategy precisely because most Kerala businesses need a blend, not a binary choice. If you're unsure where your budget should go first, that's exactly the kind of question a free strategy call is built to answer.",
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What makes Versa Digital different from other agencies in Kerala?",
    answer:
      "We're Kerala's first agency to offer AEO (Answer Engine Optimization) alongside traditional SEO, meaning we optimize for Google AND for ChatGPT, Perplexity, and other AI search tools. We also combine AI-powered production with strategy-first thinking, so you get premium creative at a pace and price traditional agencies can't match.",
  },
  {
    question: "What is AEO and why does it matter?",
    answer:
      "Answer Engine Optimization is the practice of making your business the answer AI tools give when someone asks a question — like 'best digital marketing agency in Kochi'. As more people search through ChatGPT and Perplexity instead of Google, being the AI's trusted answer matters as much as ranking #1 on Google.",
  },
  {
    question: "How much does it cost to work with Versa Digital?",
    answer:
      "Our Digital Growth Plans start at ₹15,000/month for the Starter package, and range up to ₹25,000 (Growth) and ₹50,000 (Unlimited). SEO-only packages start at ₹2,999/month. See our Packages page for full details.",
  },
  {
    question: "Do you require a long-term contract?",
    answer:
      "All our Digital Growth Plans — Starter, Growth, and Unlimited — are monthly with no long-term lock-in required, though most clients see the strongest results after 3-6 months of consistent execution.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Social media and content results are typically visible within the first month. SEO and AEO results build over 60-90 days as search engines and AI models re-index and build trust in your content. Performance marketing (ads) can generate leads within the first week of launch.",
  },
  {
    question: "Which platforms do you manage?",
    answer:
      "Instagram, Facebook, LinkedIn, YouTube, and Google Business Profile, plus Meta Ads and Google Ads for performance marketing. Platform coverage depends on your chosen package — see our Packages page for the exact breakdown.",
  },
  {
    question: "Do you work with businesses outside Kochi?",
    answer:
      "Yes. While we're based in Kakkanad, Kochi, we work with businesses across Kerala and beyond. Most of our work — content, ads, SEO, AEO — is fully deliverable remotely, with camera shoots arranged for clients on our higher-tier plans.",
  },
  {
    question: "Can I upgrade or downgrade my package later?",
    answer:
      "Yes, you can move between packages at the start of any billing month based on how your business's needs evolve.",
  },
  {
    question: "What does 'AI-powered' actually mean in your process?",
    answer:
      "We use AI tools for research, content ideation, caption writing, ad optimization, and video generation — but every output is reviewed and refined by our team. AI accelerates production; strategy and quality control stay human.",
  },
  {
    question: "Do you provide reports?",
    answer:
      "Yes. Monthly growth reports are included in every package, with bi-weekly or weekly reporting available on higher-tier SEO and Growth/Unlimited plans.",
  },
  {
    question: "What is included in a free strategy call?",
    answer:
      "A 30-minute conversation about your business, current marketing, and goals, followed by honest recommendations on where you'd see the fastest impact — whether or not you decide to work with us.",
  },
  {
    question: "Do you do camera shoots?",
    answer:
      "Yes, professional camera shoots are included in our Unlimited plan (4 shoots/month) and can be arranged as an add-on for other plans.",
  },
  {
    question: "How is AEO different from traditional SEO?",
    answer:
      "Traditional SEO optimizes for ranking on a search engine results page. AEO optimizes for being the direct answer AI tools give — a different, newer discipline that requires structured, consistent, fact-based content rather than keyword-focused pages.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We've worked across education, F&B, banking and finance training, retail and fashion, IT services, and local service businesses. Our approach adapts to your specific customer's buying journey rather than applying a one-size-fits-all playbook.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free strategy call through our Contact page or WhatsApp us directly. We'll discuss your business and recommend the right package — no pressure, no obligation.",
  },
];

export const fullServices: FullService[] = [
  {
    id: "ai-seo",
    icon: "search",
    name: "AI SEO",
    description: "Technical SEO, on-page optimization, and content strategy built to rank on Google — powered by AI-driven keyword and competitor research.",
    process: ["Technical + competitor audit", "Keyword & content strategy", "On-page + off-page optimization", "Monthly reporting & refinement"],
    results: ["3x organic traffic in 90 days", "Top 3 Google rankings", "Higher quality organic leads"],
  },
  {
    id: "aeo",
    icon: "sparkles",
    name: "AEO (Answer Engine Optimization)",
    description: "Kerala's first AEO discipline — structuring your content so ChatGPT, Perplexity, and Google AI Overviews recommend your business directly.",
    process: ["AI visibility audit", "Structured content & schema", "Trust signal building across sources", "AI answer tracking"],
    results: ["Featured in AI search answers", "First-mover advantage in your industry", "Higher-trust discovery"],
  },
  {
    id: "smm",
    icon: "share2",
    name: "Social Media Marketing",
    description: "Instagram, Facebook, and LinkedIn management with premium visual storytelling and AI-assisted content calendars.",
    process: ["Brand voice & content pillars", "Content calendar production", "Daily posting & community management", "Monthly growth report"],
    results: ["5x average engagement increase", "10K+ followers in 90 days", "Consistent daily presence"],
  },
  {
    id: "performance",
    icon: "target",
    name: "Performance Marketing",
    description: "Meta and Google Ads campaigns engineered around real conversion tracking, not vanity metrics.",
    process: ["Conversion tracking setup", "Audience & creative testing", "Daily bid & budget optimization", "Weekly performance reports"],
    results: ["4x average ROAS", "₹45 average cost per lead", "Real-time optimization"],
  },
  {
    id: "content-video",
    icon: "video",
    name: "Content + Video Production",
    description: "Premium posters, short-form reels, and AI-generated video content produced consistently, every week.",
    process: ["Concept & scripting", "Production (AI-assisted + camera shoots)", "Editing & motion design", "Scheduled publishing"],
    results: ["Scroll-stopping visual content", "Reels optimized for reach", "Consistent weekly output"],
  },
  {
    id: "brand-strategy",
    icon: "compass",
    name: "Brand Strategy",
    description: "Positioning, voice, and visual identity groundwork that makes every other channel work harder.",
    process: ["Brand & competitor audit", "Positioning & messaging framework", "Visual identity guidelines", "Rollout across channels"],
    results: ["Consistent brand identity", "Clearer market positioning", "Stronger campaign performance"],
  },
  {
    id: "local-seo",
    icon: "map-pin",
    name: "Google Business & Local SEO",
    description: "Google Business Profile optimization and local search presence so nearby customers find and choose you.",
    process: ["Profile audit & optimization", "Review generation strategy", "Local citation building", "Local ranking tracking"],
    results: ["Higher local map pack rankings", "More direction requests & calls", "Stronger review profile"],
  },
];
