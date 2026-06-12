"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useInView, motion } from "framer-motion";
import { Blinds, Sofa, Star, Users } from "lucide-react";
import { statsConfig } from "@/lib/data";

const statIcons = [Users, Blinds, Sofa, Star];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading text-3xl font-bold text-primary md:text-4xl">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section className="border-y border-accent bg-accent/30 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statsConfig.map((stat, i) => {
            const Icon = statIcons[i] ?? Star;
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-premium"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-sm font-medium text-text-muted">{t(stat.key)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
