/**
 * DocRenderer: renders a DocSchema as a web page.
 *
 * Usage:
 *   import { docs } from "./button.docs";
 *   import { DocRenderer } from "./DocRenderer";
 *
 *   function ButtonPage() {
 *     return <DocRenderer docs={docs} />;
 *   }
 */
import { type Component, For, Show, createResource } from "solid-js";
import { H1, H2, H3, P } from "../components/markdown";
import { CodeBlock } from "../components/CodeBlock";
import { expandInstallToMarkdown } from "./docs";
import type { DocSchema, MdBlock, DemoBlock, InstallBlock, DocBlock } from "./docs";

function MdRenderer(props: { block: MdBlock }) {
  // Simple markdown → JSX: split by \n\n, render paragraphs and headings
  const lines = props.block.content.split("\n\n");

  return (
    <For each={lines}>
      {(chunk) => {
        const trimmed = chunk.trim();
        if (trimmed.startsWith("## ")) {
          return <H2>{trimmed.slice(3)}</H2>;
        }
        if (trimmed.startsWith("### ")) {
          return <H3>{trimmed.slice(4)}</H3>;
        }
        // Handle code blocks
        if (trimmed.startsWith("```")) {
          const match = trimmed.match(/^```(\w*)\n([\s\S]*?)```$/);
          if (match) {
            return <CodeBlock code={match[2]} lang={match[1] || "text"} />;
          }
        }
        // Handle tables
        if (trimmed.includes("|")) {
          return <P class="text-sm">{trimmed}</P>;
        }
        return <P>{trimmed}</P>;
      }}
    </For>
  );
}

function DemoRenderer(props: { block: DemoBlock }) {
  const Demo = props.block.component;
  return (
    <div class="my-4 rounded-lg border border-border p-6">
      <div class="mb-4">
        <Demo />
      </div>
      <Show when={props.block.code}>
        {(code) => <CodeBlock code={code()} lang="tsx" />}
      </Show>
    </div>
  );
}

async function fetchInstallMd(componentName: string): Promise<string> {
  // Try to load from public/llms/<name>.md first (pre-generated)
  try {
    const response = await fetch(`/llms/${componentName}.md`);
    if (response.ok) {
      return await response.text();
    }
  } catch {
    // Fall back to runtime generation
  }

  // Runtime generation (dev mode)
  const PACKAGE_ROOT = import.meta.env.VITE_MONOREPO_ROOT ?? "";
  return await expandInstallToMarkdown(componentName, PACKAGE_ROOT);
}

function InstallRenderer(props: { componentName: string }) {
  const [md] = createResource(
    () => props.componentName,
    fetchInstallMd,
  );

  return (
    <Show when={md()} fallback={<div class="p-4 text-muted-foreground">Loading installation...</div>}>
      {(content) => {
        const sections = content().split("\n\n");
        return (
          <For each={sections}>
            {(chunk) => {
              const trimmed = chunk.trim();
              if (trimmed.startsWith("## ")) {
                return <H2>{trimmed.slice(3)}</H2>;
              }
              if (trimmed.startsWith("### ")) {
                return <H3>{trimmed.slice(4)}</H3>;
              }
              if (trimmed.startsWith("```")) {
                const match = trimmed.match(/^```(\w*)\n([\s\S]*?)```$/);
                if (match) {
                  return <CodeBlock code={match[2]} lang={match[1] || "text"} />;
                }
              }
              // Handle bold lines like **Recipe** — ...
              if (trimmed.startsWith("**")) {
                return <P class="font-semibold">{trimmed}</P>;
              }
              return <P>{trimmed}</P>;
            }}
          </For>
        );
      }}
    </Show>
  );
}

function BlockRenderer(props: { block: DocBlock; componentName: string }) {
  switch (props.block.type) {
    case "md":
      return <MdRenderer block={props.block} />;
    case "demo":
      return <DemoRenderer block={props.block} />;
    case "install":
      return <InstallRenderer componentName={props.componentName} />;
  }
}

export function DocRenderer(props: { docs: DocSchema }) {
  return (
    <article class="space-y-6">
      <H1>{props.docs.name}</H1>
      <P class="text-lg text-muted-foreground">{props.docs.description}</P>
      <For each={props.docs.blocks}>
        {(block) => <BlockRenderer block={block} componentName={props.docs.name.toLowerCase()} />}
      </For>
    </article>
  );
}
