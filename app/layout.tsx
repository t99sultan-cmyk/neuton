import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { StructuredData } from "@/components/seo/StructuredData";
import "./globals.css";

const YANDEX_METRIKA_ID = 44929738;

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
        <StructuredData />
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(${YANDEX_METRIKA_ID}, "init", { defer: true, clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: false, ecommerce: "dataLayer" });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
