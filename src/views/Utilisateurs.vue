<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <UtilisateursTables />
      </div>
    </div>
  </div>
</template>

<script>

import UtilisateursTables from "./components/UtilisateursTables";


export default {
  name: "utilisateursTables",
  components: {
    UtilisateursTables
}
};
</script>
