<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <CartesTable1 />
      </div>
    </div>
  </div>
</template>

<script>

import CartesTable1 from "./components/CartesTable1.vue";

export default {
  name: "CartesMag",
  components: {
    CartesTable1,
},
};



</script>

<style>
.bg-gradient-primary {
    background-image: linear-gradient(310deg, #f53939 0%, #fbcf33 100%)!important;
}
.alert-secondary1 {
    background-image: linear-gradient(310deg, #17ad37 0%, #fa963a 100%)!important;
}


</style>
