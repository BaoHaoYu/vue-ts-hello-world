<template>
  <div :style="{ background: '#00dcff', height: 260, width: 600, overflowY: 'auto' }">
    <h2>Page2</h2>

    <div :style="{ marginBottom: 10 }">
      <router-link to="/page2/child1">child1</router-link>
      <router-link to="/page2/child2">child2</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Page2',
}
</script>
