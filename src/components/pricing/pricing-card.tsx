"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/format";
import type { Locale } from "@/i18n/routing";

type PricingCardProps = {
  planKey: "essential" | "premium" | "complete";
  price: number;
  periodKey: "perItem" | "perRoom" | "perHome";
  highlighted?: boolean;
};

export function PricingCard({
  planKey,
  price,
  periodKey,
  highlighted = false,
}: PricingCardProps) {
  const t = useTranslations("pricing.plans");
  const tCommon = useTranslations("common");
  const locale = useLocale() as Locale;
  const features = t.raw(`${planKey}.features`) as string[];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-8 transition-shadow",
        highlighted
          ? "border-secondary bg-primary text-white shadow-premium-lg"
          : "border-accent bg-white shadow-premium hover:shadow-premium-lg"
      )}
    >
      {highlighted && (
        <span className="absolute -top-3 start-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-primary">
          {tCommon("mostPopular")}
        </span>
      )}
      <h3
        className={cn(
          "font-heading text-xl font-semibold",
          highlighted ? "text-white" : "text-primary"
        )}
      >
        {t(`${planKey}.name`)}
      </h3>
      <p className={cn("mt-2 text-sm", highlighted ? "text-accent/80" : "text-text-muted")}>
        {t(`${planKey}.description`)}
      </p>
      <div className="mt-6">
        <span className="font-heading text-4xl font-bold">{formatPrice(price, locale)}</span>
        <span className={cn("text-sm", highlighted ? "text-accent/80" : "text-text-muted")}>
          {" "}
          / {tCommon(periodKey)}
        </span>
      </div>
      <ul className="mt-8 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                highlighted ? "text-secondary" : "text-primary"
              )}
            />
            <span className={highlighted ? "text-accent/90" : "text-text"}>{f}</span>
          </li>
        ))}
      </ul>
      <Button
        asChild
        className="mt-8 w-full"
        variant={highlighted ? "secondary" : "default"}
      >
        <Link href="/booking">{tCommon("getStarted")}</Link>
      </Button>
    </motion.div>
  );
}
