<template>
    <div>
        <input type="text" >
        <button @click="elementFilm()">cerca</button>
    </div>
</template>

<script>
import CardComponents from './CardComponents.vue'
import store  from '../store.js'
import axios from 'axios'
export default {
    components: {
        CardComponents
    },
    data() {
        return {
            store:store,
          
        }
    },


    methods: {
        elementFilm() {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    apiKey: this.store.API_KEY,
                    query: this.store.query,
                }
            }).then((res) => {
                const data = res.data.results
                for (let i = 0; i < data.length; i++) {
                    
                   
                }
               
            })
        }

    }
}
</script>

<style lang="scss" scoped></style>