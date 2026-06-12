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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { serviceConfigs } from "@/lib/data";
export function BookingForm() {
  const t = useTranslations("booking");
  const tCommon = useTranslations("common");
  const tServices = useTranslations("services.items");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bookingSchema = useMemo(
    () =>
      z.object({
        fullName: z.string().min(2, t("errors.fullName")),
        phone: z.string().min(9, t("errors.phone")),
        whatsapp: z.string().optional(),
        email: z.string().email(t("errors.email")),
        serviceType: z.string().min(1, t("errors.serviceType")),
        propertyType: z.string().min(1, t("errors.propertyType")),
        address: z.string().min(5, t("errors.address")),
        preferredDate: z.string().min(1, t("errors.preferredDate")),
        preferredTime: z.string().min(1, t("errors.preferredTime")),
        notes: z.string().optional(),
      }),
    [t]
  );

  type BookingFormData = z.infer<typeof bookingSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const serviceType = watch("serviceType");
  const propertyType = watch("propertyType");
  const preferredTime = watch("preferredTime");

  const propertyTypes = t.raw("propertyTypes") as string[];
  const times = t.raw("times") as string[];

  async function onSubmit(data: BookingFormData) {
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      console.log("Booking submitted:", data);
      setSubmitted(true);
      reset();
    } catch {
      setError(t("errors.submit"));
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-primary/20 bg-accent p-8 text-center"
        role="status"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-heading text-xl font-semibold text-primary">
          {t("successTitle")}
        </h3>
        <p className="mt-2 text-text-muted">{t("successMessage")}</p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          {t("bookAnother")}
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

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">{t("fields.fullName")} *</Label>
          <Input id="fullName" {...register("fullName")} placeholder={t("placeholders.fullName")} />
          {errors.fullName && (
            <p className="text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t("fields.phone")} *</Label>
          <Input
            id="phone"
            type="tel"
            dir="ltr"
            className="text-start"
            {...register("phone")}
            placeholder={t("placeholders.phone")}
          />
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsapp">{t("fields.whatsapp")}</Label>
          <Input
            id="whatsapp"
            type="tel"
            dir="ltr"
            className="text-start"
            {...register("whatsapp")}
            placeholder={t("fields.optional")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t("fields.email")} *</Label>
          <Input
            id="email"
            type="email"
            dir="ltr"
            className="text-start"
            {...register("email")}
            placeholder={t("placeholders.email")}
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>{t("fields.serviceType")} *</Label>
          <Select value={serviceType} onValueChange={(v) => setValue("serviceType", v)}>
            <SelectTrigger>
              <SelectValue placeholder={t("placeholders.selectService")} />
            </SelectTrigger>
            <SelectContent>
              {serviceConfigs.map((s) => (
                <SelectItem key={s.id} value={tServices(`${s.id}.title`)}>
                  {tServices(`${s.id}.title`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceType && (
            <p className="text-sm text-red-600">{errors.serviceType.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>{t("fields.propertyType")} *</Label>
          <Select value={propertyType} onValueChange={(v) => setValue("propertyType", v)}>
            <SelectTrigger>
              <SelectValue placeholder={t("placeholders.selectProperty")} />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.propertyType && (
            <p className="text-sm text-red-600">{errors.propertyType.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">{t("fields.address")} *</Label>
        <Input id="address" {...register("address")} placeholder={t("placeholders.address")} />
        {errors.address && (
          <p className="text-sm text-red-600">{errors.address.message}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="preferredDate">{t("fields.preferredDate")} *</Label>
          <Input id="preferredDate" type="date" {...register("preferredDate")} />
          {errors.preferredDate && (
            <p className="text-sm text-red-600">{errors.preferredDate.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>{t("fields.preferredTime")} *</Label>
          <Select value={preferredTime} onValueChange={(v) => setValue("preferredTime", v)}>
            <SelectTrigger>
              <SelectValue placeholder={t("placeholders.selectTime")} />
            </SelectTrigger>
            <SelectContent>
              {times.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.preferredTime && (
            <p className="text-sm text-red-600">{errors.preferredTime.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">{t("fields.notes")}</Label>
        <Textarea
          id="notes"
          {...register("notes")}
          placeholder={t("placeholders.notes")}
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {tCommon("submitting")}
          </>
        ) : (
          t("submitButton")
        )}
      </Button>
    </form>
  );
}
