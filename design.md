# Atlante — IA a scuola / Design

An Italian-language editorial, evidence-led single-page website for upper-secondary teachers and school leaders. It compares Italy, the EU average and Australia and contextualises Legislative Decree 179/2026 as of 20 October 2026.

## Identity

Contemporary research journal, not a SaaS dashboard: warm paper `#f5f2eb`, ink `#203039`, muted ink `#687273`, terracotta `#ad513b`, sage `#788d7d`, pale sand `#e9e4da`, charcoal section `#203039`. Hairline dividers, occasional vertical rules, little to no rounded corners. Use plenty of whitespace and strong editorial hierarchy. Avoid stock photos: bespoke typographic and CSS diagrams carry the narrative.

## Typography

Display: DM Serif Display, editorial serif; body and UI: Manrope, clean sans. Small uppercase labels with generous tracking; large display headlines with tight leading; readable body at 16–18px. Fonts loaded from Google Fonts with Georgia/Arial fallbacks.

## Layout and motion

Centered max-width 1240px; desktop split hero, asymmetric sections, three-column metric strips, editorial comparison table; responsive stacked layout on mobile. Native anchored navigation, comparison view switcher, accessible disclosure for methodology. Subtle fade-in on load, reduced-motion support. Emphasis on clear source labels and legal-status distinctions.

## Pages, files, architecture

One page only at `/`, implemented in `packages/web/src/web/pages/index.tsx` and `packages/web/src/web/styles.css`. No new API routes, database tables, authentication or network data fetching: editorial facts and outbound primary-source links are curated in the component. The standard scaffold remains intact.
