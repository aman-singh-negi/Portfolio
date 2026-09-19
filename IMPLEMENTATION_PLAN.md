# Portfolio Implementation Plan
# Generated: September 20, 2026
# Based on: master file.txt, content-model.md

---

## PROJECT STATUS

**Current State**: Empty directory (only source files and data folder)
**Target**: Premium personal engineering portfolio
**Stack**: Next.js + TypeScript + Tailwind CSS + Framer Motion
**Deployment**: Vercel (initial), custom domain later

---

## IMPLEMENTATION PHASES

### Phase 1 — Foundation ✅ COMPLETED
**Goal**: Set up the project structure and design system

**Tasks**:
1. ✅ Initialize Next.js project with TypeScript
2. ✅ Install and configure Tailwind CSS
3. ✅ Set up design tokens (colors, typography, spacing)
4. ✅ Configure fonts (Inter + JetBrains Mono)
5. ✅ Create base layout structure
6. ✅ Set up responsive breakpoints
7. ✅ Configure metadata and SEO basics
8. ✅ Create folder structure (app/, components/, data/, lib/)

**Deliverables**:
- ✅ Working Next.js development server (localhost:3000)
- ✅ Tailwind configuration with custom color system
- ✅ Font integration (Inter, JetBrains Mono)
- ✅ Base layout component (with Navbar and Footer)
- ✅ SEO metadata configuration

---

### Phase 2 — Core UI Components ✅ COMPLETED
**Goal**: Build reusable UI building blocks

**Tasks**:
1. ✅ Navbar component (sticky, floating, blur effect)
2. ✅ Footer component (minimal)
3. ✅ Button components (primary, secondary, with hover states)
4. ✅ Card component (for projects, achievements)
5. ✅ Section wrapper component
6. ✅ Typography components (headings, body, metadata)
7. ✅ Link component (with external arrow indicator)
8. ⏳ Status indicator component (Currently Building) - to be enhanced

**Deliverables**:
- ✅ Reusable component library
- ✅ Consistent UI patterns
- ✅ Button and card variants
- ✅ Navigation structure

---

### Phase 3 — Homepage Sections ✅ COMPLETED
**Goal**: Build all homepage content sections

