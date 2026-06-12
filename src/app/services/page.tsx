import { PageHero } from "@/components/layout/page-hero";
import { SectionHeader } from "@/components/layout/section-header";
import { ServiceCard } from "@/components/services/service-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { services } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cleaning Services",
  description:
    "Explore our full range of cleaning services — house, deep, office, hotel, carpet, sofa, kitchen, bathroom, and commercial cleaning.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Professional Cleaning for Every Space"
        description="Detailed service packages with transparent pricing. Book the right clean for your needs."
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Service Menu"
            description="Each service includes eco-friendly products, trained professionals, and our satisfaction guarantee."
          />
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} detailed />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
