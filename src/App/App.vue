<template>
  <div :class="css.App">
    <header :class="css.App__header">
      <img :src="logo" :class="css.App__logo" alt="logo" />
      <p>
        Edit
        <code>src/App/App.vue</code> and save to reload.
      </p>
      <a
        :class="css.App__link"
        href="https://cn.vuejs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >Learn Vue</a>
    </header>
  </div>
</template>

<script>
import logo from '../logo.svg'
import css from './App.scss'
export default {
  name: 'App',
  data() {
    return {
      css,
      logo
    }
  },
}
</script>