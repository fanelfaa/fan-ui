import { tv, type VariantProps } from "tailwind-variants";

export const avatarVariants = tv({
  slots: {
    root: "relative flex shrink-0 overflow-hidden rounded-full size-10",
    fallback:
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium",
    image: "aspect-square size-full object-cover",
  },
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;
