import Link from "next/link";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { CONTACT, SITE_NAME, WHATSAPP_LINK } from "@/lib/constants";
import { navLinks, services } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal">
                <Sparkles className="h-5 w-5" />
              </span>
              {SITE_NAME}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Premium cleaning services for homes, offices, and hotels. Trusted by
              thousands since 2014.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-teal">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-teal">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-teal">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-teal hover:text-white"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-700 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/contact" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
