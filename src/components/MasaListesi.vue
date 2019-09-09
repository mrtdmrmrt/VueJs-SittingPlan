<template>
    <div class="container">
        <h1 class="title">Kat {{katId}} İçin Masa Listesi</h1>
        <hr>
        
        <ul style="list-style-type:none;">
            
            <li  v-for="(table,index) in filteredArray({katId:katId}).masalar" :key="index">
                <router-link :to="{ name: 'sandalye', params: { katId: katId, masaId:table.id }}">{{table.name}}</router-link>
            </li>
            
        </ul>   
           
        
        <button @click="$emit('addFloorEvent')"  class="btn btn-outline-info">YENİ</button>
    </div>
</template>


<script>
import {dataMixin} from "../dataMixin"
export default {
    mixins : [dataMixin],
    data(){
        return {
            tableSittingPlanData: [],
            katId : parseInt(this.$route.params.katId)
        }
    },
    methods : {
        filteredArray(filter)
        {
          var filteredArray = this.tableSittingPlanData.filter(function(obj,ind)
          {
              return obj.id === filter.katId;
          });
          return (filteredArray.length >0)?filteredArray[0]:[];
        }
    },
    created() {
		this.getSittingPlanData()
			.then(response => {
					this.tableSittingPlanData = response.data;
			})
		} 
     
 
}
</script>


<style scoped>
.btn{
    margin-top: 10px;
    margin-left: 30%;
}
li{
    margin-top: 10px;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>