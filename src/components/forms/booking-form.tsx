"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { services } from "@/lib/data";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  whatsapp: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  serviceType: z.string().min(1, "Please select a service"),
  propertyType: z.string().min(1, "Please select property type"),
  address: z.string().min(5, "Please enter your address"),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.string().min(1, "Please select a time"),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  async function onSubmit(data: BookingFormData) {
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      console.log("Booking submitted:", data);
      setSubmitted(true);
      reset();
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center"
        role="status"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-heading text-xl font-semibold text-primary">
          Booking Request Received!
        </h3>
        <p className="mt-2 text-text">
          Thank you! Our team will contact you within 2 hours to confirm your appointment.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Book Another Service
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
          <Label htmlFor="fullName">Full Name *</Label>
          <Input id="fullName" {...register("fullName")} placeholder="John Smith" />
          {errors.fullName && (
            <p className="text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" type="tel" {...register("phone")} placeholder="+1 (555) 000-0000" />
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="whatsapp">WhatsApp Number</Label>
          <Input id="whatsapp" type="tel" {...register("whatsapp")} placeholder="Optional" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" {...register("email")} placeholder="you@email.com" />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Service Type *</Label>
          <Select value={serviceType} onValueChange={(v) => setValue("serviceType", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.id} value={s.title}>
                  {s.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceType && (
            <p className="text-sm text-red-600">{errors.serviceType.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Property Type *</Label>
          <Select value={propertyType} onValueChange={(v) => setValue("propertyType", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select property" />
            </SelectTrigger>
            <SelectContent>
              {["House", "Apartment", "Office", "Hotel", "Commercial", "Other"].map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
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
        <Label htmlFor="address">Address *</Label>
        <Input id="address" {...register("address")} placeholder="Street, City, ZIP" />
        {errors.address && (
          <p className="text-sm text-red-600">{errors.address.message}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="preferredDate">Preferred Date *</Label>
          <Input id="preferredDate" type="date" {...register("preferredDate")} />
          {errors.preferredDate && (
            <p className="text-sm text-red-600">{errors.preferredDate.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Preferred Time *</Label>
          <Select value={preferredTime} onValueChange={(v) => setValue("preferredTime", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"].map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
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
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          {...register("notes")}
          placeholder="Special instructions, access codes, pets, etc."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Booking Request"
        )}
      </Button>
    </form>
  );
}
