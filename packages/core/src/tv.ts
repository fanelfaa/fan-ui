import { createTV } from 'tailwind-variants'

const tv = createTV({
  twMerge: true,
  twMergeConfig: {
    theme: {},
    classGroups: {},
  },
})

export { tv }
