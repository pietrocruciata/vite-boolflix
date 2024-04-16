<template>
    <div>
        <input type="text" v-model="this.store.query">
        <button @click="elementsFilm()">cerca</button>

    </div>
</template>

<script>
import CardComponents from './CardComponents.vue'
import store from '../store.js'
import axios from 'axios'
export default {
    components: {
        CardComponents
    },
    data() {
        return {
            store: store,

        }
    },


    methods: {
        elementsFilm() {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: this.store.API_KEY,
                    query: this.store.query,
                    language: 'it-IT',

                }
            }).then((res) => {

                console.log(res.data);
                for (let i = 0; i < res.data.results.length; i++) {
                    const element = res.data.results
                    const title = element[i].title
                    const titleOriginal = element[i].original_title
                    const vote = element[i].vote_average
                    const language = element[i].original_language

                    this.store.films.push({
                        title, titleOriginal, vote, language
                    })
                }
            })
        },

        elementsTv() {
            axios
                .get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: this.store.API_KEY,
                        query: this.store.query,
                        language: 'it-IT',
                    }
                }).then((res) => {

                    console.log(res.data);
                    for (let i = 0; i < res.data.results.length; i++) {
                        const element = res.data.results
                        const title = element[i].title
                        const titleOriginal = element[i].original_title
                        const vote = element[i].vote_average
                        const language = element[i].original_language

                        this.store.seriesTv.push({
                            title, titleOriginal, vote, language
                        })
                    }
                })
        },

    },

    created() {
    console.log(this.store.films);
}

}


</script>

<style lang="scss" scoped></style>