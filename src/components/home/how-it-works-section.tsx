import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import { howItWorksSteps } from "@/lib/data";

export async function HowItWorksSection() {
  const t = await getTranslations("howItWorks");

  return (
    <section className="bg-section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={t("badge")} title={t("title")} description={t("description")} />
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div
            className="absolute top-16 hidden h-0.5 w-full bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 rtl:bg-gradient-to-l"
            aria-hidden
          />
          {howItWorksSteps.map((step, i) => (
            <FadeIn key={step} delay={i * 0.1}>
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary font-heading text-2xl font-bold text-white shadow-premium">
                  {step}
                </div>
                <h3 className="mt-6 font-heading text-lg font-semibold text-primary">
                  {t(`steps.${step}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {t(`steps.${step}.description`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
