export const site = {
  brand: "Dallas Flat Roofing",
  shortBrand: "Dallas Flat Roofing",
  domain: "dallasflatroofing.com",
  url: "https://dallasflatroofing.com",
  region: "TX",
  city: "Dallas",
  phone: "000-000-0000",
  phoneE164: "+1-000-000-0000",
  phoneHref: "tel:+10000000000",
  hoursShort: "Mon–Fri 7am–6pm · Sat 8am–2pm",
  centroid: { lat: 32.7767, lng: -96.797 },
  description:
    "Flat roof repair, replacement, and coatings in Dallas, TX. A local flat-roof contractor handles TPO, EPDM, PVC, modified bitumen, and built-up roofs. Call 000-000-0000.",
};

// Hours the phone is answered (used in schema). Sunday omitted.
export const hours = [
  { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
  { days: ["Saturday"], opens: "08:00", closes: "14:00" },
];

export const areaCities = [
  { name: "Dallas", region: "TX" },
  { name: "Oak Cliff", region: "TX" },
  { name: "Uptown Dallas", region: "TX" },
  { name: "Lakewood", region: "TX" },
  { name: "Plano", region: "TX" },
  { name: "Richardson", region: "TX" },
  { name: "Garland", region: "TX" },
  { name: "Irving", region: "TX" },
];

// All 11 flat-roof service pages (nav + footer + cards)
export const serviceNav = [
  { label: "Flat Roof Repair", slug: "flat-roof-repair-in-dallas", glyph: "i-wrench", img: "/images/flat-roof-repair.jpg" },
  { label: "Flat Roof Replacement", slug: "flat-roof-replacement-in-dallas", glyph: "i-roof", img: "/images/flat-roof-replacement.jpg" },
  { label: "Flat Roof Leak Repair", slug: "flat-roof-leak-repair-in-dallas", glyph: "i-drop", img: "/images/flat-roof-leak-repair.jpg" },
  { label: "Flat Roof Inspection", slug: "flat-roof-inspection-in-dallas", glyph: "i-clipboard", img: "/images/flat-roof-inspection.jpg" },
  { label: "TPO Roofing", slug: "tpo-roofing-in-dallas", glyph: "i-roll", img: "/images/tpo-roofing.jpg" },
  { label: "EPDM (Rubber) Roofing", slug: "epdm-roofing-in-dallas", glyph: "i-shield", img: "/images/epdm-roofing.jpg" },
  { label: "PVC Roofing", slug: "pvc-roofing-in-dallas", glyph: "i-bolt", img: "/images/pvc-roofing.jpg" },
  { label: "Modified Bitumen Roofing", slug: "modified-bitumen-roofing-in-dallas", glyph: "i-flame", img: "/images/modified-bitumen.jpg" },
  { label: "Built-Up Roofing (BUR)", slug: "built-up-roofing-in-dallas", glyph: "i-layers", img: "/images/built-up-roofing.jpg" },
  { label: "Flat Roof Coatings", slug: "flat-roof-coatings-in-dallas", glyph: "i-roller", img: "/images/roof-coatings.jpg" },
  { label: "Commercial Flat Roofing", slug: "commercial-flat-roofing-in-dallas", glyph: "i-building", img: "/images/commercial-flat-roofing.jpg" },
];

// Three category cards under the hero (Premier-style tracks)
export const categoryCards = [
  { label: "Flat Roof Repair", sub: "Leaks, ponding & storm damage", slug: "flat-roof-repair-in-dallas", img: "/images/flat-roof-repair.jpg" },
  { label: "Flat Roof Replacement", sub: "New single-ply & tear-offs", slug: "flat-roof-replacement-in-dallas", img: "/images/flat-roof-replacement.jpg" },
  { label: "Commercial Flat Roofing", sub: "Offices, retail & warehouses", slug: "commercial-flat-roofing-in-dallas", img: "/images/commercial-flat-roofing.jpg" },
];

// Signature module: the "Flat Roof Systems We Install" tabbed panel (home page).
// Grouped into three tabs; each tile links to a service page.
export const systemTabs = [
  {
    id: "membranes",
    label: "Membranes",
    blurbHead: "Single-Ply Membrane Roofs",
    blurb: "TPO, PVC, and EPDM are the workhorses of the modern Dallas flat roof. A local flat-roof contractor installs single-ply membrane sized to your building, heat-welded or fully adhered to stand up to Texas sun, heat, and hail.",
    tiles: [
      { label: "TPO Roofing", slug: "tpo-roofing-in-dallas", img: "/images/tpo-roofing.jpg" },
      { label: "PVC Roofing", slug: "pvc-roofing-in-dallas", img: "/images/pvc-roofing.jpg" },
      { label: "EPDM (Rubber)", slug: "epdm-roofing-in-dallas", img: "/images/epdm-roofing.jpg" },
    ],
  },
  {
    id: "repairs",
    label: "Repairs & Leaks",
    blurbHead: "Repairs, Leaks & Inspections",
    blurb: "Most flat-roof calls in Dallas start with a leak or ponding water. A local roofer traces the water to the real source, at a seam, flashing, drain, or penetration, and fixes it before the deck and insulation are lost.",
    tiles: [
      { label: "Flat Roof Repair", slug: "flat-roof-repair-in-dallas", img: "/images/flat-roof-repair.jpg" },
      { label: "Leak Repair", slug: "flat-roof-leak-repair-in-dallas", img: "/images/flat-roof-leak-repair.jpg" },
      { label: "Roof Inspection", slug: "flat-roof-inspection-in-dallas", img: "/images/flat-roof-inspection.jpg" },
    ],
  },
  {
    id: "coatings",
    label: "Coatings & Built-Up",
    blurbHead: "Coatings, Bitumen & Built-Up",
    blurb: "For aging or large low-slope roofs, a reflective coating or a modified-bitumen or built-up system can add years without a full tear-off. A local flat-roof contractor matches the system to the roof and the budget.",
    tiles: [
      { label: "Roof Coatings", slug: "flat-roof-coatings-in-dallas", img: "/images/roof-coatings.jpg" },
      { label: "Modified Bitumen", slug: "modified-bitumen-roofing-in-dallas", img: "/images/modified-bitumen.jpg" },
      { label: "Built-Up (BUR)", slug: "built-up-roofing-in-dallas", img: "/images/built-up-roofing.jpg" },
    ],
  },
];

// Home gallery (real flat-roof work photos)
export const gallery = [
  { img: "/images/work-membrane.jpg", alt: "A local roofer rolling out a single-ply flat roof membrane on a Dallas building" },
  { img: "/images/work-seam.jpg", alt: "Heat-welding a seam on a TPO flat roof membrane in Dallas" },
  { img: "/images/commercial-flat-roofing.jpg", alt: "A large commercial flat roof with HVAC units in Dallas, TX" },
  { img: "/images/work-drain.jpg", alt: "A flat-roof drain and scupper cleared to stop ponding water" },
  { img: "/images/work-parapet.jpg", alt: "Parapet wall flashing detail on a Dallas flat roof" },
  { img: "/images/roof-coatings.jpg", alt: "Applying a reflective coating to a low-slope roof in Dallas" },
];

export const areaNav = [
  { label: "Downtown Dallas, TX", slug: "downtown-dallas-tx" },
  { label: "Oak Cliff, TX", slug: "oak-cliff-tx" },
  { label: "Uptown Dallas, TX", slug: "uptown-dallas-tx" },
  { label: "Lakewood, TX", slug: "lakewood-tx" },
  { label: "Plano, TX", slug: "plano-tx" },
  { label: "Richardson, TX", slug: "richardson-tx" },
  { label: "Garland, TX", slug: "garland-tx" },
  { label: "Irving, TX", slug: "irving-tx" },
];

// Per-area hero image (unique photo per area page)
export const areaImages = {
  "downtown-dallas-tx": "/images/area-downtown-dallas.jpg",
  "oak-cliff-tx": "/images/area-oak-cliff.jpg",
  "uptown-dallas-tx": "/images/area-uptown-dallas.jpg",
  "lakewood-tx": "/images/area-lakewood.jpg",
  "plano-tx": "/images/area-plano.jpg",
  "richardson-tx": "/images/area-richardson.jpg",
  "garland-tx": "/images/area-garland.jpg",
  "irving-tx": "/images/area-irving.jpg",
};

// Full URL list for sitemap (trailing slashes preserved)
export const allPaths = [
  "/",
  "/services/",
  "/service-areas/",
  "/how-it-works/",
  "/about/",
  "/contact/",
  "/privacy-policy/",
  ...serviceNav.map((s) => `/${s.slug}/`),
  ...areaNav.map((a) => `/${a.slug}/`),
];
