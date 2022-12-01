<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <RecensementsTable />
      </div>
    </div>
  </div>
</template>

<script>
import RecensementsTable from "./components/RecensementsTable";


export default {
  name: "recensementsTables",
  components: {
    RecensementsTable
}
};
</script>
