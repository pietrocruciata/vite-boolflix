<template>
  <div>
    <ul>
      <li>
        <h4>{{ item.titleOriginal }}</h4>
        <h4>{{ item.title }}</h4>
        <h4>{{ item.vote }}</h4>
        <img :src="` /img/${item.language}.png `" alt="" class="image-size">
        <img :src="`https://image.tmdb.org/t/p/w342/${item.image}`" alt="">
        <p id="rating">
          <font-awesome-icon v-for="star in parseInt(item.vote / 2)" :icon="['fas', 'star']" />
          
          <font-awesome-icon v-for="star in (5 - parseInt(item.vote / 2))" :icon="['far', 'star']" /> 
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
    }

  },
  computed: {
   
  },
  mounted(){
   
  },
  methods:{
    

  }


}
</script>

<style lang="scss" scoped>
.image-size {
  width: 40px;
}
</style>