import type { Metadata } from "next";
import { CONTACT, SITE_NAME, SITE_URL } from "./constants";

type PageSEO = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
}: PageSEO): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `${SITE_NAME} | Premium House Cleaning Services`
      : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
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

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description:
      "Premium house cleaning, deep cleaning, office, hotel, and commercial cleaning services.",
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Clean Street, Suite 100",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1250",
    },
    areaServed: "United States",
    serviceType: [
      "House Cleaning",
      "Deep Cleaning",
      "Office Cleaning",
      "Hotel Cleaning",
      "Commercial Cleaning",
    ],
  };
}
