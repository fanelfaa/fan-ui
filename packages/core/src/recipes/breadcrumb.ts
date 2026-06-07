import { tv, type VariantProps } from "tailwind-variants";

export const breadcrumbVariants = tv({
  slots: {
    list: "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
    item: "inline-flex items-center gap-1.5",
    link: "transition-colors hover:text-foreground",
    page: "font-normal text-foreground",
    separator: "[&>svg]:size-3.5",
    ellipsis: "flex size-9 items-center justify-center",
  },
});

export type BreadcrumbVariants = VariantProps<typeof breadcrumbVariants>;
