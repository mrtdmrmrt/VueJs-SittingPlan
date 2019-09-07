<template>
    <div class="container">
       <MasaListesi 
       :vuexDataGet="vuexDataGet"
       :vuexIdGet="vuexIdGet"
       @addFloorEvent="showAddContainer"/>
       <MasaEkle 
        @hideAddContainerEvent ="showAdd = false"
        :class="{'show-add-container' : showAdd} "/>
    </div>
</template>
<script>
import MasaListesi from "../components/MasaListesi"
import MasaEkle from "../components/Ekle/MasaEkle"
export default {
  data(){
    return {
      showAdd : false,
      tiklanan: null
    
    }
  },
  computed: {
    vuexDataGet(){
      return this.$store.getters.getData
    },
    vuexIdGet(){
      console.log("vuexIdGet istek yapıldı")
      return this.$store.getters.getKatTiklananId
    }
      
  },
    components :{
      MasaListesi,
      MasaEkle
    },
    methods : {
      showAddContainer(){
        this.showAdd = true
      },
      /*
      tik(id){
        this.tiklanan = id
        console.log(this.tiklanan);
      }
      */
    
     
    }
  
}
</script>
<style scoped>

</style>