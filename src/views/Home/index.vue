<template>
  <div class="cat">
    <h3 class="cat-text">🐱 imagens de gatinhos🐱 </h3>
    <button class="cat-button" @click="getCats">clique aqui</button>
    <img class="cat-img" :src="link" @load="onImgLoad"
    :style="[loading ? {'display': 'none'} : {'display': 'block'}]" />
    <div class="cat-spinner" v-if="loading">
      <i class="gg-spinner"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import fetchCatImg from '@/services/get-cat'

const loading = ref(false)
const link = ref('')

const getCats = async () => {
  loading.value = true
  const response = await fetchCatImg()
  link.value = response
}

const onImgLoad = () => {
  loading.value = false
}

onMounted(async () => {
  await getCats()
})
</script>

<style lang="scss" src="./styles.scss">
</style>
