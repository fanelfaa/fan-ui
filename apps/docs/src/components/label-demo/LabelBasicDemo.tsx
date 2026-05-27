import { Label } from "@ui/solid";
import { Input } from "@ui/solid";

export default function LabelBasicDemo() {
  return (
    <div class="rounded-lg border border-border p-6">
      <div class="flex flex-col gap-4">
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <Label for="name">Name</Label>
          <Input placeholder="Enter your name" />
        </div>
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <Label for="email">Email</Label>
          <Input type="email" placeholder="Enter your email" />
        </div>
      </div>
    </div>
  );
}
