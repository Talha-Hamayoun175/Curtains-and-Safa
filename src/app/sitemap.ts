import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";

const routes = ["", "/about", "/services", "/pricing", "/booking", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of routes) {
      const path = locale === "en" ? route || "/" : `/ar${route}`;
      entries.push({
        url: `${SITE_URL}${path === "/" ? "" : path}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${SITE_URL}${route || "/"}`,
            ar: `${SITE_URL}/ar${route}`,
          },
        },
      });
    }
  }

  return entries;
}
