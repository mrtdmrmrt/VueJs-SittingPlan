<template>
    <div id="div1" class="add-container container-fluid d-flex flex-column justify-content-center align-items-center" >
        <div id="div2" class="card shadow pt-2 pb-2"  style="width: 30rem;">
            <div class="card-body" >
                <h5 class="card-title">Kat Ekle</h5>
                <input v-model="addFloor" ref="katTextInput" type="text" class="form-control mt-3 mb-3" placeholder="Kat ismi giriniz..">
                <a @click="$emit('hideAddContainerEvent',true)"  class="card-link btn btn-md danger">Vazgeç</a>
                <a @click="$emit('hideAddContainerEvent',add(),true)" class="card-link btn btn-md orange">Ekle</a>
            </div>
        </div>
    </div>
</template>

<script>
import {dataMixin} from "../../dataMixin"
/*
window.onload=function(){
    var hideDiv = document.getElementById('div1');
    document.onclick=function(div){
        if(div.target.id !=='div1'){
            hideDiv.style.visibility=' visible';
        }
    }
}
*/
/*
document.onclick = function () {
    if (!event.target.matches("#div2") && !event.target.matches("#div2 *") && !event.target.matches(".open-pop-up") && !event.target.matches(".open-pop-up *")) {
        $("#div1").addClass("gizle");
    }
};
*/
// $(document).on('click', function (e) {
//     if ($(e.target).closest("#div1").length !== 0) {
//         $("#div2").addClass("gizle");
//     }
   
    
// }); 

export default {
    mixins : [dataMixin],
    data(){
        return{
            floorSittingPlanData: [],
            addFloor : "" 
        }
    },
    methods : {
        add(){
           if(this.addFloor !== ""){
               console.log("kat ismi:", this.addFloor);

                axios.post(this.baseURL+"/api/Floor/Post",{ //Apiye kayıt edildiği yer
                    Name: this.addFloor
                })
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });
                this.$store.dispatch("setFloor",this.addFloor)//addFloor'yi gönderdik
                this.addFloor = ''
           }
                
        }
    },
    created() {
			this.getSittingPlanFloorData()
			.then(response => {
                this.floorSittingPlanData = response.data;
			})
		} 
}
</script>

<style scoped>

.gizle{
    visibility: hidden!important;

}
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