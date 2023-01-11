<template>
  <footer class="py-5 footer">
    <div class="container">
      <div class="row">
        <div class="mx-auto mt-1 text-center col-8">
          <p class="mb-0 text-secondary">
            Copyright © {{ new Date().getFullYear() }} Conçue par <b>Trésor Public.</b>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer"
};
</script>
