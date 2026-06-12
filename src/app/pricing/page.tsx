import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeader } from "@/components/layout/section-header";
import { PricingCard } from "@/components/pricing/pricing-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Transparent cleaning packages — Basic, Standard, and Premium. Compare features and book your perfect clean today.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title="Simple, Transparent Packages"
        description="No hidden fees. Choose the package that fits your space — upgrade or customize anytime."
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Choose Your Package"
            description="All packages include eco-friendly products, insured professionals, and our satisfaction guarantee."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.1}>
                <PricingCard {...plan} />
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-16 text-center">
            <p className="text-text">
              Need a custom quote for commercial or recurring service?
            </p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/contact">Contact Us for Custom Pricing</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
