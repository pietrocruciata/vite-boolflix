<template>
  <div>
    <ul>
      <li>{{ film.titleOriginal }}</li>
      <li>{{ film.title }}</li>
      <li>{{ film.vote }}</li>
      <li :class="film.language" ><img :src="this.store.flags" alt=""></li>

    </ul>
  </div>
</template>

<script>
import store from '../store.js';
export default {
  data() {
    return {
      store,
     
    }
  },
  props: {
    film: {
      type: Object
    }
  },
  methods: {

    flags() {
      
      if (this.store.films.language === 'en') {
        this.store.flags = '/public/en.png'
      } 
      // return this.store.flags  
    }
  }

}
</script>

<style lang="scss" scoped>
.en {

  // background-image: url(https://www.squillanteuniformi.it/18075-medium_default/bandiera-in-polynautico-nazioni-150-x-225.jpg);

}

.it {
  // background: yellow;
}
</style>