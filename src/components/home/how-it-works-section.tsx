import { SectionHeader } from "@/components/layout/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import { howItWorks } from "@/lib/data";

export function HowItWorksSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title="Four Simple Steps to a Cleaner Space"
          description="Our streamlined process makes booking and enjoying professional cleaning effortless."
        />
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-16 hidden h-0.5 w-full bg-gradient-to-r from-teal/20 via-teal to-teal/20 lg:block" aria-hidden />
          {howItWorks.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.1}>
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal font-heading text-2xl font-bold text-white shadow-lg shadow-teal/30">
                  {step.step}
                </div>
                <h3 className="mt-6 font-heading text-lg font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
