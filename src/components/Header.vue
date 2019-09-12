<template>

    <nav class="navbar navbar-light bg-light"> 
        <a class="navbar-brand">Sitting Plan</a>
        
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
.navbar a{
		text-align: center;
        margin-top: 5px;
        margin-left: 45%;
        }

</style>
