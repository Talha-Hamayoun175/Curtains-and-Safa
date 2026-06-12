"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Award, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { heroImages } from "@/lib/data";

export function HeroSection() {
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");

  const trustItems = [
    { icon: Star, label: t("statRating"), sub: t("statReviews") },
    { icon: Shield, label: t("statInsured"), sub: t("statBonded") },
    { icon: Award, label: t("statExperience"), sub: t("statExperienceSub") },
  ];

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <Image
        src={heroImages.background}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 rtl:bg-gradient-to-l" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-20 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary backdrop-blur-sm">
              <Award className="h-4 w-4" />
              {t("badge")}
            </span>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {t("title")}{" "}
              <span className="text-secondary">{t("titleHighlight")}</span>{" "}
              {t("titleEnd")}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-accent/90">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/booking">{tCommon("bookNow")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">{tCommon("getQuote")}</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                    <item.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-accent/70">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-premium-lg">
                <Image
                  src={heroImages.featured}
                  alt=""
                  width={500}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -start-6 rounded-2xl bg-white p-5 shadow-premium-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="font-heading text-3xl font-bold text-primary">{t("happyCustomers")}</p>
                <p className="text-sm text-text-muted">{t("happyCustomersLabel")}</p>
              </motion.div>
              <motion.div
                className="absolute -end-4 top-8 rounded-2xl border border-accent bg-white/95 p-4 shadow-premium backdrop-blur-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                  {t("sameDay")}
                </p>
                <p className="mt-1 font-heading text-lg font-semibold text-primary">
                  {t("sameDayLabel")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
