"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { galleryConfigs } from "@/lib/data";
import { useLocale } from "next-intl";

export function GallerySection() {
  const t = useTranslations("gallery");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<"before" | "after" | null>(null);

  const current = galleryConfigs[index];
  const prev = () => setIndex((i) => (i - 1 + galleryConfigs.length) % galleryConfigs.length);
  const next = () => setIndex((i) => (i + 1) % galleryConfigs.length);

  const PrevIcon = locale === "ar" ? ChevronRight : ChevronLeft;
  const NextIcon = locale === "ar" ? ChevronLeft : ChevronRight;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={t("badge")} title={t("title")} description={t("description")} />

        <div className="relative mx-auto max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mb-6 text-center font-heading text-xl font-semibold text-primary">
                {t(`items.${current.id}.title`)}
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {(["before", "after"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setLightbox(type)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium transition-shadow hover:shadow-premium-lg"
                  >
                    <Image
                      src={type === "before" ? current.before : current.after}
                      alt={`${t(`items.${current.id}.title`)} - ${tCommon(type)}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                    <span
                      className={`absolute start-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                        type === "before"
                          ? "bg-text/80 text-white"
                          : "bg-secondary text-primary"
                      }`}
                    >
                      {tCommon(type)}
                    </span>
                    <div className="absolute bottom-4 end-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      <ZoomIn className="h-5 w-5" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-accent bg-accent/50 p-2.5 text-primary transition-all hover:bg-primary hover:text-white"
              aria-label={tCommon("previous")}
            >
              <PrevIcon className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {galleryConfigs.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-primary" : "w-2 bg-accent"
                  }`}
                  aria-label={t(`items.${item.id}.title`)}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-accent bg-accent/50 p-2.5 text-primary transition-all hover:bg-primary hover:text-white"
              aria-label={tCommon("next")}
            >
              <NextIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute end-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label={tCommon("close")}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={lightbox === "before" ? current.before : current.after}
                  alt={`${t(`items.${current.id}.title`)} - ${tCommon(lightbox)}`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <p className="mt-4 text-center font-heading text-lg text-white">
                {t(`items.${current.id}.title`)} — {tCommon(lightbox)}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
