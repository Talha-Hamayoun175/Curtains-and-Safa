import { HeroSection } from "@/components/home/hero-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { ServicesSection } from "@/components/home/services-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
