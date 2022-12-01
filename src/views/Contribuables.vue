<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <ContribuablesTable />
      </div>
    </div>
  </div>
</template>

<script>
import ContribuablesTable from "./components/ContribuablesTable";


export default {
  name: "contribuablesTable",
  components: {
    ContribuablesTable
}
};
</script>
