import { DialogCloseTrigger } from "@ark-ui/solid";
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  Input,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
  Separator,
} from "@ui/solid";
import { Button } from "@ui/solid";

export default function DialogBasicDemo() {
  return (
    <div class="rounded-lg border border-border p-6">
      <DialogRoot>
        <DialogTrigger asChild={(props) => <Button {...props()} />}>Edit Profile</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. You can save your changes when done.
            </DialogDescription>
          </DialogHeader>
          <div class="flex flex-col gap-4 py-4">
            <Input
              label="Name"
              placeholder="Your name"
              description="This will be displayed on your profile."
            />
            <Input
              label="Email"
              type="email"
              placeholder="your@email.com"
              description="We'll never share your email."
            />
            <RadioGroup class="flex flex-col gap-2">
              <RadioGroupLabel class="text-sm font-medium">Notification preferences</RadioGroupLabel>
              <RadioGroupItem value="all">
                <RadioGroupItemControl />
                <RadioGroupItemText>All notifications</RadioGroupItemText>
              </RadioGroupItem>
              <RadioGroupItem value="mentions">
                <RadioGroupItemControl />
                <RadioGroupItemText>Mentions only</RadioGroupItemText>
              </RadioGroupItem>
              <RadioGroupItem value="none">
                <RadioGroupItemControl />
                <RadioGroupItemText>No notifications</RadioGroupItemText>
              </RadioGroupItem>
            </RadioGroup>
          </div>
          <Separator />
          <DialogFooter>
            <DialogCloseTrigger asChild={(props) => <Button variant="outline" {...props()} />}>
              Cancel
            </DialogCloseTrigger>
            <Button>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </div>
  );
}
