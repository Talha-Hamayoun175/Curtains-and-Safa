"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(nextLocale: Locale) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div
      className={cn(
        "flex items-center rounded-lg border border-accent bg-accent/40 p-0.5",
        className
      )}
      role="group"
      aria-label="Language switcher"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={cn(
            "rounded-md px-3 py-1.5 text-xs font-semibold transition-all",
            locale === loc
              ? "bg-primary text-white shadow-sm"
              : "text-text-muted hover:text-primary"
          )}
          aria-pressed={locale === loc}
        >
          {loc === "en" ? "EN" : "عربي"}
        </button>
      ))}
    </div>
  );
}
