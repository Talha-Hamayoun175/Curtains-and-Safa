import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/fade-in";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <FadeIn className={cn(centered && "text-center", "mb-12 md:mb-16", className)}>
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-secondary/15 px-4 py-1.5 text-sm font-medium text-secondary">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
