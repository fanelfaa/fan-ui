/**
 * Vite plugin for docs-spa.
 *
 * Watches *.docs.ts files in src/content/ and:
 * 1. Generates route pages in src/generated/pages/<name>.tsx
 * 2. Generates/updates src/generated/manifest.ts
 * 3. Generates public/llms/<name>.md (for LLM consumption)
 * 4. Triggers HMR on changes
 */

import * as fs from "node:fs";
import * as path from "node:path";
import type { Plugin, ViteDevServer } from "vite";

const CONTENT_GLOB = "**/*.docs.ts";
const GENERATED_DIR = path.resolve(__dirname);
const PAGES_DIR = path.join(GENERATED_DIR, "pages");
const PUBLIC_LLMS_DIR = path.resolve(__dirname, "../public/llms");

/**
 * Convert kebab-case to PascalCase.
 */
function toPascalCase(kebab: string): string {
  return kebab
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

/**
 * Scan content/ directory for *.docs.ts files and return their names.
 */
function scanDocsFiles(contentDir: string): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".docs.ts"))
    .map((f) => f.replace(".docs.ts", ""));
}

/**
 * Generate a route page component for a single docs file.
 */
function generateRoutePage(
  componentName: string,
  contentDir: string,
  pagesDir: string,
): void {
  const docsFile = path.join(contentDir, `${componentName}.docs.ts`);
  const routeFile = path.join(pagesDir, `${componentName}.tsx`);

  const content = `/**
 * Auto-generated route for ${componentName} — DO NOT EDIT MANUALLY.
 * Generated from: ${path.relative(pagesDir, docsFile)}
 */
import { DocRenderer } from "../content/DocRenderer";
import { docs } from "../content/${componentName}.docs";

export default function ${toPascalCase(componentName)}Page() {
  return <DocRenderer docs={docs} />;
}
`;

  fs.mkdirSync(pagesDir, { recursive: true });
  fs.writeFileSync(routeFile, content, "utf-8");
}

/**
 * Generate/update the manifest.ts file with all generated routes.
 */
// Registry is auto-discovered via import.meta.glob — no generation needed.



/**
 * Emit a .md file for a single component (for LLM consumption).
 * Uses expandInstallToMarkdown from content/docs.ts.
 */
async function emitMd(
  componentName: string,
  contentDir: string,
  publicDir: string,
  packageRoot: string,
): Promise<void> {
  // Dynamic import to avoid pulling node:fs into browser
  const { expandInstallToMarkdown } = await import(path.join(
    contentDir,
    "docs.ts",
  ));

  const mdPath = path.join(publicDir, `${componentName}.md`);
  const md = await expandInstallToMarkdown(componentName, packageRoot);

  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(mdPath, md, "utf-8");
}

/**
 * Full generate: scan all .docs.ts files, generate routes, manifest, .md files.
 */
async function fullGenerate(
  contentDir: string,
  generatedDir: string,
  publicDir: string,
  packageRoot: string,
): Promise<void> {
  const names = scanDocsFiles(contentDir);
  const pagesDir = path.join(generatedDir, "pages");

  console.log(`[docs-plugin] Scanned ${names.length} docs files: ${names.join(", ")}`);

  // Generate route pages
  for (const name of names) {
    generateRoutePage(name, contentDir, pagesDir);
  }

  // Registry is auto-discovered via import.meta.glob

  // Emit .md files (async)
  await Promise.all(
    names.map((name) => emitMd(name, contentDir, publicDir, packageRoot))
  );

  console.log(`[docs-plugin] Generated ${names.length} route pages + manifest + .md files`);
}

export function docsPlugin(options?: {
  contentDir?: string;
  packageRoot?: string;
}): Plugin {
  const contentDir = options?.contentDir ?? path.resolve(__dirname, "../content");
  const packageRoot = options?.packageRoot ?? path.resolve(__dirname, "../../..");

  return {
    name: "vite-plugin-docs",

    async configResolved(_config) {
      // Run full generation on startup
      await fullGenerate(contentDir, GENERATED_DIR, PUBLIC_LLMS_DIR, packageRoot);
    },

    configureServer(server: ViteDevServer) {
      // Watch for changes to .docs.ts files
      const watcher = server.watcher;

      watcher.add(path.join(contentDir, CONTENT_GLOB));

      watcher.on("change", (filePath) => {
        if (filePath.endsWith(".docs.ts")) {
          const name = path.basename(filePath, ".docs.ts");
          console.log(`[docs-plugin] Detected change in ${name}.docs.ts, regenerating...`);

          // Regenerate the specific route
          generateRoutePage(name, contentDir, PAGES_DIR);

          // Registry auto-discovers new pages via import.meta.glob

          // Emit .md (async, fire and forget)
          emitMd(name, contentDir, PUBLIC_LLMS_DIR, packageRoot).catch(console.error);

          // Trigger HMR for the changed route
          const routeModule = `${GENERATED_DIR}/pages/${name}.tsx`;
          server.moduleGraph.onFileChange(routeModule);

          console.log(`[docs-plugin] Regenerated ${name} route + manifest + .md`);
        }
      });
    },

    async buildStart() {
      // Run full generation at build start
      await fullGenerate(contentDir, GENERATED_DIR, PUBLIC_LLMS_DIR, packageRoot);
    },
  };
}
