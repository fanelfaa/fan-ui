/**
 * Button documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import ButtonBasicDemo from "../components/demos/button-demo/ButtonBasicDemo";

export const docs: DocSchema = {
  name: "Button",
  description: "Displays a button or a component that looks like a button.",
  category: "Form & Input",
  blocks: [
    { type: "install" },

    md(`## Usage

Import the component:

\`\`\`tsx
import { Button } from "@fan-ui/solid";
\`\`\`

Basic usage:

\`\`\`tsx
<Button>Click me</Button>
\`\`\`

With event handler:

\`\`\`tsx
<Button onClick={() => console.log("clicked!")}>Submit</Button>
\`\`\`

Combining variant and size:

\`\`\`tsx
<Button variant="destructive" size="lg">
  Delete Account
</Button>
\`\`\`

With icon:

\`\`\`tsx
<Button variant="outline" size="icon">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
</Button>
\`\`\`

Custom class override:

\`\`\`tsx
<Button class="w-full">Full Width Button</Button>
\`\`\``),

    demo(ButtonBasicDemo),

    md(`### Variants

The \`variant\` prop accepts \`default\`, \`destructive\`, \`outline\`, \`secondary\`, \`ghost\`, and \`link\`.`),

    md(`### Sizes

The \`size\` prop accepts \`sm\`, \`md\`, \`lg\`, and \`icon\`.`),

    md(`### Disabled

Add the \`disabled\` prop to disable interaction.`),

    md(`### Loading

Add the \`loading\` prop to show a spinner alongside the button label and automatically disable interaction.

Useful for async operations like form submissions:

\`\`\`tsx
import { createSignal } from "solid-js";
import { Button } from "@fan-ui/solid";

export function SubmitDemo() {
  const [loading, setLoading] = createSignal(false);

  async function handleSubmit() {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
  }

  return (
    <Button loading={loading()} onClick={handleSubmit}>
      Submit
    </Button>
  );
}
\`\`\``),

    md(`### Link

Use the \`buttonVariants\` helper to render a link that looks like a button:

\`\`\`tsx
import { Button, buttonVariants } from "@fan-ui/solid";

<a class={buttonVariants({ variant: "outline" })} href="/docs">
  Click here
</a>
\`\`\``),

    md(`## API Reference

| Prop | Type | Default |
|------|------|---------|
| variant | \`"default" \\| "secondary" \\| "destructive" \\| "outline" \\| "ghost" \\| "link"\` | \`"default"\` |
| size | \`"sm" \\| "md" \\| "lg" \\| "icon"\` | \`"sm"\` |
| loading | \`boolean\` | \`false\` |
| disabled | \`boolean\` | \`false\` |
| class | \`string\` | — |`),
  ],
};
