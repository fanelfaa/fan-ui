# Graph Report - ui  (2026-06-10)

## Corpus Check
- 356 files · ~124,968 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2095 nodes · 2299 edges · 169 communities (155 shown, 14 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.79)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7b07218a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 81|Community 81]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 83|Community 83]]
- [[_COMMUNITY_Community 88|Community 88]]
- [[_COMMUNITY_Community 92|Community 92]]
- [[_COMMUNITY_Community 93|Community 93]]
- [[_COMMUNITY_Community 94|Community 94]]
- [[_COMMUNITY_Community 95|Community 95]]
- [[_COMMUNITY_Community 121|Community 121]]
- [[_COMMUNITY_Community 124|Community 124]]
- [[_COMMUNITY_Community 128|Community 128]]
- [[_COMMUNITY_Community 152|Community 152]]
- [[_COMMUNITY_Community 153|Community 153]]
- [[_COMMUNITY_Community 166|Community 166]]
- [[_COMMUNITY_Community 167|Community 167]]
- [[_COMMUNITY_Community 168|Community 168]]

## God Nodes (most connected - your core abstractions)
1. `Solid.js` - 121 edges
2. `tailwind-variants (tv)` - 47 edges
3. `DocsLink()` - 45 edges
4. `A()` - 33 edges
5. `Table()` - 15 edges
6. `Select` - 13 edges
7. `Combobox` - 12 edges
8. `Dialog` - 11 edges
9. `Button` - 11 edges
10. `PROJECT KNOWLEDGE BASE` - 10 edges

## Surprising Connections (you probably didn't know these)
- `PopoverWithExternalControl()` --calls--> `Popover`  [INFERRED]
  apps/docs-spa/src/routes/components/popover.tsx → apps/docs/src/content/docs/components/popover.mdx
- `AlertDialogDeleteDemo()` --calls--> `Dialog`  [INFERRED]
  apps/docs/src/components/alert-dialog-demo/AlertDialogDeleteDemo.tsx → apps/docs/src/content/docs/components/dialog.mdx
- `CollapsibleRootProviderDemo()` --calls--> `Collapsible`  [INFERRED]
  apps/docs/src/components/collapsible-demo/CollapsibleRootProviderDemo.tsx → apps/docs/src/content/docs/components/collapsible.mdx
- `PopoverRootProviderDemo()` --calls--> `Popover`  [INFERRED]
  apps/docs/src/components/popover-demo/PopoverRootProviderDemo.tsx → apps/docs/src/content/docs/components/popover.mdx
- `SliderRootProviderDemo()` --calls--> `Slider`  [INFERRED]
  apps/docs/src/components/slider-demo/SliderRootProviderDemo.tsx → apps/docs/src/content/docs/components/slider.mdx

## Hyperedges (group relationships)
- **Component delivery pipeline** — ui_core_package, ui_solid_package, ui_docs_package [EXTRACTED 1.00]
- **Tech stack** — solid_js, ark_ui, tailwind_variants, tailwind_css_v4 [EXTRACTED 0.90]
- **Ark UI ecosystem** — ark_ui, ark_ui_solid, ui_solid_package [EXTRACTED 1.00]
- **Build orchestration** — moonrepo, ui_core_package, ui_solid_package, ui_cli_package, ui_docs_package [EXTRACTED 1.00]
- **Monorepo structure** — ui_monorepo, ui_core_package, ui_solid_package, ui_cli_package, ui_docs_package [EXTRACTED 1.00]

## Communities (169 total, 14 thin omitted)

