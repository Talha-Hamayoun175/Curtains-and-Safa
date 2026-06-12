"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinkHrefs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-accent/60 bg-background/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="Home">
          <Logo size="md" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinkHrefs.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-accent text-primary"
                    : "text-text hover:bg-accent/60 hover:text-primary"
                )}
              >
                {t(link.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button asChild variant="outline" size="sm">
            <Link href="/contact">{t("getQuote")}</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/booking">{tCommon("bookNow")}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="rounded-lg p-2 text-primary"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-accent bg-background lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinkHrefs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-base font-medium",
                      pathname === link.href
                        ? "bg-accent text-primary"
                        : "text-text hover:bg-accent/60"
                    )}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
              <li className="flex gap-2 pt-3">
                <Button asChild variant="outline" className="flex-1">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    {t("getQuote")}
                  </Link>
                </Button>
                <Button asChild className="flex-1">
                  <Link href="/booking" onClick={() => setOpen(false)}>
                    {tCommon("bookNow")}
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
