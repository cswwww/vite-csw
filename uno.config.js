import { defineConfig, presetWind3, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'absolute-center': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
})
