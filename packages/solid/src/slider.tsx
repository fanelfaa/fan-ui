import { Slider as ArkSlider } from '@ark-ui/solid/slider'
import { createMemo, splitProps, type Component, type JSX } from 'solid-js'
import { sliderVariants } from '@ui/core'

type RootProps = ArkSlider.RootProps & { class?: string }

const SliderRoot: Component<RootProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = sliderVariants()
  const rootClass = createMemo(() => styles.root({ class: local.class }))
  return <ArkSlider.Root class={rootClass()} {...others} />
}

const SliderLabel: Component<ArkSlider.LabelProps> = (props) => {
  const styles = sliderVariants()
  return <ArkSlider.Label class={styles.label()} {...props} />
}

const SliderValueText: Component<ArkSlider.ValueTextProps> = (props) => {
  const styles = sliderVariants()
  return <ArkSlider.ValueText class={styles.valueText()} {...props} />
}

type ControlProps = ArkSlider.ControlProps & { class?: string; children?: JSX.Element }

const SliderControl: Component<ControlProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children'])
  const styles = sliderVariants()
  const controlClass = createMemo(() => styles.control({ class: local.class }))
  return (
    <ArkSlider.Control class={controlClass()} {...others}>
      {local.children}
    </ArkSlider.Control>
  )
}

type TrackProps = ArkSlider.TrackProps & { class?: string; children?: JSX.Element }

const SliderTrack: Component<TrackProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'children'])
  const styles = sliderVariants()
  const trackClass = createMemo(() => styles.track({ class: local.class }))
  return (
    <ArkSlider.Track class={trackClass()} {...others}>
      {local.children}
    </ArkSlider.Track>
  )
}

const SliderRange: Component<ArkSlider.RangeProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = sliderVariants()
  const rangeClass = createMemo(() => styles.range({ class: local.class }))
  return <ArkSlider.Range class={rangeClass()} {...others} />
}

type ThumbProps = ArkSlider.ThumbProps & { class?: string; index: number }

const SliderThumb: Component<ThumbProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'index'])
  const styles = sliderVariants()
  const thumbClass = createMemo(() => styles.thumb({ class: local.class }))
  return <ArkSlider.Thumb class={thumbClass()} index={local.index} {...others} />
}

const SliderHiddenInput: Component<ArkSlider.HiddenInputProps> = (props) => {
  return <ArkSlider.HiddenInput {...props} />
}

const SliderDraggingIndicator: Component<ArkSlider.DraggingIndicatorProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = sliderVariants()
  const draggingIndicatorClass = createMemo(() => styles.draggingIndicator({ class: local.class }))
  return <ArkSlider.DraggingIndicator class={draggingIndicatorClass()} {...others} />
}

const SliderMarkerGroup: Component<ArkSlider.MarkerGroupProps> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  const styles = sliderVariants()
  const markerGroupClass = createMemo(() => styles.markerGroup({ class: local.class }))
  return <ArkSlider.MarkerGroup class={markerGroupClass()} {...others} />
}

type MarkerProps = ArkSlider.MarkerProps & { class?: string; value: number }

const SliderMarker: Component<MarkerProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'value'])
  const styles = sliderVariants()
  const markerClass = createMemo(() => styles.marker({ class: local.class }))
  return <ArkSlider.Marker class={markerClass()} value={local.value} {...others} />
}

export {
  SliderRoot,
  SliderLabel,
  SliderValueText,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SliderHiddenInput,
  SliderDraggingIndicator,
  SliderMarkerGroup,
  SliderMarker,
  sliderVariants,
}