<template>
    <div class="container">
        <h1 class="title">{{SittingPlanDataTable.name}} Sandalye Listesi </h1> 
        <hr>

        
        <ul style="list-style-type:none;">
            <li v-for="(chair,index) in chairSittingPlanData" :key="index">
                <router-link :to="{ name: 'kisi', params: { katId: katId, masaId:masaId, sandalyeId: chair.id}}">{{chair.name}}</router-link>
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
            SittingPlanDataTable:[],
            chairSittingPlanData:[],
            katId : this.$route.params.katId,
            masaId : this.$route.params.masaId
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

    },created()
        {
            
            this.filteredArray({katId:this.katId,masaId:this.masaId})
            this.getSittingPlanData()
			.then(response => {
					this.SittingPlanData = response.data;
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