/**
 * Test: expandInstallToMarkdown for button component.
 *
 * Run: npx tsx apps/docs-spa/test/docs.test.ts
 *
 * Verifies:
 * 1. readInstallSourceFiles finds the recipe file
 * 2. readInstallSourceFiles finds the index.tsx (directory form, no base.tsx)
 * 3. expandInstallToMarkdown produces the correct CLI + Manual sections
 */

import { readInstallSourceFiles, expandInstallToMarkdown } from "../src/content/docs";

const PACKAGE_ROOT = process.cwd();

async function main() {
  console.log("=== Testing expandInstall for button ===\n");

  // Test 1: readInstallSourceFiles
  const files = await readInstallSourceFiles("button", PACKAGE_ROOT);

  console.log("readInstallSourceFiles result:");
  console.log("  recipe:", files.recipe ? `found (${files.recipe.length} chars)` : "MISSING");
  console.log("  base:", files.base ? `found (${files.base.length} chars)` : "not present (expected for button)");
  console.log("  index:", files.index ? `found (${files.index.length} chars)` : "MISSING");
  console.log("  flat:", files.flat ? `found (${files.flat.length} chars)` : "not present (expected for button)");
  console.log();

  // Test 2: expandInstallToMarkdown
  const md = await expandInstallToMarkdown("button", PACKAGE_ROOT);

  console.log("expandInstallToMarkdown output (first 500 chars):");
  console.log("---");
  console.log(md.substring(0, 500));
  console.log("---");
  console.log();

  // Test 3: Assertions
  const checks = [
    { name: "CLI section present", pass: md.includes("## Installation") && md.includes("### CLI") },
    { name: "CLI command correct", pass: md.includes("npx @fan-ui/cli@latest add button") },
    { name: "Manual section present", pass: md.includes("### Manual") },
    { name: "Recipe code block present", pass: md.includes("packages/core/src/recipes/button.ts") },
    { name: "Index code block present", pass: md.includes("packages/solid/src/button/index.tsx") },
    { name: "No flat component reference", pass: !md.includes("Component**") },
  ];

  let allPass = true;
  for (const check of checks) {
    const status = check.pass ? "✅" : "❌";
    console.log(`${status} ${check.name}`);
    if (!check.pass) allPass = false;
  }

  console.log();
  if (allPass) {
    console.log("🎉 All checks passed!");
    process.exit(0);
  } else {
    console.log("💥 Some checks failed!");
    process.exit(1);
  }
}

main();
