import type { Locale } from "@/i18n/routing";

export function formatPrice(amount: number, locale: Locale): string {
  if (locale === "ar") {
    return `${amount.toLocaleString("ar-SA")} ر.س`;
  }
  return `SAR ${amount.toLocaleString("en-SA")}`;
}

export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale === "ar" ? "ar-SA" : "en-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
