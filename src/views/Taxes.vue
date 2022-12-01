<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <TaxesTable />
      </div>
    </div>
  </div>
</template>

<script>
import TaxesTable from "./components/TaxesTable";


export default {
  name: "taxesTables",
  components: {
    TaxesTable
},
};
</script>
