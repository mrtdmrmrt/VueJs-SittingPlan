<template>
    <div class="container">
        
        <div class="d-flex flex-column justify-content-center align-items-center" >
            <div class="card shadow pt-2 pb-2" style="width: 30rem;">
                <div class="card-body" >
                    <h5 class="card-title">Çalışan Ekle</h5>
                    <input v-model="name" type="text" class="form-control mt-3 mb-3" placeholder="Lütfen isim giriniz..">
                    <input v-model="surname" type="text" class="form-control mt-3 mb-3" placeholder="Lütfen soyisim giriniz..">
                    <input v-model="eMail" type="text" class="form-control mt-3 mb-3" placeholder="Lütfen E-Posta giriniz..">
               
                    <a @click="add() , navigateToHome()" class="card-link btn btn-md orange">Ekle</a>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import {dataMixin} from "../../dataMixin"
export default {
    mixins : [dataMixin],
    data(){
        return { 
            
            name : '',
            surname : '',
            eMail : ''
        }
    },
    methods : {
        add(){
            
            if(this.name !== "" && this.surname !== "" && this.eMail !== ""){
                alert(this.name +" " + this.surname +" "+ this.eMail)
                axios.post(this.baseURL+"/api/Person/Post",{
                    Name: this.name,
                    Surname: this.surname,
                    Mail: this.eMail
                })
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });
                this.name = '';
                this.surname = '';
                this.eMail = '';
                console.log("İşlem Başarılı..")   
            }else{
                alert("Lütfen tüm bilgileri giriniz..")
            }
        },
        navigateToHome(){
        	this.$router.push("/");  
      	}
    }
    
    
}
</script>

<style scoped>
.card-body .orange{
    margin-left:40%;
    background-color: orange;
    color : white;
}
.card-body .orange:hover{
    color:orange;
    background-color: white;
    border-color: orange;
}
.card-body {
    margin-top: 10px;
}
.d-flex{
    margin-top:20px;
}
</style>