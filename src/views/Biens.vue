<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-12">
          <BiensTable />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import BiensTable from "./components/BiensTable";
  
  
  export default {
    name: "BiensTables",
    components: {
      BiensTable
  },
  };
  </script>
  