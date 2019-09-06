<template>
    <div class="container">
        <h1>selammm</h1>
        <ul >
            <li v-for="(data,index) in vuexDataGet[0]" :key="index">
                {{data.name}}
                </li>
        </ul>
    </div>
</template>
<script>
export default {
    
    props : {
        vuexDataGet : {
            required : true,
            type : Array
        }
        
    }
    
}
</script>