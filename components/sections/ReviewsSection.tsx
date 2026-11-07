import Link from "next/link";
import type { StoreSettings } from "@/lib/types";
import { ReviewStars } from "@/components/ReviewStars";
import { homeSectionClass, pageContainer } from "@/lib/layout";
import { storeReviewSummary, storeReviews } from "@/lib/store-reviews";
import { cn } from "@/lib/utils";

export function ReviewsSection({ settings }: { settings: StoreSettings }) {
  const reviews = storeReviews().slice(0, 3);
  const { total, average } = storeReviewSummary();
  if (reviews.length === 0) return null;
  const score = average.toFixed(1);

  return (
    <section
      aria-labelledby="reviews-heading"
      className={cn("border-b border-border", homeSectionClass)}
    >
      <div className={pageContainer("grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16")}>
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
            Reviews
          </p>
          <p className="font-display mt-3 text-6xl tabular-nums tracking-tight">{score}</p>
          <ReviewStars rating={average} className="mt-3" />
          <h2 id="reviews-heading" className="mt-4 text-lg tracking-tight">
            {total} {settings.name} reviews from shoppers across the United States.
          </h2>
          <Link
            href="/reviews"
            className="mt-5 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Read all reviews
          </Link>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {reviews.map((review) => (
            <li key={`${review.reviewer}-${review.date}`} className="py-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <ReviewStars rating={review.rating} />
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{review.reviewer}</span>
                  {review.location ? ` · ${review.location}` : ""}
                </p>
              </div>
              {review.title ? (
                <h3 className="mt-3 text-lg tracking-tight">{review.title}</h3>
              ) : null}
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {review.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
