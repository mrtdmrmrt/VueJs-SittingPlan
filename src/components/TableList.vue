<template>
    <div class="container">
        <h1 class="title">{{filteredFloorName({floorId:floorId})}} Katı İçin Masa Listesi</h1>
        <hr style="border: 2px solid orange;">
        <Alert v-if="filteredArray({floorId:floorId}) == false && vuexGetTable == ''"/>
        <ul style="list-style-type:none;" class="list-group">
          <li  v-for="(table,index) in filteredArray({floorId:floorId})" :key="index">
            <router-link class="list-group-item" :to="{ name: 'chair', params: { floorId: floorId, tableId:table.Id }}">{{table.Name}}</router-link>
          </li>
        </ul>
        <ul style="list-style-type:none;" class="list-group">
          <li >
            <router-link v-if="vuexGetTable !== ''" class="list-group-item" :to="{ name: 'chair', params: { floorId: floorId,tableId:tableId }}">{{vuexGetTable}}</router-link>
          </li>
        </ul>
        <button @click="$emit('addFloorEvent')"  class="btn orange">YENİ</button>
        <button @click="geri()" class="btn btn-outline-info">Geri</button>
    </div>
</template>

<script>
import Alert from "./Alert"
import {dataMixin} from "../dataMixin"

export default {
    mixins : [dataMixin],
    
     props : {
        vuexGetTable:{
          required : false,
          type : String
        }
    },
    data(){
        return {
            floorSittingPlanData:[],
            tableSittingPlanData: [],
            floorId : parseInt(this.$route.params.floorId),
            tableId : parseInt(this.$route.params.tableId)
        }
    },
    methods : {
        geri(){
          this.$router.push("/")
        },
        filteredArray(filter)
        {
          var filteredArray = this.tableSittingPlanData.filter(function(obj,ind)
          {
            return obj.FloorId === filter.floorId;
          });
          return (filteredArray.length >0)?filteredArray:[];
        },
         filteredFloorName(filter)
        {
          var filteredFloorName = this.floorSittingPlanData.filter(function(obj,ind)
          {
            return obj.Id === filter.floorId;
          });
          return (filteredFloorName.length >0)?filteredFloorName[0].Name:[];
        }
    },
    components :{
      Alert
    },
    created() {
		  this.getSittingPlanDeskData()
			.then(response => {
          this.tableSittingPlanData = response.data;
      })
      this.getSittingPlanFloorData()
			.then(response => {
          this.floorSittingPlanData = response.data;
          
          
			})
		} 
     
 
}
</script>


<style scoped>
.list-group-item:hover{
    border:1px solid orange;
    box-shadow: 1px 1px 5px #ff9800;

}
.list-group li a{
  text-decoration: none;
  color : #333;
}
.btn {
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 25px;
}
.btn-outline-info{
  margin-right: 70%;
  margin-top: 20px;
}
.orange {
  border-color: #ff9800;
  color: orange;
  margin-top : 10px;
  margin-left: 40%;
}

.orange:hover {
  background: #ff9800;
  color: white;
}
li{
    margin-top: 10px;
}
.title {
   font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 100;
  font-size: 35px;
  color: #35495e;
  letter-spacing: 1px;
  margin-top:20px;
}
</style>