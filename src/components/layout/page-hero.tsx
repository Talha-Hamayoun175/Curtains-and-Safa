import { FloatingShapes } from "@/components/motion/floating-shapes";
import { FadeIn } from "@/components/motion/fade-in";

type PageHeroProps = {
  title: string;
  description: string;
  badge?: string;
};

export function PageHero({ title, description, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      <FloatingShapes />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          {badge && (
            <span className="mb-4 inline-block rounded-full bg-teal/20 px-4 py-1.5 text-sm font-medium text-teal">
              {badge}
            </span>
          )}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">{description}</p>
        </FadeIn>
      </div>
    </section>
  );
}
