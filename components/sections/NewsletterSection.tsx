"use client";

import type { FormEvent } from "react";
import type { StoreSettings } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { homeSectionClass, pageContainer } from "@/lib/layout";
import { cn } from "@/lib/utils";
import { toast } from "@/lib/toast-store";

export function NewsletterSection({ settings }: { settings: StoreSettings }) {
  const phoneHref = settings.contact.phone.replace(/[^\d+]/g, "");
  const contacts = [
    { label: "Email", value: settings.contact.email, href: `mailto:${settings.contact.email}` },
    { label: "Phone", value: settings.contact.phone, href: `tel:${phoneHref}` },
    { label: "Hours", value: settings.contact.openingHours },
    { label: "Live chat", value: settings.footer?.chatLine || "24/7 Live Chat" },
  ];

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className={cn("bg-[var(--dark-background)] text-[var(--dark-foreground)]", homeSectionClass)}
    >
      <div className={pageContainer("grid gap-12 lg:grid-cols-2 lg:gap-16")}>
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-[var(--dark-accent)] uppercase">
            Customer support
          </p>
          <h2
            id="support-heading"
            className="font-display mt-3 max-w-md text-balance text-3xl sm:text-4xl"
          >
            Phone on weekdays. Live chat any time.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--dark-foreground)]/70">
            {settings.contact.address}
          </p>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {contacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs tracking-[0.14em] text-[var(--dark-foreground)]/50 uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm">
                  {fact.href && fact.value ? (
                    <a href={fact.href} className="hover:text-[var(--dark-accent)]">
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:pl-8">
          <p className="text-xs font-medium tracking-[0.16em] text-[var(--dark-accent)] uppercase">
            {settings.name}
          </p>
          <h2
            id="newsletter-heading"
            className="font-display mt-3 text-balance text-3xl sm:text-4xl"
          >
            New arrivals, sent to you
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--dark-foreground)]/70">
            Get updates on new arrivals and offers from {settings.name}.
          </p>
          <form
            className="mt-8 max-w-md"
            action={`mailto:${settings.contact.email}`}
            method="get"
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              const form = event.currentTarget;
              const email = new FormData(form).get("body");
              if (typeof email === "string" && email.trim()) {
                toast({
                  title: "Opening your email app",
                  description: "Finish sending to subscribe.",
                });
              }
            }}
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                name="body"
                required
                placeholder="Your email address"
                className="h-12 border-white/15 bg-white/6 text-[var(--dark-foreground)] placeholder:text-[var(--dark-foreground)]/45"
                aria-label="Email address for newsletter"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-[var(--dark-accent)] text-[var(--dark-background)] hover:brightness-110 sm:px-6"
              >
                Subscribe
              </Button>
            </div>
            <p className="mt-3 text-xs text-[var(--dark-foreground)]/55">
              You can unsubscribe anytime via {settings.contact.email}.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
