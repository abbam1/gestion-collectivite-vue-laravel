<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <ComptesTaxesTable />
      </div>
    </div>
  </div>
</template>

<script>

import ComptesTaxesTable from "./components/ComptesTaxesTable";

export default {
  name: "ComptesTaxes",
  components: {
    ComptesTaxesTable,
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

.sidenav{
z-index: 0!important; 

}

</style>
