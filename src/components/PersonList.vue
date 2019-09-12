<template>
    <div class="container">
        <h1 class="title">Personel Ekle</h1>
        <hr style="border: 2px solid orange;">
        <div class="dropdown">
            <!--
                <button type="button" class="btn btn-outline-warning dropdown-toggle" data-toggle="dropdown">
                    Personel Listesi
                </button>
            -->
            <input type="text" v-model="searchText" placeholder="Personel Listesi" data-toggle="dropdown"/>
            
            <div class="dropdown-menu">
                <a v-for="(data,index) in filtered" :key="index"  class="dropdown-item" href="#">{{data.name}}</a>
                
                
            </div>
        </div>
        <button class="btn orange">Oturt</button>
    </div>
</template>

<script>
import {dataMixin} from "../dataMixin"

export default {
    data (){
        return{
            searchText : '',
            deneme : [
                {id : "1", name : "Mert"},
                {id : "2", name : "Hasan"},
                {id : "3", name : "Mehmet"},
                {id : "4", name : "Ahmet"},
                {id : "5", name : "Hasman"},
                {id : "6", name : "Ahsen"},
            ],
            deneme2 : ["Mert","Hasan","Kadir","Mehmet","Memoli"]


        }
    },
    filters : {
        toLowercase(value){
            return value.toLowerCase();
        }
    },
    computed : {
        filtered(){
            return this.deneme.filter((element) =>{//element dolaştığı elemanı verir
                return element.name.match(this.searchText);
            })
        }
    }
}
   
</script>


<style scoped>
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
.orange{
    background-color: orange;
    color : white;
    margin-top: 40%;
    margin-left : 70%;
}
.orange:hover{
    color:orange;
    background-color: white;
    border-color: orange;
    cursor : pointer;
    
}
</style>
