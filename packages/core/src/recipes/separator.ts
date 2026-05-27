import { tv, type VariantProps } from "tailwind-variants";

export const separatorVariants = tv({
  base: "shrink-0 bg-border",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export type SeparatorVariants = VariantProps<typeof separatorVariants>;
