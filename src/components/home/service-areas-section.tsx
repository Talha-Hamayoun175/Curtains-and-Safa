import { getTranslations } from "next-intl/server";
import { MapPin } from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Link } from "@/i18n/navigation";
import { serviceAreaKeys } from "@/lib/data";

export async function ServiceAreasSection() {
  const t = await getTranslations("serviceAreas");

  return (
    <section className="bg-section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={t("badge")} title={t("title")} description={t("description")} />
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {serviceAreaKeys.map((city) => (
            <StaggerItem key={city}>
              <div className="group flex items-center gap-3 rounded-xl border border-accent bg-white p-4 shadow-premium transition-all hover:border-primary/20 hover:shadow-premium-lg">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="font-medium text-text">{t(`cities.${city}`)}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <p className="mt-10 text-center text-sm text-text-muted">
          {t("notListed")}{" "}
          <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
            {t("contactUs")}
          </Link>{" "}
          {t("mayStillHelp")}
        </p>
      </div>
    </section>
  );
}
