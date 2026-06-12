"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getWhatsAppLink } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

export function CtaSection() {
  const t = useTranslations("cta");
  const tCommon = useTranslations("common");
  const locale = useLocale() as Locale;
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center shadow-premium-lg md:px-16 md:py-20"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23C9A227\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
          <div className="relative">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-accent/80">{t("description")}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/booking">
                  {tCommon("bookNow")}
                  <Arrow className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:text-primary"
              >
                <Link href="/pricing">{t("viewPricing")}</Link>
              </Button>
              <Button asChild size="lg" variant="whatsapp">
                <a href={getWhatsAppLink(locale)} target="_blank" rel="noopener noreferrer">
                  {tCommon("whatsappUs")}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
