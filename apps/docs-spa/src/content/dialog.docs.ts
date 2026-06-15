/**
 * Dialog documentation — source of truth for docs-spa and LLM .md output.
 */
import { type DocSchema, md, demo, install } from "./docs";
import DialogBasicDemo from "../components/demos/dialog-demo/DialogBasicDemo";

export const docs: DocSchema = {
  name: "Dialog",
  description: "A modal dialog that overlays the page content, typically used for important actions or collecting user input.",
  category: "Overlay",
  blocks: [
    install(),

    md(`## Usage

Import the components:

\`\`\`tsx
import {
  Dialog,
  DialogTrigger,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
} from "@fan-ui/solid";
\`\`\`

Basic usage:

\`\`\`tsx
<Dialog>
  <DialogTrigger>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogBackdrop />
  <DialogPositioner>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Confirm</DialogTitle>
        <DialogDescription>
          Are you sure you want to proceed?
        </DialogDescription>
      </DialogHeader>
      <DialogBody>
        <p>This action cannot be undone.</p>
      </DialogBody>
      <DialogFooter>
        <DialogCloseTrigger>
          <Button variant="outline">Cancel</Button>
        </DialogCloseTrigger>
        <Button>Confirm</Button>
      </DialogFooter>
      <DialogCloseTrigger>
        <Button variant="ghost" size="icon">×</Button>
      </DialogCloseTrigger>
    </DialogContent>
  </DialogPositioner>
</Dialog>
\`\`\``),

    demo(DialogBasicDemo),

    md(`### Controlled

Control the dialog open state programmatically:

\`\`\`tsx
const [open, setOpen] = createSignal(false);

<Dialog open={open()} onOpenChange={setOpen}>
  ...
</Dialog>
\`\`\``),

    md(`### Nested Dialogs

Dialogs can be nested by rendering a new \`Dialog.Root\` inside an existing one.`),

    md(`## API Reference

See the [Ark UI Dialog](https://ark-ui.com/docs/components/dialog) documentation.`),
  ],
};
