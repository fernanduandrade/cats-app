<template>
  <div class="cat">
    <h3 class="cat-text">gerador de gatinhos</h3>
    <button class="cat-button" @click="getCats">próximo</button>
    <div class="cat-spinner" v-if="request.load">
      <i class="gg-spinner"></i>
    </div>
    <img v-else class="cat-img" :src="cat.imgUrl">
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import getCat from '@/services/get-cat'

export default defineComponent({
  name: 'Home',
  setup () {
    const request = reactive({
      load: false
    })
    const cat = reactive({
      imgUrl: 'https://s1.1zoom.me/big0/378/Cats_Kittens_Glance_White_background_590695_1280x720.jpg'
    })

    const getCats = async () => {
      request.load = true
      cat.imgUrl = await getCat()
      request.load = false
    }

    return { getCats, cat, request }
  }
})

</script>

<style lang="scss" scoped>
@import './sass/_base.scss';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
</style>
