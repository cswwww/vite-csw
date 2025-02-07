/*
 * @Date: 2024-01-13 16:31:46
 * @LastEditors: ReBeX  cswwwx@gmail.com
 * @LastEditTime: 2024-10-22 19:07:40
 * @FilePath: \vite-csw\src\store\index.js
 * @Description: 全局状态
 */
import { defineStore } from 'pinia'

// Main
const mainStore = defineStore('main', {
  state: () => ({ name: 'ReBeX' }),
  getters: {
    sayMyName: state => state.name,
  },
  actions: {
    notMyName(name) {
      this.name = name
    },
  },
})

export { mainStore }
