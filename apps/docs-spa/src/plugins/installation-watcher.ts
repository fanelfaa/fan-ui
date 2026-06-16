/**
 * installation-watcher.ts
 *
 * Vite plugin that watches recipe/component source files and regenerates
 * installation.gen.mdx on change during dev mode.
 *
 * Uses fs.watch on specific directories (no recursive flag, no chokidar
 * dependency) — fires change events instantly via inotify on Linux.
 */

import type { Plugin } from "vite";
import { watch, existsSync, readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, basename, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, "../../../..");
const CORE_RECIPES_DIR = resolve(PROJECT_ROOT, "packages/core/src/recipes");
const SOLID_COMPONENTS_DIR = resolve(PROJECT_ROOT, "packages/solid/src");
const DOCS_DIR = resolve(PROJECT_ROOT, "apps/docs-spa/src/content/docs");

const POC = new Set(["accordion", "alert", "button"]);

// ── helpers ──────────────────────────────────────────────────────────

function readFileSafe(fp: string): string | null {
  try { return readFileSync(fp, "utf-8"); } catch { return null; }
}

function getComponentFiles(c: string): { label: string; content: string }[] {
  const d = resolve(SOLID_COMPONENTS_DIR, c);
  if (!existsSync(d)) return [];
  return readdirSync(d, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".tsx"))
    .sort((a, b) => {
      if (a.name === "index.tsx") return 1;
      if (b.name === "index.tsx") return -1;
      return a.name.localeCompare(b.name);
    })
    .map((e) => ({
      label: `src/components/${c}/${e.name}`,
      content: readFileSync(resolve(d, e.name), "utf-8"),
    }));
}

function generateContent(component: string): string | null {
  const recipe = readFileSafe(resolve(CORE_RECIPES_DIR, `${component}.ts`));
  if (!recipe) return null;
  const files = getComponentFiles(component);
  if (!files.length) return null;

  const out: string[] = [];
  out.push("## Installation\n");
  out.push("### CLI\n");
  out.push("Run the following command to add the component to your project:\n");
  out.push("```bash");
  out.push(`npx @fan-ui/cli@latest add ${component}`);
  out.push("```\n");
  out.push("### Manual\n");
  out.push(`Create the recipe file at \`src/components/recipes/${component}.ts\`:\n`);
  out.push("```ts");
  out.push(recipe.trimEnd());
  out.push("```\n");

  if (files.length === 1) {
    const f = files[0];
    out.push(`Create the component file at \`${f.label}\`:\n`);
    out.push("```" + extname(f.label).slice(1));
    out.push(f.content.trimEnd());
    out.push("```\n");
  } else {
    const hasBoth = files.some((f) => f.label.endsWith(".base.tsx")) && files.some((f) => f.label.endsWith("index.tsx"));
    if (hasBoth) out.push("Create the component directory and files.\n");
    for (const f of files) {
      out.push(hasBoth ? `\`${f.label}\`:\n` : `Create the component file at \`${f.label}\`:\n`);
      out.push("```" + extname(f.label).slice(1));
      out.push(f.content.trimEnd());
      out.push("```\n");
    }
  }

  out.push("> **Note:** Make sure your project has the Tailwind CSS theme variables set up (`--background`, `--foreground`, `--ring`, `--border`, etc.) or override the utility classes to match your design system.\n");
  return out.join("\n");
}

// ── plugin ────────────────────────────────────────────────────────────

export function installationWatcher(): Plugin {
  return {
    name: "installation-watcher",
    apply: "serve",

    configureServer(server) {
      const logger = server.config.logger;

      function regenerate(component: string) {
        const content = generateContent(component);
        if (!content) { logger.warn(`[iw] ✗ ${component} — generation failed`); return; }
        const outDir = resolve(DOCS_DIR, component);
        mkdirSync(outDir, { recursive: true });
        writeFileSync(resolve(outDir, "installation.gen.mdx"), content, "utf-8");
        logger.info(`[iw] ✓ ${component}/installation.gen.mdx`);
      }

      // —— recipe watcher (flat directory, no recursive) ——
      if (existsSync(CORE_RECIPES_DIR)) {
        watch(CORE_RECIPES_DIR, (_event, filename) => {
          if (!filename || !filename.endsWith(".ts")) return;
          const c = basename(filename, ".ts");
          if (!POC.has(c)) return;
          logger.info(`[iw] recipe changed: ${filename}`);
          regenerate(c);
        });
        logger.info(`[iw] watching ${CORE_RECIPES_DIR}`);
      } else {
        logger.warn(`[iw] recipes dir not found: ${CORE_RECIPES_DIR}`);
      }

      // —— solid component watchers (one per POC component, no recursive) ——
      for (const c of POC) {
        const dir = resolve(SOLID_COMPONENTS_DIR, c);
        if (!existsSync(dir)) { logger.warn(`[iw] component dir not found: ${dir}`); continue; }
        watch(dir, (_event, filename) => {
          if (!filename || !filename.endsWith(".tsx")) return;
          logger.info(`[iw] component changed: ${c}/${filename}`);
          regenerate(c);
        });
        logger.info(`[iw] watching ${dir}`);
      }
    },
  };
}
