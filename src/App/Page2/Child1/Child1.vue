<template>
  <div>
    <div>Child1 content</div>

    <router-link to="/page2/child1/food">food</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Child1',
}
</script>