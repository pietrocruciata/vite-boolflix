<template>
    <div>
        <input type="text" v-model="this.store.query" @keyup.enter="boothElements()"
            placeholder="Cerca un film o serie TV">
        <button @click="boothElements()">cerca</button>

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


                }
            }).then((res) => {
                this.store.films = []
                console.log(res.data);
                for (let i = 0; i < res.data.results.length; i++) {
                    const element = res.data.results
                    const title = element[i].title
                    const titleOriginal = element[i].original_title
                    const vote = element[i].vote_average
                    const language = element[i].original_language
                    const image = element[i].poster_path

                    this.store.films.push({
                        title, titleOriginal, vote, language, image
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

                    }
                }).then((res) => {
                    this.store.seriesTv = []
                    for (let i = 0; i < res.data.results.length; i++) {
                        const element = res.data.results
                        const title = element[i].title
                        const titleOriginal = element[i].original_title
                        const vote = element[i].vote_average
                        const language = element[i].original_language
                        const image = element[i].poster_path


                        this.store.seriesTv.push({
                            title, titleOriginal, vote, language, image
                        })

                    }
                })
        },

        boothElements() {
            this.elementsFilm()
            this.elementsTv()
        }

    },

    created() {
        console.log(this.store.films);
    }

}


</script>

<style lang="scss" scoped></style>