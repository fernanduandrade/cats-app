<template>
  <div class="container">
    <Home />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from '@/views/Home/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home
  }
})
</script>

<style lang="scss" src="./css/main.scss">
</style>
