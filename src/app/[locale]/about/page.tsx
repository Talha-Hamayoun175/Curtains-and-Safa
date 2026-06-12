import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Target, Eye, Heart, Award } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { achievementKeys, coreValueKeys, pageHeroImages, teamConfigs } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/about",
    locale: locale as Locale,
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("pageTitle")}
        description={t("pageDescription")}
        image={pageHeroImages.about}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <span className="text-sm font-medium text-secondary">{t("storyLabel")}</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-primary md:text-4xl">
                {t("storyTitle")}
              </h2>
              <p className="mt-6 leading-relaxed text-text-muted">{t("storyP1")}</p>
              <p className="mt-4 leading-relaxed text-text-muted">{t("storyP2")}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium-lg">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-section py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl border border-accent bg-white p-8 shadow-premium">
                <Target className="h-10 w-10 text-secondary" />
                <h3 className="mt-4 font-heading text-xl font-semibold text-primary">{t("mission")}</h3>
                <p className="mt-3 leading-relaxed text-text-muted">{t("missionText")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-accent bg-white p-8 shadow-premium">
                <Eye className="h-10 w-10 text-secondary" />
                <h3 className="mt-4 font-heading text-xl font-semibold text-primary">{t("vision")}</h3>
                <p className="mt-3 leading-relaxed text-text-muted">{t("visionText")}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={t("valuesBadge")}
            title={t("valuesTitle")}
            description={t("valuesDescription")}
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValueKeys.map((key) => (
              <StaggerItem key={key}>
                <div className="rounded-2xl border border-accent p-6 text-center shadow-premium transition-all hover:border-primary/20 hover:shadow-premium-lg">
                  <Heart className="mx-auto h-8 w-8 text-secondary" />
                  <h3 className="mt-4 font-heading font-semibold text-primary">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">{t(`values.${key}.description`)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-section py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={t("teamBadge")} title={t("teamTitle")} />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamConfigs.map((member, i) => (
              <FadeIn key={member.id} delay={i * 0.1}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-premium transition-shadow hover:shadow-premium-lg">
                  <div className="relative h-56">
                    <Image src={member.image} alt="" fill className="object-cover" sizes="280px" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-primary">
                      {t(`team.${member.id}.name`)}
                    </h3>
                    <p className="text-sm font-medium text-secondary">
                      {t(`team.${member.id}.role`)}
                    </p>
                    <p className="mt-2 text-sm text-text-muted">{t(`team.${member.id}.bio`)}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={t("milestonesBadge")} title={t("milestonesTitle")} />
          <div className="relative">
            <div className="absolute start-4 top-0 hidden h-full w-0.5 bg-primary/20 md:start-1/2 md:block" aria-hidden />
            {achievementKeys.map((key, i) => (
              <FadeIn key={key} delay={i * 0.1}>
                <div
                  className={`relative mb-12 flex flex-col md:w-1/2 ${
                    i % 2 === 0
                      ? "md:ms-0 md:pe-12 md:text-end"
                      : "md:ms-auto md:ps-12 md:text-start"
                  }`}
                >
                  <span className="font-heading text-2xl font-bold text-secondary">
                    {t(`achievements.${key}.year`)}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-primary">
                    {t(`achievements.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">
                    {t(`achievements.${key}.description`)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Award className="mx-auto h-12 w-12 text-secondary" />
          <h2 className="mt-6 font-heading text-3xl font-bold text-white md:text-4xl">
            {t("trustTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-accent/80">{t("trustDescription")}</p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/booking">{t("bookFirst")}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
