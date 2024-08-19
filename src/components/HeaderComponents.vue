<template>
    <div class="bg-black">
        <div class="container ">
            <!-- <img src="/public/img/netflix" alt="" class="logo-size"> -->
            <a href="">Home</a>
            <a href="">Film</a>
            <a href="">Serie tv</a>
            <a href="">Original</a>
            <a href="">Scelti per te</a>
            <div>
                <select name="categories" id="">
                    <option value="">categoria</option>
                    <option value="">commedia</option>
                    <option value="">azione</option>
                    <option value="">drammatico</option>
                    <option value="">thriller</option>
                    <option value="">horror</option>
                </select>
            </div>
            <div class="d-flex gap-20">
                <input type="text" v-model="this.store.query" @keyup.enter="boothElements()"
                    placeholder="Cerca un film o serie TV" class="p-5">
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