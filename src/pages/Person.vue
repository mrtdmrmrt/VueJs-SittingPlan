<template>
    <div>
      <PersonDetail
       @addFloorEvent="showAddContainer"/>
       <AddPerson 
        @hideAddContainerEvent ="showAdd = false"
        :class="{'show-add-container' : showAdd} "/>
    </div>
</template>

<script>
import PersonList from "../components/PersonList"
import PersonDetail from "../components/PersonDetail"
import AddPerson from "../components/Add/AddPerson"

export default {
    components : {
        PersonList,
        PersonDetail,
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
