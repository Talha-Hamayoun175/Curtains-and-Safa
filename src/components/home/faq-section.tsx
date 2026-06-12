import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/layout/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/fade-in";
import { faqKeys } from "@/lib/data";

export async function FaqSection() {
  const t = await getTranslations("faq");

  return (
    <section className="bg-section py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={t("badge")} title={t("title")} description={t("description")} />
        <FadeIn>
          <Accordion type="single" collapsible className="w-full">
            {faqKeys.map((key, i) => (
              <AccordionItem key={key} value={`item-${i}`}>
                <AccordionTrigger>{t(`items.${key}.question`)}</AccordionTrigger>
                <AccordionContent>{t(`items.${key}.answer`)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
