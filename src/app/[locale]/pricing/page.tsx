import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeader } from "@/components/layout/section-header";
import { PricingCard } from "@/components/pricing/pricing-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { pageHeroImages, pricingPlanConfig, pricingPlanKeys } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pricing" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/pricing",
    locale: locale as Locale,
  });
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pricing");

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("pageTitle")}
        description={t("pageDescription")}
        image={pageHeroImages.pricing}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("chooseTitle")} description={t("chooseDescription")} />
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlanKeys.map((key, i) => {
              const config = pricingPlanConfig[key];
              return (
                <FadeIn key={key} delay={i * 0.1}>
                  <PricingCard
                    planKey={key}
                    price={config.price}
                    periodKey={config.periodKey}
                    highlighted={config.highlighted}
                  />
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="mt-16 text-center">
            <p className="text-text-muted">{t("customQuote")}</p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/contact">{t("contactCustom")}</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
