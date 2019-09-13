<template>
    <div class="container">
        <h1 class="title">Personel Ekle</h1>
        <hr style="border: 2px solid orange;">
        <div class="dropdown">
                <button type="button" class="btn btn-outline-warning dropdown-toggle" data-toggle="dropdown">
                   {{name ? name : 'Lütfen Personel Seçiniz'}}
                </button>
            
           
            
            
            <div class="dropdown-menu">
                
                <input type="text" v-model="searchText" placeholder="Lütfen İsim giriniz.."  class="dropdown-item"/>
                <a v-for="(data,index) in filtered" :key="index"  @click="yaz(data.Id,data.Name)" class="dropdown-item" href="#">{{data.Id}}. {{data.Name}} {{data.Surname}}</a> 
            </div>
           
            
        </div>
        <button @click="oturt()" class="btn orange">Oturt</button>
    </div>
</template>

<script>
import {dataMixin} from "../dataMixin"

export default {
     mixins : [dataMixin],
    data (){
        return{
            SittingPlanPersonGetNotSeat : [],
            id : '',
            name :'',
            searchText : '',
            floorId : parseInt(this.$route.params.floorId),
            tableId : parseInt(this.$route.params.tableId),
            chairId : parseInt(this.$route.params.chairId)


        }
    },
    /*
    filters : {
        toLowercase(value){
            return value.toLowerCase();
            console.log(value)
        }
    },
    */
    computed : {
        filtered(){
            return this.SittingPlanPersonGetNotSeat.filter((element) =>{
                return element.Name.match(this.searchText);
            })
        },
        toLowercase(value){
            return value.toLowerCase();
        },
    },
    methods : {
       
        yaz(id,name){
            this.id=id;
            this.name = name;
            
        },
        oturt(){
            alert(this.id +" " + this.name);
            this.searchText ='';
            this.name = '';
            axios.post(this.baseURL+"/api/Chair/Seat",{ 
                    chairid : this.chairId,
                    personid : this.id
                })
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });
        }
    },
    created() {
			this.getSittingPlanPersonGetNotSeat()
			    .then(response => {
                    this.SittingPlanPersonGetNotSeat = response.data;
          
          
			})
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
    margin-top: 30%;
    margin-left : 70%;
}
.orange:hover{
    color:orange;
    background-color: white;
    border-color: orange;
    cursor : pointer;
    
}
</style>
