import Link from "next/link";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Reveal } from "@/components/sections/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { homeSectionClass, pageContainer, sectionStackClass } from "@/lib/layout";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Clear product information",
    text: "Listings aim to show the features and specifications you need before you compare.",
  },
  {
    title: "Transparent pricing",
    text: "Prices are in U.S. dollars. Shipping and the order total are shown before you pay.",
  },
  {
    title: "Shipping you can review",
    text: "Eligible orders to the contiguous United States ship free, with no minimum. Any exception is shown at checkout.",
  },
  {
    title: "Straightforward returns",
    text: "Eligible products have a 30-calendar-day window and a $0 restocking fee. Change-of-mind return shipping is the customer's responsibility.",
  },
];

export function CommitmentSection() {
  return (
    <section
      aria-labelledby="commitment-heading"
      className={cn("border-b border-border bg-muted/35", homeSectionClass)}
    >
      <div className={pageContainer(sectionStackClass)}>
        <SectionHeader
          eyebrow="Our commitment"
          title="Clear information, then support when you need it"
          subtitle="The same standards apply whether the order is a cable, a component, or a larger piece of gear."
          titleId="commitment-heading"
          action={
            <Link
              href="/our-commitment"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Read the commitment
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="surface-card h-full space-y-2 p-6">
                <h3 className="text-lg tracking-tight">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
