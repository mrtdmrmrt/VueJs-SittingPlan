<template>
    <div class="container">
      <KisiListesi />
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
            showAdd : false
        
        
        }
    }
   


}
</script>
<style scoped>

</style>