<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <StructuresTable />
      </div>
    </div>
  </div>
</template>

<script>
import StructuresTable from "./components/StructuresTable";


export default {
  name: "structuresTables",
  components: {
    StructuresTable
},
};
</script>
