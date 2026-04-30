import { FAQ_ITEMS, SERVICES, COMPANY } from "@/lib/content";

const SITE_URL = "https://neuton.kz";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: COMPANY.fullName,
  alternateName: "Neuton",
  description:
    "Профессиональная коррекция речи, поведения и развития детей в Алматы. АВА-терапия, логопед-дефектолог, сенсорная интеграция, АФК, логопедический массаж.",
  telephone: "+77071989703",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Алматы",
    addressCountry: "KZ",
    // TODO: указать реальный streetAddress + postalCode
  },
  // TODO: указать реальный geo при наличии адреса
  // geo: { "@type": "GeoCoordinates", latitude: 43.238, longitude: 76.945 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://instagram.com/neuton_almaty",
    "https://www.tiktok.com/@neuton_almaty",
  ],
  priceRange: "₸₸",
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer,
    },
  })),
};

const services = {
  "@context": "https://schema.org",
  "@graph": SERVICES.map((s) => ({
    "@type": "Service",
    "@id": `${SITE_URL}/#service-${s.id}`,
    name: s.title,
    description: s.description,
    provider: { "@id": `${SITE_URL}/#org` },
    areaServed: { "@type": "City", name: "Алматы" },
    serviceType: s.title,
    ...(s.id === "diagnostics"
      ? {
          offers: {
            "@type": "Offer",
            price: "5000",
            priceCurrency: "KZT",
            availability: "https://schema.org/InStock",
            url: SITE_URL,
            description: "Диагностика по акции — 5 000 ₸ вместо 10 000 ₸",
          },
        }
      : {}),
  })),
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
      />
    </>
  );
}
