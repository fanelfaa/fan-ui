/**
 * Auto-generated component registry — DO NOT EDIT MANUALLY.
 * Maps component names to their page modules.
 */
import type { Component } from "solid-js";

export const componentRegistry: Record<string, () => Promise<{ default: Component }>> = {};

// Dynamically register all generated pages
try {
  // These imports are resolved by Vite at build/dev time
  const pages = import.meta.glob("./pages/*.tsx", { eager: false });
  for (const [path, loader] of Object.entries(pages)) {
    const name = path.replace("./pages/", "").replace(".tsx", "");
    componentRegistry[name] = loader as () => Promise<{ default: Component }>;
  }
} catch {
  // Not running in Vite context
}
