import { Avatar as ArkAvatar } from "@ark-ui/solid/avatar";
import { splitProps, type Component } from "solid-js";
import { avatarVariants } from "@ui/core";

const styles = avatarVariants();

export const AvatarRoot: Component<ArkAvatar.RootProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkAvatar.Root class={styles.root({ class: local.class })} {...others} />;
};

export const AvatarRootProvider: Component<ArkAvatar.RootProviderProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkAvatar.RootProvider class={styles.root({ class: local.class })} {...others} />;
};

export const AvatarFallback: Component<ArkAvatar.FallbackProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkAvatar.Fallback class={styles.fallback({ class: local.class })} {...others} />;
};

export const AvatarImage: Component<ArkAvatar.ImageProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <ArkAvatar.Image class={styles.image({ class: local.class })} {...others} />;
};
