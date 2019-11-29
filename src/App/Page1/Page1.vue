<template>
  <div>
    <h2>Page1</h2>

    <div :style="{marginBottom: 10}">
      <router-link to="/page1/child1">child1</router-link>
      <router-link to="/page1/child2">child2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Page1',
}
</script>
