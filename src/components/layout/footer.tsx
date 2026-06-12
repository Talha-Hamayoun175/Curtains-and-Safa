import { getTranslations } from "next-intl/server";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { CONTACT, getWhatsAppLink } from "@/lib/constants";
import { navLinkHrefs, serviceConfigs } from "@/lib/data";
import { getLocale } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tServices = await getTranslations("services.items");
  const tCommon = await getTranslations("common");
  const locale = (await getLocale()) as "en" | "ar";
  const year = new Date().getFullYear();
  const address = locale === "ar" ? CONTACT.addressAr : CONTACT.addressEn;

  return (
    <footer className="bg-primary text-white">
      <div className="border-b border-white/10 bg-primary-light">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h3 className="font-heading text-xl font-semibold text-white md:text-2xl">
              {t("newsletterTitle")}
            </h3>
            <p className="mt-1 text-sm text-accent/80">{t("newsletterDesc")}</p>
          </div>
          <form className="flex w-full max-w-md gap-2" action="#" method="post">
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="h-11 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label={t("emailPlaceholder")}
            />
            <Button type="submit" variant="secondary" size="default">
              {tCommon("subscribe")}
            </Button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" size="md" />
            <p className="mt-4 text-sm leading-relaxed text-accent/70">{t("description")}</p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              {t("quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinkHrefs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent/70 transition-colors hover:text-white"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              {t("servicesTitle")}
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceConfigs.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-sm text-accent/70 transition-colors hover:text-white"
                  >
                    {tServices(`${s.id}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              {t("contactTitle")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-accent/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-accent/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-accent/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>{address}</span>
              </li>
            </ul>
            <a
              href={getWhatsAppLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-secondary hover:text-white transition-colors"
            >
              {t("chatWhatsapp")}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-accent/50">
            © {year}. {tCommon("allRightsReserved")}
          </p>
          <div className="flex gap-6 text-sm text-accent/50">
            <Link href="/contact" className="hover:text-white transition-colors">
              {tCommon("privacy")}
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              {tCommon("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
