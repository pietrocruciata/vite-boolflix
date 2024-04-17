<template>
    <div class="bg-black">
        <div class="container ">
            <h1 class="c-red">BOOLFLIX</h1>
        <div class="d-flex gap-20">
            <input type="text" v-model="this.store.query" @keyup.enter="boothElements()"
            placeholder="Cerca un film o serie TV">
        <button @click="boothElements()">cerca</button> 
        </div>
        </div>
       
       
    </div>
     

    
</template>

<script>
import CardComponent from './CardComponent.vue'
import store from '../store.js'
import axios from 'axios'
export default {
    components: {
        CardComponent
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
                    const overview = element[i].overview

                    this.store.films.push({
                        title, titleOriginal, vote, language, image, overview
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
                        const title = element[i].name
                        const titleOriginal = element[i].original_name
                        const vote = element[i].vote_average
                        const language = element[i].original_language
                        const image = element[i].poster_path
                        const overview = element[i].overview


                        this.store.seriesTv.push({
                            title, titleOriginal, vote, language, image, overview
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

<style lang="scss" scoped>
@use '../style/general'

</style>