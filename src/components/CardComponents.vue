<template>
  <div>
    <ul>
      <li>
        <h4>{{ item.titleOriginal }}</h4>
        <h4>{{ item.title }}</h4>
        <h4>{{ item.vote }}</h4>
        <img :src="` /img/${item.language}.png `" alt="" class="image-size">
        <p>
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['far', 'star']" />
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
      flags:'',
    }
  },
  props: {
    item: {
      type: Object
    }
  },
 

}
</script>

<style lang="scss" scoped>
.image-size{
  width: 40px;
}
</style>