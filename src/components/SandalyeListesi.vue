<template>
    <div class="container">
      <!--  <h1 class="title">{{vuexDataGet[0].masalar[MasaID-1].name}} Sandalye Listesi </h1> -->
        <h1 class="title">{{vuexDataGet[vuexKatIdGet-1].masalar[vuexMasaIdGet-1].name}} Sandalye Listesi </h1>
        <hr>
        <!--<h1>Kat ID{{vuexIdGet}}</h1>
        <h1>MASA ID{{vuexMasaIdGet}}</h1>
        -->
      
        <ul style="list-style-type:none;">
            <!--masalar[vuexIdGet-1].sandalyeler-->
            <li  v-for="(sandalye,index) in vuexDataGet[vuexKatIdGet-1].masalar[vuexMasaIdGet-1].sandalyeler" :key="index">
                 <a href="#" @click="tik(sandalye.id)"  @click.prevent="$router.push(sandalye.id+'/kisi/')"  class="">{{sandalye.name}}</a>
            </li>
            <!--@click="tik(masa.id)"-->
        </ul>
        <button @click="$emit('addFloorEvent')"  class="btn btn-outline-info">YENİ</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tiklanan : null,
            MasaID : this.$route.params.id
      
        }
    },
    watch:{
        "$route"(to,from){
            this.MasaID =to.params.id
        }
    },
     methods : {
      tik(id){
        this.tiklanan = id
        this.$store.dispatch("setSandalyeId",this.tiklanan)
        
      }
    },
    props : {
        vuexDataGet :{
            required : true,
            type : Array
        },
        vuexKatIdGet:{
            type: Number,
            required : false
        },
        vuexMasaIdGet:{
            type: Number,
            required : false
        }
    },
    /*
    created(){
         this.$store.dispatch("setMasaId",this.MasaID)
    }
    *//*
     created(){
        var currentUrl = window.location.pathname;
        console.log(currentUrl);
    }
    */
    
}
</script>
<style scoped>
.btn{
    margin-top: 10px;
    margin-left: 30%;
}
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