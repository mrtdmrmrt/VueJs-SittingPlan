
<template>
  <div class="container">
    <KatListesi 
    :vuexDataGet="vuexDataGet"
    :vuexKatGet="vuexKatGet"
    
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
    vuexKatGet(){
      return this.$store.getters.getEklenenKat
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