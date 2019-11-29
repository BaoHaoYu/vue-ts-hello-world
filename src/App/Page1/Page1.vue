<template>
  <div>
    <h2>Page1</h2>

    <div :style="{marginBottom: 10}">
      <router-link active-class="active" :style="{color: '#bf5757'}" to="/page1/child1">child1</router-link>
      <router-link active-class="active" :style="{color: '#bf5757'}" to="/page1/child2">child2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.active {
  font-size: 25px;
  font-weight: 'bold';
  color: '#fff700';
}
</style>

<script>
export default {
  name: 'Page1',
}
</script>
