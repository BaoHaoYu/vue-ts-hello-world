<template>
  <div class="App">
    <header class="App__header">
      <img :src="logo" class="App__logo" alt="logo" />
      <p>
        Edit
        <code>src/App/App.vue</code> and save to reload.
      </p>
      <a
        class="App__link"
        href="https://cn.vuejs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >Learn Vue</a>
    </header>

    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@import url('./App.scss');
</style>

<script>
import script from './App.script'
export default script
</script>