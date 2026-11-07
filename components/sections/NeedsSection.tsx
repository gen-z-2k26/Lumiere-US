import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { homeSectionClass, pageContainer, sectionStackClass } from "@/lib/layout";
import { cn } from "@/lib/utils";

const needs = [
  {
    title: "Computers and components",
    text: "Desktops, memory, and the parts around them.",
    image: "/brand/collection-computers.jpg",
    alt: "Desktop PC with a glass side panel, cooling fans, and internal components",
    imageClass: "object-[center_42%]",
  },
  {
    title: "Graphics and gaming",
    text: "Cards, consoles, and gaming accessories.",
    image: "/brand/collection-gaming.jpg",
    alt: "Two graphics cards on a dark surface",
    imageClass: "object-center",
  },
  {
    title: "Monitors and audio",
    text: "Displays and everyday listening gear.",
    image: "/brand/collection-monitors.jpg",
    alt: "Computer monitor on a desk with a keyboard",
    imageClass: "object-[center_40%]",
  },
  {
    title: "Adapters and power",
    text: "Chargers, adapters, and power accessories.",
    image: "/brand/collection-power.jpg",
    alt: "Power adapter with a coiled charging cable",
    imageClass: "object-[center_45%]",
  },
];

export function NeedsSection() {
  return (
    <section
      id="categories"
      aria-labelledby="needs-heading"
      className={cn("border-b border-border", homeSectionClass)}
    >
      <div className={pageContainer(sectionStackClass)}>
        <SectionHeader
          eyebrow="Departments"
          title="Shop by what you are building"
          subtitle="Four ways into the catalog. Prices and stock stay with the live store."
          titleId="needs-heading"
        />
        <ul className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {needs.map((item) => (
            <li key={item.title}>
              <Link href="/products" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 46vw, 100vw"
                    className={cn(
                      "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
                      item.imageClass,
                    )}
                  />
                </div>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                  <ArrowRight
                    className="mt-1 size-4 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
