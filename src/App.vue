<template>
  <el-config-provider :locale="locale">
    <router-view #="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { initVisualData, injectKey, localKey } from '@/visual-editor/hooks/useVisualData'

const visualData = initVisualData()
// 注入可视化编辑器所有配置
provide(injectKey, visualData)

const { jsonData } = visualData

const locale = zhCn

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem(localKey, JSON.stringify(jsonData))
})
</script>

<style lang="scss">
@import 'style/common';
</style>
