import { tv, type VariantProps } from "tailwind-variants";

export const labelVariants = tv({
  base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
});

export type LabelVariants = VariantProps<typeof labelVariants>;
