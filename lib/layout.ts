import { cn } from "@/lib/utils";

/** Shared layout tokens for consistent page spacing. */
export const pageContainerClass =
  "mx-auto w-full max-w-[var(--content-width)] px-[var(--page-gutter)]";

export const narrowContainerClass =
  "mx-auto w-full max-w-[var(--content-narrow)] px-[var(--page-gutter)]";

export const sectionYClass = "py-[var(--section-y)]";

/** Tighter rhythm for the store homepage, where the catalog should stay close. */
export const homeSectionClass = "py-14 sm:py-16 lg:py-20";

export const sectionStackClass = "space-y-[var(--section-gap)]";

export function pageContainer(...classes: Array<string | undefined | false>) {
  return cn(pageContainerClass, ...classes);
}

export function narrowContainer(...classes: Array<string | undefined | false>) {
  return cn(narrowContainerClass, ...classes);
}
