# Dallas Flat Roofing — Build Notes

**Domain:** dallasflatroofing.com · **Brand:** Dallas Flat Roofing · **Location:** Dallas, TX (DFW metroplex)
**Type:** Lead gen · Pay-per-call (phone only) · eLocal connector · Routing-honest framing
**Phone:** 000-000-0000 (PLACEHOLDER — replace in `src/data/site.js` before real launch)
**Niche:** FLAT ROOFS ONLY (low-slope). No shingles/steep-slope/general roofing anywhere on the site.

## Design direction (inspiration: premier-roofing.com screenshot, not the playbook default)
- **Palette:** deep navy `#0E2A47` + blues `#1668B0`/`#2E90E5` + gold CTA `#F6B21B`, light-blue tint `#EEF4FB`. Premier's navy+blue+gold trust look.
- **Type:** Poppins (geometric-sans headings) + Inter (body). Deliberately different from the pest build's Crimson Text serif (no-copy registry rule).
- **Signature module:** Premier-style **"Flat Roof Systems We Install" tabbed panel** (CSS-only radio tabs: Membranes / Repairs & Leaks / Coatings & Built-Up), each with a blue detail card + a 3-tile image grid linking to service pages.
- Kept from Premier: full-bleed dark hero, three category cards overlapping the hero, work gallery grid, service-area section, process band, FAQ accordion, gold CTAs.
- **Dropped from Premier for eLocal compliance:** Lifetime Workmanship Warranty badge, testimonials, "20 Years Experience", careers, blog, and all "free inspection/estimate" language. CTA is "Call Now" (the conversion is the phone), not "Request Inspection" (implies free booking).

## Architecture (26 pages, Astro, static, trailingSlash always)
Home · Services hub · **11 service pages** (flat-roof-repair, flat-roof-replacement, flat-roof-leak-repair, flat-roof-inspection, tpo-roofing, epdm-roofing, pvc-roofing, modified-bitumen-roofing, built-up-roofing, flat-roof-coatings, commercial-flat-roofing — all `-in-dallas`) · Service-Areas hub · **8 area pages** (downtown-dallas, oak-cliff, uptown-dallas, lakewood, plano, richardson, garland, irving — all `-tx`) · How It Works · About · Contact · Privacy Policy.
Service + area pages generated from `src/data/services.js` and `src/data/areas.js` via `src/pages/[slug].astro`.

## Schema
RoofingContractor (additionalType Flat_roof wiki) + WebSite sitewide from Base; Service + BreadcrumbList per money page; ItemList + FAQPage on home; FAQPage on how-it-works + service/area pages with FAQs. areaServed cities, GeoCircle 40km, no fake address/reviews.

## Content
Home ≥1200 words. Each of 11 service pages ~1000-1300 words; each of 8 area pages ~1000-1100 words. Titles ≤60, metas ≤160 (verified programmatically). Keyword in first 100 words. Real Dallas geography (Deep Ellum, Oak Cliff/Bishop Arts, Uptown/Victory Park, Lakewood/M Streets, Design District, Trinity Groves) and correct flat-roof terminology (TPO/PVC/EPDM/mod-bit/BUR, ponding, tapered insulation, cover board, scuppers, parapets, flashing, HVAC penetrations, heat-welded seams).

## Images
Per-page-unique, build-time fetch via `scripts/fetch-images.mjs` (Pexels, all IDs HTTP-verified 200 + image/jpeg at w=1400). Service photos are a cohesive professional flat-roof shoot (mostly one Pexels photographer, Bulat843). Area photos are Dallas/DFW cityscapes and representative building types (office parks, warehouses) since suburb-specific Pexels photos do not exist.

## Compliance (eLocal connector, per 02-copy-rules.md)
Work credited to "a local flat-roof contractor" / "a local roofer". Model disclosed only in footer disclaimer (verbatim) + privacy policy. No free/warranty/guarantee/credential/years claims, no fake reviews/testimonials/address, no operator "we" claims in body, no referral-model language or "eLocal" in body. "Upfront pricing" and "no obligation" are the only trust framing. Grep-verified clean: no em dashes, no banned terms, no shingle/steep-slope offerings.

## Design registry diff (no-copy rule)
Previous build (pestcontroldanapoint) used Crimson Text serif + Open Sans, a pest-picker icon-selector grid signature, vertical image-top service cards, gold-on-blue. **This build differs:** Poppins + Inter sans, a full-bleed photo hero with overlapping category cards, a CSS tabbed "systems" panel signature (not an icon grid), a work-gallery grid, and RoofingContractor schema. Different skeleton, signature, and type pairing.
