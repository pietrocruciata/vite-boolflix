<template>
  <HeaderComponents />
  <MainComponents />

</template>

<script>
import store from './store.js'
import MainComponents from './components/MainComponents.vue'
import HeaderComponents from './components/HeaderComponents.vue'



export default {
  components: {
    HeaderComponents,
    MainComponents

  },
  data: function () {
    return {
      store
    }

  },
 
  }

</script>

<style lang="scss" scoped>
@use '../style/general'
</style>