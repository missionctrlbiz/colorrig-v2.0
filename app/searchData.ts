// Comprehensive search data for all pages and sections
export interface SearchItem {
    id: string;
    title: string;
    description: string;
    category: string;
    url: string;
    keywords: string[];
    content: string;
}

export const searchData: SearchItem[] = [
    // Homepage sections
    {
        id: "home-hero",
        title: "Live Streaming Solutions",
        description: "Transform your events with professional live streaming services",
        category: "Home",
        url: "/",
        keywords: ["live streaming", "broadcast", "events", "professional", "solutions"],
        content: "Professional live streaming and broadcast solutions for your events",
    },
    {
        id: "home-services",
        title: "Our Services",
        description: "Comprehensive broadcast and media solutions",
        category: "Home",
        url: "/",
        keywords: ["services", "broadcast", "media", "solutions", "live"],
        content: "We offer a full range of broadcast and media services including live streaming, event coverage, and production",
    },
    {
        id: "home-portfolio",
        title: "Recent Projects",
        description: "View our latest successful projects and case studies",
        category: "Home",
        url: "/",
        keywords: ["portfolio", "projects", "case studies", "work", "examples"],
        content: "Explore our portfolio of successful broadcast and streaming projects",
    },

    // About page
    {
        id: "about-company",
        title: "About Colorrig Limited",
        description: "Learn about our company mission, vision, and values",
        category: "About",
        url: "/about",
        keywords: ["about", "company", "mission", "vision", "values", "team"],
        content: "Colorrig Limited is a leading broadcast and live streaming solutions provider",
    },
    {
        id: "about-team",
        title: "Our Team",
        description: "Meet our talented team of professionals",
        category: "About",
        url: "/team",
        keywords: ["team", "people", "staff", "professionals", "experts"],
        content: "Our experienced team brings expertise in broadcast, technology, and event management",
    },

    // Solutions page
    {
        id: "solutions-main",
        title: "Live Streaming Solutions",
        description: "Professional live streaming and broadcast solutions",
        category: "Solutions",
        url: "/solutions",
        keywords: ["live streaming", "broadcast", "solutions", "streaming services"],
        content: "Comprehensive live streaming solutions for events, conferences, and online content delivery",
    },
    {
        id: "solutions-pricing",
        title: "Pricing & Packages",
        description: "Flexible pricing plans for all types of events",
        category: "Solutions",
        url: "/solutions#pricing",
        keywords: ["pricing", "packages", "plans", "rates", "cost"],
        content: "Competitive pricing packages tailored to your streaming needs",
    },

    // Portfolio page
    {
        id: "portfolio-main",
        title: "Our Portfolio",
        description: "Showcase of our completed projects and successful campaigns",
        category: "Portfolio",
        url: "/portfolio",
        keywords: ["portfolio", "projects", "work", "showcase", "clients"],
        content: "View our extensive portfolio of broadcast and streaming projects",
    },

    // Blog/Resources
    {
        id: "blog-main",
        title: "The Live Link - Blog",
        description: "Industry insights, tips, and best practices",
        category: "Resources",
        url: "/blog",
        keywords: ["blog", "articles", "news", "insights", "resources", "tips"],
        content: "Read our latest articles about live streaming, broadcast technology, and event management",
    },
    {
        id: "faq",
        title: "Frequently Asked Questions",
        description: "Answers to common questions about our services",
        category: "Resources",
        url: "/faq",
        keywords: ["faq", "questions", "answers", "help", "support"],
        content: "Find answers to frequently asked questions about our streaming and broadcast services",
    },

    // Services
    {
        id: "services-livestream",
        title: "Live Streaming Service",
        description: "Professional live streaming for events and online content",
        category: "Services",
        url: "/solutions",
        keywords: ["live stream", "streaming", "broadcast", "online events"],
        content: "We provide professional live streaming services for conferences, webinars, concerts, and online events",
    },
    {
        id: "services-production",
        title: "Video Production",
        description: "High-quality video production and content creation",
        category: "Services",
        url: "/solutions",
        keywords: ["video production", "content creation", "filming", "editing"],
        content: "Professional video production services including filming, editing, and post-production",
    },
    {
        id: "services-equipment",
        title: "Broadcast Equipment",
        description: "Professional broadcast and streaming equipment rental",
        category: "Services",
        url: "/solutions",
        keywords: ["equipment", "cameras", "broadcast gear", "rental"],
        content: "State-of-the-art broadcast equipment and technical solutions for your events",
    },

    // Contact
    {
        id: "contact",
        title: "Get in Touch",
        description: "Contact Colorrig Limited for inquiries and support",
        category: "Contact",
        url: "/contact",
        keywords: ["contact", "email", "phone", "location", "support", "inquiries"],
        content: "Contact our team for broadcast solutions, live streaming services, and event support",
    },

    // Additional keywords
    {
        id: "events",
        title: "Event Streaming",
        description: "Stream your corporate events, conferences, and webinars",
        category: "Services",
        url: "/solutions",
        keywords: ["event streaming", "conference", "webinar", "corporate events"],
        content: "Professional event streaming and broadcast services for all types of events",
    },
    {
        id: "liveu",
        title: "LiveU Solutions",
        description: "LiveU remote broadcast technology and solutions",
        category: "Technology",
        url: "/solutions#liveu",
        keywords: ["liveu", "remote broadcast", "mobile streaming", "technology"],
        content: "We specialize in LiveU remote broadcast solutions for field reporting and mobile streaming",
    },
];

export function searchContent(query: string): SearchItem[] {
    const lowerQuery = query.toLowerCase().trim();

    if (!lowerQuery) return [];

    return searchData
        .filter((item) => {
            const searchableText = [
                item.title,
                item.description,
                item.content,
                item.category,
                ...item.keywords,
            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(lowerQuery);
        })
        .sort((a, b) => {
            // Prioritize title matches
            const aTitle = a.title.toLowerCase().includes(lowerQuery) ? 1 : 0;
            const bTitle = b.title.toLowerCase().includes(lowerQuery) ? 1 : 0;
            return bTitle - aTitle;
        });
}
