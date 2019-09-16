<template>
    <div class="container">
       <TableList 
       :vuexGetTable="vuexGetTable"
       @addFloorEvent="showAddContainer"/>
       <AddTable 
        @hideAddContainerEvent ="showAdd = false"
        :class="{'show-add-container' : showAdd} "/>
    </div>
</template>

<script>
import TableList from "../components/TableList"
import AddTable from "../components/Add/AddTable"

export default {
  data(){
    return {
      showAdd : false
    }
  
  },
    computed : {
      vuexGetTable(){
        return this.$store.getters.getAddedTable
    }
  },
    components :{
      TableList,
      AddTable
    },
    methods : {
      showAddContainer(){
        this.showAdd = true
      }
    
    }
  
}
</script>
