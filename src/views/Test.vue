<template>
        <button @click="sendAxios">
            Cliquez ici
        </button>
    
</template>

<script>
export default {
    name:"Test",
    methods:{
        sendAxios(){
            this.$axios.get('http://127.0.0.1:8000/api/communes')
                .then( res => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
}
</script>