"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-8 transition-shadow",
        highlighted
          ? "border-teal bg-primary text-white shadow-2xl shadow-teal/20"
          : "border-slate-100 bg-white shadow-sm hover:shadow-xl"
      )}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal px-4 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3
        className={cn(
          "font-heading text-xl font-semibold",
          highlighted ? "text-white" : "text-primary"
        )}
      >
        {name}
      </h3>
      <p className={cn("mt-2 text-sm", highlighted ? "text-slate-300" : "text-text")}>
        {description}
      </p>
      <div className="mt-6">
        <span className="font-heading text-4xl font-bold">${price}</span>
        <span className={cn("text-sm", highlighted ? "text-slate-300" : "text-text")}>
          {" "}
          / {period}
        </span>
      </div>
      <ul className="mt-8 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                highlighted ? "text-teal" : "text-teal"
              )}
            />
            <span className={highlighted ? "text-slate-200" : "text-text"}>{f}</span>
          </li>
        ))}
      </ul>
      <Button
        asChild
        className="mt-8 w-full"
        variant={highlighted ? "default" : "secondary"}
      >
        <Link href="/booking">Get Started</Link>
      </Button>
    </motion.div>
  );
}
