import { SectionHeader } from "@/components/layout/section-header";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { trustBadgeIcons, trustBadgeKeys, type TrustBadgeKey } from "@/lib/data";
import { getTranslations } from "next-intl/server";

export async function TrustBadgesSection() {
  const t = await getTranslations("trustBadges");

  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          className="[&_h2]:text-white [&_p]:text-accent/70 [&_span]:bg-secondary/20 [&_span]:text-secondary"
        />
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {trustBadgeKeys.map((key: TrustBadgeKey) => {
            const Icon = trustBadgeIcons[key];
            return (
              <StaggerItem key={key}>
                <div className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:border-secondary/40 hover:bg-white/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20 text-secondary transition-colors group-hover:bg-secondary group-hover:text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-4 font-heading text-sm font-semibold text-white">
                    {t(key)}
                  </p>
                  <p className="mt-1 text-xs text-secondary/80">{t(`${key}Ar`)}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
