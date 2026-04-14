import presetWind4 from '@unocss/preset-wind4'
import { defineConfig, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetAttributify(),
  ],
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'absolute-center': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
})
