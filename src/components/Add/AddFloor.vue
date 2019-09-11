<template>
<!--container-fluid -->
    <div id="div1" class="add-container container-fluid d-flex flex-column justify-content-center align-items-center" >
        <div id="div2" class="card shadow pt-2 pb-2"  style="width: 30rem;">
            <div class="card-body" >
                <h5 class="card-title">Kat Ekle</h5>
                <input v-model="katEkle" ref="katTextInput" :class="{'is-invalid' : isInvalid}" type="text" class="form-control mt-3 mb-3" placeholder="Kat ismi giriniz..">
                <a @click="$emit('hideAddContainerEvent',true)"  class="card-link btn btn-md danger">Vazgeç</a>
                <a @click="$emit('hideAddContainerEvent',ekle(),true)" class="card-link btn btn-md orange">Ekle</a>
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
            katEkle : "",
            isInvalid : false
        }
    },
    methods : {
        ekle(){
            /*
            //vuex de ki action içinde ki setFloor a this.katEkle gönderildi
            this.$store.dispatch("setFloor",this.katEkle)
            */
           if(this.katEkle !== ""){
               console.log("kat ismi:", this.katEkle);

                axios.post("http://avengersacc01:3535/api/Floor/Post",{
                    Name: this.katEkle
                })
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });
               

                this.$store.dispatch("setFloor",this.katEkle)//katEkle'yi gönderdik
                this.katEkle = ''
                this.$nextTick(()=>this.$refs.katTextInput.focus())//nuxtJs özelliği imlecin inputta kalmasını sağlar
                 this.isInvalid = false
            }else{
                this.isInvalid = true
            }
        }
    },created() {
			this.getSittingPlanFloorData()
			.then(response => {
                this.floorSittingPlanData = response.data;
                // console.log(this.floorSittingPlanData[].Name)
          
          
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