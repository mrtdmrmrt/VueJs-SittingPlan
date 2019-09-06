<template>
    <div class="container">
        <h1 class="title"> Kat Listesi </h1>
        <hr>
        <ul style="list-style-type:none;">
          <li v-for="(data,index) in vuexDataGet" :key="index">
            <!--<router-link @click="tik(data.id)" class="" tag="a" to="/masa/"> {{data.name}}</router-link>-->
           <a href="#"  @click="tik(data.id)" @click.prevent="$router.push('/masa/')"  class="">{{data.name}}</a>

           <!-- <a href="#"  @click="tik(data.id)" @click.prevent="$router.push('/masa/'+data.id)"  class="btn btn-outline-info btn-sm">{{data.name}}</a> -->
          </li>
            
          
        </ul>
        <button @click="$emit('addFloorEvent')" class="btn btn-outline-info">YENİ</button>


        
    </div>
</template>


<script>
export default {
  data(){
    return {
      tiklanan : null
    }
  },
   props : {
        vuexDataGet : {
            required : true,
            type : Array
        }
        
    },
    methods : {
      tik(id){
        this.tiklanan = id
        console.log(this.tiklanan);
        this.$store.dispatch("setId",this.tiklanan)
        console.log("created gibi tıklanan dispatch edildi")
      }
    }
   
    
}
</script>


<style>
.btn {
    margin-top : 10px;
    margin-left: 40%;
}

li{
    margin-top : 10px;
}
.title {
  font-family : 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>