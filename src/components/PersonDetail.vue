<template>
    <div class="container">
        <h1 class="title">Sandalye {{chairId}} de Oturan Kişi </h1>
        <hr style="border: 2px solid orange;">
        <h1>Burası person DETAİL</h1>
        <Alert v-if="filteredArray({chairId:chairId}) == false"/>
        <div class="row">
             <div class="col-md-9">
                <ul style="list-style-type:none;" class="list-group">
           
        <!--
            <li class="list-group-item" v-for="(person,index) in personsSittingPlanData" :key="index">
                <router-link  :to="{ name: 'person', params: { floorId: floorId, tableId:tableId, chairId:chairId, personId:person.id}}">{{person.name}}</router-link>
            </li>
            -->
                    <li  v-for="(chair,index) in filteredArray({chairId:chairId})" :key="index">
                        <router-link class="list-group-item" :to="{ name: 'person', params: { tableId:tableId, chairId:chair.Id }}">
                            {{chair.Person.Name}}
                        </router-link>
                
                    </li>
                </ul>
            </div>
            <div class="col-md-3">
                <button class="btn btn-sm btn-outline-danger flex-shrink-1">X</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                 <button class="btn danger">Kaldır</button>
            </div>
        </div>
    </div>
</template>

<script>
import {dataMixin} from "../dataMixin"
import Alert from "./Alert"

export default {
    mixins : [dataMixin],
    data(){
        return{
            floorId : parseInt(this.$route.params.floorId),
            tableId : parseInt(this.$route.params.tableId),
            chairId : parseInt(this.$route.params.chairId),
           
            personsSittingPlanData:[],
            SittingPlanData :[]
        }
    },
     methods : {
         filteredArray(filter)
        {
          var filteredArray = this.SittingPlanData.filter(function(obj,ind)
          {
              return obj.Id === filter.chairId;
          });
          return (filteredArray.length >0)?filteredArray:[];
        }


    },
     components :{
      Alert
    },
    created() {
        this.getSittingPlanChairData()
			    .then(response => {
                    this.SittingPlanData = response.data;
         
			})
    }
   
    
}
</script>

<style scoped>
.list-group-item:hover{
    border:1px solid orange;
    box-shadow: 1px 1px 5px #ff9800;
    cursor: pointer;

}
.list-group li a{
  text-decoration: none;
  color : #333;
}
.col-md-12 .danger{
    background-color: white;
    color : red;
    margin-left: 40%;
    margin-top: 10px;
    border-color: red;
}
.col-md-12 .danger:hover{
    color:white;
    background-color: red;
    
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