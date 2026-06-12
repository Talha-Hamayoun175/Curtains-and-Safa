import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";

type PageHeroProps = {
  title: string;
  description: string;
  badge?: string;
  image?: string;
};

export function PageHero({ title, description, badge, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32">
      {image && (
        <>
          <Image src={image} alt="" fill className="object-cover opacity-20" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80 rtl:bg-gradient-to-l" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          {badge && (
            <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
              {badge}
            </span>
          )}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-accent/80">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
