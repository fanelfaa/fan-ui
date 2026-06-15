/**
 * DocSchema: typed block arrays for component documentation.
 *
 * Each component gets a `<name>.docs.ts` file in this directory that defines
 * its documentation as an array of typed blocks. The Vite plugin consumes
 * these blocks to generate route pages and per-component .md files.
 */

import { type Component } from "solid-js";

// ─── Block types ──────────────────────────────────────────────────────────────

/** Raw markdown block — content is a plain markdown string. */
export interface MdBlock {
  type: "md";
  content: string;
}

/**
 * Interactive demo block — component is a Solid.js component to render live.
 * code is the source code string to display (and to emit in the .md output).
 */
export interface DemoBlock {
  type: "demo";
  component: Component;
  code?: string;
}

/**
 * Installation block marker — expanded at render/build time from the actual
 * source files (recipe + base + index). No content needed — the expander
 * reads from packages/core and packages/solid.
 */
export interface InstallBlock {
  type: "install";
}

export type DocBlock = MdBlock | DemoBlock | InstallBlock;

// ─── DocSchema ────────────────────────────────────────────────────────────────

export interface DocSchema {
  /** Component name, e.g. "Button" */
  name: string;

  /** Short description for the page header and .md output */
  description: string;

  /** Sidebar category, e.g. "Form & Input" */
  category: string;

  /** Ordered array of documentation blocks */
  blocks: DocBlock[];
}

// ─── Block helpers ────────────────────────────────────────────────────────────

export function md(content: string): MdBlock {
  return { type: "md", content };
}

export function demo(component: Component, code?: string): DemoBlock {
  return { type: "demo", component, code };
}

export function install(): InstallBlock {
  return { type: "install" };
}

// ─── expandInstall ────────────────────────────────────────────────────────────
// Node.js only — used by build scripts and Vite plugin, not browser code.

/**
 * Source file content for the installation section.
 */
export interface InstallSourceFiles {
  /** The recipe file (e.g. packages/core/src/recipes/button.ts) */
  recipe?: string;

  /** The base file (e.g. packages/solid/src/button/button.base.tsx), if it exists */
  base?: string;

  /** The index file (e.g. packages/solid/src/button/index.tsx) */
  index?: string;

  /** For directory-form components without a base: just the single index.tsx */
  flat?: string;
}

/**
 * Read the source files for a component's Installation section.
 *
 * Handles two shapes:
 * - Directory form: recipe.ts + base.tsx (optional) + index.tsx
 * - Flat form: single .tsx file at packages/solid/src/<name>.tsx
 *
 * @param componentName  kebab-case component name, e.g. "button"
 * @param packageRoot    absolute path to the monorepo root
 */
export async function readInstallSourceFiles(
  componentName: string,
  packageRoot: string,
): Promise<InstallSourceFiles> {
  const fs = await import("node:fs");
  const path = await import("node:path");

  const result: InstallSourceFiles = {};

  // Read recipe (packages/core/src/recipes/<name>.ts)
  const recipePath = path.join(
    packageRoot,
    "packages",
    "core",
    "src",
    "recipes",
    `${componentName}.ts`,
  );
  if (fs.existsSync(recipePath)) {
    result.recipe = fs.readFileSync(recipePath, "utf-8");
  }

  // Determine directory vs flat
  const solidDir = path.join(
    packageRoot,
    "packages",
    "solid",
    "src",
    componentName,
  );
  const indexTsx = path.join(solidDir, "index.tsx");
  const baseTsx = path.join(solidDir, `${componentName}.base.tsx`);

  if (fs.existsSync(indexTsx)) {
    // Directory form
    result.index = fs.readFileSync(indexTsx, "utf-8");
    if (fs.existsSync(baseTsx)) {
      result.base = fs.readFileSync(baseTsx, "utf-8");
    }
  } else {
    // Flat form — single .tsx file at packages/solid/src/<name>.tsx
    const flatTsx = path.join(
      packageRoot,
      "packages",
      "solid",
      "src",
      `${componentName}.tsx`,
    );
    if (fs.existsSync(flatTsx)) {
      result.flat = fs.readFileSync(flatTsx, "utf-8");
    }
  }

  return result;
}

/**
 * Expand an InstallBlock into a markdown string for the .md output.
 *
 * @param componentName  kebab-case component name
 * @param packageRoot    absolute path to the monorepo root
 */
export async function expandInstallToMarkdown(
  componentName: string,
  packageRoot: string,
): Promise<string> {
  const files = await readInstallSourceFiles(componentName, packageRoot);

  const sections: string[] = [];

  // CLI section
  sections.push(
    `## Installation\n\n### CLI\n\n\`\`\`bash\nnpx @fan-ui/cli@latest add ${componentName}\n\`\`\``,
  );

  // Manual section
  const codeBlocks: string[] = [];

  if (files.recipe) {
    codeBlocks.push(
      `**Recipe** — \`packages/core/src/recipes/${componentName}.ts\`\n\n\`\`\`ts\n${files.recipe}\`\`\``,
    );
  }

  if (files.flat) {
    // Flat form — single file
    codeBlocks.push(
      `**Component** — \`packages/solid/src/${componentName}.tsx\`\n\n\`\`\`tsx\n${files.flat}\`\`\``,
    );
  } else {
    // Directory form — base + index
    if (files.base) {
      codeBlocks.push(
        `**Base** — \`packages/solid/src/${componentName}/${componentName}.base.tsx\`\n\n\`\`\`tsx\n${files.base}\`\`\``,
      );
    }
    if (files.index) {
      codeBlocks.push(
        `**Index** — \`packages/solid/src/${componentName}/index.tsx\`\n\n\`\`\`tsx\n${files.index}\`\`\``,
      );
    }
  }

  if (codeBlocks.length > 0) {
    sections.push(`### Manual\n\nInstall the following files manually:\n\n${codeBlocks.join("\n\n")}`);
  }

  return sections.join("\n\n");
}
