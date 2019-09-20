<template>
    <div class="container">
        <br>
        <div class="row">
            <div class="col-md-6">
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
            <div class="col-md-6">
                <h5 class="title">Sandalyede Oturmayan Personel Listesi</h5>
                <ul class="list-group">
                    <li v-for="(person,index) in sittingPlanPersonGetNotSeat" :key="index">
                        {{index+1}}) {{person.Name}}
                    </li>
                </ul>
            </div>
        </div>
   
        <hr>
        <button @click="indir" class="btn btn-primary">JSON Kat Planı İndir</button>
        <div class="row">
            <ul>
                <li  v-for="(data,index) in sittingPlanChairData" :key="index">
                      {{data.Person ? data.Person.Name : 'boş'}}
                </li>
            </ul>

            <table style="width:100%" v-for="(floor,index) in sittingPlan" :key="index">
                <hr>
                <br>
                <br>
                {{floor.Name}}
                
                <table v-for="(desk,index) in floor.Desks" :key="index">
                    <table >
                        <tr>
                            <td><a href="#" style="visibility: hidden;" class="btn btn-outline-primary"></a></td>
                            <td v-for="(chair,index) in desk.Chairs" :key="index"><a href="#" class="btn btn-outline-primary"> {{chair.Person ? chair.Person.Name : 'Boş' }}</a></td>
                            <td><a href="#" class="btn btn-outline-primary">7</a></td>
                            <td><a href="#" class="btn btn-outline-primary">6</a></td>
                            <td><a href="#" style="visibility: hidden;" class="btn btn-outline-primary"></a></td>
                        </tr>
                        <tr align="center">
                            <td><a href="#" class="btn btn-outline-primary">1</a></td>

                            <td colspan="3" class="desk-table"><p class="desk">  {{desk.Name}} </p></td>

                            <td><a href="#" class="btn btn-outline-primary">5</a></td>
                        </tr>
                        <tr>
                            <td><a href="#" style="visibility: hidden;" class="btn btn-outline-primary">1</a></td>
                            <td><a href="#" class="btn btn-outline-primary">2</a></td>
                            <td><a href="#" class="btn btn-outline-primary">3</a></td>
                            <td><a href="#" class="btn btn-outline-primary">4</a></td>
                            <td><a href="#" style="visibility: hidden;" class="btn btn-outline-primary">5</a></td>
                        </tr>
                    </table>
                </table>
            </table>
        </div>

    </div>
</template>
<script>
import {dataMixin} from "../dataMixin"
export default {
    mixins : [dataMixin],
    data(){
        return {
            sittingPlanPersonGetNotSeat : [],
            sittingPlanChairData:[],
            sittingPlan : [],
            dataJson : null
            
        }
    },
    methods : {
         filteredArray(filter)
        {
             
          var filteredArray = this.sittingPlanChairData.filter(function(obj,ind)
          {
              console.log(obj.DeskId === filter.tableId)
              return obj.DeskId === filter.tableId;
              
          });
        
          return filteredArray.length > 0 ? filteredArray : [];
         
        },
        cevir(){
            this.dataJson = JSON.stringify(this.sittingPlan);
        },
        indir(){
            var fileName = 'myData.json';

            // Create a blob of the data
            var fileToSave = new Blob([JSON.stringify(this.dataJson)], {
                type: 'application/json',
                name: fileName
            });

            // Save the file
            saveAs(fileToSave, fileName);
          
        }
    },
    
    created(){
        this.getSittingPlanChairData()
			    .then(response => {
                    this.sittingPlanChairData = response.data;
            })
        this.getSittinPlan()
		.then(response => {
          this.sittingPlan = response.data;
        this.cevir();
        })
        this.getSittingPlanPersonGetNotSeat()
			    .then(response => {
                    this.sittingPlanPersonGetNotSeat = response.data;
			})
       
    }
    
}
</script>

<style scoped>

.desk{
    border: 2px solid #666;
  
    width: 900px;
    height: 100px;
}

.list-group{
    width: 300px;
    height: 300px;
    overflow: auto;
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