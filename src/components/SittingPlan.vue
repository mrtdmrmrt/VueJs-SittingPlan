<template>
    <div class="container">
        <ul style="list-style-type:none;" class="list-group">
            <li  v-for="(desk,index) in sittingPlan" :key="index">
                {{desk.Name}}
                
            </li>
            <li  v-for="(chair,index) in sittingPlan" :key="index">
                {{chair.Chairs}}
            </li>
        </ul>
    </div>
</template>
<script>
import {dataMixin} from "../dataMixin"
export default {
    mixins : [dataMixin],
    data(){
        return {
            sittingPlan : [],
            floorId : parseInt(this.$route.params.floorId),
        }
    },
    methods : {
        getSittinPlan(){
            return axios.get(this.baseURL+"/api/Floor/Get?floorid="+this.floorId)
        }
    },
    created(){
        this.getSittinPlan()
		.then(response => {
          this.sittingPlan = response.data;
          console.log(this.sittingPlan)
        })
    }
    
}
</script>