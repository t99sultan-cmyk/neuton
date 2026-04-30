import type { MetadataRoute } from "next";

const SITE_URL = "https://neuton.kz";

export default function robots(): MetadataRoute.Robots {
  // Block indexing on Vercel preview/production-vercel domain to avoid
  // duplicate content; allow only the canonical custom domain.
  const isVercelPreview =
    process.env.VERCEL_ENV !== "production" ||
    process.env.VERCEL_URL?.includes("vercel.app");

  if (isVercelPreview) {
    return {
      rules: { userAgent: "*", disallow: "/" },
      host: SITE_URL,
    };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
