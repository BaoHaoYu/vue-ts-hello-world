<template>
  <div>
    <div :style="{ marginBottom: 10 }">
      <router-link to="/page1">page1</router-link>
      <router-link to="/page2">page2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'RouterRoot',
}
</script>