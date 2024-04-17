import { reactive } from 'vue'

const store = reactive({
    seriesTv:[],
    films: [],
    API_KEY:'9a5374f66b9b47c90685b567a1640379',
    query:''
});

export default store