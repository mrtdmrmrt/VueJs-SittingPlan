<template>
    <div class="add-container container-fluid d-flex flex-column justify-content-center align-items-center">
        <div class="card shadow pt-2 pb-2" style="width: 30rem;">
            <div class="card-body">
                <h5 class="card-title">FISHBONE İçin Sandalye Ekle</h5>
                <input type="text" v-model="addChair" ref="chairTextInput" :class="{'is-invalid' : isInvalid}"  class="form-control mt-3 mb-3" placeholder="Sandalye ismi giriniz..">
                <a @click="$emit('hideAddContainerEvent',true)"  class="card-link btn btn-md danger">Vazgeç</a>
                <a @click="$emit('hideAddContainerEvent',add(),true)" class="card-link btn btn-md orange">Ekle</a>
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
            addChair : "",
            isInvalid : false
        }
    }, 
     methods : {
        add(){ 
            console.log(this.addChair)
            if(this.addChair !== ""){
               
                console.log("add")
                axios.post(this.baseURL+"/api/Chair/Post",{ 
                    DeskId: parseInt(this.$route.params.tableId)
                    
                })
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });
               

                this.$store.dispatch("setChair",this.addChair)
                this.addChair = ''
                this.$nextTick(()=>this.$refs.chairTextInput.focus())
                 this.isInvalid = false
            }else{
                this.isInvalid = true
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