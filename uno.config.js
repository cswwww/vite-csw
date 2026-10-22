import { defineConfig, presetIcons, presetWind3, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    // Wind3 预设（Tailwind v3 语法兼容），暗色模式使用 class 策略（`dark:` 变体 + 根节点 `.dark`）
    presetWind3({
      dark: 'class',
    }),
    // 纯 CSS 图标（Iconify），用法如 `i-carbon-check`，图标集来自 @iconify-json/*
    presetIcons({
      scale: 1.2,
    }),
  ],
  transformers: [
    // CSS 指令：@apply / @screen / theme()
    transformerDirectives(),
    // 变体组写法：`hover:(bg-gray-700 text-white)`
    transformerVariantGroup(),
  ],
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'absolute-center': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
})
