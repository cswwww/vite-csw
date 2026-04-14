# 项目规范

## 技术栈

- **框架**: Vue 3 (Composition API) + Vite
- **状态管理**: Pinia
- **路由**: Vue Router
- **样式**: UnoCSS
- **语言**: JavaScript

## GIS 可视化开发规范

### 推荐的 GIS 库

按场景选择合适的库，避免重复引入功能相似的库：

| 场景 | 推荐库 | 说明 |
|------|--------|------|
| 2D 地图 | Leaflet / MapLibre GL JS | 轻量/专业 |
| 3D 地图 | Cesium / MapLibre GL JS | 地球级/城市级 |
| 大数据可视化 | Deck.gl | WebGL 高性能 |
| 地理数据处理 | Turf.js | 点线面分析 |
| 瓦片加载 | georaster | 栅格数据 |
| GeoJSON 处理 | @turf/turf | 标准工具库 |

### 地图组件规范

1. **地图实例管理**
   - 地图组件使用 `onMounted` 初始化，`onBeforeUnmount` 销毁
   - 使用 `markRaw()` 包裹地图实例避免响应式开销
   - 提供 `map` 或 `mapInstance` refs 统一暴露

   ```js
   // Good
   const map = markRaw(null)
   onMounted(() => {
     map = new Map(mapContainer.value)
   })

   // Bad - 不要在 data 中存储地图实例
   // data() { return { map: null } }
   ```

2. **图层管理**
   - 使用统一的图层管理器封装 add/remove/visible 操作
   - 图层按功能分组：底图层、数据层、交互层
   - 提供 `remove()` 方法清理资源

3. **坐标处理**
   - 统一使用 `[lng, lat]` 顺序（GeoJSON 标准）
   - 瓦片坐标与经纬度坐标明确区分
   - 使用 Turf.js 做地理计算，避免手写公式

### 性能优化

- 大量 markers 使用 `MarkerCluster` 或 `Deck.gl` 的 aggregation 模式
- 大型 GeoJSON 数据先简化（simplify）再加载
- 地图交互使用 `debounce` / `throttle`
- 瓦片懒加载：只加载视口内 + 缓冲区数据
- 使用 `requestIdleCallback` 进行非紧急渲染

### 数据格式

- 矢量数据优先使用 GeoJSON
- 坐标参考系统默认使用 WGS84 (EPSG:4326)

## 代码规范

### Vue 组件

- 组件名使用 PascalCase
- 组件文件放在 `src/components/` 或 `src/components/gis/`
- 地图相关组件放在 `src/components/map/`
- 组件结构顺序：script → template → style

### 文件组织

```
src/
├── components/
│   ├── gis/
│   │   ├── MapView.vue       # 地图容器
│   │   ├── controls/         # 地图控件
│   │   └── layers/           # 图层组件
│   └── ...
├── composables/
│   ├── useMap.js             # 地图实例管理
│   ├── useGeoJSON.js         # GeoJSON 数据处理
│   └── useLayers.js         # 图层管理
├── stores/
│   └── map.js               # 地图状态
├── utils/
│   ├── geo.js               # 地理工具函数
│   └── format.js            # 格式化工具
└── views/
    └── ...
```

### 样式规范

- 使用 UnoCSS 原子类
- 地图容器必须设置明确宽高
- 覆盖第三方库样式时使用专属前缀（如 `.maplibre-`、`.leaflet-`）

## 禁止事项

- 不要引入未经讨论的 GIS 库
- 不要在模板中直接实例化地图
- 不要将地图实例放入 reactive 对象
- 不要忽略地图的 `remove()` 清理
- 不要在 `data()` 中存储大量地理数据

## 开发流程

1. 新增 GIS 功能前先确认地图库选型
2. 组件需要提供 props 文档注释
3. 使用 `console.time` / `console.timeEnd` 标记性能
4. 大型数据变更提供加载状态

## 常用命令

```bash
pnpm run dev      # 开发
pnpm run build    # 构建
pnpm run lint     # 检查
pnpm run lint:fix # 自动修复
```
