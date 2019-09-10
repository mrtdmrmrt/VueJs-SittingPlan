
<template>
  <div class="container kat">
    <KatListesi 
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
<style scoped>
.kat {
   
      margin-top : 10px;
		  border-radius: 5px;
		  border: 1px solid #ededed;
		  margin-left: 10px;
      
    }
    .kat:hover{
      box-shadow: #666;
    }
</style>