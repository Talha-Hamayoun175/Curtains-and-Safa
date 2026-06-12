import type { LucideIcon } from "lucide-react";
import {
  Bath,
  Building2,
  Home,
  Hotel,
  Layers,
  Leaf,
  Shield,
  Sparkles,
  Sofa,
  Timer,
  Users,
  Wallet,
} from "lucide-react";

export type IconName =
  | "home"
  | "sparkles"
  | "building"
  | "hotel"
  | "layers"
  | "sofa"
  | "bath";

export const serviceIcons: Record<IconName, LucideIcon> = {
  home: Home,
  sparkles: Sparkles,
  building: Building2,
  hotel: Hotel,
  layers: Layers,
  sofa: Sofa,
  bath: Bath,
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  priceFrom: number;
  image: string;
  icon: IconName;
};

export const services: Service[] = [
  {
    id: "house",
    title: "House Cleaning",
    slug: "house-cleaning",
    description:
      "Comprehensive home cleaning tailored to your schedule — dusting, vacuuming, mopping, and surface sanitization for every room.",
    benefits: ["Flexible scheduling", "All rooms covered", "Eco-friendly products"],
    priceFrom: 89,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    icon: "home",
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    slug: "deep-cleaning",
    description:
      "Intensive top-to-bottom cleaning for neglected areas, baseboards, appliances, and hard-to-reach spots.",
    benefits: ["Move-in ready", "Appliance detail", "Grime removal"],
    priceFrom: 149,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    icon: "sparkles",
  },
  {
    id: "apartment",
    title: "Apartment Cleaning",
    slug: "apartment-cleaning",
    description:
      "Efficient cleaning for studios and multi-bedroom apartments with compact-team expertise.",
    benefits: ["Quick turnaround", "Space-efficient", "Affordable rates"],
    priceFrom: 79,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    icon: "building",
  },
  {
    id: "office",
    title: "Office Cleaning",
    slug: "office-cleaning",
    description:
      "Professional workplace cleaning — desks, meeting rooms, restrooms, and common areas after hours.",
    benefits: ["After-hours service", "Discreet teams", "Commercial grade"],
    priceFrom: 199,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    icon: "building",
  },
  {
    id: "hotel",
    title: "Hotel Cleaning",
    slug: "hotel-cleaning",
    description:
      "Hospitality-grade room turnover, lobby maintenance, and linen coordination for hotels and B&Bs.",
    benefits: ["Fast turnovers", "Guest-ready standards", "Volume pricing"],
    priceFrom: 299,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    icon: "hotel",
  },
  {
    id: "move",
    title: "Move-In / Move-Out",
    slug: "move-in-move-out",
    description:
      "Empty-property cleaning for landlords and tenants — cabinets, closets, and full sanitization.",
    benefits: ["Deposit protection", "Inspection ready", "Same-day available"],
    priceFrom: 179,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    icon: "home",
  },
  {
    id: "sofa",
    title: "Sofa Cleaning",
    slug: "sofa-cleaning",
    description:
      "Steam and fabric-safe treatment for upholstery, removing stains, odors, and allergens.",
    benefits: ["Stain treatment", "Odor neutralizing", "Fabric-safe"],
    priceFrom: 59,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    icon: "sofa",
  },
  {
    id: "carpet",
    title: "Carpet Cleaning",
    slug: "carpet-cleaning",
    description:
      "Deep extraction and steam cleaning for carpets and rugs — restores color and freshness.",
    benefits: ["Deep extraction", "Allergen reduction", "Quick dry"],
    priceFrom: 69,
    image:
      "https://plus.unsplash.com/premium_photo-1677362887432-2c95e4437496?q=80",
    icon: "layers",
  },
  {
    id: "kitchen",
    title: "Kitchen Cleaning",
    slug: "kitchen-cleaning",
    description:
      "Degreasing countertops, appliances, backsplashes, and cabinets for a spotless cooking space.",
    benefits: ["Grease removal", "Appliance shine", "Food-safe products"],
    priceFrom: 99,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    icon: "sparkles",
  },
  {
    id: "bathroom",
    title: "Bathroom Sanitization",
    slug: "bathroom-cleaning",
    description:
      "Hospital-grade sanitization of tiles, fixtures, showers, and grout with mold prevention.",
    benefits: ["Grout treatment", "Mold prevention", "Disinfection"],
    priceFrom: 79,
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    icon: "bath",
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    slug: "commercial-cleaning",
    description:
      "Scalable cleaning programs for retail, warehouses, and multi-location businesses.",
    benefits: ["Custom contracts", "Dedicated managers", "24/7 support"],
    priceFrom: 399,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    icon: "building",
  },
];

export type WhyChooseIconName = "users" | "wallet" | "leaf" | "sparkles" | "shield" | "timer";

export const whyChooseIcons: Record<WhyChooseIconName, LucideIcon> = {
  users: Users,
  wallet: Wallet,
  leaf: Leaf,
  sparkles: Sparkles,
  shield: Shield,
  timer: Timer,
};

