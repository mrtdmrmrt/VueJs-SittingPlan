<template>
    <div class="add-container container-fluid d-flex flex-column justify-content-center align-items-center">
        <div class="card shadow pt-2 pb-2" style="width: 30rem;">
            <div class="card-body">
                <h5 class="card-title">Kat İçin Masa Ekle</h5>
                <input v-model="addTable" type="text" class="form-control mt-3 mb-3" placeholder="Masa ismi giriniz..">
                <a @click="$emit('hideAddContainerEvent',true)"  class="card-link btn btn-md danger">Vazgeç</a>
                <a @click="$emit('hideAddContainerEvent',add(),true)" class="card-link btn btn-md orange">Ekle</a>
            </div>
        </div>
    </div>

</template>

<script>
import {dataMixin} from "../../dataMixin"
export default {
    data(){
        return {
            addTable : ""
        }
    }, 
     methods : {
        add(){ 
            if(this.addTable !== ""){
                axios.post("http://avengersacc01:3535/api/Desk/Post",{ 
                    FloorId: this.$route.params.floorId,
                    Name: this.addTable
                })
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });
                this.$store.dispatch("setTable",this.addTable)
                this.addTable = ''
            }
        }
     }
}
</script>

<style scoped>
.card-body .danger{
    background-color: red;
    color : white;
}
.card-body .danger:hover{
    color:red;
    background-color: white;
    border-color: red;
}


.card-body .orange{
    background-color: orange;
    color : white;
}
.card-body .orange:hover{
    color:orange;
    background-color: white;
    border-color: orange;
}
</style>
