/**
 * emit-md: generates per-component .md files from *.docs.ts files.
 *
 * Run: npx tsx apps/docs-spa/src/content/emit-md.ts
 * Output: apps/docs-spa/public/llms/<name>.md
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { expandInstallToMarkdown, type DocSchema, type DocBlock } from "./docs";

const CONTENT_DIR = path.resolve(__dirname);
const PUBLIC_DIR = path.resolve(__dirname, "../public/llms");
const PACKAGE_ROOT = path.resolve(__dirname, "../../../..");

/**
 * Convert a single block to markdown (async for install blocks).
 */
async function blockToMarkdown(block: DocBlock, componentName: string): Promise<string> {
  switch (block.type) {
    case "md":
      return block.content + "\n";

    case "demo":
      // In .md output, demos become placeholders
      return `> **Interactive demo**: See [\`${componentName}\`](/components/${componentName}) in the docs.\n`;

    case "install":
      // Expand install block from actual source files (async)
      return (await expandInstallToMarkdown(componentName, PACKAGE_ROOT)) + "\n";
  }
}

/**
 * Convert a DocSchema to markdown string (for LLM consumption).
 */
async function docSchemaToMarkdown(docs: DocSchema): Promise<string> {
  const lines: string[] = [];

  // Header
  lines.push(`# ${docs.name}`);
  lines.push("");
  lines.push(docs.description);
  lines.push("");

  for (const block of docs.blocks) {
    lines.push(await blockToMarkdown(block, docs.name.toLowerCase()));
  }

  return lines.join("\n");
}

async function main() {
  // Ensure output directory exists
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });

  // Find all *.docs.ts files in content/
  const docsFiles = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".docs.ts"));

  console.log(`Found ${docsFiles.length} docs files: ${docsFiles.join(", ")}`);

  for (const file of docsFiles) {
    // Dynamically import the docs file
    const docsModule = await import(path.join(CONTENT_DIR, file));
    const docs: DocSchema = docsModule.docs;

    if (!docs) {
      console.warn(`⚠️  ${file} does not export a "docs" object, skipping`);
      continue;
    }

    // Convert to markdown (async)
    const md = await docSchemaToMarkdown(docs);

    // Write to public/llms/<name>.md
    const mdFile = `${docs.name.toLowerCase()}.md`;
    const outPath = path.join(PUBLIC_DIR, mdFile);
    fs.writeFileSync(outPath, md, "utf-8");

    console.log(`✅ ${outPath}`);
  }

  console.log(`\nDone! ${docsFiles.length} .md files written to ${PUBLIC_DIR}`);
}

main();
