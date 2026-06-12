import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeader } from "@/components/layout/section-header";
import { ServiceCard } from "@/components/services/service-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { pageHeroImages, serviceConfigs } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/services",
    locale: locale as Locale,
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("pageTitle")}
        description={t("pageDescription")}
        image={pageHeroImages.services}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("menuTitle")} description={t("menuDescription")} />
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceConfigs.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard serviceId={service.id} config={service} detailed />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
