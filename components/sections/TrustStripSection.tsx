import { Reveal } from "@/components/sections/Reveal";
import { getTrustIcon } from "@/lib/icons";
import { pageContainer } from "@/lib/layout";
import { cn } from "@/lib/utils";
import type { TrustItem } from "@/lib/types";

const items: TrustItem[] = [
  { icon: "truck", title: "Free standard shipping", text: "Eligible US orders, no minimum" },
  { icon: "refresh", title: "30-day returns", text: "$0 restocking fee on approved returns" },
  { icon: "shield", title: "Secure checkout", text: "Review the total before you pay" },
  { icon: "message", title: "Live chat 24/7", text: "Phone support Mon-Fri, 9-5 MT" },
];

export function TrustStripSection() {
  return (
    <section aria-label="Benefits" className="border-b border-border bg-muted">
      <div className={pageContainer("py-4 sm:py-5")}>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {items.map((item, index) => {
            const Icon = getTrustIcon(item.icon);
            return (
              <Reveal key={item.title} delay={index * 0.05} as="li">
                <div
                  className={cn(
                    "flex items-start gap-3 lg:px-6",
                    index === 0 && "lg:pl-0",
                    index === items.length - 1 && "lg:pr-0",
                    index > 0 && "lg:border-l lg:border-border",
                  )}
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <div className="min-w-0 space-y-0.5">
                    <p className="text-sm font-medium tracking-tight">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
