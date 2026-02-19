# Colorrig v2.0 - Live Experience & Broadcast Solutions

## Project Overview
Colorrig v2.0 is a Next.js 15 application designed to showcase Colorrig Limited's expertise in live streaming, broadcast solutions, and event management. The project is built by porting the **Eventify** template (`app2` reference) into a modern, production-ready structure (`app`), ensuring strict fidelity to the original design while integrating Colorrig's specific branding and content.

## Core Objectives
1.  **Strict Template Fidelity**:
    *   Meticulously replicate the structure and styling of the `app2` reference template.
    *   Avoid "minification" or simplification of the original design.
    *   Ensure all components (Headers, Footers, Sliders, Sections) match the reference identically.

2.  **Branding Integration**:
    *   **Primary Colors**: Aqua (`#00bcd4`) and Dark Blue (`#070327`).
    *   **Typography**: Specific font pairings as per design.
    *   **Content**: Replace generic template text with Colorrig's service offerings, mission, and team details.

3.  **Modern Tech Stack**:
    *   **Framework**: Next.js 15 (Turbopack)
    *   **UI Library**: React 19
    *   **Styling**: Tailwind CSS (configured with brand colors) + Custom CSS
    *   **Animations**: AOS (Animate On Scroll)
    *   **Sliders**: Swiper.js

## Component Architecture
The application follows a strict component-based architecture derived from the `app2` reference:

*   **Layout**:
    *   `Layout.tsx`: Wraps pages, handles loading states, AOS initialization, and header/footer injection.
    *   **Headers**: `Header1` (Main), `Header2` (Inner pages). Refactored to remove inline styles and align menu structures.
    *   **Footers**: `Footer1` (Main), `Footer2`.

*   **Pages**:
    *   **Home (`/`)**: Full replication of `app2/page.tsx` (9 Sections), adapted for Colorrig's services.
    *   **About (`/about`)**: Re-implemented to match `app2/about`, featuring Mission, Vision, and "Why Choose Us" sections.
    *   **Team (`/team`)**: Modeled after `app2/speakers`, displaying the Colorrig leadership and technical team.
    *   **Blog (`/blog`)**: Aligned with `app2/blog` structure.
    *   **Contact (`/contact`)**: Standard contact form with map and info details.

## The Team
We are building a platform to highlight the visionary minds behind Colorrig:

*   **Charles Archibong** - CEO
*   **Bibitayo Archibong** - Chief Marketing Officer
*   **Damilare O. Oluwawa** - Broadcast & Network Engineer
*   **Lucky Aduba** - Streaming Engineer
*   **Oluwaseun Suberu** - Streaming & Network Engineer
*   **Omotayo Ogunfeibo** - Streaming Engineer
*   **Jamaldeen O. Lawal** - Developer

*Goal: Ensure the Team page template (`app2/speakers`) is perfectly adapted to showcase these profiles.*

## File & Page Status

### Configuration & Setup
*   [x] `package.json` — Dependencies defined; Next.js 15, React 19, Tailwind CSS, Swiper, AOS, GSAP.
*   [x] `next.config.mjs` — Next.js configuration present.
*   [x] `tailwind.config.ts` — Configured with Colorrig brand colors (aqua `#00bcd4`, dark blue `#070327`).
*   [x] `tsconfig.json` — TypeScript configuration present.
*   [x] `.eslintrc.json` — ESLint configuration present.
*   [x] `app/layout.tsx` — Root layout with metadata, fonts, and global CSS imports.
*   [x] `app/globals.css` — Global stylesheet present.
*   [x] `app/fonts/index.ts` — Font configuration (MTN Brighter Sans).
*   [x] `app/loading.tsx` — Loading state component present.

