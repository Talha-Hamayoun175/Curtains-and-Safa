import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Heart, Award } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { achievements, coreValues, team } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about SparkleClean Pro — our mission, vision, team, and why thousands trust us for premium cleaning services.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Cleaning Excellence Since 2014"
        description="We're on a mission to transform spaces and elevate lives through professional, eco-conscious cleaning."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <span className="text-sm font-medium text-teal">Our Story</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-primary md:text-4xl">
                From Three Cleaners to a Regional Leader
              </h2>
              <p className="mt-6 leading-relaxed text-text">
                SparkleClean Pro began in 2014 with a simple belief: everyone deserves a
                spotless, healthy space without compromise. What started as a small local
                crew has grown into a team of 85+ professionals serving homes, offices, and
                hotels across the region.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Today we combine hospital-grade techniques with eco-friendly products,
                transparent pricing, and a satisfaction guarantee that keeps clients coming
                back year after year.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="SparkleClean team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-section py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-2xl border border-slate-100 bg-white p-8">
                <Target className="h-10 w-10 text-teal" />
                <h3 className="mt-4 font-heading text-xl font-semibold text-primary">Mission</h3>
                <p className="mt-3 text-text leading-relaxed">
                  Deliver exceptional cleaning experiences that protect health, save time,
                  and exceed expectations — using sustainable practices every step of the way.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-slate-100 bg-white p-8">
                <Eye className="h-10 w-10 text-teal" />
                <h3 className="mt-4 font-heading text-xl font-semibold text-primary">Vision</h3>
                <p className="mt-3 text-text leading-relaxed">
                  To be the most trusted cleaning brand nationwide — setting the standard for
                  professionalism, innovation, and environmental responsibility.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Values"
            title="What We Stand For"
            description="These principles guide every team member on every job."
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v) => (
              <StaggerItem key={v.title}>
                <div className="rounded-2xl border border-slate-100 p-6 text-center hover:border-teal/30 hover:shadow-lg transition-all">
                  <Heart className="mx-auto h-8 w-8 text-teal" />
                  <h3 className="mt-4 font-heading font-semibold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm text-text">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-section py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Team" title="Meet the Leadership" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <div className="relative h-56">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="280px"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-primary">{member.name}</h3>
                    <p className="text-sm font-medium text-teal">{member.role}</p>
                    <p className="mt-2 text-sm text-text">{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Milestones" title="Company Achievements" />
          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-teal/20 md:left-1/2 md:block" aria-hidden />
            {achievements.map((a, i) => (
              <FadeIn key={a.year} delay={i * 0.1}>
                <div
                  className={`relative mb-12 flex flex-col md:w-1/2 ${i % 2 === 0 ? "md:ml-0 md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                    }`}
                >
                  <span className="font-heading text-2xl font-bold text-teal">{a.year}</span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-primary">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-text">{a.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Award className="mx-auto h-12 w-12 text-teal" />
          <h2 className="mt-6 font-heading text-3xl font-bold text-white md:text-4xl">
            Why Customers Trust Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Fully insured teams, background-checked professionals, eco-certified products, and
            a 48-hour satisfaction guarantee on every visit.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/booking">Book Your First Clean</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

