
<template>
<div>
  <Header />
    <!--<Test :vuexDataGet="vuexDataGet" />-->
  <router-view></router-view>

<div>
</div>   

</div>
</template>
<script>
import Header from "./components/Header"
import Test from "./components/Test"

import Kat from "./pages/Kat"
//import Masa from "./pages/Masa"

export default {
  data(){
    return {
      componentsLists:[]
    }
  },
  computed: {
    vuexDataGet(){
      return this.$store.getters.getData
      
    }
  },
  components : {
    Header,
    Test
   // Kat,
  //  Masa
  },
  created(){
    this.$store.dispatch("getComponentConfig")


  }
  
}
</script>
<style>

.add-container {
      background-color: rgba(0, 0, 0, .8);
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      z-index: 1;
      visibility: hidden;
      /*visibility görünüp görünmemesini sağlar bu yüzden update de bununla oynuyca*/
    }
    .show-add-container{
      visibility: visible!important;
    }
</style>