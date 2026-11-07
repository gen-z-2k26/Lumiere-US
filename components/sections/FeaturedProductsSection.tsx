"use client";

import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/ProductCard";
import { ProductImageCarousel } from "@/components/ProductImageCarousel";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { buttonVariants } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { homeSectionClass, pageContainer, sectionStackClass } from "@/lib/layout";
import { useStore } from "@/lib/store-context";
import { cn } from "@/lib/utils";

function SpotlightProduct({ product }: { product: Product }) {
  const { settings } = useStore();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <ProductImageCarousel
        images={product.images}
        alt={product.imageAlts[0] || product.name}
        fallbackImage={settings.logo}
        rounded="rounded-none"
        sizes="(min-width: 1024px) 40vw, 100vw"
        className={cn(
          "aspect-[4/3]",
          !product.inStock && "opacity-75 saturate-50",
        )}
      />
      <div className="flex flex-1 flex-col justify-between gap-6 p-5 sm:p-6">
        <div>
          <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
            {product.category || "Featured"}
          </p>
          <h3 className="font-display mt-3 text-balance text-2xl leading-tight sm:text-3xl">
            <Link href={`/products/${product.slug}`} className="hover:text-primary">
              {product.name}
            </Link>
          </h3>
          <p className="mt-4 text-xl tabular-nums tracking-tight">
            {formatPrice(product.price, settings)}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {product.inStock ? "In stock" : "Out of stock"}
          </p>
        </div>
        <Link
          href={`/products/${product.slug}`}
          className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
        >
          View product
        </Link>
      </div>
    </article>
  );
}

export function FeaturedProductsSection({ products }: { products: Product[] }) {
  const [spotlight, ...rest] = products.slice(0, 5);
  const shelf = rest.slice(0, 4);

  return (
    <section
      id="featured"
      aria-labelledby="featured-heading"
      className={cn("border-b border-border bg-muted/40", homeSectionClass)}
    >
      <div className={pageContainer(sectionStackClass)}>
        <SectionHeader
          eyebrow="Catalog"
          title="In the shop now"
          subtitle="A mix from the live catalog. Open any product for the full price and details."
          titleId="featured-heading"
          action={
            <Link
              href="/products"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Shop all
            </Link>
          }
        />

        {!spotlight ? (
          <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-14 text-center">
            <p className="font-medium">No products yet</p>
            <p className="mt-2 text-pretty text-sm text-muted-foreground">
              Products will show here when the catalog is published.
            </p>
          </div>
        ) : (
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <SpotlightProduct product={spotlight} />
            {shelf.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {shelf.map((product) => (
                  <ProductCard key={product.id} product={product} titleClamp />
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
