import { site, hours, areaCities } from "../data/site.js";

const ORG_ID = `${site.url}/#org`;
const SITE_ID = `${site.url}/#website`;

function areaServed(cityNames) {
  const cities = (cityNames || areaCities.map((c) => c.name)).map((n) => ({
    "@type": "City",
    name: n,
    addressRegion: site.region,
  }));
  return [
    ...cities,
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.centroid.lat,
        longitude: site.centroid.lng,
      },
      geoRadius: 40000,
    },
  ];
}

export function orgNode() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": ORG_ID,
    additionalType: "https://en.wikipedia.org/wiki/Flat_roof",
    name: site.brand,
    description: site.description,
    url: site.url + "/",
    logo: site.url + "/favicon.svg",
    image: [site.url + "/images/hero.jpg", site.url + "/images/commercial-flat-roofing.jpg"],
    telephone: site.phoneE164,
    priceRange: "$$",
    areaServed: areaServed(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.centroid.lat,
      longitude: site.centroid.lng,
    },
    openingHoursSpecification: hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneE164,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

export function websiteNode() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: site.url + "/",
    name: site.brand,
    publisher: { "@id": ORG_ID },
  };
}

export function serviceNode({ name, serviceType, description, path, cities }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: site.url + path,
    provider: { "@id": ORG_ID },
    areaServed: areaServed(cities),
  };
}

export function breadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: site.url + it.path,
    })),
  };
}

export function faqNode(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function itemListNode(services) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.label,
      url: site.url + `/${s.slug}/`,
    })),
  };
}
