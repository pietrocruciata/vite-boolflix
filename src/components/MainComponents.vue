<template>
    <div class="container">
        <div class="d-flex">
            <CardComponent v-for="(film, i) in store.films" :key="film.id" :item="film" />
            <CardComponent v-for="(serie, i) in store.seriesTv" :key="serie.id" :item="serie" />
        </div>
    </div>



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

<style lang="scss" scoped>
@use '../style/general'
</style>