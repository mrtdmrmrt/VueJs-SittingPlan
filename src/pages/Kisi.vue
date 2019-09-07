<template>
    <div class="container">
      <KisiListesi 
      :vuexDataGet="vuexDataGet"
      :vuexIdGet="vuexIdGet" 
      :vuexMasaIdGet="vuexMasaIdGet"
      :vuexSandalyeIdGet="vuexSandalyeIdGet"/>
    </div>
</template>
<script>
import KisiListesi from "../components/KisiListesi"
export default {
    components : {
        KisiListesi
    },
    data(){
        return {
        showAdd : false,
        tiklanan: null
        
        }
    },
    computed: {
        vuexDataGet(){
            return this.$store.getters.getData
        },
        vuexIdGet(){
            return this.$store.getters.getKatTiklananId
        },
        vuexMasaIdGet(){
            return this.$store.getters.getMasaTiklananId
        },
        vuexSandalyeIdGet(){
            return this.$store.getters.getSandalyeTiklananId
        }
        
        
    }
    
    
     
    
  

}
</script>
<style scoped>

</style>