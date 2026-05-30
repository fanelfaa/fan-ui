import { splitProps, type Component } from "solid-js";
import { SegmentGroup as SegmentGroupBase } from "./segment-group.base";
import { SegmentGroup as ArkSegmentGroup } from "@ark-ui/solid/segment-group";
import type { SegmentGroupVariants } from "@ui/core";

type SegmentGroupProps = ArkSegmentGroup.RootProps & SegmentGroupVariants;

const SegmentGroup: Component<SegmentGroupProps> = (props) => {
  const [local, others] = splitProps(props, ["variant", "orientation", "children"]);
  return (
    <SegmentGroupBase.Root variant={local.variant} orientation={local.orientation} {...others}>
      <SegmentGroupBase.Indicator />
      {local.children}
    </SegmentGroupBase.Root>
  );
};

export { SegmentGroup, SegmentGroupBase };

export const SegmentGroupItem: Component<ArkSegmentGroup.ItemProps & SegmentGroupVariants> = (
  props,
) => {
  const [local, others] = splitProps(props, ["children"]);
  return (
    <SegmentGroupBase.Item {...others}>
      {typeof local.children === "string" ? (
        <>
          <SegmentGroupBase.ItemText>{local.children}</SegmentGroupBase.ItemText>
          <SegmentGroupBase.ItemControl />
          <SegmentGroupBase.ItemHiddenInput />
        </>
      ) : (
        local.children
      )}
    </SegmentGroupBase.Item>
  );
};

export { segmentGroupVariants, type SegmentGroupVariants } from "@ui/core";
