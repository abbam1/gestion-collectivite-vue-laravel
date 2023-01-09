<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <ActivitesTable />
      </div>
    </div>
  </div>
</template>

<script>
import ActivitesTable from "./components/ActivitesTable";


export default {
  name: "activitesTable",
  components: {
    ActivitesTable
},
};
</script>
