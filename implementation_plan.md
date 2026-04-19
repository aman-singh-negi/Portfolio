# 1. Concept & Experience Design

## Theme: "Antigravity AI Core Interface"
The portfolio functions as an interactive terminal connected to a highly advanced "AI Core." Visitors aren't just scrolling through a webpage; they are exploring a sentient void. The central thematic element is a morphing, fluid 3D geometric core that reacts to the user's cursor, scroll velocity, and time spent on the page. 

## The User Journey
1. **Boot Sequence (Landing):** A minimal, terminal-style preloader (`> INTIALIZING SECURE CONNECTION... > ACCESS GRANTED`) that fades instantly into the main UI to avoid delaying the user.
2. **The Nexus (Hero Section):** A massive, dark void focusing on a high-end 3D element (the Antigravity Core). Very sparse typography. "Aman Singh Negi. Creative Frontend Engineer."
3. **Data Streams (Experience/Projects):** As the visitor scrolls down, the "core" shifts to the background, and projects load in like secure holographic dossiers unlocked via magnetic reveal effects.
4. **Transmission (Contact):** A sleek, terminal-based input form feeling like sending a direct message to a secure server.

## Emotional Resonance
- **Awe-inspiring:** First glance must feel like opening software designed in 2030.
- **Intelligent:** Subtle kinetic movements of background particles tracking the mouse make the site feel "aware" of the user.
- **Precise:** Absolute minimal clutter; high contrast typographic hierarchy that breathes.

---

# 2. UI/UX Breakdown

## Layout Structure
- **No traditional navbar.** Instead, use a slick magnetic floating dock or a minimalist circular hamburger menu on the top-right that expands into a full-screen blurred overlay.
- **Section Flow:** Hero (3D Core) → Skill Matrix (Hover revealed text) → Case Studies (Sticky Parallax) → Contact Terminal.

## Color System: "Void & Neon"
- **Primary Background:** Vantablack (`#050505`) to Deep Obsidian (`#0A0A0B`).
- **Surface Panels:** Translucent dark glass (`rgba(255, 255, 255, 0.02)`) with subtle 1px border gradients.
- **Accents:** Electric Cyan (`#00F0FF`), Neon Violet (`#7000FF`), and Muted Slate for body text (`#8A8F98`).

## Typography
- **Headings:** *Clash Display* or *Space Grotesk* for striking, wide, and aggressive technological headers. 
- **Metadata & Subtext:** *JetBrains Mono* or *Geist Mono* for coordinate readouts, load statuses, and small data points.
- **Body:** *Inter* or *Neue Montreal* for highly legible dense text.

## Micro-interactions & Transitions
- Elements do not simply fade in; they "decrypt" (scramble text effect).
- Links feature magnetic attraction, pulling slightly toward the cursor when nearby.
- Custom cursor (a tiny glowing dot with an inverted mix-blend-mode trailing circle).

---

# 3. Feature List (WOW elements)

*   **Interactive 3D AI Core (Three.js/Fiber):** A glowing, wireframe-and-fluid sphere that rotates and distorts based on mouse position.
*   **Reactive Particle Field:** Background dust/stars that part away from the cursor (repulsion physics).
*   **Lenis Smooth Scrolling:** Buttery smooth parallax capabilities overriding default harsh browser scrolling.
*   **Text Scramble Decryption:** Headers that cycle through random characters before locking into the actual title upon scrolling into view.
*   **Holographic Project Cards:** Cards featuring a pseudo-3D tilt effect on hover with a 'spotlight' glare chasing the cursor across the card surface.
*   **Dynamic Custom Cursor:** Follows the mouse with a slight spring delay, expanding over clickable elements.

---

# 4. Tech Stack

The workspace is already perfectly primed for this stack:

*   **Framework:** React + Vite (Fast HMR, perfect for creative coding).
*   **Styling:** Tailwind CSS (Rapid utility iterations, custom config for neon colors/animations).
*   **Animations:** Framer Motion (Orchestrating layout transitions, stagger animations, decrypt effects).
*   **3D WebGL:** Three.js + `@react-three/fiber` + `@react-three/drei` (For the Antigravity Core and particle setups).
*   **Scrolling:** `@studio-freight/lenis` (Industry standard for premium smooth scroll).
*   **Icons:** `react-icons` and custom SVG components.

---

# 5. Implementation Plan

1.  **Phase 1: Foundation & Infrastructure**
    *   Setup Lenis for global smooth scrolling mechanism.
    *   Layout the global CSS structure (fonts, text sizing variables, custom selection highlights).
    *   Build the custom cursor system and lock it globally.
2.  **Phase 2: The Core (3D Canvas)**
    *   Setup `Canvas` component covering `100vw/100vh` in absolute background.
    *   Implement the Interactive 3D object using R3F. Set up lighting and post-processing (Bloom effect).
3.  **Phase 3: Component Assembly**
    *   Build the Decrypting Header component for reuse.
    *   Develop the Holographic Project List component (cards with magnetic hover/tilt).
4.  **Phase 4: Composition & Layout**
    *   Construct the Hero Section over the Three.js canvas.
    *   Flesh out the About and Projects sections utilizing `framer-motion` for scroll-triggered reveals (`whileInView`).
5.  **Phase 5: Refinement**
    *   Implement the Boot Sequence preloader.
    *   Optimize Three.js (handle resizing, dispose of unused textures, manage draw calls).
    *   Performance audits.

---

# 6. Code Snippets

### Smooth Scrolling Setup (Lenis)
```tsx
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const SmoothScroller = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
};
```

### Interactive Holographic Project Card
```tsx
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

export const ProjectCard = ({ title, category }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 240, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <h3 className="text-2xl font-bold tracking-tight text-white/90 font-display">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-400 font-mono">[{category}]</p>
    </div>
  );
};
```

### 3D Background Setup (R3F)
```tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export const AIBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
        <directionalLight position={[-10, -10, -10]} intensity={2} color="#7000FF" />
        
        <Sphere visible args={[1, 64, 64]} scale={1.5}>
          <MeshDistortMaterial
            color="#141414"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.9}
          />
        </Sphere>
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};
```

---

# 7. Optimization Tips

1.  **DPR Management in WebGL:** Limit the Canvas `dpr` (device pixel ratio) to `[1, 2]` to prevent catastrophic frame rate drops on 4k/Retina displays. ` <Canvas dpr={[1, 2]}> `
2.  **Dispose Off-Screen 3D Objects:** Use React's unmount lifecycle to dispose of geometries and materials if the 3D element isn't globally persistent.
3.  **Use `will-change`:** For frequently moving standard DOM elements (like the custom cursor or parallax layers), utilize the `will-change: transform;` CSS property.
4.  **Font Subsetting:** If using custom fonts like *Clash Display*, subset them to the characters actually used to drastically shrink payload size.

---

# 8. Final Polish Ideas

*   **Audio Feedback:** Subtle, low-volume sound design (e.g., a quiet electronic "click" on button hover, a deeper synthetic drone fading in as the 3D core loads). Use `Howler.js` to manage audio sprites.
*   **The Command Palette:** Pressing `CMD/CTRL + K` brings up an "AI Terminal" command bar allowing the user to type "contact", "about", "projects", or "toggle theme".
*   **Easter Egg - Matrix Rain Console:** If the user types a specific sequence or double-clicks an obscure UI element, the console logs out a massive ASCII art piece of your name or logs standard errors in heavily customized hacker styling using `%c` in `console.log()`.
*   **Contextual Cursor:** The custom cursor changes from a dot to an arrow over links, and to a 'View' eyeball icon when hovering over a project case study.
