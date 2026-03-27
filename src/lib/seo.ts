export const SITE_URL = "https://ortovet.lt";
export const DEFAULT_SEO_IMAGE = "/og-image.jpg";
export const ORGANIZATION_NAME = "Ortovet veterinarijos klinika";
export const BUSINESS_PHONE_E164 = "+37065208000";
export const BUSINESS_PHONE_DISPLAY = "(0-652) 08000";
export const BUSINESS_EMAIL = "ortovetklinika@gmail.com";

export const BUSINESS_ADDRESS = {
  streetAddress: "Linkuvos g. 67",
  addressLocality: "Kaunas",
  postalCode: "48314",
  addressCountry: "LT",
};

export const BUSINESS_SOCIALS = [
  "https://www.facebook.com/ortovet.lt?locale=lt_LT",
  "https://www.instagram.com/ortovet.lt/",
];

export const OPENING_HOURS_SPECIFICATION = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "21:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "10:00",
    closes: "15:00",
  },
];

export function buildAbsoluteUrl(path: string) {
  if (!path) {
    return SITE_URL;
  }

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, SITE_URL).toString();
}

export function createBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.path),
    })),
  };
}

export function createVeterinaryCareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
    image: buildAbsoluteUrl(DEFAULT_SEO_IMAGE),
    telephone: BUSINESS_PHONE_E164,
    email: BUSINESS_EMAIL,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_ADDRESS,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 54.9132457,
      longitude: 23.8883354,
    },
    areaServed: {
      "@type": "City",
      name: "Kaunas",
    },
    openingHoursSpecification: OPENING_HOURS_SPECIFICATION,
    sameAs: BUSINESS_SOCIALS,
    priceRange: "€€",
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORGANIZATION_NAME,
    url: SITE_URL,
    inLanguage: "lt-LT",
  };
}
