import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { TrustBadgesSection } from "@/components/home/trust-badges-section";
import { ServicesSection } from "@/components/home/services-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { GallerySection } from "@/components/home/gallery-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ServiceAreasSection } from "@/components/home/service-areas-section";
import { FaqSection } from "@/components/home/faq-section";
import { ContactSection } from "@/components/home/contact-section";
import { CtaSection } from "@/components/home/cta-section";
import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    path: "/",
    locale: locale as Locale,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <StatsSection />
      <TrustBadgesSection />
      <ServicesSection />
      <WhyChooseSection />
      <GallerySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
    </>
  );
}
