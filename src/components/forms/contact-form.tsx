"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const t = useTranslations("contactForm");
  const tCommon = useTranslations("common");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contactSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t("errors.name")),
        email: z.string().email(t("errors.email")),
        phone: z.string().min(10, t("errors.phone")),
        message: z.string().min(10, t("errors.message")),
      }),
    [t]
  );

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      console.log("Contact submitted:", data);
      setSubmitted(true);
      reset();
    } catch {
      setError(t("errors.submit"));
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/20 bg-accent p-8 text-center" role="status">
        <h3 className="font-heading text-xl font-semibold text-primary">{t("successTitle")}</h3>
        <p className="mt-2 text-text-muted">{t("successMessage")}</p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          {t("sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="name">{t("fields.name")} *</Label>
        <Input id="name" {...register("name")} placeholder={t("placeholders.name")} />
        {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-email">{t("fields.email")} *</Label>
          <Input
            id="contact-email"
            type="email"
            dir="ltr"
            className="text-start"
            {...register("email")}
            placeholder={t("placeholders.email")}
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">{t("fields.phone")} *</Label>
          <Input
            id="contact-phone"
            type="tel"
            dir="ltr"
            className="text-start"
            {...register("phone")}
            placeholder={t("placeholders.phone")}
          />
          {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t("fields.message")} *</Label>
        <Textarea id="message" {...register("message")} placeholder={t("placeholders.message")} />
        {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {tCommon("sending")}
          </>
        ) : (
          t("sendButton")
        )}
      </Button>
    </form>
  );
}