### Community 2 - "Community 2"
Cohesion: 0.13
Nodes (3): ArrowRightUp(), DocsLink(), A()

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (34): Advanced Usage, API Reference, code:block1 (packages/solid/src/<component>/), code:tsx (import { splitProps, type Component } from "solid-js";), code:block11 (apps/docs/), code:`mdx (---), code:block13, code:` (+26 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (5): ScrollArea(), SelectRootProviderDemo(), Select(), SelectContent(), useSelectSearchable()

### Community 6 - "Community 6"
Cohesion: 0.06
Nodes (29): Advanced Usage, API Reference, CLI, code:tsx (import { createListCollection } from "@ark-ui/solid";), code:tsx (import { useSelect, createListCollection } from "@ark-ui/sol), code:tsx (import { createListCollection } from "@ark-ui/solid";), code:tsx (import { useFilter, useListCollection } from "@ark-ui/solid"), code:tsx (<SelectBase.Root collection={items} error>) (+21 more)

### Community 7 - "Community 7"
Cohesion: 0.07
Nodes (26): ComboboxRootProviderDemo(), Advanced Usage, API Reference, CLI, code:tsx (import { useFilter } from "@ark-ui/solid";), code:tsx (import { useFilter } from "@ark-ui/solid";), code:tsx (<ComboboxBase.Root), code:tsx (import { Combobox, ComboboxLabel, ComboboxInputTrigger, Comb) (+18 more)

### Community 8 - "Community 8"
Cohesion: 0.07
Nodes (27): Advanced Usage, API Reference, CLI, code:tsx (import { HoverCard, HoverCardTrigger, HoverCardContent } fro), code:tsx (<HoverCard openDelay={200} closeDelay={100}>), code:tsx (<HoverCard positioning={{ placement: "right" }}>), code:tsx (import { HoverCardBase } from "~/components/hover-card";), code:tsx (import { HoverCard } from "~/components/hover-card/hover-car) (+19 more)

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (27): Advanced Usage, API Reference, CLI, code:tsx (import { TagsInput } from "~/components/tags-input";), code:tsx (import { TagsInput } from "~/components/tags-input";), code:tsx (import { TagsInput } from "~/components/tags-input";), code:tsx (import { TagsInput } from "~/components/tags-input/tags-inpu), code:tsx (import { TagsInputBase } from "~/components/tags-input";) (+19 more)

### Community 10 - "Community 10"
Cohesion: 0.07
Nodes (26): Advanced Usage, API Reference, CLI, code:tsx (import { SegmentGroup, SegmentGroupItem } from "~/components), code:tsx (import { SegmentGroup, useSegmentGroupVariant } from "~/comp), code:tsx (import { SegmentGroupBase } from "~/components/segment-group), code:tsx (import { Index, createSignal } from "solid-js";), code:tsx (import { SegmentGroup } from "~/components/segment-group/seg) (+18 more)

### Community 11 - "Community 11"
Cohesion: 0.07
Nodes (25): Advanced Usage, API Reference, CLI, code:tsx (import { RatingGroup, RatingGroupLabel } from "~/components/), code:tsx (<RatingGroup count={5} defaultValue={2.5} allowHalf>), code:tsx (<RatingGroup count={5} defaultValue={4} disabled>), code:tsx (import { RatingGroup, useRatingGroupVariant } from "~/compon), code:tsx (import { RatingGroupBase } from "~/components/rating-group";) (+17 more)

### Community 12 - "Community 12"
Cohesion: 0.07
Nodes (22): AlertDialogDeleteDemo(), API Reference, CLI, code:tsx (import {), code:tsx (import { createSignal } from "solid-js";), code:tsx (import { useDialog } from "@ark-ui/solid/dialog";), code:bash (npx solidui-cli@latest add dialog), code:bash (npm install tailwind-variants) (+14 more)

### Community 13 - "Community 13"
Cohesion: 0.07
Nodes (25): Advanced Usage, API Reference, CLI, code:tsx (import { RadioGroup, RadioGroupItem } from "~/components/rad), code:tsx (import { RadioGroup } from "~/components/radio-group/radio-g), code:tsx (import { RadioGroupBase } from "~/components/radio-group";), code:tsx (import { Index, createSignal } from "solid-js";), code:tsx (import { RadioGroup } from "~/components/radio-group/radio-g) (+17 more)

### Community 14 - "Community 14"
Cohesion: 0.08
Nodes (24): API Reference, CLI, code:tsx (import { DatePicker, DatePickerBase } from "~/components/dat), code:tsx (<DatePicker), code:tsx (<DatePicker), code:tsx (<DatePicker), code:tsx (import { createSignal } from "solid-js";), code:bash (npx solidui-cli@latest add date-picker) (+16 more)

### Community 15 - "Community 15"
Cohesion: 0.08
Nodes (24): API Reference, Button, CLI, code:tsx (import { Button } from "~/components/button"), code:tsx (<Button variant="outline" size="icon">), code:tsx (<Button class="w-full">Full Width Button</Button>), code:tsx (import { createSignal } from "solid-js";), code:tsx (import { buttonVariants } from "~/components/button";) (+16 more)

### Community 16 - "Community 16"
Cohesion: 0.08
Nodes (23): Advanced Usage, API Reference, CLI, code:tsx (import { createListCollection } from "@ark-ui/solid";), code:tsx (import { createListCollection } from "@ark-ui/solid";), code:tsx (import { Listbox } from "~/components/listbox/listbox.base";), code:tsx (import { ListboxBase } from "~/components/listbox";), code:tsx (import { ListboxBase, useListboxVariant } from "~/components) (+15 more)

### Community 17 - "Community 17"
Cohesion: 0.08
Nodes (23): Advanced Usage, API Reference, CLI, code:tsx (import { Tooltip, TooltipTrigger, TooltipContent } from "~/c), code:tsx (import { TooltipBase } from "~/components/tooltip";), code:tsx (import { Tooltip } from "~/components/tooltip/tooltip.base";), code:tsx (import { Tooltip, TooltipBase } from "~/components/tooltip";), code:tsx (import { createSignal } from "solid-js";) (+15 more)

### Community 18 - "Community 18"
Cohesion: 0.08
Nodes (23): Accordion, API Reference, CLI, code:tsx (import {), code:tsx (<Accordion multiple defaultValue={["item-1", "item-2"]}>), code:tsx (import { createSignal } from "solid-js";), code:tsx (import { useAccordion } from "@ark-ui/solid/accordion";), code:tsx (<Accordion>) (+15 more)

### Community 19 - "Community 19"
Cohesion: 0.08
Nodes (23): 1. Recipe: `packages/core/src/recipes/tags-input.ts`, 2. Core Index: `packages/core/src/index.ts`, 3. Tsup Entry: `packages/core/tsup.config.ts`, 4. Base File: `packages/solid/src/tags-input/tags-input.base.tsx`, 5. Index File: `packages/solid/src/tags-input/index.tsx`, 6. Solid Barrel: `packages/solid/src/index.ts`, 7. Demo: `apps/docs/src/components/tags-input-demo/TagsInputBasicDemo.tsx`, 8. Docs: `apps/docs/src/content/docs/components/tags-input.mdx` (+15 more)

### Community 20 - "Community 20"
Cohesion: 0.08
Nodes (22): Access Raw Parts, Advanced Usage, API Reference, CLI, code:tsx (import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/), code:tsx (<TabsBase.Root defaultValue="account">), code:tsx (import { Index } from "solid-js";), code:tsx (import { TabsBase, TabsList, TabsTrigger, TabsContent } from) (+14 more)

### Community 21 - "Community 21"
Cohesion: 0.08
Nodes (22): API Reference, CLI, code:tsx (import { Toggle } from "~/components/toggle";), code:tsx (<Toggle>), code:tsx (<Toggle defaultPressed>), code:tsx (const [pressed, setPressed] = createSignal(false);), code:tsx (<Toggle disabled>), code:tsx (<Toggle>) (+14 more)

### Community 22 - "Community 22"
Cohesion: 0.08
Nodes (22): 1. Recipe: `packages/core/src/recipes/pagination.ts`, 2. Core Index: `packages/core/src/index.ts`, 3. Tsup Entry: `packages/core/tsup.config.ts`, 4. Base File: `packages/solid/src/pagination/pagination.base.tsx`, 5. Index File: `packages/solid/src/pagination/index.tsx`, 6. Solid Barrel: `packages/solid/src/index.ts`, 7. Demo: `apps/docs/src/components/pagination-demo/`, 8. Docs: `apps/docs/src/content/docs/components/pagination.mdx` (+14 more)

### Community 25 - "Community 25"
Cohesion: 0.09
Nodes (21): Advanced Usage, API Reference, CLI, code:tsx (import { ColorPicker, ColorPickerBase } from "~/components/c), code:tsx (import { createSignal } from "solid-js";), code:tsx (import { createSignal } from "solid-js";), code:tsx (import { ColorPickerBase } from "~/components/color-picker";), code:bash (npx solidui-cli@latest add color-picker) (+13 more)

### Community 26 - "Community 26"
Cohesion: 0.09
Nodes (20): CheckboxRootProviderDemo(), API Reference, Checkbox, CLI, code:tsx (import { Checkbox, CheckboxLabel, CheckboxRootProvider } fro), code:tsx (<Checkbox disabled />), code:tsx (<Checkbox checked="indeterminate" />), code:tsx (import { useCheckbox } from "@ark-ui/solid/checkbox";) (+12 more)

### Community 27 - "Community 27"
Cohesion: 0.09
Nodes (20): API Reference, CLI, code:tsx (import { NumberInput } from "~/components/number-input";), code:tsx (<NumberInput label="Amount" defaultValue={0} error />), code:tsx (<NumberInput defaultValue={50} disabled />), code:bash (npx solidui-cli@latest add number-input), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants') (+12 more)

### Community 28 - "Community 28"
Cohesion: 0.09
Nodes (20): Advanced Usage, API Reference, CLI, code:tsx (import { createToaster, Toaster } from "~/components/toast";), code:tsx (toaster.create({ title: "Default toast", description: "This ), code:tsx (import { Toast } from "~/components/toast/toast.base";), code:tsx (import { ToastBase } from "~/components/toast";), code:bash (npx solidui-cli@latest add toast) (+12 more)

### Community 29 - "Community 29"
Cohesion: 0.09
Nodes (19): CollapsibleRootProviderDemo(), API Reference, CLI, code:tsx (import {), code:tsx (import { useCollapsible } from "@ark-ui/solid/collapsible";), code:bash (npx solidui-cli@latest add collapsible), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants') (+11 more)

### Community 30 - "Community 30"
Cohesion: 0.09
Nodes (19): API Reference, CLI, code:tsx (import {), code:tsx (<Slider defaultValue={[50]} disabled>), code:bash (npx solidui-cli@latest add slider), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants'), code:tsx (import { Slider as ArkSlider } from "@ark-ui/solid/slider";) (+11 more)

### Community 31 - "Community 31"
Cohesion: 0.09
Nodes (20): API Reference, Avatar Placeholder, Card Skeleton, CLI, code:tsx (import { Skeleton } from "~/components/skeleton";), code:tsx ({/* Circle for avatars */}), code:bash (npx solidui-cli@latest add skeleton), code:bash (npm install tailwind-variants) (+12 more)

### Community 32 - "Community 32"
Cohesion: 0.1
Nodes (18): API Reference, CLI, code:tsx (import {), code:bash (npx solidui-cli@latest add popover), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants'), code:tsx (import { Popover as ArkPopover } from '@ark-ui/solid/popover), code:tsx (import { Popover as ArkPopover } from "@ark-ui/solid/popover) (+10 more)

### Community 33 - "Community 33"
Cohesion: 0.1
Nodes (19): API Reference, CLI, code:tsx (import { ToggleGroup, ToggleGroupItem } from "~/components/t), code:tsx (<ToggleGroup defaultValue={["bold"]} multiple>), code:tsx (import { useToggleGroup } from "@ark-ui/solid/toggle-group";), code:tsx (import { ToggleGroup, ToggleGroupItem } from "~/components/t), code:bash (npx solidui-cli@latest add toggle-group), code:bash (npm install tailwind-variants) (+11 more)

### Community 34 - "Community 34"
Cohesion: 0.1
Nodes (19): 1. Recipe: `packages/core/src/recipes/color-picker.ts`, 2. Core Index: `packages/core/src/index.ts`, 3. Tsup Entry: `packages/core/tsup.config.ts`, 4. Base File: `packages/solid/src/color-picker/color-picker.base.tsx`, 5. Index File: `packages/solid/src/color-picker/index.tsx`, 6. Solid Barrel: `packages/solid/src/index.ts`, 7. Demo: `apps/docs/src/components/color-picker-demo/`, 8. Docs: `apps/docs/src/content/docs/components/color-picker.mdx` (+11 more)

### Community 35 - "Community 35"
Cohesion: 0.1
Nodes (18): API Reference, Basic, CLI, code:tsx (import { Pagination, PaginationPageList, PaginationFirstTrig), code:tsx (import { createSignal } from "solid-js";), code:tsx (import { For } from "solid-js";), code:tsx (import { Pagination, PaginationPageList, PaginationFirstTrig), code:bash (npx solidui-cli@latest add pagination) (+10 more)

### Community 36 - "Community 36"
Cohesion: 0.1
Nodes (18): API Reference, CLI, code:tsx (import {), code:tsx (import { useDrawer } from "@ark-ui/solid/drawer";), code:bash (npx solidui-cli@latest add drawer), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants'), code:tsx (import { Drawer as ArkDrawer } from '@ark-ui/solid/drawer') (+10 more)

### Community 37 - "Community 37"
Cohesion: 0.1
Nodes (18): API Reference, Badge, CLI, code:tsx (import { Badge } from "~/components/badge";), code:tsx (import { Badge } from "@ui/solid";), code:bash (npx solidui-cli@latest add badge), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants') (+10 more)

### Community 38 - "Community 38"
Cohesion: 0.1
Nodes (18): API Reference, CLI, code:tsx (import { Switch, SwitchLabel, SwitchRootProvider } from "~/c), code:tsx (<Switch disabled />), code:tsx (import { useSwitch } from "@ark-ui/solid/switch";), code:bash (npx solidui-cli@latest add switch), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants') (+10 more)

### Community 39 - "Community 39"
Cohesion: 0.1
Nodes (18): 1. Recipe: `packages/core/src/recipes/hover-card.ts`, 2. Core Index: `packages/core/src/index.ts`, 3. Tsup Entry: `packages/core/tsup.config.ts`, 4. Base File: `packages/solid/src/hover-card/hover-card.base.tsx`, 5. Index File: `packages/solid/src/hover-card/index.tsx`, 6. Solid Barrel: `packages/solid/src/index.ts`, 7. Demo: `apps/docs/src/components/hover-card-demo/HoverCardBasicDemo.tsx`, 8. Docs: `apps/docs/src/content/docs/components/hover-card.mdx` (+10 more)

### Community 40 - "Community 40"
Cohesion: 0.12
Nodes (18): Adding A Route, Adding Links, Building For Production, code:bash (pnpm install), code:bash (pnpm build), code:tsx (import { Link } from "@tanstack/solid-router";), code:tsx (<Link to="/about">About</Link>), code:tsx (import { createServerFn } from '@tanstack/solid-start') (+10 more)

### Community 42 - "Community 42"
Cohesion: 0.11
Nodes (17): API Reference, Carousel, CLI, code:tsx (import {), code:bash (npx solidui-cli@latest add carousel), code:bash (npm install tailwind-variants), code:tsx (import { tv } from "tailwind-variants";), code:tsx (import { Carousel as ArkCarousel } from "@ark-ui/solid/carou) (+9 more)

### Community 43 - "Community 43"
Cohesion: 0.11
Nodes (17): Anatomy, API Reference, Breadcrumb, CLI, code:tsx (import {), code:tsx (<Breadcrumb>), code:bash (npx solidui-cli@latest add breadcrumb), code:bash (npm install tailwind-variants) (+9 more)

### Community 44 - "Community 44"
Cohesion: 0.11
Nodes (17): Alert, Anatomy, API Reference, CLI, code:tsx (import { Alert, AlertTitle, AlertDescription, AlertAction } ), code:bash (npx solidui-cli@latest add alert), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants') (+9 more)

### Community 45 - "Community 45"
Cohesion: 0.11
Nodes (17): API Reference, CLI, code:tsx (import { PinInput, PinInputControl, PinInputInput, PinInputL), code:tsx (import { usePinInput } from "@ark-ui/solid/pin-input";), code:bash (npx solidui-cli@latest add pin-input), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants'), code:tsx (import { PinInput as ArkPinInput } from "@ark-ui/solid/pin-i) (+9 more)

### Community 46 - "Community 46"
Cohesion: 0.11
Nodes (17): Alert Dialog, Anatomy, API Reference, CLI, code:tsx (import {), code:bash (npx solidui-cli@latest add alert-dialog), code:bash (npm install @ark-ui/solid tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants') (+9 more)

### Community 47 - "Community 47"
Cohesion: 0.11
Nodes (17): Advanced Usage, API Reference, CLI, code:tsx (import { ScrollArea } from "~/components/scroll-area";), code:tsx (import { ScrollArea, ScrollAreaBase } from "~/components/scr), code:bash (npx solidui-cli@latest add scroll-area), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from "tailwind-variants";) (+9 more)

### Community 48 - "Community 48"
Cohesion: 0.11
Nodes (17): API Reference, CLI, code:tsx (import { Input } from "~/components/input"), code:tsx (<Input label="Email" description="We'll never share your ema), code:tsx (<Input label="Password" error="Password is required" type="p), code:bash (npx solidui-cli@latest add input), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants') (+9 more)

### Community 49 - "Community 49"
Cohesion: 0.11
Nodes (17): API Reference, CLI, code:tsx (import { H1, H2, H3, H4, P, Lead, Large, Small, Muted, Inlin), code:tsx (<Blockquote>"A quote for emphasis."</Blockquote>), code:tsx (<List>), code:bash (npx solidui-cli@latest add typography), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants') (+9 more)

### Community 50 - "Community 50"
Cohesion: 0.11
Nodes (17): API Reference, Basic Usage, CLI, code:tsx (import { For } from "solid-js";), code:tsx (<MenuItem value="edit">Edit</MenuItem>), code:bash (npx solidui-cli@latest add menu), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from "tailwind-variants";) (+9 more)

### Community 51 - "Community 51"
Cohesion: 0.11
Nodes (17): API Reference, CLI, code:tsx (import { Textarea } from "~/components/textarea";), code:tsx (<Textarea label="Bio" description="Write a short introductio), code:tsx (<Textarea label="Bio" error="This field is required" />), code:bash (npx solidui-cli@latest add textarea), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants') (+9 more)

### Community 52 - "Community 52"
Cohesion: 0.11
Nodes (17): 1. Recipe: `packages/core/src/recipes/<name>.ts`, 2. Core Index: `packages/core/src/index.ts`, 3. Tsup Entry: `packages/core/tsup.config.ts`, 4. Base File: `packages/solid/src/<name>/<name>.base.tsx`, 5. Index File: `packages/solid/src/<name>/index.tsx`, 6. Solid Barrel: `packages/solid/src/index.ts`, 7. Demos: `apps/docs/src/components/<name>-demo/`, 8. Sidebar: `apps/docs/src/layouts/DocsLayout.astro` (+9 more)

### Community 53 - "Community 53"
Cohesion: 0.12
Nodes (3): Content(), Item(), useListboxVariant()

### Community 54 - "Community 54"
Cohesion: 0.11
Nodes (16): Anatomy, API Reference, Card, CLI, code:tsx (import { Card, CardHeader, CardTitle, CardDescription, CardC), code:bash (npx solidui-cli@latest add card), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants') (+8 more)

### Community 55 - "Community 55"
Cohesion: 0.11
Nodes (16): API Reference, CLI, code:tsx (import {), code:bash (npx solidui-cli@latest add progress), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants'), code:tsx (import { Progress as ArkProgress } from "@ark-ui/solid/progr), code:tsx (import { splitProps, type Component } from "solid-js";) (+8 more)

### Community 56 - "Community 56"
Cohesion: 0.11
Nodes (16): API Reference, Avatar, CLI, code:tsx (import {), code:bash (npx solidui-cli@latest add avatar), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants'), code:tsx (import { Avatar as ArkAvatar } from "@ark-ui/solid/avatar";) (+8 more)

### Community 57 - "Community 57"
Cohesion: 0.11
Nodes (16): 1. Recipe: `packages/core/src/recipes/rating-group.ts`, 2. Core Index: `packages/core/src/index.ts`, 3. Tsup Entry: `packages/core/tsup.config.ts`, 4. Base File: `packages/solid/src/rating-group/rating-group.base.tsx`, 5. Index File: `packages/solid/src/rating-group/index.tsx`, 6. Solid Barrel: `packages/solid/src/index.ts`, 7. Demo: `apps/docs/src/components/rating-group-demo/RatingGroupBasicDemo.tsx`, 8. Docs: `apps/docs/src/content/docs/components/rating-group.mdx` (+8 more)

### Community 58 - "Community 58"
Cohesion: 0.11
Nodes (16): 1. Recipe: `packages/core/src/recipes/breadcrumb.ts`, 2. Core Index: `packages/core/src/index.ts`, 3. Tsup Entry: `packages/core/tsup.config.ts`, 4. Solid Component: `packages/solid/src/breadcrumb/index.tsx`, 5. Solid Barrel: `packages/solid/src/index.ts`, 6. Demo: `apps/docs/src/components/breadcrumb-demo/BreadcrumbBasicDemo.tsx`, 7. Docs: `apps/docs/src/content/docs/components/breadcrumb.mdx`, Artifact Checklist (+8 more)

### Community 59 - "Community 59"
Cohesion: 0.11
Nodes (16): 1. Recipe: `packages/core/src/recipes/listbox.ts`, 2. Core Index: `packages/core/src/index.ts`, 3. Tsup Entry: `packages/core/tsup.config.ts`, 4. Base File: `packages/solid/src/listbox/listbox.base.tsx`, 5. Index File: `packages/solid/src/listbox/index.tsx`, 6. Solid Barrel: `packages/solid/src/index.ts`, 7. Demo: `apps/docs/src/components/listbox-demo/ListboxBasicDemo.tsx`, 8. Docs: `apps/docs/src/content/docs/components/listbox.mdx` (+8 more)

### Community 60 - "Community 60"
Cohesion: 0.11
Nodes (16): 1. Recipe: `packages/core/src/recipes/table.ts`, 2. Core Index: `packages/core/src/index.ts`, 3. Tsup Entry: `packages/core/tsup.config.ts`, 4. Solid Component: `packages/solid/src/table/index.tsx`, 5. Solid Barrel: `packages/solid/src/index.ts`, 6. Demo: `apps/docs/src/components/table-demo/TableBasicDemo.tsx`, 7. Docs: `apps/docs/src/content/docs/components/table.mdx`, Artifact Checklist (+8 more)

### Community 61 - "Community 61"
Cohesion: 0.14
Nodes (15): ANTI-PATTERNS (THIS PROJECT), CODE MAP, code:block1 (.), COMMANDS, CONVENTIONS, Development, graphify, Moonrepo (+7 more)

### Community 62 - "Community 62"
Cohesion: 0.12
Nodes (15): Anatomy, API Reference, CLI, code:tsx (import {), code:bash (npx solidui-cli@latest add table), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants'), code:tsx (import { splitProps, type Component } from 'solid-js') (+7 more)

### Community 63 - "Community 63"
Cohesion: 0.12
Nodes (15): API Reference, CLI, code:tsx (import { Spinner } from "~/components/spinner";), code:bash (npx solidui-cli@latest add spinner), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants'), code:tsx (import { splitProps, type Component } from 'solid-js'), code:tsx (import { Spinner } from "@ui/solid";) (+7 more)

### Community 65 - "Community 65"
Cohesion: 0.12
Nodes (14): API Reference, CLI, code:tsx (import { Separator } from "~/components/separator";), code:bash (npx solidui-cli@latest add separator), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants'), code:tsx (import { splitProps, type Component } from 'solid-js'), code:tsx (import { Separator } from "@ui/solid";) (+6 more)

### Community 66 - "Community 66"
Cohesion: 0.12
Nodes (14): API Reference, Aspect Ratio, CLI, code:tsx (import { AspectRatio } from "~/components/aspect-ratio";), code:bash (npx solidui-cli@latest add aspect-ratio), code:bash (npm install tailwind-variants), code:tsx (import { tv, type VariantProps } from 'tailwind-variants'), code:tsx (import { splitProps, type Component, children } from 'solid-) (+6 more)

### Community 73 - "Community 73"
Cohesion: 0.21
Nodes (12): Ark UI, @ark-ui/solid, Astro 6, Component delivery pipeline, MDX, Moonrepo, shadcn, Tailwind CSS v4 (+4 more)

### Community 75 - "Community 75"
Cohesion: 0.2
Nodes (3): Indicator(), Item(), useSegmentGroupVariant()

### Community 81 - "Community 81"
Cohesion: 0.18
Nodes (9): High Priority, Implemented (31/88), Legend, Low Priority, Medium Priority, Not Implemented (62) — 20 Ark UI + 42 shadcn parity, Out of Scope (for reference), Solid UI Components Status (+1 more)

### Community 82 - "Community 82"
Cohesion: 0.18
Nodes (9): code:block1 (apps/docs/), code:bash (moon run docs:dev        # Dev server with HMR), COMMANDS, CONVENTIONS, NOTES, OVERVIEW, PROJECT KNOWLEDGE BASE, STRUCTURE (+1 more)

### Community 83 - "Community 83"
Cohesion: 0.29
Nodes (7): convertFile(), escapePreCode(), jsxDelta(), main(), processImport(), stripFrontmatter(), toPascalCase()

### Community 88 - "Community 88"
Cohesion: 0.22
Nodes (7): ANTI-PATTERNS, code:block1 (packages/solid/), CONVENTIONS, OVERVIEW, Packages/Solid Knowledge, STRUCTURE, WHERE TO LOOK

### Community 92 - "Community 92"
Cohesion: 0.25
Nodes (6): Astro Starter Kit: Basics, code:sh (pnpm create astro@latest -- --template basics), code:text (/), 🧞 Commands, 🚀 Project Structure, 👀 Want to learn more?

### Community 93 - "Community 93"
Cohesion: 0.25
Nodes (6): ANTI-PATTERNS (THIS DIRECTORY), code:bash (moon run create-ui:build), COMMANDS, OVERVIEW, PROJECT KNOWLEDGE BASE, WHERE TO LOOK

### Community 94 - "Community 94"
Cohesion: 0.25
Nodes (6): ANTI-PATTERNS (THIS DIRECTORY), code:bash (moon run core:build), COMMANDS, OVERVIEW, PROJECT KNOWLEDGE BASE, WHERE TO LOOK

### Community 95 - "Community 95"
Cohesion: 0.25
Nodes (6): code:block1 (packages/core/src/recipes/), CONVENTIONS, OVERVIEW, Packages/Core/Recipes Knowledge, STRUCTURE, WHERE TO LOOK

## Knowledge Gaps
- **754 isolated node(s):** `OVERVIEW`, `code:block1 (.)`, `WHERE TO LOOK`, `CODE MAP`, `CONVENTIONS` (+749 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Solid.js` connect `Community 0` to `Community 2`, `Community 4`, `Community 5`, `Community 7`, `Community 12`, `Community 147`, `Community 148`, `Community 149`, `Community 150`, `Community 23`, `Community 24`, `Community 151`, `Community 41`, `Community 53`, `Community 64`, `Community 67`, `Community 68`, `Community 69`, `Community 70`, `Community 71`, `Community 72`, `Community 73`, `Community 74`, `Community 75`, `Community 76`, `Community 77`, `Community 78`, `Community 79`, `Community 80`, `Community 85`, `Community 86`, `Community 87`, `Community 91`, `Community 96`, `Community 97`, `Community 98`, `Community 99`, `Community 100`, `Community 101`, `Community 102`, `Community 103`, `Community 104`, `Community 105`, `Community 106`, `Community 111`, `Community 112`, `Community 114`, `Community 115`, `Community 120`, `Community 121`, `Community 122`, `Community 123`, `Community 124`, `Community 127`?**
  _High betweenness centrality (0.170) - this node is a cross-community bridge._
- **What connects `OVERVIEW`, `code:block1 (.)`, `WHERE TO LOOK` to the rest of the system?**
  _754 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.04 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.04 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._