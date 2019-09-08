<template>
    <div class="container">
        <h1 class="title"> {{vuexDataGet[vuexKatIdGet-1].masalar[vuexMasaIdGet-1].name}} Sandalye {{vuexSandalyeIdGet}} de Oturan Kişi </h1>
        <hr>
        <ul style="list-style-type:none;">
        
            <li  v-for="(kisi,index) in vuexDataGet[vuexKatIdGet-1].masalar[vuexMasaIdGet-1].sandalyeler[vuexSandalyeIdGet-1].kisiler" :key="index">
                 <a href="#" class="">{{kisi.name}}</a>
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
        vuexKatIdGet:{
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

    },
    created(){
       
        var currentUrl = window.location.pathname;
        console.log(currentUrl);
        var diziURL = []
        diziURL.push(currentUrl.split("/"))
        console.log(diziURL)
    
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