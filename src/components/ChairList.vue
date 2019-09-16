<template>
    <div class="container">
        <h1 class="title">{{SittingPlanDataTable}} Masası İçin Sandalye Listesi </h1> 
        <hr style="border: 2px solid orange;">
        <Alert v-if="filteredArray({tableId:tableId}) == false && vuexGetChair == '' " />
        <ul style="list-style-type:none;" class="list-group">
            <li  v-for="(chair,index) in filteredArray({tableId:tableId})" :key="index">
                <router-link v-if="filteredArray({tableId:tableId})[index].Person == null" class="list-group-item" :to="{ name: 'personlist', params: { tableId:tableId, chairId:chair.Id }}">
                    {{index+1}}.Sandalye {{filteredArray({tableId:tableId})[index].Person ? filteredArray({tableId:tableId})[index].Person.Name : 'Boş'}}
                </router-link>

                <router-link v-if="filteredArray({tableId:tableId})[index].Person != null" class="list-group-item" :to="{ name: 'person', params: { tableId:tableId, chairId:chair.Id }}">
                    {{index+1}}.Sandalye {{filteredArray({tableId:tableId})[index].Person ? filteredArray({tableId:tableId})[index].Person.Name : 'Boş'}}
                </router-link>
                
            </li>
        </ul>
        <ul style="list-style-type:none;" class="list-group">
            <li >
                <router-link v-if="vuexGetChair !== '' " class="list-group-item" :to="{ name: 'person', params: { tableId:tableId, chairId:chairId}}">{{vuexGetChair}}</router-link>
            </li>
        </ul>
        <button @click="$emit('addFloorEvent')"  class="btn orange">YENİ</button>
        <button @click="geri()" class="btn btn-outline-info"> Geri </button>
    </div>
</template>

<script>
import {dataMixin} from "../dataMixin"
import Alert from "./Alert"

export default {
    mixins : [dataMixin],
     props : {
        vuexGetChair:{
          required : false,
          type : String
        }
        
    },
    data(){
        return {
            SittingPlanData:[],
            SittingPlanDataTable:[],
            chairSittingPlanData:[],

            floorId : parseInt(this.$route.params.floorId),
            tableId : parseInt(this.$route.params.tableId),
            chairId : parseInt(this.$route.params.chairId)
        }
    },
     methods : {
        geri(){
          this.$router.push({name : "table"})
        },
        filteredArray(filter)
        {
          var filteredArray = this.SittingPlanData.filter(function(obj,ind)
          {
              
              return obj.DeskId === filter.tableId;
          });
          return (filteredArray.length >0)?filteredArray:[];
          
        }
        /*
        filteredArray(filter)
        {
            var that = this;
            that.getSittingPlanChairData()
            .then(function(katlar)
            {
                
                var katIndex = that.findWithAttr(katlar.data, 'Id', parseInt(filter.floorId));
               
                if(katIndex  !== -1)
                {
                 console.log("girdi...")
                    var masaIndex = that.findWithAttr(katlar.data[katIndex].masalar, 'id', parseInt(filter.tableId));
                    that.SittingPlanDataTable = katlar.data[katIndex].masalar[masaIndex]
                  
                    if(masaIndex !== -1)
                    {
                       
                       
                        that.chairSittingPlanData =  katlar.data[katIndex].masalar[masaIndex].sandalyeler;
                    }
                }

            },function(error)
            {
                console.log("Hata")
            })


        },
        findWithAttr(array, property, value) {
            for(var i = 0; i < array.length; i += 1) {
                if(array[i][property] === value) {
                    return i;
                }
            }
            return -1;
        }
        */

    },
     components :{
      Alert
    },
    created()
        {
            this.getSittingPlanChairData()
			    .then(response => {
                    this.SittingPlanData = response.data;
            })
            
            this.getSittingPlanDeskData()
			    .then(response => {
                    this.SittingPlanDataTable = response.data[this.tableId-1].Name;
                      
                })
            /*
            this.filteredArray({floorId:this.floorId,tableId:this.tableId})
            
            this.getSittingPlanChairData()
			.then(response => {
                    this.SittingPlanData = response.data;
                   
            })
            */
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