import type { LucideIcon } from "lucide-react";
import {
  Blinds,
  Droplets,
  Headphones,
  Home,
  Shield,
  Sofa,
  Sparkles,
  SprayCan,
  Timer,
  Users,
  Wallet,
  Wrench,
  Zap,
} from "lucide-react";
import { SAUDI_CITIES } from "./constants";

export type IconName =
  | "blinds"
  | "wrench"
  | "sofa"
  | "droplets"
  | "sparkles"
  | "spray"
  | "home";

export const serviceIcons: Record<IconName, LucideIcon> = {
  blinds: Blinds,
  wrench: Wrench,
  sofa: Sofa,
  droplets: Droplets,
  sparkles: Sparkles,
  spray: SprayCan,
  home: Home,
};

export type ServiceId =
  | "curtain-cleaning"
  | "curtain-installation"
  | "curtain-repair"
  | "sofa-cleaning"
  | "sofa-shampooing"
  | "sofa-repair"
  | "upholstery-cleaning"
  | "deep-cleaning";

export type ServiceConfig = {
  id: ServiceId;
  slug: string;
  priceFrom: number;
  image: string;
  icon: IconName;
};

export const serviceConfigs: ServiceConfig[] = [
  {
    id: "curtain-cleaning",
    slug: "curtain-cleaning",
    priceFrom: 189,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    icon: "blinds",
  },
  {
    id: "curtain-installation",
    slug: "curtain-installation",
    priceFrom: 299,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    icon: "wrench",
  },
  {
    id: "curtain-repair",
    slug: "curtain-repair",
    priceFrom: 149,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    icon: "wrench",
  },
  {
    id: "sofa-cleaning",
    slug: "sofa-cleaning",
    priceFrom: 249,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    icon: "sofa",
  },
  {
    id: "sofa-shampooing",
    slug: "sofa-shampooing",
    priceFrom: 299,
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    icon: "droplets",
  },
  {
    id: "sofa-repair",
    slug: "sofa-repair",
    priceFrom: 199,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    icon: "wrench",
  },
  {
    id: "upholstery-cleaning",
    slug: "upholstery-cleaning",
    priceFrom: 219,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    icon: "sparkles",
  },
  {
    id: "deep-cleaning",
    slug: "home-deep-cleaning",
    priceFrom: 599,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    icon: "home",
  },
];

export type WhyChooseKey =
  | "experienced"
  | "affordable"
  | "sameDay"
  | "guarantee"
  | "equipment";

export const whyChooseKeys: WhyChooseKey[] = [
  "experienced",
  "affordable",
  "sameDay",
  "guarantee",
  "equipment",
];

export const whyChooseIcons: Record<WhyChooseKey, LucideIcon> = {
  experienced: Users,
  affordable: Wallet,
  sameDay: Timer,
  guarantee: Shield,
  equipment: SprayCan,
};

export type TrustBadgeKey =
  | "fastService"
  | "qualityGuarantee"
  | "competitivePricing"
  | "professionalTeam"
  | "sameDayService"
  | "support247";

export const trustBadgeKeys: TrustBadgeKey[] = [
  "fastService",
  "qualityGuarantee",
  "competitivePricing",
  "professionalTeam",
  "sameDayService",
  "support247",
];

export const trustBadgeIcons: Record<TrustBadgeKey, LucideIcon> = {
  fastService: Zap,
  qualityGuarantee: Shield,
  competitivePricing: Wallet,
  professionalTeam: Users,
  sameDayService: Timer,
  support247: Headphones,
};

export const howItWorksSteps = [1, 2, 3, 4, 5] as const;

export const statsConfig = [
  { key: "customers", value: 8500, suffix: "+" },
  { key: "curtains", value: 15000, suffix: "+" },
  { key: "sofas", value: 6200, suffix: "+" },
  { key: "technicians", value: 45, suffix: "+" },
] as const;

export const testimonialConfigs = [
  {
    id: "1",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
  {
    id: "2",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "3",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: "4",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
] as const;

export const galleryConfigs = [
  {
    id: "1",
    before: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
    after: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    id: "2",
    before: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    after: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    id: "3",
    before: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "4",
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  },
  {
    id: "5",
    before: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
] as const;

export const faqKeys = ["1", "2", "3", "4", "5", "6"] as const;

export const pricingPlanKeys = ["essential", "premium", "complete"] as const;

export const pricingPlanConfig = {
  essential: { price: 189, highlighted: false, periodKey: "perItem" as const },
  premium: { price: 449, highlighted: true, periodKey: "perRoom" as const },
  complete: { price: 899, highlighted: false, periodKey: "perHome" as const },
};

export const teamConfigs = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
] as const;

export const coreValueKeys = ["craftsmanship", "integrity", "excellence", "trust"] as const;

export const achievementKeys = ["1", "2", "3", "4"] as const;

export const navLinkHrefs = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/pricing", key: "pricing" },
  { href: "/booking", key: "booking" },
  { href: "/contact", key: "contact" },
] as const;

export const serviceAreaKeys = SAUDI_CITIES;

export const heroImages = {
  background: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80",
  featured: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
};

export const pageHeroImages = {
  about: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
  services: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80",
  pricing: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1920&q=80",
  booking: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80",
  contact: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
};
