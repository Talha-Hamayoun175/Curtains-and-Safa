import type { Metadata } from "next";
import { CONTACT, SITE_NAME_AR, SITE_NAME_EN, SITE_URL } from "./constants";
import type { Locale } from "@/i18n/routing";

type PageSEO = {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  locale: Locale;
};

function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === "ar") {
    return path === "/" || path === "" ? "/ar" : `/ar${path}`;
  }
  return path === "/" ? "" : path;
}

export function createMetadata({
  title,
  description,
  keywords,
  path = "/",
  locale,
}: PageSEO): Metadata {
  const normalizedPath = path === "/" ? "" : path;
  const localizedPath = getLocalizedPath(normalizedPath, locale);
  const url = `${SITE_URL}${localizedPath || "/"}`;
  const siteName = locale === "ar" ? SITE_NAME_AR : SITE_NAME_EN;
  const fullTitle =
    normalizedPath === ""
      ? title
      : `${title} | ${siteName}`;

  const alternateEn = `${SITE_URL}${normalizedPath || "/"}`;
  const alternateAr = `${SITE_URL}/ar${normalizedPath}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords?.split(",").map((k) => k.trim()),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        en: alternateEn,
        ar: alternateAr,
        "x-default": alternateEn,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_SA",
      alternateLocale: locale === "ar" ? "en_SA" : "ar_SA",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function localBusinessJsonLd(locale: Locale) {
  const siteName = locale === "ar" ? SITE_NAME_AR : SITE_NAME_EN;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    description:
      locale === "ar"
        ? "خدمات تنظيف الستائر والكنب وتركيبها وإصلاحها وتنظيف المفروشات في السعودية."
        : "Premium curtain cleaning, installation, repair, sofa cleaning, shampooing, upholstery care, and home deep cleaning services in Saudi Arabia.",
    url: SITE_URL,
    telephone: CONTACT.phoneTel,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "King Fahd Road, Al Olaya",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh Province",
      postalCode: "12211",
      addressCountry: "SA",
    },
    priceRange: "$$",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Credit Card, Mada",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "850",
    },
    areaServed: [
      "Riyadh",
      "Jeddah",
      "Dammam",
      "Khobar",
      "Makkah",
      "Madinah",
      "Taif",
    ],
    serviceType:
      locale === "ar"
        ? [
            "تنظيف الستائر",
            "تركيب الستائر",
            "إصلاح الستائر",
            "تنظيف الكنب",
            "غسيل الكنب",
            "تنظيف المفروشات",
            "تنظيف المنازل",
          ]
        : [
            "Curtain Cleaning",
            "Curtain Installation",
            "Curtain Repair",
            "Sofa Cleaning",
            "Sofa Shampooing",
            "Upholstery Cleaning",
            "Home Deep Cleaning",
          ],
  };
}