export const whyChooseUs: {
  title: string;
  description: string;
  icon: WhyChooseIconName;
}[] = [
  {
    title: "Experienced Team",
    description: "500+ trained professionals with 10+ years combined expertise.",
    icon: "users",
  },
  {
    title: "Affordable Pricing",
    description: "Transparent quotes with no hidden fees — quality within budget.",
    icon: "wallet",
  },
  {
    title: "Eco-Friendly Products",
    description: "Non-toxic, biodegradable cleaners safe for kids and pets.",
    icon: "leaf",
  },
  {
    title: "Satisfaction Guarantee",
    description: "Not happy? We re-clean for free within 48 hours.",
    icon: "sparkles",
  },
  {
    title: "Insured Professionals",
    description: "Fully bonded and insured teams for your peace of mind.",
    icon: "shield",
  },
  {
    title: "Fast Booking",
    description: "Book online in under 2 minutes — same-day slots available.",
    icon: "timer",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Book Service",
    description: "Choose your service and fill out our quick booking form.",
  },
  {
    step: 2,
    title: "Schedule Visit",
    description: "We confirm your preferred date and assign a dedicated team.",
  },
  {
    step: 3,
    title: "Cleaning Process",
    description: "Our pros arrive on time with equipment and eco-friendly supplies.",
  },
  {
    step: 4,
    title: "Enjoy Clean Space",
    description: "Relax in your spotless home or office — satisfaction guaranteed.",
  },
];

export const stats = [
  { label: "Happy Customers", value: 12500, suffix: "+" },
  { label: "Houses Cleaned", value: 8400, suffix: "+" },
  { label: "Hotels Served", value: 320, suffix: "+" },
  { label: "Team Members", value: 85, suffix: "+" },
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    rating: 5,
    text: "SparkleClean transformed our home before the holidays. Every corner sparkled — highly recommend their deep cleaning package!",
    avatar: "SM",
  },
  {
    name: "James Chen",
    role: "Office Manager",
    rating: 5,
    text: "We've used them for our 12,000 sq ft office for two years. Reliable, professional, and always on schedule.",
    avatar: "JC",
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    rating: 5,
    text: "Move-out cleans are flawless. Tenants get deposits back and units turn over faster. Best partner we've had.",
    avatar: "ER",
  },
  {
    name: "David Thompson",
    role: "Hotel Director",
    rating: 5,
    text: "Their hotel team understands hospitality standards. Guest satisfaction scores improved within the first month.",
    avatar: "DT",
  },
];

export const faqs = [
  {
    question: "How do I book a cleaning service?",
    answer:
      "Use our online booking form or contact us via phone, email, or WhatsApp. We'll confirm your appointment within 2 hours during business hours.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No — many clients provide access instructions. We're fully insured, and all team members pass background checks.",
  },
  {
    question: "What cleaning products do you use?",
    answer:
      "We use EPA-approved, eco-friendly products. Premium packages include hypoallergenic options upon request.",
  },
  {
    question: "How long does a typical house cleaning take?",
    answer:
      "A standard 2–3 bedroom home takes 2–4 hours. Deep cleaning and larger properties may require additional time.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancel or reschedule free of charge up to 24 hours before your appointment. Late cancellations may incur a fee.",
  },
  {
    question: "Do you offer recurring cleaning plans?",
    answer:
      "Yes — weekly, bi-weekly, and monthly plans with discounted rates. Contact us for a custom quote.",
  },
];

export const pricingPlans = [
  {
    name: "Basic",
    price: 89,
    period: "per visit",
    description: "Perfect for regular maintenance",
    features: [
      "Up to 2 bedrooms",
      "Kitchen & bathroom clean",
      "Dusting & vacuuming",
      "Eco-friendly products",
      "2-hour service",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: 149,
    period: "per visit",
    description: "Our most popular package",
    features: [
      "Up to 4 bedrooms",
      "Deep kitchen & bathrooms",
      "Inside appliances",
      "Baseboards & windowsills",
      "4-hour service",
      "Priority scheduling",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: 249,
    period: "per visit",
    description: "Ultimate deep clean experience",
    features: [
      "Whole home deep clean",
      "Carpet & upholstery spot treatment",
      "Inside cabinets & closets",
      "Oven & refrigerator detail",
      "6-hour service",
      "Dedicated team lead",
      "48-hour satisfaction guarantee",
    ],
    highlighted: false,
  },
];

export const team = [
  {
    name: "Michael Anderson",
    role: "Founder & CEO",
    bio: "15 years in facility management, passionate about elevating cleaning standards.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Lisa Park",
    role: "Operations Director",
    bio: "Ensures every team delivers consistent, five-star results nationwide.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Robert Hayes",
    role: "Training Manager",
    bio: "Develops our certification program for eco-friendly, hospital-grade techniques.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Amanda Foster",
    role: "Customer Success Lead",
    bio: "Your dedicated partner for quotes, scheduling, and satisfaction follow-ups.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export const coreValues = [
  {
    title: "Excellence",
    description: "We exceed expectations on every visit, every time.",
  },
  {
    title: "Integrity",
    description: "Honest pricing, transparent communication, no shortcuts.",
  },
  {
    title: "Sustainability",
    description: "Green products and responsible waste practices.",
  },
  {
    title: "Respect",
    description: "We treat your space like our own — with care and discretion.",
  },
];

export const achievements = [
  { year: "2014", title: "Company Founded", description: "Started with 3 cleaners and a vision." },
  { year: "2017", title: "1,000+ Clients", description: "Expanded to commercial and hotel sectors." },
  { year: "2020", title: "Eco Certification", description: "Green Seal certified cleaning program." },
  { year: "2024", title: "Industry Award", description: "Best Regional Cleaning Service — Northeast." },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/booking", label: "Book Now" },
  { href: "/contact", label: "Contact" },
];
