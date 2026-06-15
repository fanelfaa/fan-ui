/**
 * Script to migrate all hand-typed routes to .docs.ts files.
 *
 * Run: npx tsx apps/docs-spa/scripts/migrate-docs.ts
 *
 * This script:
 * 1. Reads each hand-typed route in src/routes/components/
 * 2. Extracts the description (first <P> tag)
 * 3. Creates a .docs.ts file in src/content/
 */

import * as fs from "node:fs";
import * as path from "node:path";

const ROUTES_DIR = path.resolve(__dirname, "../src/routes/components");
const CONTENT_DIR = path.resolve(__dirname, "../src/content");

// Components already migrated
const MIGRATED = new Set(["button", "select", "dialog"]);

// Components to skip (not regular components)
const SKIP = new Set(["quickstart"]);

// Category mapping based on component type
const CATEGORY_MAP: Record<string, string> = {
  // Form & Input
  "checkbox": "Form & Input",
  "combobox": "Form & Input",
  "color-picker": "Form & Input",
  "date-picker": "Form & Input",
  "input": "Form & Input",
  "listbox": "Form & Input",
  "number-input": "Form & Input",
  "password-input": "Form & Input",
  "pin-input": "Form & Input",
  "radio-group": "Form & Input",
  "rating-group": "Form & Input",
  "segment-group": "Form & Input",
  "select": "Form & Input",
  "slider": "Form & Input",
  "switch": "Form & Input",
  "tags-input": "Form & Input",
  "textarea": "Form & Input",

  // Overlay
  "alert-dialog": "Overlay",
  "dialog": "Overlay",
  "drawer": "Overlay",
  "hover-card": "Overlay",
  "menu": "Overlay",
  "popover": "Overlay",
  "tooltip": "Overlay",

  // Navigation
  "breadcrumb": "Navigation",
  "pagination": "Navigation",
  "tabs": "Navigation",
  "toggle-group": "Navigation",

  // Data Display
  "accordion": "Data Display",
  "avatar": "Data Display",
  "badge": "Data Display",
  "card": "Data Display",
  "carousel": "Data Display",
  "collapsible": "Data Display",
  "scroll-area": "Data Display",
  "skeleton": "Data Display",
  "table": "Data Display",
  "typography": "Data Display",

  // Feedback
  "alert": "Feedback",
  "progress": "Feedback",
  "spinner": "Feedback",
  "toast": "Feedback",

  // Layout
  "aspect-ratio": "Layout",
  "separator": "Layout",

  // Form
  "toggle": "Form & Input",
};

function extractDescription(routeContent: string): string {
  // Try to find first <P> tag with description
  const pMatch = routeContent.match(/<P[^>]*>([\s\S]*?)<\/P>/);
  if (pMatch) {
    // Clean up the content
    let desc = pMatch[1]
      .replace(/<[^>]+>/g, "") // Remove HTML tags
      .replace(/\s+/g, " ") // Normalize whitespace
      .trim();
    
    // Limit length
    if (desc.length > 150) {
      desc = desc.substring(0, 147) + "...";
    }
    return desc;
  }
  
  return "TODO: Add description";
}

function getCategory(name: string): string {
  return CATEGORY_MAP[name] || "Other";
}

function toPascalCase(kebab: string): string {
  return kebab
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

function generateDocsTs(name: string, description: string, category: string): string {
  const pascalName = toPascalCase(name);
  
  // Try to import demo - check if it exists
  const demoPath = path.resolve(__dirname, `../src/components/demos/${name}-demo`);
  const hasDemo = fs.existsSync(demoPath);
  
  let demoImport = "";
  let demoBlock = "";
  
  if (hasDemo) {
    // Check for default export
    const demoFile = path.join(demoPath, `${pascalName}BasicDemo.tsx`);
    if (fs.existsSync(demoFile)) {
      const content = fs.readFileSync(demoFile, "utf-8");
      const isDefault = content.includes("export default");
      demoImport = isDefault
        ? `import ${pascalName}BasicDemo from "../components/demos/${name}-demo/${pascalName}BasicDemo";`
        : `import { ${pascalName}BasicDemo } from "../components/demos/${name}-demo/${pascalName}BasicDemo";`;
      demoBlock = `\n    demo(${pascalName}BasicDemo),`;
    }
  }

  return `/**
 * ${pascalName} documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, install } from "./docs";
${demoImport ? demoImport + "\n" : ""}
export const docs: DocSchema = {
  name: "${pascalName}",
  description: "${description.replace(/"/g, '\\"')}",
  category: "${category}",
  blocks: [
    { type: "install" },${demoBlock}

    md(\`## Usage

TODO: Add usage examples for ${pascalName}.\`),

    md(\`## API Reference

See the [Ark UI ${pascalName}](https://ark-ui.com/docs/components/${name}) documentation.\`),
  ],
};
`;
}

function main() {
  // Get all route files
  const routeFiles = fs.readdirSync(ROUTES_DIR)
    .filter(f => f.endsWith(".tsx") && !f.startsWith("$"))
    .map(f => f.replace(".tsx", ""));

  console.log(`Found ${routeFiles.length} route files`);

  let created = 0;
  let skipped = 0;

  for (const name of routeFiles) {
    if (MIGRATED.has(name)) {
      console.log(`⏭️  ${name} (already migrated)`);
      skipped++;
      continue;
    }

    if (SKIP.has(name)) {
      console.log(`⏭️  ${name} (skipped)`);
      skipped++;
      continue;
    }

    const routePath = path.join(ROUTES_DIR, `${name}.tsx`);
    const routeContent = fs.readFileSync(routePath, "utf-8");
    
    const description = extractDescription(routeContent);
    const category = getCategory(name);
    
    const docsContent = generateDocsTs(name, description, category);
    const docsPath = path.join(CONTENT_DIR, `${name}.docs.ts`);
    
    fs.writeFileSync(docsPath, docsContent, "utf-8");
    console.log(`✅ ${name}.docs.ts (${category})`);
    created++;
  }

  console.log(`\nDone! Created ${created} .docs.ts files, skipped ${skipped}`);
}

main();
