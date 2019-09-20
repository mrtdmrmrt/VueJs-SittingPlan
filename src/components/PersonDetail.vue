<template>
    <div class="container">
        <h1 class="title">Sandalye {{chairId}} de Oturan Kişi </h1>
        <hr style="border: 2px solid orange;">
      <!--  <Alert v-if="filteredArray({chairId:chairId}) == false"/> -->
        <ul style="list-style-type:none;" class="list-group" v-for="(chair,index) in filteredArray({chairId:chairId})" :key="index">
             <li class="list-group-item" >
                <strong>  Adı : </strong> {{chair.Person.Name}}
            </li>
                    
            <li class="list-group-item" >
                <strong>Soyadı : </strong> {{chair.Person.Surname}}    
            </li>
                    
            <li class="list-group-item" >                            
                <strong> E-Posta : </strong> {{chair.Person.Mail}}
            </li>  
            <button @click="kaldir(chair.Person.Name , chair.Person.Surname, chair.Person.Mail)" class="btn danger">Kaldır</button>
        </ul>
        <button @click="geri('chair')" class="btn btn-outline-info"> Geri </button>
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
        },

        kaldir(name,surname,email){
            console.log(this.chairId)
            axios.post(this.baseURL+"/api/Chair/NotSeat",{ //Apiye kayıt edildiği yer
                    chairid: this.chairId
                })
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });
            alert("İşlem Başarılı..")
            this.$router.push({name : "chair"})
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
ul .danger{
    background-color: white;
    color : red;
    margin-left: 40%;
    margin-top: 20px;
    border-color: red;
}
 ul .danger:hover{
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