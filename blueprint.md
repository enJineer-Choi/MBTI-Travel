# FailSafe Travel - Blueprint

## Overview
"FailSafe Travel" is a "Zero-Stress Travel Planner" web app designed to create fail-safe itineraries based on a user's MBTI personality type and past travel pain points. The application aims to provide a high-end, AI-agent-like experience with a modern, soft aesthetic, organic shapes, and glassmorphism effects.

## Project Structure & Features
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS, Framer Motion (animations), Lucide React (icons)
- **Theme**: Modern, Soft Gradients, Organic Shapes, Mobile-Responsive.

### Core Components
1.  **Landing Page**: Hero section with "Anti-Failure" messaging.
2.  **Onboarding Form**:
    -   Step 1: MBTI Selection (Visual cards).
    -   Step 2: Pain Point Checklist.
3.  **Itinerary Dashboard**:
    -   Glassmorphism style itinerary card.
    -   "AI Logic" explanation section.
4.  **Booking Cart**: Summary page with external booking links.

## Current Plan (MVP)
1.  **Setup**: Install dependencies (`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`) - *Completed*
2.  **Scaffold**: Create `lib/utils.ts` for Tailwind class merging.
3.  **Components**:
    -   `src/components/Landing.tsx`
    -   `src/components/Onboarding.tsx`
    -   `src/components/ItineraryCard.tsx`
    -   `src/components/BookingCart.tsx`
4.  **Main Logic**: Implement state management and flow in `src/app/page.tsx`.
5.  **Styling**: Ensure responsive design and apply glassmorphism/gradients in `globals.css` and via Tailwind classes.
