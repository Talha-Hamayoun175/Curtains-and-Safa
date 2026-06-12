import { PageHero } from "@/components/layout/page-hero";
import { BookingForm } from "@/components/forms/booking-form";
import { FadeIn } from "@/components/motion/fade-in";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Book a Cleaning",
  description:
    "Book your house, office, or commercial cleaning online. Fast scheduling, form validation, and confirmation within 2 hours.",
  path: "/booking",
});

export default function BookingPage() {
  return (
    <>
      <PageHero
        badge="Book Now"
        title="Schedule Your Cleaning"
        description="Fill out the form below and we'll confirm your appointment within 2 business hours."
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg md:p-10">
              <BookingForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
