<template>
    <div class="container">
        <h1 class="title">{{vuexDataGet[vuexIdGet-1].masalar[vuexMasaIdGet-1].name}} Sandalye Listesi </h1>
        <hr>
        <!--<h1>Kat ID{{vuexIdGet}}</h1>
        <h1>MASA ID{{vuexMasaIdGet}}</h1>
        -->
        <ul style="list-style-type:none;">
            <!--masalar[vuexIdGet-1].sandalyeler-->
            <li  v-for="(sandalye,index) in vuexDataGet[vuexIdGet-1].masalar[vuexMasaIdGet-1].sandalyeler" :key="index">
                 <a href="#" @click="tik(sandalye.id)"  @click.prevent="$router.push('/kisi/')"  class="">{{sandalye.name}}</a>
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
         tiklanan : null
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
        vuexIdGet:{
            type: Number,
            required : true
        },
        vuexMasaIdGet:{
            type : Number,
            required: true
        }
    }
    
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