import { getTranslations, getLocale } from "next-intl/server";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/motion/fade-in";
import { CONTACT, getWhatsAppLink } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

export async function ContactSection() {
  const t = await getTranslations("contact");
  const tCommon = await getTranslations("common");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="bg-white py-20 md:py-28" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t("sectionBadge")}
          title={t("sectionTitle")}
          description={t("sectionDescription")}
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl border border-accent bg-section/50 p-8 shadow-premium md:p-10">
              <ContactForm />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex h-full flex-col justify-center">
              <h3 className="font-heading text-2xl font-semibold text-primary">
                {t("speakWithTeam")}
              </h3>
              <p className="mt-3 leading-relaxed text-text-muted">{t("speakWithTeamDesc")}</p>
              <ul className="mt-8 space-y-5">
                <li className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted">{t("callUs")}</p>
                    <a
                      href={`tel:${CONTACT.phoneTel}`}
                      className="font-medium text-primary transition-colors hover:text-secondary"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted">{t("email")}</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="font-medium text-primary transition-colors hover:text-secondary"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={getWhatsAppLink(locale)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    {tCommon("whatsappUs")}
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/booking">{tCommon("bookNow")}</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
