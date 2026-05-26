import { forwardRef, type HTMLAttributes } from "react";
import { skeletonVariants } from "@ui/core/recipes/skeleton";

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={skeletonVariants({ class: className })} {...props} />;
});
Skeleton.displayName = "Skeleton";

export { Skeleton, skeletonVariants };
export type { SkeletonProps };