### Core Colorrig Pages (Production-Ready)
*   [x] `app/page.tsx` — **Home** (`/`): Complete — 9 branded sections.
*   [x] `app/about/page.tsx` — **About** (`/about`): Complete — company story, mission, vision, "Why Choose Us", client logos CTA.
*   [x] `app/team/page.tsx` — **Team** (`/team`): Complete — all 7 team members listed with dynamic links.
*   [x] `app/team/[slug]/page.tsx` — **Team Detail** (`/team/[slug]`): Complete — individual profile pages with bio, highlights, and CTA.
*   [x] `app/team/teamData.ts` — 7 team members with full bios and photo references.
*   [x] `app/solutions/page.tsx` — **Solutions** (`/solutions`): Complete — 6 service categories, LiveU partnership section, CTA.
*   [x] `app/portfolio/page.tsx` — **Portfolio** (`/portfolio`): Complete — 13 case study entries listed with CTA.
*   [x] `app/portfolio/[slug]/page.tsx` — **Portfolio Detail** (`/portfolio/[slug]`): Complete — individual case study pages with dynamic routing.
*   [x] `app/portfolio/portfolioData.ts` — 13 portfolio/case study items with full content.
*   [x] `app/blog/page.tsx` — **Blog** (`/blog`, "The Live Link"): Complete — 3 blog posts listed with category/author/date.
*   [x] `app/blog/[slug]/page.tsx` — **Blog Detail** (`/blog/[slug]`): Complete — individual article pages with dynamic routing.
*   [x] `app/blog/blogData.ts` — 3 blog posts with full article content.
*   [x] `app/contact/page.tsx` — **Contact** (`/contact`): Complete — embedded map, contact info cards, contact form, social media links.
*   [x] `app/careers/page.tsx` — **Careers** (`/careers`): Complete — 4 job listings (Streaming Engineer, Broadcast Engineer, Network Engineer, Marketing Specialist).
*   [x] `app/faq/page.tsx` — **FAQ** (`/faq`): Complete — accordion FAQ with 8+ Colorrig-specific questions.
*   [x] `app/gallery/page.tsx` — **Gallery** (`/gallery`): Complete — 30+ images and videos with all/images/videos filter.
*   [x] `app/privacy-policy/page.tsx` — **Privacy Policy** (`/privacy-policy`): Complete — full policy text, last updated February 2026.
*   [x] `app/terms-and-conditions/page.tsx` — **Terms & Conditions** (`/terms-and-conditions`): Complete — full terms text, last updated February 2026.
*   [x] `app/legal/privacy/page.tsx` — Legal privacy alias route: Complete.
*   [x] `app/legal/terms/page.tsx` — Legal terms alias route: Complete.
*   [x] `app/search/page.tsx` — **Search** (`/search`): Complete — full-text search across pages, blog, portfolio, and team.
*   [x] `app/searchData.ts` — Search index aggregating all searchable site content.

### Layout & Components
*   [x] `components/layout/Layout.tsx` — Page wrapper supporting all header/footer variants (1–10). AOS initialization and scroll state handled.
*   [x] `components/layout/header/Header1.tsx` — Primary Colorrig header: logo, navigation (Home, About, Solutions, Media & Resources, Contact), social icons, search.
*   [x] `components/layout/footer/Footer1.tsx` — Primary Colorrig footer: logo, tagline, social links, quick links, contact info, recent project thumbnails, copyright.
*   [x] `components/layout/InnerHeader.tsx` — Inner-page hero/breadcrumb component.
*   [x] `components/layout/MobileMenu.tsx` — Mobile navigation drawer.
*   [x] `components/layout/Popup.tsx` — Video popup component on Home page.
*   [x] `components/layout/Breadcrumb.tsx` — Breadcrumb navigation component.
*   [x] `components/layout/Menu.tsx` — Navigation menu component.
*   [x] `components/sections/home1/section1.tsx` – `section9.tsx` — All 9 Home page sections: hero, services, about, stats, solutions, team, brand logos, testimonials, CTA.
*   [x] `components/elements/` — Supporting UI elements: back-to-top, preloader, search bar, countdown, circle text, theme switch.
*   [x] `components/common/` — Shared components: Navbar, Footer, Hero, Section, ServiceCard, TeamMemberCard, PortfolioCard.
*   [x] `components/slider/BrandSlider.tsx` — Client brand logo slider.

### Template Reference Pages (Not Colorrig-Branded)
These pages are retained from the `Eventify` source template and are **not** linked in the Colorrig navigation. They serve as reference or may be repurposed.
*   [ ] `app/index2/` – `app/index10/` — 9 alternative homepage variants (template reference).
*   [ ] `app/event/page.tsx`, `app/event-schedule/page.tsx`, `app/event-single/page.tsx` — Event template pages.
*   [ ] `app/speakers/page.tsx`, `app/speakers-single/page.tsx` — Speaker template pages (Colorrig uses `/team` instead).
*   [ ] `app/memories/page.tsx` — Memories template page (uses placeholder asset paths).
*   [ ] `app/blog-single/page.tsx` — Static blog single template (Colorrig uses `/blog/[slug]` instead).
*   [ ] `app/pricing-plan/page.tsx` — Pricing template page (not linked in Colorrig nav).
*   [ ] `components/layout/header/Header2.tsx` – `Header10.tsx` — Template header variants (not used in production).
*   [ ] `components/layout/footer/Footer2.tsx` – `Footer10.tsx` — Template footer variants (not used in production).
*   [ ] `components/sections/home2/` – `components/sections/home10/` — Template section sets (not used in production).

### Assets
*   [x] `public/images/` — 130 production assets including team photos, event photos, logos, thumbnails, and video files.
*   [x] `public/assets/css/` — Vendor CSS (Bootstrap, Font Awesome, AOS, Swiper, Slick).
*   [x] `public/assets/img/` — Template icons, decorative elements, and UI assets.

## Development Guidelines
*   **Do NOT** simplify the template HTML structure.
*   **Do** verify every section against the `app2` reference.
*   **Do** check mobile responsiveness for every new component.
*   **Focus**: Consistency from Header to Footer across all pages.
