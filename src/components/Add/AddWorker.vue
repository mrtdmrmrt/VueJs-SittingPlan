<template>
    <div class="container">
        <div class="d-flex flex-column justify-content-center align-items-center" >
            <div class="card shadow pt-2 pb-2" style="width: 30rem;">
                <div class="card-body" >
                    <h5 class="card-title">Çalışan Ekle</h5>
                    <form @submit.prevent="add">
                        <div class="form-group">
                            <input v-model="name" type="text" class="form-control mt-3 mb-3" placeholder="Lütfen isim giriniz..">
                            <input v-model="surname" type="text" class="form-control mt-3 mb-3" placeholder="Lütfen soyisim giriniz..">
                            <input 
                            @input="$v.email.$touch()"
                            v-model="email" 
                            type="email" 
                            class="form-control mt-3 mb-3" 
                            placeholder="Lütfen E-Posta giriniz..">
                            <small v-if="!$v.email.email" class="form-text text-danger">*Lütfen geçerli bir email giriniz..</small>
                        </div>
                    </form>
                    
                    <a @click="add()" :class="{'disabled ':showButton}" class="card-link btn btn-md orange">Ekle</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {dataMixin} from "../../dataMixin"
import {required,email} from "vuelidate/lib/validators"
export default {
    mixins : [dataMixin],
    data(){
        return {   
            name : '',
            surname : '',
            email : '',
            showButton : true
        }
    },
    validations : {
        email: {
            required,
            email
        }
    },
   
    methods : {
        add(){ 
            if(this.name !== "" && this.surname !== "" && this.email !== "" && $v.email.email == true){
                axios.post(this.baseURL+"/api/Person/Post",{
                    Name: this.name,
                    Surname: this.surname,
                    Mail: this.email
                })
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });
                this.name = '';
                this.surname = '';
                this.email = '';
                alert("İşlem Başarılı..")   
                this.navigateToHome()
            }else{
                alert("Lütfen tüm bilgileri giriniz..")
                this.navigateToWorker()
            }
        },
        navigateToHome(){
        	this.$router.push("/");  
        },
        navigateToWorker() {
            this.$router.push("/worker");
        }
    },
    updated (){
        console.log()
        if(this.name !== "" && this.surname !== "" && this.email !== "" && this.$v.email.email)
        {
            this.showButton = false
        }
        else{
            this.showButton = true
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