"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { serviceIcons, type Service } from "@/lib/data";

type ServiceCardProps = {
  service: Service;
  detailed?: boolean;
};

export function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="group h-full overflow-hidden border-slate-100 hover:border-teal/30 hover:shadow-xl">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal text-white">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="font-heading text-xl font-semibold text-primary">{service.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text min-h-[70px]">
            {service.description}
          </p>
          {detailed && (
            <ul className="mt-4 space-y-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-text">
                  <Check className="h-4 w-4 shrink-0 text-teal" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-1 flex items-center justify-end">
            {/* <p className="text-sm font-medium text-primary">
              From <span className="text-lg font-bold text-teal">${service.priceFrom}</span>
            </p> */}
            <Button asChild variant="ghost" size="sm" className="group/btn">
              <Link href="/booking">
                Book
                <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
