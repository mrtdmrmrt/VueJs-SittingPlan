<template>
    <div class="container">
      <PersonList 
       @addFloorEvent="showAddContainer"/>
       <AddPerson 
        @hideAddContainerEvent ="showAdd = false"
        :class="{'show-add-container' : showAdd} "/>
    </div>
</template>

<script>
import PersonList from "../components/PersonList"
import AddPerson from "../components/Add/AddPerson"

export default {
    components : {
        PersonList,
        AddPerson
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
