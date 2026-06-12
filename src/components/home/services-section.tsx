import Link from "next/link";
import { SectionHeader } from "@/components/layout/section-header";
import { ServiceCard } from "@/components/services/service-card";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section className="bg-section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="Complete Cleaning Solutions"
          description="From routine house cleaning to commercial programs — we handle every space with care."
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
