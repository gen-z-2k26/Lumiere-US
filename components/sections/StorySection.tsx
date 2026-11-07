import Image from "next/image";
import Link from "next/link";
import type { StoreSettings } from "@/lib/types";
import { buttonVariants } from "@/components/ui/button";
import { homeSectionClass, pageContainer } from "@/lib/layout";
import { cn } from "@/lib/utils";

const facts = [
  {
    title: "Browse",
    text: "Computers, gaming gear, and accessories in one catalog.",
  },
  {
    title: "Review",
    text: "Price, shipping, and the order total are shown before you pay.",
  },
  {
    title: "Ship",
    text: "Eligible contiguous US orders ship free, with no minimum.",
  },
  {
    title: "Return",
    text: "30 calendar days and a $0 restocking fee on approved returns.",
  },
];

export function StorySection({ settings }: { settings: StoreSettings }) {
  return (
    <section
      aria-labelledby="story-heading"
      className={cn("border-b border-border bg-muted/40", homeSectionClass)}
    >
      <div className={pageContainer("grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16")}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
          <Image
            src="/brand/collection-computers.jpg"
            alt="Desktop PC with a glass side panel, cooling fans, and internal components"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[center_42%]"
          />
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
            About {settings.name}
          </p>
          <h2
            id="story-heading"
            className="font-display mt-3 text-balance text-3xl sm:text-4xl"
          >
            A straightforward electronics shop.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            lumeero is a US-based store for computer components, gaming gear, and
            everyday accessories, operated by {settings.contact.legalName} in Los
            Ranchos De Albuquerque, New Mexico.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {facts.map((item, index) => (
              <li key={item.title}>
                <p className="text-xs tracking-[0.16em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about-us" className={cn(buttonVariants())}>
              About us
            </Link>
            <Link
              href="/our-commitment"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Our commitment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
