<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <CartesContribuablesTables />
      </div>
    </div>
  </div>
</template>

<script>
import CartesContribuablesTables from "./components/CartesContribuablesTables";


export default {
  name: "cartesContribuablesTables",
  components: {
    CartesContribuablesTables
}
};
</script>
