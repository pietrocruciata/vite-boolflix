<template>
  <div>
    <h2>FILM</h2>
    <ul>
      <li>
        <h4>{{ item.titleOriginal }}</h4>
        <h4>{{ item.title }}</h4>
        <h4>{{ item.vote }}</h4>
        <img :src="` /img/${item.language}.png `" alt="" class="image-size">
        <img :src="`https://image.tmdb.org/t/p/w342/${item.image}`" alt="">
        <p id="rating">
          <!-- <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['far', 'star']" /> -->
        </p>
      </li>
    </ul>
    <h2>SERIE TV</h2>
    <ul>
      <li>
        <h4>{{ serie.titleOriginal }}</h4>
        <h4>{{ serie.title }}</h4>
        <h4>{{ serie.vote }}</h4>
        <img :src="` /img/${item.language}.png `" alt="" class="image-size">
        <img :src="`https://image.tmdb.org/t/p/w342/${item.image}`" alt="">
        <p id="rating">
          <!-- <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['far', 'star']" /> -->
        </p>
      </li>
    </ul>
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
    },
    serie: {
      type: Object
    }
  },


  computed: {
    getStars(){
      let rating = document.getElementById('rating')
      let ratingVote = this.item.vote / 2
      for (let i = 1; i <= ratingVote; i++) {
        rating.innerHTML = `<font-awesome-icon :icon="['fas', 'star']" />`
      }
    },

  },
  mounted(){
    console.log(this.store.seriestv);
  }


}
</script>

<style lang="scss" scoped>
.image-size {
  width: 40px;
}
</style>