import { tv, type VariantProps } from "tailwind-variants";

export const skeletonVariants = tv({
  base: "animate-pulse rounded-md bg-muted",
});

export type SkeletonVariants = VariantProps<typeof skeletonVariants>;
