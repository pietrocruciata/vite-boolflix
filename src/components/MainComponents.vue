<template>
    <CardComponents v-for="(film, i) in store.films" :key="i" :film="film" />
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