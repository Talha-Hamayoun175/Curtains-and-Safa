import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/layout/section-header";
import { ServiceCard } from "@/components/services/service-card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { serviceConfigs } from "@/lib/data";

export async function ServicesSection() {
  const t = await getTranslations("services");

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={t("badge")} title={t("title")} description={t("description")} />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceConfigs.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard serviceId={service.id} config={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/services">{t("viewAll")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
