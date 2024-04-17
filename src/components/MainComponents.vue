<template>
    <CardComponents v-for="(film, i) in store.films" :key="film.id" :item="film" />
    <CardComponents v-for="(serie, i) in store.seriesTV" :key="serie.id" :serie="serie" />
    
</template>

<script>
import CardComponents from './CardComponents.vue';
import store from '../store.js'

export default {
    components: {
        CardComponents,
    },
    data() {
        return {
            store
        }

    }
}
</script>

<style lang="scss" scoped></style>