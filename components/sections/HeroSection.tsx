import Image from "next/image";
import Link from "next/link";
import type { StoreSettings } from "@/lib/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const proofs = [
  { title: "Free shipping", text: "Eligible US orders" },
  { title: "30-day returns", text: "$0 restocking fee" },
  { title: "US support", text: "Chat 24/7, phone weekdays" },
];

export function HeroSection({ settings }: { settings: StoreSettings }) {
  const headline = settings.hero?.headline || settings.name;
  const support = settings.hero?.support || settings.tagline;

  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-border bg-[var(--dark-background)] text-[var(--dark-foreground)]"
    >
      <div className="grid lg:min-h-[36rem] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-[var(--page-gutter)] py-10 sm:py-12 lg:py-16 lg:pr-12 lg:pl-[max(var(--page-gutter),calc((100vw-var(--content-width))/2+var(--page-gutter)))]">
          <p className="text-xs font-medium tracking-[0.18em] text-[var(--dark-accent)] uppercase">
            {settings.name}
          </p>
          <h1
            id="hero-heading"
            className="font-display mt-4 max-w-xl text-balance text-[clamp(2.6rem,4.8vw,4.6rem)] leading-[0.98] text-[var(--dark-foreground)]"
          >
            {headline}
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-[var(--dark-foreground)]/75 sm:text-lg">
            {support}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/products"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[var(--dark-accent)] text-[var(--dark-background)] hover:brightness-110",
              )}
            >
              Shop all electronics
            </Link>
            <Link
              href="/track-your-order"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white/20 bg-transparent text-[var(--dark-foreground)] hover:bg-white/10 hover:text-[var(--dark-foreground)]",
              )}
            >
              Track an order
            </Link>
          </div>
          <ul className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-6">
            {proofs.map((item) => (
              <li key={item.title}>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-1 text-xs leading-snug text-[var(--dark-foreground)]/60">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-72 sm:min-h-96 lg:min-h-full">
          <Image
            src="/brand/hero-electronics.jpg"
            alt="Desktop computer, ultrawide monitor, keyboard, and headphones on a desk"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[70%_center]"
          />
        </div>
      </div>
    </section>
  );
}
