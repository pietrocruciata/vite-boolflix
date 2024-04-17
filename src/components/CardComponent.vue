<template>
  <div >
    <div class=" card position-relative">

      <img class=" img-first " :src="`https://image.tmdb.org/t/p/w342/${item.image}`" alt="">

    </div>

    <div class="  d-none card-description">
      <h4>Titolo originale: {{ item.titleOriginal }}</h4>
      <h4>Titolo: {{ item.title }}</h4>
      <img :src="` /img/${item.language}.png `" alt="" class="image-size">
      <font-awesome-icon v-for="star in parseInt(item.vote / 2)" :icon="['fas', 'star']" />
      <font-awesome-icon v-for="star in (5 - parseInt(item.vote / 2))" :icon="['far', 'star']" />
      <div>Descrizione: {{ item.overview }}</div>
    </div>

  </div>
</template>

<script>
import store from '../store.js';
export default {
  data() {
    return {
      store,
      flags: '',

    }
  },
  props: {
    item: {
      type: Object
    }

  },
  computed: {

  },
  mounted() {
    console.log(this.store.films);
  },
  methods: {


  }


}
</script>

<style lang="scss" scoped>
@use '../style/general'
</style>