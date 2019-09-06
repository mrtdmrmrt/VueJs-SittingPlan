
<template>
  <div class="container">
    <KatListesi 
    :vuexDataGet="vuexDataGet"
    
    @addFloorEvent="showAddContainer"/>

    <KatEkle 
    @hideAddContainerEvent ="showAdd = false"
    :class="{'show-add-container' : showAdd} "/>
    
  </div>

</template>
<script>
import KatListesi from "../components/KatListesi"
import KatEkle from "../components/Ekle/KatEkle"

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
      return this.$store.getters.getTiklananId
    }
      
  },
  components : {
    KatListesi,
    KatEkle
  },
  methods : {
     showAddContainer(){
      this.showAdd = true
     
    }

  }
  
}
</script>