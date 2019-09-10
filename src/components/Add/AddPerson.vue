<template>
    <div class="add-container container-fluid d-flex flex-column justify-content-center align-items-center">
        <div class="card shadow pt-2 pb-2" style="width: 30rem;">
            <div class="card-body">
                <h5 class="card-title">Kişi Güncelle</h5>
                <input type="text" class="form-control mt-3 mb-3" placeholder="Kişinin ismini giriniz..">
                <a @click="$emit('hideAddContainerEvent',true)"  class="card-link btn btn-md danger">Vazgeç</a>
                <a @click="$emit('hideAddContainerEvent',true)" class="card-link btn btn-md orange">Güncelle</a>
            </div>
        </div>
    </div>

</template>

<script>

export default {

}
</script>

<style scoped>
.card-body .danger{
    background-color: red;
    color : white;
}
.card-body .danger:hover{
    color:red;
    background-color: white;
    border-color: red;
}


.card-body .orange{
    background-color: orange;
    color : white;
}
.card-body .orange:hover{
    color:orange;
    background-color: white;
    border-color: orange;
}
</style>