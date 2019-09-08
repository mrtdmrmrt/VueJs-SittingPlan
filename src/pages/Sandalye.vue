<template>
    <div class="container">
      <SandalyeListesi 
      :vuexDataGet="vuexDataGet"
      :vuexKatIdGet="vuexKatIdGet"
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
        MasaID : this.$route.params.id
      }
    },
     computed: {
      vuexDataGet(){
        return this.$store.getters.getData
      },
      vuexKatIdGet(){
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