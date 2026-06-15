/**
 * Catch-all route for generated doc pages.
 *
 * Hand-typed routes (button.tsx, select.tsx, dialog.tsx) take priority.
 * This catch-all only matches paths without an explicit route.
 *
 * The Vite plugin generates:
 * - src/generated/pages/<name>.tsx (page components)
 * - src/generated/registry.ts (name → page module mapping)
 */
import { createFileRoute, notFound } from "@tanstack/solid-router";
import { createSignal, Show, type JSX } from "solid-js";
import { componentRegistry } from "../../generated/registry";

export const Route = createFileRoute("/components/$component")({
  component: ComponentPage,
});

function ComponentPage() {
  const { component } = Route.useParams();

  const loader = componentRegistry[component()];

  if (!loader) {
    throw notFound();
  }

  const [PageComp, setPageComp] = createSignal<(() => JSX.Element) | null>(null);

  loader().then((mod) => setPageComp(() => mod.default));

  return (
    <Show
      when={PageComp()}
      fallback={<div class="p-8 text-muted-foreground">Loading...</div>}
    >
      {(Comp) => <Comp />}
    </Show>
  );
}
