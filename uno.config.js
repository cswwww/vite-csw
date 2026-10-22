import { defineConfig, presetWind3, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      // 品牌色板，取自 public/icon.svg 的主色 #2A5082 与高光色 #A3D4FF
      zx: {
        50: '#F2F7FD',
        100: '#E3EEFC',
        200: '#C6DDF7',
        300: '#A3D4FF',
        400: '#7DBBF2',
        500: '#4E82CC',
        600: '#3D6599',
        700: '#2A5082',
        800: '#24446E',
        900: '#1D3759',
      },
    },
  },
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'absolute-center': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
})
