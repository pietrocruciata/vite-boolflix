<template>
    <h2>FILM</h2>
    <CardComponent v-for="(film, i) in store.films" :key="film.id" :item="film" />
    <h2>SERIE TV</h2>
    <CardComponent v-for="(serie, i) in store.seriesTv" :key="serie.id" :item="serie" />
    
</template>

<script>
import CardComponent from './CardComponent.vue';
import store from '../store.js'

export default {
    components: {
        CardComponent,
    },
    data() {
        return {
            store
        }

    }
}
</script>

<style lang="scss" scoped></style>