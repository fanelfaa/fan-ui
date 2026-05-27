import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { Portal } from "solid-js/web";
import { splitProps, type Component } from "solid-js";
import {
  AlertDialogBackdrop,
  AlertDialogPositioner,
  AlertDialogCloseTrigger,
  AlertDialogContent as BaseAlertDialogContent,
} from "./alert-dialog.base";

const AlertDialogContent: Component<ArkDialog.ContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <Portal>
      <AlertDialogBackdrop />
      <AlertDialogPositioner>
        <BaseAlertDialogContent class={local.class} {...others}>
          {local.children}
          <AlertDialogCloseTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </AlertDialogCloseTrigger>
        </BaseAlertDialogContent>
      </AlertDialogPositioner>
    </Portal>
  );
};

export { AlertDialogContent };

export * from "./alert-dialog.base";

export { alertDialogVariants, type AlertDialogVariants } from "@ui/core";
