/**
 * Catch-all route for generated doc pages.
 *
 * Hand-typed routes take priority over this catch-all.
 * The Vite plugin generates page components in src/generated/pages/.
 */
import { createFileRoute } from "@tanstack/solid-router";
import { createResource, Show, type JSX } from "solid-js";
import { componentRegistry } from "../../generated/registry";

export const Route = createFileRoute("/components/$component")({
  component: ComponentPage,
});

function ComponentPage() {
  const params = Route.useParams();
  const component = () => params().component;

  const [pageModule] = createResource(component, async (name) => {
    const loader = componentRegistry[name];
    if (!loader) return undefined;
    return await loader();
  });

  return (
    <Show when={pageModule()} fallback={<div class="p-8 text-muted-foreground">Loading...</div>}>
      {(mod) => {
        const modVal = mod();
        const Page = modVal.default as unknown as () => JSX.Element;
        return <Page />;
      }}
    </Show>
  );
}
