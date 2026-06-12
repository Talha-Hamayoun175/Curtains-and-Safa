"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, MessageCircle, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingShapes } from "@/components/motion/floating-shapes";
import { WHATSAPP_LINK } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-section to-white pt-8 pb-16 md:pt-12 md:pb-24">
      <FloatingShapes />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
            <Award className="h-4 w-4" />
            Trusted Since 2014 · 4.9★ Rating
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
            Premium Cleaning for a{" "}
            <span className="text-teal">Spotless</span> Home & Office
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text">
            Professional house, deep, office, and commercial cleaning with eco-friendly
            products. Book in minutes — satisfaction guaranteed.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { icon: Star, label: "4.9/5 Rating", sub: "1,250+ reviews" },
              { icon: Shield, label: "Fully Insured", sub: "Bonded teams" },
              { icon: Award, label: "10+ Years", sub: "Experience" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow-sm">
                  <item.icon className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{item.label}</p>
                  <p className="text-xs text-text">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80"
              alt="Professional cleaning team at work"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <motion.div
            className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-xl md:-left-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-heading text-2xl font-bold text-teal">12,500+</p>
            <p className="text-sm text-text">Happy Customers</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