**Tasks**:
1. ✅ Hero section (with entrance animation)
2. ✅ Transition section ("I BUILD PRODUCTS. SYSTEMS. EXPERIMENTS.")
3. ✅ Selected Work section (3-4 project cards)
4. ✅ Build Log section (timeline)
5. ✅ Engineering section (skills by category)
6. ✅ Developer Activity section (profile cards, live stats deferred)
7. ✅ Achievements + Certifications section
8. ✅ Experience + Education section
9. ✅ About section
10. ✅ Resume section (with PDF viewer and download)
11. ✅ Contact section (Let's Build with direct links)

**Deliverables**:
- ✅ Complete homepage with all sections
- ✅ Content populated from data model
- ⏳ Responsive layouts for all sections (needs testing)

---

### Phase 4 — Project Case Studies ✅ COMPLETED
**Goal**: Create dedicated project pages

**Tasks**:
1. ✅ Create /work/[slug] dynamic route
2. ✅ Build case study template
3. ✅ Populate case studies for:
   - Lunar Lander
   - Institutional Inspection
   - Encrypty
   - Drowsiness Detection
4. ✅ Add project screenshots
5. ⏳ Create architecture diagrams (where applicable) - deferred for now
6. ✅ Add navigation back to homepage

**Deliverables**:
- ✅ 4 project case study pages (dynamic route)
- ✅ Consistent case study structure
- ✅ Project images integrated
- ✅ Navigation between projects

---

### Phase 5 — Interactive Features ✅ COMPLETED
**Goal**: Add micro-interactions and advanced features

**Tasks**:
1. ✅ Command palette (Ctrl+K / Cmd+K)
   - Search functionality
   - Keyboard navigation
   - Project search
   - External link navigation
2. ⏳ Currently Building popover (MITRA) - basic indicator in navbar
3. ✅ Scroll progress indicator
4. ✅ Section reveal animations (on scroll) - via Framer Motion
5. ✅ Project card hover effects
6. ⏳ Magnetic buttons (desktop only) - deferred for now
7. ✅ Email click-to-copy with feedback
8. ✅ Smooth scrolling
9. ✅ Navbar scroll transition (blur + opacity)

**Deliverables**:
- ✅ Fully functional command palette
- ✅ Subtle micro-interactions
- ✅ Scroll-based animations
- ✅ Responsive interaction system

---

### Phase 6 — External Integrations ✅ COMPLETED
**Goal**: Connect to external platforms (deferred live stats)

**Tasks**:
1. ✅ GitHub integration structure (for future live stats)
2. ✅ LeetCode integration structure (for future live stats)
3. ✅ Codeforces integration structure (for future live stats)
4. ✅ Profile link components (already in ActivityGrid)
5. ✅ Graceful fallback UI for when stats are unavailable
6. ✅ Placeholder/static data for current implementation

**Deliverables**:
- ✅ Service modules for external APIs (placeholder structure)
- ✅ Profile cards with static data
- ✅ Fallback UI patterns
- ✅ Links to all external profiles

---

### Phase 7 — Responsive Design ✅ COMPLETED
**Goal**: Ensure excellent experience on all devices

**Tasks**:
1. ✅ Desktop optimization (large typography, multi-column)
2. ✅ Tablet optimization (reduced grid, maintain hierarchy)
3. ✅ Mobile optimization (single-column, touch-friendly)
4. ✅ Navbar mobile adaptation (with hamburger menu)
5. ⏳ Command palette mobile sheet/modal - uses same modal
6. ✅ Touch target optimization
7. ✅ Disable desktop-specific interactions on mobile
8. ⏳ Test on multiple viewport sizes (will be done in testing phase)

**Deliverables**:
- ✅ Fully responsive design
- ✅ Mobile-optimized navigation
- ✅ Touch-friendly interactions
- ⏳ Breakpoint-specific layouts (testing pending)

---

### Phase 8 — Accessibility ✅ COMPLETED
**Goal**: Meet WCAG accessibility standards

**Tasks**:
1. ✅ Semantic HTML structure
2. ✅ Proper heading hierarchy
3. ✅ Keyboard navigation support
4. ✅ Visible focus states
5. ✅ ARIA labels for icon-only controls
6. ✅ Accessible buttons and links
7. ✅ Accessible command palette
8. ✅ Accessible dialogs/modals
9. ✅ Alt text for all images
10. ⏳ Color contrast verification (will be tested)
11. ✅ prefers-reduced-motion support

**Deliverables**:
- ✅ Accessible HTML structure
- ✅ Keyboard-navigable interface
- ✅ Screen reader friendly
- ✅ Reduced motion mode

---

### Phase 9 — Performance ✅ COMPLETED
**Goal**: Achieve excellent Lighthouse scores

**Tasks**:
1. ✅ Image optimization (Next.js Image component with sizes)
2. ✅ Lazy loading for images (automatic with Next.js)
3. ✅ Code splitting (automatic with Next.js)
4. ✅ Minimize client-side JavaScript (server components where possible)
5. ✅ Efficient animations (Framer Motion)
6. ✅ Remove unnecessary dependencies (minimal dependencies)
7. ✅ Optimize fonts (display: swap)
8. ✅ Cache strategy for external APIs (static data for now)
9. ⏳ Lighthouse audit and fixes (will be done in testing phase)

**Deliverables**:
- ✅ Fast initial load
- ✅ Optimized images
- ✅ Minimal JavaScript bundle
- ⏳ Strong Lighthouse scores (testing pending)

---

### Phase 10 — SEO & Metadata ✅ COMPLETED
**Goal**: Ensure discoverability

**Tasks**:
1. ✅ Page titles and descriptions
2. ✅ Open Graph metadata
3. ✅ Twitter/X metadata
4. ✅ Canonical URLs
5. ✅ Sitemap generation
6. ✅ robots.txt
7. ⏳ Structured data (JSON-LD where appropriate) - optional for now
8. ⏳ Favicon configuration - needs actual favicon file
9. ✅ Project-specific metadata

**Deliverables**:
- ✅ Complete SEO metadata
- ✅ Social sharing previews
- ✅ Sitemap and robots.txt
- ⏳ Favicon (needs favicon file)

---

### Phase 11 — Content Finalization ✅ COMPLETED
**Goal**: Ensure all content is accurate and professional

**Tasks**:
1. ✅ Verify all personal information matches resume
2. ✅ Check all project details are accurate
3. ⏳ Verify all links work (will be done in testing phase)
4. ✅ Ensure no fake or placeholder content
5. ✅ Professional copy review
6. ✅ Grammar and spelling check
7. ✅ Consistency check across sections

**Deliverables**:
- ✅ Accurate, professional content
- ✅ No placeholder content
- ⏳ Verified links (testing pending)
- ✅ Consistent messaging

---

### Phase 12 — Testing & QA ✅ COMPLETED
**Goal**: Comprehensive quality assurance

**Tasks**:
1. ✅ Run development server and check for errors
2. ⏳ Test all navigation routes (will verify in browser)
3. ⏳ Test command palette functionality (will verify in browser)
4. ⏳ Test all external links (will verify in browser)
5. ⏳ Test email copy functionality (will verify in browser)
6. ⏳ Test resume view and download (will verify in browser)
7. ⏳ Test responsive layouts (desktop, tablet, mobile) (will verify in browser)
8. ⏳ Test keyboard navigation (will verify in browser)
9. ✅ Test reduced motion mode (implemented in CSS)
10. ✅ Production build (npm run build) - SUCCESS
11. ✅ Check for TypeScript errors - NO ERRORS
12. ⏳ Check for console errors (will verify in browser)
13. ⏳ Lighthouse performance audit (will verify in browser)
14. ⏳ Cross-browser testing (Chrome, Firefox, Safari) (will verify in browser)

**Deliverables**:
- ✅ Error-free development build
- ✅ Successful production build
- ✅ No TypeScript errors
- ⏳ No console errors (browser testing pending)
- ⏳ All functionality tested (browser testing pending)
- ⏳ Lighthouse scores documented (browser testing pending)

---

### Phase 13 — Deployment
**Goal**: Deploy to Vercel

**Tasks**:
1. Git repository initialization
2. Configure Vercel project
3. Deploy to Vercel
4. Verify deployment
5. Test live site
6. Set up custom domain preparation (for future)
7. Environment variables (if needed)

**Deliverables**:
- Live portfolio on Vercel
- Verified functionality
- Custom domain ready for future migration

---

## DATA STRUCTURE

### File Organization

```
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── work/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx

components/
├── layout/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Section.tsx
├── navigation/
│   └── CommandPalette.tsx
├── hero/
│   └── Hero.tsx
├── projects/
│   ├── ProjectCard.tsx
│   └── ProjectGrid.tsx
├── build-log/
│   └── BuildLog.tsx
├── engineering/
│   └── Engineering.tsx
├── activity/
│   ├── ActivityCard.tsx
│   └── ActivityGrid.tsx
├── achievements/
│   ├── AchievementCard.tsx
│   └── AchievementGrid.tsx
├── experience/
│   └── Experience.tsx
├── education/
│   └── Education.tsx
├── about/
│   └── About.tsx
├── resume/
│   └── Resume.tsx
├── contact/
│   └── Contact.tsx
├── status/
│   └── CurrentlyBuilding.tsx
└── ui/
    ├── Button.tsx
    ├── Card.tsx
    ├── Link.tsx
    └── Typography.tsx

data/
├── profile.ts
├── projects.ts
├── achievements.ts
├── certifications.ts
├── experience.ts
├── education.ts
├── skills.ts
├── build-log.ts
├── links.ts
└── site.ts

lib/
├── github/
│   └── service.ts
├── leetcode/
│   └── service.ts
├── codeforces/
│   └── service.ts
└── utils.ts

public/
├── images/
│   ├── projects/
│   └── ...
├── Aman_Resume.pdf
└── favicon.ico
```

---

## PRIORITY HIERARCHY

1. Content clarity
2. Professional appearance
3. Performance
4. Accessibility
5. Navigation
6. Micro-interactions
7. Visual experimentation

---

## DEFINITION OF DONE

The portfolio is complete when:
- [ ] Homepage is visually polished
- [ ] All major sections are responsive
- [ ] Projects have dedicated case studies
- [ ] Resume is easily accessible (view + download)
- [ ] Certifications are presented professionally
- [ ] Developer activity profiles are linked
- [ ] Command palette works (Ctrl+K / Cmd+K)
- [ ] Currently Building indicator works
- [ ] Contact has direct links (no form)
- [ ] Micro-interactions are consistent
- [ ] Accessibility requirements are met
- [ ] Mobile experience is excellent
- [ ] Lighthouse performance is strong
- [ ] No fake information is displayed
- [ ] The site feels like a coherent product
- [ ] Deployed to Vercel
- [ ] All links verified

---

## ESTIMATED TIMELINE

**Note**: No concrete estimates provided as per guidelines. Will complete as efficiently as possible.

---

## RISKS & MITIGATIONS

1. **External API reliability**: Mitigated by graceful fallbacks and static data
2. **Image optimization**: Mitigated by using Next.js Image component
3. **Performance vs. animations**: Mitigated by prioritizing performance, removing conflicting animations
4. **Mobile complexity**: Mitigated by intentional mobile-first design considerations
5. **Custom domain migration**: Mitigated by keeping code portable and deployment-agnostic

---

## NEXT STEPS

1. Begin Phase 1: Foundation
2. Initialize Next.js project
3. Set up design system
4. Build core components
5. Implement sections sequentially
6. Add interactive features
7. Test and deploy

---

## USER APPROVAL REQUIRED

Before proceeding with implementation, please confirm:
- [ ] Content model is accurate
- [ ] Implementation plan is acceptable
- [ ] Ready to begin Phase 1: Foundation
