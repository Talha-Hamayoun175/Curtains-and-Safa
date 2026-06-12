export const SITE_NAME_EN = "Curtains & Sofa Services";
export const SITE_NAME_AR = "خدمات الستائر والكنب";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://curtainsandsofa.sa";

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "966501234567";

export const WHATSAPP_MESSAGES = {
  en: "Hello! I would like to inquire about your curtain and sofa services in Saudi Arabia.",
  ar: "مرحباً! أود الاستفسار عن خدمات تنظيف الستائر والكنب في المملكة العربية السعودية.",
};

export function getWhatsAppLink(locale: "en" | "ar" = "en") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGES[locale])}`;
}

export const CONTACT = {
  phone: "+966 50 123 4567",
  phoneTel: "+966501234567",
  email: "info@curtainsandsofa.sa",
  addressEn: "King Fahd Road, Al Olaya, Riyadh 12211, Saudi Arabia",
  addressAr: "طريق الملك فهد، العليا، الرياض ١٢٢١١، المملكة العربية السعودية",
};

export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.352!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa";

export const CURRENCY = "SAR";
export const CURRENCY_SYMBOL = "ر.س";
export const COUNTRY_CODE = "SA";

export const SAUDI_CITIES = [
  "riyadh",
  "jeddah",
  "dammam",
  "khobar",
  "makkah",
  "madinah",
  "taif",
] as const;
