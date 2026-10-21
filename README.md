# Tiki Portal

A scroll-driven Three.js / React Three Fiber prototype with GSAP ScrollTrigger, Tailwind CSS, a custom neon Tiki mask, a procedural portal tunnel, moving stardust, a node constellation, data-light rivers, cursor-reactive camera movement and a user-initiated ambient synth drone.

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Important notes

- The ambient sound is generated locally with Web Audio and starts only after the visitor clicks **SOUND OFF** / **AMBIENCE ON**. Browsers generally block autoplay audio; this prototype intentionally does not autoplay.
- The contact form currently prepares an email using `mailto:hello@example.com`. Replace `hello@example.com` in `src/App.jsx` before launch, or connect the form to your preferred backend/form service.
- The 3D tiki mask is procedurally modelled from Three.js geometry for this prototype; it is not a scanned or artist-made cultural artifact. If this becomes a commercial brand, consider commissioning original artwork and reviewing the visual direction for cultural respect.
- The prototype uses Google Fonts via CSS import; self-host fonts for a production deployment if needed.
- Reduced-motion preferences are respected in CSS, but a production build should also offer a dedicated low-motion 3D mode.
