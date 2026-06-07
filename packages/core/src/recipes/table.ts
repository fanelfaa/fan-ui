import { tv, type VariantProps } from "tailwind-variants";

export const tableVariants = tv({
  slots: {
    table: "w-full caption-bottom text-sm",
    header: "[&_tr]:border-b",
    body: "[&_tr:last-child]:border-0",
    row: "border-b border-muted transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
    head: "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
    cell: "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
    caption: "mt-4 text-sm text-muted-foreground",
  },
});

export type TableVariants = VariantProps<typeof tableVariants>;
