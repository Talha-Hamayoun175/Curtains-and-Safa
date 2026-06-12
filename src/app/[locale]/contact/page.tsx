import { getTranslations, setRequestLocale, getLocale } from "next-intl/server";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { CONTACT, getWhatsAppLink, MAPS_EMBED_URL } from "@/lib/constants";
import { pageHeroImages } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });
  return createMetadata({
    title: t("title"),
    description: t("description"),
    path: "/contact",
    locale: locale as Locale,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tCommon = await getTranslations("common");
  const currentLocale = (await getLocale()) as Locale;
  const address = currentLocale === "ar" ? CONTACT.addressAr : CONTACT.addressEn;

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("pageTitle")}
        description={t("pageDescription")}
        image={pageHeroImages.contact}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-heading text-2xl font-bold text-primary">{t("sendMessage")}</h2>
              <p className="mt-2 text-text-muted">{t("sendMessageDesc")}</p>
              <div className="mt-8 rounded-2xl border border-accent bg-section/50 p-8 shadow-premium">
                <ContactForm />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h2 className="font-heading text-2xl font-bold text-primary">{t("infoTitle")}</h2>
              <ul className="mt-8 space-y-6">
                {[
                  { icon: Phone, label: t("callUs"), value: CONTACT.phone, href: `tel:${CONTACT.phoneTel}` },
                  { icon: Mail, label: t("email"), value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { icon: MapPin, label: t("office"), value: address },
                  { icon: Clock, label: t("hours"), value: t("hoursValue") },
                ].map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-text-muted transition-colors hover:text-secondary"
                          dir={item.icon === Phone || item.icon === Mail ? "ltr" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text-muted">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={getWhatsAppLink(currentLocale)} target="_blank" rel="noopener noreferrer">
                    {t("chatWhatsapp")}
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href={`tel:${CONTACT.phoneTel}`}>{tCommon("callNow")}</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-section py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-primary">
            {t("findUs")}
          </h2>
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-accent shadow-premium-lg">
              <iframe
                title="Office location Riyadh Saudi Arabia"
                src={MAPS_EMBED_URL}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
