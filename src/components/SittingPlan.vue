<template>
    <div class="container">
        <br>
        
        <ul class="list-group">
            <li  v-for="(kat,index) in sittingPlan" :key="index" >
                {{kat.Name}} Katı
              
                 <ul v-for="(masa,index) in kat.Desks" :key="index">
                    <li >
                        {{masa.Name}} Masası
                      

                        <ul v-for="(sandalye,index) in masa.Chairs" :key="index">
                            <li >
                                {{index+1}}.Sandalye {{sandalye.Person ? sandalye.Person.Name : 'Boş' }}
                            </li>
                        </ul>

                    </li>
                </ul>
               
               
                
            </li>
            
        </ul>
    </div>
</template>
<script>
import {dataMixin} from "../dataMixin"
export default {
    mixins : [dataMixin],
    data(){
        return {
            sittingPlan : []
            
        }
    },
    
    created(){
        this.getSittinPlan()
		.then(response => {
          this.sittingPlan = response.data;
          console.log(this.sittingPlan)
        })
    }
    
}
</script>