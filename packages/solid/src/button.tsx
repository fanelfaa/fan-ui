import { createMemo, splitProps, type Component, type JSX } from 'solid-js'
import { buttonVariants } from '@ui/core'
import type { VariantProps } from 'tailwind-variants'

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button: Component<ButtonProps> = (props) => {
  const [local, others] = splitProps(props, ['class', 'variant', 'size'])
  const className = createMemo(()=>buttonVariants({ variant: local.variant, size: local.size, class: local.class }))
  return (
    <button
      class={className()}
      {...others}
    />
  )
}

export { Button, buttonVariants }