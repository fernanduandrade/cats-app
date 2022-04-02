<template>
  <div class="cat">
    <h3 class="cat-text">🐱 imagens de gatinhos🐱 </h3>
    <button class="cat-button" @click="getCats">clique aqui</button>
    <div class="cat-spinner" v-if="load">
      <i class="gg-spinner"></i>
    </div>
    <img v-else class="cat-img" :src="link">
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import getCat from '@/services/get-cat'

const load = ref(false)
const link = ref('')

const getCats = async () => {
  load.value = true
  const response = await getCat()
  link.value = response
  load.value = false
}

onMounted(() => {
  getCats()
})
</script>

<style lang="scss" scoped>
@import './sass/_base.scss';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
</style>
