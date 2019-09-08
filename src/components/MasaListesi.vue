<template>
    <div class="container">
        <h1 class="title">Kat {{vuexKatIdGet}} İçin Masa Listesi</h1>
        <hr>
       <!-- {{vuexDataGet[0].masalar[2].name}}-->
        <ul style="list-style-type:none;">
           
            <li  v-for="(masa,index) in vuexDataGet[KatID-1].masalar" :key="index">
               <!-- <a>{{masa.name}}</a> -->
                <a href="#"   @click="tik(masa.id)"  @click.prevent="$router.push(masa.id +'/sandalye/')"  class="">{{masa.name}}</a>
                
            </li>
          
        </ul>   
                
                <!--<a>{{data[1].masalar[0].name}}</a>-->
               
           
               <!--   <router-link to="/sandalye" tag="a" class=""> {{masa.masalar[0].name}} </router-link> -->
               
               
           
        
        <button @click="$emit('addFloorEvent')"  class="btn btn-outline-info">YENİ</button>
    </div>
</template>


<script>
export default {
      data(){
        return {
        tiklanan : null,
        KatID : this.$route.params.id
        }
    },
     methods : {
      tik(id){
        this.tiklanan = id
        console.log("MasaListesi id",this.tiklanan);
        this.$store.dispatch("setMasaId",this.tiklanan)
        console.log("MasaId si gitti")
        //console.log("created gibi tıklanan dispatch edildi")
      }
    },
    watch:{
        "$route"(to,from){
            this.KatID =to.params.id
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
        }
     
    },
    /*
    created(){
         this.$store.dispatch("setId",this.KatID)
    }
    */
    /*
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