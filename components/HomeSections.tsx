import type { Product, StoreSettings } from "@/lib/types";
import { HeroSection } from "@/components/sections/HeroSection";
import { NeedsSection } from "@/components/sections/NeedsSection";
import { TrustStripSection } from "@/components/sections/TrustStripSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { StorySection } from "@/components/sections/StorySection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FaqPreviewSection } from "@/components/sections/FaqPreviewSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

/**
 * Homepage layout is owned by Next.js (design system).
 * Product cards are filled only from WooCommerce props.
 */
export function HomeSections({
  settings,
  products,
}: {
  settings: StoreSettings;
  products: Product[];
}) {
  return (
    <div>
      <HeroSection settings={settings} />
      <TrustStripSection />
      <NeedsSection />
      <FeaturedProductsSection products={products} />
      <ReviewsSection settings={settings} />
      <StorySection settings={settings} />
      <FaqPreviewSection />
      <NewsletterSection settings={settings} />
    </div>
  );
}
