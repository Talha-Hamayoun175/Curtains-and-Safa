import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { CONTACT, WHATSAPP_LINK } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with SparkleClean Pro. Phone, email, office address, contact form, and WhatsApp support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="We'd Love to Hear From You"
        description="Questions, quotes, or custom plans — reach out anytime. We respond within 24 hours."
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-heading text-2xl font-bold text-primary">Send a Message</h2>
              <p className="mt-2 text-text">Fill out the form and our team will get back to you shortly.</p>
              <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                <ContactForm />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h2 className="font-heading text-2xl font-bold text-primary">Contact Information</h2>
              <ul className="mt-8 space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
                  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { icon: MapPin, label: "Office", value: CONTACT.address },
                  { icon: Clock, label: "Hours", value: "Mon–Sat: 7AM – 8PM · Sun: 9AM – 5PM" },
                ].map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10">
                      <item.icon className="h-5 w-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-text hover:text-teal transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Chat on WhatsApp
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-section py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-primary">
            Find Us on the Map
          </h2>
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
              <iframe
                title="SparkleClean Pro office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
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
