<template>
  <div class="home">
    <div>
      <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
      <el-button type="info"><i-ep-InfoFilled />Info</el-button>
      <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
      <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>
      <el-button type="info"><svg-icon icon-class="api" />SVG 本地图标</el-button>
      <div class="box" />
      <!-- <div style="width: 100px; height: 100px" :style="{ 'background-color': variables.bgColor }" /> -->
      <div class="text-red" style="width: 100px; height: 100px">
        <p>{{ countStore.count }}</p>
        <button @click="handleClick">+1</button>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from './stores/counter'

const countStore = useCounterStore()

const handleClick = () => {
  countStore.increment()
}
</script>
