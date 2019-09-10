<template>
    <div class="container">
        <h1 class="title"> {{SittingPlanDataChair}} Sandalye {{chairId}} de Oturan Kişi </h1>
        <hr style="border: 2px solid orange;">
        <ul style="list-style-type:none;" class="list-group">
        
            <li class="list-group-item" v-for="(person,index) in personsSittingPlanData" :key="index">
                <router-link  :to="{ name: 'person', params: { floorId: floorId, tableId:tableId, chairId:chairId, personId:person.id}}">{{person.name}}</router-link>
            </li>
            
        </ul>
        <button @click="$emit('addFloorEvent')"  class="btn orange">Güncelle</button>
        
    </div>
</template>

<script>
import {dataMixin} from "../dataMixin"

export default {
    mixins : [dataMixin],
    data(){
        return{
            floorId : this.$route.params.floorId,
            tableId : this.$route.params.tableId,
            chairId : this.$route.params.chairId,
           
            personsSittingPlanData:[],
            SittingPlanDataChair :[]
        }
    },
     methods : {
        
        filteredArray(filter)
        {
            
            var that = this;
            that.getSittingPlanData()
            .then(function(katlar)
            {
               
                var katIndex = that.findWithAttr(katlar.data, 'id', parseInt(filter.floorId));
                if(katIndex  !== -1)
                {
                    
                    var masaIndex = that.findWithAttr(katlar.data[katIndex].masalar, 'id', parseInt(filter.tableId));
                    that.SittingPlanDataChair=katlar.data[katIndex].masalar[masaIndex].name
                    if(masaIndex !== -1)
                    {
                        var sandalyeIndex = that.findWithAttr(katlar.data[katIndex].masalar[masaIndex].sandalyeler,'id',parseInt(filter.chairId))
                       
                        if(masaIndex !== -1)
                        {
                            that.personsSittingPlanData =  katlar.data[katIndex].masalar[masaIndex].sandalyeler[sandalyeIndex].kisiler;
                        }

                        
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

    },
    created() 
    //filteredArray() fonsksiyonunu başta tetiklemek için vreated() methodun içine yazdık
        { 
            this.filteredArray({floorId:this.floorId,tableId:this.tableId,chairId:this.chairId})
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
.btn {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  margin-top : 10px;
  margin-left: 40%;
  border-radius: 25px;
}
.orange {
  border-color: #ff9800;
  color: orange;
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