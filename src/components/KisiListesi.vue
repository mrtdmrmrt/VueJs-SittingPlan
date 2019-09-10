<template>
    <div class="container">
        <h1 class="title"> {{SittingPlanDataChair}} Sandalye {{sandalyeId}} de Oturan Kişi </h1>
        <hr>
        <ul style="list-style-type:none;">
        
            <li v-for="(person,index) in personsSittingPlanData" :key="index">
               
                <router-link :to="{ name: 'kisi', params: { katId: katId, masaId:masaId, sandalyeId:sandalyeId,kisiId:person.id}}">{{person.name}}</router-link>
            </li>
            
        </ul>
        <button @click="$emit('addFloorEvent')"  class="btn btn-outline-info">Güncelle</button>
        
    </div>
</template>

<script>
import {dataMixin} from "../dataMixin"
export default {
    mixins : [dataMixin],
    data(){
        return{
            katId : this.$route.params.katId,
            masaId : this.$route.params.masaId,
            sandalyeId : this.$route.params.sandalyeId,
           
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
               
                var katIndex = that.findWithAttr(katlar.data, 'id', parseInt(filter.katId));
                if(katIndex  !== -1)
                {
                    
                    var masaIndex = that.findWithAttr(katlar.data[katIndex].masalar, 'id', parseInt(filter.masaId));
                    that.SittingPlanDataChair=katlar.data[katIndex].masalar[masaIndex].name
                    if(masaIndex !== -1)
                    {
                        var sandalyeIndex = that.findWithAttr(katlar.data[katIndex].masalar[masaIndex].sandalyeler,'id',parseInt(filter.sandalyeId))
                       
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
        {
            
            this.filteredArray({katId:this.katId,masaId:this.masaId,sandalyeId:this.sandalyeId})
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