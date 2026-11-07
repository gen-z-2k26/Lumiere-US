import Link from "next/link";
import { discoverBySlug } from "@/lib/discover";
import { homeSectionClass, pageContainer } from "@/lib/layout";
import { cn } from "@/lib/utils";

export function FaqPreviewSection() {
  const page = discoverBySlug("faqs");
  const questions =
    page?.sections
      .flatMap((section) => section.blocks)
      .filter((block) => block.type === "faq")
      .slice(0, 4) ?? [];

  if (!questions.length) return null;

  return (
    <section
      aria-labelledby="faq-preview-heading"
      className={cn("border-b border-border", homeSectionClass)}
    >
      <div className={pageContainer("grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16")}>
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
            FAQs
          </p>
          <h2
            id="faq-preview-heading"
            className="font-display mt-3 text-balance text-3xl sm:text-4xl"
          >
            A few answers before you order
          </h2>
          <p className="mt-4 max-w-sm text-pretty text-muted-foreground">
            Shipping, returns, and product questions are collected in the help center.
          </p>
          <Link
            href="/faqs"
            className="mt-5 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            All FAQs
          </Link>
        </div>
        <dl className="divide-y divide-border border-y border-border">
          {questions.map((block) =>
            block.type === "faq" ? (
              <div key={block.question} className="py-5">
                <dt className="text-lg tracking-tight">{block.question}</dt>
                <dd className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {block.answer}
                </dd>
              </div>
            ) : null,
          )}
        </dl>
      </div>
    </section>
  );
}
