<template>
    <div class="container">
        <h1 class="title"> {{vuexDataGet[vuexIdGet-1].masalar[vuexMasaIdGet-1].name}} Sandalye {{vuexSandalyeIdGet}} de Oturan Kişi </h1>
        <hr>
        <ul style="list-style-type:none;">
        
            <li  v-for="(kisi,index) in vuexDataGet[vuexIdGet-1].masalar[vuexMasaIdGet-1].sandalyeler[vuexSandalyeIdGet-1].kisiler" :key="index">
                 <a href="#"   @click.prevent="$router.push('/kisi/')"  class="">{{kisi.name}}</a>
            </li>
            
        </ul>
        
    </div>
</template>
<script>
export default {
  props : {
        vuexDataGet :{
            required : true,
            type : Array
        },
        vuexIdGet:{
            type: Number,
            required : true
        },
        vuexMasaIdGet:{
            type : Number,
            required: true
        },
        vuexSandalyeIdGet:{
            type : Number,
            required: true
        },

    }
    
}
</script>

<style scoped>

li{
    margin-top: 10px;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>