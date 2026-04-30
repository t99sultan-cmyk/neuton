import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://neuton.kz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ньютон — детский коррекционный центр в Алматы",
    template: "%s · Ньютон",
  },
  description:
    "Профессиональная коррекция речи, поведения и развития детей в Алматы. АВА-терапия, логопед-дефектолог, сенсорная интеграция, АФК. Прямая трансляция занятий для родителей. Диагностика 5 000 ₸ по акции.",
  keywords: [
    "детский коррекционный центр Алматы",
    "АВА терапия Алматы",
    "логопед-дефектолог",
    "сенсорная интеграция",
    "коррекция аутизма",
    "Ньютон детский центр",
    "логопедический массаж",
    "АФК для детей",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: SITE_URL,
    siteName: "Детский коррекционный центр «Ньютон»",
    title: "Ньютон — детский коррекционный центр в Алматы",
    description:
      "Профессиональная коррекция речи, поведения и развития детей. Прямые трансляции для родителей. Диагностика 5 000 ₸.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ньютон — детский коррекционный центр в Алматы",
    description:
      "Помогаем детям с особенностями развития. АВА, логопед, сенсорная интеграция. Прямые трансляции для родителей.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0F0E",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Детский коррекционный центр «Ньютон»",
  description:
    "Профессиональная коррекция речи, поведения и развития детей в Алматы.",
  telephone: "+77071989703",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Алматы",
    addressCountry: "KZ",
  },
  sameAs: [
    "https://instagram.com/neuton_almaty",
    "https://www.tiktok.com/@neuton_almaty",
  ],
  priceRange: "₸₸",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={manrope.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-bg text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
