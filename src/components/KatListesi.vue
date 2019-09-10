<template>
    <div class="container">
        <h1 class="title"> Kat Listesi </h1>
        <hr>
        
        <ul style="list-style-type:none;">
          <li v-for="(floor,index) in floorSittingPlanData" :key="index">
            <!--<router-link @click="tik(data.id)" class="" tag="a" to="/masa/"> {{data.name}}</router-link>-->
            <!--<a href="#"  @click="tik(data.id)" @click.prevent="$router.push({ name: 'masa', params: { katId: data.id } })"  class="">{{data.name}}</a>-->
            <!-- <a href="#"  @click="tik(data.id)" @click.prevent="$router.push('/masa/'+data.id)"  class="btn btn-outline-info btn-sm">{{data.name}}</a> -->

            <router-link :to="{ name: 'masa', params: { katId: floor.id }}">{{floor.name}}</router-link>
          
          </li>
            
        <li><a href="#">{{vuexKatGet}}</a></li>  <!--Ekle Butonuna tıkladıktan sonra buraya eklenen gelir-->
        </ul>
        <button @click="$emit('addFloorEvent')" class="btn btn-outline-info">YENİ</button> 


        
    </div>
</template>


<script>
import {dataMixin} from "../dataMixin"
export default {
   mixins : [dataMixin],
  data(){
    return {
      floorSittingPlanData: [],
      katId : this.$route.params.katId
    }
  },
   props : {
       
        vuexKatGet:{
          required : true,
          type : String
        }
        
    },
     created() {
			this.getSittingPlanData()
			.then(response => {
					this.floorSittingPlanData = response.data;
			})
		} 
     
}
</script>


<style>

.btn {
    margin-top : 10px;
    margin-left: 40%;
}

li{
    margin-top : 10px;
}
.title {
  font-family : 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>