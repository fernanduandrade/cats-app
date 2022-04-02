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

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  justify-content: center;
  background-color: #333;
  height: 100vh;
}
</style>
