/**
 * generate-installation.ts
 *
 * Reads recipe files from packages/core/src/recipes/ and component files from
 * packages/solid/src/, then generates installation.gen.mdx for each component.
 *
 * Usage:
 *   pnpm generate-installation          # All 3 POC components
 *   pnpm generate-installation accordion # Specific component(s)
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from "node:fs";
import { resolve, relative, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECT_ROOT = resolve(__dirname, "../../..");
const CORE_RECIPES_DIR = resolve(PROJECT_ROOT, "packages/core/src/recipes");
const SOLID_COMPONENTS_DIR = resolve(PROJECT_ROOT, "packages/solid/src");
const DOCS_DIR = resolve(PROJECT_ROOT, "apps/docs-spa/src/content/docs");

/** Discover components that have docs dirs AND recipe files */
function discoverComponents(): string[] {
  if (!existsSync(DOCS_DIR)) return [];
  return readdirSync(DOCS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((name) => name !== "node_modules" && name !== ".git")
    .filter((name) => existsSync(resolve(CORE_RECIPES_DIR, `${name}.ts`)));
}

function getComponents(args: string[]): string[] {
  if (args.length === 0) return discoverComponents();
  return args;
}

function readFileSafe(filePath: string): string | null {
  try {
    return readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
}

/** Get all source files for a component from packages/solid/src/ */
function getComponentSourceFiles(component: string): { filePath: string; label: string; content: string }[] {
  const dirPath = resolve(SOLID_COMPONENTS_DIR, component);

  if (!existsSync(dirPath)) {
    // Try flat file
    const flatPath = resolve(SOLID_COMPONENTS_DIR, `${component}.tsx`);
    if (existsSync(flatPath)) {
      const content = readFileSync(flatPath, "utf-8");
      return [{ filePath: flatPath, label: `src/components/${component}.tsx`, content }];
    }
    return [];
  }

  const entries = readdirSync(dirPath, { withFileTypes: true });
  const tsxFiles = entries
    .filter((e) => e.isFile() && e.name.endsWith(".tsx"))
    .sort((a, b) => {
      // Ensure index.tsx comes last (after .base.tsx etc.)
      if (a.name === "index.tsx") return 1;
      if (b.name === "index.tsx") return -1;
      return a.name.localeCompare(b.name);
    });

  if (tsxFiles.length === 0) return [];

  return tsxFiles.map((entry) => {
    const content = readFileSync(resolve(dirPath, entry.name), "utf-8");
    return {
      filePath: resolve(dirPath, entry.name),
      label: `src/components/${component}/${entry.name}`,
      content,
    };
  });
}

/** Generate the installation.gen.mdx content for a single component */
function generateInstallationContent(component: string): string | null {
  // 1. Read recipe file
  const recipePath = resolve(CORE_RECIPES_DIR, `${component}.ts`);
  const recipeContent = readFileSafe(recipePath);
  if (!recipeContent) {
    console.error(`  ⚠ No recipe file found at ${recipePath}`);
    return null;
  }

  // 2. Read component source files
  const componentFiles = getComponentSourceFiles(component);
  if (componentFiles.length === 0) {
    console.error(`  ⚠ No component source files found for "${component}"`);
    return null;
  }

  // 3. Build the markdown
  const sections: string[] = [];

  sections.push("## Installation\n");
  sections.push("### CLI\n");
  sections.push("Run the following command to add the component to your project:\n");
  sections.push("```bash");
  sections.push(`npx @fan-ui/cli@latest add ${component}`);
  sections.push("```\n");

  sections.push("### Manual\n");

  // Recipe section
  sections.push(`Create the recipe file at \`src/components/recipes/${component}.ts\`:\n`);
  sections.push("```ts");
  sections.push(recipeContent.trimEnd());
  sections.push("```\n");

  // Component file(s)
  if (componentFiles.length === 1) {
    const file = componentFiles[0];
    sections.push(`Create the component file at \`${file.label}\`:\n`);
    const ext = extname(file.label);
    sections.push("```" + ext.slice(1));
    sections.push(file.content.trimEnd());
    sections.push("```\n");
  } else {
    const hasBaseAndIndex = componentFiles.some((f) => f.label.endsWith(".base.tsx")) &&
      componentFiles.some((f) => f.label.endsWith("index.tsx"));

    if (hasBaseAndIndex) {
      sections.push("Create the component directory and files.\n");
    }

    for (const file of componentFiles) {
      if (hasBaseAndIndex) {
        sections.push(`\`${file.label}\`:\n`);
      } else {
        sections.push(`Create the component file at \`${file.label}\`:\n`);
      }
      const ext = extname(file.label);
      sections.push("```" + ext.slice(1));
      sections.push(file.content.trimEnd());
      sections.push("```\n");
    }
  }

  // Tailwind note
  sections.push("> **Note:** Make sure your project has the Tailwind CSS theme variables set up (`--background`, `--foreground`, `--ring`, `--border`, etc.) or override the utility classes to match your design system.\n");

  return sections.join("\n");
}

function main() {
  const args = process.argv.slice(2);
  const components = getComponents(args);

  if (components.length === 0) {
    console.log("No valid components specified. Available: " + POC_COMPONENTS.join(", "));
    process.exit(1);
  }

  console.log(`Generating installation docs for: ${components.join(", ")}`);

  for (const component of components) {
    const content = generateInstallationContent(component);
    if (!content) {
      console.error(`  ✗ Failed to generate for "${component}"`);
      continue;
    }

    const outDir = resolve(DOCS_DIR, component);
    const outPath = resolve(outDir, "installation.gen.mdx");

    // Ensure output directory exists
    if (!existsSync(outDir)) {
      console.log(`  Creating directory: ${relative(PROJECT_ROOT, outDir)}`);
      mkdirSync(outDir, { recursive: true });
    }

    writeFileSync(outPath, content, "utf-8");
    console.log(`  ✓ Generated: ${relative(PROJECT_ROOT, outPath)}`);
  }

  console.log("\nDone.");
}

main();
