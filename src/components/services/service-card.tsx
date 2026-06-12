"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { serviceIcons, type ServiceConfig, type ServiceId } from "@/lib/data";
import { useLocale } from "next-intl";
import { formatPrice } from "@/lib/format";
import type { Locale } from "@/i18n/routing";

type ServiceCardProps = {
  serviceId: ServiceId;
  config: ServiceConfig;
  detailed?: boolean;
};

export function ServiceCard({ serviceId, config, detailed = false }: ServiceCardProps) {
  const t = useTranslations("services.items");
  const tCommon = useTranslations("common");
  const locale = useLocale() as Locale;
  const Icon = serviceIcons[config.icon];
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const benefits = [0, 1, 2].map((i) => t(`${serviceId}.benefits.${i}`));

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="group h-full overflow-hidden border-accent shadow-premium hover:border-primary/20 hover:shadow-premium-lg">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={config.image}
            alt={t(`${serviceId}.title`)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
          <div className="absolute bottom-4 start-4 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="font-heading text-xl font-semibold text-primary">
            {t(`${serviceId}.title`)}
          </h3>
          <p className="mt-2 line-clamp-3 min-h-[70px] text-sm leading-relaxed text-text-muted">
            {t(`${serviceId}.description`)}
          </p>
          {detailed && (
            <ul className="mt-4 space-y-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-text">
                  <Check className="h-4 w-4 shrink-0 text-secondary" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm font-medium text-primary">
              {tCommon("from")}{" "}
              <span className="text-lg font-bold text-secondary">
                {formatPrice(config.priceFrom, locale)}
              </span>
            </p>
            <Button asChild variant="ghost" size="sm" className="group/btn text-primary">
              <Link href="/booking">
                {tCommon("book")}
                <Arrow className="transition-transform group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
