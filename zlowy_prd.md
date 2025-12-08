# Product Requirements Document (PRD): Zlowy

## Project Name: Zlowy

### Type
React Frontend

### Design Reference
Grin.co (Visual Style, Animation)

### Content Reference
LaunchedGlobal.in (Site Structure)

---

## 1. Executive Summary
Develop a high-performance React frontend for Zlowy, a modern study abroad and education platform. The goal is to merge the informative structure of a standard education consultancy with a high-energy, Gen Z-focused aesthetic inspired by Grin.co. The site will feature bold typography, high-contrast monochrome design, and interactive motion elements (specifically flipping cards).

---

## 2. Tech Stack
- **Core:** React 18+ (Vite), TypeScript.
- **Styling:** Tailwind CSS.
- **Animation:** Framer Motion (Required for card flips and scroll reveals).
- **Routing:** React Router DOM v6.
- **Icons:** Lucide React.
- **Fonts:** Space Grotesk (Headings/Brand), Inter (Body).

---

## 3. Visual Identity (The "Zlowy" Look)
- **Theme:** "Brutal Minimalist."
- **Colors:**
  - Background: `#F4F4F5` (Zinc-100) or `#FFFFFF`.
  - Text: `#000000` (Pitch Black).
  - Brand Accent: Electric Lime (`#CCFF00`) or Hyper Blue (`#0044FF`) for buttons/highlights.
- **UI Components:**
  - The "Zlowy Flip": Informational cards that sit flat and rotate 180° via 3D transform on hover.
  - Borders: Thick, defined black borders (2px-3px) on cards and inputs.
  - Typography: All headings are uppercase, bold, and tight tracking.

---

## 4. Page Architecture & Features
### A. Navigation (Sticky)
- **Logo:** Text-based "ZLOWY" (Bold, Heavy weight).
- **Links:** Home, Study Abroad, Courses, Campus Ambassador.
- **CTA:** "Get Started" (Pill-shaped button, black background, white text).

### B. Pages
1. **Home Page**
   - **Hero Section:**
     - Headline: "ZLOWY: GO GLOBAL."
     - Subtext: "The new standard for international education."
     - Visual: Abstract 3D shape or kinetic typography loop.
   - **Why Zlowy (Grin Style Grid):**
     - Grid of 3 cards: "University Shortlisting," "Visa Hacks," "Scholarships."
     - Interaction: Hover to flip and reveal a short description.
   - **Marquee:** Infinite scroll of university logos (Harvard, Oxford, etc.) in grayscale.

2. **Study Abroad**
   - **Destination Grid:** Large photo cards of countries (USA, UK, Australia). Hover zooms the image and overlays text.
   - **The Roadmap:** Vertical scroll-triggered line animation connecting steps: Profile Analysis -> Application -> Acceptance -> Fly.

3. **Courses**
   - **Course Discovery:** Clean list view.
   - **Cards:** Minimalist layout displaying University Name (Bold), Degree Type (Tag), Intake Date.
   - **Hover Effect:** Card lifts (`translate-y-2`) and casts a hard black shadow.

4. **Campus Ambassador**
   - **Vibe:** High energy. Photos of students.
   - **Perks Carousel:** Horizontal scrolling section showing: "Earn Money," "Certificates," "Networking."
   - **Registration Form:** Minimalist fields with underlined styles. Submit button transforms into a checkmark on success.

---

## 5. Implementation Rules for AI
- **Animation Priority:** Use AnimatePresence for page transitions.
- **Typography:** Import fonts from Google Fonts immediately in `index.css`.
- **Code Structure:** Keep pages in `src/pages` and reusable UI elements (Buttons, Cards) in `src/components/ui`.
- **Responsive:** Font sizes must use `clamp()` or Tailwind responsive prefixes (`md:text-6xl`) to ensure headers look good on mobile.

---

## 🚀 Updated Prompt for Windsurf / Cursor
Copy and paste this into the chat to start coding:

> "I am building a website called Zlowy. Please read the attached PRD carefully.
> 
> **Task 1: Setup**
> Scaffold a React + Vite + TypeScript project. Install framer-motion, lucide-react, and react-router-dom. Configure Tailwind CSS with the 'Space Grotesk' font for headings.
> 
> **Task 2: The 'Zlowy' Component Style**
> Create a reusable component called `FlipCard.tsx`.
> It must accept `frontContent` and `backContent`.
> Use Framer Motion to animate a 180-degree rotation on hover (preserve 3d).
> Style it with a thick black border and white background, matching the 'Grin.co' aesthetic described in the PRD.
> 
> **Task 3: Homepage Hero**
> Build the Homepage Hero section with the headline 'ZLOWY: GO GLOBAL' using the bold typography style."
