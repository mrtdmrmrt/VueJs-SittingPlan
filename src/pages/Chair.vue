<template>
    <div class="container">
      <ChairList 
      :vuexGetChair="vuexGetChair"
      @addFloorEvent="showAddContainer"/>

      <AddChair 
      @hideAddContainerEvent ="showAdd = false"
      :class="{'show-add-container' : showAdd} "/>
    </div>
</template>
<script>
import ChairList from "../components/ChairList"
import AddChair from "../components/Add/AddChair"

export default {
    data(){
      return {
        showAdd : false
      }
    },
    computed : {
      vuexGetChair(){
        return this.$store.getters.getAddedChair
      }
    }, 
    components :{
      ChairList,
      AddChair
    },
    methods : {
     showAddContainer(){
      this.showAdd = true
    }
  }
}
</script>