# Colorrig v2.0 - Live Experience & Broadcast Solutions

## Project Overview
Colorrig v2.0 is a Next.js 15 application designed to showcase Colorrig Limited's expertise in live streaming, broadcast solutions, and event management. The project is built by porting the **Eventify** template (`app2` reference) into a modern, production-ready structure (`app`), ensuring strict fidelity to the original design while integrating Colorrig's specific branding and content.

## Core Objectives
1.  **Strict Template Fidelity**:
    *   Meticulously replicate the structure and styling of the `app2` reference template.
    *   Avoid "minification" or simplification of the original design.
    *   Ensure all components (Headers, Footers, Sliders, Sections) match the reference identically.

2.  **Branding Integration**:
    *   **Primary Colors**: Aqua (`#74fbfe`) and Dark Blue (`#070327`).
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

## Current Status
*   [x] **Project Setup**: Dependencies updated, Tailwind configured.
*   [x] **Header/Footer**: Ported and aligned with template.
*   [x] **Home Page**: Structural port complete.
*   [x] **About Page**: Strict template port complete.
*   [ ] **Team Page**: In progress (aligning with `speakers` template).
*   [ ] **Portfolio/Solutions**: Content population in progress.

## Development Guidelines
*   **Do NOT** simplify the template HTML structure.
*   **Do** verify every section against the `app2` reference.
*   **Do** check mobile responsiveness for every new component.
*   **Focus**: Consistency from Header to Footer across all pages.
