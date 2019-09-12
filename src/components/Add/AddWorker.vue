<template>
    <div class="container">
        
        <div class="d-flex flex-column justify-content-center align-items-center" >
            <div class="card shadow pt-2 pb-2" style="width: 30rem;">
                <div class="card-body" >
                    <h5 class="card-title">Çalışan Ekle</h5>
                    <input type="text" class="form-control mt-3 mb-3" placeholder="Lütfen isim giriniz..">
                    <input type="text" class="form-control mt-3 mb-3" placeholder="Lütfen soyisim giriniz..">
                    <input type="text" class="form-control mt-3 mb-3" placeholder="Lütfen E-Posta giriniz..">
               
                    <a @click="$emit('hideAddContainerEvent',add(),true)" class="card-link btn btn-md orange">Ekle</a>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.card-body .orange{
    margin-left:40%;
    background-color: orange;
    color : white;
}
.card-body .orange:hover{
    color:orange;
    background-color: white;
    border-color: orange;
}
.card-body {
    margin-top: 10px;
}
.d-flex{
    margin-top:20px;
}
</style>