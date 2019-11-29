<template>
  <div class="RouterRoot">
    <div :style="{ marginBottom: 10 }">
      <router-link :style="{color: 'rgb(185, 75, 75)'}" to="/page1">page1</router-link>
      <router-link :style="{color: 'rgb(185, 75, 75)'}" to="/page2">page2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
:style="{ background: '#00dcff', height: 260, width: 600, overflowY: 'auto' }"

<style lang="scss" scoped>
.RouterRoot {
  width: 100%;
  bottom: 0;
  background: #00dcff;
  height: 260px;
  overflow-y: auto;
}
</style>
<script>
export default {
  name: 'RouterRoot',
}
</script>