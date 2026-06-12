import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/layout/page-hero";
import { BookingForm } from "@/components/forms/booking-form";
import { FadeIn } from "@/components/motion/fade-in";
import { pageHeroImages } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.booking" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/booking",
    locale: locale as Locale,
  });
}

export default async function BookingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("booking");

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("pageTitle")}
        description={t("pageDescription")}
        image={pageHeroImages.booking}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl border border-accent bg-white p-8 shadow-premium md:p-10">
              <BookingForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
