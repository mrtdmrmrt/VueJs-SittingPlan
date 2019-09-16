<template>
  <div class="container">
    <FloorList 
    :vuexGetFloor="vuexGetFloor"
    @addFloorEvent="showAddContainer"/>

    <AddFloor 
    @hideAddContainerEvent ="showAdd = false"
    :class="{'show-add-container' : showAdd} "/>
  </div>
</template>

<script>
import FloorList from "../components/FloorList"
import AddFloor from "../components/Add/AddFloor"

export default {
  data(){
    return {
      showAdd : false
    }
  },
  //vuexKatGet vuex store'dan eklenen Kat ı çeker.
  computed: {
    vuexGetFloor(){
      return this.$store.getters.getAddedFloor
    }  
  },
  components : {
    FloorList,
    AddFloor
  },
  methods : {
     //showAddContainer Fonksiyonu yeni buttonuna tıklandığında KatEkle sayfasını görünür kılar.
     showAddContainer(){
      this.showAdd = true
     
    }

  }
  
}
</script>
