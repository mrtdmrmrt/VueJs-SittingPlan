<template>
    <div class="container">
      <SandalyeListesi 
      :vuexDataGet="vuexDataGet"
      :vuexIdGet="vuexIdGet"
      :vuexMasaIdGet="vuexMasaIdGet"
      @addFloorEvent="showAddContainer"/>

      <SandalyeEkle 
      @hideAddContainerEvent ="showAdd = false"
      :class="{'show-add-container' : showAdd} "/>
    </div>
</template>
<script>
import SandalyeListesi from "../components/SandalyeListesi"
import SandalyeEkle from "../components/Ekle/SandalyeEkle"
export default {
    data(){
      return {
        showAdd : false,
    
      }
    },
     computed: {
      vuexDataGet(){
        return this.$store.getters.getData
      },
      vuexIdGet(){
      console.log("vuexIdGet istek yapıldı")
      return this.$store.getters.getKatTiklananId
      },
      vuexMasaIdGet(){
        
        return this.$store.getters.getMasaTiklananId
      }
      
    },
    components :{
      SandalyeListesi,
      SandalyeEkle
    },
    methods : {
     showAddContainer(){
      this.showAdd = true
     
    }
  }
}
</script>
<style scoped>

</style>