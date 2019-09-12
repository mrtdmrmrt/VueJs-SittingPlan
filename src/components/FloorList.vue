<template>
    <div class="container">
        <h1 class="title"> Kat Listesi </h1>
        <hr style="border: 2px solid orange;">
        <Alert v-if="floorSittingPlanData.length == 0 && vuexGetFloor == ''"/>
        <ul style="list-style-type:none;" class="list-group">
          <li v-for="(floor,index) in floorSittingPlanData" :key="index">
            
            <router-link class="list-group-item " :to="{ name: 'table', params: { floorId: floor.Id }}">{{floor.Name}}</router-link>

            <!--<router-link @click="tik(data.id)" class="" tag="a" to="/masa/"> {{data.name}}</router-link>-->
            <!--<a href="#"  @click="tik(data.id)" @click.prevent="$router.push({ name: 'masa', params: { katId: data.id } })"  class="">{{data.name}}</a>-->
            <!-- <a href="#"  @click="tik(data.id)" @click.prevent="$router.push('/masa/'+data.id)"  class="btn btn-outline-info btn-sm">{{data.name}}</a> -->

          </li>
        </ul>
        <ul style="list-style-type:none;" class="list-group">
          <li v-if="vuexGetFloor !== '' ">
            <router-link  vuexGetFloor class="list-group-item" :to="{ name: 'table', params: { floorId: floorSittingPlanData.Id }}">{{vuexGetFloor}}</router-link>
            <!--Ekle Butonuna tıkladıktan sonra bu sayfada gösterilir-->
          </li>
        </ul>
        <button @click="$emit('addFloorEvent')" class="btn orange open-pop-up">YENİ</button>
        
    </div>
</template>


<script>

import {dataMixin} from "../dataMixin"
import Alert from "./Alert"

export default {
   mixins : [dataMixin], //asenkron sorununu çözmek için mixin kullandık
  data(){
    return {
      floorSittingPlanData: [],
      floorId : this.$route.params.floorId //URL de ki veriyi çeker örn; /kat/1
    }
  },
   props : {
     //Yeni --> Ekle butanına tıklanınca eklenen veriyi props yardımıyla aldık
        vuexGetFloor:{
          required : false,
          type : String
        }
        
    },
    components :{
      Alert
    },
    //Mixin den veriyi çekmek için..
     created() {
			this.getSittingPlanFloorData()
			.then(response => {
          this.floorSittingPlanData = response.data;
          
          
			})
		} 
     
}
</script>


<style scoped>
.yeni{
  margin-top: 10px;
}
.list-group-item:hover{
    border:1px solid orange;
    box-shadow: 1px 1px 5px #ff9800;

}
.btn {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  margin-top : 20px;
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
.list-group li a{
  text-decoration: none;
  color : #333;
}

.list-group li{
    margin-top : 10px;
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