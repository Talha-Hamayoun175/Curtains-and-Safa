import { SectionHeader } from "@/components/layout/section-header";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { whyChooseIcons, whyChooseUs } from "@/lib/data";

export function WhyChooseSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="The SparkleClean Difference"
          description="We combine trained professionals, eco-friendly products, and transparent pricing to deliver results you can trust."
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = whyChooseIcons[item.icon];
            return (
              <StaggerItem key={item.title}>
                <div className="group rounded-2xl border border-slate-100 bg-section/50 p-8 transition-all hover:border-teal/30 hover:bg-white hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text min-h-[46px]">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
