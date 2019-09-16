<template>
    <nav class="navbar navbar-light bg-light"> 
        
        <li class="navbar-brand anaSayfa">
            <router-link class="navbar-brand" 
            to="/"
            tag="li">Sitting Plan</router-link>
        </li>
        
        <li class="navbar-brand">
            <router-link class="navbar-brand" 
            to="/worker"
            tag="li">Çalışan Ekle</router-link>
        </li>
        
    </nav>
  
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navbar-brand li{
    cursor: pointer;
}
.navbar .anaSayfa{
		text-align: center;
        margin-top: 5px;
        margin-left: 45%;
        }

</style>
