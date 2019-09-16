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
                <a v-for="(data,index) in filtered" :key="index"  @click="yaz(data.Id,data.Name)" class="dropdown-item">{{data.Id}}. {{data.Name}} {{data.Surname}}</a> 
            </div>
        </div>
        <button @click="oturt()" class="btn orange">Oturt</button>
        <button @click="geri()" class="btn btn-outline-info"> Geri </button>
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
       geri(){
          this.$router.push({name : "chair"})
        },
        yaz(id,name){
            this.id=id;
            this.name = name;
            
        },
        oturt(){
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
                alert("İşlem Başarılı")
                this.$router.push({name : "chair"})
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
.dropdown-menu a{
    cursor:pointer;
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
.orange{
    background-color: orange;
    color : white;
    margin-top: 30%;
    margin-left : 70%;
    padding: 10px 40px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
}
.orange:hover{
    color:orange;
    background-color: white;
    border-color: orange;
    cursor : pointer;
    
}
.btn-outline-info{
  margin-right: 70%;
  margin-top: 20px;
padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 25px;
}
</style>
