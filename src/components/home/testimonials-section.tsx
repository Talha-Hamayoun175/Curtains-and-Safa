"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { testimonialConfigs } from "@/lib/data";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const [index, setIndex] = useState(0);
  const current = testimonialConfigs[index];

  const next = () => setIndex((i) => (i + 1) % testimonialConfigs.length);
  const prev = () => setIndex((i) => (i - 1 + testimonialConfigs.length) % testimonialConfigs.length);

  const PrevIcon = locale === "ar" ? ChevronRight : ChevronLeft;
  const NextIcon = locale === "ar" ? ChevronLeft : ChevronRight;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={t("badge")} title={t("title")} description={t("description")} />
        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-accent bg-section/50 p-8 shadow-premium md:p-12"
            >
              <Quote className="h-10 w-10 text-secondary/40" />
              <p className="mt-6 text-lg leading-relaxed text-text md:text-xl">
                &ldquo;{t(`items.${current.id}.text`)}&rdquo;
              </p>
              <div className="mt-6 flex gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-secondary/30">
                  <Image
                    src={current.photo}
                    alt={t(`items.${current.id}.name`)}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-primary">
                    {t(`items.${current.id}.name`)}
                  </p>
                  <p className="text-sm text-text-muted">{t(`items.${current.id}.role`)}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-accent bg-white p-2.5 text-primary transition-all hover:bg-primary hover:text-white"
              aria-label={tCommon("previous")}
            >
              <PrevIcon className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonialConfigs.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-primary" : "w-2 bg-accent"
                  }`}
                  aria-label={`${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-accent bg-white p-2.5 text-primary transition-all hover:bg-primary hover:text-white"
              aria-label={tCommon("next")}
            >
              <NextIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
