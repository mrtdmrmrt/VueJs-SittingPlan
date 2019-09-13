<template>
    <AddWorker 
    @hideAddContainerEvent ="showAdd = false"
    :class="{'show-add-container' : showAdd} "
    />
</template>

<script>
import AddWorker from "../components/Add/AddWorker"
export default {
    data(){
      return {
        showAdd : false
      }
    },
    components :{
        AddWorker
    },
    methods : {
        showAddContainer(){
            this.showAdd = true
        }
    }
}
</script>