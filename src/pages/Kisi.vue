<template>
    <div class="container">
      <KisiListesi 
       @addFloorEvent="showAddContainer"/>
       <KisiEkle 
        @hideAddContainerEvent ="showAdd = false"
        :class="{'show-add-container' : showAdd} "/>
    </div>
</template>
<script>
import KisiListesi from "../components/KisiListesi"
import KisiEkle from "../components/Ekle/KisiEkle"
export default {
    components : {
        KisiListesi,
        KisiEkle
    },
    data(){
        return {
            showAdd : false
        
        
        }
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