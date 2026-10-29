# ELVEN — shared UI enhancements without redesign

The existing page templates are intentionally preserved. The homepage and yeast page use green styling; other product pages use the navy/gold palette.

Shared additive files:
- `assets/elven-ui-polish.css`: keyboard focus ring, icon alignment, touch responsiveness, logo-fit safety, subtle hover feedback and reduced-motion.
- `assets/elven-ui-polish.js`: close existing mobile navigation with Escape, outside click or link selection; ARIA menu-state synchronization; arrow/Home/End keyboard navigation in existing tab components; asynchronous logo decoding.

No product card sizes, images, hero sections, borders, main colors, brand logos, layout, product content, existing interactions or CTA URLs are replaced. The sugar page also receives its missing closing `</head>` tag.

## Site-specific component families
1. Homepage category cards: keep featured tile and category grid.
2. Photo product cards: pasta, tomato paste, milk powder, canned food and generic products.
3. Text product cards: glucose/starch retains 2 cards and 4 accordion types.
4. Brand-first galleries: sugar and baking soda.
5. Yeast: separate custom rich experience (keep current modals, sliders and green styling).

## QA checklist
- Keyboard Tab / Enter / Escape, focus rings, menu opened state, close-on-outside-click.
- ArrowLeft / ArrowRight / Home / End keys on existing product tabs.
- Original desktop and mobile product views at 1440, 768, 390 and 360 CSS pixels.
- Reduced-motion setting, original images and PDF availability.
