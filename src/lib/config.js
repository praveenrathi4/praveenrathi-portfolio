const DEFAULT_SITE_URL = "https://praveenrathi-portfolio.vercel.app";

/** Canonical site URL for metadata, sitemap, and Open Graph. */
export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}
