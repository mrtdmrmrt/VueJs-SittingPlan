
<template>
<div>
  <Header />
   <transition
   enter-class=""
   enter-active-class="animated bounceInLeft"
   leave-class=""
   leave-active-class="" 
   appear>
    <router-view></router-view>
   </transition>
<div>
</div>   

</div>
</template>
<script>

import Header from "./components/Header"

export default {
  components : {
    Header

  }
}
</script>

<style>
.enter-active-class {
    transition: opacity 0.5s;

  }
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
    .card{
       border-radius: 10px;
      border: 2px solid orange;
    }
    .card-body a{
    cursor: pointer;
}

</style>