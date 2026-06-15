/**
 * usage: npx @fan-ui/cli doc <component>
 *
 * Scaffolds:
 * 1. apps/docs-spa/src/content/<name>.docs.ts  — DocSchema with description/usage blocks
 * 2. apps/docs-spa/src/components/demos/<name>-demo/<Name>BasicDemo.tsx — demo component
 *
 * Also updates sidebar-nav.ts with a new entry for the component.
 */

import fs from "fs-extra";
import path from "path";

/**
 * Convert kebab-case to PascalCase.
 * e.g. "alert-dialog" → "AlertDialog"
 */
function toPascalCase(kebab: string): string {
  return kebab
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

/**
 * Find the monorepo root by walking up from __dirname until we find package.json
 * with the name "ui" (the root package).
 */
function findMonorepoRoot(startDir: string): string {
  let dir = startDir;
  while (true) {
    const pkgPath = path.join(dir, "package.json");
    if (fs.existsSync(pkgPath)) {
      const pkg = fs.readJsonSync(pkgPath);
      if (pkg.name === "ui" || pkg.name === "root") {
        return dir;
      }
    }
    const parent = path.resolve(dir, "..");
    if (parent === dir) break;
    dir = parent;
  }
  // Fallback: assume we're in packages/cli/src/commands/
  return path.resolve(startDir, "../../..");
}

/**
 * Scaffold the .docs.ts file.
 */
function scaffoldDocsTs(
  monorepoRoot: string,
  componentName: string,
): string {
  const pascalName = toPascalCase(componentName);
  const demoImport = `../components/demos/${componentName}-demo/${pascalName}BasicDemo`;
  const docsPath = path.join(
    monorepoRoot,
    "apps",
    "docs-spa",
    "src",
    "content",
    `${componentName}.docs.ts`,
  );

  const content = `/**
 * ${pascalName} documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import ${pascalName}BasicDemo from "${demoImport}";

export const docs: DocSchema = {
  name: "${pascalName}",
  description: "TODO: Add a short description for ${pascalName}.",
  category: "TODO: Add category (e.g. Form & Input, Overlay, Navigation)",
  blocks: [
    { type: "install" },

    md(\`## Usage

Use the \\\`variant\\\` and \\\`size\\\` props to control appearance.\`),

    demo(${pascalName}BasicDemo),

    md(\`## API Reference

See the [Ark UI ${pascalName}](https://ark-ui.com/docs/components/${componentName}) documentation.\`),
  ],
};
`;

  fs.ensureDirSync(path.dirname(docsPath));
  fs.writeFileSync(docsPath, content, "utf-8");
  return docsPath;
}

/**
 * Scaffold the demo component.
 */
function scaffoldDemo(
  monorepoRoot: string,
  componentName: string,
): string {
  const pascalName = toPascalCase(componentName);
  const demoDir = path.join(
    monorepoRoot,
    "apps",
    "docs-spa",
    "src",
    "components",
    "demos",
    `${componentName}-demo`,
  );
  const demoPath = path.join(demoDir, `${pascalName}BasicDemo.tsx`);

  const content = `import { ${pascalName} } from "@fan-ui/solid";

export default function ${pascalName}BasicDemo() {
  return (
    <div class="flex flex-wrap gap-2">
      <${pascalName}>TODO: Add demo content</${pascalName}>
    </div>
  );
}
`;

  fs.ensureDirSync(demoDir);
  fs.writeFileSync(demoPath, content, "utf-8");
  return demoPath;
}

/**
 * Update sidebar-nav.ts with a new entry.
 *
 * The sidebar has a structure like:
 *   { title: "Form & Input", items: [{ title: "Button", path: "/components/button" }, ...] }
 *
 * This function adds a new item to the matching category, or creates a new category.
 */
function updateSidebarNav(
  monorepoRoot: string,
  componentName: string,
  category: string,
): string {
  const navPath = path.join(
    monorepoRoot,
    "apps",
    "docs-spa",
    "src",
    "sidebar-nav.ts",
  );

  if (!fs.existsSync(navPath)) {
    console.warn(`⚠️  sidebar-nav.ts not found at ${navPath}, skipping`);
    return navPath;
  }

  let content = fs.readFileSync(navPath, "utf-8");
  const pascalName = toPascalCase(componentName);

  // Check if the component already exists
  if (content.includes(`path: "/components/${componentName}"`)) {
    console.log(`ℹ️  ${pascalName} already in sidebar-nav.ts, skipping`);
    return navPath;
  }

  // Find the category section and add the entry
  // Pattern: items: [ ... ]  within a category block
  const categoryRegex = new RegExp(
    `(title:\\s*["']${escapeRegex(category)}["']\\s*,\\s*items:\\s*\\[)(.*?)(\\])`,
    "s",
  );

  const match = content.match(categoryRegex);
  if (match) {
    const newEntry = `,\n    { title: "${pascalName}", path: "/components/${componentName}" }`;
    const replacement = match[1] + match[2] + newEntry + match[3];
    content = content.replace(categoryRegex, replacement);
  } else {
    // Category not found — add a new category at the end
    const newCategory = `  {\n    title: "${category}",\n    items: [\n      { title: "${pascalName}", path: "/components/${componentName}" },\n    ],\n  },\n`;
    // Insert before the closing ]
    content = content.replace(/\];(\s*}\);?\s*$/, `${newCategory}];$1`);
  }

  fs.writeFileSync(navPath, content, "utf-8");
  return navPath;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Main command handler.
 */
export async function openDocs(component: string): Promise<void> {
  const monorepoRoot = findMonorepoRoot(__dirname);
  const pascalName = toPascalCase(component);

  console.log(`\n📝 Scaffolding docs for ${pascalName}...\n`);

  // 1. Scaffold .docs.ts
  const docsPath = scaffoldDocsTs(monorepoRoot, component);
  console.log(`✅ Created ${path.relative(monorepoRoot, docsPath)}`);

  // 2. Scaffold demo
  const demoPath = scaffoldDemo(monorepoRoot, component);
  console.log(`✅ Created ${path.relative(monorepoRoot, demoPath)}`);

  // 3. Update sidebar-nav.ts
  const navPath = updateSidebarNav(monorepoRoot, component, "TODO");
  console.log(`✅ Updated ${path.relative(monorepoRoot, navPath)}`);

  console.log(`\n🎉 Done! Edit the following files:\n`);
  console.log(`  1. ${path.relative(monorepoRoot, docsPath)} — fill in description, category, usage blocks`);
  console.log(`  2. ${path.relative(monorepoRoot, demoPath)} — add demo content`);
  console.log(`  3. apps/docs-spa/src/sidebar-nav.ts — update category name if needed`);
  console.log(`\n`);
}
