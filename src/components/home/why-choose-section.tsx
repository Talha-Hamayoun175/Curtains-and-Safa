import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/layout/section-header";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { whyChooseIcons, whyChooseKeys } from "@/lib/data";

export async function WhyChooseSection() {
  const t = await getTranslations("whyChoose");

  return (
    <section className="bg-section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={t("badge")} title={t("title")} description={t("description")} />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyChooseKeys.map((key) => {
            const Icon = whyChooseIcons[key];
            return (
              <StaggerItem key={key}>
                <div className="group h-full rounded-2xl border border-accent bg-white p-8 shadow-premium transition-all hover:border-primary/20 hover:shadow-premium-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
